---
title: Workflow Concurrency
sidebar_label: Workflow Concurrency
---

Concurrency refers the number of processes that are executed at the same time or
on overlapping time. In OpenFn, project administrators and editors are able to
limit the maximum number of the runs that can be executed at the same time for a
workflow.

## What happens when concurrency limit is set on a workflow?

When concurrency limit is configured for a workflow, the number of runs that can
be executed concurrently will not exceed the number that has been set for the
workflow. For instance, if a workflow has a concurrency limit of 2, not more
than 2 runs related to the workflow can be executed at a time and other runs
will have status `enqueued` until they are picked up by the worker. These runs
are also pick on a chronological manner by the worker.

![Setting concurrency limit to maximum of 2 runs at a time](/img/concurrency-limit-2.png)

## Setting Concurrency for a workflow

Concurency limits can be set via the workflow settings modal on the workflow
canvas.

1. Click on the settings icon beside the save button on your workflow to open
   the workflow settings
2. In the modal, enter the maximum concurrency limit
3. Click save.

![Configuring Concurrency](/img/configuring-concurrency.png)
