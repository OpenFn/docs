---
title: Editar steps desde el Inspector
sidebar_label: Editar y probar steps
translation_source_hash: b452d22eaf108275e720a809f667abd2111ac105
translation_review_status: machine
---

Esta página explica cómo editar y probar los steps de tu workflow con la
interfaz del Inspector.

:::tip

Si escribes jobs en la aplicación de la plataforma (Lightning), puedes usar el
[AI Assistant](/build/ai-assistant.md) para que te ayude. Lo encontrarás en el
Inspector.

:::

## Editar y probar steps desde el Inspector {#edit--test-steps-via-the-inspector}

Usa la interfaz del `Inspector` de la plataforma para crear, editar y probar
steps. (Si creaste tu workflow localmente con la CLI, puedes editar tus jobs en
la aplicación desde esta interfaz).

Para acceder a esta interfaz:

1. Abre un workflow
2. Selecciona el step que quieres editar o probar
3. Haz clic en el botón de código `</>` del panel de configuración

Para saber más sobre cómo escribir lógica de negocio personalizada y reglas de
transformación de datos en el `Editor`, consulta la documentación sobre
[cómo escribir jobs](/jobs/job-writing-guide.md) y mira el video de abajo.

<iframe width="784" height="441" src="https://www.youtube.com/embed/HmE_wp_g1RY?si=uKrKBAghe8E3C5Ed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Ejecutar y probar steps {#run--test-steps}

Cuando ejecutas steps para probar la configuración, cada run tiene un state
inicial (que puede contener un `Input`) y da como resultado un state final que
incluye `Logs` y un `Output`.

- `Input`: datos (JSON) que un step usa como entrada inicial en su run. Puede
  haber una entrada para una work order y para cada step de un run, aunque
  cualquiera de los dos puede existir sin entrada.
- `Output`: datos (JSON) que se crean como salida de la ejecución de un step.
  Puede haber una salida para una work order y para cada job de un run, y suele
  contener los datos enviados a la aplicación de destino.
- `Logs`: un registro que genera el motor de ejecución de workflows con el
  detalle de las actividades realizadas al ejecutar un workflow o un step.

Consulta la [documentación sobre cómo escribir jobs](/jobs/job-writing-guide.md)
para saber más sobre cómo escribir lógica personalizada, y
[este artículo](/jobs/state.md) para saber más sobre el concepto de "state" al
escribir jobs y crear workflows de OpenFn.

## Atajos de teclado {#keyboard-shortcuts}

Desde el Inspector puedes hacer algunas acciones comunes (por ejemplo, guardar,
ejecutar o sincronizar con GitHub) con el teclado. Consulta la lista completa de
atajos de teclado [aquí](/keyboard-shortcuts.md).
