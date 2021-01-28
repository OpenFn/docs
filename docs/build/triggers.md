---
title: Triggers
---

Triggers _start_ jobs running. They come in 4 types. The most common are
"message filter" triggers, but there are also "cron" triggers, "flow" triggers,
and "fail" triggers.

## Trigger types

### Message Filter Triggers

Message Filter triggers watch for inbound messages and check to see if the data
in those message match their **criteria**. If they do, and there is an active
job configured to use that trigger, a run will be started.

You, as a user, specify the filter **criteria** which determines which inbound
messages should trigger job runs. This means that if any segment of a message
body **matches** the string of `JSON` you gave as a filter, the filter will run
and trigger a job (assuming you created one).

The filter criteria takes the form of a string of valid `JSON`. In a SQL query,
this string will be used in the WHERE clause, for example:

```sql
SELECT * FROM receipts
  WHERE body::jsonb @>
    '{"Name":"Aleksa Iwobi"}'::jsonb;
```

There is a more detailed explanation of filter matching below.

### Cron Triggers (formerly timers)

Cron triggers run jobs based on a cron scheuled. They can run as frequently as
once every minutes, or as infrequently as you desire and can be scheuled on very
specific dates or times. Each time a timed job succeeds, its `final_state` will
be saved and used as the `initial_state` for its next run. See "Managing state"
and "Keeping a cursor" below for implementation help.

The best way to learn about `cron`, if you're not already familiar, is through
the OpenFn interface or
<a href="https://crontab.guru" target="_blank">crontab.guru</a>.

### Flow Triggers

Flow triggers will execute a job _after_ another specified job finishes
successfully. E.g., a flow trigger which specifies the succesful run of Job A
can be used by Job B. Each time Job A succeeds, Job B will start to run with the
`final_state` of Job A as its `initial_state`.

### Fail Triggers

Fail, or "catch", triggers work just like flow triggers, except that they watch
for the failure, rather than the success, of a specified job. (E.g., Job A pays
a CHW via MPESA. If Job A _fails_ we should initiate Job B, which sends an SMS
to the district manager instructing them to manually pay the CHW.)

## Processing cron jobs

**On-demand processing for cron jobs.** If you’re leveraging cron triggers to
run jobs at specific times, you can also run that cron triggered job on demand.
This way you don’t have to wait for the timer to expire before testing! Simply
click the process/ “play” button now available via the Job, Run, and Activity
History pages.

![Runs list run time trigger button](/img/timetriggerunslist.png)

![Run history time trigger button](/img/runtimetrigger1.png)

## Filter Matching in Detail

To illustrate filter matching, refer to the `JSON` strings below. Message "a"
will match filter '1', but message "b" will not.

### Filter 1

```json
{ "formID": "patient_registration_v7" }
```

#### Message a (MATCH)

```json
{
  "submissionDate": "2016-01-15",
  "formID": "patient_registration_v7",
  "name": "Jack Wilshere",
  "dob": "1986-05-16",
  "medications": ["anaphlene", "zaradood", "morphofast"]
}
```

#### Message b (NO MATCH)

```json
{
  "submissionDate": "2016-01-16",
  "formID": "patient_registration_v8",
  "name": "Larry Bird",
  "dob": "1982-03-21",
  "medications": ["anaphlene", "zaradood", "morphofast"]
}
```

Message 'b' does not include `"formID":"patient_registration_v7"` and will not
match filter '1'.

#### Keeping a cursor in `state` for timer Jobs

Because many timer jobs require keeping some sort of record of their previous
run to modify their later actions, `state` is passed between the runs. One
example might be keeping a "cursor" to select only new records from a database.
We'd expect the following logic:

1. `job-1` fetches patients from the database
2. `job-1` does something important with those patient records
3. `job-1` saves the `id` of the last successfully processed patient to
   `final_state`
4. when `job-1` runs again, it fetches patients whose `id` is greater than the
   `id` of the last successfully processed patient.

To achieve this you might write:

```js
fetchPatient({ type: 'referral', offset: state.lastId }, state => {
  // Assuming the system returned an array of patients in the "data" key.
  state.lastId = state.data.patients.sort((a, b) => b.id - a.id)[0];
  return state;
});
```

The initial offset will be `null`, but the subsequent runs will automatically
only fetch "new" patients.

#### Managing the size of `state` for Timer Jobs

Since state is passed between each run of a timer job, if your job adds
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

##### A quick fix for final state bloat

Most often, final state bloat is due to improper handling of `state.references`
or `state.data`. This can be fixed by adding the following lines _either_ to the
callback of your language-package's operation (if it allows for one) or by
appending an `alterState(...)` operation after your operation.

```js
alterState(state => {
  state.custom = somethingIntentional;
  state.data = {};
  state.references = [];
  return state;
});
```

## More filter samples

### Match messages `WHERE` the `formId` is `"Robot_Photo_21.04.2015"`

```json
{ "formId": "Robot_Photo_21.04.2015" }
```

### Match a message `WHERE` this `AND` that are both included

```json
{ "formId": "Robot_Photo_21.04.2015", "secret_number": 8 }
```

### Match a message with two fragments inside an array called `data`

(This is useful when gathering data via ODK)

```json
{ "data": [{ "outlet_call": "TRUE", "new_existing": "Existing" }] }
```

### Match a message with a fragment inside another object called `form`

```json
{
  "form": {
    "@xmlns": "http://openrosa.org/formdesigner/F732194-3278-nota-ReAL-one"
  }
}
```
