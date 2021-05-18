---
title: Limits
---

## NodeVM memory limits

The default memory limit for a Node process is `512MB` and unless you've
customized it for use on core or have agreed to a high-memory plan on
OpenFn.org, job runs will be killed by Node (`JavaScript heap out of memory`)
when they reach that threshold.

### Increase memory limit for an individual execution

For a `1GB` limit for an individual job, use:

```sh
node --max-old-space-size=1024 core execute ...arguments
```

### Increase memory limit for all jobs on that machine

For a `4GB` limit for all jobs, set an environment variable with:

```sh
export NODE_OPTIONS=--max_old_space_size=4096
```

## Request body limit on inboxes

The maximum size of the JSON body accepted on the `/inbox/your-uuid` endpoint is
`10MB`. Note that payloads should be kept well below this limit in order to
ensure that [Job state limits](#job-state-limits) are not hit when a subsequent
job run is executed.

:::note

If you're using OpenFn for bulk data processing/periodic batch jobs, you can
either reconfigure these limits on your microservice deployment or contact
enterprise@openfn.org to have special provisions made for your OpenFn.org
project.

:::

## Job state limits

State is saved to cloud storage/disk and there is a 10MB limit to the size of a
job's initial and/or final `state`.

If you're dealing with large amounts of data you've got to (a) keep your total
memory use below 512MB during execution and (b) clean up state so that whatever
you're passing to the next job, whether via FLOW or via saved state for a CRON
job, remains below 10MB.

Sometimes, this necessitates streaming data from A -> B in the same job. Other
times it will necessitate storing data as local variables and then posting data
to your inbox in chunks before cleaning up state.
