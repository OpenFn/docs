---
title: OpenFn Concepts
---

All across the OpenFn Integration Toolkit, the iPaaS, and this documentation
site you'll find some OpenFn-specific terminology that's important to
understand. This page is your reference guide—a glossary of the most important
_OpenFn-specific_ words and what they mean.

:::tip Keep In Mind

As you read about the terms below, remember that in order to make OpenFn perform
some sort of data integration work you'll always need to specify:

- **What** to do (e.g., update patient data in some system)
- **When** to do it (e.g., at 7am every day)
- and **How** to log in (e.g., go to `example.com` and use `abc123` as the
  security token)

With this in mind, let's check out the key terms.

:::

Please note that if you're looking for a glossary for generic terms used in
data-integration (rather than this _OpenFn-specific_ stuff) head over to the
[Glossary for Integration](/documentation/getting-started/glossary) page in the
Design section. Otherwise, read on!

## Project

A project is an administrative grouping in OpenFn. In
[OpenFn/microservice](/documentation/microservice/home/), it corresponds to a
[`project.yaml`](/documentation/portability#proposal-v2-latest) file. On the
platform, it's got an owner, a billing plan, and a bunch of
collaborators—different users that have been granted access to the project. In
either case, a project contains jobs, triggers, credentials, and everything you
need to run an integration with OpenFn.

## Job

:::tip

Jobs are the **"what to do"** part of automation!

:::

OpenFn automation centers around [jobs](/documentation/build/jobs), which define
the specific series of operations (i.e., tasks) that OpenFn should perform. Jobs
can be executed at certain times, when message arrive from outside systems, or
when _other jobs_ succeed or fail. Think of jobs as a set of instructions you
might give a data entry staff member (e.g., Please create a new Patient record
in OpenMRS when a form containing a newly registered client is received from
CommCare, export data to DHIS2 every week on Friday 11pm, send SMS with payment
confirmation number when payment confirmation message is received etc.).

:::note Jobs are Reusable

Jobs are fully configurable and reusable. They can also be chained together to
create [multi-step automation](/documentation/jobs/multiple-operations) flows,
two-way syncs, and to keep data consistent between multiple applications (using
multi-app Saga patterns). You can read more on two-way syncing below.

:::note

### Adaptor

OpenFn [adaptors](/documentation/build/adaptors) are open-source modules that
provide your jobs with the features they need to communicate with a particular
system's API. Some examples are `language-dhis2`, `language-commcare`,
`language-salesforce`, `language-postgresql`, etc. There are more than 50 active
adaptors at the moment, and anyone is free to build or enhance them.

### Operation

An [operation](/documentation/jobs/operations) is the sub-task inside a job. For
example, a job for loading data to DHIS2 might include 3 separate operations:

1. Create a new "program".
2. Create many new "tracked entity instances".
3. Enroll those tracked entity instances in the program.

## Trigger

:::tip

Triggers are the **"when to do it"** part of automation!

:::

A [trigger](/documentation/build/triggers) determines **when** to run a job
automatically. A trigger could be set up to run a job when a message arrives
(this is known as a `message filter` trigger), on a cron schedule (a `cron`
trigger) or based on the success or failure of _another_ job(a `flow` or `catch`
trigger). A simple cron trigger might specify to run a job at "7am every
weekday".

## Credential

:::tip

Credentials are the **"How to log in"** part of automation!

:::

A [credential](/documentation/build/credentials) is used to log in to a
destination system (e.g., Salesforce username, password & login URL) so that a
job can run. Via OpenFn's security model, they are separated from the jobs
themselves to ensure that stored usernames and passwords (which are all
encrypted) do not get leaked or accessed by the wrong people.

## Message

A message is a chunk of data that's been received by your inbox. (Technically,
it's an HTTP request.) It might trigger a job run, and it contains the `body`
and `headers` of the HTTP request that was made to your inbox.

### Inbox

Your project's [inbox](/documentation/build/inbox) contains all of the messages
that have been sent to your project. Messages are stored payloads or data (e.g.,
an incoming SMS, a submitted CommCare form) that were sent via HTTP post to your
inbox.

:::info Inbox URL

Click the link icon in the top right of the "Inbox" page to copy your inbox URL.
You can then use this URL to send data to OpenFn.

:::

## Run

A run is each individual execution of a job. Imagine that a job is configured to
create a new patient in OpenMRS whenever a case is opened in CommCare. Over the
next week, if 5 cases are opened in CommCare, you’ll see 5 different runs of
this one job. If 4 runs are successful and one has failed, you’ll see 4 new
patients in OpenMRS, and your system administrator will have been notified that
one of those patients couldn’t be created (or whatever more robust
error-handling you’ve set up will take place.)

Runs have start times, end times, logs and exit codes that indicate when they
took place, what they did, and whether or not they succeeded.

:::note

There’s not always a 1-to-1 mapping between runs and the real-world things
you’re working with. I might define a job that gets all updated event data from
DHIS2 for the last 2 weeks and publishes it to a public map using CartoDB. This
job will be triggered at specified time intervals, every 2 weeks in this case,
and after a month, we’ll only see 2 runs in OpenFn (that’s one run every two
weeks). Each run will have succeeded or failed, and each one might have
processed thousands of events from DHIS2.

:::note

### Activity History

On the platform, the Activity History section provides a list of all of the runs
that have taken place in a project. ("Activity History" is to "Run" and "Inbox"
is to "Message".)

## Related Runs and Messages

Given the many-to-one relationship between `runs` and `messages`, OpenFn
provides an interface for viewing a messages **"job-state"**. This is a
calculation that can be useful for organizations that need to understand if a
given message has _eventually_ been handled successfully.

A job state is defined as the result ("success", "failure", or "in progress") of
the _last_ run (ordered by the time it was finished, rather than when it was
inserted into the runs table) for a given message-job combination.

If two runs for the same message-job combination finished at the same time, it's
ordered by their start time, and then finally by their primary key. In reality,
since the same message-job combination can only be used to create a run once
every 10 seconds, this will almost never occur.

:::info A Job state example

Consider a message which should trigger both a case referral job and a payment
job. Two runs will get created when the message arrives, with the referral
succeeding and the payment failing. Navigating to the inbox, you'd see two
"job-states" for that single message:

1. Referral (success - run 1)
2. Payment (failure - run 2)

If an administrator then made some sort of change, re-ran the failed payment job
for that message, and this third run succeeded, you'd still only see 2
"job-states" in the inbox, but they'd both be successful:

1. Referral (success - run 1)
2. Payment (success - run 3)

Browsing to the receipt inspector would show all three runs for this single
message.
