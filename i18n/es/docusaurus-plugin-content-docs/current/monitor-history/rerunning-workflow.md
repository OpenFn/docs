---
title: Reintentar y cancelar runs
sidebar_label: Reintentar y cancelar
translation_source_hash: c00e54f15cb364cb77cc6975b6465eb09f520470
translation_review_status: machine
---

Desde la página `History` puedes realizar acciones sobre work orders y runs
según su estado actual. Usa **Retry** para volver a ejecutar work orders
completadas, o **Cancel** para quitar runs pendientes de la cola.

## Acciones disponibles según el estado de la work order {#available-actions-by-work-order-state}

| Estado de la work order                                                                      | Acciones disponibles |
| :------------------------------------------------------------------------------------------- | :------------------- |
| **Pending** (runs en espera en la cola)                                                      | Cancel               |
| **Running**                                                                                  | Ninguna              |
| **Estados finales** (Success, Failed, Crashed, Killed, Exception, Lost, Cancelled, Rejected) | Retry, Retry from    |

:::info Seleccionar work orders con estados distintos

Si seleccionas varias work orders de categorías de estado distintas (por
ejemplo, algunas pendientes y otras fallidas), los botones Retry y Cancel se
desactivan. Para usar las acciones en bloque, selecciona solo work orders de la
misma categoría de estado.

:::

## Reintentar una work order {#retry-a-work-order}

¿Falló un step de tu workflow? ¿Quieres volver a sincronizar datos históricos?
Sea cual sea el motivo, mira el siguiente video tutorial
([o abre el enlace](https://youtu.be/DvLRA6kloNE?si=U0NMx-HsCMZxeJwg)) para
aprender a volver a ejecutar tu workflow.

<iframe width="784" height="441" src="https://www.youtube.com/embed/DvLRA6kloNE?si=Seczc1JFhThQBbUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Reintentar desde la página History {#retry-via-history-page}

Para volver a ejecutar tu workflow desde la página `History`:

1. Busca tu `Work Order` fallida (usa la barra de búsqueda o los filtros si hace
   falta)
2. Contrae la work order para ver los `Runs` relacionados
3. Haz clic en `rerun` junto al step desde el que quieres volver a ejecutar el
   workflow. Elige el primer step para empezar desde el principio, o un step
   posterior para volver a ejecutar el workflow a partir de ese step.
4. Esto crea un nuevo `Run` asociado a la misma work order. Revisa el `Status`
   para ver si este run completó la work order con éxito.

### Reintentar desde la vista del Inspector {#retry-via-inspector-view}

Para volver a ejecutar tu workflow desde la página `Inspector`:

1. Busca tu `Work Order` fallida (usa la barra de búsqueda o los filtros si hace
   falta)
2. Contrae la work order para ver los `Runs` relacionados
3. Haz clic en `inspect` junto al step que quieres abrir en la vista `Inspector`
   para seguir investigando el problema.
4. Se abre la vista `Inspector`, donde puedes ver el `Input` y el `Output` del
   step fallido. Si hace falta, puedes editar la lógica personalizada en el
   panel `Editor`.
5. Cuando quieras reintentar el workflow con el mismo Input, haz clic en
   `Rerun from here`. Esto crea un nuevo `Run` para la misma work order. Ve a la
   página `History` y revisa el `Status` para ver si este run completó la work
   order con éxito.
6. Si prefieres crear una work order _nueva_ (en lugar de reintentar la misma),
   puedes hacer clic en el menú desplegable junto a "Rerun from here" y elegir
   _en su lugar_ `Create New Work Order`.

## Cancelar runs pendientes {#cancel-pending-runs}

Si hay runs atascados en la cola o se crearon por error, puedes cancelarlos. Al
cancelarlos, los runs pasan de `available` a `cancelled` y el estado de la work
order correspondiente pasa de `pending` a `cancelled`. Consulta
[Códigos de estado](/monitor-history/status-codes.md) para saber qué significa
cada estado.

Hay varias formas de cancelar:

- **Cancelar todos los runs de una work order:** haz clic en el botón de acción
  de una fila de work order pendiente en la página History para cancelar todos
  sus runs pendientes.
- **Cancelar un solo run:** haz clic en el botón de cancelar junto a un run, ya
  sea en la lista de runs o en la página de detalle del run.

:::note Runs que empiezan antes de la confirmación

Si un run pendiente empieza a ejecutarse entre el momento en que abres el
diálogo de confirmación de la cancelación y el momento en que confirmas, ese run
**no** se cancela. Solo se ven afectados los runs que siguen en la cola en el
momento de la confirmación.

:::

## Acciones en bloque {#bulk-actions}

Puedes actuar sobre varias work orders a la vez seleccionándolas con las
casillas de verificación de la página History:

- **Cancelar en bloque:** selecciona work orders en estado `Pending` y haz clic
  en el botón `Cancel` para cancelar todos los runs pendientes de las work
  orders seleccionadas.
- **Reintentar en bloque:** selecciona work orders en un estado final (por
  ejemplo, Failed o Crashed) y haz clic en el botón `Retry`.

Los botones de acciones en bloque solo se activan cuando todas las work orders
seleccionadas pertenecen a la misma categoría de estado. Si seleccionas work
orders con estados distintos (por ejemplo, algunas pendientes y otras fallidas)
o solo work orders en ejecución, se desactivan todos los botones de acción.
