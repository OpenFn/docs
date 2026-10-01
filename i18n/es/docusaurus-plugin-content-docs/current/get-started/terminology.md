---
title: Conceptos clave
translation_source_hash: 2885a84bfad099adf8223a97458e5d5dbe03e5b4
translation_review_status: machine
---

En todo el OpenFn Integration Toolkit y en este sitio de documentación
encontrarás terminología propia de OpenFn que es importante entender. Esta
página es tu guía de referencia: un glosario de las palabras _propias de OpenFn_
más importantes y de lo que significan.

:::tip ¿Falta algo?

Si te has encontrado con una palabra, una expresión o un concepto que crees que
falta en esta página, abre un issue en
[OpenFn/docs](https://github.com/OpenFn/docs), sugiere un cambio en
[esta página](https://github.com/OpenFn/docs/blob/main/docs/get-started/terminology.md)
o pregunta en la [comunidad](https://community.openfn.org)

:::

Ten en cuenta que, si buscas un glosario de términos genéricos de integración de
datos (en lugar de estos términos _propios de OpenFn_), puedes ir a la página
[Glosario de integración](/documentation/get-started/glossary) de la sección
Primeros pasos. Si no, ¡sigue leyendo!

## Proyecto {#project}

Un proyecto es una agrupación administrativa en OpenFn, como un "espacio de
trabajo".

En la plataforma (OpenFn/lightning), los proyectos definen quién puede acceder a
la configuración y al historial de tus workflows de OpenFn. Los proyectos tienen
un propietario y uno o más colaboradores.

En el despliegue y el desarrollo locales, un proyecto también corresponde a un
archivo [`project.yaml`](/documentation/deploy/portability-versions#v2), que
define la configuración de un proyecto.

En cualquier caso, un proyecto contiene Workflows, Triggers, credenciales y todo
lo que necesitas para automatizar e integrar con OpenFn.

## Workflow

:::tip

¡Los workflows son la parte de **"qué hacer"** de la automatización!

:::

Un workflow es una secuencia estructurada de tareas, procesos o acciones que se
ejecutan automáticamente según reglas, disparadores y lógica predefinidos.

Cuando trabajas con IA, los workflows aportan la ejecución estructurada que hace
falta para convertir las conclusiones de un LLM en acciones reales, mientras que
los agentes de IA permiten tomar decisiones más dinámicas dentro de los
workflows.

Un Workflow es un conjunto formado por un Trigger, Steps, Paths y lógica
personalizada, conectados entre sí para automatizar un proceso de negocio o una
tarea concretos. Un Workflow se configura en el Canvas de la aplicación web, o
localmente (con código).

La automatización de OpenFn gira en torno a los
[Workflows](/documentation/build/workflows), que pueden tener uno o varios
Steps. Los Workflows pueden ejecutarse en tiempo real (a partir de un evento, p.
ej., el registro de un nuevo paciente), de forma programada (p. ej., todos los
días a las 8 a. m.) o manualmente, cuando se necesite.

Piensa en un workflow como un conjunto de instrucciones que podrías darle a un
miembro del personal (p. ej., crea un nuevo registro de paciente en OpenMRS
cuando se reciba desde CommCare un formulario con un cliente recién registrado;
exporta datos a DHIS2 cada semana, el viernes a las 11 p. m.; envía un SMS con
el número de confirmación del pago cuando se reciba el mensaje de confirmación
del pago, etc.).

Los Workflows más comunes automatizan:

- Los informes para un seguimiento de programas mejor y más rápido (sobre todo
  los informes de móvil a MIS)
- Pasos rutinarios de ETL (extracción, transformación y carga) y de limpieza de
  datos
- Alertas (SMS, correo electrónico)
- Derivaciones entre sistemas de socios
- Asignaciones o aprobaciones de tareas
- Informes de quejas o de casos
- Transacciones financieras o pagos

:::note Los workflows son reutilizables

Los workflows son totalmente configurables y reutilizables. También pueden
encadenarse para automatizar procesos de varios pasos y sincronizaciones de
datos bidireccionales que mantengan la coherencia de los datos entre varias
aplicaciones (con patrones Saga de varias aplicaciones).

:::

### Adaptor

:::tip

¡Los adaptors son la parte de **"dónde hacerlo"** de la automatización!

:::

Los [Adaptors](/adaptors) de OpenFn son módulos de código abierto que dan a tus
Workflows las funciones que necesitan para comunicarse con la API de un sistema
concreto. Algunos ejemplos son [dhis](/adaptors/dhis2),
[`postgresql`](/adaptors/postgresql) y [`http`](/adaptors/packages/http-docs),
entre otros. Ahora mismo hay más de 70 adaptors activos, y cualquiera puede
crearlos o mejorarlos. Consulta el código fuente en
[GitHub/Adaptors](https://github.com/OpenFn/adaptors).

### Credencial {#credential}

:::tip

¡Las credenciales son la parte de **"cómo iniciar sesión"** de la
automatización!

:::

Una credencial se usa para autenticarse en una aplicación de destino (p. ej., el
nombre de usuario, la contraseña y la URL de inicio de sesión de una base de
datos) para que un Step de un Workflow pueda ejecutarse. Según el modelo de
seguridad de OpenFn, las credenciales se guardan separadas de los propios
Workflows, para que los nombres de usuario y las contraseñas almacenados (todos
cifrados) no se filtren ni lleguen a las personas equivocadas.

## Trigger

:::tip

¡Los Triggers son la parte de **"cuándo hacerlo"** de la automatización!

:::

Un [Trigger](/documentation/build/triggers) determina **cómo y cuándo** deben
ejecutarse automáticamente los Workflows (p. ej., en tiempo real o de forma
programada). Al activarse, los Triggers crean una nueva
[Work Order](/documentation/get-started/terminology#work-order) y ejecutan el
Workflow.

Puedes configurar un Trigger de tipo "Webhook Event" si quieres que tu Workflow
se ejecute en tiempo real cuando ocurra un evento en una aplicación externa (p.
ej., se envía un formulario nuevo o se recibe una notificación nueva).

Puedes configurar un Trigger de tipo "Cron" si quieres que tu Workflow se
ejecute según un calendario concreto (p. ej., todos los días a las 8 a. m., el
primer lunes de cada mes).

## Work Order

:::tip

Las Work Orders registran **"cuándo y qué disparó"** la automatización, y nos
ayudan a comprobar si el Workflow se completa correctamente y cuándo.

:::

Una Work Order es una solicitud para ejecutar un Workflow con una entrada
determinada (p. ej., el envío de un formulario nuevo o un registro de paciente
que hay que procesar).

Se crea una Work Order cada vez que se activa el Trigger de un Workflow, o
manualmente cuando lo hace un usuario Admin.

Para que una Work Order se complete correctamente, la Work Order debe llegar sin
errores a un Step final; así se garantiza que el procesamiento se ha completado.
Puede que hagan falta varios "Runs" del Workflow para que una Work Order se
considere correcta.

Las Work Orders permiten a los usuarios comprobar de cerca si un workflow
procesa correctamente entradas concretas (p. ej., "registro de paciente 123"),
para tener una experiencia de auditoría de tipo "gestión de casos".

Imagina que un Workflow está configurado para crear un nuevo paciente en OpenMRS
cada vez que se abre un caso nuevo en CommCare. Si durante la semana siguiente
se abren 5 casos en CommCare, verás 5 Work Orders distintas para este Workflow.
Si 4 Work Orders son correctas y una ha fallado, verás 4 pacientes nuevos en
OpenMRS, y se habrá avisado al administrador de tu sistema de que no se pudo
crear uno de esos pacientes (o se pondrá en marcha cualquier gestión de errores
más robusta que hayas configurado).

![Work Order](/img/work_order_shot.webp)

:::note

Normalmente hay una correspondencia de 1 a 1 entre las Work Orders y las cosas
reales con las que trabajas. Podría crear un Workflow que obtenga de DHIS2 todos
los datos de eventos actualizados de las últimas 2 semanas y los publique en un
mapa público con CartoDB. Este Workflow se disparará a intervalos definidos, en
este caso cada 2 semanas, y al cabo de un mes solo veremos 2 Work Orders en
OpenFn (una cada dos semanas). Cada Work Order tendrá un estado correcto o
fallido, con Runs relacionados que registran los detalles de cada transacción y
cuántos registros de eventos se han procesado.

:::

## Run

:::tip

¡Los Runs registran **"lo que pasó"** en la automatización!

:::

Un Run es un intento individual de ejecución para completar una Work Order.
Puede haber varios Runs de Workflow para cumplir una Work Order (porque el
primer Run puede fallar y hay que reintentarlo para procesarla correctamente).

Los Runs tienen horas de inicio, horas de fin, logs y códigos de estado que
indican cuándo tuvieron lugar, qué hicieron y si tuvieron éxito o no.

![Canvas de Workflow de OpenFn](/img/run_view_logs.webp)

Imagina que un Workflow está configurado para crear un nuevo paciente en OpenMRS
cada vez que se abre un caso nuevo en CommCare. Si hoy se crea 1 paciente:

- Se creará 1 Work Order en OpenFn. Esta disparará la ejecución de un Run para
  crear el paciente en OpenMRS.
- Si ese Run falla por un error (p. ej., la contraseña del usuario de OpenMRS es
  incorrecta, o al paciente le falta información obligatoria), el "Status" de
  ese Run y de la Work Order relacionada aparecerá como `failed`.
- Los usuarios de OpenFn pueden corregir el error y luego elegir "rerun" para
  volver a ejecutar ese Run fallido. Esto creará un 2.º Run relacionado con la
  Work Order original. Si tiene éxito, el "Status" del 2.º Run y de la Work
  Order aparecerá como "success".

### Logs

Los logs son los registros que genera el motor de ejecución de workflows para
dejar constancia de las actividades realizadas al ejecutar un Workflow o un Step
concreto.

Los desarrolladores de OpenFn pueden controlar lo que aparece en los logs
editando las sentencias `console.log(...)` de las expresiones de job de los
Steps de cada Workflow.

![Logs](/img/logs_run.webp)

## History

En la plataforma, la página History muestra una lista de todas las Work Orders y
todos los Runs que se han procesado en un proyecto.

![History](/img/case-referral-history.webp)

## Inspector

En la plataforma, la interfaz Inspector permite a los usuarios editar, probar y
ejecutar workflows.

El Inspector tiene 3 interfaces clave: `Input`, `Editor` y `Output`.

![Inspector](/img/inspector_interfaces.webp)

### Input

Un Input son los datos (`json`) que un Step de un Workflow usa como entrada
inicial cuando se ejecuta. Cada Run tiene un Input (el `state` inicial) y un
Output (el `state` final).

Los Inputs pueden crearse automáticamente a partir de un evento de webhook (p.
ej., un mensaje reenviado o un payload JSON enviado a OpenFn) o de otro Step del
Workflow, o manualmente por un usuario de OpenFn.

Ejemplo de Input a partir del envío de un formulario desde una aplicación móvil
de recogida de datos (p. ej., Kobo, ODK, CommCare):

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

Un Output son los datos finales (`json`) que produce un Step de un workflow,
según la lógica de negocio definida en la expresión de job del Step. Los Outputs
se pasan al siguiente Step del workflow, a la aplicación de destino conectada o
a ambos.

Ejemplo de Output si el ejemplo de envío de formulario anterior (ver la sección
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
