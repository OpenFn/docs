---
sidebar_label: Introducción
title: Guía para escribir jobs
translation_source_hash: f515b2837d8e8b3bcab8376a929063ec3bac3fff
translation_review_status: machine
---

En OpenFn, la automatización de workflows y la integración de datos se logran
mediante la creación de jobs.

Esta guía te presenta los conceptos clave y las buenas prácticas para escribir
jobs. Sirve tanto para quienes recién empiezan a programar como para
programadores de JavaScript con experiencia. De hecho, incluso si ya tienes
experiencia con JavaScript, hay varios patrones clave del ecosistema de OpenFn
que es importante aprender.

:::tip

Si escribes jobs en la app de la plataforma (Lightning), puedes usar el
[AI Assistant](/build/ai-assistant.md) como ayuda. Lo encontrarás en el
Inspector.

:::

Un job es un conjunto de código JavaScript que realiza una tarea concreta, como
obtener datos de Salesforce o convertir datos JSON al estándar FHIR.

Cada job usa exactamente un adaptor (a menudo llamado "conector") para realizar
su tarea. El adaptor ofrece un conjunto de funciones auxiliares (operaciones)
que facilitan la comunicación con una fuente de datos.

Esta guía sirve por igual para escribir jobs en la app (Lightning) o con la CLI.

:::info Workflows

Puedes encadenar varios jobs en un workflow. Un patrón común es usar un job para
obtener datos de la fuente de datos A, otro job para convertir o transformar
esos datos para que sean compatibles con la fuente de datos B, y un tercer job
para subir los datos transformados a la fuente de datos B.

Para saber más sobre el diseño y la implementación de workflows, consulta
[Crear y gestionar workflows](/build/workflows.md).

:::

## Próximos pasos {#next-steps}

La mejor forma de aprender a escribir jobs de OpenFn es escribir jobs de OpenFn.

Puedes [empezar con la CLI](/build-for-developers/cli-intro.md) y ejecutar jobs
en tu computadora. Después, mira el
[desafío de la CLI](/build-for-developers/cli-challenges.md) para poner a prueba
de verdad tus habilidades para escribir jobs.

Si ya quieres empezar a usar la app, mira esta guía para
[crear tu primer workflow](/build/workflows.md).

El diseño de workflows no es un problema trivial, así que quizás también quieras
revisar la [documentación del proceso de diseño](/design/design-overview.md) de
workflows.

:::info ¿Preguntas?

Si tienes preguntas sobre cómo escribir jobs, pregunta en la
[comunidad](https://community.openfn.org) para recibir ayuda del equipo
principal de OpenFn y de otros implementadores.

:::
