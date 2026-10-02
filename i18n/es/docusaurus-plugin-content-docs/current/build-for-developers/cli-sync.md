---
title: OpenFn Sync
sidebar_label: Sync
slug: /sync
translation_source_hash: e4dbcbf31dd1975afc33be952424a6476b240f73
translation_review_status: machine
---

Los proyectos de OpenFn son totalmente portables, es decir, se pueden mover a
otros lugares.

Puedes crear un proyecto en la aplicación, descargarlo a tu computadora para
desarrollar sin conexión, volver a subirlo a la aplicación o incluso desplegarlo
en otro servidor de OpenFn.

A esto lo llamamos OpenFn Sync, y es una de las funcionalidades más potentes que
ofrecen los proyectos de OpenFn.

## ¿Qué es un proyecto? {#what-is-a-project}

Un proyecto es un conjunto de workflows que resuelve, automatiza o integra
alguna función de negocio.

Un proyecto vive en la aplicación de OpenFn (ya sea en la instancia SaaS en la
nube o en una instancia desplegada de forma privada), pero también puede existir
como archivos en un sistema de archivos.

Cada proyecto lleva asociados algunos metadatos (como un nombre y una
descripción) y cierta configuración, como credenciales y colecciones.

Dentro de la aplicación de OpenFn, un proyecto es una entidad de nivel superior
facturable, y todos sus workflows y su configuración se guardan en tablas de la
base de datos.

El proyecto de la aplicación incluye muchas cosas más: la configuración de
canales, el historial de runs, los dataclips guardados y las sesiones de chat
con el asistente de IA.

El proyecto también puede existir en un sistema de archivos local. En ese caso,
es un conjunto de archivos que la CLI puede leer y ejecutar. Esta representación
local de un proyecto es bastante básica: aquí solo encontrarás workflows y
código.

En el sistema de archivos pueden existir a la vez varios proyectos relacionados.
Cada uno vive en un único archivo de proyecto. Puedes hacer "checkout" o
"expandir" un proyecto a la vez en una carpeta local, lo que crea un archivo por
cada workflow y un archivo por cada step.

Es habitual que un mismo proyecto conceptual (es decir, el código y la
configuración que impulsan una función de negocio) exista en varios lugares a la
vez. Puede tener varias representaciones en la aplicación a través de sandboxes,
tener una copia de seguridad en GitHub, ejecutarse localmente en la computadora
de un desarrollador y distribuirse a varias instancias remotas para ejecutarse
en producción.

A veces llamamos espacio de trabajo a este conjunto de todos los proyectos
conocidos, relacionados y distribuidos. El problema de la sincronización
consiste en cómo se copian, despliegan o replican el código y la configuración
entre las instancias de un proyecto.

No todos los elementos de un proyecto se incluyen en una sincronización. Por lo
general, sincronizamos los workflows del proyecto y algunas de sus opciones.
Pero no sincronizamos los datos asociados, los valores de las credenciales, el
historial de uso ni las sesiones de IA.

## Estructura del proyecto {#project-structure}

OpenFn Sync escribe un proyecto en el sistema de archivos siguiendo una serie de
convenciones. Tanto si usas la CLI como GitHub Sync, un proyecto tiene la
siguiente estructura:

```
├── openfn.yaml
├── .projects
│   ├── main@app.openfn.org.yaml
└── workflows
    ├── my-workflow
    │   ├── my-workflow.yaml
    │   ├── my-step.js
```

En resumen, estos archivos son:

- `openfn.yaml` declara que esta carpeta es un proyecto de OpenFn y contiene
  metadatos y ajustes
- La carpeta `.projects` contiene una representación YAML completa de cada
  proyecto
- La carpeta `workflows` muestra el contenido del proyecto: los steps, las
  conexiones, etc.

Veamos esta estructura con un poco más de detalle.

### project.yaml {#projectyaml}

El archivo de proyecto guarda una copia de todo el estado de un proyecto tal
como está guardado en la aplicación. Si lo abres, verás los workflows
representados como texto plano.

El nombre de un archivo de proyecto tiene la forma `<alias>@<domain>.yaml`. El
alias es un nombre local que sirve para referirse a una versión concreta del
proyecto. El dominio es el de la instancia de OpenFn desde la que se descargó el
proyecto.

No deberías editar el archivo de proyecto localmente, porque cualquier cambio se
perderá la próxima vez que lo obtengas.

Puedes obtener tantos proyectos como quieras, y cada uno se guardará en su
propio archivo project.yaml.

La carpeta `.projects` puede y debería incluirse en el control de versiones.

### workflows {#workflows}

Tener todo el proyecto dentro de un único archivo no es una buena forma de leer
o editar workflows. Por eso la CLI puede hacer "checkout" o "expandir" un
archivo de proyecto en el sistema de archivos.

Hacer checkout es el proceso de escribir cada workflow en un archivo
workflow.yaml y cada step en un archivo step.js. Todo esto vive en el directorio
`workflows`.

Aquí puedes editar los archivos todo lo que quieras, y los cambios se
registrarán cuando subas o despliegues de nuevo a la aplicación.

Solo puedes hacer checkout de un proyecto a la vez. En realidad, esto viene muy
bien para trabajar con git, porque puedes hacer checkout de dos proyectos en
ramas distintas y compararlos o fusionarlos directamente entre sí.

### workflow.yaml {#workflowyaml}

Un archivo workflow.yaml define los steps de un workflow y las conexiones que
los unen.

```
id: my-workflow
name: My Workflow
start: webhook
steps:
  - id: my-step
    name: My Step
    adaptor: '@openfn/language-http@7.2.9'
    expression: ./my-step.js
  - id: webhook
    type: webhook
    enabled: true
    next:
      my-step:
        disabled: false
        condition: always
```

La clave `next` de cada step define las conexiones de salida de ese step, es
decir, los steps que se ejecutan a continuación. En el ejemplo anterior, el step
`webhook` se ejecuta primero (lo determina la clave `start`) y define una única
conexión a `my-step`, que se ejecuta siempre.

El código de cada step vive en su propio archivo .js. Puedes modificar el código
libremente y sincronizarlo de nuevo con el servidor en cualquier momento. Si
quieres cambiar el nombre de un step, asegúrate de actualizar el nombre del
archivo del step y la ruta de la clave `expression` en `workflow.yaml`.

### openfn.yaml {#openfnyaml}

Es un archivo de configuración de nivel superior que, en general, puedes
ignorar. Las herramientas de OpenFn lo usan para reconocer la carpeta raíz de un
proyecto. También contiene opciones de configuración para todos los proyectos
locales y metadatos sobre el proyecto que tienes con checkout.

## Autorización {#authorization}

Antes de usar la CLI para obtener algo de la aplicación, tendrás que
proporcionar una autorización.

La mejor forma de hacerlo es definir una variable de entorno llamada
`OPENFN_API_KEY`. Dale el valor de tu
[token de acceso personal](/manage-users/api-tokens.md#about-api-tokens).

:::info Tokens de acceso personal

Consulta [Crear y administrar tokens de API](/manage-users/api-tokens.md) para
obtener ayuda con la configuración de un token.

:::

Si te conectas a varios proyectos o aplicaciones de OpenFn, puedes crear un
archivo `.env` y definir ahí las variables de entorno que necesites. La CLI
cargará este archivo e indicará qué claves está usando. Los valores de tu
archivo `.env` tienen prioridad sobre los definidos en tu sistema.

También puedes pasar `--api-key` directamente como opción en la mayoría de los
comandos.

:::info

Esta guía da por hecho que quieres sincronizar con nuestra aplicación SaaS
alojada en [app.openfn.org](https://app.openfn.org)

Puedes sincronizar con otra instancia de OpenFn definiendo la variable de
entorno `OPENFN_ENDPOINT` o pasando el argumento `--endpoint` en la mayoría de
los comandos.

:::

## Descargar un proyecto {#downloading-a-project}

Para descargar un proyecto de la aplicación a tu computadora, ejecuta:

```bash
openfn project pull <uuid>
```

Esto crea un archivo en tu directorio de trabajo llamado
`.projects/main@app.openfn.org.yaml`.

:::info

Cada proyecto de la aplicación tiene un identificador único, llamado UUID, que
sirve para referirse a él. Es un número de 32 dígitos con la forma
`a6cc5bdd-b04f-4413-b4b8-132a5115acac`

Puedes copiar el UUID de un proyecto desde la URL al abrirlo en la aplicación.
Es la cadena larga que va después de `projects`.

Por ejemplo, el UUID es la parte en negrita de:
{'https://openfn.org/projects/'}<b>{'abc087dd-3963-4260-8d09-ced2e1ff2bb0'}</b>{'/w'}

:::

Después de descargar un proyecto por primera vez, no hace falta volver a indicar
el UUID. Puedes usar el alias, el id o dejar el identificador en blanco para
usar el proyecto que tienes con checkout.

El comando `project pull` hace tres cosas:

- Si no tienes un archivo `openfn.yaml`, crea uno
- _Obtiene_ (descarga) tu proyecto de la aplicación y lo guarda en un único
  archivo en `.projects/main@app.openfn.org.yaml`
- Hace _checkout_ (expande) de ese proyecto en tu sistema de archivos, con cada
  workflow y cada step en su propio archivo.

## Alias {#aliases}

En lugar de identificar un proyecto local con un UUID o un id largo, puedes usar
un _alias_.

Cada proyecto local se guarda en un archivo como `main@app.openfn.org.yaml`,
donde la parte `main` es el alias local del proyecto.

Puedes descargar un proyecto y definir el alias al mismo tiempo ejecutando:

```bash
openfn project pull <uuid> --alias dev
```

Esto guarda el proyecto en `dev@app.openfn.org.yaml`.

Para cambiar el alias, basta con cambiar el nombre del archivo. Lo que vaya
antes de `@` se tratará como el alias.

## Hacer checkout {#checking-out}

Puedes hacer checkout de un proyecto en cualquier momento con:

```bash
openfn project checkout <alias|id|uuid>
```

Esto actualiza tu carpeta local de workflows con el proyecto indicado.

Si un checkout va a hacer que se pierdan cambios (es decir, cambiaste un archivo
step.js pero no lo desplegaste), recibirás una advertencia. Agrega `--force`
para ignorar el cambio, o ejecuta `openfn project clean` para borrar y
restablecer la carpeta `workflows`.

El checkout solo modifica los archivos que gestiona la CLI, básicamente los
archivos de workflows y de steps. Si tienes otros archivos en el sistema de
archivos (como archivos de state o de pruebas), no se tocan.

## Ejecutar workflows en proyectos {#running-workflows-in-projects}

Puedes ejecutar cualquier workflow del proyecto con checkout por su nombre:

```bash
openfn my-workflow
```

La CLI busca el workflow en tu carpeta `workflows` y lo ejecuta. Puedes pasar
state con `-s` y definir los niveles de log como de costumbre.

Al ejecutar un workflow por su nombre de esta forma, obtienes dos ventajas:

- Las **credenciales** se cargan automáticamente desde el mapa de credenciales
  de `openfn.yaml`, así que no necesitas pasar `--credential-map`
- Las **colecciones** usan el servidor configurado en `openfn.yaml`, así que no
  necesitas pasar `--collections-endpoint` ni nada más.

## Desplegar un proyecto {#deploying-a-project}

Para subir tus cambios locales de nuevo a la aplicación, ejecuta:

```bash
openfn project deploy
```

Esto toma el proyecto que tienes con checkout y lo sube a la aplicación. También
indica qué cambió en el proyecto local.

Antes de subirlo, la CLI obtiene la última versión del proyecto desde la
aplicación y comprueba si hay **divergencia**, es decir, si alguno de los
workflows que cambiaste localmente también se editó en la aplicación desde la
última vez que lo descargaste. Si es así, el despliegue falla con un error para
evitar que sobrescribas por accidente el trabajo de otra persona.

Si quieres subirlo de todos modos, pasa `--force`:

```bash
openfn project deploy --force
```

Para ver qué cambiaría sin subir nada, usa `--dry-run`. Esto registra en el log
el payload final de la actualización que se enviaría a la aplicación (como una
estructura JSON).

Puedes desplegar el proyecto con checkout como un proyecto nuevo en la
aplicación de destino agregando la opción `--new`. Solo está disponible si
tienes privilegios de superusuario en la instancia de destino.

También puedes desplegar el proyecto con checkout en otro proyecto de la
aplicación pasando su alias, id o uuid:

```
openfn project deploy main
```

Si tienes un sandbox de desarrollo con checkout, esto lo fusionaría directamente
en el proyecto principal de la aplicación.

Ten en cuenta que tienes que haber obtenido el proyecto de destino localmente
antes de poder desplegarlo.

## Despliegue avanzado {#advanced-deployment}

De forma predeterminada, `openfn project deploy` toma el proyecto con checkout y
lo sube al servidor del que vino originalmente (según lo define el archivo de
proyecto).

Pero también puedes usar deploy para sincronizar entre proyectos. Normalmente lo
harás para promover un sandbox de desarrollo o de staging a producción. Incluso
puedes usarlo para desplegar un proyecto de la aplicación SaaS en otra instancia
de OpenFn completamente distinta.

### Desplegar directamente desde un archivo de spec o de state {#deploy-straight-from-a-spec-or-state-file}

Con cualquier archivo de proyecto (por ejemplo, main@app.openfn.org.yaml) o una
spec exportada (en formato v1 o v2, tal como se exporta desde la configuración
de la aplicación), puedes desplegar directamente en otra instancia sin tener que
hacer checkout de nada antes.

Solo tienes que pasar el nombre del archivo de origen como primer argumento. Si
tienes acceso de superusuario, puedes crear un proyecto nuevo así:

```
openfn project deploy dev@localhost.yaml --new --endpoint https://app.openfn.org
```

Si ya tienes un archivo de proyecto registrado localmente (lo tendrás si lo
obtuviste o descargaste antes), puedes pasar el alias (por ejemplo, `main`) para
desplegar en esa instancia.

```
openfn project deploy dev@localhost.yaml main
```

Lo más probable es que quieras forzar el despliegue, aunque se detecte
divergencia. Para eso, pasa la opción `-f`.

Pasa `--no-confirm` o `-y` para omitir las preguntas de confirmación (esto es
importante si ejecutas scripts automatizados).

### Gestionar credenciales {#managing-credentials}

Gestionar las credenciales durante un despliegue puede ser complicado.

Las credenciales del proyecto de origen TIENEN que existir en el proyecto de
destino; de lo contrario, se producirá un error.

Todavía no hay forma de automatizar por completo la creación de credenciales,
porque plantea muchos problemas de seguridad.

Sin embargo, la CLI ofrece algunas opciones.

Puedes quitar por completo las credenciales del despliegue pasando
`--credentials none`. Ten en cuenta que el workflow no se ejecutará en el
destino hasta que se conecten manualmente las credenciales a los steps que las
necesitan.

:::tip

El argumento `--credentials` se puede pasar como `-c` o `--cred`.

:::

También puedes mapear credenciales, si el propietario o el nombre de las
credenciales es distinto en el sistema de destino.

Puedes hacerlo con la CLI pasando un mapa separado por comas:

```
openfn project deploy spec.yaml --credentials a:service@openfn.org|cred-a,b:service@openfn.org|cred-b
```

Esto toma dos credenciales, `a` y `b`, las mapea a los nombres `cred-a` y
`cred-b` y cambia el propietario a `service@openfn.org`.

También puedes definir estos mapeos en un archivo yaml (el mismo que se usa en
la ejecución). Define la clave `alias` debajo del identificador de la
credencial:

```
somedev@gmail.com|a:
  alias: service@openfn.org|cred-a

somedev@gmail.com|a:
  alias: service@openfn.org|cred-b

```

Luego pasa la ruta del archivo a la CLI con `--credentials`:

```
openfn project deploy spec.yaml --credentials credentials.yaml
```

## Sandboxes {#sandboxes}

La CLI es totalmente compatible con los sandboxes. Trátalos como cualquier otro
proyecto: obtenlos la primera vez con su UUID.

Usa el comando `checkout` para cambiar entre sandboxes y proyectos localmente.
Recuerda que solo puedes tener un proyecto con checkout a la vez. La CLI te
avisará si un checkout va a hacer que pierdas cambios locales.

Al obtener un sandbox, el alias del proyecto será, de forma predeterminada, el
nombre del sandbox.

Puedes fusionar dos proyectos localmente con `openfn project merge` y desplegar
el proyecto resultante en la aplicación (probablemente tendrás que forzar la
subida del cambio). Esto es útil para resolver conflictos.

## Resolver conflictos de fusión {#resolving-merge-conflicts}

A veces, fusionar un sandbox puede sobrescribir cambios en el proyecto de
destino. Esto puede pasar si un workflow del proyecto principal cambió _después_
de que se volviera a crear el sandbox, así que el sandbox no lo conoce. Al
fusionar, se perdería ese cambio en main.

Puedes resolver estos conflictos localmente con la CLI y git (u otro control de
versiones equivalente) y luego subir el proyecto resuelto a la aplicación.

:::tip

¡No necesitas un repositorio de GitHub para usar git!

Git es simplemente un programa que se ejecuta en la terminal de tu sistema
local.

GitHub es una aplicación alojada en la nube que a) ofrece acceso remoto a
repositorios git y b) ofrece una interfaz completa sobre un sistema de archivos
controlado por git.

:::

Así se hace con git. Este ejemplo da por hecho que quieres fusionar un sandbox
`dev` en tu proyecto principal `main`.

- Asegúrate de tener lista una carpeta local para trabajar. Tiene que ser un
  repositorio git. Ejecuta `git init` en cualquier carpeta para configurar git
  (no necesitas un repositorio de GitHub conectado)
- Descarga tu proyecto principal localmente: `openfn project pull <main-uuid>`
  (da por hecho que OPENFN_API_KEY está definida)
- Haz commit de tus cambios en git:
  `git add . && git commit -m "checkout main project"`
- Ahora descarga tu sandbox localmente: `openfn project pull <dev-uuid>`
- Esto hace que tu carpeta local `workflows/` se vea como tu sandbox
- Si ahora ejecutas `git status` y `git diff`, verás todos los cambios que se
  aplicarían al proyecto principal al hacer la fusión
- Comprueba que estás conforme con las diferencias. Quizás quieras revertir
  algunos archivos para que queden como en main
  (`git checkout main workflows/my-workflow/job.js`). O quizás quieras combinar
  a mano cambios de los dos proyectos.
- Cuando termines, sube el proyecto a la aplicación con la CLI:
  `openfn project deploy main`
- Si quieres, puedes hacer commit de tus cambios en git (pero para este ejemplo
  no hace falta)

Para cambios más complejos, puedes probar este enfoque:

- Descarga `main` localmente y haz commit
- Crea una rama nueva, y descarga `dev` y haz commit en esa rama
- Vuelve a la rama principal: `git checkout main`
- Fusiona la rama `dev` en main: `git merge dev`
- Resuelve los conflictos que indique git (cada conflicto de git debería
  corresponder a un lugar donde tanto main como el sandbox hicieron cambios)
- Cuando termines, usa la CLI para forzar el despliegue de tus cambios

## GitHub {#github}

Puedes configurar un proyecto para que se sincronice automáticamente con GitHub.
Así, los commits en GitHub despliegan automáticamente los cambios en un proyecto
de OpenFn, y al presionar Save & Sync en la aplicación se hace commit de vuelta
en GitHub.

Internamente, GitHub Sync usa los comandos `pull` y `deploy` de la CLI, que se
ejecutan desde GitHub Actions, para sincronizar tus proyectos.

Ten en cuenta que, de forma predeterminada, GitHub Sync usa el formato antiguo,
con los archivos `state.json`, `project.yaml` y `config.json`. Al configurar un
nuevo GitHub Sync, puedes elegir el formato v2. La sincronización v2 solo sirve
para descargar un único proyecto por rama en GitHub, porque varios proyectos
sobrescribirían la misma carpeta `workflows/`.

Consulta [Control de versiones](/manage-projects/link-to-gh.md) para obtener más
detalles sobre GitHub Sync.

## Referencia rápida {#cheatsheet}

| Comando                                  | Descripción                                                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| `openfn project pull <uuid>`             | Descarga un proyecto de la aplicación por primera vez                                      |
| `openfn project pull`                    | Vuelve a descargar el proyecto actual                                                      |
| `openfn project pull <uuid> --alias dev` | Descarga y define un alias local                                                           |
| `openfn project fetch <alias/id/uuid>`   | Obtiene un proyecto sin hacer checkout                                                     |
| `openfn project`                         | Lista todos los proyectos locales de la carpeta de trabajo actual                          |
| `openfn project checkout <alias>`        | Cambia a otro proyecto local                                                               |
| `openfn project deploy`                  | Despliega en la aplicación el proyecto con checkout                                        |
| `openfn project deploy --dry-run`        | Prueba un despliegue, pero omite el paso de subida                                         |
| `openfn project deploy --force`          | Fuerza la subida del proyecto con checkout, ignorando cualquier advertencia de divergencia |
| `openfn <workflow-name>`                 | Ejecuta un workflow del proyecto con checkout                                              |
| `openfn project clean`                   | Borra la carpeta `workflows` y todo su contenido, y luego hace checkout del proyecto       |
