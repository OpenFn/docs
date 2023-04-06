---
title: Lightning Quick-Start (v2)
---

Follow this tutorial to get familiar with OpenFn Lightning. If you get stuck,
post a question to our [community forum](https://community.openfn.org/).

## 1. Register

Register for an account on
[app.openfn.org](https://app.openfn.org/users/register) and follow the link sent
to your inbox to confirm your email.

\*If you already have an account, you can
[login](https://app.openfn.org/users/log_in).

## 2. Understand the sample workflow

Click on the 'sample workflow' created for you on registration.

![lightning-workflows-page](/img/lightning-workflows-page.png)

:::tip

A **workflow** is a series of tasks to be carried out _automatically_ (i.e a
process that has been automated).

:::

The sample workflow pictured below formats and sends data from a source system
(KoboToolbox, a mobile data-collection app) to a destination system (DHIS2, a
health information management system). It automates patient registration by
taking a patient’s name and age and:

1. checking if they are over 18 months old;
2. converting it to the same format as DHIS2;
3. uploading it to DHIS2.

![lightning-sample-workflow](/img/lightning-sample-workflow.png)

It is made up of 3 _jobs_.

:::tip

A **job** is an action to be carried out at a given point in time. It has a
trigger, an adaptor, a credential and a job expression which each define _when,
where, how_ and _what_ to do.

:::

Click on Job 3 to view more details about it in the setup and editor tab.

### [SETUP TAB]

The SETUP TAB is where you define the when, where and how of your job.

![lightning_setup](/img/lightning_setup.png)

**When: trigger**

The trigger defines when an action should happen. It can be one of the
following:

- When data is sent to OpenFn Lightning from an external system: **_webhook_**
- At a recurring point in time: **_cron_**
- When the job which comes before it in the workflow succeeds: **_on success_**
- When the job which comes before it in the workflow fails: **_on failure_**

If you **never** want the job to run, you can disable it by unselecting the
'Enabled' checkbox.

:::tip

The trigger for the first job in a workflow will always be either a 'cron' or
'webhook' trigger. All the other jobs will have a trigger of 'on success' or 'on
failure'.

:::

**Where: adaptor**

The adaptor is what helps you communicate with and perform actions in a
particular system. In OpenFn, you can carry out an action in the following
systems:

- In OpenFn: OpenFn or common adaptors
- In an external system OpenFn has an adaptor for: commcare, DHIS2, google
  sheets, kobotoolbox ...
- In any other external system which has an API: http adaptor

**How: credential**

Credentials define _how_ a Job is able to perform an action on your behalf, just
as you would need to cover logging in if you were explaining how to carry out an
action manually.

:::tip

If you are performing an action in an external system, you'll need to select
_the same_ credential type as your adaptor.

:::

### [EDITOR TAB]

The EDITOR TAB is where you define _what_ the job should do and which data to
use.

:::tip

When you need to use data that comes from your webhook trigger (data sent from
your external system), cron trigger, or a previous job you can find it in
`state`. Learn more [here](https://docs.openfn.org/documentation/jobs/state/).

:::

![lightning_editor_1](/img/lightning_editor_1.png)

**What: Job expression**

The job expression defines what action to carry out and which data values to
use.

It gets added from the adaptor documentation _below_ the editor as an example
operation, and is then configured to use specific values from the state input
data. (see image below for details)

![lightning_editor](/img/lightning_editor.png)

## 3. Run the sample workflow

:::tip

A workflow will run when the trigger from the first job (represented as the
first node on the canvas) is called.

:::

In the case of the Sample Workflow, this is when data is sent to the webhook
URL. There are three ways of doing this.

Follow the instructions from _one_ of the options below to run your workflow.

### Manually send data to your first job trigger

Click on the first job in your workflow, then head to the input tab. Paste the
data below into the `custom input`, then click `run`.

```json
{
  "data": {
    "age_in_months": 19,
    "name": "Wycliffe Gigiwe"
  }
}
```

![lightning_manual_run](/img/lightning_manual_run.png)

:::tip

When a job is run, OpenFn adds the input into state (used to get data values in
the job expression), along with the credentials which get added to
configuration.

:::

### Send data through a curl request

You can also send data to a webhook URL by making a curl request in your
terminal.

Copy your webhook URL by clicking on the first node of your workflow, then use
it to replace `YOUR_WEBHOOK_URL` in the command below and run it in your CLI.

```sh
curl -H 'Content-Type: application/json' \
      -d '{"age_in_months": 19, "name": "Wycliffe Gigiwe"}' \
      -X POST \
      YOUR_WEBHOOK_URL
```

### Send data from your external system

:::tip

You can trigger a workflow from an external system by configuring it's REST
services to send data to your trigger webhook URL.

:::

In the case of our Sample Workflow, we're using KoboToolbox as an external
system.

[Log into](https://kf.kobotoolbox.org/accounts/login/#/) our KoboToolbox demo
account with _username: openfn_demo and password: openfn_demo_. Select the form
you’d like to connect ('Lightning sample workflow') and go to Settings -> REST
services -> Register a new service.

![kobo](/img/2.3_kobo_rest.png 'Register a REST service with Kobo')

Set the service name to OpenFn and the URL to the webhook URL (you can copy is
from the first node on your workflow).

![kobo](/img/2.4_kobo_rest.png 'Set the REST service URL to your OpenFn inbox URL')

Your form should now be configured to send data to the webhook trigger for your
first job whenever a response is submitted. We can test this out by submitting
some form responses at Form -> Open.

![kobo form](/img/2.5_open_kobo_form.png 'Open a kobo form')

## 4. Check your request got processed correctly

:::tip

The history page shows you each **work order** or _request for data to be
processed_.

:::

Now that you have run your workflow, head to the history page to see the work
order. You'll see it has a status of 'Success' which means it got processed
correctly.

![lightning_history](/img/lightning_history.png)

Click on the chevron next to the status to expand it and see each job run.

![lightning-history_expanded](/img/lightning_history_expanded.png)

## 5. Make a run that fails, then edit the job and retry it to make it succeed

From your workflow page, run the job manually with a patient that is 18 months
old using the data below.

```json
{
  "data": {
    "age_in_months": 18,
    "name": "Njoroge Orao"
  }
}
```

Head to the history page and see that the work order has a status of 'Failure'.
This is because the patient is **not** older than 18 months.

![lightning_history_failure](/img/lightning_history_failure.png)

Let's say we made a mistake and _actually_ wanted to register any patient that
is _**both**_ 18 months old _**and**_ above. We want to edit the job logic and
reprocess the request.

Head to the Editor tab in Job 1 to update the logic by changing the if statement
from `> 18` to `<= 18`.

Your Job expression should now be the following:

```js
fn(state => {
  if (state.data.age_in_months >= 18) {
    console.log('Eligible for program.');
    return state;
  } else {
    throw 'Error, patient ineligible.';
  }
});
```

Make sure to click save, then head back to your history page and find the work
order you want to reprocess. You can search for "Njoroge Orao" in the search bar
to find it.

Expand the work order, and click the 'rerun' button next to the first job run.

![lightning_retry](/img/lightning_retry.png)

You'll see a new **attempt** created in the same work order, which now succeeds.
The work order status also gets updated to the status of the last attempt to
show 'Success'.

![lightning_new_attempt](/img/lightning_new_attempt.png)
