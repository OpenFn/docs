---
title: Recorrido por la CLI
sidebar_label: Recorrido por la CLI
slug: /cli-walkthrough
translation_source_hash: a044b0a82a85cef420e88d48a916f20e81f5ddb0
translation_review_status: machine
---

### 1. Primeros pasos con la CLI {#1-getting-started-with-the-cli}

:::info Para empezar con @openfn/cli

1. Crea una carpeta nueva para el repositorio en el que vas a trabajar con este
   comando: `mkdir devchallenge && cd devchallenge`

2. Aunque puedes guardar tus scripts de jobs en cualquier lugar, es buena
   práctica guardar `state.json` y `output.json` en una carpeta `tmp`. Para
   hacerlo, crea un directorio llamado `tmp` dentro de tu carpeta
   `devchallenge`: `mkdir tmp`

3. Como `state.json` y `output.json` pueden contener información de
   configuración sensible y datos del proyecto, es importante no subirlos nunca
   a GitHub. Para que GitHub ignore estos archivos, agrega el directorio `tmp` a
   tu archivo `.gitignore`: `echo "tmp" >> .gitignore`
4. (Opcional) Usa el comando `tree` para comprobar que la estructura de
   directorios es correcta. Al ejecutar `tree -a` en tu carpeta `devchallenge`
   deberías ver una estructura como esta:
   ```bash
    devchallenge
    ├── .gitignore
    └── tmp
        ├── state.json
        └── output.json
   ```

:::

1.  Crea un archivo de job llamado `hello.js` y escribe el siguiente código.

    ```js
    console.log('Hello World!');
    ```

    <details>
      <summary>¿Qué es un job?</summary>
      Un job de OpenFn es código JavaScript que sigue un conjunto concreto de convenciones.
      Normalmente un job tiene una o más <i>operaciones</i> que realizan una tarea concreta
      (como obtener información de una base de datos, crear un registro, etc.) y
      devuelven el state para que lo use la siguiente operación.
    </details>

    <details>
      <summary>¿Qué es console.log?</summary>
      <code>console.log</code> es una función básica del lenguaje JavaScript que te
      permite mostrar mensajes en la ventana de la terminal.
    </details>

2.  Ejecuta el job con la CLI

    ```bash
    openfn hello.js -o tmp/output.json
    ```

  <details>
    <summary>Ver la salida esperada</summary>

    ```bash
    [CLI] ⚠ WARNING: No adaptor provided!
    [CLI] ⚠ This job will probably fail. Pass an adaptor with the -a flag, eg:
              openfn job.js -a common
    [CLI] ✔ Compiled from hello.js
    [R/T] ♦ Starting job job-1
    [JOB] ℹ Hello World!
    [R/T] ✔ Completed job job-1 in 1ms
    [CLI] ✔ State written to tmp/output.json
    [CLI] ✔ Finished in 17ms ✨

    ```

  </details>

Fíjate en que tu instrucción `console.log` se imprimió como
`[JOB] Hello World!`. Usar la consola así ayuda a depurar o a entender qué pasa
dentro de tus steps.

### 2. Usar las funciones auxiliares de los adaptors {#2-using-adaptor-helper-functions}

Los adaptors son módulos de JavaScript o
[TypeScript](https://www.typescriptlang.org/) (un superconjunto de JavaScript
con tipado fuerte) que ofrecen a los usuarios de OpenFn un conjunto de funciones
auxiliares para simplificar la comunicación con un sistema externo concreto. Más
información sobre los adaptors: [docs.openfn.org/adaptors](/adaptors/)

#### Uso básico: {#basic-usage}

Usemos el adaptor
[@openfn/language-http](https://www.npmjs.com/package/@openfn/language-http)
para obtener una lista de formularios de
[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

#### Tareas: {#tasks}

1. Crea un archivo llamado `getPosts.js` y escribe el siguiente código

   ```jsx title=getPosts.js
   get('https://jsonplaceholder.typicode.com/posts');
   fn(state => {
     console.log(state.data[0]);
     return state;
   });
   ```

2. Ejecuta el job con este comando

```bash
openfn getPosts.js -i -a http -o tmp/output.json
```

:::info Los argumentos de la CLI

Usa `-a` para indicar el adaptor y `-i` para instalar automáticamente el adaptor
necesario

Ejecuta `openfn help` para ver la lista completa de argumentos de la CLI.

:::

Como es la primera vez que usas el adaptor `http`, lo instalas con el argumento
`-i`.

<details>
  <summary>3. Expande para ver los logs esperados de la CLI</summary>

```bash
  [CLI] ✔ Installing packages...
  [CLI] ✔ Installed @openfn/language-http@4.2.8
  [CLI] ✔ Installation complete in 14.555s
  [CLI] ✔ Compiled from getPosts.js
  [R/T] ♦ Starting job job-1
  GET request succeeded with 200 ✓
  [JOB] ℹ {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
  [R/T] ✔ Completed job job-1 in 872ms
  [CLI] ✔ State written to tmp/output.json
  [CLI] ✔ Finished in 15.518s ✨

```

</details>

:::warning Datos de ejemplo

Los datos que aparecen en estos logs de la CLI provienen de la API de
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) y no representan
información real. Solo sirven para pruebas y desarrollo.

Para hacer pruebas precisas, considera usar datos reales de tu API o servicio.

:::

### 3. Entender `state` {#3-understanding-state}

Si la expresión de un job es un conjunto de instrucciones para un chef (¿una
receta?), el state inicial son todos los ingredientes que necesita, bien atados
en un paquetito perfecto. Consulta
[It all starts with state](/articles/2021/07/05/wrapping-my-head-around-jobs/#it-all-starts-with-state)
en la base de conocimiento para más contexto.

<details>
  <summary>Suele verse más o menos así</summary>

```json
{
  "configuration": {
    "hostUrl": "https://moh.kenya.gov.ke/dhis2",
    "username": "someone",
    "password": "something-secret"
  },
  "data": {
    "type": "registration",
    "patient": {
      "age": 24,
      "gender": "M",
      "nationalId": "321cs7"
    }
  }
}
```

</details>

#### `state.configuration` {#stateconfiguration}

En esta clave van las credenciales que autorizan las conexiones con cualquier
sistema autenticado con el que interactúe el job. (Ten en cuenta que, cuando
usas la plataforma OpenFn en lugar de la CLI, esta parte de `state` suele
sobrescribirse en tiempo de ejecución con una "credencial" real).

:::warning Importante

Ten en cuenta que `console.log(state)` muestra todo el state, incluidos
elementos de `state.configuration` como el **nombre de usuario y la
contraseña**. Elimina este log cuando termines de depurar, para no exponer
información sensible por accidente cuando el job se despliegue en producción.

La plataforma OpenFn tiene protecciones integradas para "limpiar" el state de
los logs, pero cuando usas la CLI directamente, ¡estás por tu cuenta!

:::

#### `state.data` {#statedata}

En esta clave van los datos relacionados con un run concreto de un job. En la
plataforma, son los datos propios de la work order que vienen de una solicitud
HTTP que activa el trigger, o algún dato que se pasa de un job a otro.

Con la CLI, `state.json` se carga automáticamente desde el directorio actual.

También puedes indicar la ruta del archivo de state con la opción -s,
--state-path.

Indica la ruta de tu archivo `state.json` con este comando:

```bash
openfn hello.js -a http -s tmp/state.json -o tmp/output.json
```

<details>
  <summary>Expande para ver los logs esperados de la CLI</summary>

```
[CLI] ✔ Compiled job from hello.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 876ms
[R/T] ✔ Operation 2 complete in 0ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.222s! ✨
```

</details>

#### ¿Cómo puedes usar el state? {#how-can-we-use-state}

Cada adaptor tiene un esquema de configuración recomendado para tu `state.json`.
El
[esquema de configuración de http](/adaptors/packages/http-configuration-schema)
muestra cómo configurar `state.configuration` para `language-http`:

```json
{
  "username": "name@email",
  "password": "supersecret",
  "baseUrl": "https://jsonplaceholder.typicode.com"
}
```

#### Tareas: {#tasks-1}

1. Actualiza tu `state.json` para que quede así:

 <details>
    <summary>Expande para ver state.json</summary>

    ```json title=state.json
    {
      "configuration": {
        "baseUrl": "https://jsonplaceholder.typicode.com"
      }
    }
    ```

   </details>

Como actualizaste la configuración en tu `state.json`, ahora puedes usar la
función auxiliar `get()` sin indicar la **baseUrl**, es decir, `get('posts')`.

2. Actualiza tu job `getPosts.js` para que quede así:

   <details>
   <summary>Expande para ver getPosts.js</summary>

   ```js title="getPosts.js"
   // Get all posts
   get('posts');

   fn(state => {
     const posts = state.data;
     console.log(posts[0]);
     return state;
   });
   ```

   </details>

3. Ahora ejecuta el job con el siguiente comando

   ```bash
   openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json
   ```

   <details>
    <summary>Y comprueba que ves los logs esperados de la CLI:</summary>

   ```bash
   [CLI] ✔ Compiled job from getPosts.js
   GET request succeeded with 200 ✓
   [R/T] ✔ Operation 1 complete in 120ms
   [JOB] ℹ {
     userId: 1,
     id: 1,
     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
     body: 'quia et suscipit\n' +
       'suscipit recusandae consequuntur expedita et cum\n' +
       'reprehenderit molestiae ut ut quas totam\n' +
       'nostrum rerum est autem sunt rem eveniet architecto'
   }
   [R/T] ✔ Operation 2 complete in 0ms
   [CLI] ✔ Writing output to tmp/output.json
   [CLI] ✔ Done in 470ms! ✨

   ```

   </details>

### 4. Limpiar y transformar datos {#4-clean--transform-data}

En la mayoría de los casos necesitas manipular, limpiar o transformar datos en
algún step de tu workflow. Por ejemplo, después de obtener datos del registro
`https://jsonplaceholder.typicode.com`, quizás necesites agrupar las
publicaciones por id de usuario. El ejemplo de abajo muestra cómo:

1. obtener todas las publicaciones y devolverlas en `state.data`
2. agrupar las publicaciones devueltas por `userId`
3. mostrar en el log las publicaciones con userId `1`

<details>
<summary>Expande para ver el ejemplo:</summary>

```js title="getPosts.js"
// Get all posts
get('posts');

// Group posts by user id
fn(state => {
  const posts = state.data;

  // Group posts by userId
  const groupPostsByUserId = posts.reduce((acc, post) => {
    const existingValue = acc[post.userId] || [];
    return {
      ...acc,
      [post.userId]: [...existingValue, post],
    };
  }, {});

  console.log(groupPostsByUserId);

  return { ...state, groupPostsByUserId };
});

// Log posts where userId = 1
fn(state => {
  const { groupPostsByUserId } = state;
  console.log('Post with userId 1', groupPostsByUserId[1]);
  return state;
});
```

</details>

<details>
<summary>¿Qué es <code>array.reduce</code>?</summary>
El método <code>reduce()</code> aplica una función a un acumulador y a cada
valor del array (de izquierda a derecha) para reducirlo a un único valor.

Quizás el caso más fácil de entender de <code>reduce()</code> es devolver la
suma de todos los elementos de un array:

##### Demostración de JavaScript: `Array.reduce()` {#javascript-demo-arrayreduce}

```

// 0 + 1 + 2 + 3 + 4
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial); // Expected output: 10

```

Puedes aprender más sobre `array.reduce` en la
[referencia de MDN de Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

</details>

<details>
  <summary>Expande para ver los logs esperados de la CLI</summary>

```

[CLI] ✔ Compiled job from getPosts.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 825ms
[R/T] ✔ Operation 2 complete in 0ms
[JOB] ℹ Post with userId 1 [ //All of posts for userId 1 ]
[R/T] ✔ Operation 3 complete in 12ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.239s! ✨

```

</details>

### 5. Depurar errores {#5-debugging-errors}

Al depurar, es interesante y útil usar console.log para ver el contenido de los
objetos que manipulas (como state).

Cuando quieras inspeccionar el contenido de state entre operaciones, agrega un
bloque `fn()` con un `console.log`:

```js
// firstOperation(...);

fn(state => {
  console.log(state);
  return state;
});

// secondOperation(...);
```

##### Crea **debug.js** y pega el código de abajo {#create-debugjs-and-paste-the-code-below}

<details>

  <summary>Expande para ver debug.js</summary>

```jsx title="debug.js"
// Get all posts
get('posts');

// Get post by index helper function
fn(state => {
  // const getPostbyIndex = (index) => dataValue(index)(state);
  console.log(dataValue(1));

  return { ...state };
});
```

</details>

##### Ejecuta **openfn debug.js -a http -s tmp/state.json** {#run-openfn-debugjs--a-http--s-tmpstatejson}

<details>
  <summary>Logs esperados de la CLI</summary>

```bash
[CLI] ✘ TypeError: path.match is not a function
    at dataPath (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:258:26)
    at dataValue (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:262:22)
    at getPostbyIndex (vm:module(0):5:37)
    at vm:module(0):18:36
    at /tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:241:12
    at file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:288:26
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:269:18)
    at async executeHandler (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/dist/process/runner.js:388:20)
```

</details>

Como ves en los logs, la función auxiliar `dataValue` tiene un TypeError. Para
solucionarlo, puedes ir a la documentación de **dataValue ->
[docs.openfn.org/adaptors/packages/common-docs/#datavalue](/adaptors/packages/common-docs/#datavalue)**.

Según la documentación, dataValue recibe como entrada una ruta de tipo string.
Pero en tu operación pasabas un entero; por eso aparece el _TypeError_. Puedes
corregir el error pasando un string a dataValue, es decir,
`console.log(dataValue("1"))`.

<details>
  <summary>Logs esperados de la CLI</summary>

```bash
[CLI] ✔ Compiled job from debug.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 722ms
[JOB] ℹ [Function (anonymous)]
[R/T] ✔ Operation 2 complete in 1ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.102s ✨
```

</details>

Si necesitas más información para depurar, puedes pasar `-l debug`. Esto
establece el nivel de log en _debug_, que registra toda la información de la
ejecución.

Es decir, `openfn debug.js -a http -l debug`.

### 6. Each e iteración de arrays {#6-each-and-array-iteration}

A menudo tienes que realizar la misma operación varias veces, una por cada
elemento de un array. La mayoría de las funciones auxiliares para manipular
datos se heredan de @openfn/language-common y están disponibles en la mayoría de
los adaptors.

##### Modifica getPosts.js para agrupar las publicaciones por ID de usuario {#modify-getpostsjs-to-group-posts-by-user-id}

<details>
<summary>Expande para ver getPosts.js</summary>

```js title="getPosts.js"
// Get all posts
get('posts');

// Group posts by user
fn(state => {
  const posts = state.data;

  // Group posts by userId
  const groupPostsByUserId = posts.reduce((acc, post) => {
    const existingValue = acc[post.userId] || [];
    return { ...acc, [post.userId]: [...existingValue, post] };
  }, {});

  // console.log(groupPostsByUserId);
  return { ...state, groupPostsByUserId };
});

// Log posts where userId = 1
fn(state => {
  const { groupPostsByUserId } = state;
  const posts = groupPostsByUserId[1];

  // console.log("Post with userId 1", groupPostsByUserId[1]);
  return { ...state, posts };
});

each('posts[*]', state => {
  console.log('Post', JSON.stringify(state.data, null, 2));
  return state;
});
```

</details>

Fíjate en que este código usa la función `each`, una función auxiliar definida
en [language-common](/adaptors/packages/common-docs/#each) pero a la que se
accede desde este job, que usa `language-http`. La mayoría de los adaptors
importan muchas funciones de `language-common`.

Ejecuta **openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json**

<details>
  <summary>Expande para ver los logs esperados de la CLI</summary>

```bash
[CLI] ✔ Compiled job from getPosts.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 730ms
[R/T] ✔ Operation 2 complete in 0ms
[R/T] ✔ Operation 3 complete in 0ms
[JOB] ℹ Posts [
// Posts
]
[R/T] ✔ Operation 4 complete in 10ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.091s! ✨
```

</details>

### 7. Ejecutar workflows {#7-running-workflows}

Ejecutar un workflow te permite definir una lista de steps y las reglas para
ejecutarlos. Puedes usar un workflow para orquestar el flujo de datos entre
sistemas de forma estructurada y automatizada.

Por ejemplo, si tu workflow tiene dos steps (GET de usuarios del sistema A y
POST de usuarios al sistema B), puedes configurarlo para que ejecute todos los
steps en secuencia, de principio a fin. Esto imita los
[patrones de flow triggers](/documentation/legacy/build/triggers#flow-triggers)
de la plataforma OpenFn, donde un segundo job debe ejecutarse después de que el
primero termine con éxito, usando los datos que devolvió el primer job.

:::info En resumen

No tendrás que armar el state inicial del siguiente job: el state final del job
anterior se pasa automáticamente al job siguiente como state inicial.

:::

##### Workflow {#workflow}

Un workflow es el plan de ejecución para correr varios steps en secuencia. Se
define como un objeto JSON con las siguientes propiedades:

```json
{
  "options": {
    "start": "a" // optionally specify the start node (defaults to steps[0])
  },
  "workflow": {
    "steps": [
      {
        "id": "a",
        "expression": "fn((state) => state)", // code or a path
        "adaptor": "@openfn/language-common@1.75", // specify the adaptor to use (version optional)
        "state": {
          "data": {} // optionally pre-populate the data object (this will be overridden by keys in previous state)
        },
        "configuration": {}, // Use this to pass credentials
        "next": {
          // This object defines which steps to call next
          // All edges returning true will run
          // If there are no next edges, the workflow will end
          "b": true,
          "c": {
            "condition": "!state.error" // Note that this is an expression, not a function
          }
        }
      }
    ]
  }
}
```

###### Ejemplo de un workflow {#example-of-a-workflow}

<details>
<summary>Este es un ejemplo de un workflow sencillo con tres steps:</summary>

```json title="workflow.json"
{
  "options": {
    "start": "getPatients"
  },
  "workflow": {
    "steps": [
      {
        "id": "getPatients",
        "adaptor": "http",
        "expression": "getPatients.js",
        "configuration": "tmp/http-creds.json",
        "next": {
          "getGlobalOrgUnits": true
        }
      },
      {
        "id": "getGlobalOrgUnits",
        "adaptor": "common",
        "expression": "getGlobalOrgUnits.js",
        "next": {
          "createTEIs": true
        }
      },
      {
        "id": "createTEIs",
        "adaptor": "dhis2",
        "expression": "createTEIs.js",
        "configuration": "tmp/dhis2-creds.json"
      }
    ]
  }
}
```

</details>

<details>
  <summary>tmp/http-creds.json</summary>

```json title="tmp/http-creds.json"
{
  "baseUrl": "https://jsonplaceholder.typicode.com"
}
```

</details>

<details>
  <summary>tmp/dhis2-creds.json</summary>

```json title="tmp/dhis2-creds.json"
{
  "hostUrl": "https://play.im.dhis2.org/dev",
  "password": "district",
  "username": "admin"
}
```

</details>

<details>
  <summary>getPatients.js</summary>

```js title="getPatients.js"
// Get users from jsonplaceholder
get('users');

// Prepare new users as new patients
fn(state => {
  const newPatients = state.data;
  return { ...state, newPatients };
});
```

</details>

<details>
  <summary>getGlobalOrgUnits.js</summary>

```js title="getGlobalOrgUnits.js"
// Globals: orgUnits
fn(state => {
  const globalOrgUnits = [
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'Gwenborough',
    },
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'Wisokyburgh',
    },
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'McKenziehaven',
    },
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'South Elvis',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'Roscoeview',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'South Christy',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'Howemouth',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'Aliyaview',
    },
    {
      label: 'Baoma Station CHP',
      id: 'jNb63DIHuwU',
      source: 'Bartholomebury',
    },
    {
      label: 'Baoma Station CHP',
      id: 'jNb63DIHuwU',
      source: 'Lebsackbury',
    },
  ];

  return { ...state, globalOrgUnits };
});
```

</details>

<details>
  <summary>createTEIs.js</summary>

```js title="createTEIs.js"
fn(state => {
  const { newPatients, globalOrgUnits } = state;

  const getOrgUnit = city =>
    globalOrgUnits.find(orgUnit => orgUnit.source === city).id;

  const mappedEntities = newPatients.map(patient => {
    const [firstName = 'Patient', lastName = 'Test'] = (
      patient.name || ''
    ).split(' ');

    const orgUnit = getOrgUnit(patient.address.city);

    const attributes = [
      { attribute: 'w75KJ2mc4zz', value: firstName },
      { attribute: 'zDhUuAYrxNC', value: lastName },
      { attribute: 'cejWyOfXge6', value: 'Male' },
    ];

    return { ...patient, attributes: attributes, orgUnit: orgUnit };
  });

  return { ...state, mappedEntities };
});

each(
  'mappedEntities[*]',
  create('trackedEntityInstances', {
    orgUnit: dataValue('orgUnit'),
    trackedEntityType: 'nEenWmSyUEp',
    attributes: dataValue('attributes'),
  })
);
```

</details>

Para ejecutar el workflow, usa `openfn [path/to/workflow.json]`.

<details>
<summary>
Por ejemplo, si creaste <code>workflow.json</code> en la raíz del directorio de
tu proyecto, esta sería la estructura del proyecto:
</summary>

```bash
    devchallenge
    ├── .gitignore
    ├── getPatients.js
    ├── createTEIs.js
    ├── getGlobalOrgUnits.js
    ├── workflow.json
    └── tmp
        ├── http-creds.json
        ├── dhis2-creds.json
        └── output.json
```

</details>

```bash
openfn workflow.json -o tmp/output.json
```

Al ejecutarse, este workflow corre primero el job `getPatients.js`. Si termina
con éxito, `getGlobalOrgUnits.js` se ejecuta con el state final de
`getPatients.js`. Si `getGlobalOrgUnits.js` termina con éxito, `createTEIs.js`
se ejecuta con el state final de `getGlobalOrgUnits.js`.

Ten en cuenta que los adaptors indicados en `workflow.json` se instalan
automáticamente cuando ejecutas el workflow. Para ejecutar el workflow, usa este
comando:

```bash
openfn workflow.json -o tmp/output.json
```

Al ejecutarlo, primero se instalan automáticamente los adaptors y luego se
ejecuta el workflow.

:::danger Importante

Cuando trabajes con el archivo `workflow.json`, es importante manejar de forma
segura la información sensible, como las credenciales y los datos de entrada
iniciales. Para proteger tus datos sensibles, sigue estas pautas:

1. Clave de configuración: en el archivo `workflow.json`, indica la ruta a un
   archivo de configuración ignorado por git que contenga las credenciales
   necesarias para acceder al sistema de destino. Por ejemplo:

   ```json
   {
      ...
      "configuration": "tmp/openMRS-credentials.json"
    },
   ```

2. Clave de datos: si necesitas pasar datos iniciales a tu job, indica la ruta a
   un archivo de datos ignorado por git:
   ```json
   {
   ...
    "state": {
      "data": "tmp/initial-data.json",
    }
   }
   ```

:::
