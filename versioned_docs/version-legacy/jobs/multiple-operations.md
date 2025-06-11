---
title: Using multiple operations
---

You can do many things in sequence with OpenFn, whether using `core`,
`microservice`, or `platform`.

## Flow jobs vs multiple operations in a single job vs posting back to the inbox

### Reasons to use flow jobs

- Each operation needs to use functions that are _only_ available in different
  adaptors.
- You _must_ have different credentials for each operation
- You want to see success and failure at the level of each operation
- Each individual run takes a long time and you're worried about your NodeVM
  being timed out. (On `platform`, this happens after 100s for non-enterprise
  users; on `microservice` you've likely configured your own timeout duration.)

### Reasons to use multiple operations in a single job

- The job must be atomic, you want the whole thing to count as a failure if any
  part of it fails.
- You run jobs manually and you want a single button to click to retry the
  entire sequence of operations.
- You update a `cursor` in a series of operations that involve `GET` and `POST`.
  When the `POST` fails, you don't want to update the `cursor` for the
  subsequent job run which contains the `GET`.
- Your operations don't take too long (&lt;100s in total for `platform`) and you
  want to reduce the number of executions.

### Reasons to post back to the inbox

You might decide to send data from a `GET` back to your inbox and let another
job be triggered by a message filter.

```js
get('somePath', { query: { after: '2020-10-12' } }, post('my-inbox-uuid'));
```

- You'd like to store the result of the first operation for later use or
  inspection and not have to retry that operation in order to reproduce the
  data.
- You don't care about small delays between the first and second job being run.
