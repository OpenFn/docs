---
title: Usar el AI Assistant
sidebar_label: AI Assistant
translation_source_hash: 8f3412d45ba140eef764450fc214945e39981ba4
translation_review_status: machine
---

El AI Assistant de OpenFn ofrece una interfaz de chat con un modelo de IA que te
ayuda a crear workflows. **Mira
[este video](https://www.youtube.com/watch?v=3L_cGl9tWRc&ab_channel=OpenFn.org)
para ver una introducción a cómo funciona.**

Puedes usarlo para escribir borradores de código de jobs, revisarlo y depurarlo,
diagnosticar errores y entender lo que puede hacer la plataforma.

:::info Crea workflows basados en IA en OpenFn

Consulta los [adaptors](/adaptors) de OpenFn para crear workflows de OpenFn que
orquesten interacciones con LLM (como ChatGPT y Claude) y conviertan las
decisiones tomadas con IA en acciones y ejecución automatizada.

:::

<p align="center">
  <img src="/img/ai-assistant.webp" width="427" />
</p>

:::caution ¿El Assistant no está disponible? ¿No lo encuentras?

En las instalaciones locales de OpenFn, el administrador de la instancia tiene
que configurar el AI Assistant para que esté disponible. Consulta la
[documentación de despliegue](https://github.com/OpenFn/lightning/blob/main/DEPLOYMENT.md#ai-chat)
para obtener ayuda o contacta al superusuario de tu instancia.

El Assistant está disponible en app.openfn.org, con créditos de uso según el
plan de tu proyecto. Consulta
[openfn.org/pricing](https://www.openfn.org/pricing) o contacta a
[support@openfn.org](mailto:support@openfn.org) para saber más sobre los planes
de pago de la plataforma de OpenFn alojada en la nube.

:::

## Sobre el Assistant {#about-the-assistant}

El AI Assistant es un sistema multiagente personalizado. Tiene acceso a la
documentación de OpenFn y a buenas prácticas de implementación, así que puede
responder tus preguntas en el contexto de la plataforma.

Todas las sesiones de chat se comparten entre todos los usuarios del proyecto.
Puedes empezar una sesión de chat nueva cuando quieras, o abrir una anterior.

Puedes configurar si se envían al modelo el código de tu workflow, los logs de
los runs y los datos de entrada y salida. Compartir este contexto permite que el
Assistant dé una respuesta más pertinente, pero piensa bien si los datos son
confidenciales o sensibles antes de enviarlos.

## Una nota sobre el uso responsable de la IA {#a-note-on-responsible-ai-usage}

El AI Assistant usa modelos de lenguaje de gran tamaño (LLM). Como otros
chatbots, sus capacidades son impresionantes, pero imperfectas.

Recuerda que, en definitiva, todas las respuestas se generan automáticamente y
TÚ, la persona a cargo, eres responsable de cómo se usa lo que produce. Deberías
analizar todas las respuestas con espíritu crítico y verificar el resultado
siempre que puedas.

**Puedes leer más sobre nuestro enfoque de la IA en nuestra
[Política de IA responsable](https://www.openfn.org/ai).**

## Cómo acceder al AI Assistant {#how-to-access-the-ai-assistant}

Puedes acceder al AI Assistant desde el Canvas del workflow o desde un step de
job concreto, haciendo clic en el ícono de globo de diálogo de la esquina
superior derecha.

Si ya hubo sesiones de chat anteriores, verás una lista con ellas. Haz clic en
una para abrir el historial de ese chat.

Para empezar una sesión nueva, escribe una pregunta en el área de texto de la
parte inferior del Assistant. Haz clic en el botón `Send` para enviar tu
pregunta. El Assistant te devolverá una respuesta en la interfaz de chat.

Puedes cerrar una sesión de chat haciendo clic en el botón `(X)` de la esquina
superior derecha de la interfaz de chat, que te lleva de vuelta a la lista de
sesiones.

## Limpieza de datos {#data-scrubbing}

Si decides enviar al Assistant los datos de entrada y salida de tus runs, el
Assistant recibe la forma de tus datos, no los datos en sí. Cada valor se
reemplaza por el tipo de dato que era. Los nombres de los campos se mantienen,
porque el Assistant los necesita para hablar de tus datos de forma útil. Ten en
cuenta que los logs de los runs y el código no se limpian.

Así que, si un step se ejecutó con esto:

```json
{
  "patient": {
    "name": "Amina Yusuf",
    "dob": "2000-01-01",
    "phone": "+123456789",
    "visits": 3,
    "consented": true,
    "notes": null
  },
  "records": [
    { "id": "R-001", "weight": 61.5 },
    { "id": "R-002", "weight": 58.0 },
    { "id": "R-003", "weight": 70.2 },
    { "id": "R-004", "weight": 64.1 }
  ]
}
```

esto es lo que recibe el Assistant:

```json
{
  "patient": {
    "consented": "boolean",
    "dob": "string",
    "name": "string",
    "notes": "null",
    "phone": "string",
    "visits": "number"
  },
  "records": [
    { "id": "string", "weight": "number" },
    { "id": "string", "weight": "number" },
    "...2 more"
  ]
}
```

El nombre, la fecha de nacimiento y el número de teléfono nunca salen de OpenFn.
El Assistant puede ver igualmente que hay un paciente con un número de teléfono
y cuatro registros, que suele ser todo lo que necesita para ayudarte a corregir
el código de tu job.

### Otras cosas que hace {#a-few-other-things-it-does}

- Las listas largas se recortan a dos ejemplos. El resto se cuenta, como
  `"...2 more"` en el ejemplo de arriba.
- Los registros muy anchos se recortan a 50 campos. El resto se cuenta en un
  campo `"..."`.
- Si la política de retención de tu proyecto ya borró los datos de un step, al
  Assistant se le envía `[erased by this project's retention policy]` en su
  lugar. Se le avisa cuando se omitieron datos, para que no dé por hecho que lo
  vio todo.
- Los datos muy grandes no se envían. Verás `[too large to summarise]`.

### Lo único que tienes que saber {#the-one-thing-to-know}

Los nombres de los campos se envían tal cual. Si tus datos usan el nombre de una
persona o un número de documento nacional de identidad como nombre de campo, ese
nombre o número se enviará. Los valores están protegidos; las claves, no.

:::caution ¿Comentarios o preguntas sobre el Assistant?

Tus preguntas y comentarios son bienvenidos en
[community.openfn.org](https://community.openfn.org/), o contacta a
[support@openfn.org](mailto:support@openfn.org) para consultas privadas.

:::
