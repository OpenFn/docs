---
title: Almacenamiento de datos
translation_source_hash: 968a9459539d0d27aef3fa4496b6c80ef163d706
translation_review_status: machine
---

En la sección "Data Storage" de los `Settings` de tu proyecto, puedes configurar
qué quieres que haga OpenFn con los _datos_ reales (`Inputs` y `Outputs`) que
procesan (o producen) los runs de tus workflows.

### ¿Por qué guardaría los datos de entrada y salida junto con los logs de los runs? {#why-would-i-store-inputoutput-data-along-with-run-logs}

Puedes configurar OpenFn para que guarde datos temporalmente (por ejemplo,
formularios obtenidos de la aplicación móvil de CommCare) y así poder
diagnosticar y corregir fácilmente las transacciones cuando haya errores (por
ejemplo, si el sistema DHIS2 de destino no está disponible o si una restricción
o validación de la base de datos bloquea una importación de datos). El
administrador de la instancia de OpenFn define un período de retención de datos
predeterminado, pero puede modificarse según los requisitos de cada proyecto.

Una de las funcionalidades más potentes de la plataforma es la posibilidad de
"reproducir" work orders. Si tienes un workflow de varios steps (por ejemplo,
obtener datos de una base de datos, transformar y mapear los datos, e
importarlos a tu sistema de información de salud), este almacenamiento temporal
de datos permite a los administradores de OpenFn diagnosticar rápidamente las
work orders fallidas y "reintentar" el workflow desde el step que falló, en
lugar de volver a ejecutarlo desde el principio. Así, los administradores pueden
reprocesar las work orders fallidas sin tener que obtener (o volver a enviar)
los datos (entradas) desde un sistema de origen.

### ¿Por qué elegiría _NO_ guardar los datos de entrada y salida? {#why-would-i-choose-to-_not_-store-inputoutput-data}

Algunos de nuestros usuarios procesan datos extremadamente sensibles (como
historias clínicas) y quizás quieran asegurarse de que, una vez ejecutado un
workflow, no queden datos de pacientes en los servidores de OpenFn.

Activar esta funcionalidad de "persistencia cero" ("zero-persistence") para los
datos de entrada y salida es una opción atractiva para quienes quieren usar
OpenFn en la nube, pero les preocupa la soberanía de los datos.

:::tip

Consulta la página de documentación sobre
[seguridad y cumplimiento](/get-started/security-compliance.md) para saber más
sobre el almacenamiento de datos y las arquitecturas de soluciones que se basan
en pipelines de datos de OpenFn con "persistencia cero".

:::

### Exportar el historial {#export-history}

También puedes exportar todas las work orders de un proyecto y sus artefactos
asociados (runs, steps, runsteps y dataclips de entrada y salida). La
exportación del historial de work orders se gestiona a nivel de proyecto y está
disponible para todos los colaboradores del proyecto (viewer, editor, admin,
owner).

#### Cómo exportar el historial de work orders {#how-to-export-work-order-history}

Para exportar el historial de work orders de tu proyecto, abre el proyecto y haz
clic en `History` en el menú lateral. En la página History, desplázate hasta el
final de la tabla del historial de work orders y haz clic en el ícono de la nube
(mira la imagen de abajo).

![Página History](/img/history_page_cloud.webp)

Al hacer clic en el ícono de descarga, aparece una ventana modal para confirmar
la exportación. Si confirmas, se inicia un proceso en segundo plano para la
exportación.

![Confirmar la exportación](/img/confirm_export.webp)

Cuando termine la exportación, se enviará un correo electrónico a la dirección
asociada a tu usuario de OpenFn.

:::info PARA DESPLIEGUES LOCALES

En los despliegues locales, OpenFn usa Swoosh como servicio de buzón para
desarrollo, y puedes acceder al buzón en http://localhost:4000/dev/mailbox.
Puedes cambiar localhost:4000 por el puerto donde se aloja tu instancia de
OpenFn.

:::

#### Gestionar las exportaciones {#managing-exports}

Puedes ver todas las exportaciones del historial en la página `History Exports`
de la configuración del proyecto. Haz clic en `Settings` en el menú lateral y
luego en `History Exports` para ver la lista de exportaciones de work orders de
tu proyecto.

En la página `History Exports` verás la lista de exportaciones, con tu solicitud
más reciente y las anteriores, junto con otros datos como el nombre del archivo,
la fecha de exportación, el usuario que la solicitó y el estado.

![Lista de exportaciones del historial](/img/history_exports_page.webp)

:::caution Configurar el almacenamiento de las exportaciones

En los despliegues locales, los administradores de la instancia de OpenFn pueden
configurar dónde se guardan las exportaciones de work orders. Actualmente,
OpenFn admite el almacenamiento local y Google Cloud Storage como destinos para
exportar work orders.

:::
