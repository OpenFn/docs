---
sidebar_label: Job Writing Guide
title: Job Writing Guide
---

This guide will walk you through key concepts and best practices for job
writing.

It is suitable for new coders and experienced JavaScript programmers. In fact,
even if you're an experienced JavaScript developer, there are a number of key
patterns in the OpenFn ecosystem which it is important to learn.

:::tip

If you're writing jobs on the platform app (Lightning), you can use the
[AI Assistant](/documentation/build/ai-assistant) to help you. You'll find it in
the Inspector.

:::

A Job is a bunch of JavaScript code which performs a particular task, like
fetching data from Salesforce or converting some JSON data to FHIR standard.

Each Job uses exactly one Adaptor (often called a "connector") to perform its
task. The Adaptor provides a collection of helper functions (Operations) which
makes it easy to communicate with a data source.

This guide applies equally to writing Jobs on the app (Lightning) or through the
CLI.

:::info Workflows

Multiple jobs can be chained together in a Workflow. A common pattern is to use
one job to fetch data from datasource A, one job to convert or transform that
data to be compatible with datasource B, and a third job to upload the
transformed data to datasource B.

To learn more about workflow design and implementation, see
[Build & Manage Workflows](build/workflows.md)

:::

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

## The Lazy State Operator

:::tip Experimental Feature

The Lazy State operator is new to OpenFn as of April 2024. It is still
considered an experimental feature. But it works great, and we encourage you to
use it!

If you've got any feedback, issues or suggestions around the Lazy State
Operator, we'd love to hear from you on
[Community](https://community.openfn.org)! Or you can raise an issue on
[GitHub](https://github.com/openfn/kit/issues).

:::

The Lazy State Operator is a shorthand syntax that makes it easier to read state
when passing data into an operation.

Instead of writing `state.data` to access something on state, you can use `$`,
like this:

```js
get($.data.url);
```

The `$` ensures that the value passed to the operation will be resolved at the
correct time. Think of it like passing a path to some part of state, rather than
passing the value of that path.

What's nice about this is that you can basically ignore the previous section
entirely and not think too much about state evaluation. Just read from `$` like
your state object and the OpenFn runtime will resolve the value correctly at
run-time.

The `$` symbol is really just syntactic sugar for `(state) => state` (in most
cases, we just do a string replace when compiling your code). These two
statements behave in exactly the same way:

<!-- prettier-ignore -->
```js
get($.data.url);
get((state) => state.data.url);
```

We call it "lazy state" because the reference will be resolved by the runtime
engine immediately before its used. This bypasses a lot of the asynchronicity
problems of Javascript which are discussed in
[Reading State Lazily](#reading-state-lazily).

:::tip $ Only works within Operations

`$` only works when used inside an expression that's passed to an operation. In
other words, you can only use it when you could write `(state) => state` instead
(like the example above).

:::

### Usage Examples

The following short code snippets show some examples of how the Lazy State
Operator can be used. Each example can be re-written without `$`, but with it
the syntax is shorter, more readable and more expressive.

Basic usage is simply to pass state into an operation:

```js
upsert('patient', $.data.patients[0]);
```

You can use it inside an object (so long as that object is passed to an
operation):

```js
create('agent', {
  name: $.patient.name,
  country: $.patient.country,
});
```

You can use it inside a string template:

```js
get(`/patients/${$.patient.id}`);
```

Or inside other expressions, like concatenation:

```js
create({
  name: $.patients[0].first_name + ' ' + $.patients[0].last_name,
});
```

Or mathematics:

```js
create({
  profit: $.report.revenue - $.report.expenses,
});
```

You can use it when mapping data structures:

```js
create('user', {
  countryCode: countries[$.location.country],
});
```

And you can use it in nested operations like, with `each()`:

<!-- prettier-ignore -->
```js
each($.data.patients,
  post(`patients/${$.data.patient.id}`, $.data.patient)
);
```

### $ is not state

The `$` operator is **not** an alias for `state`.

It cannot be used in place of the `state` variable. It cannot be assigned to, or
be on the left hand side of an assignment, and can only be used inside an
argument to a function

This also means that Lazy State Operator can only be used to READ from state. It
cannot be used to assign to state directly.

These examples are all errors:

```js
❌ const url = $.data.url;
get(url);

❌ get(() => $.data.url);

❌ $.data.x = fn();

❌ fn(state => {
  $.data.x = 10;
});
```

<details>
<summary>Compilation rules for advanced users</summary>

How does the Lazy State Operator work? The "magic" is in the compiler.

Simply put, whenever the compiler sees `$` in your code, it replaces it with
`(state) => state`. Like this:

```
get($.data.url) // compiles to get((state) => state.data.url)
```

In practice, the rules are a little more complicated than that. When seeing a
`$` operator, the compiler will first check that `$` hasn't been declared as a
variable or parameter. If it has, it'll ignore it entirely.

But if the `$` is deemed to be a State Operator, the compiler will first replace
the `$` symbol with `state`, then find the operation which is being called, then
wrap the argument in an arrow function (if it isn't already).

```
get({ url: $.data.url }) // compiles to get((state) => { url: state.data.url })
```

This "hoisting" of the arrow function enables more complex and interesting
expressions to be used with lazy state, like templated string literals or
dynamic object lookups.

If you're curious (or need to troubleshoot something) you can use the
`openfn compile` command in the CLI to see the compiled code, which will tell
you how the compiler is treating your State operators.

</details>

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

## Mapping Objects

A common use-case in OpenFn fn is to map/convert/transform an object from system
A to the format of system B.

We often do this in multiple Jobs in the same workflow, so that we can use
different adaptors. But in this example we'll work with three operations in one
job with the http adaptor: one to fetch data, one to transform, and one to
upload:

```js
// Fetch an object from one system
get('https://www.system-a.com/api/patients/123');

// Transform it
fn(state => {
  // Read the data we fetched
  const obj = state.data;

  // convert it by mapping properties from one object to the o ther
  state.uploadData = {
    id: obj.id,
    name: `${obj.first_name} ${obj.last_name}`,
    metadata: obj.user_data,
  };

  // Don't forget to return state!
  return state;
});

// Post it elsewhere
post('https://system-b.com/api/v1/records/123', () => state.uploadData);
```

:::tip Batch conversions

These examples show a single object being converted - but sometimes we need to
convert many objects at once.

See the each() example below to see how we can do this with the each operator.

You can also use a Javascript map() or forEach() function inside a callback or
fn block.

Generally it's easier to spread your job logic across many top-level operations,
each responsible for one task, rather than having a few deeply nested
operations.

:::

This is fine - and actually, having lots of operations which each do a small
task is best practices. It makes code more readable and testable, as well as
easier to reason about and debug when things go wrong.

However, every operation argument accepts a function (allowing lazy state
references, as described above) giving us the opportunity to perform the
conversion in-line in the post operation, for example:

```js
// Fetch an object from one system
get('https://www.system-a.com/api/patients/123');

// Transform and post it elsewhere
post('https://system-b.com/api/v1/records/123', state => ({
  id: state.data.id,
  name: `${state.data.first_name} ${state.data.last_name}`,
  metadata: state.data.user_data,
}));
```

Effective use of these lazily-resolved functions is critical to writing good
OpenFn jobs.

## Iteration with each()

A very common use-case in data integration is to convert data from one format to
another. Usually this involves iterating over an array of items, converting the
values, and mapping them into a new array.

In OpenFn, we can use the `each()` operator to do this.

```js
each(
  '$.data.items[*]',
  get(state => `/patients/${state.data.id}`)
);
```

The `each()` operator takes a JSON path string as its first argument, which
points to some part of state. In JSON path, we use `$` to refer to the root, and
dot notation to chain a path, and `[*]` to "select" an array of items. The
second argument is an Operation, which will receive each item at the end of the
json path as `state.data`, but otherwise will receive the rest of the state
object.

So we can iterate over each item and write it back to state, like this:

```js
fn((state) => {
  // Initialize an array into state to use later
  state.transformed = []
  return state;
})
each("$.items[*]", fn(state) => {
  // Pull the next item off the state
  const next = state.data;

  // Transform it
  const transformed = { ...next };

  // Write it back to the top-level transformed array on state
  state.transformed.push(transformed)

  // Always return state
  return state;
})
```

Or we can pass in another operation, like this Salesforce example:

```js
each(
  '$.form.participants[*]',
  upsert('Person__c', 'Participant_PID__c', state => ({
    Participant_PID__c: state.pid,
    First_Name__c: state.participant_first_name,
    Surname__c: state.participant_surname,
  }))
);
```

Each participant is upserted into Salesforce, with its salesforce fields mapped
to values in the `participants` array.

:::info JSON paths

The use of a JSON path string as the first argument to `each()` allows the
runtime to lazily evaluate the value at that path -
[See Reading state lazily](#reading-state-lazily).

Not all operations support a JSON path string - refer to
[individual adaptor docs](/adaptors) for guidance.

:::

## Variable initialisation

<!--
  I'm a bit iffy on this because actually in v2 you can just do const result = [] at the top of your job

  Is the fn block really better practice?
-->

A common pattern is to need to declare some variables at the state of the job.
These could be static values to use later, functions to be called multiple times
through the job, or bits of state that we want to return at the end.

It is considered best practice to use an `fn()` block to do this at the start of
the job, creating custom properties on state, for example:

```js
fn(state => {
  // Create an array to hold the final results of the job
  state.results = [];

  // Create a lookup index to be used during the job
  state.lookup = {};

  state.keyMap = {
    AccountName: 'C__Acc_Name', // capture various static mappings for transformation
  };

  state.maxPageSize = 200; // Define some config options

  state.convertToSF = item => {
    /* ... */
  }; // A function to be re-used

  return state;
});

// the rest of your job code goes here
get('/abc');

fn(state => {
  /* ... */

  // Only return the results array as output from the job
  return { result: state.results };
});
```

## Using Cursors

Sometimes it is useful to maintain a rolling cursor position on the backend
datasource. This can be used in a cron-based workflow, for example, to query the
database for new records since the last run.

In a cron workflow, OpenFn will pass the previous state into the next state - so
state persists across runs. We can take advantage of that to pick up where we
left off.

You can use the [`cursor()`](/adaptors/packages/common-docs#cursor) operation,
which is built-in to most adaptors, to make cursor management easier.

<details>
<summary>Version support</summary>
The cursor operation was introduced to <code>@openfn/language-common</code> in version
<code>1.13.0</code> (released April 2024).
<br />
<br />
Any adaptor which uses common <code>1.12.0</code> or less will not support the
cursor operation. Consider updating to the latest adaptor version to take advantage
of this functionality.

</details>

### Setting the cursor value

To use a cursor from a fixed date, just add a line like this to the top of your
job:

```js
cursor('2024-04-08T12:00:00.0000');
```

Using a string value like this will set the cursor to _always_ use the date you
provided.

If you are using a date cursor, you can also pass in natural language strings
like "now", "today", "yesterday", "24 hours ago" or "start" (ie, the time the
job started).

:::tip Timezones

Relative dates like "today" will be converted into a Javascript Date using the
system locale.

If you're in the CLI that means times will be calculated in your local system
time; or if you're running on Lightning it'll use the Lightning system time
(usually UTC).

The cursor function will log the exact time, including the time zone, it is
using.

:::

To use a rolling or manual cursor, you should pass the cursor value from state.
You might want to include a default value too:

```js
cursor(state => state.cursor, { defaultValue: '2024-04-08T12:00:00.0000' });
```

### Using the cursor

To use the cursor in your job, just use `state.cursor` in your queries like any
other state property.

The usage will be different depending on the adaptor you're using. Here's how
you might build a URL with query parameters with the HTTP adaptor:

```js
get(state => `/registrations?since=${state.cursor}`);
fn(/* do something good with your data */);
```

This will read the cursor value off the state object, insert it into a string,
and pass it into a HTTP query.

Or perhaps you want to build the cursor into an object:

```js
get('registrations', state => {
  query: {
    fromdate: state.cursor;
  }
});
```

The actual value of a cursor is arbitrary. You can use a string, a Date, a page
number or object, or anything you like.

You may want to advance the cursor at the end of a job ready, for the next run:

```js
cursor(state => state.cursor, { defaultValue: 'today' });
get(`/registrations?since={date.cursor}`);
fn(/* do something good with your data */);
cursor('now');
```

### Manual Cursors

It's often useful to manually set the cursor position - usually when testing or
debugging. Maybe yesterday's run failed and you want to repeat it, or maybe
you're testing out some new functionality and you want to experiment with
different cursors.

You can do this by setting a cursor value on input state, like this:

```js
{
  "cursor": "today",
}
```

You can do this by triggering a manual run in the platform's
[Job Inspector](/documentation/build/steps/step-editor), or you can pass the
state as input to the CLI:

```bash
$ openfn job.js -s state.json -a http
```

<details>
<summary>Manual cursors on v1</summary>
Platform v1 does not allow input states to be freely defined, so setting a
manual cursor is a little more difficult.

You have to hard-code the manual cursor into the run so that the state cursor is
ignored:

```js
cursor('2024-03-12');
```

This line should be commented out in production runs.

Alternatively, you can use the defaultValue option. This will work so long you
run without any initial state:

```js
cursor(state => state.cursor, { defaultValue: '2024-03-12' });
```

</details>

### Cursor Options

The second argument to `cursor()` is an options object. You can use this to set
the `defaultValue` or the `key` the cursor should use (defaults to `cursor`)

```js
cursor(state => state.cursor, { defaultValue: '2024-03-12', key: 'page' });
```

### Formatting the value

If you're using a service which doesn't use standard date formats, or you wish
to map a number of input formats into a consistent standard, you can use the
`format` option.

`format` takes a function which accepts the current cursor value as an argument,
and returns a formatted or updated value. This is called just before the cursor
is assigned to state.

For example, to use a Javascript Date as your cursor:

```js
cursor('today', { format: c => new Date(c) });
```

The formatter will run after any natural-language processing, so you can
intercept and convert the value to whatever you need.

You can combine this with
[`dateFns.format`](https://date-fns.org/v3.6.0/docs/format) to use a custom
timestamp:

```js
cursor('today', { format: c => dateFns.format(new Date(c), 'dd/mm/yyyy') });
```

You can add as much logic as you wish to your formatter - it's just a regular
Javascript function

```js
cursor('today', {
  format: c => {
    if (typeof c === 'number') {
      return { page: c, count: 20 };
    }
    return c;
  },
});
```

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

If you want to reference any credential secrets in your job code, you can still
map keys from your `state.configuration`. See example below that will
dynamically map the username and password from your `configuration` (or
"credential" if using the app) into your http request body.

```js
post('/api/v1/auth/login', {
  body: {
    username: $.configuration.username, //map the UN from credential
    password: $.configuration.password, //map the PW from credential
  },
  headers: { 'content-type': 'application/json' },
});
```

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

Since the CLI version 1.16.1 and worker version 1.16.1, the compiler will
_ignore_ top-level objects inside variable declarations, like this:

```
const mapping = {
  // This will be ignored by the compiler!
}
fn(state => {
  // This will be compiled as usual
})
```

This can be a useful exploit - see
[Jobs are slow to compile](#jobs-are-slow-to-compile)

## Troubleshooting

### Jobs are slow to compile

For very large jobs (tens of thousands of lines), compilation can be a slow
process (several seconds), and can in some cases cause a Run to exceed its
allocated memory limit.

These kinds of jobs are very rare

The best solution is to use [Collections](/documentation/build/collections) to
load and manage your mappings. This keeps your job code shorter and more
maintainable, and also let you change mappings without touching your Workflows.

Alternatively, you can hoist the mapping object to the top level of your code,
where it will be ignored by the compiler.

Instead of this:

```
fn(state => {
  const mappings = {
    rw: 'rwanda',
    // +10k string: value pairings
  }

  // Job code might use the mappings like this
  const key = state.data.countryCode;
  const mappedValue = mappings[key];

  return state;
})
```

Do this:

```
const mappings = {
  rw: 'rwanda',
  // +10k string: value pairings
}

fn(state => {
  // Job code might use the mappings like this
  const key = state.data.countryCode;
  const mappedValue = mappings[key];

  return state;
})
```

## Next Steps

The best way to learn how to write OpenFn jobs is to write OpenFn jobs.

You can [get started with CLI](/documentation/cli) and start running jobs
locally. Then take a look at the [CLI Challenge](/documentation/cli-challenges)
to really exercise your job writing skills.

If you're ready to start using the app, take a look at this guide to
[create your first Workflow](/documentation/build/workflows).

Workflow design is a non-trivial problem, so you might also like to review the
Workflow [Design Process docs](/documentation/design/design-overview).

:::info Questions?

If you have any job-writing questions, ask on
[Community](https://community.openfn.org) to seek assistance from the OpenFn
core team and other implementers.

:::
