---
title: Autenticación OAuth
sidebar_label: Autenticación OAuth
slug: /oauth
translation_source_hash: 1db156d8415788d53449388418ee834ee5a733c2
translation_review_status: machine
---

Algunas aplicaciones exigen [OAuth](https://oauth.net/2/) como método de
autenticación para conectarse con aplicaciones de terceros y hacer solicitudes a
través de sus API. OpenFn te permite conectarte con aplicaciones mediante su
autenticación OAuth. Para usar esta funcionalidad en tus workflows de OpenFn,
tienes que configurar clientes y credenciales OAuth para tus instancias o
proyectos. Esta guía te explica cómo gestionar los clientes y las credenciales
OAuth.

## Clientes OAuth {#oauth-clients}

### ¿Qué es un cliente OAuth y cuándo lo necesito? {#what-is-an-oauth-client-and-when-do-i-need-it}

Al configurar OAuth para una aplicación, autorizas a OpenFn a conectarse e
interactuar con esa aplicación dentro de un conjunto de permisos (scopes) que tú
defines. Por ejemplo, podrías configurar una autorización OAuth para que OpenFn
se conecte a tu cuenta de Google Sheets y lea y siga los cambios en tu nombre.
En este ejemplo, tienes que configurar un cliente de OpenFn que represente una
instancia de OpenFn en Google y que reúna todos los permisos que OpenFn necesita
en tu nombre. Todas las solicitudes y respuestas de la API pasan por el cliente
de OpenFn y se autorizan con un token de autorización que guarda el cliente.

En la mayoría de los casos basta con configurar un cliente por aplicación, pero
según los requisitos del proyecto y las políticas de la organización, puede
haber varios clientes configurados para una misma aplicación. Estos clientes
pueden pertenecer al mismo usuario de OpenFn o a usuarios distintos, y pueden
estar disponibles para proyectos distintos.

Por cada aplicación que necesites conectar a OpenFn, tienes que configurar al
menos un cliente para tus proyectos.

Los clientes OAuth se pueden configurar en la
[página de credenciales del proyecto](/manage-projects/manage-credentials.md) o
en la [página de credenciales del usuario](/manage-users/user-credentials.md).

### Crear un cliente OAuth {#creating-an-oauth-client}

Si todavía no tienes un cliente OAuth configurado para tu proyecto, verás una
sección vacía con un botón que te invita a crear un cliente, como se muestra a
continuación.

![Nuevo cliente](/img/create_new_oauth_client.webp)

Si no, verás la lista de clientes OAuth a los que tienes acceso. Para crear un
cliente nuevo, haz clic en el botón `Add new` y selecciona
`OAuth client [Advanced]` en el menú desplegable.

![Menú desplegable de OAuth](/img/oauth_dropdown.webp)

:::tip

Asegúrate de agregar https://app.openfn.org/authenticate/callback como URL de
callback de la aplicación cuando actives la autenticación OAuth en la aplicación
de terceros. (Nota: si no usas app.openfn.org, reemplaza
`https://app.openfn.org/` por la URL base de _tu_ despliegue de OpenFn).

Para ver indicaciones específicas de cada aplicación (por ejemplo, cómo
configurar un cliente OAuth [para Google Sheets](/adaptors/googlesheets)),
consulta la [documentación del adaptor](/adaptors) correspondiente.

:::

### Compartir clientes OAuth {#sharing-oauth-clients}

Un superusuario puede compartir clientes OAuth con proyectos de dos formas:

1. Hacer que un cliente sea global
2. Compartirlo con proyectos concretos

Puede hacerlo en la ventana modal de configuración del cliente OAuth, al crear
el cliente o al editarlo.

![Editar cliente OAuth](/img/oauth_client_edit.webp)

### Hacer que los clientes OAuth sean globales {#making-oauth-clients-global}

Cuando un cliente OAuth es global, los usuarios de la instancia pueden acceder a
él y crear credenciales a partir de él.

Para que un cliente sea global, baja hasta la sección `Manage Project Access` de
la ventana modal de configuración del cliente OAuth, marca la casilla
`Make client global (allow any project in this instance to use this client)` y
guarda los cambios. Todos los proyectos de la instancia tendrán acceso al
cliente, y los usuarios con rol Owner, Admin o Editor en esos proyectos podrán
crear credenciales a partir de él.

![Acceso de proyectos al cliente OAuth](/img/manage_project_access.webp)

### Compartir clientes OAuth con proyectos {#sharing-oauth-clients-with-projects}

Para compartir un cliente OAuth con proyectos concretos, baja hasta la sección
`Manage Project Access` de la ventana modal de configuración del cliente OAuth.
Abre el menú desplegable de proyectos, selecciona un proyecto y haz clic en el
botón para agregarlo y darle acceso al cliente.

![Compartir cliente OAuth](/img/share_oauth_client.webp)

## Credenciales OAuth {#oauth-credentials}

### Crear una credencial a partir de un cliente OAuth {#creating-a-credential-from-an-oauth-client}

Cada cliente necesita un token de autenticación para autenticar las solicitudes
que se hacen a la aplicación en nombre del usuario. En OpenFn, estos tokens se
crean como credenciales y se asocian a los clientes.

1. Para crear una credencial a partir de un cliente OAuth, haz clic en el botón
   "Add new" y selecciona `Credential` en el menú desplegable, o haz clic en el
   botón `create a new credential`.

![Nueva credencial](/img/oauth_dropdown.webp)

![Crear nueva credencial](/img/create_new_cred.webp)

2. Luego, en la ventana modal de tipo de credencial, busca y selecciona el
   cliente OAuth que quieres usar para crear la credencial OAuth. Se abrirá una
   nueva ventana modal para que configures la credencial con el nombre, los
   permisos (scopes) necesarios y la versión de la API.
3. Cuando hayas completado el formulario, haz clic en el botón
   `Sign in with [your OAuth Client name]` para autorizar el cliente OAuth. Este
   botón abre una nueva pestaña para que le concedas a OpenFn un token de
   autorización con el que autenticar tus solicitudes.

:::note

Después de iniciar sesión, tendrás que darle acceso a OpenFn haciendo clic en
`Allow` en la ventana modal de permisos. Ten en cuenta que esto puede verse
distinto según la aplicación, pero el objetivo es darle permiso a OpenFn para
realizar ciertas acciones en la aplicación en tu nombre. El usuario que
autentica los clientes OAuth debería tener los permisos necesarios en la
aplicación.

:::

### Eliminar clientes y credenciales {#deleting-clients-and-credentials}

Para eliminar una credencial o un cliente, haz clic en `Delete`.

![Editar cliente OAuth](/img/oauth_client_edit.webp)

Aparece un mensaje para que confirmes la acción.

En cuanto confirmes que quieres eliminar una credencial, recibirás un correo
electrónico que te avisa de que la credencial quedó programada para eliminarse.

La fecha de eliminación depende de un periodo de gracia que configura el
administrador de tu instancia. En la
[instancia alojada de OpenFn](https://app.openfn.org/), la credencial se elimina
de forma permanente al cabo de 7 días.

### Más sobre la gestión de credenciales {#more-on-managing-credentials}

Consulta la documentación sobre
[cómo gestionar las credenciales de usuario](/manage-users/user-credentials.md)
para saber más sobre la gestión de credenciales de las aplicaciones que integras
con OpenFn.

### Ejemplo de configuración de un cliente OAuth {#example-oauth-client-configuration}
