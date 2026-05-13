---
sidebar_label: Data Transformation
title: Data Transformation
---

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
