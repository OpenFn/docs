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

## Workflow execution duration (1 hour)

Each workflow attempt needs to complete in less than `1 hour`. You can view the
duration of each attempt by clicking on the attempt ID. If an attempt exceeds
this limit, it will be killed by the worker and you'll see a `Killed:Timeout`
badge as your attempt state.

> _Instance superusers can control this limit the `MAX_RUN_DURATION` environment
> variable._

## Memory Usage (500 MB)

Each workflow attempt may not use more than `500 MB` of memory. You can view the
maximum memory usage of each attempt by clicking on the attempt ID. If an
attempt exceeds this limit, it will be killed by the worker and you'll see a
`Killed:OOM` badge as your attempt state.

> _Instance superusers can control this limit via the `MAX_RUN_MEMORY`
> environment variable._

## Dataclip Size (10MB)

1. Each **webhook request** to a trigger URL cannot exceed `10MB`.
2. If you are persisting the final state of each **run** as a dataclip, each
   dataclip may not exceed `10MB`.

<!-- TODO: make final decision on attempt states -->
<!-- 3. If you are persisting the final state of an **attempt** as a dataclip, it may
   not exceed `10MB`. -->

If you send a payload to a webhook trigger URL which breaches this limit, the
server will respond with a `413` error with a `:request_entity_too_large`
message.

If the dataclips produced by the final state of runs and attempts are too large,
they will not be persisted. The worker will still process downstream steps but
these steps will not be retryable because Lightning won't save a copy of the
dataclips. You will see an `ERROR: DataClip too large for storage` error in your
attempt logs.

> _Instance superusers can control this limit via the `MAX_DATACLIP_SIZE`
> environment variable._
