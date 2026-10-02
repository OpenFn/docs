---
title: Canales
sidebar_label: Canales
translation_source_hash: 5d829d4c4243d09a5e89ee9020f2bd22c3a73921
translation_review_status: machine
---

Los canales convierten OpenFn en un **proxy inverso**: un intermediario seguro
entre dos sistemas. En lugar de conectar una aplicación cliente directamente a
un servicio de destino, el cliente envía sus solicitudes a OpenFn, y OpenFn las
reenvía, se encarga de la autenticación y registra cada solicitud en el camino.

```
Mobile App  →  OpenFn Channel  →  Health Registry
(client)       (the middleman)    (destination)
```

Obtienes visibilidad inmediata de todo lo que pasa por el canal, sin escribir
código de workflows. A diferencia de los workflows, los canales son un simple
_paso directo_: OpenFn no transforma los datos, sino que los enruta, los protege
y los observa.

Los canales están pensados para organizaciones que necesitan una capa de proxy
para la seguridad, la observabilidad y el control de acceso en sus intercambios
de datos, como los intercambios de información de salud que históricamente han
usado una herramienta independiente como OpenHIM para este fin. Los canales
ofrecen esa funcionalidad básica de proxy inverso de forma nativa dentro de
OpenFn.

:::tip Funcionalidad experimental

Los canales son actualmente una funcionalidad experimental. Para usarlos, activa
**Experimental Features** en la página de tu
[perfil de usuario](/manage-users/user-profile.md). Si no ves el elemento
`Channels` en la barra lateral de tu proyecto, el motivo es esta opción.

:::

## Cómo funciona {#how-it-works}

Cuando un cliente envía una solicitud HTTP a la URL de proxy de tu canal,
OpenFn:

1. Recibe la solicitud en `/channels/{channel-id}/{path}`
2. Busca el canal y comprueba que esté activado
3. Autentica al cliente, si hay credenciales de cliente configuradas
4. Reenvía la solicitud a `{destination-url}/{path}`, conservando el método, el
   cuerpo, los encabezados y los parámetros de consulta
5. Agrega los encabezados `x-forwarded-for`, `x-forwarded-host`,
   `x-forwarded-proto` y `x-request-id` para que el destino pueda rastrear la
   solicitud
6. Adjunta un encabezado `Authorization` para el destino, si hay una credencial
   de destino configurada
7. Devuelve la respuesta del destino directamente al cliente, en streaming
8. Registra la solicitud en `History` → `Channel Logs`

Se admiten todos los métodos HTTP estándar: `GET`, `POST`, `PUT`, `PATCH`,
`DELETE` y otros.

Por seguridad, OpenFn nunca reenvía cookies al destino, y las credenciales que
el cliente usó para autenticarse _ante OpenFn_ (el encabezado `Authorization`
para Basic Auth, o el encabezado `x-api-key` para las claves de API) se eliminan
antes de pasar la solicitud.

## Antes de empezar {#before-you-start}

Necesitas:

- La opción **Experimental Features** activada en tu perfil de usuario
- Un **proyecto** en el que tengas el
  [rol](/manage-projects/user-roles-permissions.md) `Owner`, `Admin` o `Editor`
  (los usuarios con rol Viewer pueden ver los canales y sus logs, pero no pueden
  crearlos ni modificarlos)
- La **URL del servicio de destino** al que quieres hacer de proxy (una API
  pública como `https://hacker-news.firebaseio.com/v0` funciona muy bien para
  hacer pruebas)

## Paso 1: configura las credenciales (opcional) {#step-1-set-up-credentials-optional}

Los canales usan dos tipos de credenciales, y ambos son opcionales:

- Las **credenciales de cliente** controlan quién puede enviar solicitudes _a tu
  canal_. Son los mismos
  [métodos de autenticación de webhooks](/manage-projects/webhook-auth.md) que
  se usan para proteger los triggers webhook (Basic HTTP Authentication o API
  Key Authentication) y se gestionan en `Webhook Security`, en la configuración
  de tu proyecto.
- Una **credencial de destino** es la forma en que OpenFn se autentica _ante el
  servicio de destino_. Es una [credencial de proyecto](/build/credentials.md)
  normal, y OpenFn la usa para construir el encabezado `Authorization` en cada
  solicitud reenviada. Actualmente, los canales admiten estos tipos de
  credenciales:

| Tipo de credencial | Encabezado que se envía al destino                  |
| ------------------ | --------------------------------------------------- |
| HTTP               | Token `Bearer`, o Basic Auth (usuario y contraseña) |
| DHIS2              | `ApiToken`, o Basic Auth (usuario y contraseña)     |
| OAuth              | Token `Bearer`, que OpenFn renueva automáticamente  |

:::tip

Si solo quieres hacer pruebas con un endpoint público, sáltate este paso por
completo: no necesitas credenciales.

:::

## Paso 2: crea un canal {#step-2-create-a-channel}

1. Ve a tu proyecto
2. Haz clic en `Channels` en la barra lateral izquierda
3. Haz clic en `New Channel`
4. Completa el formulario:

| Campo                  | Qué poner                                                                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                   | Un nombre para identificar este canal (debe ser único dentro del proyecto)                                                                                                              |
| Enabled                | Debe estar activado para que el canal acepte solicitudes                                                                                                                                |
| Destination URL        | La URL base del servicio al que OpenFn reenviará las solicitudes                                                                                                                        |
| Destination Credential | Cómo se autentica OpenFn ante el servicio de destino (déjalo en `None` si el destino es público)                                                                                        |
| Client Credentials     | Marca los métodos de autenticación de webhooks que los clientes pueden usar para acceder a este canal (déjalos sin marcar para permitir solicitudes sin autenticar durante las pruebas) |

5. Haz clic en `Save`

Una vez guardado, tu canal aparece en la lista de canales con su **URL de
proxy**. Haz clic en la URL para copiarla al portapapeles. Tiene este aspecto:

```
https://your-openfn-instance.com/channels/{channel-id}
```

## Paso 3: envía una solicitud a través del canal {#step-3-send-a-request-through-the-channel}

Envía una solicitud HTTP a la URL de proxy de tu canal y agrega al final la ruta
del destino a la que quieras llegar:

```
https://your-openfn-instance.com/channels/{channel-id}/{path}
```

OpenFn la reenvía a `{destination-url}/{path}`.

### Ejemplo con curl {#example-using-curl}

Supongamos que la URL de destino de tu canal es
`https://hacker-news.firebaseio.com/v0`. Para obtener una noticia de Hacker News
a través de tu canal:

```bash
curl https://app.openfn.org/channels/{channel-id}/item/8863.json
```

OpenFn recibe la solicitud, la reenvía a
`https://hacker-news.firebaseio.com/v0/item/8863.json` y te devuelve la
respuesta.

### Más ejemplos {#more-examples}

**POST con un cuerpo:**

```bash
curl -X POST https://app.openfn.org/channels/{channel-id}/patients \
  -H "Content-Type: application/json" \
  -d '{"patient_id": "123", "status": "admitted"}'
```

**Con parámetros de consulta:**

```bash
curl "https://app.openfn.org/channels/{channel-id}/patients?status=admitted"
```

**Con una credencial de cliente** (si configuraste una):

```bash
# Basic Auth
curl -u username:password https://app.openfn.org/channels/{channel-id}/patients

# API key
curl -H "x-api-key: your-api-key" https://app.openfn.org/channels/{channel-id}/patients
```

## Paso 4: consulta los logs {#step-4-view-the-logs}

Cada solicitud que pasa por un canal queda registrada.

1. Ve a la página `History` de tu proyecto
2. Haz clic en la pestaña `Channel Logs`
3. Verás cada solicitud en la lista, con su Request ID, la ruta de la solicitud,
   el nombre del canal, la hora de inicio, el estado y el mensaje de error, si
   lo hay

Haz clic en una solicitud para abrir su página de detalle completa, que muestra
los encabezados y una vista previa del cuerpo de la solicitud y de la respuesta,
la información de tiempos y la configuración que tenía el canal cuando se hizo
la solicitud. Los encabezados sensibles (como `Authorization`) aparecen ocultos
en los logs.

Cada solicitud tiene uno de estos estados:

| Estado  | Significado                                                               |
| ------- | ------------------------------------------------------------------------- |
| Pending | La solicitud todavía está en curso                                        |
| Success | El destino respondió con un código de estado `2xx`                        |
| Failed  | El destino respondió con un código de estado `4xx` o `5xx`                |
| Timeout | El destino no respondió a tiempo                                          |
| Error   | No se pudo completar la solicitud (por ejemplo, por un error de conexión) |

Si tienes varios canales, usa el filtro **Channel** para limitar la lista a un
solo canal. También puedes ir directamente a los logs filtrados de un canal
haciendo clic en su cantidad de **Requests** o en su **Last Activity** en la
página Channels.

:::info

Que se guarden o no los payloads de las solicitudes y las respuestas depende de
la configuración de [Data Storage](/manage-projects/io-data-storage.md) de tu
proyecto. Si tu proyecto no guarda los datos de entrada y salida, los metadatos
de las solicitudes del canal se siguen registrando, pero los payloads se borran.

:::

## Consideraciones de seguridad {#security-considerations}

- El endpoint del proxy es **accesible públicamente**. Si no hay credenciales de
  cliente configuradas, cualquiera que conozca la URL del canal puede enviar
  solicitudes a través de él. Configura siempre credenciales de cliente para los
  canales de producción.
- Al cambiar un canal a **deshabilitado**, deja de aceptar solicitudes de
  inmediato (los clientes reciben un `404`).
- Cada solicitud se registra junto con una instantánea de la configuración que
  tenía el canal en ese momento, así que tienes un registro de auditoría incluso
  después de que el canal cambie.
- Un canal con historial de solicitudes no se puede eliminar, porque hay que
  conservar su historial; deshabilítalo en su lugar.

## Limitaciones {#limitations}

- Los canales solo hacen de proxy para tráfico HTTP(S); no se admite el paso
  directo de TCP sin procesar ni de TLS
- La ruta de la solicitud se reenvía tal cual; no se admite transformar la ruta
- No se admite la auditoría ATNA

## Solución de problemas {#troubleshooting}

| Problema                                              | Causa probable                                                                           | Solución                                                                                                     |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `404` en la URL del canal                             | El canal está deshabilitado, o el ID del canal es incorrecto                             | Comprueba que el canal esté habilitado y que el ID coincida                                                  |
| `401` en la URL del canal                             | Hay credenciales de cliente configuradas y tu solicitud no coincide con ninguna          | Envía las credenciales correctas con tu solicitud, o desmarca las credenciales de cliente para hacer pruebas |
| `502` en la URL del canal                             | OpenFn no pudo usar la credencial de destino (por ejemplo, hay que volver a autorizarla) | Revisa la credencial de destino y el mensaje de error en `Channel Logs`                                      |
| La solicitud pasa, pero el destino devuelve un error  | La URL de destino o la ruta es incorrecta                                                | Revisa bien la URL de destino y la ruta que agregas al final                                                 |
| No aparece el elemento `Channels` en la barra lateral | La opción Experimental Features está desactivada                                         | Habilita `Experimental Features` en tu perfil de usuario                                                     |

## Referencia rápida {#quick-reference}

| Qué                           | Dónde encontrarlo                                                 |
| ----------------------------- | ----------------------------------------------------------------- |
| Crear y gestionar canales     | `Project` → `Channels`                                            |
| URL de proxy                  | Haz clic para copiarla desde la lista de canales, o abre el canal |
| Patrón del endpoint del proxy | `https://{instance}/channels/{channel-id}/{path}`                 |
| Ver los logs                  | `Project` → `History` → pestaña `Channel Logs`                    |
| Logs filtrados de un canal    | Haz clic en la cantidad de `Requests` en la página Channels       |
| Credenciales de cliente       | `Project Settings` → `Webhook Security`                           |
| Credenciales de destino       | `Project Settings` → `Credentials`                                |
