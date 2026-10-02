---
title: Portabilidad
translation_source_hash: 9f8f8f055402d673cb33c47b2f12fe9087308afb
translation_review_status: machine
---

La especificación de portabilidad es una idea central de los proyectos de
OpenFn. Es a la vez un estándar técnico y un compromiso continuo. Garantiza que
el código escrito en una aplicación de OpenFn se pueda:

- Desplegar en otra instancia de OpenFn (algo clave para los servicios en
  producción que se ejecutan en el país)
- Ejecutar en una máquina local (una gran noticia para quienes desarrollan
  workflows o adaptors)
- Sacar por completo de OpenFn y ejecutar en un entorno de ejecución de
  JavaScript genérico

Este manifiesto es la base de las funcionalidades principales de OpenFn Sync,
CLI Deploy, la fusión de sandboxes y la exportación e importación de proyectos
desde la app.

:::info Especificaciones de portabilidad anteriores

Nuestro compromiso con la portabilidad no ha cambiado a lo largo de la historia
de OpenFn, pero la forma de abordarlo y de ponerlo en práctica ha tomado muchas
formas.

Este documento describe la especificación de portabilidad más reciente,
publicada en mayo de 2026. Para ver las especificaciones anteriores, consulta
[Versiones de portabilidad](/deploy/portability-versions.md)

:::

Nada en la especificación _tiene_ que ser exclusivo de OpenFn ni de ninguno de
nuestros productos. Imaginamos un futuro en el que el software creado con
Lightning, el OpenFn Integration Toolkit y herramientas de integración o de
workflows completamente nuevas y distintas puedan adoptar esta especificación.

Si te interesa contribuir a la especificación, contacta a OpenFn a través del
[foro de la comunidad](https://community.openfn.org), escríbenos o sugiere
cambios enviando una pull request aquí.

## Proyectos como código {#projects-as-code}

Un principio fundamental de los proyectos de OpenFn es que se pueden representar
como código, en un sistema de archivos o en una rama de git.

Esto mejora la experiencia de desarrollo en OpenFn porque:

1. Permite crear y probar workflows localmente
2. Permite el control de versiones de los proyectos y un registro de auditoría
   de sus cambios
3. Permite a los usuarios trasladar proyectos existentes entre distintas
   instancias (es decir, despliegues) de Lightning.

## Especificación de proyecto {#project-spec}

La unidad de portabilidad, lo que codifica un proyecto y permite compartirlo,
sincronizarlo, desplegarlo y editarlo, se llama especificación de proyecto
(project spec). Es una definición abstracta de un proyecto, un plano que se
puede desplegar en muchos lugares.

Esta estructura define un conjunto de workflows y, para cada workflow, su
configuración principal y la secuencia de steps que ejecuta. Normalmente la
representamos en YAML, porque es cómodo tanto para las personas como para las
máquinas, pero se puede representar en cualquier formato de texto.

Con una copia de la especificación de un proyecto, puedes:

- Importar un proyecto a una instancia de la app de OpenFn
- Ejecutar workflows localmente con la CLI
- Desplegar un proyecto en una instancia de la app de OpenFn
- Fusionar proyectos sandbox localmente

A medida que se introducen nuevas funcionalidades, se agregan claves a esta
estructura con regularidad. Esperamos y nos aseguramos de que todas las
aplicaciones de la especificación admitan estas claves.

Puedes exportar la especificación de un proyecto desde la app, en la página
Settings.

Los workflows también se pueden intercambiar por separado con la misma
especificación. Así, puedes importar un workflow a un proyecto existente, o
ejecutarlo localmente sin clonar todo el proyecto.

## Ejemplo de especificación {#spec-example}

Este es un ejemplo de especificación de proyecto en formato YAML:

```yaml
id: portability-example
name: Portability Example
schema_version: '4.0'
collections:
  - my-data-cache
credentials:
  - name: my-login
    owner: some-user@openfn.org
workflows:
  - name: Event-based workflow
    steps:
      - id: transform-data
        name: Transform data
        expression: fn(s => s)
        adaptor: '@openfn/language-common@latest'
      - id: webhook
        type: webhook
        webhook_reply: before_start
        enabled: true
        next:
          transform-data:
            disabled: false
            condition: always
    id: event-based-workflow
    start: webhook
  - name: Scheduled workflow
    steps:
      - id: common
        name: Common
        expression: fn(s => s)
        adaptor: '@openfn/language-common@3.3.1'
      - id: cron
        type: cron
        enabled: true
        cron_expression: 00 00 * * 1-5
        cron_cursor_job_id: get-data
        next:
          get-data:
            disabled: false
            condition: always
      - id: get-data
        name: Get data
        expression: fn(s => s)
        adaptor: '@openfn/language-http@latest'
        configuration: editor@openfn.org|local login
        next:
          throw-error:
            disabled: false
            condition: on_job_failure
          common:
            disabled: false
            condition: '!state.error'
            label: sometimes
          never:
            disabled: true
            condition: on_job_success
      - id: never
        name: never
        expression: fn(s => s)
        adaptor: '@openfn/language-http@7.2.10'
      - id: throw-error
        name: throw error
        expression: fn(s => s)
        adaptor: '@openfn/language-common@3.3.1'
    id: scheduled-workflow
    start: cron
```

El esquema más reciente de un archivo de especificación de proyecto está
definido en TypeScript en
[portability.d.ts](https://github.com/OpenFn/kit/blob/main/packages/lexicon/portability.d.ts).

## Sincronizar proyectos {#syncing-projects}

Para saber más sobre cómo desplegar, ejecutar, descargar y editar un proyecto,
consulta nuestra documentación detallada sobre
[CLI Sync](/build-for-developers/cli-sync.md).

## Recursos vinculados {#linked-resources}

Aunque diseñamos los proyectos pensando en la portabilidad, algunas
funcionalidades NO son portables por naturaleza.

Por ejemplo, las credenciales contienen tokens muy sensibles que, por diseño y
por naturaleza, deberían ser muy difíciles de extraer de la plataforma de
OpenFn. Por eso, las credenciales no son realmente portables. Al exportar un
proyecto, las credenciales sensibles no se deberían incluir en ese documento
exportado en texto plano.

Del mismo modo, las colecciones son una funcionalidad muy ligada a un despliegue
concreto de una plataforma de OpenFn. La especificación de portabilidad no cubre
los datos de las colecciones (aunque, con los permisos adecuados, se pueden
sincronizar datos entre colecciones).

Este tipo de recursos no portables no forman parte de un proyecto, pero están
VINCULADOS a un proyecto.

Normalmente, los recursos se vinculan por nombre. Las credenciales y las
colecciones solo declaran que dependen de algo con un nombre determinado, que se
tiene que resolver en tiempo de ejecución. La CLI tiene herramientas para eso, y
al desplegar en una instancia de destino, puede que haya que configurar antes la
instancia para que tenga recursos que coincidan.

## Especificaciones de portabilidad anteriores {#legacy-portability-specifications}

Para ver versiones anteriores de nuestro enfoque, consulta
[Versiones de portabilidad](/deploy/portability-versions.md)
