---
title: Consejos de JavaScript
sidebar_label: Consejos de JavaScript
translation_source_hash: 7faca517b9178d0323cb188a0b80fdb54558b6ff
translation_review_status: machine
---

OpenFn admite todas las funciones modernas de JavaScript.

Esta sección destaca algunas funciones y operadores útiles de JavaScript que
pueden ayudarte a escribir código más limpio. No pretende ser una guía
exhaustiva, sino una referencia a algunas buenas técnicas sobre los aspectos más
nuevos del lenguaje.

### Usar la operación `fn(...)` del adaptor common {#using-the-fn-operation-from-the-common-adaptor}

Te recomendamos usar la operación `fn(...)` para manipular el state y aplicar
JavaScript personalizado que transforme, manipule y limpie los datos antes de
enviarlos a las aplicaciones de destino.

```js
fn(state => {
  //call state to edit
  //add your custom javascript here to manipulate state
  return state; //always return state
});
```

### Variables: var, let y const {#variables-var-vs-let-vs-const}

JavaScript ofrece tres formas distintas de declarar variables, y esto puede
resultar un poco confuso.

- `var` es una variable cuyo valor se puede reasignar. Puedes volver a declarar
  una `var` varias veces.
- `let` es básicamente lo mismo que una var, pero no se puede volver a declarar
  y sus reglas de alcance son un poco distintas.
- `const` se usa para variables cuyo valor no cambia.

En realidad no importa mucho qué estilo uses (salvo, quizás, si intentas asignar
un valor a una `const`).

De todos modos, la mayoría de los jobs de OpenFn se escriben con un estilo
bastante funcional, así que es posible que ni siquiera necesites declarar
variables.

<details>
<summary>¿Qué es la programación funcional?</summary>

La programación funcional es un estilo de programación cada vez más popular en
el JavaScript moderno.

En términos generales, la idea es reducir al mínimo el uso de sentencias de
control de flujo (como `if/else` o `for`) y usar en su lugar cadenas de
funciones. En la programación funcional, los datos pasan por un pipeline hasta
obtener el resultado que queremos. ¿Te suena?

```js
const items = [10, 109, 55];

// Imperative JS
const transformedItems = [];
for (const i of items) {
  if (i < 100) {
    transformedItems.push(i * 2);
  }
}

// Functional js
const transformedItems = items.filter(x => x > 100).map(x => x * 2);
```

La programación funcional suele ser más breve y concisa que la programación
imperativa habitual. Esto tiene su lado bueno y su lado malo, pero si estás
acostumbrado al estilo, suele ser muy legible y se traslada bien de un lenguaje
a otro.

</details>

La mayor parte del JavaScript moderno e idiomático se escribe con `const` y
`let`. Esto puede hacer que tu código sea más legible e intencional, y las
reglas son bastante sencillas:

- Usa `const` si no quieres que cambie el valor de una variable.
- Usa `let` si esperas que cambie el valor de una variable.

Esto puede complicarse un poco con los objetos y los arrays. Podemos asignar un
objeto a una const y aun así cambiar las propiedades del objeto. Lo mismo pasa
con los arrays. Todo esto tiene que ver con los punteros y con cómo JavaScript
almacena las variables: la clave es que no estás asignando un valor nuevo a la
variable, sino modificando el _contenido_ de la variable.

Mira estos ejemplos:

```js
// Example 1: Objects
const data = {};

// We can mutate the object here
// The data variable is still referencing the same object
data.name = 'OpenFn';

data = { name: 'Lightning' }; // This throws a runtime error because we are re-assigning the variable!

// Example 2: Arrays
const ids = [1, 2, 3];

// We can call functions on the ids array, which will mutate the array's contents
ids.push(4);
ids.pop();

// But we cannot re-assign the variable

ids = [4, 5, 6]; // This throws a runtime error because we are re-assigning the variable!
```

### Encadenamiento opcional {#optional-chaining}

JavaScript es un lenguaje sin tipos, lo cual es muy conveniente para los jobs de
OpenFn y suele facilitar las cosas.

Sin embargo, un problema común es que, al escribir cadenas largas de
propiedades, se lanza una excepción si falta alguna propiedad. Y esto pasa todo
el tiempo al obtener datos de servidores remotos.

El encadenamiento opcional permite que JavaScript deje de evaluar una cadena de
propiedades y devuelva undefined como resultado de toda la expresión:

```js
const x = a.b?.c?.d?.e;
```

En este ejemplo, si `c`, por ejemplo, no está definida, `x` recibe el valor
`undefined`. No se lanza ninguna excepción.

También puedes hacerlo con propiedades de tipo string, aunque la sintaxis es un
poco más engorrosa:

```js
const x = a.b['missing-link']?.d?.e;
```

También sirve para llamadas opcionales a funciones (es menos útil al escribir
jobs, pero lo incluimos para que esté completo):

```js
const x = a.b?.();
```

Puedes combinar el encadenamiento opcional con el operador de **"fusión de
nulos"** (nullish coalescing), que tiene un nombre estupendo. Funciona un poco
como una expresión ternaria o como un or: si lo que está a la izquierda del
operador devuelve `null` o `undefined`, se devuelve el valor de la derecha.

```js
const x = a.b?.c?.d?.e ?? 22;
```

En este ejemplo, si alguno de los valores de la cadena no está definido, `x`
recibe el valor 22.

### Funciones flecha {#arrow-functions}

Usamos funciones flecha en toda esta guía y suponemos que la mayoría de los
usuarios ya sabe usarlas.

Una función flecha es otra forma de escribir una función de JavaScript. Hay
varias razones por las que son populares en el JavaScript moderno:

- Se sienten ligeras, porque requieren menos sintaxis
- No tienen un alcance `this`, aunque esto es en gran parte irrelevante para
  programar en OpenFn (y, de hecho, para la mayoría de los frameworks modernos
  de JS)

Las funciones flecha son siempre anónimas (no tienen nombre), pero, por
supuesto, se pueden asignar a variables.

```js
function upperCase(name) {
  return name.toUpperCase();
}

const getName = () => {
  return name.toUpperCase();
};
```

Una función flecha puede contener una sola expresión y ningún cuerpo, y en ese
caso devuelve esa expresión:

```js
function getX() {
  return x;
}

const getX = () => x;
```

Este patrón hace que las funciones flecha sean ligeras y elegantes, y encaja muy
bien con los paradigmas de la programación funcional.

:::tip ¿Problemas para devolver un objeto?

Encierra siempre los objetos entre paréntesis cuando devuelvas un objeto desde
una función flecha:

```
post('wwww', () => ({ id: 'a', name: 'adam' }))
```

Cuando JavaScript ve una llave `{` después de una flecha, espera un bloque de
sentencias, no un objeto. Encerrar el objeto entre paréntesis le indica a
JavaScript que debe interpretar una expresión en lugar de un bloque.

:::

### Operadores rest y spread {#rest-and-spread-operators}

El operador spread o rest `...` sirve para varias cosas. Puede ser bastante
difícil de entender, pero en OpenFn tiene un par de usos muy útiles.

Primero, puedes **"esparcir"** (spread) o **"aplicar"** las propiedades y los
valores de uno o más objetos en un objeto nuevo. Es una forma muy práctica de
hacer una copia superficial de un objeto.

Funciona de forma muy parecida a `Object.assign(obj, first, second, third)`.

Así se hace una copia superficial con spread:

```js
const newState = {
  ...state,
};
```

Las propiedades se declaran en orden, así que puedes esparcir un objeto y luego
declarar más propiedades:

```js
const newState = {
  ...state
  data: {} // create a new data object but keep all other keys of state
}
```

Puedes esparcir varios objetos, que también se aplican en orden. Este ejemplo
aplica algunos valores predeterminados, luego los sobrescribe con lo que haya en
el state y, por último, sobrescribe la clave data.

```js
const newState = {
  ...defaults,
  ...state
  data: {} // create a new data object but keep all other keys of state
}
```

Esparcir de esta forma no afecta al objeto original (es decir, en el ejemplo
anterior, `defaults` y `state` no cambian). Pero recuerda que solo es una copia
superficial, y que los valores no primitivos usan punteros, no copias.

<details>
<summary>¿Qué es una copia superficial?</summary>

Hacer una copia superficial de un objeto significa copiar todas las claves y los
valores de primer nivel de ese objeto en un objeto nuevo.

Pero esto SOLO se aplica a las claves de primer nivel. Y si un valor contiene un
objeto, en realidad solo estás copiando un _puntero_ a ese objeto.

```js
const a = {
  x: 1,
  y: {
    values: [1, 2, 3]
  }
};

// declare b as a shallow clone of a
const b = {
  ... a
}

b.x = 2; // a.x is unchanged
b.y.values = []; // a.y.values is changed
b.y = 20' // a.y is unchanged
```

Una copia profunda significa que se copian todas las propiedades de todo el
árbol del objeto.

</details>

### Implementar reglas de mapeo y variables globales {#implementing-mapping-rules-and-global-variables}

Si tienes una lista global de variables o reglas de mapeo que quieres usar en
tus workflows, puedes agregarlas a tu job como una constante y hacer referencia
a ella tantas veces como quieras en la expresión del job. Consulta la
documentación sobre [especificaciones de mapeo](/design/mapping-specs.md) para
obtener más información sobre las variables globales.

```js
//Workflow step 1
//Global mapping rules you want to implement in your workflow
const locationMap = {
    //location_id from source app: location value in destination app
    01: 'Western Cape',
    02: 'Eastern Cape',
    03: 'Gauteng'
}
//First we use fn() to transform, map & clean our data
fn(state => {
    // Here we build the payload of our http request body...
    // We assume the input is an array of records
    const payload = state.data.map(record => ({
        location: locationMap[record.location_id] //translate location_id to the mapped value
        external_id: record.case_id
    }));

    return {...state, payload};
});

//Workflow step 2
//Then we post the payload built in the prior operation to create a record
post('/api/myEndpoint', {
  headers: {
    'Content-Type': 'application/json',
  },
  body: (state) => state.payload
});
```
