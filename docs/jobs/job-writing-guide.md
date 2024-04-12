---
sidebar_label: Job Writing Guide
title: Job Writing Guide
---

Workflow automation and data integration in OpenFn is realised through the
creation of Jobs.

This guide will walk you through key concepts and best practices for job
writing. It is suitable for new coders and experienced JavaScript programmers.
In fact, even if you're an experienced JavaScript Developer, there a number of
key patterns in the OpenFn ecosystem which it is important to learn.

A Job is a bunch of JavaScript code which performs a particular task, like
fetching data from Salesforce or converting some JSON data to FHIR standard.

Each job uses exactly one Adaptor (often called a "connector") to perform its
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
take a look at the [dhis2](adaptors/packages/dhis2-docs) and
[salesforce](adaptors/packages/salesforce-docs) adaptors.

Everything you can achieve in OpenFn can be achieve with existing JavaScript
libraries or calls to REST APIs. The value of Adaptors is that they provide
functions to make this stuff easier: taking care of authoristaion, providing
cleaner syntax, and hiding away implementation details for you.

For example, here's how we issue a GET request with the http adaptor:

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
If you've got some JavaScript experience, you'll notice The example above uses an arrow function to retreive the endpoint key from state.

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

  // Map data into a new format with native Javsacript functions
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
each('$.data.patients[*]', (item, index) => {
  item.id = `item-${index}`;
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
Factory functions are quite a hard pattern to understand, although you get used it.

Luckily, you don't really need to understand the pattern to understand openfn.

Simply put, a factory function doesn't really do anything. It instead returns a
function to do something.

Factory functions are useful for deferred execution, lazy loading, constructor
functions, and scope binding.

They're used by us in open function for deferred execution: our runtime converts
each factory into an actual operation function, saves all the functions into an
array, then iterates over each one and passes in state.

</details>

The OpenFn runtime knows how to handle an operation at the top scope, it can run
it as part of the pipeline and handle state appropriately. But it does not know
how to deal with a nested operation like this.

You should actually never need to nest an operation anyway. Just bring it to the
top level and lean in to the pipeline idea. But if you ever find yourself in a
situation where you absolutely need to use a nested operation, you should pass
state into it directly, like this:

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

What it's trying to do is call the GET method on some REST service, save the
result to `state.data`, and then pass that `state.data` value into a post call
to send it somewhere else.

Can you see the problem?

It happens all the time.

Because of the way JavaScript works, `state.data` will be evaluated before the
`get()` request has finished. So the post will always receive a value of
`undefined`.

<!--
Ok wise guy, how are we gonna explain this?
It's something to do with factories, and closures, and synchronous execution.
What's the simplest explanation though?
-->
<details>
<summary>Okay, how <i>does</i> JavaScript work?</summary>
JavaScript, like most languages, will evaluate synchronously, executing code line of code one at a time.

Because each Operation is actually a factory function, it will execute instantly
and return a function - but that function won't actually be executed yet.

The returned function will have the original arguments in scope (trapped as
closures), and be executed later against the latest state object.

The example above will synchronously create two functions, which are added into
an array by the compiler (see bellow), and then excuted by the runtime.

So when your code executes, it's doing something like this:

```js
const getFn = get('/some-data');
const postFn = post('/some-data', state.data);

return getFn(state).then(nextState => postFn(nextState));
```

The point is that when the post operation is created, all we've done is _create_
the `get` function - we haven't actually _run_ it. And so state.data is
basically uninitialised.

</details>

What we actually need to do is defer the evaluation of `state.data` until the
`post` operation actually runs. In other words, we work out the value of
`state.data` at last possible moment.

There are a few ways we can do that. Some jobs use `dataValue`, which is neat if
a bit verbose (there are many examples in this guide), and some operations
support JSON path strings. The preferred way in modern OpenFn is to use an
inline-function:

```js
get('/some-data');
post('/some-other-data', state => state.data);
```

This passes a function into the `post` operator. When the `post()` call actually
executes, the first thing it'll do is resolve any function into arguments into
values. It does this by calling the function passing in the latest state, and
using the return as the value.

These lazy functions are incredibly powerful. Using them effectively is the key
to writing good OpenFn jobs.

## The Lazy State Operator

The Lazy State Operator makes it easier to read from state.

:::tip Experimental Feature

The Lazy State operator is new to OpenFn since April 2024. It is still
considered an experimental feature. But it works great, and we encourage you to
use it!

If you've got any feedback, issues or suggestions around the Lazy State
Operator, we'd love to hear from you on community! Or you can raise an issue on
GitHub. :::

Instead of writing `state.data` to access something on state, you can use the
State Operator, `$`, like this:

```js
get($.data.url);
```

If you use the Lazy State Operator, you don't need to think about lazy
references, arrow functions or JSON paths. Just read from `$` like your state
object and the OpenFn runtime will resolve the value correctly at run-time.

The `$` symbol is really just syntactic sugar for `(state) => state` (in most
cases, we just do a string replace when compiling your code). These two
statements behave in exactly the same way:

```js
get($.data.url);
get(state => state.data.url);
```

You can use the Lazy State operator when passing an argument to any operation:

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

And you can use it when mapping datastructures:

```js
create('user', {
  countryCode: countries[$.location.country],
});
```

:::warning $ is not state

The `$` operator is not an alias for `state`.

It cannot be used in place of the `state` variable. It cannot be assigned to, or
be on the left hand side of an assignment, and can only be used inside an
arugment to a function

Tihs also means that Lazy State Operator can only be used to READ from state. It
cannot be used to assign to state directly.

These examples are all errors:

```
const url = $.data.url
get(url)

get(() => $.data.url)

$.data.x = fn();

fn((state) => {
  $.data.x = 10;
})
```

:::

<details>
<summary>Compliation rules for advanced users</summary>

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
task is usually considered a good thing. It makes code more readable and easier
to reason about when things go wrong.

But every operation argument accepts a function (allowing lazy state references,
as described above). This gives us the opportunity to the conversion in-line in
the post operation:

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

A typical use-case in data integration in particular is to convert data from one
format to another. Usually this involves iterating over an array of items,
converting the values, and mapping them into a new array.

In OpenFn, we can use the `each()` operator to do this.

```js
each(
  '$.data.items[*]',
  get(state => `/patients/${state.data.id}`)
);
```

`each()` takes a JSON path string as its first argument, which points to some
part of state. In JSON path, we use `$` to refer to the root, and dot notation
to chain a path, and `[*]` to "select" an array of items.

The second argument is an Operation, which will receive each item at the end of
the json path as `state.data`, but otherwise will receive the rest of the state
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
the job, writing all values to state.

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

The best way to do this is with a closing `fn()` block which returns just the
keys you want (this is usually best):

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

Or use the rest operator:

```js
fn(state => {
  const { usename, password, secrets, ...rest } = state;
  return rest;
});
```

:::info Configuration & Functions

OpenFn will automatically scrub the `configuration` key and any functions from
your final state.

:::

<!--
I would like to include this BUT fields is not an operation and so works a bit differently

## Object assembly with fields()

Another common pattern is to have to transform one object to another.

The `fields()` operator is a conveient way to do this. `fields()` will assemble an object based on the keys and values you provide. It composes well witth other operations.
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

When processing batches of data, you might want to catch errors occuring on
individual items and write them to state. That way one bad item won't ruin a
whole batch, and you know which items succeeded and which failed. You can then
throw an exception to recognise that the job has failed.

## Compilation

The code you write isn't technically executable JavaScript. You can't just run
it through node.js. It needs to be transformed or compliled into portable
vanilla JS code.

:::warning

This is advanced stuff more focused at JavaScript developers and the technically
curious. These docs are not intended to be complete - just a nudge in the right
direction to help understand how jobs work.

:::

The major differences between openfn code and JavaScript are:

- The top level functions in the code are executed synchronously (in sequence),
  even if they contain asynchronous code
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

## Next Steps

The best way to learn how to write OpenFn jobs is to write OpenFn jobs.

You can [get started with CLI](/documentation/cli) and start running jobs
locally. Then take a look at the [CLI Challenge](/documentation/cli-challenges)
to really exercise your job writing skills.

If you're ready to start using the app, take a look at this guide to
[create your first Workflow](documentation/build/workflows).

Workflow design is a non-trivial problem, so you might also like to review the
Workflow [Design Process docs](documentation/design/design-overview).

:::info Questions?

If you have any job-writing questions, ask on
[Community](https://community.openfn.org) to seek assistance from the OpenFn
core team and other implementers.

:::
