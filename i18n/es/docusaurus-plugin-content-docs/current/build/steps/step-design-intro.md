---
title: Diseña tu step
translation_source_hash: 00a872e0912678e679517b3b01dfd0e645c71d84
translation_review_status: machine
---

Antes de configurar un step de un workflow, tienes que diseñar el workflow
completo y pensar qué tareas, actividades o lógica de negocio concretas
ejecutará cada step. Sigue leyendo para ver un breve resumen.

:::tip

Consulta la documentación de [diseño de workflows](/design/design-overview.md)
para ver más detalles sobre el diseño de soluciones y enlaces a plantillas.

:::

En resumen, para diseñar un step de un workflow, tienes que seguir la lista de
acciones de abajo y considerar resumir las especificaciones de tu diseño en un
[diagrama del workflow](/design/design-workflow.md).

![Ejemplo de workflow](/img/example-workflow-state.webp)

## 1. Determina tus entradas y salidas {#1-determine-your-inputsoutputs}

1. ¿Cuál es la entrada de este step del workflow? Piensa en cuál es el state
   inicial, o los datos, _antes_ de que empiece el step.
2. ¿Cuál es la salida que quieres (es decir, el state final, o los datos,
   _después_ de que se ejecute el step)? Piensa en qué quieres enviar a la
   aplicación de destino o pasar al siguiente step del workflow.

## 2. Mapea tus elementos de datos {#2-map-your-data-elements}

[Consulta esta página](/design/mapping-specs.md) para ver una guía detallada
sobre cómo mapear los elementos de datos, o "diccionarios de datos", entre tus
aplicaciones de origen y de destino. Para empezar:

1. Exporta los metadatos (o el "formulario", la "lista de campos" o los
   "elementos de datos") de tu aplicación de origen (entrada) y de tu aplicación
   de destino (salida).
2. Pega los metadatos en una hoja de cálculo de Excel para crear una hoja de
   mapeo:

![Ejemplo de hoja de mapeo](/img/data-element-mapping.webp)

3. Mapea los elementos de datos de origen y de destino, y define reglas de
   limpieza y transformación de los datos. Piensa en lo siguiente:

- ¿Cómo se deberían traducir los datos recolectados al modelo de datos de tu
  sistema de destino?
- ¿Tu sistema de destino tiene requisitos de entrada o de validación de datos?
- ¿Hay que transformar o limpiar los datos para cumplir con las respuestas
  anteriores?

## 3. Define tus métodos (GET, POST...) u operaciones (insert, update, upsert...) {#3-define-your-methods-get-post-andor-operations-insert-update-upsert}

1. Determina qué identificadores únicos existentes puedes usar para tus datos, o
   créalos. Los identificadores únicos sirven para insertar y actualizar
   registros concretos de tus datos (por ejemplo, uuid, form_id, patient_id,
   etc.).
2. Determina qué métodos HTTP (por ejemplo, GET, POST, PUT) u operaciones de
   base de datos (por ejemplo, insert, update, delete) quieres hacer en la
   aplicación de destino
3. Revisa las funciones auxiliares del adaptor.
   - Ejemplo de [language-postgresql](/adaptors/packages/postgresql-docs)
     - `insert(...)`, `insertMany(...)`
     - `update(...)`, `updateMany(...)`
     - `upsert(...)`, `upsertMany(...)` → actualiza el registro si existe o lo
       inserta si no existe; hace referencia a un ID externo
   - Ejemplo de [language-dhis2](/adaptors/packages/dhis2-docs) con Tracked
     Entity Instances (TEI)
     - `updateTEI(...)`
     - `upsertTEI(...)`

Mira el siguiente ejemplo de `Job expression` para un step que hace un "upsert"
(actualiza o inserta) de registros en una base de datos SQL.

```js
upsert('mainDataTable', 'AnswerId', {
  AnswerId: dataValue('\_id'), //external Id for upsert
  column: dataValue('firstQuestion)'),
  LastUpdate: new Date().toISOString(),
  Participant: dataValue('participant'),
  Surveyor: dataValue('surveyor'),
  ...
});
```

Consulta la [guía para escribir jobs](/jobs/job-writing-guide.md) para más
información.
