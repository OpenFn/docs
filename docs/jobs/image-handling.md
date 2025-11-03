---
title: Handling Images
---

OpenFn jobs run in Javascript, and most commonly we're handling JSON data from
REST APIs or webhooks. We receive JSON, manipulate it with Javascript, then send
JSON to some other REST API. Sometimes, however, you need to work with images or
other binaries. This page explains how you do it.

:::success The tl;dr:

Images and other binaries mostly **_Just Work™️_**. Edges cases might
need additions to adaptors.

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

## Summary

Most use cases should **_Just Work ™️_**. If you have a specific need involving
large file sizes or high volumes and you need to process images, rather than
just moving them from place to place, you might need to make a change to your
adaptor.
