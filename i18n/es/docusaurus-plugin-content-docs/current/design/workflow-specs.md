---
sidebar_label: Especificaciones del workflow
title: Escribir especificaciones de automatización de workflows
translation_source_hash: 3ec9ce462bdeae5af34808d835d0dd1f05d23397
translation_review_status: machine
---

# Escribir especificaciones para soluciones de automatización de workflows {#writing-specifications-for-workflow-automation-solutions}

**Los resultados clave del proceso de diseño son:**

1. [Diagrama funcional del workflow](/design/discovery.md#workflow-requirements-gathering)
2. [Diagrama técnico del workflow](/design/discovery.md#workflow-requirements-gathering)
3. [Diagrama de arquitectura de la solución](/design/discovery.md#documenting-the-solution-architecture)
4. [Especificaciones de mapeo de elementos de datos](/design/mapping-specs.md)

Con todo esto, tendrás lo necesario para cerrar las especificaciones del
workflow y pasárselas a los desarrolladores para que escriban los jobs.

Cada "tarea" o "paso" del carril de OpenFn en tu diagrama técnico se puede
implementar como una operación distinta en la configuración del workflow. En el
diagrama de ejemplo de abajo, podrías implementar 1 job con 3 operaciones
encadenadas, o 3 jobs con 1 operación cada uno.

![workflow](/img/workflow_specs.webp)

**Las especificaciones del workflow deberían enlazar a todos los artefactos de
diseño y destacar lo siguiente:**

1. La cantidad de jobs de OpenFn necesarios y la función de cada uno
2. Enlaces a ejemplos de entrada y salida y a la documentación de la API
3. Los identificadores únicos
4. Los volúmenes de datos esperados
5. Los requisitos de autenticación
