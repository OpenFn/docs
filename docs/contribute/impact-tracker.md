---
title: Impact Tracker
id: impact
---

## Introduction

OpenFn is a free and open-source Digital Public Good. Many users are unable to
contribute financially or by participating in our product development community,
but by sending these nightly anonymous aggregate usage reports they ensure the
long-term sustainability of the project by:

1. allowing us to understand the needs of our users,
2. by better demonstrating our impact,
3. and by helping us secure continued donor support.

:::success Anonymous Impact Tracker

Head to [openfn.org/impact](https://www.openfn.org/impact) to see it action.

:::

How does this work? These metrics ([see below](#what-data-can-be-shared)) are
anonymous and submitted by instance operators around the world. When someone
launches OpenFn, the first thing they see is a message like the one below,
explaining exactly what aggregate anonymous data they're sending and where
they're sending it.

Per the installation instructions, instance admins can opt-out of metrics
reporting at any time via the `USAGE_TRACKING_ENABLED` environment variable, but
most prefer to contribute!

## The data. (Yes, all of it.)

If a metrics client admin sends anonymous usage data to any instance of a
metrics server, this is what will be sent:

```json
{
  "version": "2",
  "instance": {
    "version": "v2.4.2:match:f1bd9ae",
    "hashed_uuid": "4CE189B993247E94FD2A9EDD28CEC9C9D5A7125AB85F4586A6C994D89DCC0979",
    "no_of_users": 137,
    "operating_system": "linux",
    "no_of_active_users": 70
  },
  "projects": [
    {
      "workflows": [
        {
          "no_of_jobs": 1,
          "no_of_runs": 6,
          "hashed_uuid": "C08DD42A9DF75A017001429240D0E6C425BA89AF03C134A05E631CDB0A53FA87",
          "no_of_steps": 6,
          "no_of_active_jobs": 1
        },
        {
          "no_of_jobs": 4,
          "no_of_runs": 6,
          "hashed_uuid": "BD70CCCA4D953D1B59F7803CC24A4EE84CFD21DE4F46CBA85FB3FA41AACA4EAD",
          "no_of_steps": 24,
          "no_of_active_jobs": 4
        },
        ... more workflows
      ],
      "hashed_uuid": "71A5B39B570E1E9156B73997C327E5A2FABD06507CE3FEBF85128016446FCD49",
      "no_of_users": 6,
      "no_of_active_users": 6
    },
    ... more projects
  ],
  "report_date": "2024-04-25",
  "generated_at": "2024-04-26T01:30:00.876776Z"
}
```
