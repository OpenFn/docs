---
sidebar_label: Operaciones
title: Operaciones
translation_source_hash: 33c7730014de711a9d329f1afb74aa6c7312b32b
translation_review_status: machine
---

Las operaciones son funciones de JavaScript que expone un adaptor y que se usan
en el código del job para _hacer cosas_.

Las operaciones las proporciona un adaptor (conector). Cada adaptor exporta una
lista de funciones pensadas para interactuar con una fuente de datos en
particular. Por ejemplo, mira los adaptors de
[dhis2](/adaptors/packages/dhis2-docs) y
[salesforce](/adaptors/packages/salesforce-docs).

Todo lo que puedes lograr en OpenFn también se puede lograr con bibliotecas de
JavaScript existentes o con llamadas a APIs REST. El valor de los adaptors está
en que ofrecen funciones que lo hacen más fácil: se encargan de la autorización,
ofrecen una sintaxis más limpia y te ocultan los detalles de implementación.

Por ejemplo, así de simple es hacer una solicitud GET con el adaptor http:

```js
get('/patients');
```

El primer argumento de `get` es la ruta a la que se hace la solicitud (la
configuración le indica al adaptor qué URL base usar). En este caso pasamos una
cadena fija, pero también podemos pasar un valor del state:

```js
get(state => state.endpoint);
```

<details>
<summary>¿Por qué la función flecha?</summary>

Si tienes algo de experiencia con JavaScript, notarás que el ejemplo anterior
usa una función flecha para obtener la clave endpoint del state.

Pero ¿por qué no hacer simplemente esto?

```
get(state.endpoint);
```

El problema es que el valor del state debe resolverse de forma diferida (es
decir, justo antes de que el get se ejecute). Por cómo funciona JavaScript, si
escribimos el valor directamente, podría leerse antes de que se haya asignado
state.endpoint.

Para más detalles, salta a
[Leer el state de forma diferida](#reading-state-lazily).

</details>

El código de tu job solo debería contener operaciones en el nivel superior
(alcance superior). NO deberías incluir ninguna otra instrucción de JavaScript.
Hablaremos más de esto en un momento.

## Las operaciones se ejecutan en el nivel superior {#operations-run-at-the-top-level}

Las operaciones solo funcionan cuando están en el nivel superior del código de
tu job:

```js
get('/patients');
each('$.data.patients[*]', state => {
  item.id = `item-${index}`;
  return state;
});
post('/patients', dataValue('patients'));
```

OpenFn llama a tus operaciones en serie durante la ejecución del workflow y se
asegura de que cada una reciba el state correcto.

Si intentas anidar una operación dentro del callback de otra operación, fallará:

```js
get('/patients', { headers: { 'content-type': 'application/json' } }, state => {
  // This will fail because it is nested in a callback
  each('$.data.patients[*]', (item, index) => {
    item.id = `item-${index}`;
  });
});
post('/patients', dataValue('patients'));
```

Esto se debe a que una operación es una función "fábrica": cuando se ejecuta,
devuelve una nueva función que debe invocarse con el state. El runtime de OpenFn
solo maneja esto correctamente en el alcance superior. La buena práctica es
construir cada operación del pipeline en el nivel superior y dejar que el state
pase de una a otra de forma natural.

Si alguna vez necesitas sin falta una operación anidada, puedes invocarla de
inmediato y pasarle el state directamente, pero esto es un antipatrón y deberías
evitarlo:

```js
get('/patients', { headers: { 'content-type': 'application/json' } }, state => {
  each('$.data.patients[*]', (item, index) => {
    item.id = `item-${index}`;
  })(state); // anti-pattern: immediately invoke and pass state
});
post('/patients', dataValue('patients'));
```

## Leer el state de forma diferida {#reading-state-lazily}

Un problema común al escribir jobs es obtener el valor correcto del state en el
momento correcto. Mira este código:

```js
get('/some-data');
post('/some-other-data', state.data);
```

El `state.data` de la llamada a `post` se resolverá como `undefined` y el post
fallará. Esto se debe a que las operaciones son funciones fábrica: sus
parámetros se resuelven cuando se carga el módulo (antes de que se haya
ejecutado cualquier operación), así que `state.data` todavía no tiene un valor
asignado cuando `post` lo lee.

La solución es pasar una función en lugar de un valor, para que la evaluación se
posponga hasta que la operación se ejecute de verdad:

```js
get('/some-data');
post('/some-other-data', state => state.data);
```

Cuando `post` se ejecuta, resuelve cualquier argumento que sea una función
llamándola con el state actual. Este patrón de evaluación diferida es
fundamental para escribir jobs de OpenFn correctos. Consulta también el
[operador de state diferido](/jobs/lazy-state-operator.md) para una sintaxis
abreviada.

## Callbacks y fn() {#callbacks-and-fn}

:::caution

A partir de julio de 2024, los callbacks se irán eliminando de las APIs de los
adaptors. Consulta [Operaciones y promesas](#operations-and-promises) para ver
consejos sobre cómo usar callbacks con APIs de adaptors que no los admiten de
forma explícita.

:::

Muchas operaciones te dan acceso a una función callback.

Los callbacks se invocan con el state, ejecutan el código que quieras y deben
devolver el siguiente state. Por lo general, tu callback se invoca como el
último paso de una operación.

Esto es útil para interceptar y manipular el valor que devuelve una operación.

<details>
<summary>¿Qué es un callback?</summary>

Un callback es un patrón común en JavaScript.

Es algo difícil de entender en abstracto: un callback es una función que le
pasas a otra función para que esta la invoque en un momento determinado.

Se explica mejor con un ejemplo. Todos los arrays de JavaScript tienen una
función llamada `map`, que recibe un único argumento: un callback.

Array.map recorre cada elemento del array, invoca tu función callback con él,
guarda el resultado en un array nuevo y, cuando termina, devuelve ese array.

```js
const array = ['a', 'b', 'c'];
const result = array.map(item => {
  return item.toUpperCase();
});
console.log(array); // ['a', 'b', 'c'];
console.log(result); // ['A', 'B', 'C'];
```

Como en JavaScript las funciones son datos, podemos reescribir ese código así
(quizás quede un poco más legible):

```js
const array = ['a', 'b', 'c'];
const upperCase = item => {
  return item.toUpperCase();
};
const result = array.map(upperCase);
console.log(array); // ['a', 'b', 'c'];
console.log(result); // ['A', 'B', 'C'];
```

</details>

La función `fn()`, por ejemplo, SOLO te permite definir un callback. Esto es
útil para ejecutar código arbitrario: si quieres pasar a JavaScript puro, así es
como se hace:

```js
fn(state => {
  // declare a helper function
  const convertToFhir = item => {
    /* ... */
  };

  // Map data into a new format with native Javascript functions
  state.transformed = state.data.map(convertToFhir);

  // Always return the state
  return state;
});
```

Muchas otras operaciones aceptan un argumento callback. En ese caso, tu callback
se invoca con el state y debe devolver el state final como resultado de la
operación.

Por ejemplo, imagina que obtienes datos de una fuente de datos y recibes un
bloque de JSON. Quizás quieras filtrar esos datos antes de pasarlos a la
siguiente operación.

Podrías intentar, de forma ingenua, algo como esto, ¡pero no va a funcionar!

```js
get('/data'); // writes to state.data
state.data = state.data.filter(/* ... */); // This is invalid!
```

Podrías usar otra operación, como `fn` o `each`, y a menudo funcionan muy bien:

```js
get('/data');
fn(state => {
  state.data = state.data.filter(/* ... */);
  return state;
});
```

Pero también puedes usar una función callback, que suele quedar un poco más
ordenada:

```js
get('/data', {}, state => {
  state.data = state.data.filter(/* ... */);
  return state;
});
```

Lo que devuelva tu callback se usará como state de entrada de la siguiente
operación (o será el state final del job). Así que recuerda devolver SIEMPRE el
state.

Ten en cuenta que algunos adaptors escriben información interna en el state. Por
eso, por lo general deberías usar `return { ... state }` en lugar de
`return { data: state.data }`.

:::tip

¡Recuerda! Devuelve siempre el state desde un callback.

:::

## Operaciones y promesas {#operations-and-promises}

:::tip

El soporte para promesas se agregó en julio de 2024 en `@openfn/compiler@0.2.0`.
Está disponible en la CLI a partir de la versión 1.7.0 y en el worker de
Lightning a partir de la versión 1.4.0.

:::

Las operaciones se comportan como las promesas de JavaScript, ya que tienen las
funciones `.then()` y `.catch()`. Esto es útil para crear tus propios callbacks
y manejar errores.

:::info Nota para desarrolladores

El compilador es el que agrega el soporte para .then(). Técnicamente, las
operaciones no devuelven una promesa, sino una función, pero el compilador
modifica el código del job y envuelve la operación en una llamada a una promesa
diferida.

:::

### Callback con then() {#callback-with-then}

Puedes encadenar `then()` en cualquier operación. Recibe un callback que se
ejecuta cuando la operación termina.

El callback recibe el state que devuelve la operación y debe devolver el objeto
state que se pasará a la _siguiente_ operación.

Por ejemplo:

```js
get($.data.url).then(state => {
  console.log(state.data);
  return state; // always remember to return state!
});
```

Si conoces el patrón de callbacks de nuestros adaptors, `.then()` cumple
exactamente la misma función que un callback. Te da la oportunidad de
transformar el state que devuelve una operación.

Por lo general no necesitas un callback ni un `.then()`: puedes ejecutar las
operaciones en serie. El siguiente código es funcionalmente igual al ejemplo
anterior:

```js
get($.data.url);
fn(state => {
  console.log(state.data);
  return state; // always remember to return state!
});
```

`.then()` resulta especialmente útil al combinar operaciones con _state con
alcance_, como con `each()`:

```js
each($.items, post(`patient/${$.data.id}`, $.data));
```

:::tip

Puedes leer más sobre la operación `each()` en
[Iteración con each](/jobs/data-transformation.md#iteration-with-each).

:::

La función `each` recibe un array y, por cada elemento, invoca un callback con
un state con alcance. Es decir, toma tu objeto state y asigna el elemento de la
iteración a `state.data`. Dicho de otro modo, dentro del callback, `state.data`
tiene como _alcance_ cada elemento del array.

```js
each($.items, state => {
  console.log(state.data); // each item in the items array
  console.log(state.index); // the current index of iteration
  return state;
});
```

Así, en el ejemplo anterior, cada elemento de `state.items` se pasará a una
función HTTP `post()`, que incluirá el id en una URL y subirá el elemento al
servidor.

¿Y si quieres hacer algo con el state con alcance DESPUÉS de la solicitud?
Quizás quieras revisar el código de estado y registrar un error, o modificar los
datos antes de volver a escribirlos en el state.

Para esto puedes encadenar `operation().then()`:

```js
each(
  $.items,
  post(`patient/${$.data.id}`, $.data).then(state => {
    state.completed.push(state.data);
    return state;
  })
);
```

Ahora esta expresión:

- Recorre cada elemento de `state.items`
- Llama a la operación post con el state con alcance (es decir, el elemento en
  `state.data`)
- Cuando el post termina, pasa el resultado como state con alcance al callback
  de `.then()`

### Manejo de errores con catch() {#error-handling-with-catch}

La mayoría de los adaptors lanzan un error cuando algo sale mal, lo que puede
hacer que el job (y quizás incluso el workflow) termine antes de tiempo.

Como cada operación tiene un `catch()`, puedes interceptar el error en el código
de tu job e incluso suprimirlo.

```js
get('patients').catch((error, state) => {
  state.error = error;
  return state;
});
```

El callback de error recibe dos argumentos: el error que lanzó el adaptor y el
objeto state.

Si quieres que la ejecución continúe, deberías devolver el objeto state desde el
catch. Ese state se pasará luego a la siguiente operación.

Si _sí_ quieres detener la ejecución, quizás con algún registro para depurar o
con un error diferente, deberías lanzar el error desde dentro del manejador
catch.

```js
get('patients').catch((error, state) => {
  console.log('Error ocurred faithing patients', error);
  throw error;
});
```
