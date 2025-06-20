---
title: Input and output state
---

Each Job requires an input state and (in most cases) will produce an output
state. This article explains these concepts in greater detail.

State is just a Javascript object. It is the means via which Jobs share
information between each other. It also provides a common scope for Operations
to read from and write to.

The final state form a Job must always be a serializable Javascript object (ie,
a JSON object). Any non-serializable keys will be removed.

![Job State Overview](/img/state-javascript.webp)

:::tip A note on terminology

Input state is often referred to as _initial state_, and output state is often
referred as _final state_. These terms can safely be used interchangeably.

:::

## State Keys

State objects tend to have the following keys:

- `data`: a temporary information store, usually used to save the result of
  particular operation
- `configuration`: an object containing credential data
- `references`: a history of previous `data` values
- `response`: often used by adaptors (like http) to save the raw http response
  from a request
- `errors`: a list of errors generated by a particular Workflow, indexed by Job
  name.

At the end of a Job, the configuration key will be removed, along with any other
non serialisable keys.

Adaptors will occasionally write extra information to state during a run - for
example, database Adaptors tend to write a `client` key to state, used to track
the database connection. These will be removed at the end of a Job.

## Input & output state for runs

Depending on whether you're running Workflows locally via the CLI or on the app, the input
state for a Run must be generated differently:

- When manually creating a work order, you must select or generate your input
  manually (e.g., by creating a custom `Input` on the app or `state.json` file
  if working locally [in the CLI](../build-for-developers/cli-intro.md)).
- When a work order is automatically created via a webhook trigger or cron
  trigger, state will be created as described below.

The final state of a Run is determined by what's returned from the last
operation. Remember that job expressions are a series of operations: they each
take state and return state, after creating any number of side effects. The final returned
state controls what is output by the run at the end of all of these operations.

Best practice is to include a final state cleanup step that removes any data
that should not persist between runs or be output (like PII), for example:

```js
// get data from a data source
get('https://jsonplaceholder.typicode.com/users')

// store retrieved data in state for use later in job
fn(state => {
    state.users = state.data;
  return state;
});

// get more data from another data source
get('https://jsonplaceholder.typicode.com/posts')

// store additional retrieved data in state for use later in job
fn(state => {
  state.posts = state.data;
  return state;
});

// compare data
fn(state => {
  if (state.users.length > state.posts.length) {
    // do something based on the comparison
  }
  return state;
});

// cleanup state at the end before finshing job
fn(state => {
  state.data = null
  state.users = null
  state.posts = null
 
  return state;
});
```

### Webhook triggered runs

On the platform, when a Run is triggered by a webhook event, the input state
contains important parts of the inbound **http request**.

The input state will look something like this:

```js
{
  data: { // the body of the http request
    formId: "patient_enrollment",
    name: "John Doe"
  },
  request: {
    method: "POST",
    path: ['i', 'your-webhook-url-uuid'] // an ordered array with optional additional paths
    headers: { "content-type": "application/json" }, // an object containing the headers of the request
    query_params: {} // an object containig any query parameters
  },
}
```

### Kafka triggered runs

When a Kafka message is fetched by the trigger, the input state contains the
message body and information that can be used for auditing or recovery if
connections are lost or workorders fail.

The input state looks like this:

```js
{
  data: { // the message value
    formId: "patient_enrollment",
    name: "John Doe"
  },
  request: {
    "headers": [
      // kafka headers can be used to provide additional metadata
    ],
    "key": "", // the key assigned to the message by the publisher
    "offset": 168321,
    "partition": 1,
    "topic": "fhir-data-pipes",
    "ts": 1721889238000 // the kafka message timestamp
  }
}
```

### Cron triggered runs

On the platform, when a Run is triggered by a cron job, the input state will the
final output state of the **last succesful run** for this workflow. This allows
each subsequent run to _know_ about previous runs—i.e., you can pass information
from one run to another even if they happen days apart.

```js
{
  ...finalStateOfLastSuccessfulRun,
}
```

If this is the first time the workflow has run, the initial state will simply by
an empty Javascript object: `{}`

## Input & output state for steps

State is also passed between each step in a workflow. The output state of the
previous step is used as the input state for the next step.

### On success

When a job succeeds, its output state will be whatever is returned by the last
operation.

```js
{
  data: { patients: [] },
  references: [1, 2, 3]
}
```

### On failure

When a step in a workflow fails, the error will be added to an `errors` object
on state, keyed by the ID of the job that failed.

```js
{
  data: { patients: [] },
  references: [1, 2, 3],
  errors: {
    jobId: { /* error details */ }
  }
}
```

See the below diagram for a visual description of how state might be passed
between Steps in a Workflow.

![Passing State](/img/passing-state-steps.webp)
