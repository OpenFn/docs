---
title: Collections CLI Usage
sidebar_label: Collections
slug: /collections-cli
---

The OpenFn CLI includes support for reading from and writing to
[Collections](/documentation/build/collections): a key/value store built into
OpenFn.

:::caution Versions

Collections support was added to the CLI in version 1.9.0.

Run `npm install -g @openfn/cli` to update or install.

:::

You can use the CLI to:

- Explore the contents of Collections without running a Workflow
- Experiment with query syntax to get the keys you need
- Update mapping objects and lookup tables from local (or source-controlled)
  files
- Manually remove unneeded data

:::tip

Got feedback? Want more Collections support in the CLI? Post a Feature Request
to [community.openfn.org](https://community.openfn.org/c/feature-requests)!

:::

Get started with the Collections API with `openfn collections --help`

You'll need a Personal Access Token (PAT) to access a collection. You'll also
need to ensure a collection has been created before you can read or write to
it - see
[Managing Collections](http://localhost:3000/documentation/build/collections#managing-collections)

:::info Trying to use Collections in a CLI workflow?

These docs explain how to use the `openfn collections` CLI command.

If you're running an expression or workflow through the CLI, you need to use the
collections adaptor - check out the
[Collections Adaptor Docs](http://localhost:3000/adaptors/collections#cli-usage)
for detauls

:::

## Getting a PAT

Data inside Collections is securely stored under a Project, and access is
strictly only allowed to users with access to that Project. So if you want to
access a Collection, you have to tell the server who you are.

We do this using Personal Access Tokens. See
[Create and Manage API Tokens](/documentation/api-tokens#about-api-tokens) for
more details.

One you have a PAT, you need to pass it in to the CLI. The easiest way to do
this is to set your `OPENFN_PAT` env var, which the CLI will use automatically.

If you're using multiple access tokens, you can pass `--token` to the CLI to
override the default.

```bash
openfn collections get my-collection \* --token $MY_OPENFN_PAT
```

:::tip

The rest of this guide assumes that the `OPENFN_PAT` env var has been set. So
long as it has, as you're using a server which has a `my-collection` collection,
all examples will work.

:::

## Setting a server

By default, the CLI will all out to our primary platform at
https://app.openfn.org.

If you're running from open source or using a different deployment, you'll also
need to tell the CLI which Collections server to use.

You can do this by passing `--lightning` directly:

```bash
openfn collections get my-collection \* --lightning http://localhost:4000
```

Or by setting the `OPENFN_ENDPOINT` environment variable.

:::tip

To see which server the CLI is using, ask for debug-level logging in your
output:

```bash
openfn collections get my-collection \* --log debug
```

:::

## Fetching items

You can fetch items from a Collection by passing a collection name and a key, or
key pattern (like `*` for "everything", or `2024*` for keys starting with
`2024`)

```bash
openfn collections get <collection-name> <key>
```

For example, to get everything from `my-collection`, run:

```bash
openfn collections get my-collection \*
```

:::tip

In unix shells (MacOS or Linux), the `*` character has special meaning. So if
you want to get all items, you have to escape it or quote it:

```
openfn collections get my-collection \*
```

Including \* in a pattern string should still work:

```
openfn collections get my-collection 2024*
```

:::

Collections are saved as strings, but will be serialized to JSON in the output.

By default the CLI will log downloaded values to your shell. To write to disk,
pass `--output` or `-o` with a file path relative to your working directory:

```bash
openfn collections get my-collection \* -o /tmp/my_collection.json
```

To format the output to make it easier to read, add the `--pretty` flag for
pretty-printing:

```bash
openfn collections get my-collection \* -o /tmp/my_collection.json --pretty
```

It's important to understand that the output works a bit differently if you're
getting one specific item with a single key or getting many items with a key-pattern.

A single key always returns its value "raw" or "verbatim", without the key
attached. So for a key `item-1` which holds a JSON object as a value, then this:

```bash
openfn collections get my-collection item-1
```

Will download and save something like this:

```js
{
  "id": "item-1"
  /* ... other properties of the value */
}
```

If you use a key-pattern to retrieve data, the value is output in multi-item
mode: which is a JSON object where the key is the item's key, and the value is
the item's value:

So if we get all items whose key starts with `item-`:

```bash
$ openfn collections get my-collection item-1*
```

The resulting data will look like this:

```json
{
  "item-1": {
    "id": "item-1"
    /* ... other properties of the value */
  },
  "item-10": {
    "id": "item-10"
    /* ... other properties of the value */
  }
}
```

## Uploading items

You can use the `collections` command to upload data to a collection. When
uploading, values always come from a file on disk. In this example we'll use
JSON files, but if you're uploading a single value it doesn't have to be valid
JSON.

The `set` command has two modes. To upload a single item, use:

```bash
openfn collections set <collection-name> <key> <path/to/value.json>
```

This will read the data in `path/to/value.json` as a string, and upsert it under
the provided key. Key patterns are not supported.

To bulk upsert multiple values, use:

```bash
openfn collections set <collection-name> --items <path/to/items.json>
```

The `items.json` file must contain a JSON object where the keys are item keys
and the values are item values (just like the multi-item get command returns):

```json
{
  "item-1": {
    "id": "item-1"
    /* ... other properties of the value */
  },
  "item-10": {
    "id": "item-10"
    /* ... other properties of the value */
  }
}
```

:::tip

Remember that Collections always uses an _upsert_ strategy when uploading new
items.

This means that if a key does not exist, it will be created and assigned a
value. If it already exists, its value will be updated.

:::

## Removing items

You can also remove items from a collection with the `collections remove`
command:

```bash
openfn collections remove <collection-name> <key>
```

Key-patterns are supported and allow you to remove multiple keys.

Use `--dry-run` to get a list of the keys that would be deleted without actually
running the delete:

```bash
openfn collections remove my-collection 2024* --dry-run
```
