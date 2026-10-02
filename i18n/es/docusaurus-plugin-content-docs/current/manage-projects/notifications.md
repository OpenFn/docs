---
title: Notificaciones de fallos y resúmenes
sidebar_label: Notificaciones por correo electrónico
slug: /notifications
translation_source_hash: 388be709d62844f7f65a6592d669a5e1b49983df
translation_review_status: machine
---

Si quieres recibir `Notifications` por correo electrónico cuando falla un run de
un workflow, o `Digests` por correo con un resumen de la actividad de tu
proyecto, sigue leyendo para saber cómo configurar tu proyecto.

Este artículo te explica cómo configurar las notificaciones por correo
electrónico para hacer seguimiento de tus workflows.

### Alertas de fallos {#failure-alerts}

En `Project Settings > Collaboration` puedes habilitar las alertas de fallos
para recibir notificaciones por correo electrónico cuando falla un job.

![Alerta de fallo](/img/lightning_failure_alert.webp)

La notificación por correo incluye los logs y un enlace al run fallido, para que
puedas inspeccionarlo y empezar a diagnosticar el problema.

![Correo de fallo](/img/lightning_failure_email.webp)

![Run fallido](/img/lightning_failed_run.webp)

### Resúmenes por correo electrónico {#email-digests}

También en `Project Settings > Collaboration` puedes elegir recibir resúmenes
diarios, semanales o mensuales de un proyecto por correo electrónico, con los
runs correctos y fallidos de cada uno de tus workflows.

![Configuración del resumen por correo](/img/lightning_digest.webp)

![Resumen por correo](/img/lightning_weekly_digest.webp)

:::note

Si quieres ajustar la configuración de tus notificaciones y eres colaborador en
más de 1 proyecto, tendrás que ir a la página `Project Settings > Collaboration`
de _cada_ proyecto al que perteneces.

:::
