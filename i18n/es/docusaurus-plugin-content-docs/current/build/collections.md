---
title: Colecciones
sidebar_label: Colecciones
translation_source_hash: bdf77a9b1e55431a03704daec4224dda3b396dbf
translation_review_status: machine
---

Las colecciones son una solución de almacenamiento de gran volumen y alto
rendimiento integrada en OpenFn. Mira
**[este video](https://www.youtube.com/watch?v=iXkkkzratzY&t=3s&ab_channel=OpenFn.org)**
para una introducción.

Las colecciones sirven para almacenar en búfer, guardar en caché y agregar datos
de webhooks, guardar archivos de mapeo grandes y compartir state entre
workflows.

En las colecciones se puede guardar una cantidad muy grande de elementos (del
orden de millones).

## Casos de uso {#use-cases}

### Almacenar datos en búfer {#buffering-data}

Muchas integraciones de OpenFn se disparan con un webhook, al que llama otro
sistema a partir de algún evento. Por ejemplo, cada vez que se registra un
paciente, un webhook llama a OpenFn para disparar un workflow y propagar el
evento de registro a otros sistemas.

Las colecciones pueden servir de búfer para estos eventos entrantes: guardan los
datos del evento en OpenFn para procesar después un lote de eventos al final del
día. Esto es especialmente útil con eventos de gran volumen, o cuando los
sistemas de origen tienen límites.

Con las colecciones, puedes guardar cada evento entrante en OpenFn y luego
ejecutar un workflow con un trigger cron que procese un lote de eventos de una
sola vez y envíe los resultados agregados, filtrados o transformados al
siguiente sistema.

### Estructuras de mapeo {#mapping-structures}

Un caso de uso típico en las integraciones de datos es almacenar objetos de
mapeo grandes. Estos objetos son pares clave-valor que asignan cadenas de un
sistema a las cadenas correspondientes de otro sistema. Por ejemplo, mapear
códigos médicos a SNOMED, mapear códigos de ciudad a cadenas legibles para las
personas o mapear una cadena de entrada a un código de atributo de DHIS2.

Estos objetos suelen ser muy grandes y difíciles de mantener, y pueden inflar el
código del job.

En cambio, los mapeos se pueden guardar como un objeto JSON en un repositorio de
GitHub y subirse a una colección con la CLI.

## Conceptos básicos de las colecciones {#collections-basics}

:::tip

La API de colecciones está disponible automáticamente para todos los workflows y
no necesita credenciales. La autenticación con la plataforma OpenFn se gestiona
por ti.

Puedes usar la API de colecciones con cualquier adaptor.

:::

Los datos se guardan como pares clave-valor, donde la clave es un identificador
único de ciertos datos (como un UUID o una marca de tiempo). El valor siempre se
guarda como cadena (aunque puedes pasar directamente objetos compatibles con
JSON, que la API de colecciones serializa automáticamente).

Las claves se pueden obtener en bloque y filtrar por _patrón_. Por ejemplo, el
patrón `2024*` coincide con todas las claves que empiezan con `2024`. En las
aplicaciones de colecciones de gran volumen, es fundamental diseñar las claves
para que tengan un orden de clasificación eficiente.

El siguiente ejemplo obtiene valores de la colección
`openfn-patient-registrations` y los guarda en el state para procesarlos
después:

```js
collections.get('openfn-patient-registrations', '2024*').then(state => {
  state.registrationsThisYear = state.data;
  return state;
});
```

Los elementos devueltos se escriben en state.data como un array de pares
`[{ key, value }]`:

```js
{
  "data": {
    "20240102-5901257": {
      "name": "Tom Waits",
      "id": "5901257",
    },
    "20240213-0183216": {
      "name": "Billie Holiday",
      "id": "0183216",
    }
  }
}
```

Si obtienes un solo elemento (es decir, sin `*` en la clave), se escribe
directamente en `state.data`, sin clave:

```js
{
  "data": {
    "name": "Billie Holiday",
    "id": "0183216",
  }
}
```

Cada clave guarda de forma permanente su fecha de creación, así que, además de
obtenerlas por patrón de clave, también puedes filtrar las claves por fecha.
Este ejemplo obtiene todas las claves creadas antes del 30 de septiembre de
2024:

```js
collections
  .get('openfn-patient-registrations', '*', { createdBefore: '2024-09-30' })
  .then(state => {
    state.registrationsThisYear = state.data;
    return state;
  });
```

`collections.get` descarga en memoria todos los valores que coinciden. Para
valores grandes o conjuntos de valores de gran volumen, es más eficiente usar
`collections.each`, que carga cada valor en memoria por separado, en streaming,
y luego lo descarta.

```js
collections.each(
  'my-collection',
  { key: '2024*', createdAfter: '20240601' },
  (state, value, key) => {
    console.log(value);
  }
);
```

Los valores se suben a una colección con `collections.set`. Todas las
asignaciones son "upserts": se crean claves nuevas para los valores que no
existen y se actualizan los valores de las claves que _sí_ existen.

El siguiente ejemplo asigna un solo elemento:

```js
collections.set('openfn-demo', 'commcare-fhir-value-mappings', {
  current_smoker: {
    system: 'http://snomed.info/sct',
    code: '77176002',
    display: 'Smoker',
  },
  /* ... */
});
```

Si asignas varios valores a la vez, pasa una función generadora de claves en
lugar de un id, para generar una clave para cada elemento. Por ejemplo, si se
guardan varios valores en un array en `state.data`:

```js
collections.set('openfn-demo', (patient, state) => patient.id, $.patients);
```

La función generadora de claves se llama con cada valor y debe devolver una
clave de tipo cadena.

## Gestionar colecciones {#managing-collections}

Las colecciones se pueden crear, eliminar o renombrar desde el menú Admin.

![Página de administración de colecciones](/img/collections_admin.webp)

Antes de poder usar una colección, hay que crearla. Los nombres de las
colecciones deben ser únicos en el despliegue, así que recomendamos usar como
prefijo tu organización (y quizás el proyecto), por ejemplo, `openfn-demo`.

## Usar colecciones {#using-collections}

Las colecciones están disponibles para todos los workflows mediante una interfaz
sencilla de alto nivel.

:::caution

Hay que crear una colección en la interfaz de administración antes de poder
usarla.

:::

La API de colecciones ofrece cuatro verbos básicos:

- [`collections.get()`](/adaptors/packages/collections-docs#collections_get)
  descarga los valores que coinciden con una clave o un patrón de clave.
- [`collections.each()`](/adaptors/packages/collections-docs#collections_each)
  recorre de forma eficiente un rango de elementos de una colección.
- [`collections.set()`](/adaptors/packages/collections-docs#collections_set)
  sube valores a una colección.
- [`collections.remove()`](/adaptors/packages/collections-docs#collections_remove)
  elimina valores por clave o patrón de clave.

La API de colecciones se apoya en un adaptor especial: consulta la
[API del adaptor de colecciones](/adaptors/collections) para más detalles.
