---
sidebar_label: Operador lazy state
title: El operador lazy state
translation_source_hash: 13268eb8864e380f9070d38359a4cb3ab44acf65
translation_review_status: machine
---

## El operador lazy state {#the-lazy-state-operator}

:::tip Funcionalidad experimental

El operador lazy state llegó a OpenFn en abril de 2024. Todavía se considera una
funcionalidad experimental, pero funciona muy bien, ¡y te animamos a usarlo!

Si tienes comentarios, problemas o sugerencias sobre el operador lazy state,
¡nos encantaría saber de ti en la [comunidad](https://community.openfn.org)!
También puedes abrir un issue en [GitHub](https://github.com/openfn/kit/issues).

:::

El operador lazy state es una sintaxis abreviada que facilita leer el state
cuando pasas datos a una operación.

En lugar de escribir `state.data` para acceder a algo del state, puedes usar
`$`, así:

```js
get($.data.url);
```

El `$` garantiza que el valor que se pasa a la operación se resuelva en el
momento correcto. Piensa en ello como pasar una ruta a una parte del state, en
lugar de pasar el valor de esa ruta.

Lo bueno es que básicamente puedes ignorar por completo la sección anterior y no
pensar demasiado en cuándo se evalúa el state. Solo lee de `$` como si fuera tu
objeto state, y el runtime de OpenFn resolverá el valor correctamente en el
momento de la ejecución.

El símbolo `$` es en realidad solo azúcar sintáctico para `(state) => state` (en
la mayoría de los casos, solo hacemos un reemplazo de texto al compilar tu
código). Estas dos sentencias se comportan exactamente igual:

```js
get($.data.url);
get((state) => state.data.url);
```

Lo llamamos "lazy state" (state diferido) porque el motor del runtime resuelve
la referencia justo antes de usarla. Así se evitan muchos de los problemas de
asincronía de JavaScript que se explican en
[Leer el state de forma diferida](/jobs/operations.md#reading-state-lazily).

:::tip $ solo funciona dentro de las operaciones

`$` solo funciona dentro de una expresión que se pasa a una operación. Dicho de
otro modo, solo puedes usarlo donde podrías escribir `(state) => state` en su
lugar (como en el ejemplo anterior).

:::

## Ejemplos de uso {#usage-examples}

Los siguientes fragmentos de código muestran algunas formas de usar el operador
lazy state. Cada ejemplo se puede reescribir sin `$`, pero con él la sintaxis es
más corta, más legible y más expresiva.

El uso básico es simplemente pasar el state a una operación:

```js
upsert('patient', $.data.patients[0]);
```

Puedes usarlo dentro de un objeto (siempre que ese objeto se pase a una
operación):

```js
create('agent', {
  name: $.patient.name,
  country: $.patient.country,
});
```

Puedes usarlo dentro de una plantilla de string:

```js
get(`/patients/${$.patient.id}`);
```

O dentro de otras expresiones, como una concatenación:

```js
create({
  name: $.patients[0].first_name + ' ' + $.patients[0].last_name,
});
```

O en operaciones matemáticas:

```js
create({
  profit: $.report.revenue - $.report.expenses,
});
```

Puedes usarlo al mapear estructuras de datos:

```js
create('user', {
  countryCode: countries[$.location.country],
});
```

Y puedes usarlo en operaciones anidadas, como con `each()`:

```js
each($.data.patients,
  post(`patients/${$.data.patient.id}`, $.data.patient)
);
```

## $ no es state {#-is-not-state}

El operador `$` **no** es un alias de `state`.

No se puede usar en lugar de la variable `state`. No se le puede asignar un
valor ni puede estar en el lado izquierdo de una asignación, y solo se puede
usar dentro de un argumento de una función.

Esto también significa que el operador lazy state solo sirve para LEER el state.
No se puede usar para asignar valores directamente al state.

Todos estos ejemplos son errores:

```js
❌ const url = $.data.url;
get(url);

❌ get(() => $.data.url);

❌ $.data.x = fn();

❌ fn(state => {
  $.data.x = 10;
});
```

<details>
<summary>Reglas de compilación para usuarios avanzados</summary>

¿Cómo funciona el operador lazy state? La "magia" está en el compilador.

En pocas palabras, cada vez que el compilador ve `$` en tu código, lo reemplaza
por `(state) => state`. Así:

```
get($.data.url) // compiles to get((state) => state.data.url)
```

En la práctica, las reglas son un poco más complicadas. Cuando ve un operador
`$`, el compilador primero comprueba que `$` no se haya declarado como variable
o parámetro. Si se declaró, lo ignora por completo.

Pero si considera que `$` es un operador de state, el compilador primero
reemplaza el símbolo `$` por `state`, luego busca la operación a la que se está
llamando y, por último, envuelve el argumento en una función flecha (si todavía
no lo está).

```
get({ url: $.data.url }) // compiles to get((state) => { url: state.data.url })
```

Este "hoisting" de la función flecha permite usar expresiones más complejas e
interesantes con lazy state, como plantillas de string o búsquedas dinámicas en
objetos.

Si tienes curiosidad (o necesitas resolver algún problema), puedes usar el
comando `openfn compile` de la CLI para ver el código compilado, que te mostrará
cómo trata el compilador tus operadores de state.

</details>
