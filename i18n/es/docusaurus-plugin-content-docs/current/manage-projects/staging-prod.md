---
title: Control de versiones para proyectos de staging y producción
sidebar_label: Proyectos de staging y producción
slug: /staging-prod
translation_source_hash: 87d54b2bb53b4c41a1fae83e0cb1cf5514e4d665
translation_review_status: machine
---

Usar proyectos separados de producción y de staging (pruebas) para construir y
probar tus workflows antes de empezar a usarlos en producción es una práctica
segura y eficiente. El [control de versiones](/manage-projects/link-to-gh.md)
hace que este proceso sea fluido. Esta guía te explica cómo configurar tus
proyectos de OpenFn y tu repositorio de GitHub, y te da dos ejemplos de cómo
gestionar tu flujo `Staging > Production`: uno para proyectos nuevos y otro para
proyectos existentes en los que quieres agregar un proyecto y una rama de
staging.

### Configuración para proyectos nuevos {#setup-for-new-projects}

1. Primero, crea un proyecto `Production` y otro `Staging` en OpenFn (2
   proyectos)

![Proyectos de producción y staging](/img/openfn_prod_staging.webp)

2. Elige o crea un repositorio de GitHub para tu proyecto, y crea una rama
   `staging`

![Ramas main y staging](/img/staging_prod_branches_gh.webp)

3. Conecta tus proyectos a las ramas `main` y `staging`, respectivamente. Sigue
   [esta guía](/manage-projects/link-to-gh.md) para configurar la conexión
4. En cada repositorio, crea un archivo `.js` vacío para tu job. Asegúrate de
   que tengan el mismo nombre y la misma ruta en cada repositorio (por ejemplo,
   `upsert-contacts.js`). Estos archivos guardarán el código del job al que se
   vincularán en el siguiente paso.

5. Cuando conectaste las ramas a tus proyectos en el paso 3, se creó
   automáticamente un archivo `spec.yaml` en la rama después de la primera
   sincronización (junto con otros dos archivos de configuración). Abre estos
   archivos en GitHub y busca tu job en el archivo. Reemplaza el contenido de
   `body` por `path:  {path to the related js file}`. Haz esto tanto en la rama
   `main` como en la rama `staging`.

![Spec de main](/img/path_main.webp) ![Spec de staging](/img/path_staging.webp)

6. ¡Ya está todo configurado!
7. Para sincronizar un cambio de tu proyecto de staging a producción **con la
   aplicación de OpenFn**, ve a tu proyecto `Staging` en OpenFn y edita tu job.
   Luego ve a `Settings` > Sync to `GitHub` del proyecto y haz clic en
   `Initiate Sync to Branch`.
8. También puedes editar directamente el código del job en GitHub y hacer commit
   de los cambios en la rama `staging` en GitHub.
9. Cuando hayas hecho commit de los cambios en tu rama `staging`, verás en
   GitHub un aviso de que hubo cambios recientes. Haz clic en
   `Compare & pull request`.

![Crear pull request](/img/staging_pushes.webp)

10. Crea una pull request. Incluirá automáticamente todos los cambios que se
    hicieron en los archivos de la rama staging.

![Guardar pull request](/img/create_pr.webp)

11. Según el flujo de trabajo de GitHub de tu equipo, pide a alguien que apruebe
    y haga merge de la pull request, o haz clic en `Merge pull request`.

12. Tus cambios se desplegarán automáticamente en tu proyecto `Production` de
    OpenFn (vinculado a la rama `main` de GitHub).

### Configuración para proyectos existentes {#setup-for-existing-projects}

1. Primero, asegúrate de que el código de todos tus jobs esté guardado en
   archivos `.js` separados (como `Notify-CHW-upload-successful.js`) en GitHub,
   vinculados en tu `spec.yaml` de esta forma:

```yaml

Notify-CHW-upload-successful:
        name: Notify-CHW-upload-successful
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          path: ./workflow/Notify-CHW-upload-successful.js

```

Encontrarás más información sobre esta configuración en nuestra
[documentación de GitHub](/manage-projects/link-to-gh.md#sync-from-github-to-openfn).

2. Con esto listo, crea una nueva rama `staging` en GitHub a partir de tu rama
   de producción `main`, que guarda tu proyecto actual. Para hacerlo, en tu
   repositorio de GitHub, entra en `Branches` (donde dice `1 Branch` en la
   captura de pantalla de abajo).

![Ramas](/img/1_branch.webp)

3. Haz clic en `New branch`, ponle un nombre como `staging` y, si ya tienes
   varias ramas, asegúrate de que el origen sea `main`. Luego haz clic en
   `Create new branch`.

![Nueva rama](/img/new_branch.webp)

4. Ve a tu nueva rama `staging`. **Este paso es importante. Fíjate en que la
   nueva rama contiene ahora los 3 archivos de configuración (`config.json`,
   `spec.yaml` y `state.json`) que estaban en la rama main. Elimínalos de la
   rama `staging`.** En los pasos siguientes se crearán otros nuevos, propios de
   la rama staging.

5. Ahora ve a OpenFn y crea un nuevo proyecto `Staging`.

6. Sigue [esta guía](/manage-projects/link-to-gh.md) para configurar la conexión
   de GitHub con tu rama `staging`, y haz clic en `Initiate a sync` (desde la
   página `Settings > Sync to GitHub` del proyecto). Esto creará los archivos de
   configuración necesarios en la rama de GitHub.

7. En el archivo `spec.yaml` recién generado en la rama `staging` de GitHub,
   vincula los archivos `.js` de tus jobs como se explica en el paso 1.

8. Cuando inicies una nueva sincronización desde OpenFn, el código de los jobs
   de los workflows configurados en la aplicación se sincronizará con los
   archivos de job de OpenFn correspondientes en GitHub.

9. Para hacer cambios futuros en tu proyecto "Staging", sigue los pasos 7 a 12
   de la sección `Setup for new projects` de esta guía.
