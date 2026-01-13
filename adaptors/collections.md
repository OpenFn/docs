---
title: Collections Adaptor
---

## Collections Overview

The Collections API provides access to a secure key/value store that allows
users to store, update and reuse data across workflows in their OpenFn projects.
It is designed for high performance over a large volume of data.

Collections are secure, private datastores which are only accessible to
Workflows within a particular OpenFn Project. They can be created, managed and
destroyed from the OpenFn Settings page.

The Collections Adaptor provides an interface to workflows to use the
Collections API.

When running in the CLI, a Personal Access Token can be used to get access to
the collection (generated from the app at /profile/tokens).

Learn more about Collections and common use cases in the
[Collections Docs](/documentation/build/collections).

:::caution Collections is _not_ a long-term data storage solution!

The OpenFn Collections feature is designed to be a _temporary_ data store or
integration “buffer” during data transfer and processing between digital
systems.

- This feature is optimized for throughput and performance (rather then
  long-term retention and making the data accessible to end users for
  querying/analysis)
- Technically, collections is a key value store, so performance for complex
  aggregations or queries is either unsupported or inefficient
- Collections doesn't support advance archiving, backup, and recovery features
  that you’d want in a long-term storage solution
- Most buffer implementations have retention mechanisms that automatically
  expire/purge data after a certain period of time to clear up space and memory
  to ensure resources aren’t exhausted for active processing

Therefore, if you're interested in storing data collected longer term–we
recommend you set up a dedicated database and configure OpenFn to route data to
there as a long-term storage and/or backup option. Ask on
[Community](https://community.openfn.org) or get in touch with
[our support team](mailto://support@openfn.org) to learn more about related
OpenFn services.

:::

## The Collections Adaptor

The Collections API is inserted into all each Step of a Workflow through a
special kind of adaptor.

Uniquely, the Collections adaptor it is designed to be run _alongside_ other
adaptors, not by itself. It is automatically injected into the runtime
environment making the Collections API available to every Step in a Workflow,
regardless of which adaptor it is using.

If using the CLI the use Collections locally, refer to the
[CLI Usage](#cli-usage) guide below.

## Usage Guide

All values in a Collection are stored under a string key. Values are stored as
Strings, but the Collections API will automatically serialized and de-serialize
JSON objects to strings for you (so, in effect, you can treat keys as strings
and value as objects).

Collections can be manipulated using a single key a pattern - where a pattern is
a string with a wildcard. So the key-pattern `mr-benn` will only match a single
value under the key `mr-benn`, but the pattern `2024*` will match all keys which
start with `2024` but have any other characters afterwards. The pattern
`2024*mr-benn*` will match keys starting with 2024, then having some values plus
the string `mr-benn`, plus any other sequence of characters (in other words,
fetch all keys which relate to Mr Benn in 2024).

The Collections API gives you four functions to read, write and remove data from
a collection.

- Use [`collections.get()`](/adaptors/packages/collections-docs#collections_get)
  to fetch a single value, or batch-download a range of values.
- Use
  [`collections.each()`](/adaptors/packages/collections-docs#collections_each)
  to efficiently iterate over a range of items in a collection. Recommended for
  large data sets.
- Use [`collections.set()`](/adaptors/packages/collections-docs#collections_set)
  to upload one or more values to a collection. `set()` is always an "upsert":
  if a key already exists, it's value will be replaced by the new value
- Use
  [`collections.remove()`](/adaptors/packages/collections-docs#collections_remove)
  to remove one or more values.

Detailed usage examples are provided below.

### Set some data in a Collection

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

### Getting data from a Collection

To retrieve multiple items from a Collection, we generally recommend using the
`each()` function.

`each()` will stream each value individually, greatly reducing the memory
overhead of downloading a large amount of data to the client.

```js
collections.each('my-collection', '2024*', (state, value, key) => {
  console.log(value);
  // No need to return state here
});
```

The second argument to `each` is a query string or object. Pass a key with a
pattern, or an object including different query strings. Check the API reference
for a full listing.

```js
collections.each(
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
collections
  .each('my-collection', { key: '2024*', limit: 1000 }, (state, value, key) => {
    console.log(value);
  })
  .then(state => {
    state.nextCursor = state.data.cursor;
    // state.data.cursor now contains the cursor position
    return state;
  });
```

You can fetch items individually with `get()`, which will be written to
state.data:

```js
collections.get('my-collection', 'commcare-fhir-value-mappings').then(state => {
  state.mappings = state.data;
  return state;
});
collections.each($.inputs, state => {
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

### Remove data from a Collection

You can remove an individual value by key:

```js
collections.remove('my-collection', 'commcare-fhir-value-mappings');
```

You can also use patterns to delete multiple values at a time:

```js
collections.remove('my-collection', '2024*');
```

## Filters, Limits & Cursors

As well as filtering keys with patterns, you can filter by created date:

```js
collections.each(
  'my-collection',
  { key: '2024*', createdAfter: '20240601' },
  (state, value, key) => {
    console.log(value);
  }
);
```

You can use `createdBefore` and `createdAfter` dates, which must be ISO 1806
formatted strings. The `createdBefore` timestamp will match all dates less than
or equal to (&lt;=) the _start_ of the provided date. Conversely, `createdAfter`
will match dates greater than or equal to the _end_ of the provided date.

By default, all matching values will be returned to you, but you can limit how
many items are returned in a single call:

If a limit is set and there are more values waiting on the server, a `cursor`
will be written to `state.data`. You can pass this cursor back to the server in
the next query to resume from that position.

```js
// request 10k values from the cursor position
collections.get('my-collection', { key: '*', limit: 10e3, cursor: $.cursor });
fn(state => {
  // Write the cursor (if any) back to state for next time
  state.cursor = state.data.cursor;
  return state;
});
```

## CLI usage

Since version 1.21.0 (Jan 2026), `@openfn/cli` fully supports the use of
collections in workflows.

Prior to 1.21.0, special setup was needed. So this guide is split into two
sections: we recommend using the latest CLI and following first guide below.
It's shorter, cleaner and easier.

But if you're unable to update your CLI, you can still configure collections
manually with the [Older CLI guide](#older-cli).

Remember that a Collection must be created from the Settings page before it can
be used!

:::tip

You can also call the Collections API directly from the CLI, without using a
Workflow. See the [CLI Collections Guide](/documentation/collections-cli)

:::

### Latest CLI 1.20+

The CLI includes full native support for collections within a workflow.

If you've pulled a project from the app (Lightning), all you'll need to do is
provide an API Token when you run the workflow. You can either do this by
passing the `--api-key` argument, or by setting the `OPENFN_API_KEY` env var.

```bash
openfn my-workflow.json --api-key $MY_OPENFN_PAT
```

By default, the CLI will use our cloud platform at app.openfn.org to find any
collections referenced in the workflow. To use a different deployment server,
you can pass `--endpoint` or set the `OPENFN_ENDPOINT` env var. Note that this
should point to the server root - so `http://app.openfn.org`, not
`http://app.openfn.org/collections`.

:::tip

Since v1.19.0 The CLI fully supports `.env` files. If you run multiple projects
locally, you may want to create a `.env` file in your project root and configure
your endpoint and API token in there:

```
OPENFN_API_KEY="eyJhbGc..."
OPENFN_ENDPOINT="https://app.openfn.org"
```

The `.env` file will be automatically loaded by the CLI. Check debug output for
details.

:::

### Older CLI

The rest of this guide only applies when using older CLI versions, prior to
1.21.0.

Remember that a Collection must be created from the Settings page before it can
be used!

#### For a single job

You can pass multiple adaptors from the CLI:

```bash
openfn job.js -a collections -a http -s state.json
```

You'll need to set configuration on the state.json:

```json
{
  "configuration": {
    "collections_endpoint": "http://localhost:4000/collections",
    "collections_token": "...paste your Personal Access Token..."
  }
}
```

#### For a workflow

If you're using `workflow.json`, set the token and endpoint on
`workflow.credentials`:

```json
{
  "workflow": {
    "steps": [ ... ],
    "configuration": {
      "collections_endpoint": "http://localhost:4000/collections",
      "collections_token": "...paste your Personal Access Token..."
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

## Contributing

We are a fully Open Source Digital Public Good, and we welcome contributions
from our community. Check out our
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for
more information on how you can update Adaptors!

Or, you can always reach out to the Community through our
[Community Forum here](https://community.openfn.org/).
