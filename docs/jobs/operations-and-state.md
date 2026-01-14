---
sidebar_label: Operations and State
title: Operations and State
---

## Operations and State

Every job is a data transformation pipeline.

It takes some input (a JavaScript object we call State) and executes a set of
Operations (or functions), which transform that state in series (ie, one after
the other). The final state object is returned as the output of the pipeline.

![Job Pipeline](/img/guide-job-pipeline.webp)

Operations are provided by an Adaptor (connector). Each adaptor exports a list
of functions designed to interact with a particular data source - for example,
take a look at the [dhis2](/adaptors/packages/dhis2-docs) and
[salesforce](/adaptors/packages/salesforce-docs) adaptors.

Everything you can achieve in OpenFn can be achieve with existing JavaScript
libraries or calls to REST APIs. The value of Adaptors is that they provide
functions to make this stuff easier: taking care of authorisation, providing
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

Operations will only work when they are at the top level of your job code, like
this:

```js
get('/patients');
each('$.data.patients[*]', state => {
  item.id = `item-${index}`;
  return state;
});
post('/patients', dataValue('patients'));
```

OpenFn will call your operations in series during workflow execution, ensuring
the correct state is fed into each one.

If you try to nest an operation inside the callback of another operation, you'll
quickly run into trouble:

```js
get('/patients', { headers: { 'content-type': 'application/json' } }, state => {
  // This will fail because it is nested in a callback
  each('$.data.patients[*]', (item, index) => {
    item.id = `item-${index}`;
  });
});
post('/patients', dataValue('patients'));
```

This is because an operation is actually a "factory" style function - when
executed, it returns a new function. That new function must be invoked with
state, and will return state.

<details>
<summary>What is a factory function?</summary>
Factory functions are can be a difficult pattern to understand deeply. However, like many programming concepts, it makes more sense after some hands-on experience. Luckily, you don't need to deeply understand the pattern to understand OpenFn.

Simply put, a factory function doesn't really do anything when executed. It
simply returns a function to do something later.

Factory functions are useful for deferred execution (declaring behaviour NOW to
run LATER), lazy loading (fetching data from a server at the last moment, just
before you need it), constructor functions (for instantiating classes into
objects), and scope binding (for trapping local variables in a scope and
re-using them later).

They're used in OpenFn for deferred execution. Our runtime converts each factory
into an actual function, saves all the functions into an array, and calls them
sequentially, passing in the latest state object to each one.

</details>

The OpenFn runtime knows how to handle an operation at the top scope, it can run
it as part of the pipeline and handle state appropriately. However, the runtime
does not know how to deal with a nested operation like above.

Best practices dictate you should build each discrete operation of the pipeline
at the top-level, passing state between them naturally via the pipeline. This
means you should never need to nest an operation. However, if you ever find
yourself in a situation where you absolutely need to use a nested operation, you
should pass state into it directly, for example:

```js
get('/patients', { headers: { 'content-type': 'application/json' } }, state => {
  each('$.data.patients[*]', (item, index) => {
    item.id = `item-${index}`;
  })(state); // Immediately invoke the Operation and pass state into it. This is naughty!
});
post('/patients', dataValue('patients'));
```

To be clear, this is considered an anti-pattern and should not be used except in
emergencies.

## Reading state lazily

A common problem in OpenFn coding is getting hold of the right state value at
the right time.

Consider this code:

```js
get('/some-data');
post('/some-other-data', state.data);
```

The code attempts to call the GET method on some REST API service, save the
result to `state.data`, and then pass that `state.data` value into a post call
to send it somewhere else.

Can you see the problem?

The value of `state.data` in the post call will resolve to `undefined` and so
the post will fail.

This is because Operations are
[factory functions](#operations-run-at-the-top-level) (See:
`What is a factory function?` above). They declare behaviour to be executed
later, and provide parameters to calibrate that behaviour. But they don't
actually go off and do the work immediately.

Those parameters will be resolved to values when the module loads (load-time),
before any code has run (run-time), and before `state.data` has been assigned a
value.

<details>
<summary>More details about job execution and parameter resolution</summary>
Let's try to explain a bit more about what's happening.

When your job runs, it will be evaluated in a Javascript engine and follow the
usual rules of Javsacript. That is to say: each statement will be executed in
sequence (forget about asynchronous functions for a moment!).

The first statement, `get('/some-data)`, calls OpenFn's `get` function and
passes it a string. `get` then returns another function which will be executed
later.

The second statement, `post('/some-other-data', state.data)` does something
similar. It calls the `post` function, passing in a string and whatever sits on
`state.data`, and returns a function to be executed later. But the two arguments
have already been resolved to values.

Calling an operation is a bit like declaring a contract: you specify what you
want to happen, and in what order, and what the terms of the contact are. Then
OpenFn will go off and fulfill the terms of that contract for you.

The problem is that when you specify the terms of the contract, you don't have
all the values to hand. We don't know what `state.data` is yet. So we need to
say "WHEN you run this function, check the value of `state.data`, and use
whatever it says".

"WHEN you run this function" is the key portion: how do we ensure that the value
of `state.data` is resolved at the right time? JavaScript itself isn't built to
do that - it'll just return the value when we read it (and remember, we read it
at load-time, not at run-time).

There are two good JavaScript-y solutions to the problem:

1. Pass a string which represents a path on state, and resolve that path inside
   the actual function when it runs.
2. Pass a function (or a Promise) which returns some value from state, and call
   that function inside the actual function when it runs.

Mostly our adaptors support the second pattern. In fact, if you look in some of
our
[adaptor source code](https://github.com/OpenFn/adaptors/blob/1fdca7d130146a0c7acbb870ec2902d6e8063dc2/packages/mailchimp/src/Adaptor.js#L357),
you'll see that the first thing we do is to "expand references" - that means
look at the arguments, see if any of them are functions (or contain) functions,
and "expand" them by calling the functions and saving out the values.

This whole Lazy State discussion is about defining a bunch of behaviours NOW,
but reading data values LATER.

</details>

In other words, by the time the post operation is created and we read from
`state.data`, all we've done is _create_ the `get` function - we haven't
actually _run_ it.

What we need to do is _defer_ the evaluation of `state.data` until the `get`
function has finished and the `post` operation actually runs.

There are a few ways we can do that (including the new
[Lazy State operator](#the-lazy-state-operator), see below). Some jobs use
`dataValue`, which is neat if a bit verbose (there are many examples in this
guide), and some operations support JSON path strings. The preferred way in
modern OpenFn is to use an inline-function:

<!-- prettier-ignore -->
```js
get('/some-data');
post('/some-other-data', (state) => state.data);
```

This passes a _function_ into the `post` operator, instead of a value

When the `post()` call actually executes, the first thing it'll do is resolve
any function into arguments into values. It does this by calling the function,
passing in the latest state, and using the return as the value.

These lazy functions are incredibly powerful. Using them effectively is the key
to writing good OpenFn jobs.
