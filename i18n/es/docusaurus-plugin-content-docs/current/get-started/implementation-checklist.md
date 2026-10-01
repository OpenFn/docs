---
sidebar_label: Lista de comprobación de implementación
title:
  Lista de comprobación de implementación para planificar tu próximo proyecto de
  integración
translation_source_hash: 2776efe8363e6ba09f194f27ccf75b6531694f33
translation_review_status: machine
---

# Lista de comprobación de implementación {#implementation-checklist}

Esta
[lista de comprobación de implementación](https://docs.google.com/spreadsheets/d/1_XY0nx0OLNUsogrIHnRaSTyZ-KdcSXks-tqwm3ZfMc4/edit#gid=72612093)
se basa en la experiencia de implementar proyectos de interoperabilidad con
organismos gubernamentales de distintos países (incluidas oficinas de país de
UNICEF, el Ministerio de Servicios Sociales de Camboya y el Ministerio de Salud
de Tailandia) para ofrecer una guía de implementación y planificación que cubre
los hitos clave de la mayoría de los proyectos de interoperabilidad e
integración.

Aunque esta lista de comprobación debe adaptarse a cada implementación, las
tareas que describe ofrecen un plan de trabajo modelo que puede ayudar a
cualquier organización a prepararse para su próxima implementación. **El proceso
de implementación se divide en las siete fases que se resumen a continuación.
Consulta la lista de comprobación para ver los pasos en detalle.**

:::tip

Mira un ejemplo real: consulta el repositorio de UNICEF Camboya para ver los
resultados documentados a partir de esta lista de comprobación en un proyecto de
interoperabilidad implementado para el Ministerio de Asuntos Sociales, Veteranos
y Rehabilitación Juvenil de Camboya y ONG asociadas:
[openfn.github.io/unicef-cambodia/](https://openfn.github.io/unicef-cambodia/)

:::

## (1) Preparación de la implementación {#1-preparing-for-the-implementation}

Prepara el proyecto para el éxito: crea un plan de proyecto, define los roles y
las responsabilidades, documenta el valor de negocio de la implementación y
confirma su viabilidad técnica.

Resultados clave:

- Evaluación del valor de negocio
- Requisitos de alto nivel de los workflows
- Evaluación de la viabilidad técnica
- Evaluación de capacidades

## (2) Descubrimiento y diseño: requisitos funcionales de los workflows {#2-discovery--design---functional-workflow-requirements}

Recopila y documenta las historias de usuario y los requisitos funcionales de
los workflows.

Resultados clave:

- Diagrama de arquitectura de la solución
- Diagramas de workflows (funcionales)
- Especificaciones de mapeo de elementos de datos (funcionales)

## (3) Descubrimiento y diseño: especificaciones técnicas {#3-discovery--design---technical-specifications}

Itera sobre los requisitos de los workflows para definir las especificaciones
técnicas de cómo se implementará el workflow. Por ejemplo, ten en cuenta qué
endpoints concretos de la API hay que usar y qué métodos u operaciones HTTP usar
en cada uno.

Resultados clave:

- Diagrama de arquitectura de la solución
- Diagramas de workflows (técnicos)
- Especificaciones de mapeo de elementos de datos (técnicas)

## (4) Creación {#4-build}

Configura el workflow en OpenFn.org y desarrolla y prueba los jobs y adaptors
que se usarán en el workflow.

Resultados clave:

- Configuración del proyecto de OpenFn
- Jobs
- Adaptors nuevos o actualizados (si hacen falta)
- Borrador de la “Project Security Configuration Checklist” para documentar los
  ajustes de configuración implementados

## (5) Pruebas {#5-testing}

Crea un conjunto de pruebas y realiza las pruebas de aceptación de usuario
(UAT). Después de las UAT, incorpora los comentarios recibidos e itera sobre el
proceso de pruebas.

Resultados clave:

- Conjunto de pruebas completado
- Lista de nuevas solicitudes pendientes (si los comentarios identifican
  necesidades para fases futuras)
- “Project Security Configuration Checklist” completada

## (6) Formación y preparación para la puesta en marcha {#6-training--prep-for-go-live}

Forma a los administradores de OpenFn y a los usuarios finales de los sistemas
de destino, y documenta lo que se ha implementado. En esta fase también se
migran la configuración y el código a los entornos de producción.

Resultados clave:

- Documentación publicada
- Grabación en video de la formación
- “Project Security Configuration Checklist” aprobada
- Proyecto de OpenFn listo para usar

## (7) Despliegue y soporte {#7-rollout--support}

“Activa” los workflows de OpenFn para la puesta en marcha y establece
estructuras de soporte y un modelo de gobernanza para la gestión del cambio.

Resultados clave:

- Proyecto de OpenFn “en producción”
- Modelo de soporte documentado

## ¿Preguntas o comentarios? {#questions-or-feedback}

Si tienes aportaciones, comentarios o preguntas, ¡contribuye! Envía una pull
request a esta página de documentación en GitHub o deja un comentario en la
[OpenFn Community](https://community.openfn.org/).

¿Te interesa recibir **formación sobre el proceso de implementación de OpenFn**?
Escribe a [partnerships@openfn.org](mailto:partnerships@openfn.org).
