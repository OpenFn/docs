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

Click on the 'Sample workflow'.

![lightning-click-sample-workflow](/img/lightning-click-sample-workflow.png)

_This is a workflow which takes data submitted to a webhook URL (for example
from a CommCare form submission), checks it the patient is over 18 months old,
formats the data to the OpenHIE standard and then uploads it to DHIS2._

![lightning-sample-workflow](/img/lightning-sample-workflow.png)

_The top node shows you the trigger for the first job in your workflow. This is
what will trigger your workflow. In this case, it is when data is received at
the webhook URL._

![lightning-trigger-node](/img/lightning-trigger-node.png)

_Each node below the trigger represents a 'job' in your workflow. Once a job is
completed, it will trigger the next one. You can think of jobs as a set of
instructions to carry out._

![lightning-job-nodes](/img/lightning-job-nodes.png)

Click on the last job 'Upload to DHIS2'.

_The **adaptor** tells you which system it is performing an action in. The
**credential** tells you which account it is using to get authorisation in that
system._

![lightning-dhis2-job](/img/lightning-dhis2-job.png)

_In this case, we're using the DHIS2 adaptor to connect to DHIS2 and using DHIS2
play credentials to connect to the DHIS2 demo account._

:::tip

You'll notice some jobs use an adaptor called 'common'. This adaptor helps
manipulate data _before_ sending it to another system. This is the case for the
first two jobs in our workflow.

:::

## 3. Run it

Now that we know what the Sample workflow does, let's run it.

### Run manually

**To run it manually**, click on the first job node below the trigger and head
to the 'Input' tab. This is where you can select an input to run your job with.

:::tip The input dropdown allows you to run jobs manually.

You can select one of the three latest inputs the job was run with, or use your
own custom input.

:::

This job hasn't been run before, so let's create a custom input.

![lightning-custom-input](/img/lightning-custom-input.png)

Copy/paste the payload below into the 'custom input' box and click 'Run'.

```json
{
  "data": {
    "age_in_months": 19,
    "first_name": "Wycliffe",
    "last_name": "Bardo"
  }
}
```

You'll be taken to the output tab. This is where you can see the logs from your
run, and what the output looks like.

The **logs** will display any information that you choose to log during an
operation by using `console.log()`.

![lightning-logs](/img/lightning-logs.png)

The **output** is what is returned from your job. This is what gets passed onto
the next job.

![lightning-output](/img/lightning-output.png)

### Run through webhook request

**If you'd like to trigger it through the webhook**, click on the first node to
copy the webhook URL. Then make a curl request by pasting the command below with
your webhook URL into your command line.

```sh
curl -H 'Content-Type: application/json' \
      -d '{"age_in_months": 19, "name": "Wycliffe Gigiwe"}' \
      -X POST \
      https://your-webhook-url.com/
```

### View the work order history

Head to the History section in the navbar. You should now see one **workorder**,
with a final status of 'Success'. A work order is a request for data to get
processed.

![lightning-history](/img/lightning-history.png)

Click on the chevron to expand the work order and view each job run.

![lightning-work-order-expanded](/img/lightning-work-order-expanded.png)

### Retry a run to create a new attempt

If an attempt has failed (ex: one of the job runs failed), you can make a new
attempt from any job by clicking 'rerun' at the point at which you would like to
retry the attempt. This will create a new attempt, under the same work order.
The work order status will be the status of the last attempt.

![lightning-2-attempts](/img/lightning-2-attempts.png)
