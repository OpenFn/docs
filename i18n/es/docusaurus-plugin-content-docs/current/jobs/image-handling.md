---
title: Manejo de imágenes
translation_source_hash: 0edbfa9276676e40ecf010f6dd237f915e249426
translation_review_status: machine
---

Los jobs de OpenFn se ejecutan en JavaScript y, en la mayoría de los casos,
manejan datos JSON de API REST o de webhooks. Recibimos JSON, lo transformamos
con JavaScript y luego lo enviamos a otra API REST. Sin embargo, a veces
necesitas trabajar con imágenes u otros archivos binarios. En esta página te
explicamos cómo hacerlo.

:::success En resumen:

Las imágenes y otros archivos binarios, en general, **_simplemente
funcionan™️_**. Los casos poco comunes podrían requerir cambios en los adaptors.

:::

:::info Manipulación avanzada de imágenes

¿Necesitas cambiar el tamaño de una imagen, comprimirla, quitarle o agregarle
metadatos EXIF, o leer sus metadatos? Usa el
[adaptor `image-utils`](/adaptors/packages/image-utils-docs), que ejecuta estas
operaciones de forma nativa en tu job, sin necesidad de un microservicio
externo. Consulta
[Manipulación de imágenes con el adaptor `image-utils`](#image-manipulation-with-the-image-utils-adaptor)
más abajo para ver los detalles.

- **Sin acceso a binarios externos**: los jobs de la plataforma siguen
  ejecutándose en un entorno aislado de Node.js y no pueden invocar programas
  externos como `imagemagick` o `ffmpeg`. El adaptor `image-utils` funciona
  completamente dentro del entorno de ejecución de Node.js, así que no los
  necesita.
- **Archivos grandes**: Base64 aumenta mucho el tamaño del payload, así que
  evítalo con archivos grandes siempre que puedas. Es mejor trabajar con Buffers
  (el formato que devuelven por defecto las operaciones de `image-utils`).

:::

## Base64 (manejo estándar) {#base64-standard-handling}

En esencia, para trabajar con imágenes, PDF u otros archivos, guardarlos en
`state` y pasarlos de un step a otro en un workflow de OpenFn, hay que
codificarlos en base64 y luego volver a convertirlos en Buffers antes de
enviarlos a la API de un sistema de destino.

El adaptor HTTP ya tiene todo lo que necesitas para hacerlo. Consulta:

1. [Opciones de solicitud (`parseAs`)](/adaptors/packages/http-docs#requestoptions)
2. [Codificar](/adaptors/packages/http-docs#util_encode) una cadena en formato
   Base64.
3. [Decodificar](/adaptors/packages/http-docs#util_decode) una cadena codificada
   en Base64 para devolverla a su formato original.

## Compatibilidad nativa en los adaptors {#adaptor-native-support}

Algunos adaptors (DHIS2, FHIR-4, Sunbird-RC) manejan binarios de forma integrada
en endpoints conocidos de imágenes o archivos. Cuando solicitas un archivo (una
imagen, un PDF, etc.), la respuesta se convierte automáticamente en una cadena
codificada en base64.

## Trabajar con Buffers {#working-with-buffers}

También puedes trabajar directamente con buffers en el código de un job de
OpenFn, con código como este:

```js
fn(state => {
  const encoded = Buffer.from(state.data.myBase64string, 'base64');
  return { ...state, encodedImage };
});
```

o bien:

```js
fn(state => {
  const decoded = state.data.myBuffer.toString('base64');
  return { ...state, decoded };
});
```

## Manipulación de imágenes con el adaptor `image-utils` {#image-manipulation-with-the-image-utils-adaptor}

En los workflows que necesitan transformar una imagen, y no solo moverla, usa el
[adaptor `image-utils`](/adaptors/packages/image-utils-docs). Ofrece:

```js
// resize an image to given `width`/`height` dimensions.
resize(state.data.buffer, { width: 1200, height: 1600 });
// reduce image quality/file size until it meets a target `maxBytes`, down to a `minQuality` floor.
compress(state.data.buffer, { maxBytes: 700 * 1024, minQuality: 20 });
// remove all EXIF metadata from an image.
stripMetadata($.data.photoBase64);
// write EXIF key-value pairs (e.g. `UserComment`) into a JPEG.
embedMetadata($.data.buffer, { UserComment: 'patient-id=42' });
// read an image's dimensions, orientation, size, and EXIF data without modifying it.
metadata($.data.photoBase64);
```

Cada operación acepta una cadena Base64 o un Buffer y escribe su resultado en
`state.data` (normalmente como `buffer`; si necesitas una cadena, en algunos
casos tienes disponible `parseAs: 'base64'`).

Consulta la
[documentación del adaptor `image-utils`](/adaptors/packages/image-utils-docs)
para ver todos los detalles sobre las opciones y los valores que devuelve cada
función.

## Resumen {#summary}

La mayoría de los casos de uso, como obtener una imagen de un sistema y subirla
a otro, deberían **_simplemente funcionar™️_**. En los workflows que necesitan
transformar la propia imagen (cambiar su tamaño, comprimirla, quitarle o
agregarle datos EXIF, o leer sus metadatos), usa el
[adaptor `image-utils`](/adaptors/packages/image-utils-docs) como se describe
más arriba.
