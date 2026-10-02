---
title: Credenciales
translation_source_hash: 5b3d2b9a4a5e7e4ec6cae6b4870ae4a718dfc5fb
translation_review_status: machine
---

Las credenciales sirven para autorizar conexiones con sistemas externos. Algunos
adaptors usan credenciales para obtener metadatos de las aplicaciones de origen
y de destino, lo que facilita escribir jobs.

Los valores de una credencial solo los puede ver o editar un único usuario: su
"propietario" (el usuario que creó esa credencial). Todos los colaboradores de
un proyecto pueden elegir entre todas las credenciales del proyecto al definir
un job.

![Página de credenciales](/img/settings_credentials.webp)

### Crear una credencial nueva {#create-a-new-credential}

Puedes crear una credencial nueva mientras configuras un step nuevo en tu
workflow, o desde la página Settings > Credentials.
[Lee esta guía](/manage-projects/manage-credentials.md) para saber más sobre
cómo gestionar credenciales.

### Entender las credenciales de cada aplicación {#understand-the-app-specific-credentials}

Consulta la página de [documentación de adaptors](/adaptors) dedicada a tu
aplicación para revisar el `configuration schema` y ver qué datos de la
credencial se necesitan para autenticarte en tu aplicación (por ejemplo,
`username`, `api_key`).

Si tu aplicación no aparece en la sección de adaptors, revisa la documentación
de su API para ver qué se necesita para la "autenticación". Luego puedes crear
en OpenFn una credencial `Raw JSON` para definir los datos de credencial que
hagan falta. Por ejemplo:

```json
{
  "apiKey": "someSecretKey",
  "baseUrl": "https://example.com/api/v2"
}
```

Ten en cuenta que algunos sistemas (Salesforce, OpenMRS, DHIS2) requieren un
instanceUrl, host o ApiUrl. Aunque la mayoría de los adaptors manejan bien una
"barra final" en una URL, si tienes dudas, es mejor no ponerla. Por ejemplo:

- prefiere `https://login.salesforce.com` a `https://login.salesforce.com/`,
- usa `http://demo.openmrs.org/openmrs` en lugar de
  `http://demo.openmrs.org/openmrs/`,
- y escribe `https://play.dhis2.org` en vez de `https://play.dhis2.org/`.

### Usar credenciales OAuth2 {#use-oauth2-credentials}

Si en tu instancia de OpenFn se configuraron _clientes_ OAuth2, puedes usarlos
para crear credenciales OAuth:

1. Primero, elige un tipo de credencial OAuth en la interfaz "New Credential".
2. Luego, ponle un nombre.
3. Opcionalmente, selecciona los "scopes" adicionales que quieras usar. (Según
   la aplicación que uses, consulta el enlace a la documentación del tercero
   sobre scopes que aparece en la aplicación).
4. Por último, haz clic en "Sign in with \_\_\_\_\_\_".

La aplicación del tercero te pedirá que verifiques tu identidad y que confirmes
que quieres usar OAuth. Cuando aceptes, de vuelta en OpenFn podrás guardar y
usar tu nueva credencial como cualquier otra.

:::tip

Si usas una instancia desplegada de OpenFn y no encuentras el tipo de credencial
OAuth para tu aplicación, contacta al superusuario responsable de configurar tu
instancia y pídele que configure clientes OAuth para tu aplicación. Si usas la
plataforma SaaS alojada de OpenFn, puedes publicar en
[community.openfn.org](https://community.openfn.org) o escribir a
[support@openfn.org](mailto:support@openfn.org).

:::

#### Por ejemplo: credencial OAuth de Google Sheets {#eg-googlesheets-oauth-credential}

Observa que la credencial selecciona solo los scopes necesarios para Google
Sheets.

![Credencial OAuth de Google Sheets](/img/gsheets-oauth2.webp)

#### Por ejemplo: credencial OAuth de Salesforce {#eg-salesforce-oauth-credential}

Observa que puedes elegir a qué scopes acceder en Salesforce.

![Credencial OAuth de Salesforce](/img/salesforce-oauth2.webp)

:::tip

Consulta la página de [documentación de adaptors](/adaptors) de tu aplicación
para ver indicaciones sobre sus credenciales.

:::

### Crear un "usuario de integración" dedicado para tu workflow de OpenFn {#creating-a-dedicated-integration-user-for-your-openfn-workflow}

Para que los sistemas de destino sean lo más seguros y controlados posible,
recomendamos que las credenciales que se usan en la integración tengan acceso
solo por API a la aplicación de destino.

_Puedes_ usar tu usuario personal como credencial de OpenFn para tu workflow,
pero recomendamos crear un usuario de integración "OpenFn" dedicado o un usuario
de cuenta de servicio para acceder a tus aplicaciones de destino. Por ejemplo,
en [Salesforce](/adaptors/salesforce#salesforce-credentials) puedes crear un
usuario solo de API con un tipo de licencia especial solo de API para realizar
tareas automatizadas e integraciones sin necesitar acceso completo de usuario.
Para las API de Google, como
[Google Sheets](/adaptors/googlesheets#using-a-google-service-account), lo
recomendable para los workflows automatizados es una cuenta de servicio de
Google.

Puede que no todos los sistemas de destino ofrezcan usuarios solo de API, pero
muchos permiten crear roles de usuario con permisos de acceso solo por API, y es
posible que te dejen definir a qué API o endpoints pueden acceder los usuarios.
Incluso cuando el sistema de destino no ofrece un usuario solo de API, las
buenas prácticas indican usar un usuario de integración o de servicio para todas
las tareas de automatización, para mantener un registro de auditoría seguro.

El acceso solo por API reduce el riesgo de filtraciones de datos porque:

- **Garantiza la trazabilidad**: acceder con un usuario de integración deja un
  registro de auditoría de quién inició sesión, cuándo y qué cambios hizo. Por
  ejemplo, si usaras tu usuario personal para un sistema en una implementación
  de integración, sería difícil saber si fuiste TÚ, una persona, quien hizo un
  cambio, o si fue una acción automatizada del sistema a través del usuario de
  API.

- **Minimiza el impacto de una filtración**: si el usuario se ve comprometido,
  se puede desactivar, y el inicio de sesión en el frontend con la credencial de
  API filtrada se bloquea automáticamente, lo que limita los vectores de ataque.

- **Aplica el principio de mínimo privilegio**: cada usuario de integración solo
  necesita acceso al subconjunto de datos que requiere su caso de uso
  específico.

Consulta la documentación sobre
[buenas prácticas de seguridad](/get-started/security.md) para saber más.
