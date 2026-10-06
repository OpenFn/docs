---
sidebar_label: De Kobo a DHIS2
title: Workflow de reportes de Kobo a DHIS2
slug: /kobo-to-dhis2
translation_source_hash: b39aafc3fe9d4c25cde774798c8f9cfb06f0b082
translation_review_status: machine
---

# Crea un workflow que automatice los reportes entre KoboToolbox y DHIS2

En este tutorial te mostramos cómo crear un workflow sencillo de OpenFn que
automatiza los reportes entre [KoboToolbox](https://www.kobotoolbox.org/) (una
aplicación móvil de recolección de datos) y [DHIS2](https://dhis2.org) (un
sistema de información de salud muy usado para reportar datos agregados sobre
indicadores clave), con los [adaptors](/adaptors) `kobotoolbox` y `dhis2`.

### Video explicativo {#video-walkthrough}

:::tip Tutorial de introducción a workflows y History

Mira este
[tutorial de introducción a workflows y History](https://youtu.be/hae8eM0iYnM?si=LGbv1TK0W9L9y12u)
para que te guíe en la configuración de este workflow.

:::

### Resumen del workflow {#workflow-overview}

Este workflow de OpenFn tendrá 3 steps:

1. Obtener los envíos de formularios de Kobotoolbox
2. Contar cuántos valores `OPV0_dose_given` hay en los envíos, para saber
   cuántos beneficiarios recibieron la vacuna OPV0
3. Importar los resultados agregados a DHIS2 para reportar el número de dosis
   registradas esa semana

### Requisitos previos {#prerequisites}

- Tienes un proyecto de OpenFn.
- Tienes una cuenta de KoboToolbox y un formulario para sincronizar (más abajo
  encontrarás credenciales de demostración).
- Tienes los datos de acceso a una instancia de DHIS2 (más abajo encontrarás los
  de la instancia "play" de DHIS2).

### Step 1: Obtener los envíos del formulario de Kobo {#step-1-get-kobo-form-submission}

Crea el primer step en el Canvas del workflow.

- Name: `Get Kobo Form Submission`
- Adaptor: `kobotoolbox`
- Version: `latest`
- Credential: ver abajo

Este step usa el adaptor kobotoolbox con la siguiente configuración de
credencial:

```json
{
  "baseURL": "https://kf.kobotoolbox.org",
  "username": "openfn_demo",
  "password": "openfn_demo",
  "apiVersion": "v2"
}
```

En este step queremos obtener los envíos del formulario de demostración con el
ID `aBpweTNdaGJQFb5EBBwUeo`. Para eso, abre el
[editor del Inspector](/build/steps/step-editor.md) y agrega el siguiente código
del job:

```javascript
// Step 1: obtiene los envíos del formulario de Kobotoolbox
getSubmissions({ formId: 'aBpweTNdaGJQFb5EBBwUeo' });
```

:::tip ¿Necesitas ayuda para escribir el código del job?

Consulta la documentación sobre el
[adaptor "kobotoolbox"](/adaptors/kobotoolbox), sobre
[cómo configurar steps](/build/steps/steps.md) y sobre
[cómo escribir jobs](/jobs/job-writing-guide.md).

:::

#### Explicación {#explanation}

- `getSubmissions`: obtiene los envíos de formularios.
- `{ formId: "aBpweTNdaGJQFb5EBBwUeo" }`: indica el ID del formulario del que se
  obtienen los envíos.

#### Prueba {#testing}

Crea una entrada vacía `{}` y haz clic en el botón `Create New Work Order` para
ejecutar el workflow. Consulta [la documentación](/build/workflows.md) para
saber más sobre cómo ejecutar workflows manualmente.

El `output` esperado debería contener 17 registros en `state.data.results`.

### Step 2: Contar las dosis de OPV aplicadas {#step-2-count-opv-dose-given}

Crea un segundo step después de `Get Kobo Form Submission` así:

- Name: `Count OPV Dose Given`
- Adaptor: `common` (se usa cuando quieres agregar funciones de JavaScript
  personalizadas)
- Version: `latest`
- Credential: no hace falta

En este step vamos a contar todos los registros con `"OPV0_dose_given": "yes"`.
Para agregar esta lógica, abre el [Inspector](/build/steps/step-editor.md) y
agrega el siguiente código del job en el editor:

```javascript
// Filtra y cuenta las dosis de OPV aplicadas
fn(state => {
  const opvDosesGivenCount = state.data.results.filter(
    r => r['OPV0_dose_given'] === 'yes'
  ).length;

  return { ...state, opvDosesGivenCount };
});
```

:::tip ¿Necesitas ayuda para escribir el código del job o para cambiar esta
lógica?

Consulta la documentación sobre el
[adaptor "common"](/adaptors/packages/common-docs), sobre
[cómo configurar steps](/build/steps/steps.md) y sobre
[cómo escribir jobs](/jobs/job-writing-guide.md).

:::

#### Explicación {#explanation-1}

- `fn`: una función de OpenFn que da más flexibilidad al escribir jobs. Te
  permite hacer algo con el state y devolver los datos transformados al state.
- `opvDosesGivenCount`: cuenta cuántas veces aparece "yes" en el campo
  `OPV0_dose_given`.

#### Prueba {#testing-1}

Selecciona el primer step, `Get Kobo Form Submission`, y haz clic en
`Create New Work Order` con una entrada vacía (consulta la
[documentación de workflows](/build/workflows.md) si necesitas ayuda para
ejecutar y probar steps). Los dos steps deberían ejecutarse con éxito y en el
state final deberías ver que se agregó `opvDosesGivenCount: 3`.

### Step 3: Mapear y cargar en DHIS2 {#step-3-map-and-load-to-dhis2}

Crea un tercer step después de `Count OPV Dose Given` así:

- Name: `Map and Load to DHIS2`
- Adaptor: `dhis2`
- Version: `v4.0.3`
- Credential: una credencial `dhis2` nueva con la siguiente configuración

```json
{
  "hostUrl": "https://play.dhis2.org/dev",
  "username": "admin",
  "password": "district"
}
```

En este step queremos agregar la lógica para importar `dataValues` a DHIS2 y así
"reportar" el total de dosis de la vacuna OPV0 que calculamos en el step 2.

Para eso, abre el [Inspector](/build/steps/step-editor.md) y agrega el siguiente
código del job en el editor:

```javascript
// Importa a DHIS2
create('dataValueSets', state => ({
  dataSet: 'BfMAe6Itzgt', // Child Health
  period: '202402', // Feb 2024
  orgUnit: 'DiszpKrYNg8', // Ngelehun CHC
  dataValues: [
    {
      categoryOptionCombo: 'Prlt0C1RF0s', //Fixed <1yr
      dataElement: 'x3Do5e7g4Qo', // OPV0 doses given
      value: state.opvDosesGivenCount, //# of OPV0 doses given
    },
  ],
}));
```

:::tip ¿Necesitas ayuda para escribir el código del job o para cambiar esta
lógica?

Consulta la documentación sobre el [adaptor "dhis2"](/adaptors/dhis2), sobre
[cómo configurar steps](/build/steps/steps.md) y sobre
[cómo escribir jobs](/jobs/job-writing-guide.md).

:::

#### Explicación {#explanation-2}

- `create('dataValueSets', {...})`: esta función de OpenFn crea un datavalueset
  nuevo en DHIS2.
- `dataSet`, `completeDate`, `period`, `orgUnit`: los detalles del datavalueset.
- `dataValues`: un array con los elementos de datos y sus valores.

#### Prueba {#testing-2}

Guarda los cambios, ve al primer step (Get Kobo Form Submission), crea una
entrada vacía `{}` y haz clic en el botón `Create New Work Order` para ejecutar
el workflow. Todos los steps deberían ejecutarse con éxito y deberías ver
actualizado `OPV0 doses given` en DHIS2. Consulta la
[documentación de workflows](/build/workflows.md) si necesitas ayuda para
ejecutar o probar workflows.

### Conclusión {#conclusion}

¡Felicitaciones! Creaste un workflow de OpenFn que automatiza todo el proceso:
obtiene los envíos de formularios de Kobotoolbox, calcula el total de dosis de
OPV aplicadas a los beneficiarios y reporta ese total a DHIS2 como `dataValues`.

:::tip ¿No puedes avanzar? ¿Tienes preguntas?

Mira este
[tutorial de introducción a workflows y History](https://youtu.be/hae8eM0iYnM?si=LGbv1TK0W9L9y12u)
o publica tus preguntas en la [comunidad](https://community.openfn.org) para
recibir ayuda.

:::
