---
sidebar_label: Estándares
title: Estándares y OpenFn
translation_source_hash: 4268e67655414b5830b8194dd7e98e23d283a613
translation_review_status: machine
---

OpenFn sigue estándares globales para el software de código abierto y para las
soluciones de motor de workflows. Sigue leyendo para saber cómo cumple OpenFn
con estándares concretos.

## Bien Público Digital {#digital-public-good}

OpenFn está reconocido por la
[Digital Public Goods Alliance](https://digitalpublicgoods.net/) como Bien
Público Digital, o "DPG" (por sus siglas en inglés).

:::info Definición de Bien Público Digital

Software de código abierto, datos abiertos, modelos de IA abiertos, estándares
abiertos y contenido abierto que respetan la privacidad y otras buenas prácticas
aplicables, no causan daño por diseño y son muy relevantes para alcanzar los
Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030 de las Naciones
Unidas

:::

Puedes leer más sobre el estándar DPG
[aquí](https://digitalpublicgoods.net/standard/).

## Bien Global para la Salud {#global-good-for-health}

OpenFn es una de las 36 aplicaciones de software reconocidas como
[Global Good for Health](https://wiki.digitalsquare.io/index.php/What_are_Global_Goods#:~:text=Digital%20Square%20Global%20Goods%20are,scale%2C%20are%20used%20across%20multiple)
de Digital Square.

:::info Definición de Global Goods for Health

Un bien global de software de salud digital maduro es un software libre y de
código abierto (FOSS), respaldado por una comunidad sólida, con una estructura
de gobernanza clara, financiado por varias fuentes, desplegado a una escala
considerable, usado en varios países, con eficacia demostrada, diseñado para ser
interoperable y que es una aplicación estándar emergente.

:::

Puedes leer más sobre Global Goods for Health
[aquí](https://digitalsquare.org/digital-health-global-goods).

## Arquitectura estándar de OpenHIE {#openhie-standard-architecture}

OpenFn se considera una tecnología de referencia de OpenHIE y cumple con la
arquitectura estándar de OpenHIE para implementaciones de salud digital.

_Esta sección da por hecho que conoces la especificación de OpenHIE, un marco de
referencia que hace posible compartir datos de salud entre sistemas de
información mediante un intercambio de información de salud ("HIE", por sus
siglas en inglés). Para saber más, consulta la
[documentación de OpenHIE](https://guides.ohie.org/arch-spec/) y su
[comunidad](https://ohie.org/)._

### OpenFn y OpenHIE {#openfn-and-openhie}

La plataforma OpenFn v2 ([OpenFn/lightning](https://github.com/OpenFn/)) es un
**_motor de workflows_** compatible con OpenHIE que se usa para (1) automatizar
procesos de negocio complejos que abarcan varios sistemas digitales (incluidos
los componentes de OpenHIE _y_ los sistemas del punto de atención) y (2)
gestionar el mapeo y la transformación de datos.

Si tu organización está implementando la arquitectura estándar de OpenHIE,
OpenFn ofrece un motor de workflows que se comunica con tu capa de
interoperabilidad ("IOL", por sus siglas en inglés). OpenFn puede implementarse
para automatizar:

- Workflows entre sistemas del punto de servicio;
- Workflows entre los componentes centrales del HIE;
- Pasos de transformación de datos necesarios para preparar los datos antes de
  enviarlos a otros componentes del HIE a través de la IOL. (Ten en cuenta que
  los workflows de OpenFn son una alternativa, accesible y gestionable desde una
  interfaz web, a los "mediators" de OpenHIM).

OpenFn cumple los
[requisitos funcionales](https://guides.ohie.org/arch-spec/openhie-component-specifications-1/openhie-interoperability-layer-iol#openhie-iol-functional-requirements)
de la IOL de OpenHIE, por lo que algunas organizaciones también usan OpenFn como
su capa de interoperabilidad central. Dicho esto, ten en cuenta que OpenFn
todavía no puede usarse como una **_capa de interoperabilidad_** totalmente
compatible con OpenHIE, porque no usa el perfil IHE ATNA (ver el
[requisito IOL-WF1](https://guides.ohie.org/arch-spec/openhie-component-specifications-1/openhie-interoperability-layer-iol#openhie-iol-workflow-requirements)).

![Arquitectura de OpenHIE](/img/openhie_architecture.webp)

_Para ver un resumen de OpenFn Lightning y de cómo encaja en OpenHIE, mira
nuestra
[presentación para el OpenHIE showcase](https://www.youtube.com/watch?v=PTRRZBYtqyc)_
o sigue leyendo para tener más contexto.

### Más sobre cómo OpenFn cumple la especificación de OpenHIE {#more-on-how-openfn-supports-the-openhie-spec}

#### La capa de interoperabilidad (IOL): {#the-interoperability-layer-iol}

- Se sitúa entre los componentes de OpenHIE y los sistemas del punto de atención
- Sirve como punto de entrada único y pasarela segura a OpenHIE
- Cumple los requisitos de enrutamiento y auditoría de transacciones

_OpenFn Lightning cumple los requisitos funcionales de la IOL, pero no es
totalmente compatible con OpenHIE, ya que todavía no usa el perfil IHE ATNA_

#### El motor de workflows: {#the-workflow-engine}

- Ofrece interfaces listas para usar para conectarse a los sistemas del punto de
  atención
- Gestiona el mapeo y la transformación de datos complejos para darles el
  formato que necesita el sistema de destino (p. ej., mapear datos de un sistema
  del punto de atención al modelo de datos de un componente de OpenHIE, o mapear
  datos no FHIR a perfiles FHIR, o ambas cosas)
- Envía los datos a la capa de interoperabilidad
- Puede seguir el estado a largo plazo de la atención de un paciente y realizar
  acciones según ese contexto (como enviar alertas) para mejorar la atención al
  paciente.

_OpenFn Lightning es un motor de workflows compatible con OpenHIE_

### Caso práctico: OpenFn como mediator de OpenHIM {#case-study-openfn-as-an-openhim-mediator}

En Nigeria, como parte del
[proyecto ALMANACH](https://articles.nigeriahealthwatch.com/almanach-revolutionising-the-management-of-childhood-illnesses-in-adamawa-state/),
SwissTPH usó OpenFn para automatizar el mapeo y el intercambio de datos entre
CommCare y DHIS2 para la vigilancia de enfermedades. El workflow funcionó
durante varios años en la nube de OpenFn y, como preparación para el traspaso y
la ampliación de escala, el equipo de SwissTPH preparó después una integración
profunda con OpenHIM para un despliegue local.

SwissTPH tomó su workflow de OpenFn existente y lo incorporó a su instancia de
OpenHIM como "mediator", de modo que todos los datos pasaran por esta IOL,
aprovechando a la vez el adaptor de DHIS2 de OpenFn, listo para usar, y las
plantillas de workflow reutilizables para desarrollar rápidamente una
automatización que da formato a los datos recibidos de CommCare y los mapea al
modelo de datos de DHIS2.

![SwissTPH](/img/swisstph.webp)

## GovStack

OpenFn cumple la
[especificación estándar de GovStack](https://govstack.gitbook.io/bb-workflow/2-description)
para motores de workflows.

## Principios para el Desarrollo Digital {#principles-for-digital-development}

OpenFn se diseñó para el sector social y ha dado prioridad activamente a los
[Principios para el Desarrollo Digital](https://digitalprinciples.org/) desde
sus inicios.

Las soluciones de OpenFn son:

- **interoperables** (conectan cualquier aplicación);
- **reutilizables** (usa configuraciones de OpenFn existentes como plantillas, o
  comparte, copia y modifica fácilmente tus propias configuraciones; ver
  docs.openfn.org/library);
- **sostenibles** (opciones de implementación flexibles, sin dependencia de un
  proveedor);
- **escalables** (OpenFn usa tecnología de nivel empresarial para gestionar
  grandes volúmenes de datos y ofrece varias opciones de despliegue para
  garantizar la plena propiedad de la solución en cualquier servidor);
- **promueven los estándares abiertos y el acceso abierto** (mediante nuestro
  software de código abierto, la documentación y funciones que ayudan a los
  usuarios a implementar estándares abiertos en sus soluciones de intercambio de
  información), y
- **abordan la privacidad y la seguridad**.

## FHIR para el intercambio de datos de salud {#fhir-for-health-data-exchange}

[FHIR](https://www.hl7.org/fhir/) (se pronuncia "fire", fuego en inglés 🔥) es
un estándar para el intercambio de datos de salud, publicado por HL7®.

Las organizaciones de salud usan OpenFn para conectar varios sistemas,
compatibles con FHIR o no, de forma segura, estable y escalable. OpenFn puede
facilitar 2 categorías de workflows FHIR:

### 1. Intercambio de datos de no FHIR a FHIR {#1-non-fhir-to-fhir-data-exchange}

Los usuarios de OpenFn pueden configurar workflows para convertir datos no FHIR
a formatos compatibles con FHIR y luego enviarlos a sistemas FHIR.

Por ejemplo, obtener datos de la aplicación móvil CommCare, convertirlos a FHIR
y enviarlos al almacén FHIR del sistema nacional de salud.
![Workflow de no FHIR a FHIR](/img/workflow_nonfhir_fhir.webp)

### 2. Intercambio de datos de FHIR a FHIR {#2-fhir-to-fhir-data-exchange}

Los usuarios de OpenFn también pueden configurar Workflows para automatizar el
intercambio y el enrutamiento de datos _ya_ compatibles con FHIR hacia otros
sistemas compatibles con FHIR.

Por ejemplo, obtener datos de la API FHIR de OpenMRS y reenviarlos al almacén
FHIR del sistema nacional de salud (sin necesidad de transformar los datos).

![Workflow de FHIR a FHIR](/img/workflow_fhir_fhir.webp)

## Adaptors de FHIR {#fhir-adaptors}

Los [adaptors](/adaptors) de OpenFn agilizan la configuración de integraciones
con las aplicaciones de destino (¡incluidos los endpoints FHIR!). El equipo
principal está trabajando en un conjunto de adaptors específicos de FHIR para
hacer posible la interoperabilidad con sistemas FHIR.

El [adaptor fhir-4](/adaptors/fhir-4) facilita el acceso y la modificación de
datos alojados en cualquier servidor compatible con
[FHIR r4](https://www.hl7.org/fhir/R4/). También ofrece asistencia de código
completa a los desarrolladores mientras crean definiciones de recursos
concretas, lo que simplifica la introducción de datos y la lógica de mapeo.

También ofrecemos un adaptor genérico, [fhir](/adaptors/fhir), compatible con
todas las versiones de FHIR.

:::info Compatibilidad con FHIR 4

El adaptor `fhir-4` es nuevo en OpenFn desde marzo de 2025. Ofrece un nivel de
compatibilidad más completo que el adaptor genérico [fhir](/adaptors/fhir). La
compatibilidad con otras versiones de FHIR llegará pronto

:::

Consulta la
[wiki de Adaptors](https://github.com/OpenFn/adaptors/wiki/Generating-Fhir-Adaptors)
para aprender a crear tu propio adaptor de FHIR específico para la guía de
implementación de FHIR que uses

## Otros estándares de datos {#other-data-standards}

Los Workflows de OpenFn pueden automatizar reglas de transformación, limpieza y
formato de datos para garantizar el cumplimiento de los estándares específicos
de _tu_ organización.

Pregunta en la [comunidad](https://community.openfn.org) para explorar cómo
puede usarse OpenFn para ayudar a automatizar la aplicación y el cumplimiento de
otros estándares de datos.
