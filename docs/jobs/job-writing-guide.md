---
sidebar_label: Introduction
title: Job Writing Guide
---

Workflow automation and data integration in OpenFn is realised through the
creation of Jobs.

This guide will walk you through key concepts and best practices for job
writing. It is suitable for new coders and experienced JavaScript programmers.
In fact, even if you're an experienced JavaScript developer, there are a number
of key patterns in the OpenFn ecosystem which it is important to learn.

:::tip

If you're writing jobs on the platform app (Lightning), you can use the
[AI Assistant](/documentation/build/ai-assistant) to help you. You'll find it in
the Inspector.

:::

A Job is a bunch of JavaScript code which performs a particular task, like
fetching data from Salesforce or converting some JSON data to FHIR standard.

Each job uses exactly one Adaptor (often called a "connector") to perform its
task. The Adaptor provides a collection of helper functions (Operations) which
makes it easy to communicate with a data source.

This guide applies equally to writing Jobs on the app (Lightning) or through the
CLI.

:::info Workflows

Multiple jobs can be chained together in a Workflow. A common pattern is to use
one job to fetch data from datasource A, one job to convert or transform that
data to be compatible with datasource B, and a third job to upload the
transformed data to datasource B.

To learn more about workflow design and implementation, see
[Build & Manage Workflows](build/workflows.md)

:::

## Next Steps

The best way to learn how to write OpenFn jobs is to write OpenFn jobs.

You can [get started with CLI](/documentation/cli) and start running jobs
locally. Then take a look at the [CLI Challenge](/documentation/cli-challenges)
to really exercise your job writing skills.

If you're ready to start using the app, take a look at this guide to
[create your first Workflow](/documentation/build/workflows).

Workflow design is a non-trivial problem, so you might also like to review the
Workflow [Design Process docs](/documentation/design/design-overview).

:::info Questions?

If you have any job-writing questions, ask on
[Community](https://community.openfn.org) to seek assistance from the OpenFn
core team and other implementers.

:::
