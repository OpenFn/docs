---
title: Gestionar credenciales
translation_source_hash: 7eb4c7e31c608628f42b86d45097f9e1d16c88d0
translation_review_status: machine
---

Puedes ver las credenciales relacionadas con un proyecto en la página
`Settings > Credentials` del proyecto. En este artículo aprenderás a gestionar
las credenciales relacionadas con un proyecto.

## Ver todas las credenciales del proyecto {#view-all-project-credentials}

En la página `Credentials` puedes ver una lista de todas las credenciales, con
su nombre, tipo y propietario, y si son para un entorno de producción.

![Resumen de credenciales](/img/lightning_credentials_overview.webp)

:::info Ver los secretos de las credenciales

Todos los colaboradores del proyecto pueden ver el nombre, el tipo y el
propietario de una credencial, pero solo su propietario puede ver los secretos
(nombre de usuario, contraseña, etc.).

:::

## Crear una credencial nueva {#create-a-new-credential}

1. Haz clic en el botón `New Credential` y elige el tipo de aplicación que
   quieres conectar.
2. Si tu aplicación no aparece en la lista, elige "Raw JSON" para crear tu
   propia credencial personalizada o entrada de "configuración". Por ejemplo:

```json
{ "loginUrl": "https://random-app.com", "username": "test", "password": "pwd" }
```

![Tipo de credencial](/img/lightning_choose_cred_type.webp)

3. Haz clic en `Configure Credentials` y agrega los datos de autenticación de tu
   aplicación. El formulario de la credencial indica qué campos son
   obligatorios.

![Agregar credencial](/img/lightning_add_cred.webp)

:::tip ¿No sabes cómo completar todos los datos de la credencial?

Si al crear una credencial nueva no sabes qué piden algunos campos (por ejemplo,
"security token"), ve a la página de documentación del [adaptor](/adaptors)
correspondiente para saber más y consulta su "configuration schema", o pregunta
en la [comunidad](https://community.openfn.org).

:::

4. Haz clic en `Save` y la verás en la lista de tu página `Credentials`. Ya
   puedes usarla en todo el proyecto al crear y ejecutar workflows.

![Credencial nueva lista](/img/lightning_new_cred_ready.webp)

## Credenciales de Keychain (autenticación variable) {#keychain-credentials-variable-auth}

Las credenciales de Keychain permiten que un mismo job use varias credenciales.

Funcionan inspeccionando los datos del state del job en tiempo de ejecución (es
decir, state.data) y buscando el valor de un identificador predeterminado. Según
ese valor, presente en los datos de un mensaje de origen concreto, por ejemplo,
se selecciona y se aplica otra credencial para ese run del job.

Imagina que tienes 2 credenciales en tu proyecto:

1. Taylor’s Login, External ID: abc123, Body:
   `{ username: “tay”, password: “shhhhh” }`

2. Roina’s Login, External ID: def456, Body:
   `{ username: “ro”, password: “veryshh” }`

Y un job que usa una "Keychain Credential" con la ruta `$.data.myId`.

Si un job de tu workflow usa la "Keychain Credential" y el dataclip inicial de
un run es así:

```json
{
  "data": {
    "content": "Hello world",
    "myId": "abc123"
  }
}
```

La credencial de Keychain buscará abc123 en las credenciales de tu proyecto y le
pasará esos secretos al mismo job. Es decir, el job se ejecutará con la
credencial "Taylor’s Login".

Si se ejecuta otro run y su dataclip inicial es:

```json
{
  "data": {
    "content": "Goodbye!",
    "myId": "def456"
  }
}
```

El mismo job se ejecutará con la credencial "Roina’s Login".

:::info Notas y limitaciones

Como los secretos de las credenciales se obtienen al inicio de un run (no al
inicio de un step), actualmente no es posible resolver credenciales de Keychain
a partir de datos que se agregan al state más adelante en el run. Es decir, los
datos tienen que estar en el dataclip de entrada de todo el run, no en el
dataclip de entrada del step que usa la credencial de Keychain.

:::

### Crear una credencial de Keychain {#create-a-keychain-credential}

1. En la página `Credentials` de la configuración del proyecto, haz clic en el
   ícono desplegable del botón `Add New` y selecciona la opción Keychain:

   ![](/img/keychain_credential_dropdown.webp)

2. Ponle un nombre a tu credencial de Keychain y asígnale una expresión
   JSONPath. También puedes seleccionar una credencial predeterminada para usar
   cuando la expresión JSONPath no encuentre coincidencias:

   ![](/img/keychain_modal.webp)

3. Asigna un ID externo al que pueda acceder tu Keychain, creando una credencial
   nueva o editando una existente:

   ![](/img/assign_externalID.webp)

4. Ahora, en un job de tu workflow, puedes seleccionar y usar una credencial de
   Keychain:

   ![](/img/keychain_selection.webp)

5. Ya puedes hacer referencia a tu Keychain en tu entrada para usarla:

   ![](/img/keychain_input.webp)

## Compartir credenciales {#share-credentials}

Si eres propietario de una credencial, puedes elegir qué proyectos tienen acceso
a ella. Para actualizar los proyectos con los que compartes tu credencial, sigue
los pasos de la
[página de documentación de credenciales de usuario](/manage-users/user-credentials.md).

## Credenciales `Raw JSON` {#raw-json-credentials}

Las credenciales raw son documentos JSON válidos que se pasan al state del job
en tiempo de ejecución. Ten en cuenta que los propietarios de estas credenciales
pueden verlas completas y sin cifrar.

Las credenciales raw funcionan con cualquier adaptor, siempre que la credencial
especifique las claves de `configuration` que ese adaptor exige (por ejemplo,
`baseUrl`). Consulta la documentación del "configuration schema" de cada adaptor
para ver qué se necesita para esa aplicación.

:::info Usa `Raw JSON` para entradas personalizadas en la credencial

Usa el tipo de credencial `Raw JSON` si quieres guardar secretos que no son
entradas estándar del formulario de credencial de un adaptor. Por ejemplo, si tu
API REST necesita un `client_id` en lugar de un `username`, tu esquema de
`configuration` podría parecerse al fragmento de código de abajo. Como
`client_id` no es una opción del formulario de credencial `Http` predeterminado,
puedes crear tu propia credencial personalizada con el tipo `Raw JSON`.

:::

Ejemplo del cuerpo o `configuration` de una credencial Raw JSON:

```json
{
  "baseUrl": "https://myapp.com/api",
  "client_id": "test-j01",
  "password": "testing123",
  "customInput": "whateverYouWant"
}
```

## Seguridad de las credenciales {#credentials-security}

Todas las credenciales se guardan cifradas en reposo, y solo sus propietarios
pueden ver los secretos. Consulta la
[documentación de seguridad](/get-started/security-compliance.md) de OpenFn para
más información.
