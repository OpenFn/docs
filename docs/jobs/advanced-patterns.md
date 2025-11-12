---
sidebar_label: Advanced Patterns
title: Advanced Patterns
---

## Cleaning final state

When your job has completed, the final state object will be "returned" by the
openfn runtime.

This final state must be serialisable to JSON.

If there are more steps in the workflow, the state will be passed to those
steps. If running on the app (Lightning), the final state will be saved as a
dataclip. Or if running in the CLI, the final state will be written to disk.

It's often desirable to clean up your final state so that any unused information
is removed. This reduces the size of your saved data, but could also be an
important security consideration.

The best practice is to use a closing `fn()` block which returns just the keys
you need:

```js
fn(state => {
  return {
    data: state.data,
  };
});
```

You could use the spread operator to override some keys:

```js
fn(state => {
  return {
    ...state,
    secretStuff: null,
  };
});
```

Or use the _rest_ operator:

```js
fn(state => {
  const { username, password, secrets, ...rest } = state;
  return rest;
});
```

## Referencing credential secrets in your job code

:::danger This is NOT a recommended practice

**You should NOT reference credential secrets directly in your job code.** This
pattern is considered a bad practice and should only be used as a last resort
when you cannot separate your workflow into two steps (e.g., one HTTP step
followed by one common adaptor step).

**Only use the approach below if you cannot separate your workflow into multiple
steps**

:::

If you must reference credential secrets in your job code, you can map keys from
your `state.configuration`. The example below dynamically maps the username and
password from your `configuration` (or "credential" if using the app) into your
http request body.

```js
post('/api/v1/auth/login', {
  body: {
    username: $.configuration.username, //map the UN from credential
    password: $.configuration.password, //map the PW from credential
  },
  headers: { 'content-type': 'application/json' },
});
```

> **Note:** While most adaptors handles authentication automatically, The
> `@openfn/language-common` adaptor allows manual authentication handling.

**Recommended approach:** Instead of accessing credentials in your job code, you
should:

1. Use a dedicated adaptor step (e.g., `@openfn/language-http`) with its own
   credential for authentication
2. Follow up with a `@openfn/language-common` step if you need additional data
   transformation

:::info OpenFn scrubs Configuration & Functions from final state

OpenFn will automatically scrub the `configuration` key and any functions from
your final state, as well as from logs if running workflows on the app. This is
to help ensure that your credential secrets are kept secure and won't be leaked
into History.

:::

<!--
I would like to include this BUT fields is not an operation and so works a bit differently

## Object assembly with fields()

Another common pattern is to have to transform one object to another.

The `fields()` operator is a convenient way to do this. `fields()` will assemble an object based on the keys and values you provide. It composes well with other operations.
-->

## Error Handling

If something goes wrong, it's usually best to let your jobs fail.

Failing jobs will generate the right status on the OpenFn app and communicate
that something is wrong.

Don't worry, errors happen all the time! Even well established workflows will
occasionally throw an error because of some unexpected data somewhere in the
pipeline. It's a fact of life, but the most important thing is to be aware of
it.

Errors should be thrown from the job without much ceremony, and will be caught
by the runtime to be processed appropriately.

If a Job does throw an error, it will be logged and written to the final state,
so it should be easy to find and identify the cause.

It is common practice in a Workflow to let a Job error, and then perform some
task - like emailing a system admin that there was a problem.

When processing batches of data, you might want to catch errors occurring on
individual items and write them to state. That way one bad item won't ruin a
whole batch, and you know which items succeeded and which failed. You can then
throw an exception to recognise that the job has failed.

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
