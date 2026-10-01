---
sidebar_label: Resumen del proceso de diseño
title: Resumen del proceso de diseño
translation_source_hash: 089b874cb2e0c86bf464a47396fff6ee07e7cb54
translation_review_status: machine
---

Este artículo describe a grandes rasgos los pasos para diseñar workflows
automatizados, a partir del proceso de implementación estándar del equipo
principal de OpenFn.

Por lo general, el diseño se hace fuera de OpenFn, en conversación y
colaboración con las personas involucradas del lado del negocio o del programa y
del lado técnico. Una vez cerrado el diseño, la configuración, las pruebas, el
monitoreo y la gestión del workflow se hacen en OpenFn.

## Términos clave {#key-terms}

Antes de empezar, asegúrate de entender bien estos términos clave, que usaremos
en toda esta documentación:

### Workflow (flujo de trabajo) {#workflow}

El conjunto de instrucciones que determinan cómo resolver un problema o realizar
una tarea. A menudo se divide en tareas más pequeñas e independientes.

![Workflow](/img/workflow.webp)

### Automatización de workflows {#workflow-automation}

El uso de software para realizar estas tareas de forma autónoma, de acuerdo con
reglas de negocio predefinidas y sin necesidad de intervención humana.

![Automatización de workflows](/img/workflow_automation.webp)

### Integración de datos {#data-integration}

El proceso de combinar datos de distintas fuentes en una vista centralizada. La
integración de datos es una forma de lograr la automatización de workflows. Sus
tareas pueden simplificarse, automatizarse y gestionarse con una herramienta de
automatización de workflows.

![Integración de datos](/img/data_integration.webp)

## Introducción {#introduction}

El diseño de la automatización de workflows tiene 5 pasos principales, que se
explican en detalle en otros artículos:

1. [Descubrimiento y alcance](/design/discovery.md)
2. [Diseño del workflow](/design/design-workflow.md)
3. [Descubrimiento de APIs y diseño técnico](/design/api-discovery.md)
4. [Especificaciones de mapeo de elementos de datos](/design/mapping-specs.md)
5. [Especificaciones del workflow](/design/workflow-specs.md)

### Caso de uso de ejemplo {#example-use-case}

En toda la documentación de diseño usaremos como referencia este escenario
ficticio de recolección de datos y automatización de workflows:

_PatientCare es una ONG de salud con una red de trabajadores comunitarios de
salud que atienden a pacientes en zonas remotas de Guinea. Los trabajadores de
PatientCare recolectan datos de pacientes en
[KoboToolbox](https://www.kobotoolbox.org/). El gobierno de Guinea usa
[DHIS2](http://dhis2.org) como su sistema nacional de información de salud (HIS)
y exige que PatientCare registre todos los datos de pacientes en el HIS._
