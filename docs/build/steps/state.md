---
title: Initial and final state
---

Each Step requires an input state and (in most cases) will produce an output
state. This article explains these concepts in greater detail.

![Job State Overview](/img/state-javascript.png)

## Input & output state for runs

Depending on whether you're running Workflows locally or on the app, the input
`state` for a Run can be generated differently. When creating a work order by
hand, you must select or generate your input manually (e.g., by creating a
custom `Input` on the app or `state.json` file if working locally
[in the CLI](/docs/build-for-developers/cli-intro.md)). When a work order is
automatically created via a webhook trigger or cron trigger, state will be
created as described below.

The final state of a Run is determined by what's returned from the last
operation. Remember that job expressions are a series of `operations`—they each
take `state` and return `state`, after creating any number of side effects. You
can control what is returned at the end of all of these operations.

### Webhook triggered runs

Initial state contains important parts of the inbound **http request**.

```js
{
  data: httpRequest.body,
  request: { headers: httpRequest.headers },
  configuration: credential.body
}
```

### Cron triggered runs

Initiate state is either an empty object `{}` or the final state of the **last
succesful run** for this workflow.

```js
{
  ...finalStateOfLastSuccessfulRun,
  configuration: credential.body
}
```

## Input & output state for steps

State is also passed between each step in a workflow. The output state of the
previous step is used as the input state for the next step.

### On success

When a job succeeds, its output state will be whatever is returned by the last
operation.

```js
{
  data: "blah",
  references: [1, 2, 3]
}
```

### On failure

When a step in a workflow fails, the error will be added to an `errors` object
on state, keyed by the ID of the job that failed.

```js
{
  data: "blah",
  references: [1, 2, 3],
  errors: { jobId: error }
}
```

See the below diagram for a visual description of how state might be passed
between Steps in a Workflow.

![Passing State](/img/passing-state-steps.png)
