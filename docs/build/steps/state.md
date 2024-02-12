---
title: Initial and final state
---

Each Step has an initial state (which may contain an `Input`) and results in a
final state that will include `Logs` and an `Output`. This article explains
these concepts in greater detail.

![Job State Overview](/img/state-javascript.png)

## Initial state

Depending on whether you're running Workflows locally or on the app, the initial
`state` for an individual Run might be generated differently. It could be
generated manually (e.g., by creating a custom `Input` on the app or
`state.json` file if working locally
[in the CLI](/docs/build-for-developers/cli-intro.md)), or automatically when a
webhook event is triggered as incoming data is received, or as a cron trigger is
activated at the scheduled time.

## Final state

The final state of a Run is determined by _you_. Remember that job expressions
are a series of `operations`—they each take `state` and return `state`, after
creating any number of side effects. You control what is outputted to hand off
to the next Step and/or what is sent to the destination app.

### Passing state to the next Step

See the below diagram for a visual description of how state might be passed between
Steps in a Workflow.

![Passing State](/img/passing-state-steps.png)

### Final state after an error

If a Run fails, it will _not_ produce a final state. The run itself will have
`log` information attached to it, along with its exit code, but there's not
necessarily a clean final `state` or `Output` which can be serialized to `JSON`.

:::info

If you have configured a Step that runs `on failure` of the prior Step, note
that its initial state will be the initial state of the previous (failed) Run,
plus a new `error` key that contains the stringified logs from the previous Run.

:::
