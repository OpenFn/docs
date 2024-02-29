---
title: Converting Triggers from v1 to v2
sidebar_label: Converting Triggers
slug: /converting-triggers
---

In this article we provide an overview of how to migrate your Triggers from
OpenFn v1 to v2.

## Converting Triggers

### Trigger Types on v1

We use
[4 types of triggers](../../versioned_docs/version-legacy/build/triggers.md) on
v1: Message Filters, Cron Triggers, Flow Triggers, and Fail Triggers.

### Converting Cron Triggers

Setting up a
[Cron Trigger on v2](documentation/build/triggers#cron-triggers-formerly-timers) works just
the same as on
[v1](documentation/versioned_docs/version-legacy/build/triggers#cron-triggers-formerly-timers):
when you're building a Workflow, select Cron Schedule as Trigger type, and set
the frequency.

### Converting Flow and Fail Triggers

With a Flow trigger, we can execute a job upon success of another specified job.
With a Fail trigger, the job will run if an another specified job failed.

On v2, we achieve the same conditional behavior with
[Path Conditions](documentation/build/paths): a job can run (1) always, (2), on success of
another job, (3) on failure of another job, or (4) on a custom condition - we'll
get to this last one in the next section.

So, if on v1 you had a Flow Trigger, on v2 you'll need to choose the
`On Success` condition between your jobs. If you had a Fail Trigger, select the
`On Failure` condition.

### Converting Message Filters

V1 Message Filters work with webhooks: if an external application sends data to
your project, you can check whether the incoming message meets (or doesn't meet)
certain criteria, and execute jobs accordingly.

V2 works on the same principle, with a somewhat different setup. Once you've
configured your [Webhook](documentation/build/triggers#webhook-event-triggers), you can use
a custom Path Condition that matches a JavaScript expression to decide whether a
subsequent job should be executed or not.
