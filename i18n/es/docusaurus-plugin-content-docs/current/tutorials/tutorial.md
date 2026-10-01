---
title: Tutorial
sidebar_label: Guía rápida de workflows
translation_source_hash: 00443ad3e6806b7f5cc0acdc0ee8bbd04a959b7c
translation_review_status: machine
---

# Tutorial: crea tu primer workflow

# Guía rápida: crea tu primer workflow

1. Ve a tu proyecto de OpenFn > `Workflows`.
2. Crea un [workflow](/build/workflows.md) nuevo.
3. Elige el [tipo de trigger](/build/triggers.md): Webhook Event (para
   integraciones en tiempo real) o Cron Expression (para integraciones
   programadas).
4. Ponle nombre a tu primer `Step` (por ejemplo, "Import form submission") y
   ábrelo para elegir el [adaptor](/adaptors), la `Version` del adaptor y la
   [credencial](/build/credentials.md).
5. Haz clic en el botón de código `</>` para abrir el
   [Inspector](/build/steps/step-editor.md) y agrega el código del job en el
   panel `Editor` para definir la lógica de negocio o las reglas de
   transformación de este workflow.
6. En el panel `Input` de la izquierda, agrega una entrada personalizada (por
   ejemplo, el payload de una solicitud de webhook) o simplemente agrega llaves
   vacías (`{}`) para ejecutar un workflow con un trigger cron. Consulta la
   [documentación de workflows](docs/build/workflows.md) si necesitas ayuda para
   ejecutar y probar workflows.
7. Si el step funciona, vuelve a la vista del Canvas y haz clic en el ícono `+`
   para agregar un segundo step.
8. Si quieres definir condiciones para decidir si este segundo step se ejecuta y
   cuándo, actualiza la [condición del path](/build/paths.md).
9. Luego repite los pasos 3 a 6 para terminar de configurar este step, hasta
   completar el workflow.

:::tip

Mira el video y la documentación de la
[página de workflows](/build/workflows.md) en la sección `Build` para obtener
ayuda detallada, o haz tus preguntas en la
[comunidad](https://community.openfn.org).

:::
