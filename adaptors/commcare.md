---
title: CommCare
---

## App Overview

[CommCare](https://www.dimagi.com/commcare/) is a powerful data collection
platform developed by Dimagi. It is an open-source platform, and is primarily
best for mobile case management.

### Data Model

CommCare data is primarily stored in **forms** and **cases**. Forms are the
building blocks of applications and cases are used to track data on objects,
usually people. Learn more about CommCare forms and cases at the links below.

- Case management:  
  https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management
- Form and case data in CommCare:
  https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare

## Integration Use Cases

Example user stories:

- As a community health worker I want to store patient data that was collected
  in rural areas with no internet access in Salesforce so I can better analyze
  the data being collected and make more informed recommendations.
- As a teacher I want to set up automatic message alerts to my students in order
  to increase participation.

## APIs & Integration Options

CommCare offers a number of integration options for extracting and/or loading
data to and from CommCare HQ.

### Web API

CommCare has different APIs for reading vs. updating data. Some helpful links:

- [Data APIs](https://confluence.dimagi.com/display/commcarepublic/Data+APIs)
- [Bulk Case Upload API to mass update case records](https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data)

## Webhook: Forward cases and/or forms from CommCare to OpenFn using REST service

See
[CommCare docs](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128)
on how to configure this webhook to "push" data to an external system like
OpenFn. This option is great for _real-time_ data forwarding.

In order to connect CommCare with OpenFn v2, you'll often need to set up
CommCare data forwarding for individual forms, and for specific case types.
Let's set up a connection to OpenFn and then see how to do each.

### Creating a Connection

1. Go to "Project Settings".
2. Click "Connection Settings".
3. Choose "Add Connection Settings" at the bottom
4. Give the connection a name, and indicate email address(es) to send failure
   notifications to.
   [See the CommCare docs for more on this.](<https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications>).
5. Paste the URL of the OpenFn
   [webhook](https://docs.openfn.org/documentation/build/triggers#webhook-event-triggers)
   you want to forward data to
6. If you have [webhook authentication](../docs/manage-projects/webhook-auth.md)
   set up on OpenFn, add the authentication type, the username and password here
7. You can test the connection, then save it

![Connection](/img/commecare_connection_settings.png)

### Forwarding Individual Forms

1. Click over to "Data Forwarding".
2. Under "Forward Forms", click "+ Add a service to forward to"
3. Select the connection to forward the forms to set up following the steps
   above
4. Name it
5. Select "POST" HTTP Request Method
6. Choose "JSON" as Payload Format
7. Exclude any (eg. test) users - forms submitted by them won't be forwarded
8. "XMLNSes of forms to include" lets you select which form(s) to forward by
   adding the XMLNSes of the required forms. Follow
   [this CommCare guide](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143979045/Finding+a+Form+s+XMLNS)
   to find the XMLNS of any form. To add multiple, separate them with commas,
   spaces or newlines. Leave empty to forward all forms.
9. Hit "Start Forwarding" to save and activate

![Forms](/img/commecare_forward_forms.png)

### Forwarding Specific Case Types

1. Go to "Data Forwarding".
2. lick "+ Add a service to forward to" under "Forward Cases"
3. Select the connection to forward the cases to
4. Name the forwarder
5. Select "POST" HTTP Request Method
6. Choose "JSON" as Payload Format
7. Select which case type(s) you want to forward, for example "patient"
8. Exclude any (eg. test) users

![Cases](/img/commcare_forward_cases.png)

## Data Forwarding and OpenFn Workflow Design

A clean way and efficient way of designing CommCare
[webhook](../docs/build/triggers.md) workflows on OpenFn v2 is to have a
separate workflow handling each form and case type. As each of your OpenFn
webhook workflows has a unique URL, you'll need to set up a separate CommCare
connection for each, then use that connection to forward the relevant form or
case type to OpenFn. So your CommCare Data Forwarding overview might look like
this:

![Data Forwarding Overview](/img/commcare_data_forwarding_overview.png)

While on OpenFn, you can set up one or multiple jobs to handle the form or case
type received.

![Form Workflow](/img/form_workflow.png)

## Pulling Data From CommCare

You can also fetch data from CommCare initiated from an OpenFn workflow, by
sending a GET request to one of
[CommCare's data APIs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143957366/Data+APIs).
You could use our [http adaptor](../adaptors/packages/http-docs.md) to achieve
this. Fetching can be done on a scheduled basis, as a daily or monthly sync.
This design also lends itself well to processing data in bulk.

## App Setup & Integration Tips

### App installation and configuration

- CommCare docs on installing the mobile app:
  https://confluence.dimagi.com/display/commcarepublic/Install+CommCare+for+Android+Smartphones

#### App Versioning

Ensure that you are always using the latest app version when testing, by
updating your app and checking that the version matches the latest version in
CommCare HQ.

### Exporting Metadata

Use this
[link](https://confluence.dimagi.com/display/commcarepublic/Export+Form+Contents)
to **export form contents**. This will give you access to all the `question ids`
and `labels` in the CommCare form that are helpful for designing your
integration and mapping data elements.

### Unique Identifiers

- As CommCare data is stored in forms and cases, there are two types of UIDs in
  CommCare: `case_id` & `form id`. You can search for a particular case or form
  submission in CommCare by using the `Find Data by ID` feature here:
  https://confluence.dimagi.com/display/commcarepublic/Find+Data+by+ID. For
  example, if you received a submission in the OpenFn inbox that you would like
  to find in CommCare, search by `form id`. If you'd like to find a particular
  case (i.e. person, event, etc) search by `case id`.  
  ![image](https://user-images.githubusercontent.com/80456839/128649444-04f371ea-80b1-4c28-8d42-1591c0a96758.png)

- In the OpenFn [message](/documentation/get-started/terminology#message): `id`
  is the unique identifier for the form submission
  ![image](https://user-images.githubusercontent.com/80456839/128649481-83b3f7ee-c6a6-42f8-8752-2f4e96b7fa1f.png)

- `case_id` is the unique identifier for the case being updated by the form. For
  example, the `case_id` can be the UID for a person.
  ![image](https://user-images.githubusercontent.com/80456839/128649509-098a5418-4b72-4cec-a4d2-47c8bedaac25.png)

**N.B.** Unique identifiers and `hidden fields` in CommCare forms: Make sure
that unique identifiers for forms and objects are always in the form. If the
unique identifier isn't relevant for the user, it can be added to the form as a
`hidden field`. Learn more about `hidden fields` here:
https://confluence.dimagi.com/display/commcarepublic/Hidden+Value+Calculations+Tutorial

### Data Element Mapping Notes

`Labels` are generally not mapped in an integration because they represent text
that is displayed to the CommCare user to facilitate easy use of the
application. `Ids` however, represent actual data that should be mapped.

- When mapping `multiple choice` questions, make sure to consider how the answer
  choices should map to the source/destination system.

## CommCare Credentials

To connect to CommCare you'll need a username, password, host URL, and the
"appId".

![CommCare Credentials Menu](/img/commcare_credential.png)

The username is your full email address and the "appId" is the UUID which
designates your CommCare project as different from everyone elses. It can be
found in the URL of your application when you first enter it from the project
screen. I.e., the last part of this URL:
`https://www.commcarehq.org/a/YOUR_PROJECT/apps/view/YOUR_APP_ID/`

![CommCare Cred](/img/commcare_credential_edit.png)

The raw JSON of your credential (for use in the CLI or when inspecting
`state.configuration`) is defined in the
[CommCare Configuration](/adaptors/packages/commcare-configuration-schema)
section.

## Common Errors

```
Docs in progress!
```

## OpenFn Adaptors

OpenFn implementations can leverage both the
[`HTTP`](https://github.com/OpenFn/language-http) and
[`CommCare`](https://github.com/OpenFn/language-commcare) adaptors to connect
with the CommCare API.

## Implementation Examples

- MiracleFeet (CommCare-to-Salesforce sync):
  https://github.com/OpenFn/miracle-feet
- Lwala (CommCare-Salesforce 2-way sync): https://github.com/OpenFn/lwala
- Grassroot Soccer (CommCare-to-Salesforce sync):
  https://github.com/OpenFn/grassroot-soccer
