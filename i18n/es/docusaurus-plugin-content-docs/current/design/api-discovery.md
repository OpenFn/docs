---
sidebar_label: Descubrimiento de APIs
title: Descubrimiento de APIs para diseñar workflows
translation_source_hash: a378a6fb2934089eafffc5b52421baaedcd7dde2
translation_review_status: machine
---

# Descubre APIs para orientar el diseño de tu automatización de workflows {#discovering-apis-to-inform-your-workflow-automation-design}

Este artículo explica cómo analizar la documentación de una API y hacer un
borrador del diagrama técnico del workflow.

## ¿Qué es una API? {#what-is-an-api}

Las APIs les dicen a las aplicaciones cómo comunicarse. Una API es el
"mensajero" que:

1. Te dice cómo armar una solicitud,
2. Entrega tu solicitud al proveedor al que se la haces y, después,
3. Te devuelve la respuesta

|                 ![Workflow](/img/api_diagram.webp)                  |
| :-----------------------------------------------------------------: |
| _[Fuente](https://snipcart.com/blog/integrating-apis-introduction)_ |

OpenFn se conecta con las APIs mediante solicitudes HTTP enviadas por la web.
OpenFn puede automatizar cualquier tarea que permitan las APIs de las
aplicaciones con las que se integra (por ejemplo, si la API de una aplicación
permite enviar pagos, OpenFn puede automatizar el envío de pagos).

## Cómo analizar la documentación de una API {#how-to-analyze-api-documentation}

Al principio del proceso de diseño, deberías explorar la documentación de la API
del sistema de destino para ver las opciones de integración.

### Define las opciones de integración {#determine-integration-options}

Considera estas preguntas para definir tus opciones de integración, aunque no
haya una API disponible:

1. ¿Hay una API RESTful?
   - Si la hay, ¡OpenFn puede conectarse sin configuración adicional! La API
     REST es el estándar de referencia de la mayoría de las aplicaciones web
     modernas y suele admitir el formato de datos JSON.
2. ¿Hay un webhook?
   - La mayoría de las aplicaciones móviles de recolección de datos ofrecen esta
     función. Algunas la llaman "data forwarding", "web callback" o "HTTP push
     API".
   - Los webhooks envían mensajes o notificaciones automáticamente cuando pasa
     algo (por ejemplo, cuando se envía un formulario nuevo, avisan a servicios
     externos como OpenFn). Estas notificaciones basadas en eventos permiten la
     integración de datos en tiempo real o acciones automatizadas.
3. Si no, ¿qué otras opciones hay para importar y exportar datos de las
   aplicaciones de destino?
   - ¿Puedes conectarte directamente a una base de datos?
   - ¿Hay una forma de importar y exportar archivos? (JSON, CSV, XLS o XML)
   - ¿Hay una API heredada (por ejemplo, SOAP) con la que podamos comunicarnos
     mediante solicitudes HTTP?

:::tip

OpenFn puede conectar cualquier aplicación, aunque no tenga API. Consulta la
sección ["Adaptors"](/adaptors) para saber más.

:::

### Autenticación {#authentication}

La documentación de una API suele tener una sección dedicada a las opciones de
autenticación. Búscala para ver qué métodos de autenticación admite y si hará
falta configurar algo para crear un usuario o una credencial de API nueva.

Ten en cuenta que los métodos de autenticación con claves de API u OAuth suelen
ser más seguros que la autenticación básica (usuario y contraseña).

:::tip

Pide cuanto antes una credencial de API al administrador del sistema de la
aplicación con la que quieres integrarte. Así podrás probar la autenticación en
un entorno de desarrollo o de pruebas y comprobar que puedes conectarte.

:::

### Endpoints de la API {#api-endpoints}

Analiza la documentación para ver qué recursos o entidades y qué funciones
admite la API. Por ejemplo, si quieres registrar pacientes mediante la API,
busca referencias al endpoint "/patients" (o como se llame este recurso en tu
aplicación de destino).

Esta sección de la documentación incluye un resumen de los métodos de solicitud
HTTP (es decir, POST, GET, etc.) y los parámetros de solicitud que se admiten,
además de ejemplos de solicitudes HTTP que puedes enviar a la API.

**Los métodos de solicitud HTTP te indican qué operaciones admite la API.**

1. **C**reate (crear) → POST
2. **R**ead (leer) → GET
3. **U**pdate (actualizar) → PUT o PATCH
4. **D**elete (eliminar) → DELETE

Por ejemplo, si quieres consultar registros de pacientes de una aplicación,
fíjate si la documentación de la API incluye `GET /patients`.

### Límites {#limits}

Presta atención a los límites de la API. La documentación suele tener una
sección dedicada que describe si hay límites o consideraciones sobre las
solicitudes y su frecuencia, la concurrencia y la cantidad de registros. Conocer
estos límites desde el principio te ayuda a diseñar una integración que dé una
automatización escalable y de alto rendimiento.

## Diagrama técnico del workflow {#technical-workflow-diagramming}

El resultado del descubrimiento de APIs debería ser un diagrama "técnico" del
workflow. A diferencia del diagrama funcional que se hace durante el
["Descubrimiento"](/design/discovery.md), este refleja las especificaciones
técnicas para integrarse con las aplicaciones de destino. Esas especificaciones
incluyen los métodos u operaciones concretos (por ejemplo, GET o POST) y los
nombres de los recursos de destino en la base de datos o la API (es decir, los
endpoints de la API o las tablas de la base de datos concretos).

![Workflow](/img/api_example.webp)

**Al hacer el borrador de tus especificaciones técnicas, ten en cuenta lo
siguiente:**

1. **Planifica para los errores. Tus workflows van a fallar. Piensa qué pasa
   cuando fallen…**
   - ¿Hay que avisar a alguien?
   - ¿Cómo se puede volver a procesar el workflow de forma segura?
   - ¿Cómo te aseguras de que no se creen datos duplicados?
2. **Cuando sea posible, usa identificadores únicos para crear una
   automatización idempotente. Busca registros existentes en el sistema de
   destino con algún identificador único disponible:**
   - UUID de registros del sistema (por ejemplo, record_id: asjd2910-b8zy1s0a),
   - Códigos únicos (por ejemplo, HOUSEHOLD-10013) y
   - Combinaciones únicas de atributos (por ejemplo, familyName + phoneNumber +
     village + districtCode)
3. **Si el sistema de destino no tiene una operación "upsert" nativa ni
   comprueba duplicados antes de insertar, implementa un patrón upsert ("update
   or insert", actualizar o insertar) para…**
   - Comprobar si un registro existe con un identificador único…
   - Si existe, actualizar el registro.
   - Si no, insertar un registro nuevo.
4. **No olvides tener en cuenta los volúmenes de datos. Según tengas que manejar
   1, 10 000 o más de un millón de registros, puede que tengas que cambiar el
   enfoque del workflow.**
   - Estima el tamaño de los datos que vas a extraer
   - Ten en cuenta los límites de la API (registros por página, límites de
     frecuencia de solicitudes)
   - Considera las operaciones masivas y las solicitudes por lotes

Mira abajo el diagrama técnico del workflow para sincronizar envíos de
formularios de KoboToolbox con DHIS2. El diagrama funcional original está
[aquí](/design/discovery.md#workflow-requirements-gathering).

![Workflow](/img/technical_example.webp)
