---
title: Limits
---

OpenFn has a number of configurable limits that help ensure smooth operation.
This page details what those limits are and how they can be adjusted.

:::tip Increasing limits

Contact enterprise@openfn.org to increase limits on standard plans, configure
custom limits on dedicated deployments, or get help adjusting limits on your
locally deployment instance.

:::

## Workflow execution duration

Each workflow attempt needs to complete in less than 1 hour.

This limit can be adjusted by an instance superuser via the `MAX_RUN_DURATION`
environment variable.

## Memory Usage

Each workflow attempt may not use more than `1GB` of memory.

This limit can be adjusted by an instance superuser via the `MAX_RUN_MEMORY`
environment variable.

## Dataclip Size

1. Each webhook request to a trigger URL cannot exceed `10MB`
2. If you are persisting the final state of each run as a dataclip, each
   dataclip may not exceed `10MB`
3. If you are persisting the final state of an attempt as a dataclip, it may not
   exceed `10MB`

These limits can be adjusted by an instance superuser via the
`MAX_DATACLIP_SIZE` environment variable.
