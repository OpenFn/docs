---
title: Portabilidad v3 (versión anterior)
translation_source_hash: 8c147d873969c77e43aa0cfd51b29ee7ae97a0ec
translation_review_status: machine
---

La especificación de portabilidad permite representar proyectos de workflows
completos "como código", permite a los usuarios moverse entre distintas formas
de despliegue (como en la nube, local o alojado) y propone una forma de definir
reglas de automatización de workflows y de integración de sistemas aplicable a
nivel global, que se podría usar en todos los motores de workflows y plataformas
de integración del sector.

Nada en la especificación _tiene_ que ser exclusivo de OpenFn ni de ninguno de
nuestros productos. Imaginamos un futuro en el que el software creado con
Lightning, el OpenFn Integration Toolkit y herramientas de integración o de
workflows completamente nuevas y distintas puedan adoptar esta especificación.

Si te interesa contribuir a la especificación, contacta a OpenFn a través del
[foro de la comunidad](https://community.openfn.org), escríbenos o sugiere
cambios enviando una pull request aquí.

:::warning

Esta es la versión anterior de la especificación de portabilidad de OpenFn.

Para ver la versión más reciente, consulta [Portabilidad](portability)

:::

## Proyectos "como código" {#projects-as-code}

Los proyectos completos (grupos de workflows con sus triggers, edges,
credenciales y jobs) se pueden representar como código.

Esto mejora la experiencia de desarrollo en OpenFn porque (a) permite crear y
probar workflows localmente; (b) permite el control de versiones de los
proyectos y un registro de auditoría de sus cambios; y (c) permite a los
usuarios trasladar proyectos existentes entre distintas instancias (es decir,
despliegues) de Lightning.

### Estructura de directorios {#directory-structure}

Muchos usuarios guardan sus proyectos de OpenFn en repositorios de git, y esta
es una estructura habitual:

```
myProject/
├── workflow-a/
│   ├── job-1.js
│   ├── job-2.js
│   └── job-3.js
├── workflow-b/
│   └── job-4.js
├── project.yaml
├── projectState.json
└── config.json
```

:::info Estructura de directorios

Hay 3 estructuras de directorios que se suelen usar en los proyectos de OpenFn:
estándar, producción y prueba, y monorepo.

:::

### La **_especificación_** del proyecto {#the-project-spec}

La especificación del proyecto (o "spec") se suele guardar en un archivo
`project.yaml`. Aunque la mayor parte de la especificación se escribe
directamente en el archivo, muchos desarrolladores prefieren guardar el cuerpo
de sus jobs en archivos `.js` aparte y hacer referencia a ellos con una ruta
relativa.

```yaml
name: openhie-project
description: Some sample
credentials:
  jane-smith@test.com-HAPI-FHIR:
    owner: jane-smith@test.com
    name: HAPI FHIR
workflows:
  OpenHIE-Workflow:
    name: OpenHIE Workflow
    jobs:
      FHIR-standard-Data-with-change:
        name: FHIR-standard-Data-with-change
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: null
        body:
          path: ./jobs/my-fancy-script.js

      Send-to-OpenHIM-to-route-to-SHR:
        name: Send-to-OpenHIM-to-route-to-SHR
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: jane-smith@test.com-HAPI-FHIR
        body: |
          fn(state => {
            console.log("hello github integration")
            return state
          });

      Notify-CHW-upload-successful:
        name: Notify-CHW-upload-successful
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: null
        body: fn(state => state);

      Notify-CHW-upload-failed:
        name: Notify-CHW-upload-failed
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: null
        body:
          path: ./jobs/notify-failure.js

    triggers:
      webhook:
        type: webhook
    edges:
      webhook->FHIR-standard-Data-with-change:
        source_trigger: webhook
        target_job: FHIR-standard-Data-with-change
        condition: always
      FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR:
        source_job: FHIR-standard-Data-with-change
        target_job: Send-to-OpenHIM-to-route-to-SHR
        condition: on_job_success
      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful:
        source_job: Send-to-OpenHIM-to-route-to-SHR
        target_job: Notify-CHW-upload-successful
        condition: on_job_success
      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed:
        source_job: Send-to-OpenHIM-to-route-to-SHR
        target_job: Notify-CHW-upload-failed
        condition: on_job_failure
```

En esta especificación puedes ver las distintas formas de definir el cuerpo de
un job:

1. Cuerpo en línea: se usa en los jobs `FHIR-standard-Data-with-change` y
   `Send-to-OpenHIM-to-route-to-SHR`. El cuerpo se escribe directamente en el
   archivo YAML.

2. Referencia a un archivo externo: se usa en los jobs
   `Notify-CHW-upload-successful` y `Notify-CHW-upload-failed`. El cuerpo se
   guarda en archivos aparte, a los que se hace referencia con la clave path.
   Así se puede organizar mejor la lógica de los jobs complejos.

Al usar rutas de archivo:

- Las rutas son relativas a la ubicación del archivo `project.yaml`.
- Asegúrate de que los archivos a los que haces referencia existen y contienen
  código válido para el cuerpo de un job.
- Este método es especialmente útil para jobs complejos o cuando quieres
  reutilizar el cuerpo de un job en distintos proyectos.

### El **_estado_** del proyecto {#the-project-state}

El estado del proyecto es una representación de un proyecto concreto tal como
está _en una instancia específica de Lightning_. Se suele guardar como
`projectState.json` y contiene los UUID de los recursos en un despliegue
concreto de Lightning.

```json
{
  "id": "8deff39d-8189-4bd7-9dc7-f9f08e7f2c60",
  "name": "openhie-project",
  "description": null,
  "inserted_at": "2023-08-25T08:57:31",
  "updated_at": "2023-08-25T08:57:31",
  "scheduled_deletion": null,
  "requires_mfa": false,
  "project_credentials": {
    "jane-smith@test.com-HAPI-FHIR": {
      "id": "25f48989-d349-4eb8-99c3-923ebba5b116",
      "name": "HAPI FHIR",
      "owner": "jane-smith@test.com"
    }
  },
  "workflows": {
    "OpenHIE-Workflow": {
      "id": "27ae2937-0959-48b8-a597-b1646aae8c14",
      "name": "OpenHIE Workflow",
      "jobs": {
        "Transform-data-to-FHIR-standard": {
          "id": "e44f65bb-5038-4e17-8d93-b63cbe95254a",
          "delete": true
        },
        "Send-to-OpenHIM-to-route-to-SHR": {
          "id": "977b87ff-f347-42b5-832f-6ae2ca726f32",
          "name": "Send-to-OpenHIM-to-route-to-SHR",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        },
        "Notify-CHW-upload-successful": {
          "id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b",
          "name": "Notify-CHW-upload-successful",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        },
        "Notify-CHW-upload-failed": {
          "id": "be85df30-0abd-4f8e-be17-501f67e18b8d",
          "name": "Notify-CHW-upload-failed",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        },
        "FHIR-standard-Data": {
          "id": "55016dda-42e3-4ee1-8a9c-24e3f23d42f1",
          "delete": true
        },
        "FHIR-standard-Data-with-change": {
          "id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",
          "name": "FHIR-standard-Data-with-change",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        }
      },
      "triggers": {
        "webhook": {
          "id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",
          "type": "webhook"
        }
      },
      "edges": {
        "webhook->Transform-data-to-FHIR-standard": {
          "id": "b2c7407b-0ae9-4ca5-9d6b-ee624976fa54",
          "delete": true
        },
        "Transform-data-to-FHIR-standard->Send-to-OpenHIM-to-route-to-SHR": {
          "id": "d22ed6f4-26a2-4c85-b261-cc110a6851e6",
          "delete": true
        },
        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful": {
          "id": "26c12f7f-7806-4008-87cd-6747998f95f4",
          "condition": "on_job_success",
          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",
          "source_trigger_id": null,
          "target_job_id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b"
        },
        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed": {
          "id": "0630ac96-4f67-4de7-8c3d-0bf3f89f80d9",
          "condition": "on_job_failure",
          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",
          "source_trigger_id": null,
          "target_job_id": "be85df30-0abd-4f8e-be17-501f67e18b8d"
        },
        "webhook->FHIR-standard-Data": {
          "id": "5ce3a8ed-b9eb-464a-a2cd-ba55adc393c2",
          "delete": true
        },
        "FHIR-standard-Data->Send-to-OpenHIM-to-route-to-SHR": {
          "id": "5f459cd9-2882-4a61-a2cc-ec45e58d4837",
          "delete": true
        },
        "webhook->FHIR-standard-Data-with-change": {
          "id": "75e7f7d8-274b-410d-9600-730bbd535229",
          "condition": "always",
          "source_job_id": null,
          "source_trigger_id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",
          "target_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe"
        },
        "FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR": {
          "id": "1e5ba385-2c49-4241-8cd2-042c99a810ec",
          "condition": "on_job_success",
          "source_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",
          "source_trigger_id": null,
          "target_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32"
        }
      }
    }
  }
}
```

## Usar la CLI para interactuar con proyectos {#using-the-cli-interact-with-projects}

La especificación y el estado de un proyecto se pueden usar con distintos fines.
Por ejemplo, puedes generar el estado y la especificación como copias de
seguridad del proyecto, o generar estos archivos y usarlos para auditorías y
registros. La [CLI](https://github.com/OpenFn/kit/tree/main/packages/cli) de
OpenFn incluye comandos para descargar la configuración de un proyecto desde un
servidor de Lightning en ejecución, y para desplegar o enviar cambios a
proyectos existentes en un servidor de Lightning. Para saber más sobre el
control de versiones automatizado con pull y deploy, consulta nuestra
documentación sobre [control de versiones](/manage-projects/link-to-gh.md).

:::info ¿Todavía no tienes la CLI?

Instálala ejecutando `npm install -g @openfn/cli`

:::

Antes de usar la CLI, configúrala con variables de entorno:

```
OPENFN_ENDPOINT=https://app.openfn.org
OPENFN_API_KEY=yourSecretApiToken
```

O con un archivo `config.json`:

```json
{
  // Required, can be overridden or set with `OPENFN_API_KEY` env var
  "apiKey": "***",

  // Optional: can be set using the -p, defaults to project.yaml
  "specPath": "project.yaml",

  // Optional: can be set using -s, defaults to .state.json
  "statePath": ".state.json",

  // Optional: defaults to OpenFn.org's API, can be overridden or set with
  // `OPENFN_ENDPOINT` env var
  "endpoint": "https://app.openfn.org"
}
```

Puedes encontrar más detalles sobre la CLI
[aquí](https://github.com/OpenFn/kit/tree/main/packages/cli#basic-usage).

### `openfn pull` para generar la especificación y el estado {#openfn-pull-to-generate-spec--state}

Para generar los archivos de especificación y de estado de un proyecto
existente, usa:

```sh
openfn pull {YOUR-PROJECT-UUID} -c ./config.json
```

Este comando guarda (o sobrescribe) un archivo de especificación y uno de estado
del proyecto según la ruta que hayas definido en tu configuración.

### `openfn deploy` para crear proyectos nuevos {#openfn-deploy-to-create-new-projects}

Para desplegar un proyecto nuevo en una instancia de Lightning a partir de un
archivo de especificación (sin un archivo de estado), usa:

```sh
openfn deploy -c config.json
```

### `openfn deploy` para actualizar proyectos existentes {#openfn-deploy-to-update-existing-projects}

Con un estado de proyecto válido definido en tu `config.json`, el mismo comando
`openfn deploy` envía tus cambios según la diferencia entre la especificación de
tu proyecto y lo que hay en el servidor.

```sh
openfn deploy -c config.json
Checking https://demo.openfn.org/api/provision/4adf2644-ed4e-4f97-a24c-ab35b3cb1efa for existing project.
Project found.
[CLI] ♦ Changes:
 {
   workflows: [
     {
       jobs: [
         {
-          body: "fn(state => {\n  console.log(\"ok\")\n  return state\n});"
+          body: "fn(state => {\n  console.log(\"some changes here!\")\n  return state\n});\n"
         }
         ...
         ...
         ...
       ]
     }
   ]
 }

? Deploy? yes
[CLI] ♦ Deployed.
```

## Obtener ayuda con la CLI {#getting-help-with-the-cli}

El paquete de la CLI incluye una ayuda integrada (`help`). Si agregas `--help` a
un comando, como `openfn deploy --help`, verás un mensaje de ayuda que describe
el comando y las opciones disponibles al usarlo. Mira este ejemplo:

```sh
openfn deploy --help
openfn deploy

Deploy a project's config to a remote Lightning instance

Options:
      --version                Show version number                                                                                                                     [boolean]
      --help                   Show help                                                                                                                               [boolean]
  -c, --config, --config-path  The location of your config file                                                                                      [default: "./.config.json"]
      --no-confirm             Skip confirmation prompts (e.g. 'Are you sure?')                                                                                        [boolean]
      --describe               Downloads the project yaml from the specified instance                                                                                  [boolean]
  -l, --log                    Set the log level                                                                                                                        [string]
      --log-json               Output all logs as JSON objects                                                                                                         [boolean]
  -p, --project-path           The location of your project.yaml file                                                                                                   [string]
  -s, --state-path             Path to the state file
```

## Resolución de problemas {#troubleshooting}

Esta sección explica cómo resolver algunos errores que podrías encontrar al usar
pull o deploy de OpenFn en tus proyectos.

### Extraneous Workflow ID {#extraneous-workflow-id}

#### Descripción {#description}

Este error ocurre cuando ejecutas `openfn deploy` y los ID de los workflows de
tu projectSpec no coinciden con los de tu instancia de OpenFn. Cuando esto pasa,
el error se muestra en un objeto de error como este:

```
[CLI] ✘ Failed to deploy project openfn-data-buffers-prototype:
{
  "errors": {
    "workflows": {
      "1-ingest-messages": {
        "base": [
          "extraneous parameters: workflow_id"
        ]
      },
      "2-calculate-indicators": {
        "base": [
          "extraneous parameters: workflow_id"
        ]
      }
    }
  }
```

#### Solución {#solution}

Ejecuta `openfn pull` para actualizar tu instancia local y mantener los ID
sincronizados, incorpora tus cambios y vuelve a ejecutar `openfn deploy`.

## Otras versiones {#other-versions}

- [Especificación de portabilidad v2](portability-versions#v2)
- [Especificación de portabilidad v1](portability-versions#v1)
