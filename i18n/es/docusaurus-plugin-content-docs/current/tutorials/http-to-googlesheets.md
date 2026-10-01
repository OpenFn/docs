---
sidebar_label: De HTTP a GoogleSheets
title: Workflow de HTTP a GoogleSheets
translation_source_hash: dda6b88cd13c6a33fde0ac1765e545b6c743d03c
translation_review_status: machine
---

# Crea un workflow que conecte una API REST con Google Sheets

En este tutorial te mostramos cómo crear un workflow sencillo de OpenFn que
automatiza la sincronización de datos entre una API REST y Google Sheets, con
los [adaptors](/adaptors) `http` y `GoogleSheets`.

## Video explicativo {#video-walkthrough}

Mira el video y sigue los pasos que aparecen abajo.

<iframe width="784" height="441" src="https://www.youtube.com/embed/PMj8445gLA4?si=WbJ4tmr_jnKyBfg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Antes de empezar {#before-you-start}

Antes de comenzar, damos por hecho que revisaste lo siguiente:

- Revisaste nuestro glosario y conoces los conceptos básicos de OpenFn y de las
  API. Para empezar, consulta estas páginas:
  - [Conceptos de OpenFn](/get-started/terminology.md)
  - [Glosario de integración de datos](/get-started/glossary.md)
- Tienes una cuenta de Google. La usaremos para crear una credencial que
  autorice el acceso a Google Sheets.
- Tienes acceso a un proyecto de OpenFn (en una
  [aplicación OpenFn v2](https://github.com/OpenFn/lightning) instalada
  localmente o en [app.openfn.org](https://app.openfn.org)).

## Primeros pasos {#getting-started}

En esta guía vamos a configurar un workflow que **sincronice automáticamente
datos de `user` desde una API REST web y los importe a una GoogleSheet**.

**Esta integración se divide en dos partes:**

1. Obtener datos de la API REST (la aplicación de "origen")
2. Transformar e importar estos datos a una tabla de tu GoogleSheet (la
   aplicación de "destino")

¡Empecemos!

## 1: Crea un workflow nuevo {#1-create-a-new-workflow}

Para crear un workflow nuevo en tu proyecto:

1. Ve a la página `project dashboard`.
2. Haz clic en el botón `Create new workflow`.
3. Ponle a tu workflow un `Name` descriptivo (por ejemplo, `Sync Users List`).
4. Elige tu [trigger](/build/triggers.md).
5. Edita tu primer [step](/build/steps/steps.md).

## 2. Configura tu primer step para obtener datos de la API REST {#2-configure-your-first-step-to-get-data-from-the-rest-api}

[JSONPlaceholder](https://jsonplaceholder.typicode.com/users) ofrece una API
falsa y gratuita para hacer pruebas y prototipos. Usaremos la
[API REST de usuarios](https://jsonplaceholder.typicode.com/users) para extraer
datos de usuarios. Para eso, configuraremos un step en OpenFn que obtenga esos
datos con una solicitud HTTP `GET`. Haz clic en tu primer step para configurarlo
con estas opciones:

- Name `Fetch Users`
- Adaptor `http`
- Version: `6.0.0`
- Credentials (opcional: credencial "Raw JSON") -
  `{ "baseUrl": "https://jsonplaceholder.typicode.com/"}`
- Código del job: si configuraste la credencial "Raw JSON" con jsonplaceholder
  como baseURL, agrega la operación `get("users")` en el bloque de código.

:::tip ¿Necesitas ayuda para escribir el código del job?

Consulta la documentación sobre el
[adaptor "http"](/adaptors/packages/http-readme), sobre
[cómo configurar steps](/build/steps/steps.md) y sobre
[cómo escribir jobs](/jobs/job-writing-guide.md).

:::

**Cuando termines de configurar y escribir tu step, ¡guárdalo y ejecútalo!**

- Consulta la [sección de workflows](/build/workflows.md) para ver más
  orientación sobre cómo crear y ejecutar workflows.

**Revisa el panel `Output & Log` para ver si tu run se completó con éxito.** Si
fue así, deberías ver:

- El estado `success`
- La pestaña Log termina con `Run complete with status: success`
- La pestaña Input muestra `{}`
- La pestaña Output muestra `{ data: [ {...}]}`

## 3. Configura otro step para transformar los datos e importarlos a tu GoogleSheet {#3-configure-another-step-to-transform-the-data--import-your-googlesheet}

Crea una `Credential` nueva de Googlesheet con el correo de tu cuenta de Google.
(Asegúrate de que este usuario de Google tenga permiso de edición en la
GoogleSheet que quieres integrar).

:::info ¿No ves la opción de credencial de GoogleSheets?

Si el superusuario de tu instancia no configuró un cliente OAuth global, quizás
tengas que configurar uno tú. Consulta
[los clientes OAuth](/manage-projects/oauth.md#oauth-clients) y
[los detalles de un cliente de GoogleSheet](/adaptors/googlesheets#permissions-scopes).

:::

Para esta demostración, configuramos la Googlesheet
[así](https://docs.google.com/spreadsheets/d/1gT4cpHSDQp8A_JIX_5lqTLTwV0xBo_u8u3ZNWALmCLc/edit?usp=sharing)
para guardar los datos de `users`.

Crea un step nuevo con el adaptor `googlesheets` para cargar los datos de los
usuarios en tu GoogleSheet de destino. Configura el step con estas opciones:

- Name `Sync Users`
- Adaptor `googlesheets`
- Version: `2.2.2`
- Credentials: crea una credencial `GoogleSheet OAuth` nueva y guárdala
- Operaciones del step: en este job usaremos la operación `appendValues()` para
  agregar un array de filas a la hoja de cálculo. Asegúrate de cambiar el
  `spreadsheetId` por el ID de tu hoja de cálculo.

  ```js
  // Prepara el array con los datos de los usuarios
  fn(state => {
    const users = state.data.map(
      ({ id, name, username, address, phone, website, company }) => [
        id,
        name,
        username,
        address.city,
        phone,
        website,
        company.name,
      ]
    );

    return { ...state, users };
  });

  // Agrega los datos de los usuarios a la GoogleSheet
  appendValues({
    spreadsheetId: '1gT4cpHSDQp8A_JIX_5lqTLTwV0xBo_u8u3ZNWALmCLc',
    range: 'users!A1:G1',
    values: state => state.users,
  });
  ```

- Input - `Final output of Fetch Users`

Si ya ejecutaste el step `Fetch Users`, tendrás un input inicial para probar el
step `Sync Users`. Selecciona el input en el panel de input y haz clic en
`Create New Work Order` para ejecutar este step.

## 4. ¡Hora de probar! {#4-time-to-test}

1. Selecciona el step `Fetch Users` y ábrelo en el Inspector.
2. Crea un input nuevo vacío `{}`.
3. Haz clic en `Create New Work Order` para ejecutar el step.
4. Revisa los resultados en el panel `Output & Logs` y comprueba que los dos
   steps terminaron con el estado `success`.
5. Por último, revisa tu hoja de cálculo para ver los datos de usuarios
   sincronizados.

¿Te aparecen errores o no sabes cómo seguir? Consulta la documentación sobre
[workflows](/build/workflows.md) o sobre
[solución de problemas](/monitor-history/troubleshooting.md).

:::tip ¿No puedes avanzar? ¿Tienes preguntas?

Recuerda [ver el video](#video-walkthrough) o publicar en la
[comunidad](https://community.openfn.org) para pedir ayuda.

:::
