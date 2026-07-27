---
title: Handling Images
---

OpenFn jobs run in Javascript, and most commonly we're handling JSON data from
REST APIs or webhooks. We receive JSON, manipulate it with Javascript, then send
JSON to some other REST API. Sometimes, however, you need to work with images or
other binaries. This page explains how you do it.

:::success The tl;dr:

Images and other binaries mostly **_Just Work™️_**. Edges cases might need
additions to adaptors.

:::

:::info Advanced image manipulation

Need to resize, compress, strip embed EXIF metadata, or read metadata from an
image? Use the
[`image-utils` adaptor](https://docs.openfn.org/adaptors/packages/image-utils-docs),
which runs these operations natively in your job, no external microservice
required. See
[Image manipulation with the `image-utils` adaptor](#image-manipulation-with-the-image-utils-adaptor)
below for details.

- **No external binary access**: platform jobs still run in a sandboxed Node.js
  environment and cannot invoke external programs such as `imagemagick` or
  `ffmpeg`. The `image-utils` adaptor works entirely within the Node.js runtime,
  so it doesn't need them.
- **Large files**: Base64 significantly increases payload size, so avoid it for
  large files where possible; prefer working with Buffers (the default return
  format for `image-utils` operations).

:::

## Base64 (standard handling)

In essence, the way to deal with images/PDFs/other files and be able to save
them to `state` and pass them from step to step in an OpenFn workflow is to
encode them as base64 and then turn them back into Buffers before sending them
to a downstream system's API.

The HTTP adaptor already contains everything you need to do this. Check out:

1. [Request Options (`parseAs`)](https://docs.openfn.org/adaptors/packages/http-docs#requestoptions)
2. [Encode](https://docs.openfn.org/adaptors/packages/http-docs#util_encode) a
   given string into Base64 format.
3. [Decode](https://docs.openfn.org/adaptors/packages/http-docs#util_decode) a
   Base64 encoded string back to its original format.

## Adaptor Native Support

Some adaptors (DHIS2, FHIR-4, Sunbird-RC) have built in binary handling for
known image/file endpoints. When you request a file (and image, a PDF, etc.) the
response will be automatically converted to a base64 encoded string.

## Working with Buffers

You can also work directly with buffers in OpenFn job code via code like:

```js
fn(state => {
  const encoded = Buffer.from(state.data.myBase64string, 'base64');
  return { ...state, encodedImage };
});
```

or...

```js
fn(state => {
  const decoded = state.data.myBuffer.toString('base64');
  return { ...state, decoded };
});
```

## Image manipulation with the `image-utils` adaptor

For workflows that need to actually transform an image rather than just move it,
use the
[`image-utils` adaptor](https://docs.openfn.org/adaptors/packages/image-utils-docs).
It provides:

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

Each operation accepts a Base64 string or Buffer and writes its result to
`state.data` (typically as a `buffer`, with `parseAs: 'base64'` available where
you need a string instead).

See the
[`image-utils` adaptor documentation](https://docs.openfn.org/adaptors/packages/image-utils-docs)
for full details on each function's options and return values.

## Summary

Most use cases — fetching an image from one system and uploading it to another —
should **_Just Work ™️_**. For workflows that require transforming the image
itself (resize, compress, strip/embed EXIF data, or read metadata), use the
[`image-utils` adaptor](https://docs.openfn.org/adaptors/packages/image-utils-docs)
as described above.
