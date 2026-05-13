---
sidebar_label: Operations
title: Operations
---

Operations are Javascript functions exposed by an adaptor which are used in job
code to _do stuff_.

Operations are provided by an Adaptor (connector). Each adaptor exports a list
of functions designed to interact with a particular data source - for example,
take a look at the [dhis2](/adaptors/packages/dhis2-docs) and
[salesforce](/adaptors/packages/salesforce-docs) adaptors.

Everything you can achieve in OpenFn can be achieve with existing JavaScript
libraries or calls to REST APIs. The value of Adaptors is that they provide
functions to make this stuff easier: taking care of authorization, providing
cleaner syntax, and hiding away implementation details for you.

For example, here's how simply we issue a GET request with the http adaptor:

```js
get('/patients');
```

The first argument to `get` is the path to request from (the configuration will
tell the adaptor what base url to use). In this case we're passing a static
string, but we can also pass a value from state:

```js
get(state => state.endpoint);
```

<details>
<summary>Why the arrow function?</summary>
If you've got some JavaScript experience, you'll notice the example above uses an arrow function to retrieve the endpoint key from state.

But why not just do this?

```
get(state.endpoint);
```

Well, the problem is that the state value must be resolved lazily (ie, just
before the get actually runs). Because of how Javascript works, if we just
inline the value it might read before state.endpoint has been actually been
assigned.

For more details, jump ahead to [Reading State Lazily](#reading-state-lazily)

</details>

Your job code should only contain Operations at the top level/scope - you should
NOT include any other JavaScript statements. We'll talk about this more in a
minute.

## Operations run at the top level

Operations will only work when they are at the top level of your job code:

```js
get('/patients');
each('$.data.patients[*]', state => {
  item.id = `item-${index}`;
  return state;
});
post('/patients', dataValue('patients'));
```

OpenFn calls your operations in series during workflow execution, ensuring the
correct state is fed into each one.

If you try to nest an operation inside the callback of another operation, it
will fail:

```js
get('/patients', { headers: { 'content-type': 'application/json' } }, state => {
  // This will fail because it is nested in a callback
  each('$.data.patients[*]', (item, index) => {
    item.id = `item-${index}`;
  });
});
post('/patients', dataValue('patients'));
```

This is because an operation is a "factory" function — when executed, it returns
a new function that must be invoked with state. The OpenFn runtime handles this
correctly only at the top scope. Best practice is to build each discrete
operation of the pipeline at the top level, passing state between them
naturally.

If you ever absolutely need a nested operation, you can immediately invoke it
and pass state in directly — but this is an anti-pattern and should be avoided:

```js
get('/patients', { headers: { 'content-type': 'application/json' } }, state => {
  each('$.data.patients[*]', (item, index) => {
    item.id = `item-${index}`;
  })(state); // anti-pattern: immediately invoke and pass state
});
post('/patients', dataValue('patients'));
```

## Reading state lazily

A common problem when writing jobs is getting hold of the right state value at
the right time. Consider this code:

```js
get('/some-data');
post('/some-other-data', state.data);
```

The `state.data` in the `post` call will resolve to `undefined` and the post
will fail. This is because operations are factory functions — their parameters
are resolved when the module loads (before any operation has actually run), so
`state.data` hasn't been assigned a value yet by the time `post` reads it.

The fix is to pass a function instead of a value, so the evaluation is deferred
until the operation actually runs:

```js
get('/some-data');
post('/some-other-data', state => state.data);
```

When `post` executes, it resolves any function arguments by calling them with
the current state. This lazy evaluation pattern is fundamental to writing
correct OpenFn jobs. See also the
[Lazy State operator](./lazy-state-operator.md) for a shorthand syntax.

## Callbacks and fn()

:::caution

As of July 2024, callbacks are going to be phased out of the adaptor APIs. See
[Promise-like Operations](#promise-like-operations) for tips on how to use
callbacks with adaptors APIs that don't explicitly support them.

:::

Many Operations give you access to a callback function.

Callbacks will be invoked with state, will run whatever code you like, and must
return the next state. Usually your callback will be invoked as the very last
step in an operation.

This is useful for intercepting and manipulating the return value of a given
operation.

<details>
<summary>What is a callback?</summary>
A callback is a common pattern in JavaScript.

It's kind of hard to understand in the abstract: a callback is a function which
you pass into some other function, to be invoked by that function at a
particular time.

It's best explained with an example. All JavaScript arrays have a function
called `map`, which takes a single callback argument.

Array.map will iterate over every item in the array, invoke your callback
function with it, save the result to a new array, and when it's finished, it
will return that array.

```js
const array = ['a', 'b', 'c'];
const result = array.map(item => {
  return item.toUpperCase();
});
console.log(array); // ['a', 'b', 'c'];
console.log(result); // ['A', 'B', 'C'];
```

Because functions are data in JavaScript, we can we-write that code like this
(which might be a bit more readable)

```js
const array = ['a', 'b', 'c'];
const upperCase = item => {
  return item.toUpperCase();
};
const result = array.map(upperCase);
console.log(array); // ['a', 'b', 'c'];
console.log(result); // ['A', 'B', 'C'];
```

</details>

The `fn()` function, for example, ONLY allows you define a callback. This is
useful for running arbitrary code - if you want to drop down to raw JavaScript
mode, this is how you do it:

```js
fn(state => {
  // declare a help function
  const convertToFhir = item => {
    /* ... */
  };

  // Map data into a new format with native Javascript functions
  state.transformed = state.data.map(convertToFhir);

  // Always return the state
  return state;
});
```

Many other operations provide a callback argument, in which case, your callback
will be invoked with state, and most return the final state as a result of the
operation.

For example, say you fetch some data from a data source and get back a block of
JSON. Maybe you want to filter this data before passing it to the next
operation.

You might naively try something like this - but it won't work!

```js
get('/data'); // writes to state.data
state.data = state.data.filter(/* ... */); // This is invalid!
```

You could use another operation, like `fn` or `each` - and often these work
great!

```js
get('/data');
fn(state => {
  state.data = state.data.filter(/* ... */);
  return state;
});
```

But you can also use a callback function, which is usually a bit neater:

```js
get('/data', {}, state => {
  state.data = state.data.filter(/* ... */);
  return state;
});
```

Whatever your callback returns will be used as the input state for the next
operation (or will be the final state for the job). So remember to ALWAYS return
state!

Be mindful that some Adaptors will write internal information to state. So you
should usually `return { ... state }` rather than `return { data: state.data }`.

:::tip

Remember! Always return state from a callback.

:::

## Operations and Promises

:::tip

Promise support was added in July 2024 to `@openfn/compiler@0.2.0`. It is
available in the CLI from version 1.7.0 and the Lightning Worker from versison
1.4.0.

:::

Operations behave like Javascript Promises in that they have `.then()` and
`.catch()` functions. This is useful for creating your own callbacks and error
handling.

:::info Note for developers

Support for .then() is added by the compiler. Operations technically don't
return a Promise, they return a function, but the compiler will modify the job
code and wrap the operation in a deferred promise call.

:::

### Callback with then()

Chaining `then()` is available on every operation, and contains a callback to be
executed once the operation has completed.

The callback will receive the state returned by the operation, and must return
the state object to be passed to the _next_ operation.

For example:

```js
get($.data.url).then(state => {
  console.log(state);
  return state; // always remember to return state!
});
```

If you're familiar with the callback pattern in our adaptors, `.then()` performs
exactly the same job as a callback. It gives you the opportunity to transform
the state returned by some operation.

Usually, you don't need a callback or a `.then()` - you can just execute
operations serially. The following code is functionally the same as the prior
example:

```js
get($.data.url);
fn(state => {
  console.log(state);
  return state; // always remember to return state!
});
```

Where `.then()` is particularly useful is when composing operations with _scoped
state_, like with `each()`:

```js
each($.items, post(`patient/${$.data.id}`, $.data));
```

:::tip

You can read more about the `each()` operation in
[Iteration with Each](#iteration-with-each).

:::

The `each` function will take an array and, for each item, invoke a callback
with a scoped state. This means it takes your state object and sets the item
under iteration to `state.data`. In other words, `state.data` inside the
callback is _scoped_ to each item in the array.

```js
each($.items, state => {
  console.log(state.data); // each item in the items array
  console.log(state.index); // the current index of iteration
  return state;
});
```

So in the example above, every item in `state.items` will be passed to a HTTP
`post()` function, where the id will be embedded in a URL and the item itself
will be uploaded to the server.

What if you want to do something with the scoped state AFTER the request? Maybe
you want to check the status code and log an error, or maybe you want to mutate
the data before writing it back to state.

You can chain `operation().then()` for this:

```js
each(
  $.items,
  post(`patient/${$.data.id}`, $.data).then(state => {
    state.completed.push(state.data);
    return state;
  })
);
```

Now this expression will:

- Iterate over each item in `state.items`
- Call the post operation with scoped state (ie, the item in `state.data`)
- Once the post is complete, pass the result as scoped state into the `.then()`
  callback

### Error handling with catch()

Most adaptors will throw an error when something goes wrong, which may result in
the job (and maybe even workflow) ending early.

Because every operation has a `catch()`, you have the opportunity in your job
code to intercept and even suppress the error.

```js
get('patients').catch((error, state) => {
  state.error = error;
  return state;
});
```

The error callback is passed two arguments: the error thrown by the adaptor, and
the state object.

If you want to continue execution, you should return the state object from the
catch. This state will then be passed into the next operation.

If you _do_ want to terminate execution, perhaps with some logging for debugging
or with a different error, you should throw from inside the catch handler.

```js
get('patients').catch((error, state) => {
  console.log('Error ocurred faithing patients', error);
  throw error;
});
```
