---
title: Códigos de estado de work orders y runs
sidebar_label: Códigos de estado
translation_source_hash: a81cb1fcb1e0bdd937dda745cf4db31bc9366f13
translation_review_status: machine
---

## Estado de la work order {#work-order-status}

Una `Work Order` es una solicitud para iniciar la ejecución de un workflow de
OpenFn con una entrada determinada (por ejemplo, "completar el workflow de
derivación del paciente 123"). Para una organización, la work order suele ser la
unidad de valor de negocio, porque los usuarios quieren asegurarse de que cada
solicitud de workflow se procesó con éxito.

Como los administradores pueden querer ejecutar la misma work order varias veces
(por ejemplo, "intentar completar de nuevo el workflow de derivación del
paciente 123 ahora que el sistema de gestión de casos del gobierno volvió a
estar en línea"), el "estado" de una work order se determina por el estado del
_último_ run de esa work order.

Es decir, si la work order "completar el workflow de derivación del paciente
123" se ejecutó dos veces y el primer run falló pero el segundo tuvo éxito, el
"estado" de esa work order será "success".

## Estado del run {#run-status}

Cada run tiene un estado que indica si se completó con éxito.

| Estado    | Indicador |        Tipo        | ¿Aborta el run?\* | Descripción o ejemplo                                                                                                                                                          |
| :-------- | :-------: | :----------------: | :---------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pending   |    ⚪     |                    |         -         | El run está esperando a que haya un worker disponible para empezar a ejecutarse                                                                                                |
| Running   |    🔵     |                    |         -         | El run sigue en curso                                                                                                                                                          |
| Success   |    🟢     |                    |         -         | O todos los steps de este run tuvieron éxito _o_ cada error se manejó correctamente. Técnicamente, un run tiene éxito si el step final de cada rama (el nodo hoja) tiene éxito |
| Failed    |    🔴     |      JobError      |        No         | Una solicitud falló con el código de estado 404                                                                                                                                |
| Failed    |    🔴     |     TypeError      |        No         | Intentar hacer referencia a `state.data.patient.age` cuando `state.data.patient` es `undefined`                                                                                |
| Failed    |    🔴     |     RangeError     |        No         | Llamar a `state.patients[5]` cuando solo existen 2 pacientes                                                                                                                   |
| Crashed   |    🟠     |    SyntaxError     |        Sí         | Tienes JavaScript con errores y el worker no puede compilar el código de tu job                                                                                                |
| Crashed   |    🟠     |   ReferenceError   |        Sí         | Tienes una variable sin declarar en el código de tu job                                                                                                                        |
| Cancelled |    ⚪     |                    |        Sí         | El run estaba en la cola, pero se [quitó manualmente](/monitor-history/rerunning-workflow.md#cancel-pending-runs)                                                              |
| Killed    |    🟡     |   SecurityError    |        Sí         | Tu código no pasó los controles de seguridad, por ejemplo, intentó usar `eval`                                                                                                 |
| Killed    |    🟡     |    ImportError     |        Sí         | Intentaste importar un módulo externo que no permitimos                                                                                                                        |
| Killed    |    🟡     |      OomError      |        Sí         | Tu run usó más memoria de la que permite la instancia de Lightning                                                                                                             |
| Killed    |    🟡     | StateTooLargeError |        Sí         | Tu step devolvió un objeto `state` que superó el 25 % del límite total de memoria del run                                                                                      |
| Killed    |    🟡     |    TimeoutError    |        Sí         | Tardó más que el tiempo máximo de ejecución que permite la instancia de Lightning                                                                                              |
| Exception |    ⚫     |                    |        Sí         | Ocurrió un error que no esperábamos (se notificó al superusuario de la instancia)                                                                                              |
| Lost      |    ⚫     |                    |        Sí         | Lightning perdió la comunicación con el worker (se notificó al superusuario de la instancia)                                                                                   |
| Rejected  |    ⚪     |                    |         -         | El administrador de la instancia no procesará esta solicitud de run porque tu proyecto alcanzó su límite de runs                                                               |

### \*Nota sobre el manejo de errores dentro de un workflow {#note-on-error-handling-within-a-workflow}

Si un step del workflow falla (por ejemplo, con `JobError`, `TypeError` o
`RangeError`), el worker de OpenFn sigue procesando el workflow, ya que puede
haber reglas de manejo de errores en los edges posteriores. (Por ejemplo: "Si el
step 3 falla, ejecuta el step 4").

Si un step falla con un crash (por ejemplo, `SyntaxError`), el worker no puede
ejecutar ninguna lógica posterior y se aborta todo el attempt.
