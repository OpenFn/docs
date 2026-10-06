---
title: State de entrada y de salida
translation_source_hash: 5ac34f5e0595bb2aec97356e6635bfb55b9cff4c
translation_review_status: machine
---

Cada job necesita un state de entrada y, en la mayoría de los casos, produce un
state de salida. En este artículo se explican estos conceptos con más detalle.

Todo job es un pipeline de transformación de datos. Recibe una entrada (un
objeto de JavaScript al que llamamos state) y ejecuta una serie de operaciones
(o funciones) que transforman ese state una tras otra. El objeto state final se
devuelve como la salida del pipeline.

![Pipeline de un job](/img/guide-job-pipeline.webp)

El state final de un job siempre debe ser un objeto de JavaScript serializable
(es decir, un objeto JSON). Se eliminan todas las claves que no se puedan
serializar.

![Resumen del state de un job](/img/state-javascript.webp)

:::tip Una nota sobre la terminología

Al state de entrada también se le suele llamar _state inicial_, y al state de
salida, _state final_. Puedes usar estos términos indistintamente.

:::

## Claves del state {#state-keys}

Los objetos state suelen tener las siguientes claves:

- `data`: un almacén temporal de información, que se suele usar para guardar el
  resultado de una operación concreta
- `configuration`: un objeto que contiene los datos de la credencial
- `references`: un historial de los valores anteriores de `data`
- `response`: los adaptors (como http) lo usan a menudo para guardar la
  respuesta http sin procesar de una solicitud
- `errors`: una lista de los errores generados por un workflow concreto,
  indexados por el nombre del job.

Al final de un job, se elimina la clave configuration, junto con cualquier otra
clave que no se pueda serializar.

A veces los adaptors escriben información adicional en el state durante un run.
Por ejemplo, los adaptors de bases de datos suelen escribir una clave `client`
en el state para hacer seguimiento de la conexión a la base de datos. Estas
claves se eliminan al final de un job.

## State de entrada y de salida de los runs {#input--output-state-for-runs}

El state de entrada de un run se genera de forma distinta según si ejecutas los
workflows localmente con la CLI o en la app:

- Cuando creas una work order manualmente, tienes que seleccionar o generar la
  entrada a mano (por ejemplo, creando un `Input` personalizado en la app, o un
  archivo `state.json` si trabajas localmente
  [en la CLI](/build-for-developers/cli-intro.md)).
- Cuando una work order se crea automáticamente mediante un trigger webhook o un
  trigger cron, el state se crea como se describe más abajo.

El state final de un run depende de lo que devuelva la última operación.
Recuerda que las expresiones de un job son una serie de operaciones: cada una
recibe el state y devuelve el state, después de generar cualquier número de
efectos secundarios. El state que se devuelve al final determina la salida del
run cuando terminan todas estas operaciones.

Una buena práctica es incluir un último paso de limpieza del state que elimine
los datos que no deberían conservarse entre runs ni formar parte de la salida
(como información de identificación personal o PII), por ejemplo:

```js
// get data from a data source
get('https://jsonplaceholder.typicode.com/users');

// store retrieved data in state for use later in job
fn(state => {
  state.users = state.data;
  return state;
});

// get more data from another data source
get('https://jsonplaceholder.typicode.com/posts');

// store additional retrieved data in state for use later in job
fn(state => {
  state.posts = state.data;
  return state;
});

// compare data
fn(state => {
  if (state.users.length > state.posts.length) {
    // do something based on the comparison
  }
  return state;
});

// cleanup state at the end before finishing job
fn(state => {
  state.data = null;
  state.users = null;
  state.posts = null;

  return state;
});
```

Hay algunos patrones comunes para limpiar el state final. Puedes devolver solo
las claves que necesitas:

```js
fn(state => {
  return {
    data: state.data,
  };
});
```

Usa el operador de propagación (spread) para conservarlo todo excepto algunas
claves que quieres sobrescribir:

```js
fn(state => {
  return {
    ...state,
    secretStuff: null,
  };
});
```

O usa el operador _rest_ para excluir por completo algunas claves:

```js
fn(state => {
  const { username, password, secrets, ...rest } = state;
  return rest;
});
```

### Runs iniciados por un webhook {#webhook-triggered-runs}

En la plataforma, cuando un evento de webhook inicia un run, el state de entrada
contiene las partes importantes de la **solicitud http** entrante.

El state de entrada se verá más o menos así:

```js
{
  data: { // the body of the http request
    formId: "patient_enrollment",
    name: "John Doe"
  },
  request: {
    method: "POST",
    path: ['i', 'your-webhook-url-uuid'] // an ordered array with optional additional paths
    headers: { "content-type": "application/json" }, // an object containing the headers of the request
    query_params: {} // an object containing any query parameters
  },
}
```

### Runs iniciados por un cron {#cron-triggered-runs}

Cuando un cron inicia un run, su state de entrada es el state final del run
anterior. Así, cada run sabe lo que pasó en los runs anteriores. Dicho de otro
modo, puedes pasar información de un run a otro aunque ocurran con días de
diferencia.

**Escenario de ejemplo**: tienes una **sincronización diaria a las 9 AM** con un
workflow de 3 steps: (1) obtener los registros de pacientes, (2) transformar los
datos y (3) enviarlos a la base de datos. El lunes, el workflow procesa los
registros hasta el ID 1000 y devuelve `{ lastProcessedId: 1000 }` como state
final. El martes a las 9 AM, el cron vuelve a empezar con
`{ lastProcessedId: 1000 }` como entrada, así que sabe que tiene que obtener y
procesar los registros a partir del ID 1001.

La primera vez que se ejecuta el workflow, el state inicial es simplemente un
objeto de JavaScript vacío: `{}`

#### Sobrescribir la entrada del cron {#overriding-cron-input}

Siempre puedes ejecutar manualmente un workflow con trigger cron con:

- **Entrada vacía** (`{}`): empieza de cero, sin el state anterior.
- **Entrada personalizada**: tus propios datos, para probar escenarios
  concretos.
- **Entrada predeterminada**: usa la misma entrada que los runs programados.

Si el run manual tiene éxito, el siguiente run programado del cron empezará con
el state de salida que haya producido tu run manual.

## State de entrada y de salida de los steps {#input--output-state-for-steps}

El state también pasa de un step a otro dentro de un workflow. El state de
salida del step anterior se usa como state de entrada del step siguiente.

### Si tiene éxito {#on-success}

Cuando un job tiene éxito, su state de salida es lo que devuelva la última
operación.

```js
{
  data: { patients: [] },
  references: [1, 2, 3]
}
```

### Si falla {#on-failure}

Cuando falla un step de un workflow, el error se agrega a un objeto `errors` en
el state, con el ID del job que falló como clave.

```js
{
  data: { patients: [] },
  references: [1, 2, 3],
  errors: {
    jobId: { /* error details */ }
  }
}
```

En el siguiente diagrama puedes ver cómo podría pasar el state entre los steps
de un workflow.

![Paso del state entre steps](/img/passing-state-steps.webp)
