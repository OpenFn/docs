---
title: Triggers
---

Triggers allow you to start the execution of workflows automatically. They come
in two types: Cron triggers and Webhook Event triggers.

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

The Kafka trigger allows OpenFn users to build workflows triggered by messages 
published by a Kafka cluster. The triggers make use of Kafka consumer groups that are 
set up on-demand to  receive messages from the cluster and pass them to an OpenFn pipleine 
that transforms the message into dataclips that used to initialize a workorder. 

![Configuring Kafka Trigger](/img/configuring-kafka.png)

### how to configure a Kafka trigger
1. Create a new workflow or Ooen an existing workflow
2. Click on the trigger step and change the trigger type to Kafka Consumer in the Trigger type dropdown
3. Fill out the required connection details: 
  - Hosts: Provide the URL of the host(s) your trigger should listen to for message.
  - Topics: What specific topics should the Kafka consumers subscribe to. You need at 
  least one topic for a successful connection
  - Some Kafka cluster require SSL connection. If you are connecting to an environment 
  that requires SSL connection, select `Enable SSL`
  - Select the type of Authentication and provide the username and password for 
  connecting to the instance. (see tip below for more information on authenticating Kafka)
  - Set the initial offset policy. The intial offset dictates where the consumer starts 
  reading messages from a topic when it subscribes for the first time. There are three 
  possible options here : `earliest`, `latest` or specific `timestamp` *for example: 1721889238000*.
  - Set the Connect timeout. The connect timeout specified in secs is the duraiton of time 
  the consumer can wait before timing out when attempting to connect with a Kafka cluster.
4. If you have not completed budiling your workflow or you're not ready to start receiving messages 
from the Kafka cluster, please disable the trigger until you're ready.  

:::warning Disable the trigger during workflw design
Once the required connection information is provided via the modal, the triggest start attempting to connect to the 
cluster. We advice that you disable the workflow until your workflow is ready to consumer data from cluster. To stop 
the trigger from receiving and processing messages, disable the trigger.
:::

Learn how a Kafka trigger workflow's initial `state` gets built from a webhook trigger
[here](../jobs/state#kafka-triggered-runs).