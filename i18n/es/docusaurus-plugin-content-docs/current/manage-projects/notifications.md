---
title: Notificaciones de fallos y resúmenes
sidebar_label: Notificaciones por correo electrónico
slug: /notifications
translation_source_hash: 22f696dbe61ab1e2f4b28bd30b3db8bea456e555
translation_review_status: machine
---

Si quieres recibir `Notifications` por correo electrónico cuando falla un run de
un workflow, o `Digests` por correo con un resumen de la actividad de tu
proyecto, sigue leyendo para saber cómo configurar tu proyecto.

Este artículo te explica cómo configurar las notificaciones por correo
electrónico para hacer seguimiento de tus workflows.

### Alertas de fallos {#failure-alerts}

En `Project Settings > Collaboration` puedes habilitar las alertas de fallos
para recibir notificaciones por correo electrónico cuando falla un run. Las
alertas de fallos están desactivadas hasta que las actives, y solo puedes
cambiar tu propia configuración.

![Alerta de fallo](/img/lightning_failure_alert.webp)

El correo incluye enlaces a la work order fallida, al run y sus logs, y a la
página de salud del workflow, donde los fallos se agrupan por error.

Para no llenar tu bandeja de entrada, recibes como máximo 3 alertas por workflow
cada 5 minutos. Las alertas posteriores dentro de esos 5 minutos indican en el
asunto cuántas veces ha fallado el workflow.

![Correo de fallo](/img/lightning_failure_email.webp)

![Run fallido](/img/lightning_failed_run.webp)

### Resúmenes por correo electrónico {#email-digests}

También en `Project Settings > Collaboration` puedes elegir recibir resúmenes
diarios, semanales o mensuales de un proyecto por correo electrónico, con el
número de work orders exitosas y fallidas de cada uno de tus workflows. El
resumen está configurado en `Never` hasta que lo cambies.

Los resúmenes se envían a las 10:00 UTC: los diarios, todos los días; los
semanales, los lunes; y los mensuales, el día 1 de cada mes. Cada resumen enlaza
a los runs correspondientes en la página History y, si hubo fallos, a la página
de salud del workflow.

![Configuración del resumen por correo](/img/lightning_digest.webp)

![Resumen por correo](/img/lightning_weekly_digest.webp)

:::note

Si quieres ajustar la configuración de tus notificaciones y eres colaborador en
más de 1 proyecto, tendrás que ir a la página `Project Settings > Collaboration`
de _cada_ proyecto al que perteneces.

:::
