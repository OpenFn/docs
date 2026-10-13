---
title: Migrar workflows
translation_source_hash: 913b0a681ff5b146b9a438d2bb0546402200691c
translation_review_status: machine
---

Todos los workflows se pueden representar como código YAML. Así puedes exportar
un workflow e importarlo en otro proyecto al que tengas acceso.

:::info Qué incluye el YAML

La exportación en YAML recoge la estructura del workflow: steps, triggers,
paths, condiciones de los paths, versiones de los adaptors y código de los jobs.
No incluye credenciales, historial de runs, work orders, dataclips ni URL de
webhooks.

:::

## Pasos para exportar un workflow {#steps-to-export-a-workflow}

Para exportar un workflow desde el proyecto de origen:

1. Haz clic en el workflow que quieres exportar.
2. En la esquina superior derecha hay un botón deslizante vertical. Haz clic en
   él.
3. En la ventana emergente aparece el enlace `View your workflow as YAML code`.
   Haz clic en él. ![export YAML](/img/export-yaml.webp)
4. Haz clic en el botón `Copy Code` para copiar el YAML al portapapeles, o en el
   botón `Download` para guardarlo como archivo.

## Pasos para importar un workflow {#steps-to-import-a-workflow}

Para importar un workflow en el proyecto de destino:

1. Ve a la página de workflows del proyecto de destino.
2. Haz clic en el botón `Create new workflow`.
3. Busca en la parte inferior el enlace `import a YAML file manually` y haz clic
   en él. ![import YAML](/img/import-yaml.webp)
4. Pega el YAML, o importa el archivo YAML si lo descargaste.
   ![paste YAML](/img/paste-yaml.webp)

:::tip Activa los workflows después de importarlos

Recuerda comprobar si el workflow está activo después de importarlo.

:::

## Migrar credenciales {#migrate-credentials}

Las credenciales no se incluyen en la exportación en YAML. Es intencional: las
credenciales pertenecen a cada usuario y se limitan a determinados proyectos.

Después de importar un workflow, tendrás que volver a configurar cada step que
usaba una credencial en el proyecto de origen para restablecerla.

Si eres propietario de una credencial en el proyecto de origen y quieres
reutilizarla en el proyecto de destino,
[consulta las instrucciones aquí](/manage-users/user-credentials.md#share-credentials).

Si necesitas una credencial nueva, ve a tu página de credenciales, créala e
incluye el proyecto de destino en la sección `Projects access`.

:::tip Vincula las credenciales a cada step

Después de crear una credencial nueva, o de dar acceso al proyecto de destino a
una existente, tienes que vincularla a los steps que la usan en el workflow
importado. Mira la captura de pantalla de abajo.

:::

Para vincular tu credencial:

1. Haz clic en el step correspondiente.
2. En el modal que aparece, haz clic en el botón `Connect` y selecciona tu
   credencial.

![attach credential](/img/attach-credential.webp)

## Errores comunes {#common-pitfalls}

- **El tipo de credencial no coincide.** Es probable que un step que espera una
  credencial OAuth de Salesforce falle si se vincula a una credencial Raw JSON.
  Crea el tipo correcto en el proyecto de destino.
- **Los sistemas que llaman al webhook siguen usando la URL antigua.** El
  workflow de origen seguirá recibiendo solicitudes hasta que actualices el
  sistema que lo llama.
