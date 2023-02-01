---
title: Lightning Quick-Start (v2)
---

Follow this tutorial to get familiar with OpenFn Lightning. If you get stuck,
post a question to our [community forum](https://community.openfn.org/).

## 1. Register

Register for an account on
[app.openfn.org](https://app.openfn.org/users/register) and follow the link sent
to your inbox to confirm your email.

<!---
I don't know if we need this picture, registering is pretty self-explanatory.
![lightning-register](/img/lightning-register.png)
![lightning-email-confirmation](/img/lightning-email-confirmation.png)
-->

\*If you already have an account, you can
[login](https://app.openfn.org/users/log_in).

## 2. Understand the sample workflow

Once you've registered for an account you'll be taken to your workflows page
with the ‘Sample workflow’ we’ve created for you.

![lightning-workflows-page](/img/lightning-workflows-page.png)

:::tip

A **workflow** is a series of tasks to be carried out _automatically_ (i.e a
process that has been automated).

:::

<!---
<— add data somewhere ? Do these things with this data
-->

This sample workflow (pictured below) automates patient registration by taking a
patient’s name and age and:

1. checking if they are over 18 months old;
2. converting it to the same format as DHIS2;
3. uploading it to DHIS2 (a digital health information system).

![lightning-sample-workflow](/img/lightning-sample-workflow.png)

The sample workflow is made up of 3 _jobs_.

:::tip

A **job** is an action to be carried out at a given point in time. It has a
trigger, an adaptor, a credential and a job expression which each define _when,
where, how_ and _what_ to do.

:::

Click on a job to view more details about it.

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

:::tip

The first job in a workflow can only have a cron or webhook trigger. All the
other jobs will have a trigger of on success or on failure.

:::

**Where: adaptor**

The adaptor is what helps you communicate with and perform actions in a
particular system. In OpenFn, you can carry out an action in the following
systems:

- In OpenFn: OpenFn or common adaptors
- In an external system: commcare, DHIS2, google sheets, kobotoolbox ...
- In any external system which has an API: http adaptor

**How: credential**

Just as you need to log in when you do something manually in an external system,
you need to provide credentials to do that same thing automatically.

If you are performing an action in an external system, you'll need to select the
same credential type as your adaptor.

### [EDITOR TAB]

The EDITOR TAB is where you define _what_ the job should do and which data to
use.

![lightning_editor_1](/img/lightning_editor_1.png)

**What: Job expression**

The job expression defines what action to carry out and which data values to
use.

It is an example operation which has been added from the adaptor documentation
and then configured to use specific values from the state input data.

![lightning_editor](/img/lightning_editor.png)

## 3. Run the sample workflow

:::tip

A workflow will run when the trigger from the first job (represented as the
first node on the canvas) is called.

:::

In the case of the Sample Workflow, this is when data is sent to the webhook
URL. There are two ways of doing this:

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

### Through a curl request

You can send data to a webhook URL through a curl request in your terminal.

Copy your webhook URL, then use it to replace `YOUR_WEBHOOK_URL` in the command
below and run it in your CLI.

```sh
curl -H 'Content-Type: application/json' \
      -d '{"age_in_months": 19, "name": "Wycliffe Gigiwe"}' \
      -X POST \
      YOUR_WEBHOOK_URL
```

## 4. Check your request got processed correctly

:::tip

A **work order** is a request for data to get processed. You can view these on
your history page.

:::

Now that you have run your workflow, head to the history page to see it.

![lightning_history](/img/lightning_history.png)

You'll see it has a status of 'Success' which means it got processed correctly.

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

Head to the history page and see that the work order has a status of 'Failure'
because the patient is not older than 18 months.

Imagine we made a mistake and _actually_ wanted to register any patient that is
both 18 AND above.

Head to the Editor tab in Job 1 to update the logic. Change the `<` to `<=` then
click save.

Now that we've updated the logic, we want to reprocess that work order with the
new logic.

Find the work order in the history page (you can search for "Njoroge Orao" in
the search bar to find it). Expand the work order, and click the retry button
from the first job to trigger the workflow again with the same input.

You'll see a new ••attempt••, which this time succeeds. Your work order status
will also be updated.
