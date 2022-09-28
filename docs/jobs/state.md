---
title: Initial and final state for runs
---

## Initial state

Depending on what tools you're using and what triggered a given run, the initial
`state` for a job run might be generated in a number of different ways, and you
might even build `state` by hand. For `microservice`, `engine`, and `platform`
however, there are strict rules around how `state` gets created and provided to
a runtime for execution of your operations. See the table below for details.

## Final state

The final state of a job run is determined by _you_. Job expressions are a
series of `operations`—they each take `state` and return `state`, after creating
any number of side effects.

Note that, if you have a cron job that returns `null` state, we will replace it by the empty state (`{}`) to build the state for the next job call.

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

## States by job trigger type

| Triggering Event | Initial State                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| http request     | `{ data: httpRequest.body, configuration: job.credential.body }`                                       |
| cron             | `{ ...finalStateOfLastSuccessfulRun, configuration: job.credential.body }`                         |
| flow: success    | `{ ...finalStateOfTriggeringRun, configuration: job.credential.body }`                                 |
| flow: failure    | `{ ...initialStateOfTriggeringRun, error: logsFromTriggeringRun, configuration: job.credential.body }` |
