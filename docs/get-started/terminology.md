---
title: Key Concepts
---

All across the OpenFn Integration Toolkit and this documentation site you'll
find some OpenFn-specific terminology that's important to understand. This page
is your reference guide—a glossary of the most important _OpenFn-specific_ words
and what they mean.

:::tip Something missing?

If you've come across a word, phrase, or concept that you think is missing from
this page, open an issue on [OpenFn/docs](https://github.com/OpenFn/docs),
suggest an edit to
[this page](https://github.com/OpenFn/docs/blob/main/docs/get-started/terminology.md),
or ask on the [Community](https://community.openfn.org)

:::

Please note that if you're looking for a glossary for generic terms used in
data-integration (rather than this _OpenFn-specific_ stuff) head over to the
[Glossary for Integration](/documentation/get-started/glossary) page in the
Design section. Otherwise, read on!

## Project

A Project is an administrative grouping in OpenFn like a "workspace".

On the platform (OpenFn/lightning), Projects define who can access your OpenFn
workflow configuration & history. Projects have an owner and one or more
Collaborators.

In local deployment and development, Project also corresponds to a
[`project.yaml`](/documentation/deploy/portability-versions#v2) file, which
defines a project' configuration.

In either case, a Project contains Workflows, Triggers, Credentials, and
everything you need to automate and integrate with OpenFn.

## Workflow

:::tip

Workflows are the **"what to do"** part of automation!

:::

A workflow is a structured sequence of tasks, processes, or actions that are
executed automatically based on predefined rules, triggers, and logic.

When working with AI, workflows provide the structured execution needed to turn
LLM insights into real-world actions, while AI agents enable more dynamic
decision-making within workflows.

A Workflow is a collection of a Trigger, Steps, Paths, and custom logic
connected together to automate a specific business process or task. A Workflow
is configured via the Canvas in the web app, or locally (via code).

OpenFn automation centers around [Workflows](/documentation/build/workflows),
which may have one or multiple Steps. Workflows can be run in real-time (based
on an event -e.g., new patient registration), on a scheduled basis (e.g., every
day at 8am), or manually on-demand.

Think of workflow as a set of instructions you might give a staff member (e.g.,
please create a new Patient record in OpenMRS when a form containing a newly
registered client is received from CommCare, export data to DHIS2 every week on
Friday 11pm, send SMS with payment confirmation number when payment confirmation
message is received etc.).

Common Workflows automate:

- Reporting for enhanced/faster program monitoring (especially mobile-to-MIS
  reporting)
- Rote data ETL (extract, transform, load) and data cleaning steps
- Alerts (SMS, email)
- Referrals between partner systems
- Task assignments or approvals
- Grievance or case reporting
- Financial tansactions or payments

:::note Workflows are reusable

Workflows are fully configurable and reusable. They can also be chained together
to automate multi-step processes and two-way data syncs to keep data consistent
between multiple applications (using multi-app Saga patterns).

:::note

### Adaptor

:::tip

Adaptors are the **"where to do it"** part of automation!

:::

OpenFn [Adaptors](/adaptors) are open-source modules that provide your Workflows
with the features they need to communicate with a particular system's API. Some
examples are [dhis](/adaptors/dhis2), [`postgresql`](/adaptors/postgresql), and
[`http`](/adaptors/packages/http-docs) etc. There are more than 70 active
adaptors at the moment, and anyone is free to build or enhance them. See
[GitHub/Adaptors](https://github.com/OpenFn/adaptors) for the source code.

### Credential

:::tip

Credentials are the **"how to log in"** part of automation!

:::

A Credential is used to authenticate with a destination app (e.g., Database
username, password & login URL) so that a Workflow Step can run. Via OpenFn's
security model, Credentials are separated from the Workflows themselves to
ensure that stored usernames and passwords (which are all encrypted) do not get
leaked or accessed by the wrong people.

## Trigger

:::tip

Triggers are the **"when to do it"** part of automation!

:::

A [Trigger](/documentation/build/triggers) determines **how and when** Workflows
should execute automatically (e.g., real-time or schedule-based). When
activated, Triggers create a new
[Work Order](/documentation/get-started/terminology#work-order) and run (or
"execute") the Workflow.

A "Webhook Event" Trigger may be configured if you want your Workflow to execute
in real-time when an event in an external app occurs (e.g., new form submitted,
new notification received).

A "Cron" Trigger may be configured if you want your Workflow to execute
according to a specific schedule (e.g., daily at 8am, the 1st Monday of every
month).

## Work Order

:::tip

Work Orders capture **"when & what triggered"** the automation, and help us
monitor if and when the Workflow is successfully completed.

:::

A Work Order is a request to execute a Workflow with a given input (e.g, a new
form submission or patient record that needs to be processed).

A Work Order is created every time a Workflow's Trigger is activated, or
manually by an Admin user.

For a Work Order to be completed successfully, the Work Order should reach an
ending Step succesfully (without errors) - this ensures that the processing has
been completed. Multiple Workflow "Runs" may be required for a given Work Order
to be considered succesful.

Work Orders enable users to closely monitor whether unique inputs (e.g.,
"patient record 123") are successfully processed by a given workflow, for a
"case-management" auditing experience.

Imagine that a Workflow is configured to create a new patient in OpenMRS
whenever a new case is opened in CommCare. Over the next week, if 5 cases are
opened in CommCare, you’ll see 5 different Work Orders for this one Workflow. If
4 Work Orders are successful and one has failed, you’ll see 4 new patients in
OpenMRS, and your system administrator will have been notified that one of those
patients couldn’t be created (or whatever more robust error-handling you’ve set
up will take place.)

![Work Order](/img/work_order_shot.png)

:::note

There’s usually a 1-to-1 mapping between Work Orders and the real-world things
you’re working with. I might create a Workflow that gets all updated event data
from DHIS2 for the last 2 weeks and publishes it to a public map using CartoDB.
This Workflow will be triggered at specified time intervals, every 2 weeks in
this case, and after a month, we’ll only see 2 Work Orders in OpenFn (that’s one
every two weeks). Each Work Order will have success or failed status with
related Runs that capture the details of each transaction and how many event
records may have been processed.

:::

## Run

:::tip

Runs capture **"what happened"** in the automation!

:::

A Run is an individual execution attempt to complete a Work Order. Multiple
Workflow Runs may exist to fulfill one Work Order (because the first Run might
fail, so it needs to be retried to successfully process).

Runs have start times, end times, logs, and status codes that indicate when they
took place, what they did, and whether or not they succeeded.

![OpenFn Workflow Canvas](/img/run_view_logs.png)

Imagine that a Workflow is configured to create a new patient in OpenMRS
whenever a new case is opened in CommCare. Today if 1 patient is created, then:

- 1 Work Order will be created in OpenFn. This will trigger a Run to execute to
  create the patient in OpenMRS.
- If that Run fails due to an error (e.g., OpenMRS user password is incorrect,
  or patient is missing required information), then the "Status" of that Run and
  related Work Order will show as `failed`.
- OpenFn users can correct the error and then choose to "rerun" that failed Run.
  This will create a 2nd Run related to the original Work Order. If it
  successed, then the "Status" of the 2nd Run and Work Order will show as
  "success".

### Logs

Logs are the records generated by the workflow execution engine to capture the
activities performed when running a Workflow or specific Step.

OpenFn developers can control what appears in Logs by editing `console.log(...)`
statements in the Workflow job expressions of individual Steps.

![Logs](/img/logs_run.png)

## History

On the platform, the History page provides a list of all of the Work Orders and
Runs that have been processed in a Project.

![History](/img/case-referral-history.png)

## Inspector

On the platform, the Inspector interface allows users to edit, test, and run
workflows.

The Inspector has 3 key interfaces: `Input`, `Editor`, & `Output`.

![Inspector](/img/inspector_interfaces.png)

### Input

An Input is the data (`json`) that is used as the starting Input for a Workflow
Step to utilise when it's run. Every Run will have an Input (initial state) and
Output (final state).

Inputs may be created automatically by a webhook event (e.g., a message
forwarded or JSON payload posted to OpenFn) or another Workflow Step, or
manually by an OpenFn user.

Example Input from a form submission from a mobile data collection app (e.g.,
Kobo, ODK, CommCare):

```json
{
  "data": {
    "form": {
      "@name": "Register New Patient",
      "case": {
        "@case_id": "a9bX12c",
        "@date_modified": "2021-01-21T07:08:19.431000Z",
        "@user_id": "aaa",
        "@xmlns": "http://commcarehq.org/case/transaction/v2",
        "create": {
          "case_name": "John Doe",
          "age": 16,
          "case_type": "patient",
          "owner_id": "alan.worker"
        }
      }
    }
  }
}
```

### Output

An Output is the final data (`json`) that is outputted by a workflow Step,
according to the business logic defined in the Step's job expression. Outputs
are either passed to the next Step in the workflow and/or to the connected
destination app.

Example Output if that form submission example (see above section) was mapped to
a connected case management app:

```json
{
  "data": {
    "patient": {
      "full_name": "John Doe",
      "age_at_enrollment": 16,
      "type": "new",
      "source": "mobile-app"
    }
  }
}
```
