---
title: Overview
sidebar_label: Overview
---

Welcome to OpenFn's documentation!

Here you will learn how to use OpenFn to build automation workflows that can be
as short and simple or as long and detailed as you like. You also will learn
about all of the ways you can choose to deploy the automations you create. Let's
start off with some key terminology before we get started.

## Key Terms

### Job

OpenFn automation centers around [jobs](docs/build/jobs.md), which define the
specific series of tasks or database actions OpenFn should perform. They can be
set to be activated (triggered) at certain time intervals or when data matching
specified criteria is received. You can think of jobs as a set of instructions
you might give a data entry staff member (e.g., create a new Patient record in
OpenMRS when a form containing a newly registered client is received from
CommCare, export data to DHIS2 every week on Friday 11pm, send SMS with payment
confirmation number when payment confirmation message is received etc.).

:::note

Jobs are fully configurable and reusable. They can also be chained together to
create [multi-step automation](jobs/multiple-operations) flows, two-way syncs.
and to keep data consistent between multiple applications (using multi-app Saga
patterns). You can read more on two-way synching below.
:::note

### Run

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

### Triggers

Each job must be initiated with an event that acts as a trigger.

Triggers can be activated at a certain time (scheduled), when another job
completes, when another job fails, or when a certain message is received.
