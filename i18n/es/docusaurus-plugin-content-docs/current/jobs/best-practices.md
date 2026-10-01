---
sidebar_label: Buenas prácticas
title: Buenas prácticas
translation_source_hash: 2b213c173bb8185ac3a204f6a237b0b17e1e5811
translation_review_status: machine
---

## Usar secretos de credenciales en el código del job {#referencing-credential-secrets-in-your-job-code}

Si tienes que usar secretos de credenciales en el código del job, puedes mapear
claves desde tu `state.configuration`. El ejemplo de abajo mapea de forma
dinámica el usuario y la contraseña de tu `state.configuration` (o de la
"credencial", si usas la app) al cuerpo de tu solicitud HTTP.

```js
post('/api/v1/auth/login', {
  body: {
    username: $.configuration.username, //map the UN from credential
    password: $.configuration.password, //map the PW from credential
  },
  headers: { 'content-type': 'application/json' },
});
```

> **Nota:** Aunque la mayoría de los adaptors manejan la autenticación de forma
> automática, el adaptor `@openfn/language-common` permite manejarla a mano.

**Enfoque recomendado:** en lugar de acceder a las credenciales desde el código
del job, deberías:

1. Usar un step con un adaptor específico (por ejemplo, `@openfn/language-http`)
   que tenga su propia credencial para la autenticación.
2. Agregar después un step con `@openfn/language-common` si necesitas
   transformar más los datos.

:::info OpenFn elimina la configuración y las funciones del state final

OpenFn elimina automáticamente la clave `configuration` y cualquier función de
tu state final, y también de los logs si ejecutas workflows en la app. Así ayuda
a mantener seguros los secretos de tus credenciales y a evitar que se filtren en
History.

:::

<!--
I would like to include this BUT fields is not an operation and so works a bit differently

## Object assembly with fields()

Another common pattern is to have to transform one object to another.

The `fields()` operator is a convenient way to do this. `fields()` will assemble an object based on the keys and values you provide. It composes well with other operations.
-->

## Manejo de errores {#error-handling}

Si algo sale mal, normalmente lo mejor es dejar que tus jobs fallen.

Un job que falla genera el estado correcto en la app de OpenFn y avisa de que
algo anda mal.

No te preocupes, ¡los errores pasan todo el tiempo! Incluso los workflows más
consolidados lanzan algún error de vez en cuando por datos inesperados en algún
punto del proceso. Es parte de la vida; lo más importante es enterarse.

Los errores deberían lanzarse desde el job sin mucha ceremonia: el runtime los
atrapa y los procesa como corresponde.

Si un job lanza un error, este se registra en el log y se escribe en el state
final, así que debería ser fácil encontrarlo e identificar la causa.

En un workflow, es habitual dejar que un job falle y luego hacer alguna tarea,
como enviar un correo a un administrador del sistema para avisarle del problema.

Al procesar lotes de datos, quizás quieras atrapar los errores de cada elemento
y escribirlos en el state. Así, un elemento con problemas no arruina todo el
lote, y sabes qué elementos funcionaron y cuáles fallaron. Después puedes lanzar
una excepción para indicar que el job falló.
