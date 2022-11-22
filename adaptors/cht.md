---
title: Community Health Toolkit
---

1. To push data from CHT applications to OpenFn, leverage the
   [Outbound Push](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/)
   feature to forward specified data to your OpenFn project.
2. When definining the
   [`destination`](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#destination),
   specify your OpenFn inbox URL as the `baseURL`. No `auth` parameters are
   required, unless you have configured Inbox Security on your OpenFn project.
3. Define the data to forward to OpenFn in the
   [`mapping`](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#mapping)
   property. This will structure the payload that is sent to your OpenFn Inbox
   as a "Message".

To send data _to_ CHT applications, check out the
[CHT API](https://docs.communityhealthtoolkit.org/apps/reference/api/).
