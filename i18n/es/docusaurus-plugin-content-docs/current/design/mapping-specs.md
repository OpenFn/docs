---
sidebar_label: Especificaciones de mapeo
title: Escribir especificaciones de mapeo de elementos de datos
translation_source_hash: 12c62347cedde52a1f09d8219e7a03ed1a9792e2
translation_review_status: machine
---

# Mapear elementos de datos para definir las reglas de integración y automatización de datos {#mapping-data-elements-to-define-data-integration--automation-rules}

Este artículo recorre el proceso de mapeo de elementos de datos con el que se
definen especificaciones, a nivel de entidad y de campo, de cómo se deben
intercambiar, limpiar o transformar los datos en un workflow de integración de
datos. En pocas palabras, el mapeo de datos es el proceso de conectar un campo
de datos de una fuente con un campo de datos de otra (por ejemplo, "patient" en
el sistema A = "person" en el sistema B).

Una especificación de mapeo de elementos de datos es un tipo especial de
diccionario de datos que sirve como (1) documentación de cómo traduces el
significado entre sistemas y (2) especificación para los desarrolladores que
construyen la solución de automatización del workflow.

Para cada paso de automatización de tu workflow, documentarás qué elementos de
datos (o metadatos) se usan y las "reglas" para mapearlos, reasignarlos,
limpiarlos, transformarlos o calcularlos.

![mapeo](/img/mapping_example.webp)

**Para hacer un borrador de especificación de mapeo de elementos de datos,
tendrás que…**

1. Exportar los metadatos o pedir una lista de elementos de datos de los
   sistemas de destino,
2. Conseguir un registro de "entrada" de muestra del sistema de origen y un
   registro de salida de muestra del sistema de destino. En el mejor de los
   casos, es un payload JSON de ejemplo o un enlace a registros de ejemplo. En
   el peor, es una captura de pantalla o un archivo CSV con datos "ficticios".
3. ¡Empezar a "mapear" los elementos de datos y a registrar las reglas de
   transformación!

|                   ![mapeo](/img/mapping_process.webp)                   |
| :---------------------------------------------------------------------: |
| _El proceso de mapeo de datos para soluciones de integración de datos._ |

## Plantilla de especificación de mapeo de OpenFn {#openfn-mapping-specification-template}

Puedes documentar elementos de datos, mapeos y reglas con la plantilla de
especificación de mapeo de OpenFn. El equipo de OpenFn creó esta
[plantilla](https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608)
a partir de lo aprendido al implementar soluciones de integración de datos para
ONG y socios gubernamentales de todo el mundo. Se usa en todos los proyectos de
OpenFn y la mantiene el equipo de OpenFn.

## Consideraciones sobre el mapeo {#mapping-considerations}

### Mantener las especificaciones de mapeo {#maintaining-mapping-specifications}

Cuando tu proyecto de OpenFn esté en producción, el documento de
especificaciones de mapeo puede ser la forma más sencilla para que el personal
no técnico entienda tu solución. Si haces cambios, asegúrate de que la
especificación de mapeo siempre coincida con el código de tus jobs. Considera
también versionar tus especificaciones de mapeo para que las personas
involucradas tengan acceso a las implementaciones anteriores de la solución.

### Mapeo funcional y mapeo técnico {#functional-vs-technical-mapping}

Una vez que tu organización (o "el negocio") defina las reglas funcionales de
mapeo de elementos de datos entre los sistemas de origen y de destino, tendrás
que ver qué otros elementos de datos técnicos hacen falta para que la
integración funcione. Pueden ser campos propios del sistema, IDs o parámetros de
la API que funcionan "por detrás" y que el usuario final quizá no vea, pero que
el sistema de destino necesita para compartir los datos.

### Variables globales y reglas de mapeo {#global-variables-and-mapping-rules}

A veces, al mapear listas de valores o conjuntos de opciones (por ejemplo,
listas de diagnósticos, jerarquías geográficas o la lista de servicios que
ofrece la organización en todas partes), esos valores son "globales" y hay que
usarlos una y otra vez en toda la implementación del workflow.

Por ejemplo, imagina que tu aplicación de origen tiene una lista de IDs de
ubicación codificados (por ejemplo, `01, 02, 03`) que hay que mapear a una lista
global de valores de ubicación o unidades administrativas:

```js
//source location IDs: destination location values
01: 'Western Cape',
02: 'Eastern Cape',
03: 'Gauteng'
```

En tu especificación de mapeo, deberías reunir esta lista de valores globales y
de reglas de mapeo en una hoja `globals` aparte, para usarla como referencia en
toda la especificación. Mira un ejemplo en la
[plantilla de especificación de mapeo](https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit).

Luego, al construir el workflow que implementa esta tabla de mapeo de valores
globales, la expresión de tu job podría parecerse a este fragmento de código.

```js
//Workflow step 1
//First we use fn() to transform, map & clean our data
fn(state => {

    //Global mapping rules you want to implement in your workflow
    const locationMap = {
        //location_id from source app: location value in destination app
        01: 'Western Cape',
        02: 'Eastern Cape',
        03: 'Gauteng'
    }

    // Here we build the payload of our http request body...
    // We assume the input is an array of records
    const payload = state.data.map(record => ({
        location: locationMap[record.location_id], //translate location_id to the mapped value
        external_id: record.case_id
    }));

    return {...state, payload};
});

//Workflow step 2
//Then we post the payload built in the prior operation to create a record
post('/api/myEndpoint', {
  headers: {
    'Content-Type': 'application/json',
  },
  body: (state) => state.payload
});
```

#### Gestionar variables globales y mapeos fuera de OpenFn {#managing-global-variables--mappings-outside-of-openfn}

La plantilla de mapeo de OpenFn, basada en XLS, es útil para definir los
requisitos de mapeo junto con otras personas involucradas. Pero, una vez
definidas esas especificaciones, podrías considerar guardar las reglas de mapeo
`globals` en una aplicación externa, en lugar de escribirlas directamente en el
código de tu job (como en el ejemplo de arriba).

En su lugar, podrías guardar estas variables globales y reglas de mapeo en una
tabla de base de datos aparte o en una aplicación como
[Open Concept Lab](https://openconceptlab.org/), que tiene una aplicación web
fácil de usar para registrar diccionarios de datos y reglas de mapeo, y es
compatible con API REST. Así podrías consultar estas reglas de mapeo
dinámicamente con OpenFn, para que tu integración use siempre las
especificaciones más recientes.

En ese caso, la configuración de tu workflow podría verse como la de abajo: el
segundo step del workflow se dedica a consultar la lista de mapeos globales en
la aplicación donde están guardados, para obtener los valores globales más
recientes cada vez que se ejecuta el workflow.

![ejemplo de workflow con OCL](/img/workflow-ocl-example.webp)

:::tip

Para ver la documentación de una implementación de workflow que usa
[Open Concept Lab](https://openconceptlab.org/) para guardar especificaciones de
mapeo y variables globales,
[consulta este](https://docs.google.com/presentation/d/1NEhgHD3P9luYYsJFMfGee8eR8xA03MpgcZcGPpzTLjE/edit#slide=id.g1ed42eefbd1_0_0)
resumen de Médecins Sans Frontières sobre un workflow de OpenFn de ejemplo que
mapea datos de OpenMRS a DHIS2.

:::

### Mapear a entidades individuales o agregadas {#mapping-to-individual-or-aggregate-entities}

Piensa si tu integración necesita un intercambio 1 a 1 de registros individuales
o si hay que resumir o agregar los registros individuales. Puede que tu workflow
tenga que mapear entidades individuales (es decir, un mapeo 1 a 1). Por ejemplo,
puedes mapear un paciente de KoboToolbox a un paciente en DHIS2. Para esos
casos, deberías usar la
[plantilla de mapeo predeterminada de OpenFn](https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608).

En cambio, si tu workflow tiene que mapear entidades individuales a una entidad
agregada o resumida (es decir, un mapeo de muchos a 1), puedes empezar con la
[plantilla de mapeo agregado](https://docs.google.com/spreadsheets/d/1JVcM7FEkCeezHXONRaAaEPFks9lS8xO_q51jql_hUtc/edit)
de OpenFn. Por ejemplo, podrías recolectar registros individuales de pacientes
en KoboToolbox, pero querer enviar a DHIS2 un conteo agregado de pacientes para
reportar los resultados de indicadores clave (por ejemplo, la cantidad de
pacientes menores de 18 años).
