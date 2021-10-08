---
title: OpenFn Overview
sidebar_label: OpenFn Overview
---

## What's OpenFn?

OpenFn is a suite of data integration, interoperability, and workflow automation
tools that's used by governments, NGOs, and social enterprises, primarily in the
health and humanitarian sectors.

It includes both the OpenFn platform and the free and open-source
[OpenFn Integration Toolkit](/documentation/getting-started/integration-toolkit).

:::tip

In essence, it's software that makes it easier for these organizations to
connect the different technologies they use, share data, drive critical business
processes, and scale their interventions.

:::

## What's this site?

It's the one-stop-shop documentation site for all of OpenFn's products. You're
in the **getting started** section.

Here you will learn how to use OpenFn to build automation workflows that can be
as short and simple or as long and complex as you like. You also will learn
about all of the ways you can choose to deploy the automation flows you create.
Before you dive into the
[quick start](/documentation/getting-started/quick-start), let's start off with
some key terminology before we get started.

## Key terms

### Jobs

OpenFn automation centers around [jobs](/documentation/build/jobs), which define
the specific series of tasks or database actions OpenFn should perform. They can
be set to be activated (triggered) at certain time intervals or when data
matching specified criteria is received. You can think of jobs as a set of
instructions you might give a data entry staff member (e.g., create a new
Patient record in OpenMRS when a form containing a newly registered client is
received from CommCare, export data to DHIS2 every week on Friday 11pm, send SMS
with payment confirmation number when payment confirmation message is received
etc.).

:::note

Jobs are fully configurable and reusable. They can also be chained together to
create [multi-step automation](/documentation/jobs/multiple-operations) flows,
two-way syncs. and to keep data consistent between multiple applications (using
multi-app Saga patterns). You can read more on two-way synching below.

:::note

### Inbox

Most simply put, this is a secure URL which can receive HTTP requests from
anywhere on the web. Each project has one on OpenFn.

### Messages

A message is a chunk of data that's received by your inbox. It might `trigger`
(see below) a job run, and it contains the `body` and `headers` of the HTTP
request that was made to your inbox.

### Runs

A run is each individual execution of a job. Imagine that a job is configured to
create a new patient in OpenMRS whenever a case is opened in CommCare. Over the
next week, if 5 cases are opened in CommCare, you’ll see 5 different runs of
this one job in OpenFn. If 4 runs are successful and one has failed, you’ll see
4 new patients in OpenMRS, and your system administrator will have been notified
that one of those patients couldn’t be created (or whatever more robust
error-handling you’ve set up will take place.)

:::note

There’s not always a 1-to-1 mapping between runs and the real-world things
you’re working with. I might define a job that gets all updated event data from
DHIS2 for the last 2 weeks and publishes it to a public map using CartoDB. This
job will be triggered at specified time intervals, every 2 weeks in this case,
and after a month, we’ll only see 2 runs in OpenFn (that’s one run every two
weeks). Each run will have succeeded or failed, and each one might have
processed thousands of events from DHIS2.

:::note

### Job-states

Given the many-to-one relationship between `runs` and `messages` A
"message-job-state" (or simply a "job-state") is a calculation that can be
useful for organizations that need to understand if a given message has
_eventually_ been handled successfully.

:::info

A job state is defined as the result ("success", "failure", or "in progress") of
the _last_ run (ordered by the time it was finished, rather than when it was
inserted into the runs table) for a given message-job combination.

If two runs for the same message-job combination finished at the same time, it's
ordered by their start time, and then finally by their primary key. In reality,
since the same message-job combination can only be used to create a run once
every 10 seconds, this will almost never occur.

:::

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

### Triggers

Each job must be initiated with an event that acts as a trigger.

Triggers can be activated at a certain time (scheduled), when another job
completes, when another job fails, or when a certain message is received.

### Credentials

A credential is used to authorize connection to a destination system (e.g.,
Salesforce username, password & login URL).

### Adaptors

Adaptors, are small, open-source modules that provide your jobs with the
features they need to communicate with a particular system's API. Some examples
are `language-salesforce`, `language-dhis2`, `language-commcare`, etc. There are
~50 active adaptors at the moment, and anyone is free to build or enhance them.
