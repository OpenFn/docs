---
title: Triggers
translation_source_hash: 151798ebc62b4d1787b5ce6d9d182260779897e3
translation_review_status: machine
---

Los triggers permiten iniciar la ejecución de workflows automáticamente. Hay dos
tipos: triggers cron y triggers de eventos webhook.

## Triggers de eventos webhook {#webhook-event-triggers}

Los **triggers de eventos webhook** escuchan solicitudes HTTP entrantes
(mensajes de otros sistemas) y permiten una automatización en tiempo real,
basada en eventos.

Estos triggers se disparan cuando se "empujan" datos a OpenFn (es decir, cuando
se envía una solicitud HTTP "POST" a la URL asignada a tu trigger).

La solicitud HTTP que dispara el trigger puede llegar desde un webhook de una
aplicación externa, desde otro workflow de OpenFn o enviarse manualmente (es
decir, con una solicitud de cURL).

![Trigger webhook](/img/webhook_trigger.webp)

Para aprender a agregar una capa extra de seguridad a tu trigger webhook con
autenticación, ve a la página
[Seguridad de los webhooks](/manage-projects/webhook-auth.md).

Aprende cómo se construye el `state` inicial de un workflow a partir de un
trigger webhook [aquí](/jobs/state.md#webhook-triggered-runs).

## **Respuestas del trigger webhook** {#webhook-trigger-responses}

Cuando un webhook dispara un workflow, OpenFn puede responder al sistema que
hizo la llamada de una de dos formas, según cómo esté configurado el trigger.

### **El modo asíncrono responde antes de empezar** {#async-mode-responds-before-start}

De forma predeterminada, los workflows se ejecutan de forma **asíncrona**.

OpenFn envía una respuesta HTTP **en cuanto recibe la solicitud del webhook**,
una vez creados la work order y el run. El sistema que hizo la llamada recibe
una confirmación rápida y el workflow se ejecuta en segundo plano.

**Usa este modo cuando:**

- El sistema que hace la llamada solo necesita confirmar que se recibió la
  solicitud
- Quieres respuestas rápidas y poca dependencia entre los sistemas
- El sistema que hace la llamada no necesita el resultado del run del workflow

**Respuesta:**

- Código de estado: `200`
- Encabezados:
  - `x-meta-work-order-id`: el ID de la work order creada
  - `x-meta-run-id`: el ID del run creado
- Cuerpo:
  ```json
  {
    "work_order_id": "abc123",
    "run_id": "xyz456"
  }
  ```

### **El modo síncrono responde al terminar** {#sync-mode-responds-after-completion}

Si quieres, los workflows también se pueden ejecutar de forma **síncrona**.

OpenFn mantiene abierta la conexión HTTP y envía una respuesta **cuando termina
el run**, con el state final del run como cuerpo de la respuesta. El sistema que
hizo la llamada espera el resultado, a veces durante segundos o minutos.

**Usa este modo cuando:**

- El sistema que hace la llamada necesita el resultado del run del workflow
- Necesitas la salida final del workflow para decidir el siguiente paso en el
  sistema que hace la llamada

**Respuesta predeterminada:**

- Código de estado: `201` (configurable; ver más abajo)
- Encabezados:
  - `x-meta-work-order-id`: el ID de la work order
  - `x-meta-run-id`: el ID del run
- Cuerpo: un objeto JSON con esta forma:
  ```json
  {
    "data": { /* the final run state */ },
    "meta": {
      "work_order_id": "abc123",
      "run_id": "xyz456",
      "state": "success",
      "error_type": null,
      "inserted_at": "2026-05-21T10:00:00Z",
      "started_at": "2026-05-21T10:00:01Z",
      "claimed_at": "2026-05-21T10:00:01Z",
      "finished_at": "2026-05-21T10:00:05Z"
    }
  }
  ```
  - `data`: el state final del run (o un mensaje de seguridad si falla, o un
    cuerpo personalizado; ver más abajo)
  - `meta`: los metadatos del run, con las marcas de tiempo de su ciclo de vida
    y el `state` final (`"success"` o `"failed"`)

:::note Política de seguridad para los runs fallidos

Cuando un run falla, OpenFn devuelve un mensaje genérico en `data` en lugar del
state completo del run, para no filtrar datos sensibles. Aun así, puedes
devolver un cuerpo personalizado desde un run fallido con `webhookResponse` (ver
más abajo).

:::

#### Configurar códigos de estado personalizados {#configuring-custom-status-codes}

En el modo síncrono puedes configurar códigos de estado HTTP personalizados en
el trigger (en **Options → Response Status** en la interfaz):

- **Success Status Code**: se devuelve cuando el run termina con éxito (el valor
  predeterminado es `201`)
- **Error Status Code**: se devuelve cuando el run falla (el valor
  predeterminado es `201`)

:::note Volver al modo asíncrono

Si vuelves a cambiar un trigger al modo asíncrono, se borran los códigos de
estado de éxito o de error que hayas configurado, porque solo se aplican en el
modo síncrono.

:::

#### Personalizar la respuesta desde tu job {#customising-the-response-from-your-job}

Para devolver un cuerpo o un código de estado personalizados a partir de valores
en tiempo de ejecución, define `webhookResponse` en el state, por ejemplo:

```js
fn(state => ({
  ...state,
  webhookResponse: {
    status: 200,
    body: { ack: true, id: state.data.id },
  },
}));
```

Al final del run, se usa el valor de `state.webhookResponse` para enviar la
respuesta HTTP al sistema que hizo la llamada. Cambiar el valor durante el run
no afecta a la respuesta: solo cuenta el state final.

Tanto `status` como `body` son **opcionales**: puedes incluir uno de los dos o
ambos:

| Campo    | Comportamiento cuando se define                                      |
| -------- | -------------------------------------------------------------------- |
| `status` | Reemplaza el código de estado configurado para este run              |
| `body`   | Reemplaza el state final del run en `data` en el cuerpo de respuesta |
| ninguno  | Usa el código de estado configurado y el state final del run         |

`webhookResponse.body` solo reemplaza la parte `data` de la respuesta: OpenFn
siempre incluye `meta`. Así que el ejemplo de arriba produce:

```json
{
  "data": { "ack": true, "id": "..." },
  "meta": { "work_order_id": "...", "run_id": "...", "state": "success", ... }
}
```

:::note Valores mal formados

Si `webhookResponse` no es un objeto JSON (por ejemplo, si es una cadena, un
número o un array), se ignora y se aplican el código de estado y el cuerpo
predeterminados del run.

Si `webhookResponse.status` no es un número entero, o `webhookResponse.body` no
es un objeto JSON, el código de estado de la respuesta vuelve al predeterminado
del run (el código de éxito o de error configurado, o `201`) y `data` se
reemplaza por
`{ "message": "Run completed, but webhook_response was malformed: ..." }`.

:::

## Triggers cron {#cron-triggers}

Los **triggers cron** ejecutan workflows según una programación cron, y sirven
para tareas repetitivas basadas en el tiempo (por ejemplo, sincronizar datos
financieros entre dos sistemas todos los días a las 8 a. m.).

Estos triggers permiten "extraer" datos de los sistemas conectados. Puedes
elegir una programación estándar (por ejemplo, todos los días o todos los meses)
o definir una programación personalizada con expresiones cron.

:::tip Ayuda con las expresiones cron

Si todavía no conoces `cron`, la mejor forma de aprender es desde la interfaz de
OpenFn o en <a href="https://crontab.guru" target="_blank">crontab.guru</a>.

:::

Con los triggers cron, los workflows se pueden ejecutar con una frecuencia de
hasta una vez por minuto, o con la poca frecuencia que quieras, y se pueden
programar en fechas u horas muy concretas.

### `state` de entrada para el siguiente run {#input-state-for-the-next-run}

Cada vez que se ejecuta un workflow con trigger cron, _empieza_ con la salida
final del último run exitoso. Así puedes crear workflows que usen un
["cursor"](/jobs/using-cursors.md) para saber qué pasó la última vez que se
ejecutó el workflow. (Por ejemplo, para procesar solo los datos que cambiaron
desde ese último run).

![Trigger cron](/img/cron_trigger.webp)

De forma predeterminada, el state de entrada del siguiente run cron será el
state de salida final del run anterior, pero puedes configurarlo para que use el
state de salida de un step concreto de ese run anterior cambiando el "Cron Input
Source".

Encontrarás más información sobre el `state` en los runs con trigger cron en la
documentación de
["State de entrada y de salida"](/jobs/state.md#cron-triggered-runs).

### Controlar el tamaño del `state` en los workflows cron {#managing-the-size-of-state-for-cron-workflows}

Como el state pasa de un run al siguiente en un workflow cron, si un step de tu
workflow agrega algo nuevo al state cada vez que se ejecuta, el state puede
crecer rápidamente hasta ser demasiado grande para manejarlo en la práctica.
Imagina que, cada vez que se ejecuta el job, una respuesta del servidor se
agrega a `state.references` con `array.push(...)`. OpenFn admite hasta 50 000
bytes (medidos con `byte_size` de Erlang), aunque la mayoría de los
`final_state` miden entre 100 y 1000 bytes.

Si tu `final_state` supera los 10 000 bytes, OpenFn envía un correo de
advertencia a los colaboradores del proyecto. Si supera los 50 000 bytes, tu run
termina con éxito igualmente, pero su `final_state` no se guarda, y la próxima
vez que se ejecute ese job heredará el state final anterior, sin actualizar. (Es
decir, el último state que medía < 50 000 bytes).

### Una solución rápida para un state final demasiado grande {#a-quick-fix-for-final-state-bloat}

Casi siempre, un `state` final demasiado grande se debe a un mal manejo de
`state.references` o `state.data`. Para solucionarlo, limpia tu `state` final
agregando y adaptando las siguientes líneas, _ya sea_ en el callback de la
operación de tu paquete de lenguaje (si lo permite) o en una operación `fn(...)`
después de tu última operación.

```js
fn(state => {
  state.custom = somethingIntentional;
  state.data = {};
  state.references = [];
  return state;
});
```

## Triggers de Kafka {#kafka-triggers}

Los triggers de Kafka se eliminaron en la **v2.18.2**. Ya no se puede iniciar un
workflow consumiendo mensajes de un clúster de Kafka.

Los triggers de Kafka existentes se convirtieron en **triggers webhook
deshabilitados** en lugar de borrarse, así que los workflows a los que
pertenecían siguen intactos. Para que uno siga funcionando, configura el sistema
que envía los datos para que apunte a la URL del webhook del trigger y
habilítalo.

:::caution Para instalaciones de OpenFn autoalojadas

Las variables de entorno `KAFKA_*` ya no hacen nada. Si tienes
`KAFKA_TRIGGERS_ENABLED` activado, haz una copia de seguridad y desactívalo
antes de actualizar. Si todavía necesitas Kafka, quédate en la versión anterior.

:::
