---
title: Triggers
---

Triggers are responsible for starting workflows automatically. They come in 2
types: "cron" triggers and "webhook event" triggers.

## Trigger types

### Webhook Event Triggers

`Webhook Event Triggers` watch for inbound http requests or messages, and enable
real-time event-based automation.

- These Triggers are fired by “pushing” data to OpenFn (i.e., by sending a HTTP
  “POST” request to your trigger’s designated URL).
- This triggering HTTP request might be sent via a webhook in an external app,
  another OpenFn workflow, or manually (i.e., via cURL request).

![Webhook Trigger](/img/webhook_trigger.png)

### Cron Triggers (formerly timers)

`Cron Triggers` run Workflows based on a cron schedule, and are good for repetitive tasks that are time-based (e.g., every day at 8am, sync financial data). 
- These Triggers enable users to “pull” data from connected systems.
- You can pick a standard schedule (e.g., every day, or every month), or define a custom schedule using cron expressions. 

These Triggers enable Workflows to be run as frequently as
once every minutes, or as infrequently as you desire and can be scheuled on very
specific dates or times. 

Each time a timed job succeeds, its `final_state` will
be saved and used as the `initial_state` for its next run. See "Managing state"
and "Keeping a cursor" below for implementation help.

![Cron Trigger](/img/cron_trigger.png)

:::tip Help with cron expressions

The best way to learn about `cron`, if you're not already familiar, is through
the OpenFn interface or
<a href="https://crontab.guru" target="_blank">crontab.guru</a>.

:::

#### Managing the size of `state` for Cron Workflows

Since state is passed between each run of a cron Workflow, if your Workflow Step adds
something new to state each time it runs, it may quickly become too large to be
practically handled. Imagine if a server response were adding, via
`array.push(...)`, to `state.references` each time the job ran. OpenFn supports
up to 50,000 bytes (via Erlang's `byte_size`), though most `final_state` byte
sizes are between 100 and 1000.

If the size of your `final_state` exceeds 10,000 bytes, OpenFn will send project
collaborators a warning email. If it exceeds 50,000 bytes, your run will still
succeed but its `final_state` will not be saved and the next time that job runs
it will inherit the previous, un-updated final state. (I.e., the last state that
was < 50,000 bytes.)

#### A quick fix for final state bloat

Most often, final state bloat is due to improper handling of `state.references`
or `state.data`. This can be fixed by adding the following lines _either_ to the
callback of your language-package's operation (if it allows for one) or by
appending an `fn(...)` operation after your operation.

```js
fn(state => {
  state.custom = somethingIntentional;
  state.data = {};
  state.references = [];
  return state;
});
```
