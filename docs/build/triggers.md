---
title: Triggers
---

Triggers allow you to start the execution of Workflows automatically. They come
in three types: Cron triggers, Webhook Event, and Kafka triggers.

## Webhook Event Triggers

**Webhook Event Triggers** listen for inbound HTTP requests (messages from other
systems), and enable real-time, event-based automation.

These triggers are fired by "pushing" data to OpenFn (i.e., by sending an HTTP
“POST” request to your trigger’s designated URL).

The triggering HTTP request might be sent via a webhook in an external app,
another OpenFn workflow, or manually (i.e., via cURL request).

![Webhook Trigger](/img/webhook_trigger.png)

To learn about how to add an additional layer of security to your Webhook
Trigger by adding authentication, head over to our
[Webhook Security](../manage-projects/webhook-auth.md) page.

Learn how a workflow's initial `state` gets built from a webhook trigger
[here](../jobs/state#webhook-triggered-runs).

## Cron Triggers (formerly timers)

**Cron Triggers** run Workflows based on a cron schedule, and are good for
repetitive tasks that are time-based (e.g., every day at 8am, sync financial
data).

These Triggers enable users to “pull” data from connected systems. You can pick
a standard schedule (e.g., every day, or every month), or define a custom
schedule using cron expressions.

![Cron Trigger](/img/cron_trigger.png)

:::tip Help with cron expressions

The best way to learn about `cron`, if you're not already familiar, is through
the OpenFn interface or
<a href="https://crontab.guru" target="_blank">crontab.guru</a>.

:::

Cron Triggers enable Workflows to be run as frequently as once every minutes, or
as infrequently as you desire and can be scheduled on very specific dates or
times.

Each time a timed job succeeds, its `final_state` will be saved and used as the
input state for its next run.
[Webhook Security](../manage-projects/webhook-auth.md) page.

Learn how a workflow's initial `state` gets built from a cron trigger
[here](../jobs/state#cron-triggered-runs).

You can use a Cursor to help build input state when the workflow is triggered:
see the [Job Writing Guide](../jobs/job-writing-guide#using-cursors) for more
details.

Learn how `state` gets built from a cron trigger
[here](../jobs/state#cron-triggered-runs).

### Managing the size of `state` for Cron Workflows

Since state is passed between each run of a cron Workflow, if your Workflow Step
adds something new to state each time it runs, it may quickly become too large
to be practically handled. Imagine if a server response were adding, via
`array.push(...)`, to `state.references` each time the job ran. OpenFn supports
up to 50,000 bytes (via Erlang's `byte_size`), though most `final_state` byte
sizes are between 100 and 1000.

If the size of your `final_state` exceeds 10,000 bytes, OpenFn will send project
collaborators a warning email. If it exceeds 50,000 bytes, your run will still
succeed but its `final_state` will not be saved and the next time that job runs
it will inherit the previous, un-updated final state. (I.e., the last state that
was < 50,000 bytes.)

### A quick fix for final state bloat

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

## Kafka Triggers

The Kafka trigger allows OpenFn users to build Workflows triggered by messages
published by a Kafka cluster. The triggers make use of Kafka consumer groups
that are set up on-demand to receive messages from a defined cluster then
converts them to `Input` dataclips that are used to initialize a Work Order.

:::info For Self Hosted OpenFn

Instance administrators have to enable Kafka for their instance by setting
setting `KAFKA_TRIGGERS_ENABLED=yes` in the environment variable.

:::

![Configuring Kafka Trigger](/img/configuring-kafka.png)

:::info What is Kafka?

Apache Kafka® is an event streaming platform designed to handle high volumes of
data. Check out
[Kafka Docs](https://kafka.apache.org/documentation/#gettingStarted) to learn
more.

:::

### Configuring a Kafka trigger for your workflow

1. Create a new Workflow or open an existing Workflow in your Project
2. Click on the workflow's Trigger and change the trigger type to
   `Kafka Consumer` in the `Trigger type` dropdown.
3. Fill out the required connection details:

- **Hosts**: Provide the URL of the host(s) your trigger should listen to for
  message.
- **Topics**: Enter the topics your Kafka consumers should subscribe to. You
  need at least one topic for a successful connection.
- **SSL**: Some Kafka cluster require SSL connection. If you are connecting to
  an environment that requires SSL connection, select `Enable SSL`.
- **SSL Authentication**: Select the type of Authentication required for the
  Kafka cluster.
- **Initial offset policy**: The intial offset dictates where the consumer
  starts reading messages from a topic when it subscribes for the first time.
  There are three possible options: `earliest` messages available, `latest`
  messages available, or messages with a specific `timestamp` (e.g.,
  `1721889238000`).
- **Connect timeout**: The connect timeout specified in seconds (e.g., `30`)
  represents how long the consumer should wait before timing out when attempting
  to connect with a Kafka cluster.

4. If you have not finished designing your Workflow or you're not ready to start
   receiving messages from the Kafka cluster, please check the box to **disable
   the trigger** until you're ready for message ingestion to begin.

:::warning Disable the trigger during workflow design

Once the required connection information is provided via the modal, the trigger
will _immediately_ start attempting to connect to the Kafka cluster. We advise
that the trigger is disabled until your workflow is ready to receive data from
the cluster for processing. **To stop the trigger from receiving and processing
messages, check the `Disable this trigger` checkbox at the bottom of the trigger
configuration modal.**

:::

Learn how the initial `state` (and `Input`) for Kafka-triggered Workflows gets
built [here](../jobs/state#kafka-triggered-runs).
