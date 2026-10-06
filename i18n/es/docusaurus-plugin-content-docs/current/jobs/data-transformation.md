---
sidebar_label: Transformación de datos
title: Transformación de datos
translation_source_hash: a4731145379c6ab801d158a4696762e407360d24
translation_review_status: machine
---

## Mapeo de objetos {#mapping-objects}

Un caso de uso común de `fn` en OpenFn es mapear, convertir o transformar un
objeto del sistema A al formato del sistema B.

A menudo lo hacemos en varios jobs del mismo workflow, para poder usar distintos
adaptors. Pero en este ejemplo trabajaremos con tres operaciones en un solo job
con el adaptor http: una para obtener los datos, otra para transformarlos y otra
para subirlos:

```js
// Fetch an object from one system
get('https://www.system-a.com/api/patients/123');

// Transform it
fn(state => {
  // Read the data we fetched
  const obj = state.data;

  // convert it by mapping properties from one object to the other
  state.uploadData = {
    id: obj.id,
    name: `${obj.first_name} ${obj.last_name}`,
    metadata: obj.user_data,
  };

  // Don't forget to return state!
  return state;
});

// Post it elsewhere
post('https://system-b.com/api/v1/records/123', (state) => state.uploadData);
```

:::tip Conversiones por lotes

Estos ejemplos muestran cómo convertir un solo objeto, pero a veces tenemos que
convertir muchos objetos a la vez.

Consulta el ejemplo de each() más abajo para ver cómo hacerlo con el operador
each.

También puedes usar una función map() o forEach() de JavaScript dentro de un
callback o de un bloque `fn`.

En general, es más fácil repartir la lógica del job en muchas operaciones de
nivel superior, cada una a cargo de una tarea, que tener unas pocas operaciones
muy anidadas.

:::

Esto está bien. De hecho, tener muchas operaciones que hacen cada una una tarea
pequeña es una buena práctica. Hace que el código sea más legible y fácil de
probar, y también más fácil de entender y de depurar cuando algo sale mal.

Sin embargo, todos los argumentos de una operación aceptan una función (lo que
permite referencias diferidas al state, como se describió antes), así que
podemos hacer la conversión directamente en la operación post, por ejemplo:

```js
// Fetch an object from one system
get('https://www.system-a.com/api/patients/123');

// Transform and post it elsewhere
post('https://system-b.com/api/v1/records/123', state => ({
  id: state.data.id,
  name: `${state.data.first_name} ${state.data.last_name}`,
  metadata: state.data.user_data,
}));
```

Usar bien estas funciones de resolución diferida es fundamental para escribir
buenos jobs de OpenFn.

## Iteración con each() {#iteration-with-each}

Un caso de uso muy común en la integración de datos es convertir datos de un
formato a otro. Normalmente, esto implica recorrer un array de elementos,
convertir los valores y mapearlos a un array nuevo.

En OpenFn, podemos usar el operador `each()` para hacerlo.

```js
each(
  '$.data.items[*]',
  get(state => `/patients/${state.data.id}`)
);
```

El operador `each()` recibe como primer argumento una cadena de JSON path, que
apunta a alguna parte del state. En JSON path, usamos `$` para referirnos a la
raíz, la notación de punto para encadenar una ruta y `[*]` para "seleccionar" un
array de elementos. El segundo argumento es una operación, que recibe cada
elemento al final del JSON path como `state.data`, pero por lo demás recibe el
resto del objeto state.

Así podemos recorrer cada elemento y volver a escribirlo en el state, así:

```js
fn((state) => {
  // Initialize an array into state to use later
  state.transformed = []
  return state;
})
each("$.items[*]", fn(state) => {
  // Pull the next item off the state
  const next = state.data;

  // Transform it
  const transformed = { ...next };

  // Write it back to the top-level transformed array on state
  state.transformed.push(transformed)

  // Always return state
  return state;
})
```

O podemos pasarle otra operación, como en este ejemplo de Salesforce:

```js
each(
  '$.form.participants[*]',
  upsert('Person__c', 'Participant_PID__c', state => ({
    Participant_PID__c: state.pid,
    First_Name__c: state.participant_first_name,
    Surname__c: state.participant_surname,
  }))
);
```

Cada participante se inserta o actualiza en Salesforce (`upserted`), con sus
campos de Salesforce mapeados a los valores del array `participants`.

:::info JSON paths

Usar una cadena de JSON path como primer argumento de `each()` permite que el
runtime evalúe de forma diferida el valor de esa ruta.
[Consulta Leer el state de forma diferida](/jobs/operations.md#reading-state-lazily).

No todas las operaciones admiten una cadena de JSON path. Consulta la
[documentación de cada adaptor](/adaptors) para orientarte.

:::

## Inicialización de variables {#variable-initialisation}

<!--
  I'm a bit iffy on this because actually in v2 you can just do const result = [] at the top of your job

  Is the fn block really better practice?
-->

Es habitual tener que declarar algunas variables al inicio del job. Pueden ser
valores estáticos para usar más adelante, funciones que se llaman varias veces a
lo largo del job o partes del state que queremos devolver al final.

Se considera una buena práctica usar un bloque `fn()` para hacerlo al inicio del
job, creando propiedades personalizadas en el state, por ejemplo:

```js
fn(state => {
  // Create an array to hold the final results of the job
  state.results = [];

  // Create a lookup index to be used during the job
  state.lookup = {};

  state.keyMap = {
    AccountName: 'C__Acc_Name', // capture various static mappings for transformation
  };

  state.maxPageSize = 200; // Define some config options

  state.convertToSF = item => {
    /* ... */
  }; // A function to be re-used

  return state;
});

// the rest of your job code goes here
get('/abc');

fn(state => {
  /* ... */

  // Only return the results array as output from the job
  return { result: state.results };
});
```
