---
sidebar_label: De CommCare a PostgreSQL
title: Sincroniza los envíos de formularios de CommCare con una base de datos PostgreSQL
translation_source_hash: 9b51cc0ee8f81c1b020b68b3d5226cbfe7a60eab
translation_review_status: machine
---

**Antes de empezar este tutorial, asegúrate de lo siguiente:**

- Te registraste en [OpenFn.org](http://openfn.org) (¡toma menos de un minuto!).
- Revisaste nuestro glosario y conoces la terminología básica de OpenFn y de las
  API. Para empezar, consulta estas páginas:
  - [Conceptos de OpenFn](/get-started/terminology.md)
  - [Glosario de integración de datos](/get-started/glossary.md)
- Tienes una aplicación de CommCare con al menos un formulario configurado. Este
  es tu sistema de origen.
- Tienes una base de datos PostgreSQL configurada. Este es tu sistema de
  destino.

**Si no tienes una aplicación de CommCare ni una base de datos PostgreSQL
configuradas, también puedes seguir el tutorial con la solución ya preparada.
Encontrarás todo en estos enlaces:**

1. [Documento de especificaciones de mapeo](https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing)
2. Aplicación de CommCare para descargar:
   - Nombre de usuario: testuser
   - Contraseña: 123

![install_cc_app](/img/install_cc_app.webp)

3. [Reporte público con los registros de la base de datos PostgreSQL](https://analytics.openfn.org/public/question/095449a9-5696-463c-a4fb-24614c9f08a5)

## Primeros pasos {#getting-started}

En esta guía vamos a configurar una **sincronización automática de datos entre
CommCare y una base de datos PostgreSQL**. Sincronizaremos los envíos de una
aplicación de CommCare llamada `Maternal and Newborn Health`, que tiene el
formulario `Register a New Patient`.

:::tip

Cada vez que un usuario de CommCare registre a un paciente nuevo, sus datos se
sincronizarán automáticamente con una base de datos PostgreSQL ya configurada.
Así podrás monitorear y analizar en tiempo real los datos recolectados en
terreno. Por ejemplo, puedes conectar rápidamente esta base de datos a un
tablero que muestre datos agregados de los pacientes registrados.

:::

![cc-postgres](/img/cc-postgres.webp)

**Esta integración se divide en dos partes:**

1. Llevar los datos de tu sistema de origen a OpenFn para disparar tu workflow
2. Transformar estos datos y cargarlos en tu sistema de destino

¡Empecemos!

## Obtener datos de CommCare {#getting-data-from-commcare}

**Hay dos formas de llevar los envíos de formularios de CommCare a OpenFn.**

### Opción 1: un webhook que reenvía casos o formularios de CommCare a OpenFn en tiempo real con un servicio REST {#option-1-webhook-to-forward-cases-andor-forms-in-real-time-from-commcare-to-openfn-using-rest-service}

CommCareHQ tiene una función nativa de reenvío de datos: un servicio
webhook/REST que puedes apuntar al destino que elijas (es decir, tu workflow de
OpenFn). Con un webhook configurado, todos los formularios que se envían en
CommCare se **_reenvían automáticamente_** al endpoint indicado, como tu
workflow de OpenFn. Una vez configurado, el reenvío funciona solo, **_en tiempo
real para todos los formularios y casos_**. Aprende a configurar un webhook
[aquí](/adaptors/commcare#webhook-or-data-forwarding-setup-commcare-to-openfn).

![option1](/img/option1.webp)

### Opción 2: extraer datos de CommCare con la API REST {#option-2-extracting-commcare-data-via-the-rest-api}

CommCare ofrece una
[API REST](https://confluence.dimagi.com/display/commcarepublic/List+Forms)
robusta para extraer y cargar datos. Esta segunda opción consiste en configurar
un step en OpenFn que obtenga los envíos de CommCare con una solicitud HTTP
`GET`, con parámetros para filtrar la consulta. Para acceder a la API de
CommCare necesitas un plan de pago de CommCare.

La principal ventaja del webhook es que tus datos llegan al sistema de destino
en tiempo real. Aun así, la API List Forms también tiene ventajas: permite
extraer datos en lote de forma programada, por ejemplo, para sincronizar datos
históricos el día 30 de cada mes. La opción que elijas depende de las
necesidades de tu organización.

### Configura un workflow con la opción 1 {#set-up-a-workflow-using-option-1}

1. **Abre un proyecto existente y crea un workflow nuevo**

![create_new_workflow](/img/create-new-workflow.gif)

2. **Crea un trigger "Webhook" nuevo para programar este job de extracción.**

![create_trigger](/img/create_trigger.gif)

Asegúrate de copiar en CommCare la URL del webhook de tu workflow de OpenFn.
Cada formulario que se envíe en CommCare llegará automáticamente a OpenFn y
disparará tu nuevo workflow.

## Transformar y cargar los datos de CommCare en una base de datos PostgreSQL {#transforming-and-loading-commcare-data-to-a-postgresql-database}

1. **Necesitas una base de datos configurada y un nombre de usuario para que
   OpenFn pueda leer y escribir datos en las tablas de destino.** Para esta
   demostración, configuramos la base de datos
   [así](https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing)
   para guardar los datos del formulario de CommCare. Consulta
   [esta página](/design/mapping-specs.md) para aprender a crear tu propio
   `mapping specification document` y mapear los elementos de datos que se van a
   intercambiar.

![db_config](/img/db_config.webp)

2. **Crea un step nuevo con el adaptor `postgresql` para cargar los datos de
   CommCare en tu base de datos de destino.**

![configure_job_postgres](/img/create-job.gif)

3. **Crea una credencial de PostgreSQL, que el step usará para autenticarse con
   la base de datos.**

![add_credential_postgres](/img/postgresql-cred.gif)

4. **Escribe el step:** en este step usaremos la operación upsert para insertar
   o actualizar registros en la tabla de destino `patient`, con `patient_id`
   como clave primaria. Un `upsert` actualiza una fila si el valor indicado ya
   existe en la tabla, y si no existe, inserta una fila nueva.

```js
upsert('patient', 'ON CONSTRAINT patient_pk', {
  patient_id: dataValue('data.patient_name'),
  patient_name: dataValue('data.patient_name'),
  village_name: dataValue('data.village_name'),
  last_menstrual_period: dataValue('data.last_menstrual_period'),
  expected_delivery_date: dataValue('data.expected_delivery_date'),
  children_alive: dataValue('data.children_alive'),
  living_children: dataValue('data.living_children'),
  feeling_sick: dataValue('data.feeling_sick'),
  total_children: dataValue('data.Total_children'),
  risk_level: dataValue('data.Risk_level'),
});
```

Puedes modificar este código para adaptarlo a tu configuración de CommCare y de
la base de datos, según tus especificaciones de mapeo.

![create-job](/img/create_job_db.gif)

## ¡Hora de probar! {#time-to-test}

1. Envía un formulario en CommCare.
2. Si activaste el reenvío de datos, tu workflow debería dispararse
   automáticamente.
3. Si no activaste el reenvío de datos y en su lugar configuraste un step FETCH,
   ejecuta el step (revisa que las fechas `received_on_start` y
   `received_on_start` del FETCH sean las correctas).
4. Ejecuta el step FETCH. Si funciona, el step "Load to DB" debería ejecutarse
   automáticamente.
5. Revisa el `History` y comprueba que la work order se completó con éxito.

![activity_history_final](/img/activity_history_success.webp)

:::info

**Qué hacer si tu run falla:**

1. Abre el run para revisar el registro de errores.
2. Ajusta el step para resolver el problema y vuelve a ejecutarlo las veces que
   haga falta con el botón "rerun" en `History` o con el botón "Re-run from
   here" en el `Inspector`.
3. Consulta la página de
   [errores comunes de PostgreSQL](/adaptors/postgresql/#common-errors) para ver
   más detalles.

:::

4. **Por último, actualiza tu base de datos y revisa los datos del nuevo
   envío.**

![metabase](/img/metabase.webp)

Aunque esta guía es específica para bases de datos PostgreSQL, en general puedes
seguir los mismos pasos con otros tipos de bases de datos (por ejemplo, MS SQL o
MySQL): solo tienes que usar otro adaptor en la configuración del step.

**Otros recursos que puedes consultar:**

1. La biblioteca de jobs de OpenFn
2. Las páginas de "App" de CommCare y Postgres en la documentación de OpenFn

**¿Tienes preguntas, comentarios o ideas nuevas de configuración? Escríbenos en
el foro de la [comunidad de OpenFn](https://community.openfn.org/).**
