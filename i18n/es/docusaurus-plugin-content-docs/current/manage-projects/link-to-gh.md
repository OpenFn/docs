---
title: GitHub Sync
sidebar_label: GitHub Sync
slug: /link-to-GitHub
translation_source_hash: 4ae70e41e6cd18383fc6ee3bdcde51b4d49be923
translation_review_status: machine
---

GitHub Sync permite una sincronización bidireccional entre un proyecto de OpenFn
y tu repositorio de GitHub.

Esto significa que los cambios que hagas en un proyecto en OpenFn pueden
guardarse como commits en tu repositorio de GitHub, y los commits que subas a
GitHub pueden actualizar el proyecto en tu aplicación de OpenFn.

:::info Para usuarios de OpenFn en la nube

GitHub Sync solo está disponible en proyectos con planes Core, Growth, Scale o
Custom.

:::

### Configurar tu proyecto para usar GitHub Sync {#configuring-your-project-to-use-github-sync}

Puedes configurar tus proyectos para que accedan a uno o más repositorios de
GitHub. Tienes que tener acceso de administrador al repositorio de GitHub para
poder instalar la aplicación de OpenFn.

Para configurar tu proyecto para usar la sincronización con GitHub, sigue estos
pasos:

1. Ve a `Project Settings > Sync to GitHub`.

2. Si todavía no conectaste tu cuenta de usuario de OpenFn a GitHub, hazlo con
   el botón **"Connect your OpenFn account to GitHub"**.

![Configurar](/img/connect-account-to-github.webp)

3. Elige qué instalación de GitHub usar para tu proyecto, o sigue el consejo de
   abajo para actualizar tus instalaciones.

   :::tip

   Si no ves ninguna instalación, o si las que hay no tienen acceso a los
   repositorios que quieres, haz clic en el enlace **"Create/update GitHub
   installations or modify permissions"** para gestionar la instalación de
   OpenFn en GitHub. Para ello tendrás que darle permisos a la aplicación de
   OpenFn para acceder a tu cuenta y tu repositorio de GitHub. Si necesitas
   ayuda, consulta
   [Gestionar los permisos de GitHub](#managing-github-permissions).

   Cuando termines, puedes volver aquí y actualizar las listas con el botón 🔄
   que está junto a las listas desplegables.

   :::

4. Elige el repositorio y la rama a los que quieres conectar tu proyecto.

![Configurar](/img/github-options.webp)

5. **_Opcionalmente_**, si _primero quieres sincronizar de GitHub a OpenFn y ya
   tienes un archivo de configuración_, agrega la ruta de un archivo
   `config.json` de un proyecto existente.

   :::caution La mayoría de los usuarios deja "Path to config" en blanco.

   Esta funcionalidad avanzada te permite conectarte a un repositorio de GitHub
   que _ya_ tiene un `project.yaml` y un `config.json` de OpenFn. (La mayoría de
   las personas puede saltarse este paso.) Es útil cuando quieres que la primera
   sincronización traiga datos de GitHub a OpenFn. La mayoría de los usuarios
   prefiere que la primera sincronización salga _de_ OpenFn y que la aplicación
   cree por ellos los archivos `config.json` y `project.yaml` necesarios.

   :::

6. Elige la **dirección** de la _primera_ sincronización. Es decir, cuando se
   establezca esta conexión, ¿quieres que la integración _primero_ envíe una
   copia de tu proyecto de OpenFn a GitHub, o que _primero_ sobrescriba tu
   proyecto de OpenFn con un `project.yaml` que ya está en GitHub?

   :::warning Elegir desplegar _primero_ de "GitHub to OpenFn" es destructivo

   De forma predeterminada, tomamos lo que tienes en tu proyecto actual de
   OpenFn y lo enviamos a GitHub para empezar el control de versiones. Si en
   cambio eliges tomar un archivo `project.yaml` de GitHub y sobrescribir tu
   proyecto actual de OpenFn, no podrás recuperar tus workflows existentes en
   OpenFn. Esta funcionalidad cubre ciertos casos de uso avanzados y, a menos
   que sepas lo que estás haciendo, deberías empezar sincronizando de "OpenFn to
   GitHub".

   :::

7. Haz clic en **"Connect Branch & Initiate First Sync"** para terminar. Una vez
   hecho esto, puedes ir a GitHub (con el enlace que se te da) para ver tu
   proyecto de OpenFn como código (y empezar a trabajar con él).

## Gestionar los permisos de GitHub {#managing-github-permissions}

El acceso de la aplicación de OpenFn a tus repositorios de GitHub se concede _en
GitHub_, no en OpenFn. En la interfaz te damos un enlace para instalar y
gestionar estos permisos. Después de hacer clic en ese enlace, puedes seguir
estos pasos:

1. Haz clic en **"Configure"** o **"Install"**.

![Configurar](/img/lightning_gh_configure.webp)

2. Luego selecciona la cuenta de GitHub propietaria del repositorio al que
   quieres conectarte.

![Instalar](/img/lightning_gh_install_openfn.webp)

3. Selecciona el repositorio que quieres sincronizar y haz clic en **"Save"**.

![Permisos](/img/lightning_gh_permissions.webp)

4. Cuando termines de hacer cambios en GitHub, vuelve a OpenFn y actualiza las
   listas de conexiones con el botón 🔄 que está junto a la lista desplegable de
   instalaciones disponibles.

## Usar el control de versiones y gestionar los cambios {#using-version-control--managing-changes}

La funcionalidad `Sync to GitHub` usa GitHub Actions para desplegar
automáticamente (después de un commit en GitHub) o traer (cuando se hace clic en
el botón **"Initiate Sync to Branch"** en OpenFn) los cambios del proyecto, y
así mantener un repositorio sincronizado con tu proyecto de OpenFn.

### Sincronizar de OpenFn a GitHub {#sync-from-openfn-to-github}

Esta sincronización envía a GitHub los cambios de tu proyecto de OpenFn. Esta
operación de sincronización dispara un workflow de acción `openfn pull` en tu
repositorio de GitHub conectado, que trae la configuración más reciente de la
aplicación de OpenFn y la guarda como código en el archivo `project.yaml` de tu
repositorio.

:::info

Tu proyecto de OpenFn puede representarse como código y empaquetarse como
project.yaml, lo que se llama la especificación del proyecto (project spec).
Consulta la [documentación sobre portabilidad](/deploy/portability.md) para
saber más.

:::

Una vez que hayas configurado correctamente la conexión de tu proyecto con
GitHub como se explica [arriba](#managing-github-permissions), puedes iniciar
las siguientes sincronizaciones desde el Canvas, desde el Inspector o desde la
página de control de versiones de la configuración del proyecto.

Para iniciar una sincronización desde el Canvas o el Inspector, presiona
`Ctrl+Shift+s` (o `⌘+Shift+s` en Mac; consulta los
[atajos de teclado](/keyboard-shortcuts.md)). También puedes hacer clic en el
ícono desplegable junto al botón de guardar y seleccionar `Save & Sync`. Al
hacer clic en Save & Sync, verás una ventana modal de confirmación con la opción
de personalizar el mensaje del commit.

![Iniciar Save & Sync](/img/save-and-sync.webp)

:::info La sincronización es una acción "a nivel de proyecto"

Cuando ejecutas `Save & Sync` en un workflow, tus cambios nuevos y los cambios
_anteriores_ sin commit (si los hay) en los recursos de tu proyecto (incluidos
otros workflows) se guardan como commit en GitHub. Es decir, si tú u otra
persona hicieron cambios sin commit en otros workflows del proyecto, también
aparecerán en esa sincronización.

:::

Para sincronizar tu proyecto con GitHub desde la configuración del proyecto:

1. Ve al proyecto donde editaste tus workflows y luego a la página
   `Project Settings`
2. Desde la configuración del proyecto, ve a la página `Version Control`
   haciendo clic en `Sync to GitHub`
3. Haz clic en el botón `Initiate Sync to Branch` para disparar una
   sincronización con el repositorio de GitHub conectado

![Iniciar la sincronización con GitHub](/img/sync_to_github.webp)

### Sincronizar de GitHub a OpenFn {#sync-from-github-to-openfn}

Usa este método de sincronización cuando quieras traer a OpenFn una versión de
tu proyecto desde GitHub. Cuando se dispara esta sincronización, se ejecuta la
acción `openfn-deploy` en GitHub y la especificación de tu proyecto _(el archivo
que termina en `.yaml`)_ se despliega automáticamente en OpenFn.

:::tip Qué tener en cuenta al sincronizar cambios de GitHub a OpenFn

Desde la v2.7.19, las acciones de despliegue y pull de OpenFn admiten rutas
relativas en la especificación del proyecto. Por eso, los proyectos cuya
estructura de directorios usa rutas relativas para el código de los jobs en la
especificación del proyecto se empaquetan y despliegan automáticamente, sin que
tengas que copiar los cambios a la especificación del proyecto. Este nuevo
enfoque da a los desarrolladores más flexibilidad para gestionar mejor el código
de sus jobs en archivos individuales, en lugar de tener todo el código en el
archivo `projectSpec.yaml`.

Encontrarás más información sobre las rutas relativas y la estructura de
directorios en la
[documentación sobre portabilidad](/deploy/portability-v3.md#directory-structure).

:::

### Usar Sync v2 {#using-sync-v2}

De forma predeterminada, GitHub Sync usa la estructura de carpetas antigua para
representar tu proyecto en GitHub. Esa estructura de carpetas se explica más
abajo: crea los archivos `config.json`, `state.json` y `project.yaml` para
representar tu proyecto en tu repositorio de git.

En su lugar, puedes elegir el formato de sincronización v2, que se describe en
las páginas de [Sync](/build-for-developers/cli-sync.md). Este formato "expande"
automáticamente tus workflows y steps en archivos fáciles de leer y escribir, y
ofrece una experiencia mucho mejor para los desarrolladores.

Este estilo v2 pronto será la forma predeterminada de sincronizar proyectos.

También puedes crear un archivo `openfn.yaml` vacío en un repositorio ya
conectado, y la siguiente sincronización generará la estructura de archivos v2.

:::warning

En Sync v1, puedes tener varias sincronizaciones bidireccionales en la misma
rama de un mismo repositorio. Esto es así porque cada proyecto crea su propio
conjunto de artefactos de sincronización (config.json, project.yaml y
state.json). Normalmente esto se hace para sincronizar tus proyectos de
producción y de staging, o varios sandboxes, con el mismo repositorio de GitHub.

Esto no funciona con el nuevo protocolo de sincronización, porque la nueva
sincronización comparte una carpeta `workflows`. Así que cada vez que GitHub
trae los cambios de tu proyecto, sobrescribe `workflows` y borra el state de tus
otros proyectos.

Para hacer esto en Sync v2, puedes:

- Mantener una sincronización bidireccional por rama. Cada sandbox mantiene su
  propio GitHub Sync con una rama distinta de tu repositorio. Esto funciona muy
  bien, porque puedes comparar las diferencias entre tu sandbox y el proyecto
  principal comparando las ramas en git.
- Conectar muchos proyectos a una rama, siempre que solo se sincronicen en un
  sentido. Esto funciona en un entorno de producción donde un proyecto se
  replica en varios despliegues, de modo que un commit en GitHub dispara una
  actualización en todos los proyectos conectados. Funciona siempre que puedas
  garantizar que ningún usuario hará Save & Sync desde los proyectos de
  producción.

:::

## ¿Qué hay en tu repositorio de GitHub? {#what-is-in-your-github-repository}

:::info

Esta documentación describe el formato antiguo de GitHub Sync. El formato más
reciente se describe en las páginas de
[CLI Sync](/build-for-developers/cli-sync.md) y pronto se usará de forma
predeterminada.

:::

Cuando inicias una conexión entre OpenFn y tu repositorio de GitHub, se crea
automáticamente en la rama que indicaste un archivo config.json, que contiene
una referencia a los archivos de especificación y de estado de tu proyecto, y el
endpoint de tu despliegue de OpenFn. De forma predeterminada, OpenFn nombra
todos tus archivos con el UUID de tu proyecto en OpenFn, así que verás archivos
como estos:

```json
{
  "endpoint": "https://app.openfn.org",
  "specPath": "openfn-fdfdf286-aa8e-4c9e-a1d2-89c1e6928a2a-spec.yaml",
  "statePath": "openfn-fdfdf286-aa8e-4c9e-a1d2-89c1e6928a2a-state.json"
}
```

Puedes editar el archivo config.json para adaptarlo a tu estructura de carpetas,
siempre que apunte a la especificación, el estado y el endpoint de OpenFn
correctos. Abajo tienes un ejemplo de archivo config.json con un nombre
personalizado para la especificación y el estado del proyecto.

```json
{
  "endpoint": "https://app.openfn.org",
  "statePath": "./custom-name-for-project-state.json",
  "specPath": "./custom-name-for-project-spec.yaml"
}
```

## Solución de problemas {#troubleshooting}

### Error de GitHub Sync: Unexpected inputs provided: ["snapshots"] {#github-sync-error-unexpected-inputs-provided-snapshots}

Si instalaste GitHub Sync antes del 17 de julio de 2024, quizás tengas que
actualizar tu archivo `.github/workflows/openfn-pull.yml` para que quede así:

```
on:
  workflow_dispatch:
    inputs:
      projectId:
        description: 'OpenFN Project ID'
        required: true
      apiSecretName:
        description: 'OpenFN API Key secret name i.e OPENFN_project_API_KEY'
        required: true
      pathToConfig:
        description: 'Path to config.json'
        required: true
      branch:
        description: 'Branch to commit the project state and spec'
        required: true
      commitMessage:
        description: 'Commit message for project state and spec'
        required: true
      snapshots:
        description: 'IDs of snapshots separated by spaces'
        required: false

jobs:
  pull-from-lightning:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    name: A job to pull changes from Lightning
    steps:
      - name: openfn pull and commit
        uses: openfn/cli-pull-action@v1.1.0
        with:
          secret_input: ${{ secrets[inputs.apiSecretName] }}
          project_id_input: ${{ inputs.projectId }}
          config_path_input: ${{ inputs.pathToConfig }}
          branch_input: ${{ inputs.branch }}
          commit_message_input: ${{ inputs.commitMessage }}
          snapshots_input: ${{ inputs.snapshots }}
```
