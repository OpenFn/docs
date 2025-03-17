---
title: Limits
---

OpenFn cloud hosted instance has a number of limits that help ensure smooth
operation. The table below shows the limits for different plans. For a more
detailed list of limits, see the
[OpenFn pricing page](https://openfn.org/pricing). For self hosted instances,
these limits are configurable. See the
[deployment guide](https://openfn.github.io/lightning/deployment.html#limits)
for more details.

| Feature                     | Description                                                  | DPG          | Free    | Core   | Growth  | Scale     | Unlimited |
| --------------------------- | ------------------------------------------------------------ | ------------ | ------- | ------ | ------- | --------- | --------- |
| Runs                        | Maximum number of runs allowed per month                     | Unlimited    | 100     | 2,000  | 5,000   | 10,000    | Unlimited |
| Workflow Execution Duration | Maximum time a workflow can run before being killed          | Configurable | 60 secs | 5 mins | 20 mins | 30 mins   | 30 mins   |
| Memory Usage                | Maximum memory allowed per workflow attempt                  | Configurable | 128MB   | 256MB  | 512GB   | 1GB       | 1GB       |
| Dataclip Size               | Maximum size for data clips persisted run states             | Configurable | 512KB   | 2MB    | 10MB    | 10MB      | 10MB      |
| AI Assistant                | Maximum AI tokens available                                  | Configurable | 500K    | 1.5M   | 5M      | 10M       | 10M       |
| Data Collections (Storage)  | Maximum storage for data collections                         | Configurable | 1MB     | 5MB    | 10MB    | 50MB      | 50MB      |
| Data Collections (Number)   | Maximum number of data collections per project               | Configurable | 2       | 5      | 10      | Unlimited | Unlimited |
| Concurrency Control         | Allowing users to control concurrency limits for the project | Configurable | Yes     | Yes    | Yes     | Yes       | Yes       |

<!--
To add this back in the future
| Workflow concurrency limit  | Maximum workflow runs that can be executed in parallel       | Configurable | N/A     | N/A    | N/A     | N/A       | N/A       |
| Project concurrency limit   | Maximum project runs that can be executed in parallel.       | Configurable | N/A     | N/A    | N/A     | N/A       | N/A       | -->

:::tip Increasing limits for cloud hosted and managed instances

For standard plans, you can increase your limits by upgrading to a higher plan
by following the
[upgrade plan instructions](/documentation/hosted/overview#upgrading-your-subscription).

For custom limits or upgrades in dedicated deployments, contact
enterprise@openfn.org. :::

## Workflow execution duration (1 hour)

Each workflow attempt needs to complete in less than `1 hour`. You can view the
duration of each attempt by clicking on the attempt ID. If an attempt exceeds
this limit, it will be killed by the worker and you'll see a `Killed:Timeout`
badge as your attempt state.

> _Instance superusers can control this limit the `MAX_RUN_DURATION` environment
> variable._

## Memory Usage (1GB)

Each workflow attempt may not use more than `1GB` of memory. You can view the
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
