---
title: Initial and final state for runs
---

1. **state** is a .JSON file that is built and passed into the Node environment.
   It contains at least two keys, `configuration` and `data`. Configuration will
   be populated with your credential and it used by adaptors for authentication,
   and data will be populated with message data if the job was triggered by an
   incoming message.

```json
{
  "configuration": {
    "username": "taylor",
    "password": "shhhhhh",
    "loginUrl": "https://login.salesforce.com"
  },
  "data": {
    "a": 1,
    "b": {
      "x": [1, 2, 3]
    }
  }
}
```

## Initial state

Depending on what tools you're using and what triggered a given run, the initial
`state` for a job run might be generated in a number of different ways, and you
might even build `state` by hand. For `lightning` however, there are strict
rules around how `state` gets created and provided to a runtime for execution of
your operations.

## Final state

The final state of a job run is determined by _you_. Job expressions are a
series of `operations`—they each take `state` and return `state`, after creating
any number of side effects.

### Final state after an error

If a job run fails, it will not produce a final state. The run itself will have
`log` information attached to it, along with its exit code, but there's not
necessarily a clean final `state` which can be serialized to `JSON`.

:::info

If you're making use of a `failure` triggered job, that job run will not get the
final state of the previous job run, as it failed and has no final state. It
will instead receive the initial state of the previous (failed) run, plus a new
`error` key that contains the stringified logs from the previous run. See below
for details.

:::
