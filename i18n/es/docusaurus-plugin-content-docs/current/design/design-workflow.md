---
sidebar_label: Diseño del workflow
title: Diseña tu primer workflow para automatizar
translation_source_hash: cac640729c28a69e35500d79306c90cf3bcec87a
translation_review_status: machine
---

# Diseña tu primer workflow de OpenFn {#designing-your-first-openfn-workflow}

Este artículo explica cómo usar la información reunida durante el descubrimiento
para definir los pasos concretos del workflow, diseñarlo y hacer un borrador de
diagrama que documente los pasos del proceso que quieres automatizar.

## ¿Por qué hacer un diagrama del workflow? {#why-diagram-your-workflow}

Al recopilar los requisitos, puedes esbozar el nuevo workflow con una lista de
pasos o partir de la documentación de un proceso o protocolo de negocio que ya
exista. **Por ejemplo:**

1. Un paciente nuevo visita la clínica
2. Un trabajador registra al paciente en la aplicación móvil (KoboToolbox)
3. Todos los días, se sincronizan los pacientes nuevos con el sistema nacional
   de información de salud (DHIS2)

Después, considera representar visualmente la estructura y el flujo del workflow
para que las distintas personas involucradas lo entiendan con más facilidad. Un
diagrama ayuda a reflejar:

1. El flujo o la secuencia correcta de pasos,
2. Las dependencias,
3. Las redundancias y
4. Quién es responsable de cada paso

## Pasos principales para hacer el diagrama de un workflow {#main-steps-to-workflow-diagramming}

1. Haz el diagrama de los pasos humanos o manuales del proceso de este workflow,
2. Identifica oportunidades de automatización,
3. Detalla los pasos funcionales del proceso de automatización ideal,
4. Comparte el diagrama con todas las personas involucradas para la aprobación
   final y actualízalo cuando haga falta

El resultado de este ejercicio es una documentación clara de cómo se ejecutará
un proceso de negocio: con automatización, con personas o, a menudo, con una
combinación de ambas.

## Usa estándares globales en tus diagramas {#diagram-using-global-standards}

Al hacer diagramas, considera usar estándares globales como BPMN (modelo y
notación de procesos de negocio), para que sean coherentes y los entiendan
personas de fuera. BPMN (más información sobre el estándar
[BPMN 2.0](https://www.omg.org/spec/BPMN/2.0/)) tiene símbolos parecidos a los
de un diagrama de flujo y una notación precisa que se puede traducir a
componentes de procesos de software.

Estos recursos te ayudarán a aprender y a crear tus propios diagramas BPMN:

- `BPMN.io`, modelador de código abierto: https://bpmn.io/
- `Camunda BPMN Tool` incluye una herramienta gratuita y un tutorial:
  https://camunda.com/bpmn/
- `LucidChart` ofrece una interfaz para hacer diagramas muy fácil de usar:
  https://www.lucidchart.com/pages/bpmn

¿Buscas un curso rápido? Este video da un resumen rápido de BPMN y de cómo
usarlo: https://www.youtube.com/watch?v=BwkNceoybvA

### Ejemplos de diagramas BPMN de OpenFn {#openfn-examples-of-bpmn-diagrams}

Mira el diagrama BPMN de ejemplo de abajo para esta historia de usuario:

> Como gerente de programa, quiero extraer los datos de los beneficiarios
> ("tracked entity instances") del sistema DHIS2 de mi país para inscribirlos
> como contactos en mi campaña de SMS configurada en RapidPro y enviarles
> alertas automáticas y novedades del programa.

<img src="/img/sample-bpmn.webp" url />
