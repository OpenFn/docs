---
title: Desarrollar aplicaciones conectadas
sidebar_label: Crear API compatibles
translation_source_hash: e0d8e1d398d235e8cb533a3eb6d4f55280ad62d5
translation_review_status: machine
---

Esta sección es para ti si quieres crear una aplicación que se pueda conectar a
OpenFn, o ampliar una que ya tengas. Seguimos las pautas modernas de los
estándares web para las API JSON.

Para que tu aplicación sea un proveedor de datos (o "origen") para las
integraciones de OpenFn, te recomendamos mucho que crees un "servicio de
notificaciones" (a veces llamado "servicio de webhooks" o "API push basada en
eventos"). Es mejor que usar una API REST por dos motivos: (1) un servicio de
notificaciones permite a tus clientes configurar integraciones en tiempo real, y
(2) un servicio de notificaciones es más eficiente tanto para tus servidores
como para OpenFn: en lugar de hacer y atender solicitudes cada X segundos, tus
servidores y los de OpenFn solo trabajan cuando hay datos nuevos.

Para que tu aplicación sea un consumidor (o "destino") de OpenFn, debes tener
una API REST estándar basada en JSON o crear un language-package que cumpla las
especificaciones de tu API.

## Enviar datos a OpenFn {#sending-data-to-openfn}

Para enviar datos a OpenFn, tu aplicación debe poder hacer un POST por HTTPS a
una URL externa, con un objeto JSON válido como cuerpo. Mira este ejemplo con
cURL:

```sh
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Cache-Control: no-cache" \
  -d '{"foo":"bar", "baz":"qux"}' \
  "https://app.openfn.org/i/some-secret-inbox-uuid"
```

Si el POST se completa correctamente, OpenFn responde con un 200 y un objeto
JSON vacío. Un error 400 significa que la URL externa del usuario es incorrecta,
y un 500 significa que hay un error de la aplicación en OpenFn. Los errores 500
son poco frecuentes, pero pueden deberse a un JSON no válido en el cuerpo del
POST.

Si no puedes notificar a una URL externa cuando ocurre un evento, puedes
integrarte con OpenFn de todos modos si tienes una API REST basada en JSON. Los
usuarios de OpenFn pueden hacer solicitudes HTTP GET a tu aplicación y realizar
otras acciones según tu respuesta. Deberías permitir la autenticación básica o
por token, y responder con JSON a un GET válido. La respuesta no tiene que
seguir ningún formato concreto, porque los usuarios pueden procesarla como
quieran: extraer los datos que les interesan y luego hacer otras acciones con
ellos, como cargarlos en un sistema de destino. Consulta
[language-http](/adaptors/http) para ver cómo hacen los usuarios estas
solicitudes HTTP genéricas.

### Tamaño del payload {#payload-sizing}

Si usas la plataforma y no piensas contratar un plan empresarial, tendrás que
tener en cuenta el tamaño de los datos que envías en cada payload. El `state` de
un run suele estar limitado a `10MB`, así que deberías mantener tus payloads muy
por debajo de ese límite.

## Recibir datos de OpenFn {#receiving-data-from-openfn}

Para que los usuarios puedan conectarse fácilmente a tu aplicación, te
recomendamos mucho que crees un language-package con la autenticación que
necesitas y un conjunto de acciones sencillas y permitidas, bien abstraídas en
"funciones auxiliares". Consulta [language-dhis2](/adaptors/dhis2) para ver un
ejemplo de language-package que crea una interfaz más sencilla para una API REST
tradicional basada en JSON. Los adaptors se escriben en JavaScript y se ejecutan
en Node. Puedes convertir el JSON de OpenFn a XML, o a cualquier otro formato,
antes de enviarlo a tu aplicación, y puedes usar los módulos de Node que
quieras. Consulta [language-postgresql](/adaptors/postgresql) para ver un
ejemplo de adaptor que se conecta directamente a bases de datos PostgreSQL con
un módulo de NPM muy conocido llamado "pg".

Para recibir datos del adaptor genérico `language-http` de OpenFn, tu aplicación
debe permitir solicitudes POST, PUT o GET con autenticación básica, por token o
digest. (Aunque no es recomendable crear una API que exija solicitudes GET para
crear o actualizar datos.)
