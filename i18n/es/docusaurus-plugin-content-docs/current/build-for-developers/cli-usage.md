---
title: Uso básico de la CLI de OpenFn
sidebar_label: Uso básico
slug: /cli-usage
translation_source_hash: 7f9249533167dbd2f99d20f84089330325908f60
translation_review_status: machine
---

Esta página muestra ejemplos de algunos de los usos más comunes de la CLI, como:

- obtener ayuda
- ejecutar un job
- guardar el state
- ajustar el nivel de logs
- mantener el repositorio de adaptors
- ejecutar un workflow
- cargar la documentación de un adaptor

---

### Obtener ayuda {#get-help}

```bash
openfn --help
```

```bash
openfn deploy --help
```

---

### Ejecutar un job {#run-a-job}

Para ejecutar un solo job, tienes que indicar explícitamente qué adaptor usar.
Consulta los [adaptors disponibles públicamente](/adaptors).

Si no se detecta la versión indicada, el adaptor se instala automáticamente.

**Ejecutar un job con el adaptor http:**

```bash
openfn path/to/job.js -a http
```

**Usar una versión concreta del adaptor:**

```bash
openfn path/to/job.js -a http@2.0.0
```

**Pasar la ruta de un adaptor instalado localmente:**

```bash
openfn path/to/job.js -a http=/repo/openfn/adaptors/my-http-build
```

**Usar la compilación local del monorepo de adaptors:**

```bash
openfn path/to/job.js -ma http
```

Tienes que indicar la ruta al monorepo en la variable de entorno
OPENFN_ADAPTORS_REPO. Por ejemplo:

```bash
OPENFN_ADAPTORS_REPO=~/openfn/adaptors openfn job.js -ma http
```

Normalmente la defines en un archivo de configuración como `.profile` o
`.zshrc`.

¡No olvides volver a compilar el adaptor antes de usarlo!

**Ejecutar desde un step inicial concreto**

Puedes indicar un step con su id exacto o con una parte del nombre o del id.

```bash
openfn path/to/job.js --start cf628d9e -s path/to/input.json
```

Si ya guardaste en caché los resultados de este workflow, la CLI carga
automáticamente la entrada correcta desde la caché cuando omites el argumento
`-s`:

```bash
openfn path/to/job.js --start cf628d9e
```

También puedes pasar `--end` para que el workflow termine antes.

**Ejecutar un solo step**

`--only` funciona igual que `--start` y `--end`. Puedes indicar una parte del
nombre o del id del step, y la entrada se carga automáticamente desde la caché.

```bash
openfn path/to/job.js --only cf628d9e
```

---

### Gestionar el state de salida {#handle-output-state}

Cuando termina el job, la CLI escribe el state resultante en el disco. De forma
predeterminada, crea un archivo `output.json` junto al archivo del job.

**Puedes indicar rutas personalizadas para los archivos de salida y de state:**

```bash
openfn path/to/job.js -a adaptor-name -o path/to/output.json -s path/to/state.json
```

**Usa `-O` para devolver la salida por stdout:**

```bash
openfn path/to/job.js -a adaptor-name -O
```

**Guardar localmente los resultados de todos los steps**

```bash
openfn path/to/workflow.json --cache-steps
```

Cada step escribe su salida en `./.cli-cache/<workflow-name>/<step-id>.json`.
Git ignora la carpeta `.cli-cache`, y la caché se borra cuando vuelves a
ejecutar el workflow con `--cache-steps` habilitado.

Para guardar en caché _siempre_, define la variable de entorno
`OPENFN_ALWAYS_CACHE_STEPS` como `"true"`, y pasa `--no-cache-steps` para
deshabilitarlo temporalmente.

---

### Ajustar el nivel de logs {#adjust-logging-level}

Puedes pasar `-l info` o `--log info` para obtener más información sobre lo que
ocurre durante la ejecución. Estos son los distintos niveles de logs:

| nivel de logs                                 | descripción                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| `openfn path/to/job.js -a adaptor -l none`    | Modo silencioso                                              |
| `openfn path/to/job.js -a adaptor -l default` | Información general de lo que está ocurriendo                |
| `openfn path/to/job.js -a adaptor -l info`    | Más información sobre el runtime, la CLI y el job            |
| `openfn path/to/job.js -a adaptor -l debug`   | Información sobre el runtime, la CLI, el compilador y el job |

---

### Mantener el repositorio de adaptors instalados automáticamente {#maintain-auto-installed-adaptors-repo}

**Listar el contenido del repositorio:**

```bash
openfn repo list
```

**Indicar la carpeta del repositorio con la variable de entorno
`OPENFN_REPO_DIR`:**

```bash
export OPENFN_REPO_DIR=/path/to/repo
```

**Instalar adaptors automáticamente y comprobar si el repositorio tiene una
versión que coincida:**

```bash
openfn path/to/job.js -a adaptor-name
```

**Eliminar todos los adaptors del repositorio:**

```bash
openfn repo clean
```

---

### Ejecutar un workflow {#run-a-workflow}

<details>
  <summary>Haz clic para ver la estructura JSON de un workflow de ejemplo</summary>

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

</details>

**Para ejecutar un workflow:**

```bash
openfn path/to/workflow.json -o tmp/output.json
```

Consulta este
[tutorial](/build-for-developers/cli-walkthrough.md#7-running-workflows)
detallado sobre cómo ejecutar workflows con la CLI.

---

### Cargar la documentación de un adaptor {#load-adaptor-documentation}

La CLI puede mostrar la documentación de un adaptor en la terminal. Ten en
cuenta que primero tiene que descargar el adaptor al repositorio (si todavía no
está ahí), lo que puede tardar un momento.

**Mostrar una lista de las funciones del adaptor**

```bash
openfn docs http
```

**Mostrar la documentación de una función concreta**

```bash
openfn docs http post
```
