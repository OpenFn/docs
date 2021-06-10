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

- Data APIs: https://confluence.dimagi.com/display/commcarepublic/Data+APIs
- Bulk Case Upload API to mass update case records:
  https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data

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
alerted if there is a data forwarding error. See docs:
https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications

### OpenFn Adaptors

OpenFn implementations have leveraged both the `HTTP` and `CommCare` adaptors to
connect with the CommCare API. https://github.com/OpenFn/language-commcare
https://github.com/OpenFn/language-http

### Integration Setup Tips
1. App Versioning: Ensure that you are always using the latest app version when testing, by updating your app and checking that the version matches the latest version in CommCare HQ
2. Unique identifers and hidden fields in CC forms: Make sure that unique identifiers for forms and objects are always in the form. If the unique identifier isn't relevant for the user, it can be added to the form as a `hidden field`. 


## Common Errors


## Example Integrations

- MiracleFeet (CommCare-to-Salesforce sync): https://github.com/OpenFn/miracle-feet 
- Lwala (CommCare-Salesforce 2-way sync): https://github.com/OpenFn/lwala
- Moodle-to-CommCare sync: https://github.com/OpenFn/moodle-commcare
- GRS CommCare - Salesforce sync: https://github.com/OpenFn/grassroot-soccer

