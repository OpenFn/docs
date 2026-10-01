---
title: Configurar steps
translation_source_hash: 157984301b15b94a4df45d57fcf4b28494fa4e69
translation_review_status: machine
---

Un step es una tarea o actividad concreta dentro de un workflow. Cada step está
vinculado a un [adaptor](/adaptors/) y contiene la lógica de negocio para hacer
una tarea u operación concreta en esa aplicación de destino.

:::note

En OpenFn V1 no existía el concepto de `Workflow Steps`: se llamaban `Jobs`. En
V2, los `Jobs` se definen como _las expresiones de job o los scripts que definen
la lógica de negocio y las reglas de transformación de cada uno de los `Steps`_.

:::

## Crear o editar un step {#create-or-edit-a-step}

En el Canvas del workflow, haz clic en el ícono de más `+` para crear un step
_nuevo_, o haz clic en un step existente para ver o configurar sus componentes
principales.

## Configurar el step {#configure-the-step}

Para configurar bien un step, tienes que entender su anatomía básica.

![Anatomía de un step](/img/anatomy_of_step.webp)

Un step incluye estos componentes principales:

- `Name`: un nombre legible que describe el step y su propósito.
- `Adaptor`: el [adaptor](/adaptors/) seleccionado, que aporta las funciones
  específicas de la aplicación para este step (por ejemplo, `dhis2` o
  `commcare`).
- `Adaptor Version`: la versión del adaptor seleccionado, que determina qué
  endpoints de la API y qué funciones del adaptor están disponibles. Consulta la
  sección [Elige una versión del adaptor](#3-choose-an-adaptor-version) más
  abajo para saber más.
- `Credentials`: la credencial que se usa para autorizar las conexiones con la
  aplicación de destino de este step.
- `Job`: el código personalizado que define la lógica de negocio o la secuencia
  de operaciones que se ejecutan en la aplicación conectada, o ambas.

:::tip Escribir jobs

Escribir jobs para agregar lógica personalizada con reglas de negocio o de
transformación de datos suele requerir conocimientos básicos de JavaScript.
Consulta la [documentación sobre cómo escribir jobs](/jobs/job-writing-guide.md)
para ver una descripción detallada, y los
[ejemplos de la biblioteca](/adaptors/library) para ver código de muestra.

:::

## 1. Ponle nombre a tu step {#1-name-your-step}

Primero, dale a tu step un `Name` que describa su propósito (por ejemplo,
`create patient`, `map form data`).

## 2. Elige un adaptor {#2-choose-an-adaptor}

Después, selecciona un `Adaptor` para definir con qué aplicación se conectará tu
step.

:::tip

Cada step solo puede tener 1 adaptor. Si quieres conectarte con 2 aplicaciones
distintas, deberías crear 2 steps distintos.

:::

Tenemos una sección completa sobre cómo crear [adaptors](/adaptors) nuevos, pero
lo más importante que debes saber al escribir un step es que tienes que elegir
un **adaptor** y una **versión del adaptor**.

Todo lo que se explica más abajo sobre funciones auxiliares como `create` o
`findPatient` requiere entender un poco los adaptors. Cuando ejecutas un step,
usas una capa de funcionalidad que se construyó para conectarse con una API, un
tipo de API o una base de datos concretos.

Por ejemplo, `create` significa una cosa en el adaptor `salesforce` y otra
completamente distinta en `dhis2`. Por eso, antes de empezar a escribir un step,
tienes que decidir con qué [adaptor](/adaptors/) vas a trabajar.

### 3. Elige una versión del adaptor {#3-choose-an-adaptor-version}

Elige la versión del adaptor que quieres usar. Te recomendamos seleccionar la
última versión disponible, salvo que quieras usar una versión anterior que sea
compatible con una versión anterior de la API con la que te conectas. Consulta
la [documentación de los adaptors](/adaptors) para ver los detalles de cada uno.

Los adaptors cambian con el tiempo. Son de código abierto y fomentamos todas las
contribuciones posibles: publicamos versiones nuevas para usarlas en OpenFn.org
en cuanto pasan nuestras revisiones de seguridad. Puede que se agreguen
funcionalidades nuevas y se corrijan errores, pero, para asegurarte de que una
integración existente no se rompa, te recomendamos seleccionar una versión
concreta (en lugar de usar la funcionalidad de "actualización automática")
cuando elijas un adaptor. La versión publicada más alta es la opción
predeterminada.

:::tip

Las _primeras 4 líneas_ del log de cualquier run en OpenFn te dicen qué adaptor
estás ejecutando (además de la versión del worker, del engine y de Node.js).
Esto es muy importante, sobre todo si intentas solucionar problemas de steps en
distintos entornos (como tu propia terminal, app.openfn.org, etc.).

:::

Fíjate bien en qué `version` usas para escribir un step. Observa los siguientes
logs de un run:

```sh
Versions for run f470a3da-8b90-480e-a94f-6dd982c91afe:
    ▸ node.js                     18.19.0
    ▸ worker                      0.5.0
    ▸ engine                      0.2.6
    ▸ @openfn/language-primero    2.9.1
...more logs here...
```

#### Gestionar las versiones de los adaptors {#managing-adaptor-versions}

Aunque actualizar puede ser útil como parte del mantenimiento habitual, estas
actualizaciones se deberían probar con cuidado. Lo más común es que los clientes
actualicen a una versión nueva del adaptor de un step existente cuando ya están
haciendo cambios en ese step por motivos de negocio. Algunos cambios de negocio
pueden incluso _requerir_ actualizar la versión para usar una funcionalidad
nueva del adaptor. Aunque esos cambios no requieran una actualización, si el
equipo técnico tiene que dedicar tiempo de todos modos a probar cambios en un
step, puede ser el momento ideal para probar también una actualización de la
versión del adaptor.

Los adaptors siguen [SEMVER](https://semver.org/), así que puedes estar
razonablemente seguro de que actualizar de `x.1.z` a `x.2.z` no hará que falle
el código existente de un step, pero actualizar de `3.y.z` a `4.y.z` sí podría:
en SEMVER, las actualizaciones _mayores_ (las que cambian el primer número de la
versión `x.y.z`) tienen cambios "incompatibles" o "no retrocompatibles".

:::tip

Al configurar un step, puedes seleccionar una `Adaptor Version` concreta para
fijar la versión de tu step. Si eso es lo que quieres, y para evitar el riesgo
de actualizaciones accidentales en workflows en producción, no selecciones
`latest` como versión del adaptor.

:::

### 4. Escribe un job para la lógica de negocio personalizada o las reglas de transformación de datos {#4-write-a-job-for-custom-business-logic-or-data-transformation-rules}

Haz clic en el botón de código `</>` del panel de configuración para escribir o
editar una expresión de job que defina las "reglas" o las tareas concretas que
debe completar tu step. Consulta las páginas sobre
[el Inspector](/build/steps/step-editor.md) y sobre
[cómo escribir jobs](/jobs/job-writing-guide.md) para saber más.
