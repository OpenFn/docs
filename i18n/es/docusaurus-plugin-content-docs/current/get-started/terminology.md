---
title: Conceptos clave
translation_source_hash: bf33ecde0f3556f61527ffbfaea99ca95128c1b3
translation_review_status: machine
---

A lo largo del OpenFn Integration Toolkit y de este sitio de documentación
encontrarás terminología propia de OpenFn que es importante entender. Esta
página es tu guía de referencia: un glosario de las palabras más importantes
_específicas de OpenFn_ y su significado.

:::tip ¿Falta algo?

Si te encontraste con una palabra, frase o concepto que crees que falta en esta
página, abre un issue en [OpenFn/docs](https://github.com/OpenFn/docs), sugiere
una edición a
[esta página](https://github.com/OpenFn/docs/blob/main/docs/get-started/terminology.md)
o pregunta en la [Comunidad](https://community.openfn.org)

:::

Ten en cuenta que si buscas un glosario de términos genéricos de integración de
datos (en lugar de estos términos _específicos de OpenFn_), dirígete a la página
[Glosario de integración](/documentation/get-started/glossary) en la sección de
Diseño. Si no, ¡sigue leyendo!

## Project

Un Project es una agrupación administrativa en OpenFn, algo así como un "espacio
de trabajo".

En la plataforma (OpenFn/lightning), los Projects definen quién puede acceder a
la configuración y al historial de tus flujos de trabajo de OpenFn. Los Projects
tienen una persona propietaria y uno o más Collaborators.

En despliegues y desarrollo local, un Project también corresponde a un archivo
[`project.yaml`](/documentation/deploy/portability-versions#v2), que define la
configuración de un Project.

En cualquiera de los dos casos, un Project contiene Workflows, Triggers,
Credentials y todo lo que necesitas para automatizar e integrar con OpenFn.

## Workflow

:::tip

¡Los Workflows son la parte del **"qué hacer"** de la automatización!

:::

Un Workflow es una secuencia estructurada de tareas, procesos o acciones que se
ejecutan automáticamente según reglas, triggers y lógica predefinidos.

Cuando se trabaja con IA, los Workflows aportan la ejecución estructurada que se
necesita para convertir los hallazgos de un LLM en acciones concretas, mientras
que los agentes de IA permiten una toma de decisiones más dinámica dentro de los
Workflows.

Un Workflow es un conjunto formado por un Trigger, Steps, Paths y lógica
personalizada, conectados entre sí para automatizar un proceso de negocio o una
tarea específica. Un Workflow se configura desde el Canvas en la aplicación web,
o localmente (mediante código).

La automatización en OpenFn gira en torno a los
[Workflows](/documentation/build/workflows), que pueden tener uno o varios
Steps. Los Workflows pueden ejecutarse en tiempo real (a partir de un evento,
por ejemplo el registro de un nuevo paciente), de forma programada (por ejemplo,
todos los días a las 8 a.m.) o manualmente, cuando se necesite.

Piensa en un Workflow como un conjunto de instrucciones que le darías a una
persona del equipo (por ejemplo: crea un registro de Paciente nuevo en OpenMRS
cuando llegue de CommCare un formulario con un cliente recién registrado;
exporta los datos a DHIS2 todas las semanas, los viernes a las 11 p.m.; envía un
SMS con el número de confirmación de pago cuando se reciba el mensaje de
confirmación de pago, etc.).

Los Workflows más comunes automatizan:

- Reportes para un monitoreo de programas más rápido y completo (en especial,
  reportes desde dispositivos móviles hacia un MIS)
- Pasos rutinarios de ETL de datos (extracción, transformación y carga) y de
  limpieza de datos
- Alertas (SMS, correo electrónico)
- Referencias entre sistemas de organizaciones socias
- Asignación o aprobación de tareas
- Reporte de quejas o de casos
- Transacciones financieras o pagos

:::note Los Workflows son reutilizables

Los Workflows son totalmente configurables y reutilizables. También pueden
encadenarse para automatizar procesos de varios pasos y sincronizaciones de
datos bidireccionales, de modo que los datos se mantengan consistentes entre
varias aplicaciones (usando patrones Saga multiaplicación).

:::

### Adaptor

:::tip

¡Los Adaptors son la parte del **"dónde hacerlo"** de la automatización!

:::

Los [Adaptors](/adaptors) de OpenFn son módulos de código abierto que le dan a
tus Workflows las funcionalidades que necesitan para comunicarse con la API de
un sistema en particular. Algunos ejemplos son [dhis](/adaptors/dhis2),
[`postgresql`](/adaptors/postgresql) y [`http`](/adaptors/packages/http-docs),
entre otros. Actualmente hay más de 70 Adaptors activos, y cualquiera puede
crear uno nuevo o mejorar los existentes. Consulta
[GitHub/Adaptors](https://github.com/OpenFn/adaptors) para ver el código fuente.

### Credential

:::tip

¡Los Credentials son la parte del **"cómo iniciar sesión"** de la
automatización!

:::

Un Credential se usa para autenticarse ante una aplicación de destino (por
ejemplo, el usuario, la contraseña y la URL de acceso de una base de datos) para
que un Step de un Workflow pueda ejecutarse. Según el modelo de seguridad de
OpenFn, los Credentials se mantienen separados de los Workflows para asegurar
que los usuarios y contraseñas almacenados (todos ellos cifrados) no se filtren
ni queden al alcance de las personas equivocadas.

## Trigger

:::tip

¡Los Triggers son la parte del **"cuándo hacerlo"** de la automatización!

:::

Un [Trigger](/documentation/build/triggers) determina **cómo y cuándo** deben
ejecutarse los Workflows automáticamente (por ejemplo, en tiempo real o según
una programación). Cuando se activan, los Triggers crean un nuevo
[Work Order](/documentation/get-started/terminology#work-order) y ejecutan el
Workflow.

Puedes configurar un Trigger de tipo "Webhook Event" si quieres que tu Workflow
se ejecute en tiempo real cuando ocurra un evento en una aplicación externa (por
ejemplo, el envío de un formulario nuevo o la recepción de una notificación
nueva).

Puedes configurar un Trigger de tipo "Cron" si quieres que tu Workflow se
ejecute según una programación específica (por ejemplo, todos los días a las 8
a.m., o el primer lunes de cada mes).

## Work Order

:::tip

Los Work Orders registran **"cuándo y qué activó"** la automatización, y nos
ayudan a monitorear si el Workflow se completó correctamente y en qué momento.

:::

Un Work Order es una solicitud de ejecución de un Workflow con una entrada
determinada (por ejemplo, el envío de un formulario nuevo o el registro de un
paciente que necesita procesarse).

Se crea un Work Order cada vez que se activa el Trigger de un Workflow, o
manualmente por parte de un usuario administrador.

Para que un Work Order se complete correctamente, el Work Order debe llegar sin
errores a un Step final: así se garantiza que el procesamiento terminó. Es
posible que se necesiten varios "Runs" del Workflow para que un Work Order
determinado se considere exitoso.

Los Work Orders les permiten a los usuarios monitorear de cerca si cada entrada
individual (por ejemplo, el "registro de paciente 123") es procesada
correctamente por un Workflow determinado, con una experiencia de auditoría
similar a la gestión de casos.

Imagina que hay un Workflow configurado para crear un paciente nuevo en OpenMRS
cada vez que se abre un caso nuevo en CommCare. Si durante la próxima semana se
abren 5 casos en CommCare, verás 5 Work Orders distintos para ese único
Workflow. Si 4 Work Orders son exitosos y uno falla, verás 4 pacientes nuevos en
OpenMRS, y tu administrador de sistemas habrá recibido una notificación de que
uno de esos pacientes no se pudo crear (o se aplicará el manejo de errores más
robusto que hayas configurado).

![Work Order](/img/work_order_shot.webp)

:::note

Normalmente hay una correspondencia de uno a uno entre los Work Orders y las
cosas del mundo real con las que trabajas. Podría crear un Workflow que obtenga
de DHIS2 todos los datos de eventos actualizados de las últimas 2 semanas y los
publique en un mapa público usando CartoDB. Este Workflow se activará en
intervalos de tiempo definidos, cada 2 semanas en este caso, y al cabo de un mes
veremos solo 2 Work Orders en OpenFn (o sea, uno cada dos semanas). Cada Work
Order tendrá un estado de éxito o de falla, con Runs asociados que registran los
detalles de cada transacción y cuántos registros de eventos se procesaron.

:::

## Run

:::tip

¡Los Runs registran **"qué pasó"** en la automatización!

:::

Un Run es un intento individual de ejecución para completar un Work Order.
Pueden existir varios Runs de un Workflow para cumplir con un mismo Work Order
(porque el primer Run puede fallar y hay que reintentarlo para que se procese
correctamente).

Los Runs tienen horas de inicio, horas de finalización, logs y códigos de estado
que indican cuándo ocurrieron, qué hicieron y si tuvieron éxito o no.

![Canvas de Workflow de OpenFn](/img/run_view_logs.webp)

Imagina que hay un Workflow configurado para crear un paciente nuevo en OpenMRS
cada vez que se abre un caso nuevo en CommCare. Si hoy se crea 1 paciente,
entonces:

- Se creará 1 Work Order en OpenFn. Esto activará la ejecución de un Run para
  crear el paciente en OpenMRS.
- Si ese Run falla por un error (por ejemplo, la contraseña del usuario de
  OpenMRS es incorrecta, o al paciente le falta información obligatoria), el
  "Status" de ese Run y del Work Order asociado aparecerá como `failed`.
- Los usuarios de OpenFn pueden corregir el error y luego elegir "rerun" para
  volver a ejecutar ese Run fallido. Esto creará un 2.º Run asociado al Work
  Order original. Si tiene éxito, el "Status" del 2.º Run y del Work Order
  aparecerá como "success".

### Logs

Los logs son los registros que genera el motor de ejecución de Workflows para
capturar las actividades realizadas al ejecutar un Workflow o un Step
específico.

Quienes desarrollan en OpenFn pueden controlar qué aparece en los logs editando
las sentencias `console.log(...)` en las expresiones de Job de cada Step.

![Logs](/img/logs_run.webp)

## History

En la plataforma, la página History muestra la lista de todos los Work Orders y
Runs que se han procesado en un Project.

![History](/img/case-referral-history.webp)

## Inspector

En la plataforma, la interfaz del Inspector les permite a los usuarios editar,
probar y ejecutar Workflows.

El Inspector tiene 3 interfaces principales: `Input`, `Editor` y `Output`.

![Inspector](/img/inspector_interfaces.webp)

### Input

Un Input son los datos (`json`) que se usan como entrada inicial para que un
Step de un Workflow los utilice al ejecutarse. Cada Run tendrá un Input (estado
inicial) y un Output (estado final).

Los Inputs pueden crearse automáticamente a partir de un evento de webhook (por
ejemplo, un mensaje reenviado o un payload JSON enviado a OpenFn) o de otro Step
del Workflow, o bien manualmente por parte de un usuario de OpenFn.

Ejemplo de Input a partir del envío de un formulario desde una aplicación móvil
de recolección de datos (por ejemplo, Kobo, ODK o CommCare):

```json
{
  "data": {
    "form": {
      "@name": "Register New Patient",
      "case": {
        "@case_id": "a9bX12c",
        "@date_modified": "2021-01-21T07:08:19.431000Z",
        "@user_id": "aaa",
        "@xmlns": "http://commcarehq.org/case/transaction/v2",
        "create": {
          "case_name": "John Doe",
          "age": 16,
          "case_type": "patient",
          "owner_id": "alan.worker"
        }
      }
    }
  }
}
```

### Output

Un Output son los datos finales (`json`) que produce un Step de un Workflow,
según la lógica de negocio definida en la expresión de Job de ese Step. Los
Outputs se pasan al siguiente Step del Workflow y/o a la aplicación de destino
conectada.

Ejemplo de Output si el envío de formulario del ejemplo anterior (ver la sección
de arriba) se mapeara a una aplicación de gestión de casos conectada:

```json
{
  "data": {
    "patient": {
      "full_name": "John Doe",
      "age_at_enrollment": 16,
      "type": "new",
      "source": "mobile-app"
    }
  }
}
```
