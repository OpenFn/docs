---
title: Snapshots de workflows
sidebar_label: Snapshots de workflows
slug: /workflow-snapshots
translation_source_hash: 8a952794f200dfcaec11953aa81686bf7244d82c
translation_review_status: machine
---

Los snapshots de workflows capturan y guardan un estado o versión de un workflow
(la combinación de entrada, configuración del workflow y código del job) en el
momento concreto en que el workflow se actualizó o se ejecutó. Los snapshots
ayudan a depurar, auditar y mejorar el rendimiento general de los workflows.

### ¿Cuándo se crea un snapshot? {#when-is-a-snapshot-made}

Los snapshots se crean de 2 formas:

1. Cuando un usuario guarda cambios en su workflow, ya sea desde el Canvas o
   desde el Inspector
2. Cuando se crea un run, ya sea al crear una nueva work order o al reintentar
   un run

### ¿Cómo puedo ver un snapshot? {#how-can-i-view-a-snapshot}

Para ver un snapshot, ve a la página `History`. Expande una work order para ver
los runs que incluye.

![Snapshot1](/img/snapshots1.webp)

Desde la vista expandida del historial, hay dos formas de ver los snapshots:

1. Inspeccionando un step del run
2. Desde la vista del run

#### Ver un snapshot inspeccionando un step del run {#viewing-a-snapshot-by-inspecting-a-step-in-the-run}

Haz clic en el ícono de inspeccionar junto al step que quieres ver.

![Inspect](/img/inspect.webp)

Se abrirá la [pantalla del Inspector](/build/steps/step-editor.md) para ese step
del run, con todos sus artefactos asociados: logs y datos de entrada y salida.
Verás que el Inspector está en modo de solo lectura y, si pasas el cursor sobre
el chip con el ID del snapshot del workflow, aparecerá un mensaje que dice "You
are viewing a snapshot of this workflow that was taken on …."

![Snapshot2](/img/snapshots2.webp)

Para ver el Canvas correspondiente a este snapshot, cierra la vista del
Inspector haciendo clic en la `X` de la esquina superior derecha de la página.
Se abrirá el Canvas asociado, con el step seleccionado, como se muestra a
continuación.

![Snapshot3](/img/snapshots3.webp)

Desde el Canvas, puedes inspeccionar cualquier step haciendo clic en él y
abriendo el Inspector para el run asociado al step y al snapshot.

#### Ver un snapshot desde la vista del run {#viewing-a-snapshot-from-the-run-view}

Desde la vista expandida del historial, haz clic en el ID del run para abrir la
vista del run.

![Snapshot4](/img/snapshots4.webp)

En esta vista, haz clic en el nombre del workflow (Simple Flow) para abrir el
Canvas del workflow para este snapshot. Igual que al ver un snapshot
inspeccionando un step, puedes hacer clic en el ícono de inspeccionar junto a
los steps para abrir el Inspector del step.

### Editar un snapshot {#editing-a-snapshot}

Los snapshots son de solo lectura y sirven como referencia del estado de un
workflow en el momento en que se guardó o se ejecutó un run. Como solo se puede
editar la versión más reciente, para editar el workflow puedes hacer clic en
`Switch to latest version` en el Canvas o usar el interruptor de la esquina
inferior derecha de la página del Inspector para cambiar a la versión más
reciente del workflow.

Cuando cambias a la versión más reciente, la etiqueta con el ID del snapshot se
vuelve azul y su texto pasa a ser `latest`.

![Snapshot5](/img/snapshots5.webp)

![Snapshot6](/img/snapshots6.webp)

### Reintentar un snapshot {#retrying-a-snapshot}

Cuando reintentas un run con un snapshot, el reintento se ejecuta con la versión
más reciente del workflow y del código del job. No puedes reintentar un workflow
con un snapshot anterior, solo con la versión más reciente.

### Snapshots y control de versiones {#snapshots-and-version-control}

Como guardan un workflow con un conjunto concreto de configuración, datos de
entrada y código del job, los snapshots son sobre todo herramientas que ayudan a
los administradores a auditar y a manejar errores (por ejemplo, para saber por
qué un caso no se actualizó correctamente en una base de datos).

OpenFn ofrece herramientas específicas de
[control de versiones](/manage-projects/link-to-gh.md) que te permiten a ti y a
tu equipo administrar los cambios en el código de los jobs para desarrollar,
depurar y revisar de forma más rápida y segura.
