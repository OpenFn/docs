---
title: Collections
sidebar_label: Collections
---

Collections provides a high-volume, high-performance storage solution built into
OpenFn. Check out
**[this video](https://www.youtube.com/watch?v=iXkkkzratzY&t=3s&ab_channel=OpenFn.org)**
for an introduction.

Collections is suitable for buffering, caching and aggregating data from
Webhooks, storing large mapping files, and sharing state between workflows.

Collections can be used to store a very large number of items (in the order of
millions).

:::caution Collections Stability

Collections is a new feature to OpenFn, in beta release since November 2024.

We'd love to hear your feedback on
[community.openfn.org](https://community.openfn.org/) via email at
[support@openfn.org](mailto:support@openfn.org).

:::

## Use Cases

### Buffering Data

Many OpenFn integrations are triggered through a webhook, called from another
system based on some event. For example, every time a patient is registered, a
webhook calls into OpenFn to trigger a workflow and propagate the registration
event to other systems.

Collections can be used as a buffer for these incoming events, saving the event
data on OpenFn and then processing a batch of events at the end of the day. This
is particularly useful in high volume events, or when limits are imposed on
upstream systems.

With Collections, you can save each incoming event onto OpenFn, then run a
Workflow on a Cron trigger to process a batch of events in one go, and send on
aggregated, filtered or transformed results to the next system.

### Mapping Structures

A typical use-case is data integrations is to store large mapping objects. These
objects themselves are key-value pairs which map strings from one system into
matching strings from another system. For example, mapping medical codes into
SNOMED, or mapping city codes into human-readable strings, or mappings some
input string to a DHIS2 attribute code.

These objects are often very large and hard to maintain, and can bloat job code.

Instead, the mappings can be saved to a GitHub repository as a JSON object, and
uploaded to a collection using the CLI.

## Collections Basics

:::tip

The Collections API is automatically available to all Workflows and does not
require any credentials. Authentication with the OpenFn platform is managed for
you.

You can use the Collections API with any adaptor.

:::

Data is stored as key-value pairs, where the key is a unique identifier for some
data (like a UUID, or timestamp). The value is always saved as a string
(although you can pass JSON-compatible objects directly, which will be
automatically serialized by the Collections API).

Keys can be fetched in bulk and filtered by _pattern_. For example, the pattern
`2024*` will match all keys which start with `2024`. Designing keys to have an
efficient sort order is critical for high-volume Collections applications.

The example below fetches values from the `openfn-patient-registrations`
collection and saves them onto state for further processing:

```js
collections.get('openfn-patient-registrations', '2024*').then(state => {
  state.registrationsThisYear = state.data;
  return state;
});
```

Returned items are written to state.data as an array of `[{ key, value }]`
pairs:

```js
{
  "data": {
    "20240102-5901257": {
      "name": "Tom Waits",
      "id": "5901257",
    },
    "20240213-0183216": {
      "name": "Billie Holiday",
      "id": "0183216",
    }
  }
}
```

If fetching a single item (i.e. no `*` in the key), it will be written directly
to `state.data` with no key:

```js
{
  "data": {
    "name": "Billie Holiday",
    "id": "0183216",
  }
}
```

Every key permanently saves its creation date, so as well as fetching by
key-pattern, you can also filter keys by date. This example fetches all keys
created before 30th September 2024:

```js
collections
  .get('openfn-patient-registrations', '*', { createdBefore: '2024-09-30' })
  .then(state => {
    state.registrationsThisYear = state.data;
    return state;
  });
```

`collections.get` will download all matching values into memory. For large
values or high-volume value sets, it is more efficient to use
`collections.each`, which will stream each value into memory individually and
then discard it.

```js
collections.each(
  'my-collection',
  { key: '2024*', createdAfter: '20240601' },
  (state, value, key) => {
    console.log(value);
  }
);
```

Values are uploaded to a collection through `collections.set`. All sets are
"upserts" - meaning that new keys will be created for values that don't exist,
and values will be updated for keys that _do_ exist.

The example below sets a single item:

```js
collections.set('openfn-demo', 'commcare-fhir-value-mappings', {
  current_smoker: {
    system: 'http://snomed.info/sct',
    code: '77176002',
    display: 'Smoker',
  },
  /* ... */
});
```

If setting multiple values at once, pass a key generator function instead of an
id to generate a key for each item. For example, if several value are saved in
an array on `state.data`:

```js
collections.set('openfn-demo', (patient, state) => patient.id, $.patients);
```

The key generator will be called with each value and must return a string key.

## Managing Collections

Collections can be created, destroyed or renamed from the Admin menu.

![Collections Admin Page](/img/collections_admin.webp)

Before it can be used, a collection must be created. Collection names must be
unique to the deployment, so we recommend using your organisation (and maybe
project) as a prefix, ie, `openfn-demo`.

## Using Collections

Collections are available to all Workflows via a simple high-level interface.

:::caution

A Collection must be created in the admin interface before it can be used.

:::

The Collections API provides four basic verbs:

- [`collections.get()`](/adaptors/packages/collections-docs#collections_get)
  downloads values matching a key or key pattern.
- [`collections.each()`](/adaptors/packages/collections-docs#collections_each)
  efficiently iterates over a range of items in a collection.
- [`collections.set()`](/adaptors/packages/collections-docs#collections_set)
  uploads values to a collection.
- [`collections.remove()`](/adaptors/packages/collections-docs#collections_remove)
  will remove values by key or key pattern.

The Collection API is backed by a special adaptor: see the
[Collections Adaptor API](/adaptors/collections) for more details.
