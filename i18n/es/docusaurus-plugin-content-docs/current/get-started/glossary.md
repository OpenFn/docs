---
sidebar_label: Glosario
title: Glosario de integración de datos
translation_source_hash: f66e77d397fd4d1aed0951541fa215164d4569ad
translation_review_status: machine
---

Este glosario recoge algunos de los conceptos y términos fundamentales que se
usan al hablar de integración de datos y de automatización de flujos de trabajo.

Esto no significa que no puedas usar OpenFn si no sabes qué significa ninguna de
estas palabras antes de leer nuestra documentación, pero sí que algunas de las
tareas más importantes del recorrido con OpenFn darán por hecho que entiendes,
al menos a grandes rasgos, cada uno de estos términos.

Este glosario pretende ser independiente de OpenFn. El resto de la documentación
y la [página de conceptos clave](/documentation/get-started/terminology) te
ayudan a hacerte una idea de las partes de OpenFn, de cómo las llamamos y por
qué, pero este glosario está pensado como requisito previo a todo eso, para
ayudar a quienes no tienen experiencia en este ámbito.

:::tip ¿Falta algo?

Si te has encontrado con una palabra, una expresión o un concepto que crees que
falta en esta página, abre un issue en
[OpenFn/docs](https://github.com/OpenFn/docs), sugiere un cambio en
[esta página](https://github.com/OpenFn/docs/blob/main/docs/get-started/glossary.md)
o pregunta en la [comunidad](https://community.openfn.org)

:::

## API

API es la abreviatura de "application programming interface" (interfaz de
programación de aplicaciones), y es la parte de un software (la
<b>aplicación</b>) que ha decidido hacerse visible (la <b>interfaz</b>) a
usuarios externos a la propia aplicación. Y lo hace de forma
<b>programática</b>, es decir, de una forma que permite a los desarrolladores de
otras aplicaciones o sistemas de datos usarla siempre de la misma manera.

## Protocolo de API {#api-protocol}

No hay una regla fija sobre cómo se desarrolla una API, pero con el tiempo han
surgido estándares que facilitan a un usuario nuevo interactuar con la API de la
plataforma X, procurando que la mayoría de las aplicaciones usen uno de unos
pocos formatos. Eso es un protocolo de API. Algunos de los nombres más conocidos
son REST, SOAP, JSON y GraphQL. En lugar de reinventar la rueda,
[aquí tienes una buena introducción a en qué se diferencian los protocolos, sus formatos de datos y por qué todo eso importa.](https://frontend-digest.com/beginners-guide-to-apis-protocols-and-data-formats-f80cf7f30425)

## Base de datos {#database}

Casi cualquier colección organizada de datos puede llamarse base de datos. Si
tiene una estructura con la que hacer referencia a todo lo que almacena, y eso
que almacena son datos, entonces es una base de datos.

## Integración de datos {#data-integration}

El proceso de combinar datos de distintas fuentes en una vista centralizada. La
integración de datos es una forma de lograr la automatización de flujos de
trabajo. Sus tareas pueden simplificarse, automatizarse y gestionarse con una
herramienta de automatización de flujos de trabajo.

## Fuente de datos {#data-source}

Una fuente de datos es una aplicación, una base de datos o una tabla que
proporciona datos a otra plataforma. Nada es <i>siempre</i> una fuente de datos.
Por ejemplo, Google Sheets puede ser una fuente de datos, pero también puede
obtener datos de otras fuentes (cargas de archivos CSV individuales o la
introducción manual de datos por parte de los usuarios). Solo la llamamos fuente
cuando está haciendo el trabajo de proporcionar datos a otro lugar. Las fuentes
de datos son el punto de partida, en el tiempo, de cualquier integración.

## Sistema de datos {#data-system}

A veces se confunde la diferencia entre una base de datos, una fuente de datos,
una aplicación y un sistema de datos. Un <i>sistema</i> de datos es un conjunto
más complejo de esas otras cosas, normalmente uno que permite a un usuario
interactuar más fácilmente con todos los datos a los que debería tener acceso.
El sistema de datos suele servir como punto de entrada a la multitud de bases de
datos, aplicaciones, tablas, etc., que, si no, el usuario tendría que buscar en
12 sitios distintos.

## Cifrado {#encryption}

Hoy en día, la seguridad lo es todo. El cifrado es el proceso de tomar algo que
cualquiera puede leer y hacer que solo puedan leerlo las personas que queremos.
OpenFn garantiza que tus datos estén cifrados en cada paso mientras están en
nuestra plataforma.
[Para saber más sobre los distintos tipos de cifrado, puedes consultar aquí.](https://ssd.eff.org/en/node/36)

## Sistema de archivos {#file-system}

Un sistema de archivos es a los archivos lo que un sistema de datos es a los
datos. Estructura tus archivos de forma que te resulte fácil recuperarlos de
manera estandarizada (piensa en el sistema de archivos de tu ordenador de casa,
con sus rutas de archivo). Los sistemas de archivos también pueden existir en
otros contextos, y a veces necesitas acceder a ellos para recuperar un archivo
(un documento de Word, un CSV, un archivo de texto plano, etc., pueden ser
relevantes según tu caso de uso). La única diferencia real entre los sistemas de
archivos y los sistemas de datos o las bases de datos es el tipo de información
que se almacena: datos frente a archivos.

## ETL

ETL son las siglas en inglés de "extract, transform, and load" (extraer,
transformar y cargar). A menudo se consideran las tres partes que componen una
integración de datos. Primero, extraemos (enviamos o recuperamos datos de una
fuente de datos). Después, transformamos (hacemos los cambios necesarios en los
datos para que sean aceptables para el sistema o la aplicación de destino). Por
último, cargamos (los enviamos al destino).

## Plataforma de integración {#integration-platform}

Una plataforma de integración (p. ej., OpenFn) es una aplicación (o un conjunto
de aplicaciones) que ayuda a las organizaciones a configurar, ejecutar y
mantener o gestionar las integraciones entre todos sus sistemas.

### iPaaS

Puede que también veas la sigla "iPaaS". Significa "integration platform as a
service" (plataforma de integración como servicio) y es un tipo de "software
como servicio" (o "SaaS"). El SaaS es un modelo de compra de software en el que
el software se paga solo a medida que se usa (a menudo mes a mes), en lugar de
comprarse por adelantado o regalarse.

## Metadatos {#metadata}

Son datos que nos informan sobre nuestros datos. En una tabla, por ejemplo, son
los nombres de las columnas, el número de filas, etc. Los metadatos suelen salir
en las conversaciones sobre privacidad; p. ej., los reguladores pueden querer
asegurarse de que _solo los metadatos_ pasen del Ministerio A al Ministerio B, y
no la información personal identificable (PII) de las propias personas.

## Push, pull y streaming {#push-pull-and-streaming}

El <i>push</i> (envío) se produce cuando una acción desencadenante en la fuente
de datos hace que esta envíe datos al destino. El <i>pull</i> (recuperación) es
lo contrario: el sistema de destino solicita los datos a la fuente a partir de
alguna acción desencadenante, en lugar de esperar a que la fuente los envíe por
su cuenta. El <i>streaming</i> es algo distinto: se da cuando una fuente de
datos envía datos a un sistema de destino de forma prácticamente
<i>constante</i>.

## Webhook

Un [webhook](/documentation/build/triggers#webhook-event-triggers) (también
llamado web callback o API HTTP push, ¡gracias,
[SendGrid](https://sendgrid.com/blog/whats-webhook/)!) es una función de una
aplicación que permite hacer <i>push</i>. Suele configurarse para avisar a una
URL externa cuando ocurre un evento. Un administrador de sistemas podría crear
un "webhook" que avise a una plataforma de integración cada vez que ocurra algún
evento, para que la iPaaS pueda empezar a ejecutar un workflow complejo.

## Datos estructurados y no estructurados {#structured-and-unstructured-data}

Los datos estructurados son datos que tienen metadatos. Los datos no
estructurados tienen muy pocos metadatos (aunque probablemente sigan teniendo
cosas como la fecha de creación, de actualización, etc.). Sin metadatos sobre su
formato, es más difícil trabajar con los datos no estructurados mediante
programación. Necesitamos otro tipo de reglas para hacer bien un ETL sobre datos
no estructurados, mientras que los datos estructurados son un punto de partida
más fácil, porque sabemos qué esperar de una columna con nombre, tipo de dato,
tamaño de campo, etc.

## Flujo de trabajo {#workflow}

El conjunto de instrucciones que determinan cómo resolver un problema o realizar
una tarea. A menudo se divide en tareas más pequeñas e independientes.

## Automatización de flujos de trabajo {#workflow-automation}

El uso de software para realizar tareas o un proceso de negocio de forma
autónoma, de acuerdo con reglas de negocio predefinidas y sin necesidad de
intervención humana.

## Writeback

Se refiere a que un sistema de destino haga un cambio en una fuente de datos.
Cuando mi aplicación de destino recibe información de una fuente de datos y
quiere hacer algo en la fuente como respuesta, eso es writeback.
