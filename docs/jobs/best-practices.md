---
sidebar_label: Best Practices
title: Best Practices
---

## Referencing credential secrets in your job code

If you must reference credential secrets in your job code, you can map keys from
your `state.configuration`. The example below dynamically maps the username and
password from your `state.configuration` (or "credential" if using the app) into your
http request body.

```js
post(
  '/api/v1/auth/login',
  {
    username: $.configuration.username, //map the UN from credential
    password: $.configuration.password, //map the PW from credential
  },
  { headers: { 'content-type': 'application/json' } }
);
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

