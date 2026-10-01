---
title: Conceptos clave
translation_source_hash: 2885a84bfad099adf8223a97458e5d5dbe03e5b4
translation_review_status: machine
---

En todo el OpenFn Integration Toolkit y en este sitio de documentación
encontrarás términos propios de OpenFn que es importante entender. Esta página
es tu guía de referencia: un glosario de las palabras _propias de OpenFn_ más
importantes y de lo que significan.

:::tip ¿Falta algo?

Si encontraste una palabra, una expresión o un concepto que crees que falta en
esta página, abre un issue en [OpenFn/docs](https://github.com/OpenFn/docs),
sugiere un cambio en
[esta página](https://github.com/OpenFn/docs/blob/main/docs/get-started/terminology.md)
o pregunta en la [comunidad](https://community.openfn.org)

:::

Si buscas un glosario de términos genéricos de integración de datos (y no de
estos términos _propios de OpenFn_), ve a la página
[Glosario de integración](/documentation/get-started/glossary) de la sección
Primeros pasos. Si no, ¡sigue leyendo!

## Proyecto {#project}

Un proyecto es una agrupación administrativa en OpenFn, parecida a un "espacio
de trabajo".

En la plataforma (OpenFn/lightning), los proyectos definen quién puede acceder a
la configuración y al historial de tus workflows de OpenFn. Cada proyecto tiene
un propietario y uno o más colaboradores.

En el despliegue y el desarrollo locales, un proyecto también corresponde a un
archivo [`project.yaml`](/documentation/deploy/portability-versions#v2), que
define su configuración.

En ambos casos, un proyecto contiene workflows, triggers, credenciales y todo lo
que necesitas para automatizar e integrar con OpenFn.

## Workflow

:::tip

¡Los workflows son la parte de **"qué hacer"** de la automatización!

:::

Un workflow es una secuencia estructurada de tareas, procesos o acciones que se
ejecutan automáticamente según reglas, disparadores y lógica predefinidos.

Al trabajar con IA, los workflows aportan la ejecución estructurada que hace
falta para convertir lo que propone un LLM en acciones reales, mientras que los
agentes de IA permiten tomar decisiones más dinámicas dentro de los workflows.

Un workflow es un conjunto formado por un trigger, steps, paths y lógica
personalizada, conectados entre sí para automatizar un proceso de negocio o una
tarea concretos. Se configura en el Canvas de la aplicación web, o localmente
con código.

La automatización de OpenFn gira en torno a los
[workflows](/documentation/build/workflows), que pueden tener uno o varios
steps. Un workflow puede ejecutarse en tiempo real (a partir de un evento, por
ejemplo, el registro de un paciente nuevo), de forma programada (por ejemplo,
todos los días a las 8 a. m.) o manualmente, cuando lo necesites.

Piensa en un workflow como un conjunto de instrucciones que le darías a alguien
de tu equipo. Por ejemplo: crea un registro de paciente nuevo en OpenMRS cuando
llegue desde CommCare un formulario con un cliente recién registrado; exporta
datos a DHIS2 todas las semanas, los viernes a las 11 p. m.; envía un SMS con el
número de confirmación del pago cuando llegue el mensaje de confirmación del
pago.

Los workflows más comunes automatizan:

- Reportes para un seguimiento de programas mejor y más rápido (sobre todo
  reportes de dispositivos móviles a un MIS)
- Pasos rutinarios de ETL (extracción, transformación y carga) y de limpieza de
  datos
- Alertas (SMS, correo electrónico)
- Derivaciones entre sistemas de socios
- Asignaciones o aprobaciones de tareas
- Reportes de quejas o de casos
- Transacciones financieras o pagos

:::note Los workflows son reutilizables

Los workflows son totalmente configurables y reutilizables. También pueden
encadenarse para automatizar procesos de varios pasos y sincronizaciones de
datos en ambos sentidos, que mantienen la coherencia de los datos entre varias
aplicaciones (con patrones Saga de varias aplicaciones).

:::

### Adaptor

:::tip

¡Los adaptors son la parte de **"dónde hacerlo"** de la automatización!

:::

Los [adaptors](/adaptors) de OpenFn son módulos de código abierto que dan a tus
workflows las funciones que necesitan para comunicarse con la API de un sistema
concreto. Algunos ejemplos son [dhis](/adaptors/dhis2),
[`postgresql`](/adaptors/postgresql) y [`http`](/adaptors/packages/http-docs).
Actualmente hay más de 70 adaptors activos, y cualquiera puede crearlos o
mejorarlos. El código fuente está en
[GitHub/Adaptors](https://github.com/OpenFn/adaptors).

### Credencial {#credential}

:::tip

¡Las credenciales son la parte de **"cómo iniciar sesión"** de la
automatización!

:::

Una credencial sirve para autenticarse en una aplicación de destino (por
ejemplo, el nombre de usuario, la contraseña y la URL de inicio de sesión de una
base de datos) para que un step de un workflow pueda ejecutarse. El modelo de
seguridad de OpenFn guarda las credenciales separadas de los workflows, para que
los nombres de usuario y las contraseñas almacenados (todos cifrados) no se
filtren ni lleguen a las personas equivocadas.

## Trigger

:::tip

¡Los triggers son la parte de **"cuándo hacerlo"** de la automatización!

:::

Un [trigger](/documentation/build/triggers) determina **cómo y cuándo** deben
ejecutarse automáticamente los workflows (por ejemplo, en tiempo real o de forma
programada). Al activarse, el trigger crea una nueva
[work order](/documentation/get-started/terminology#work-order) y ejecuta el
workflow.

Configura un trigger de tipo "Webhook Event" si quieres que tu workflow se
ejecute en tiempo real cuando ocurre un evento en una aplicación externa (por
ejemplo, cuando se envía un formulario nuevo o llega una notificación nueva).

Configura un trigger de tipo "Cron" si quieres que tu workflow se ejecute según
un calendario concreto (por ejemplo, todos los días a las 8 a. m., o el primer
lunes de cada mes).

## Work order

:::tip

Las work orders registran **"cuándo y qué disparó"** la automatización, y nos
ayudan a ver si el workflow se completa correctamente y cuándo.

:::

Una work order es una solicitud para ejecutar un workflow con una entrada
determinada (por ejemplo, un formulario recién enviado o un registro de paciente
que hay que procesar).

Se crea una work order cada vez que se activa el trigger de un workflow, o
cuando un usuario administrador la crea manualmente.

Para completarse correctamente, la work order debe llegar sin errores a un step
final; así se garantiza que el procesamiento terminó. Puede que hagan falta
varios "runs" del workflow para que una work order se considere correcta.

Las work orders permiten seguir de cerca si un workflow procesa correctamente
cada entrada (por ejemplo, "registro de paciente 123"), como en una auditoría de
"gestión de casos".

Imagina que un workflow está configurado para crear un paciente nuevo en OpenMRS
cada vez que se abre un caso nuevo en CommCare. Si durante la semana siguiente
se abren 5 casos en CommCare, verás 5 work orders distintas para este workflow.
Si 4 work orders son correctas y una falla, verás 4 pacientes nuevos en OpenMRS,
y el administrador de tu sistema habrá recibido un aviso de que no se pudo crear
uno de esos pacientes (o se pondrá en marcha el manejo de errores más robusto
que hayas configurado).

![Work order](/img/work_order_shot.webp)

:::note

Normalmente hay una correspondencia de 1 a 1 entre las work orders y las cosas
reales con las que trabajas. Por ejemplo, podrías crear un workflow que obtenga
de DHIS2 todos los datos de eventos actualizados de las últimas 2 semanas y los
publique en un mapa público con CartoDB. Este workflow se disparará a intervalos
definidos, en este caso cada 2 semanas, así que al cabo de un mes solo verás 2
work orders en OpenFn (una cada dos semanas). Cada work order tendrá un estado
correcto o fallido, con runs relacionados que registran los detalles de cada
transacción y cuántos registros de eventos se procesaron.

:::

## Run

:::tip

¡Los runs registran **"lo que pasó"** en la automatización!

:::

Un run es un intento individual de ejecución para completar una work order.
Puede haber varios runs de un workflow para una misma work order (porque el
primer run puede fallar y hay que reintentarlo para procesarla correctamente).

Los runs tienen hora de inicio, hora de fin, logs y códigos de estado que
indican cuándo tuvieron lugar, qué hicieron y si tuvieron éxito o no.

![Canvas de workflow de OpenFn](/img/run_view_logs.webp)

Imagina que un workflow está configurado para crear un paciente nuevo en OpenMRS
cada vez que se abre un caso nuevo en CommCare. Si hoy se crea 1 paciente:

- Se creará 1 work order en OpenFn, que disparará un run para crear el paciente
  en OpenMRS.
- Si ese run falla por un error (por ejemplo, la contraseña del usuario de
  OpenMRS es incorrecta o al paciente le falta información obligatoria), el
  "Status" de ese run y de la work order relacionada aparecerá como `failed`.
- Los usuarios de OpenFn pueden corregir el error y elegir "rerun" para volver a
  ejecutar ese run fallido. Esto crea un 2.º run relacionado con la work order
  original. Si tiene éxito, el "Status" del 2.º run y de la work order aparecerá
  como "success".

### Logs

Los logs son los registros que genera el motor de ejecución de workflows para
dejar constancia de lo que se hizo al ejecutar un workflow o un step concreto.

Los desarrolladores de OpenFn pueden controlar lo que aparece en los logs
editando las sentencias `console.log(...)` en las expresiones de job de cada
step.

![Logs](/img/logs_run.webp)

## History

En la plataforma, la página History muestra una lista de todas las work orders y
todos los runs que se procesaron en un proyecto.

![History](/img/case-referral-history.webp)

## Inspector

En la plataforma, el Inspector es la interfaz que permite editar, probar y
ejecutar workflows.

El Inspector tiene 3 paneles clave: `Input`, `Editor` y `Output`.

![Inspector](/img/inspector_interfaces.webp)

### Input

El Input son los datos (`json`) que un step de un workflow usa como entrada
inicial cuando se ejecuta. Cada run tiene un Input (el `state` inicial) y un
Output (el `state` final).

Los Inputs pueden crearse automáticamente a partir de un evento de webhook (por
ejemplo, un mensaje reenviado o un payload JSON enviado a OpenFn) o de otro step
del workflow, o manualmente, por un usuario de OpenFn.

Ejemplo de Input a partir de un formulario enviado desde una aplicación móvil de
recolección de datos (como Kobo, ODK o CommCare):

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

El Output son los datos finales (`json`) que produce un step de un workflow,
según la lógica de negocio definida en su expresión de job. El Output pasa al
siguiente step del workflow, a la aplicación de destino conectada, o a ambos.

Ejemplo de Output si el formulario del ejemplo anterior se mapeara a una
aplicación de gestión de casos conectada:

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
