---
sidebar_label: Job Writing Guide
title: Job Writing Guide
---

<!-- TODO: work out where this goes in the nav bar. Top level I think. I probably want to merge my structural changes first. -->

Workflow automation and data integration in Openfn is realised through the
creation of Jobs.

This guide will walk you through key concepts and best practices for job
writing. It is suitable for new coders and experienced Javascript programmers.
In fact, even if you're an experienced Javacript Developer, there a number of
key patterns in the OpenFn ecosystem which it is important to learn.

A Job is a bunch of Javascript code which performs a particular task, like
fetching data from Salesforce or converting some JSON data to FHIR standard.

Each job uses exactly one Adaptor (often called a "connector") to perform its
task. The Adaptor provides a collection of helper functions which makes it easy
to communicate with a data source.

This guide applies equally to writing Jobs on the app (Lightning) or through the
CLI.

:::info Workflows

Multiple jobs can be chained together in a Workflow. A common pattern is to use
one job to fetch data from datasource A, one job to convert or transform that
data to be compatible with datasource B, and a third job to upload the
transformed data to datasource B.

To learn more about workflow design and implementation, see
[Build & Manage Workflows](/documentation/build/workflows)

:::

## Operations and State

Every job is a data transformation pipeline.

A job has some input (a Javascript object we call State) and a set of Operations
(functions) which transform that state in series (ie, one after the other).
State is passed into, and returned from, each operation in turn until there are
no more operations left. The output of the final operation is the output of the
Job.

![Job Pipeline](/img/guide-job-pipeline.webp) For example, here's how we issue a
GET request with a http adaptor:

```js
get('/patients');
```

The first argument to `get` is the path to request from (the configuration will
tell the adaptor what base url to use). In this case we're passing a static
string, but we can also pass a value from state:

```js
get(dataValue('endpoint'));
```

The `dataValue` function will read a path from state.data (in this case,
`state.data.endpoint`) and return it.

Your job code should only contain operations at the top level/scope - you should
NOT include any other Javascript statements. We'll talk about this more in a
minute.

<!-- TODO this is half finished -->
<details>
<summary>More details for Javascript Developers</summary>
An operation is actually a factory function. It takes the arguments passed in job code, traps them in a closure, and returns a function which takes state and returns state.

The Job code is not actually runnable Javascript - we compile it into an array
of promises, basically, and then execute those promises with an async reducer.
Compilation affects the top level operations (which get moved into that array of
promises), but nothing else in the code.

</details>

## Callbacks and fn()

Many operations give you access to a callback function.

Callbacks will be invoked with state, will run whatever code you like, and must
return the next state. Usually your callback will be invoked as the very last
step in an operation.

This is useful for intercepting and manipulating the return value of a given
operation.

<details>
<summary>What is a callback?</summary>
A callback is a common pattern in Javascript.

It's kind of hard to understand in the abstract: a callback is a function which
you pass into some other function, to be invoked by that function at a
particular time.

It's best explained with an example. All Javascript arrays have a function
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

Because functions are data in Javascript, we can we-write that code like this
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
useful for running arbitrary code - if you want to drop down to raw Javascript
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

Because of the way Javascript works, `state.data` will be evaluated before the
`get()` request has finished. So the post will always receive a value of
`undefined`.

<!--
Ok wise guy, how are we gonna explain this?
It's something to do with factories, and closures, and synchronous execution.
What's the simplest explanation though?
-->
<details>
<summary>Okay, how <i>does</i> Javascript work?</summary>
Javascript, like most languages, will evaluate synchronously, executing code line of code one at a time.

Because each Operation is actually a factory function, it will execute instantly
and return a function - but that function won't actually be executed yet.

The returned function will have the original arguments in scope (trapped as
closures), and be executed later against the latest state object.

The example above will synchronously create two functions, which are added into
an array by the compiler (see bellow), and then excuted by the runtime.

So when your code executes, it's doing something like this:

```
const getFn = get('/some-data')
const postFn = post('/some-data', state.data)

return getFn(state).then((nextState) => postFn(nextState))
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

## Iteration and each

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

Or we can pass in another operation, like this:

```js
each(
  '$.items[*]',
  post('/patients', state => state.data) // we could transform the data in-line if we wanted
);
```

This will post everything in state.items to the patients endpoint.

:::info

JSON paths The use of a JSON path string as the first argument to each allows
the runtime to lazily evaluate the value at that path -
[See Reading state lazily](#reading-state-lazily). Not all operations support a
JSON path string - Refer to the adaptor docs.

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

## Modern JS tips

OpenFn supports the latest Javascript features.

Here are some genreal Javascript features and operators which might help make
your code cleaner. This is not meant to be an exhaustive guide, just a pointer
to some good techniques.

<!--
I would like to document/confirm that this stuff works, but I have a feeling that async/await is actually an antipattern. Job code should use operations for this

### async/await

async/await is a pattern which makes asynchronous Javascript easy to handle.

If a function

-->

### Optional chaining

Javascript is an untyped language - which is very conveient for OpenFn jobs and
usually makes life easier.

However, a common problem is that when writing long property chains, an
exception will be thrown if a property is missing. And this happens all the time
when fetching data from remote servers.

Optional chaning allows JavaScript to stop evaluating a property chain and
return undefined as the result of that whole expression:

```js
const x = a.b?.c?.d?.e;
```

In this example, if `c`, for example, is not defined, then `x` will be given a
value of `undefined`. No exception will be thrown.

You can do this with string properties too, although the syntax is a bit
fiddlier:

```js
const x = a.b['missing-link']?.d?.e;
```

This can also be used for optional function calls (less useful in job writing
but included for completeness):

```js
const x = a.b?.();
```

You can combine optional chaning with the wonderfully named **"nullish
coalescing"** operator. This works a bit like a ternary expression or an or - if
anything to left of the operator returns `null` or `undefined`, the value to the
right will be returned.

```js
const x = a.b?.c?.d?.e ?? 22;
```

In this example, if any of the values in the chain are not defined, `x` will be
assigned a value of 22.

### Arrow functions

Arrow functions are used throughout this guide and we expect that most users are
familiar with their usage.

An arrow function is an alternative way to write a JavaScript function. There
are a few reasons why they are popular in modern Javascript:

- They feel lightweight, with less syntax required
- They do not have a `this` scope - although this is largely irrelevant to
  OpenFn programming (and indeed most modern JS frameworks)

Arrow functions are always anonymous - they have no name - but they can be
assigned to variables of course.

```js
function upperCase(name) {
  return name.toUpperCase();
}

const getName = () => {
  return name.toUpperCase();
};
```

An arrow function can contain a single expression and no body, and will return
the expression:

```js
function getX() {
  return x;
}

const getX = () => x;
```

This pattern makes arrow functions lightweight and elegant, and aligns nicely
with functional programming paradigms.

### Rest and spread operators

The spread or rest operator `...` can be used for several purposes. It can be
quite complex to understand, but in OpenFn it has a couple of strong uses.

First, you can **"spread"** or **"apply"** the properties and value of one (or
more) objects to a new object. This is a really conveient way to shallow clone
objects.

It works a lot like `Object.assign(obj, first, second, third)`.

Here's how we shallow clone with spread:

```js
const newState = {
  ...state,
};
```

Properties are declared in sequence, so you can spread an object and then
declare more properties:

```js
const newState = {
  ...state
  data: {} // create a new data object but keep all other keys of state
}
```

You can spread multiple objects, which again will apply in order. This example
applies some default values, then overwrites with whatever is on state, then
finally overwrites the data key.

```js
const newState = {
  ...defaults,
  ...state
  data: {} // create a new data object but keep all other keys of state
}
```

Spreading like this does not affect the original object (ie, in the example
above, `defaults` and `state` are not changed), although remember that this is
only a shallow clone, and non-primitive values use pointers, not copies.

<details>
<summary>What is a shallow clone?</summary>
To shallow clone an object means to copy all the top-level keys and values of that object onto a new object.

But this ONLY applies to top-level keys. And if a value contains an object,
you're really just copying a _pointer_ to that object.

```js
const a = {
  x: 1,
  y: {
    values: [1, 2, 3]
  }
};

// declare b as a shallow clone of a
const b = {
  ... a
}

b.x = 2; // a.x is unchanged
b.y.values = []; // a.y.values is changed
b.y = 20' // a.y is unchanged
```

A deep clone means that all properties in the whole object tree are cloned.

</details>

## Compilation

The code you write isn't technically executable Javascript. You can't just run
it through node.js. It needs to be transformed or compliled into portable
vanilla JS code.

:::warning

This is advanced stuff more focused at JavaScript developers and the technically
curious. These docs are not intended to be complete - just a nudge in the right
direction to help understand how jobs work.

:::

The major differences between openfn code and Javascript are:

- The top level functions in the code are executed synchronously (in sequence),
  even if they contain asynchronous code
- OpenFn code does not contain import statements (although technically it can).
  These are compiled in.
- Compiled code is a JavaScript ESM module which default-exports an array of
  async functions. These functions are imported and executed by the runtime.

It shouldn't be necessary to understand compilation in detail, but you should be
aware that the code you write is not the code you run.

If you're a Javascript developer, understanding some of these changes might help
you better understand how OpenFn works. Using the CLI, you can run
`openfn compile path/to/job.ja -a <adaptor-name>` to see compiled code.

Here's an example of how a simple job looks in compilation:

This job:

```js
get('/patients');
```

Compiles to this Javascript module:

```js
import { get } from '@openfn/language-http';
export * from '@openfn/language-http';
export default [get('/patients')];
```
