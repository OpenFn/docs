---
title: Collections Adaptor
---

## Collections Overview

The Collections API is a key/value storage solution. It is designed for high
performance over a large volume of data.

Use-cases include:

- Storing mapping objects for use in workflows
- Buffering and aggregating high volumes of incoming data
- Caching and sharing state between workflows

A Collection is bound to a project. Collections can only be accessed with a
token associated with that project. When running on the app, a workflow is
automatically granted access to all collections on the same project. When
running in the CLI, a Personal Access Token can be used (generated from the app
at /profile/tokens).

## The Collections Adaptor

The Collections adaptor is a special adaptor. Uniquely, the Collections adaptor
is designed to be run _alongside_ other adaptors, and is injected for you by the
platform.

This makes the Collections API available to every step in a workflow, regardless
of which adaptor it is using.

## Usage Guide

### Set some data in a collection

The Collection API allows you to set a JSON object (or any primitive JS value)
under a given key:

```js
collections.set('my-collection', 'commcare-fhir-value-mappings', {
  current_smoker: {
    system: 'http://snomed.info/sct',
    code: '77176002',
    display: 'Smoker',
  },
  /* ... */
});
```

You can also pass an array of items for a batch-set. When setting multiple
values, you need to set a key generator function to calculate a key for each
item, like this:

```js
collections.set('my-favourite-footballer', value => value.id, [
  {
    id: 'player01',
    name: 'Lamine Yamal',
    /* other patient details */
  },
  {
    id: 'player02',
    name: 'Aitana Bonmati',
    /* other patient details */
  },
  /* More patients {}, {} */
]);
```

The key generator is a function which receives each of the values in the
supplied values array as an id (so, in the example above, it gets called with
the `player01` object, then the `player02` object, and so on). For each value,
it should return a string key, under which it will be saved in the collection.

You can use Javascript template literals to easily generate key values which
include a mixture of static and dynamic values:

```js
collections.set(
  'my-favourite-footballer',
  value => `${value.createdDate}-${value.region}-${value.name}`
  $.data
),
```

In this example, the `createdDate`, `region` and `name` properties will be read
from each value and assembled into a key-string, separated by dashes. This
technique creates keys that are easily sorted by date.

### Getting data from a collection

To retrieving multiple items from a Collection, we recommend using the `each()`
function.

`each()` will stream each value individually, greatly reducing the memory
overhead of downloading a large amount of data to the client.

```js
each('my-collection', '2024*', (state, value, key) => {
  console.log(value);
  // No need to return state here
});
```

The second argument to `each` is a query string or object. Pass a key with a
pattern, or an object including different query strings. Check the API reference
for a full listing.

```js
each(
  'my-collection',
  { key: '2024*', created_after: '20240601' },
  (state, value, key) => {
    console.log(value);
  }
);
```

You can limit the amount of data you want to download with the `limit` key. If
there are returned values on the server, a `cursor` key will be written to
`state.data`.

```js
each('my-collection', { key: '2024*', limit: 1000 }, (state, value, key) => {
  console.log(value);
}).then(state => {
  state.nextCursor = state.data.cursor;
  // state.data.cursor now contains the cursor position
  return state;
});
```

You can fetch items individually with `get()`, which will be written to
state.data

```js
collections.get('my-collection', 'commcare-fhir-value-mappings').then(state => {
  state.mappings = state.data;
  return state;
});
each($.inputs, state => {
  const mappedString = state.mappings[state.data.diagnosis];
  state.resources ??= {};
  state.resources[state.data.id] = mappedString;
  return state;
});
```

You can also fetch multiple items with `get()`, which supports the same query
options as `each()`.

Bear in mind that all the items will be loaded into memory at once. For large
datasets and structures, this may cause problems.

When bulk-loading with `get()`, state.data will be an array of items, and
`state.data.cursor` will contain the cursor position from the server

```js
collections.get('my-collection', '2024*').then(state => {
  state.allRecords = state.data;
  return state;
});
```

### Remove data from a collection

You can remove an individual item by key:

```js
collections.remove('my-collection', 'commcare-fhir-value-mappings');
```

You can also use the same query options as `get()` and `each()` to bulk delete:

```js
collections.remove('my-collection', { createdBefore: '20240601' });
```

## Collection Administration

Collections must be created in the platform Admin page before they can be used.

Collections can be removed from the Admin page.

## CLI usage

Collections are designed for close integration with the platform app, but can be
used from the CLI too.

You will need to:

- Set the job to use two adaptors
- Pass a Personal Access Token
- Set the Collections endpoint

You can get a Personal Access Token from any v2 deployment.

Remember that a Collection must be created from the Admin page before it can be
used!

### For a single job

You can pass multiple adaptors from the CLI:

```bash
openfn job.js -a collections -a http -s state.json
```

You'll need to set configuration on the state.json:

```json
{
  "configuration": {
    "collections_endpoint": "http://localhost:4000/collections",
    "collections_token": "...paste the token from the app..."
  }
}
```

### For a workflow

If you're using `workflow.json`, set the token and endpoint on
`workflow.credentials`:

```json
{
  "workflow": {
    "steps": [ ... ],
    "credentials": {
      "collections_endpoint": "http://localhost:4000/collections",
      "collections_token": "...paste the token from the app..."
    }
  }
}
```

And make sure that any steps which use collections have multiple adaptors set:

```json
{
  "workflow": {
    "steps": [
      {
        "expression": "...",
        "adaptors": ["@openfn/language-http", "@openfn/language-collections"]
      }
    ]
  }
}
```
