---
title: CommCare
---

[CommCare](https://www.dimagi.com/commcare/) is a powerful data collection
platform developed by Dimagi. It is an open-source platform, and is primarily best for mobile case management.

## Integration Options

CommCare offers a number of integration options for extracting and/or loading
data to and from CommCare HQ.

### Web API

CommCare has different APIs for reading vs. updating data. Some helpful links:

- [Data APIs](https://confluence.dimagi.com/display/commcarepublic/Data+APIs)
- [Bulk Case Upload API to mass update case records](https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data)

### Forward cases and/or forms from CommCare to OpenFn

See
[CommCare docs](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128)
on how to configure this webhook to "push" data to an external system like
OpenFn. This option is great for _real-time_ data forwarding.

Quick instructions:

1. Go to "Project Settings".
2. Click "Data Forwarding".
3. "Add a forwarding location" for Cases, Forms, or both.
4. Specify JSON, using your OpenFn inbox URL as the target. See the
   [CommCare documentation](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128).
5. Create a
   [message-filter trigger like this](/documentation/build/triggers#match-a-message-with-a-fragment-inside-another-object-called-form).
6. Set up a `job` running on that filter to process CommCare submissions or case
   updates.

We recommend updating the `Connection Settings` to list emails that should be
alerted if there is a data forwarding error. [See the CommCare docs for more on this.](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications)

### OpenFn Adaptors

OpenFn implementations have leveraged both the [`HTTP`](https://github.com/OpenFn/language-http) and [`CommCare`](https://github.com/OpenFn/language-commcare) adaptors to
connect with the CommCare API. 


### Example Integrations

[Miracle Feet](https://github.com/OpenFn/miracle-feet) [Lwala](https://github.com/OpenFn/lwala)
