---
sidebar_label: Compilation
title: Compilation
---


## Compilation

The code you write isn't technically executable JavaScript. You can't just run
it through node.js. It needs to be transformed or compiled into portable vanilla
JS code.

:::warning

This is advanced stuff more focused at JavaScript developers and the technically
curious. These docs are not intended to be complete - just a nudge in the right
direction to help understand how jobs work.

:::

The major differences between OpenFn code and JavaScript are:

- The top-level functions in the code are executed synchronously (in sequence),
  even if they contain asynchronous code.
- OpenFn code does not contain import statements (although technically it can).
  These are compiled in.
- Compiled code is a JavaScript ESM module which default-exports an array of
  async functions. These functions are imported and executed by the runtime.

It shouldn't be necessary to understand compilation in detail, but you should be
aware that the code you write is not the code you run.

If you're a JavaScript developer, understanding some of these changes might help
you better understand how OpenFn works. Using the CLI, you can run
`openfn compile path/to/job.ja -a <adaptor-name>` to see compiled code.

Here's an example of how a simple job looks in compilation:

This job:

```js
get('/patients');
```

Compiles to this JavaScript module:

```js
import { get } from '@openfn/language-http';
export * from '@openfn/language-http';
export default [get('/patients')];
```
