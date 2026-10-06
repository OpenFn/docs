---
title: History y búsqueda en OpenFn
sidebar_label: History y búsqueda
translation_source_hash: 598667faa8236bba7833a136f1086d7a837ae6d7
translation_review_status: machine
---

Para los administradores de la plataforma, `History` es la consola central para
supervisar toda la actividad de tus workflows activos. Sigue leyendo para
conocer sus componentes principales.

## History

La página `History` muestra una lista de todas las
[work orders](/get-started/terminology.md#work-order) y los
[runs](/get-started/terminology.md#run) que se procesaron en un proyecto.

![History](/img/case-referral-history.webp)

## Ejecución de workflows: work orders y runs {#workflow-execution-work-orders-and-runs}

Los workflows de OpenFn se ejecutan así:

1. Un `Trigger` del workflow se activa con un evento de webhook, un temporizador
   cron o una acción manual.
2. Esto crea una `Work Order`: una solicitud para ejecutar un workflow con una
   entrada determinada (por ejemplo, el envío de un formulario nuevo o un
   registro de paciente que hay que procesar). Para que una `Work Order` se
   complete, debería llegar a un step final con éxito (sin errores); así se
   garantiza que el procesamiento terminó.
3. Después se ejecuta un `Run` para intentar completar el workflow con éxito.
   Este run tendrá un [código de estado](/monitor-history/status-codes.md) que
   indica si los steps del workflow se procesaron correctamente.
4. Si el primer `Run` falla, puedes volver a ejecutarlo para "reintentar" el
   workflow. Se creará un segundo `Run`. Si tiene éxito, tanto el run como la
   work order relacionada se actualizarán con el estado `success`.

También puedes **cancelar** runs pendientes o **reintentar** work orders
completadas directamente desde la página History. Consulta
[Reintentar y cancelar runs](/monitor-history/rerunning-workflow.md) para más
detalles.

![History Page](/img/history-page-annotated.webp)

Consulta las demás páginas de esta sección para saber más sobre cómo
inspeccionar runs, solucionar problemas y volver a ejecutar runs fallidos.

## Cómo funciona la búsqueda {#how-search-works}

Con la barra de búsqueda de la página History puedes encontrar work orders cuyos
dataclips de entrada o salida _relacionados_, o cuyos logs de runs, contienen
cadenas de texto específicas. De forma predeterminada, el sistema busca solo en
los logs de runs, pero puedes elegir buscar en cualquiera de estas tres
opciones, o en todas:

![Search Options](/img/search-options.webp)

1. UUIDs de OpenFn de work orders, runs o steps
2. Cuerpos de los dataclips de entrada y salida
3. Logs de runs

Si buscas texto dentro de un dataclip de entrada o salida o de los logs de runs,
se aplica una búsqueda `tsvector`. Este método de búsqueda te permite encontrar
work orders rápidamente y admite coincidencias parciales en todo el texto de los
logs de runs y en las "keys" y los "values" de tus dataclips.

:::caution Es posible que los dataclips de entrada muy grandes o complejos no se
indexen

Actualmente no es posible crear índices `tsvector` de más de 1 MB, por lo que es
posible que los dataclips de entrada muy grandes o complejos no aparezcan en los
resultados de búsqueda. Por lo general esto no ocurre hasta que te acercas a los
10 MB de JSON, pero la cantidad de lexemas y posiciones distintos de tu JSON
influye en el tamaño final del índice.

Más información en la página
["text search limitations"](https://www.postgresql.org/docs/current/textsearch-limitations.html)
de la documentación de Postgres.

:::

Las coincidencias parciales funcionan mejor al principio de las palabras, así
que si buscas elementos que coincidan con `"newPatient"`, es mejor buscar
`"newPat"` que `"tient"`. (Si tienes dudas, las palabras completas o los IDs dan
los mejores resultados).

## Buscar y filtrar resultados {#search--filter-results}

Aunque puedes buscar cadenas de texto que aparecen en logs de runs o dataclips
concretos, es importante recordar que los resultados que se devuelven siguen
siendo **work orders**. Si los dataclips de salida del tercer step del primer
run de la work order "123" coinciden con tu búsqueda, verás la work order "123"
en los resultados.
