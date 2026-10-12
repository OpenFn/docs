---
sidebar_label: Proceso de diseño
title: Proceso de diseño de soluciones con OpenFn
translation_source_hash: 9bc0fa895989e88eb1ec2cb7cf607ac5d52888db
translation_review_status: machine
---

:::warning En construcción

Esta página de la documentación está en construcción. Vuelve más adelante para
ver la documentación completa.

:::

# Primeros pasos con el diseño de automatización de workflows para proyectos de OpenFn

Resumen del proceso de diseño y de sus principales resultados y artefactos...

**El diseño de una integración empieza por los requisitos funcionales o de
negocio (no por los detalles técnicos).** Por eso, no necesitas ser consultor de
TI ni ingeniero de software para empezar a diseñar una solución de integración.
(Aunque contar con esos perfiles sin duda ayuda cuando llegamos a las
especificaciones técnicas... pero de eso hablaremos más adelante).

Entender con claridad y _documentar_ los procesos de negocio, los requisitos
funcionales y las personas que interactúan con la integración que quieres es el
primer paso fundamental del diseño de una integración. Mientras planificas tu
próximo proyecto de integración, empieza a preparar la siguiente documentación
para poner en marcha la solución.

## 1. Recoge los requisitos como historias de usuario {#1-capture-requirements-as-user-stories}

Documentar _por qué_ se necesita la integración y cuáles son los requisitos que
la impulsan es importante para identificar las necesidades prioritarias y para
que todo el mundo tenga las mismas expectativas sobre el proyecto.

Las _historias de usuario_ son descripciones breves y sencillas de un requisito,
contadas desde el punto de vista de la persona que quiere la nueva
funcionalidad.

> Como `<type of user>`, quiero `<some functionality>` para
> `<desired business outcome>`.

Una buena historia de usuario recoge 3 partes:

1. _Quién_: ¿quién usa la solución?
2. _Qué_: ¿qué espera conseguir con la solución?
3. _Por qué_: ¿por qué es importante este deseo? ¿Qué implicaciones tiene para
   el negocio?

Si recoges estos 3 elementos, las historias de usuario pueden ser una forma
eficaz de detallar los requisitos de una integración y de abrir conversaciones
en tu organización sobre qué requisitos son prioritarios.

### Ejemplos de historias de usuario: {#example-user-stories}

- **Derivación de casos:** como trabajador social, quiero enviar automáticamente
  solicitudes de derivación a mi agencia asociada, que usa otro sistema de
  gestión de casos, para compartir la información del caso de forma segura y
  avisarles rápido cuando se necesiten sus servicios en una situación de crisis.
- **EMR - HIS:** como responsable de una clínica, me gustaría integrar los datos
  de pacientes del sistema de historia clínica electrónica de la clínica del
  distrito con el sistema nacional de información de salud DHIS2, para reportar
  de forma segura y automática los resultados de salud de los indicadores clave
  de mi distrito.
- **Kobo Toolbox - base de datos MSSQL:** como responsable de monitoreo y
  evaluación, quiero supervisar en tiempo real las respuestas de las encuestas
  de Kobo Toolbox en una base de datos central, para entender mejor las
  actividades de recolección de datos y el desempeño del programa en los sitios
  de mis socios de investigación.

## 2. Haz un diagrama del proceso de negocio {#2-diagram-the-business-process}

Una vez identificadas las historias de usuario, empieza a documentar los
procesos funcionales que ya existen (o que habrá que implementar) para cumplir
los requisitos. Pueden ser procesos automatizados o manuales, llevados a cabo
por personas. Este es el paso previo a trazar el flujo de datos (que detalla los
pasos técnicos de cómo se harán las conexiones y cómo se intercambiarán los
datos entre sistemas). De nuevo, trazar los procesos es _análisis de negocio_,
no un ejercicio técnico.

Por ejemplo, si quieres intercambiar información entre tu organización y otra...
¿cómo funcionaría ese intercambio desde un punto de vista funcional? ¿_Qué_
información se intercambiará? ¿Con _quién_ (entre qué sistemas o usuarios)?
¿_Cuándo_ se intercambiará la información? ¿Y qué pasos, humanos o
automatizados, deberían facilitar y desencadenar este intercambio? Estas
preguntas sobre el proceso de negocio se tratan con más detalle en la página
[So, what is an integration?](/documentation/tutorials/tutorial/).

:::tip

Recoge el proceso actual y el deseado Documenta los procesos de negocio
_actuales y deseados_ para determinar cómo debe intercambiarse la información
entre tu organización, sistema o usuarios y los demás, y para asegurarte de que
todos los socios comparten las mismas expectativas y supuestos.

:::

### Usa BPMN para documentar de forma estandarizada {#use-bpmn-for-standardized-documentation}

Cuando documentes procedimientos de negocio internos, considera usar el estándar
Business Process Model and Notation (BPMN) para documentar gráficamente los
procesos de negocio clave. BPMN (más información sobre el estándar
[BPMN 2.0](https://www.omg.org/spec/BPMN/2.0/)) usa símbolos parecidos a los de
un diagrama de flujo y una notación precisa que se puede traducir a componentes
de procesos de software.

Estos recursos te ayudan a aprender y a crear tus propios diagramas BPMN:

- `BPMN.io`, modelador de código abierto: https://bpmn.io/
- `Camunda BPMN Tool` incluye una herramienta gratuita y un tutorial:
  https://camunda.com/bpmn/
- `LucidChart` ofrece una interfaz de diagramas muy fácil de usar:
  https://www.lucidchart.com/pages/bpmn

¿Buscas un curso rápido? Este video da un resumen rápido de BPMN y de cómo
usarlo: https://www.youtube.com/watch?v=BwkNceoybvA

### Ejemplos de diagramas BPMN de OpenFn {#openfn-examples-of-bpmn-diagrams}

Mira el siguiente ejemplo de diagrama BPMN para esta historia de usuario:

> Como responsable de programa, quiero extraer los datos de los beneficiarios
> ("tracked entity instances") del sistema DHIS2 de mi país, para inscribirlos
> como contactos en mi campaña de SMS configurada en RapidPro y enviarles
> alertas automáticas y novedades del programa.

<img src="/img/sample-bpmn.webp" url />

## 3. Mapea los elementos de datos que se van a intercambiar {#3-map-data-elements-to-be-exchanged}

Una vez documentados los procesos de negocio, empieza a documentar los elementos
de datos concretos que se van a intercambiar. Este ejercicio exige mucha
precisión para detallar cada uno de los "campos" o "atributos" que se
intercambiarán.

El resultado de este ejercicio es una `Data Element Mapping Specification`, que
servirá (1) como documentación de los elementos de datos concretos que se acordó
intercambiar y (2) como guía para traducir el significado entre socios y
sistemas (por ejemplo, `client` en un sistema puede significar `patient` en
otro).

Si tu organización ya tiene un acuerdo de gestión o de intercambio de datos,
puede ser el punto de partida perfecto para identificar los datos concretos que
se van a intercambiar.

### Plantilla de especificación de mapeo {#mapping-specification-template}

Colaborar con los socios implementadores en las especificaciones de mapeo es un
ejercicio importante para documentar requisitos muy concretos y llegar a un
consenso sobre qué datos exactamente se intercambiarán y cómo.

:::tip Plantilla para empezar

[Usa esta plantilla](https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit?usp=sharing)
para redactar tu propia especificación de mapeo de elementos de datos.

:::

Esta plantilla incluye:

1. Detalles de los metadatos de origen, como el nombre del campo en la API, el
   tipo de dato, valores de ejemplo y comentarios:
   ![imagen](https://user-images.githubusercontent.com/80456839/130796010-fe900c03-1bff-40c0-9263-c29e22d9191f.png)
2. Detalles parecidos de los metadatos de destino:
   ![imagen](https://user-images.githubusercontent.com/80456839/130796087-67b0359d-207a-4169-aa88-6609572b2561.png)
3. Notas sobre las transformaciones y la limpieza de datos necesarias, y
   comentarios para hacer seguimiento de los cambios y de las preguntas para el
   equipo técnico:

   ![imagen](https://user-images.githubusercontent.com/80456839/130796170-2e29a997-9b41-44f7-ac60-79375d096cc9.png)

### Para crear una especificación de mapeo completa, tendrás que... {#to-build-a-complete-mapping-specification-youll-need-to}

1. Definir los elementos de datos que intercambiarán los sistemas conectados (es
   posible que tengas que exportar los metadatos del sistema de destino para
   identificar los nombres exactos)
2. Determinar qué elementos de datos pertenecen al origen de datos y cuáles al
   sistema de destino
3. Acordar cómo deben corresponderse los elementos de datos entre los sistemas
4. Analizar la estructura y la calidad de los datos para valorar si habrá que
   transformar, limpiar o volver a etiquetar los valores para poder mapearlos

Este mapeo servirá como plano para la configuración técnica de la integración, y
será un artefacto importante del acuerdo de intercambio de datos entre los
socios.

### Consejos para redactar especificaciones de mapeo {#tips-for-drafting-mapping-specifications}

- **Versiona los mapeos** para hacer seguimiento de las solicitudes de cambio a
  lo largo del tiempo
- **Códigos de colores:** resalta con un color los campos que necesitan más
  discusión y con otro los campos recién añadidos
- Usa Google Sheets o los comentarios de un documento compartido, y el correo
  electrónico, para avisar a las personas adecuadas cuando haya cambios en los
  mapeos
- Incluye una **leyenda o un README** que explique cómo usar la plantilla de
  mapeo
- **Identificadores únicos:** dedica tiempo a evaluar los esquemas de
  identificadores únicos disponibles y las opciones que ya puedan tener
  implementadas los sistemas de información relacionados
- Cuando mapees preguntas de opción múltiple, ten en cuenta cómo deben
  corresponderse las opciones de respuesta con el sistema de origen o de
  destino.
- Consulta los consejos de mapeo para cada sistema en la sección `Apps` del
  sitio de documentación (mira la barra lateral).

## Próximos pasos {#next-steps}

Cuando tengas definidas tus (1) `user stories`, (2) `business process diagrams`
y (3) `data element specifications`, habrás preparado un conjunto de
documentación de diseño funcional que guiará el diseño técnico de tu solución de
integración y dejará constancia de las decisiones de negocio y de los acuerdos
de los socios implementadores.

Comparte esta documentación con el equipo técnico de implementación, o consulta
la sección de documentación [Build](/documentation/build/workflows) para ver
cómo implementar estas especificaciones de diseño con OpenFn.
