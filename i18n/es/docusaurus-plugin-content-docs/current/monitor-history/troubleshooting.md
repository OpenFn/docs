---
title: Logs y solución de problemas
sidebar_label: Logs y solución de problemas
keywords:
  - runs
  - logs
  - log levels
  - status codes
  - exit codes
  - troubleshooting
translation_source_hash: 142023e6bcf41255617e547ab466c497c6e1266e
translation_review_status: machine
---

Esta página ofrece consejos para solucionar problemas a quienes usan la
_plataforma OpenFn v2_.

## Runs

Una de las páginas más útiles para solucionar problemas en OpenFn es la página
[History](/monitor-history/activity-history.md). Muestra una lista de todos los
runs ejecutados para una work order y su estado. Los administradores del
proyecto pueden investigar los errores haciendo clic en un run para revisar sus
detalles. Más información sobre los runs
[aquí](/monitor-history/inspect-runs.md).

### Códigos de estado {#status-codes}

Cada run tiene un código de estado. El código de estado es la forma en que
OpenFn clasifica el estado del run, y puede ayudarte a solucionar errores. Más
información sobre los códigos de estado de OpenFn y lo que significa cada uno
[aquí](/monitor-history/status-codes.md).

### Cuánto tardó el workflow en fallar {#the-time-it-took-for-the-workflow-to-fail}

El run también registra cuánto tiempo pasó antes de que el workflow fallara.
Este dato ayuda a saber si el workflow está tardando más de lo que debería, y es
especialmente útil con errores relacionados con tiempos de espera agotados.
Puedes usar el run para saber en qué operación se agota el tiempo del workflow y
si se puede optimizar su rendimiento.

### Logs del run {#run-logs}

Mientras desarrollas workflows, es importante registrar en los logs detalles que
harán mucho más fáciles las pruebas y la solución de problemas en el futuro.

#### Niveles de log {#log-levels}

![log-levels](/img/log-levels.webp)

| Nivel   | Descripción                                                                                                                                                                        |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `debug` | Muestra todos los logs, incluidas las cosas de nivel de sistema que produce el "runtime" y la salida de una instrucción `console.debug()` escrita por el usuario.                  |
| `info`  | El nivel de log predeterminado. Muestra la información clave que producen los adaptors o las instrucciones `console.log()`/`console.info()`.                                       |
| `warn`  | Oculta la mayor parte del ruido y solo muestra los eventos principales del run (inicio y fin de cada step), las advertencias de los adaptors o las instrucciones `console.warn()`. |
| `error` | Oculta todo excepto los eventos principales del run, los errores de los adaptors y las instrucciones `console.error()`.                                                            |

#### Mapeos {#mappings}

Si es posible, los logs deberían escribirse de forma que se vea exactamente qué
se mapeó entre el sistema de origen y el sistema de destino. En resumen, el log
puede tener una sección **"Datos recibidos del sistema de origen"** y una
sección **"Datos que se cargarán en el sistema de destino"**.

Estos logs pueden ayudar a los administradores a verificar que los datos de
origen y los datos que se cargan en el sistema de destino son correctos. Por
ejemplo, ver en los logs que un identificador único se está mapeando a
`undefined` en el sistema de destino puede ayudarte a entender la causa raíz de
un error. Este mensaje de error de Salesforce podría deberse a un mapeo a
`undefined`:

`METHOD_NOT_ALLOWED: HTTP Method 'PATCH' not allowed. Allowed are GET,HEAD,POST at HttpApi.getError`.

#### Mensajes de error {#error-messages}

El log del run también debería indicarnos si se lanzó un error y, según el
sistema de destino, cuál es el mensaje de error. A veces el mensaje de error es
muy específico, como:

`NOT_FOUND: Provided external ID field does not exist or is not accessible`

Este error de Salesforce suele indicar que `External ID` no está marcado en la
configuración del campo en Salesforce.

Otros mensajes de error no son tan claros y pueden llevar un tiempo de
depuración:

`TypeError [Error]: Cannot read property 'split' of undefined`

Los **`TypeErrors`** suelen indicar que el job recibió una parte de la entrada
que no esperaba, o que hay un error de sintaxis en el código del job. Significa
que hay que actualizar el job para que sepa manejar esa entrada. En este caso,
el job recibió una versión antigua del formulario de CommCare a la que le
faltaba un campo sobre el que el job llamaba a la función `split`. Para
averiguarlo, revisa en qué campos del job se llama a la función split y
comprueba que todos estén presentes en el mensaje.

Cuanto más pruebas y solucionas problemas con un sistema concreto, más te
familiarizas con sus mensajes de error.

:::tip

OpenFn describió varios de los mensajes de error más comunes de algunos de los
sistemas que integramos en el pasado. Explora estos sistemas y sus mensajes de
error [aquí](/adaptors).

:::

## Aprovechar la búsqueda y los filtros en OpenFn {#leveraging-search-and-filtering-in-openfn}

Aprovecha las distintas funcionalidades de búsqueda de OpenFn para encontrar los
runs que te ayuden a solucionar problemas. En la página History puedes buscar
por IDs de OpenFn, entradas o logs.

Mira este [video](https://youtu.be/XIUykmLCxwQ?si=hquc8rPTJrAZkbbD) para
aprender a usar la búsqueda.

## Suscríbete a las alertas por correo electrónico {#sign-up-for-email-alerts}

Puedes activar las notificaciones para recibir
[alertas por correo electrónico](/manage-projects/notifications.md) cuando un
workflow falle y suscribirte a resúmenes de la actividad del proyecto.

## Más {#more}

> ¿Qué pasa si los datos de mi encuesta de ODK tienen que vincularse con
> registros existentes en mi sistema Salesforce, pero alguien que responde
> ingresa o selecciona un `external ID` no válido?

Buena pregunta, y no te preocupes: pasa todo el tiempo. Suponiendo que ya
tomaste todas las medidas posibles para precargar los external IDs en tu
formulario de ODK o para usar IDs más a prueba de errores humanos (como códigos
de barras y huellas digitales), este es el flujo de trabajo:

1. Lee el correo electrónico e investiga el motivo del fallo.

2. El 99 % de los runs fallidos en OpenFn se deben a `value mismatches`. El `id`
   _recolectado_ en ODK no coincide con el `id` _esperado_ en Salesforce. Ahora
   tienes que elegir entre:

   A. Editar el `id` de origen en tu `receipt` y reintentar el attempt.

   B. Editar el `id` relacionado en tu sistema de destino y reintentar el
   attempt.

   C. Ignorar el attempt: estos datos de origen nunca llegarán a tu sistema de
   destino. (Se reportó que el publicador JSON de ODK Aggregate envía valores
   duplicados. Si eso pasa y tu run falla por "valores duplicados" en un campo
   único concreto, puedes ignorar el run en OpenFn sin problema).

Puedes editar los datos de tu sistema de destino desde la interfaz de ese
sistema. Muchas herramientas que actúan como `sources` (como ODK) no facilitan
editar y volver a enviar datos. Puedes usar OpenFn para editar los datos de
origen antes de reintentar el attempt.

### Mensajes de error comunes {#common-error-messages}

Estos son los mensajes de error más comunes, con sus explicaciones:

```sh
DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0
The insert is blocked because you are attempting to create a new record with a
unique field with the same value as an existing record.
```

```sh
Required value missing
```

```sh
ExternalId not found
```

```sh
{ INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields: Contact__c.
Please check the security settings of this field and verify that it is
read/write for your profile or permission set. }
```

Este último puede aparecer si una relación maestro-detalle en Salesforce no está
configurada como reparentable y el usuario intenta ejecutar un upsert.
