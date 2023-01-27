---
title: Lightning Quick-Start (v2)
---

Follow this tutorial to get familiar with OpenFn Lightning. If you get stuck,
post a question to our [community forum](https://community.openfn.org/).

## 1. Register

Register for an OpenFn Lightning account on
[app.openfn.org](https://app.openfn.org/users/register).

![lightning-register](/img/lightning-register.png)

Follow the link sent to your inbox to confirm your email.

![lightning-email-confirmation](/img/lightning-email-confirmation.png)

_If you already have an account, you can
[login](https://app.openfn.org/users/log_in)._

## 2. View the example workflow

2.1 Click on the 'Sample workflow' that has been created for you.

![lightning-click-sample-workflow](/img/lightning-click-sample-workflow.png)

This is a workflow which takes data submitted to a webhook URL (for example
through a KoboToolbox or CommCare form submission), checks it the patient is
over 18 months old, formats the data to the OpenHIE standard and then uploads it
to DHIS2.

![lightning-sample-workflow-a](/img/lightning-sample-workflow-a.png)

The top node shows you what triggers the first job in your workflow (ie: when it
will run). Each node below it represents a **job** in your workflow.

Once a job is completed, it will trigger the next one.

_When Job 1 succeeds, it will trigger job 2._

2.2 Open up the job inspector by clicking on the last job 'Upload to DHIS2'

![lightning-dhis2-job](/img/lightning-dhis2-job.png)

The **trigger** tells you when the job runs: when Job 2 succeeds.

The **adaptor** tells you which system it is performing an action in: DHIS2.

The **credential** tells you which account it is using to get authorisation in
that system: DHIS2 play.

:::tip

You'll notice some jobs use an adaptor called 'common'. This adaptor helps
manipulate data _before_ sending it to another system. This is the case for the
first two jobs in our workflow.

:::

Click on the 'Editor' tab in the job inspector.

![lightning-dhis2-editor](/img/lightning-dhis2-editor.png)

This is where you will find the **job expression**.

The adaptor documentation below the editor shows you the operations available in
the adaptor which you can add and configure yourself.

## 3. Run it

Now that we know what the 'Sample workflow' does, let's run it.

### Run manually

Click on the first job node below the trigger and head to the 'Input' tab. This
is where you can select an input to run your job with.

This job hasn't been run before, so let's create a custom input.

![lightning-custom-input](/img/lightning-custom-input.png)

Copy/paste the payload below into the 'custom input' box and click 'Run'.

```json
{
  "data": {
    "age_in_months": 19,
    "name": "Wycliffe Bardo"
  }
}
```

You'll be taken to the output tab. This is where you can see the logs from your
run, and what the output looks like.

:::tip

The **logs** will display any information that you choose to log during an
operation by using `console.log()`. (See job 1 for an example)

:::

![lightning-logs](/img/lightning-logs.png)

The **output** is what is returned from your job. This is what gets passed onto
the next job.

![lightning-output](/img/lightning-output.png)

### View the work order history

Head to the History section in the navbar. You should now see one workorder,
with a final status of 'Success'.

A **work order** is a request for data to get processed.

![lightning-history](/img/lightning-history.png)

Click on the chevron to expand the work order and view each job run.

![lightning-work-order-expanded](/img/lightning-work-order-expanded.png)

### Retry a run to create a new attempt

If an attempt has failed (ex: one of the job runs failed), you can make a new
attempt from any job by clicking 'rerun' at the point at which you would like to
retry the attempt. This will create a new attempt, under the same work order.
The work order status will be the status of the last attempt.

![lightning-2-attempts](/img/lightning-2-attempts.png)

## 4. Bonus

### Trigger your job through a webhook request

**If you'd like to trigger it through the webhook**, click on the first node to
copy the webhook URL. Then make a curl request by pasting the command below with
your webhook URL into your command line.

```sh
curl -H 'Content-Type: application/json' \
      -d '{"age_in_months": 19, "name": "Wycliffe Gigiwe"}' \
      -X POST \
      https://your-webhook-url.com/
```
