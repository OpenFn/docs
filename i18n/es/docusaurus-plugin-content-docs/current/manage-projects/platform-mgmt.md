---
title: Gestión de proyectos
translation_source_hash: e35856d95724118bd7c59b0f7f385392009870ac
translation_review_status: machine
---

## ¿Qué es un proyecto? {#what-is-a-project}

Un `Project` en OpenFn es un espacio de trabajo compartido de un equipo u
organización, que contiene sus workflows, credenciales y colaboradores, todos
limitados a ese proyecto.

## Gestionar proyectos {#managing-projects}

En la versión `v2.7.14` agregamos una tabla `Projects` para que los usuarios
puedan gestionar sus proyectos de OpenFn en forma de tabla. Es la página nueva
que verás cada vez que inicies sesión en tu cuenta de OpenFn. Cuando haces clic
en `Projects` en el menú lateral, ves la lista de proyectos a los que tienes
acceso como colaborador.

![Tabla de proyectos](/img/projects-table.webp)

## Crear un proyecto nuevo {#creating-a-new-project}

Para crear un proyecto nuevo, sigue estos pasos:

1. Inicia sesión en tu cuenta de OpenFn o, si estás en otro proyecto, ve a la
   tabla de proyectos haciendo clic en `Projects` en la ruta de navegación.
2. En la tabla de proyectos, haz clic en `Create project`. Se abrirá una ventana
   modal para que ingreses los datos del proyecto.
3. Escribe el `name` y la `description` del proyecto nuevo.
4. Si usas OpenFn en la nube, tendrás que seleccionar la `billing account` a la
   que se facturará el proyecto nuevo.

:::info Para usuarios en la nube en app.openfn.org

1. Los proyectos de una misma cuenta de facturación deberían tener nombres
   únicos.
2. Cada usuario tiene un proyecto inicial gratuito. Para crear un proyecto
   nuevo, necesitas un método de pago válido y elegir un plan.

:::

![Ventana modal para crear un proyecto](/img/create-project-modal.webp)

## Actualizar la información del proyecto {#updating-project-information}

Puedes ver la información de tu proyecto en `Settings` (en el menú lateral de la
aplicación). Ahí puedes ver o editar el nombre y la descripción del proyecto.

![Resumen del proyecto](/img/lightning_project_overview.webp)

También puedes exportar todo tu proyecto "como código", ya sea para guardarlo o
para editarlo localmente. Encontrarás más información sobre esta funcionalidad
en nuestra [página de portabilidad](/deploy/portability.md).

## Gestionar la concurrencia del proyecto {#managing-project-concurrency}

OpenFn admite runs concurrentes de workflows y proyectos. Esto significa que
varios runs del mismo workflow o proyecto pueden ejecutarse al mismo tiempo,
siempre que estén configurados para ejecutarse en paralelo.

Para gestionar la concurrencia del proyecto, usa la sección `Concurrency` de la
configuración del proyecto.

![Concurrencia del proyecto](/img/configuring-project-concurrency.webp)

Puedes habilitar o deshabilitar la ejecución en paralelo de un proyecto. Cuando
la ejecución en paralelo está deshabilitada, solo puede ejecutarse un run a la
vez de un workflow del proyecto.

### Workflows en modo síncrono {#sync-mode-workflows}

Ten en cuenta que los workflows que se disparan con un webhook y están
configurados para responder de forma síncrona suelen ejecutarse en una cola de
prioridad (para reducir los tiempos de solicitud y respuesta HTTP), según lo
configure el superusuario de tu instancia, e IGNORAN todos los límites de
concurrencia. Es decir, usan el número máximo de workers de prioridad
disponibles para reducir los tiempos de respuesta.

:::warning Los workflows en modo síncrono ignoran la concurrencia del proyecto

Usan el número máximo de workers disponibles, según lo configure el
administrador de tu instancia.

:::

### Limitador de concurrencia por workflow {#workflow-level-concurrency-limiter}

:::info Concurrencia por proyecto frente a concurrencia por workflow

La concurrencia por proyecto tiene prioridad sobre la concurrencia por workflow.
Esto significa que, si la ejecución en paralelo está deshabilitada en un
proyecto, se ignora la configuración de concurrencia de sus workflows.

:::
