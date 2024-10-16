---
title: CommCare Adaptor
---

## About CommCare

[CommCare](https://www.dimagi.com/commcare/) is a mobile digital platform for
data collection, case management, and service delivery, primarily used by
organizations working in low-resource settings. CommCare provides a no-code
interface that allows non-technical users to build customized mobile
applications for various purposes, including surveys, client tracking, decision
support for frontline workers, and service delivery monitoring.

CommCare boasts of some standout features that makes it a preferred choice for
many organizations such as:

- Offline capability: Apps work offline, syncing data when connectivity is
  available
- Multi-platform: Runs on Android devices, feature phones, and web browsers
- Multimedia support: Incorporates video, audio, images, and GPS data
- Multilingual: Supports multiple languages within a single app
- Security: Offers HIPAA, GDPR, and SOC2 compliant data storage and encryption

#### Some common use cases where CommCare is adopted

- Community Health Worker: Collects data on health status, disease outbreaks,
  and provides health education.
- NGO: Monitors program outcomes, distributes surveys, and collects feedback
  from beneficiaries.
- Government: Collects data for public services, such as school enrollment,
  health records, and census data.

### How does OpenFn integrate with CommCare?

OpenFn provides a CommCare adaptor that allows for seamless integration between
CommCare and various external systems. This adaptor supports both data
forwarding (push) and data fetching (pull) capabilities, enabling powerful data
synchronization and integration scenarios.

#### Some use cases include:

- Syncing data from CommCare to a Shared Health Repository: Health facilities
  that use CommCare as an EMR can integrate with national shared health
  repositories to send individual patient data.

- Fetch patient list from OpenMRS and sync to CommCare for case management and
  tracking: With OpenFn, you can facilitate the retrieval of patient information
  from OpenMRS which can then be synchronised with CommCare for efficient case
  management. In a community setting, health workers can retrieve up-to-date
  patient data from the EMR to their mobile devices, enabling better continuity
  of care and follow-up.

- Sync data from CommCare to Salesforce: Transfer data collected in CommCare to
  Salesforce for advanced customer relationship management and analytics. This  
  way, organizations can combine field-level data with their broader
  organizational data, providing a more comprehensive view of their operations
  and beneficiaries.

## Integration Options

There are two options to forward data from CommCare to OpenFn.

### Webhook

Forward cases and/or forms from CommCare to OpenFn using a https webhook
service. To use webhoooks, you'll need to set up a CommCare connection and data
forwarding on the forms you want to forward.

**Creating a Connection**

To set up a connection, you'll need to:

1. Go to `Project Settings`.
2. Click `Connection Settings`.
3. Choose `Add Connection Settings` at the bottom
4. Give the connection a name, and indicate email address(es) to send failure
   notifications to
   [See the CommCare docs for more on this](<https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications>).
5. Paste the URL of the OpenFn
   [webhook](https://docs.openfn.org/documentation/build/triggers#webhook-event-triggers)
   or the desintation for the data you want to forward
6. If you have [webhook](https://docs.openfn.org/documentation/webhook-security)
   set up on OpenFn, add the authentication type, the username and password here
7. You can test the connection, then save it

![Connection](/img/commecare_connection_settings.png)

#### Forwarding Data from CommCare

There are two approaches to forwarding data from CommCare to an external
platform.

- Forwarding individual forms
- Forwarding specific case types

**Forwarding Individual Forms**

Forwarding individual forms is useful when you want to forward a specific form.
Here's how you can configure CommCare to forward a form to OpenFn.

1. Click over to "Data Forwarding".
2. Go to the "Forward Forms" section and click "Add a service to forward to"
3. Select the connection to forward the forms to set up following the steps
   above or add a new connection
4. Enter the name of the forwarder e.g. _Forward Visit Forms to OpenFn_
5. Select "POST" HTTP Request Method
6. Choose "JSON" as Payload Format
7. Exclude any (eg. test) users - forms submitted by them won't be forwarded
8. if you want to forward all your forms, leave the "XMLNSes of forms to
   include" box empty or enter the XLMN of the form(s) to be forwarded and
   separate them with commas, spaces or newlines. Follow
   [this CommCare guide](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143979045/Finding+a+Form+s+XMLNS)
   to find the XMLNS of any form.
9. Click "Start Forwarding" to save and activate

![Forms](/img/commecare_forward_forms.png)

**Forwarding Specific Case Types**

In some cases, you may want to forward a specific case type rather than all
forms. Here's how you can configure CommCare to forward a case type to OpenFn.

1. Go to `Data Forwarding`.
2. Navigate to `Forward Cases` and click `Add a service to forward to`
3. Select the connection to forward the cases to
4. Name the forwarder
5. Select `POST` HTTP Request Method
6. Choose `JSON` as Payload Format
7. Select which case type(s) you want to forward, for example `patient`
8. Exclude any (eg. test) users

![Cases](/img/commcare_forward_cases.png)

:::tip Data Forwarding and OpenFn Workflow Design

We recommend a 1-to-1 relationship between workflows and data forwarding rules
on CommCare. This approached offers a clean and efficient way of updading and
editing your workflows without impacting other forms. When doing this, note that
every workflow with a webhook trigger has a unique webhook URL consequently
requiring you to set up a separate CommCare connection for each workflow.

:::

### Pulling Data From CommCare

You can also fetch data from CommCare into your OpenFn workflow with the a
[GET](/adaptors/packages/commcare-docs#get) and
[bulk](/adaptors/packages/commcare-docs#bulk) functions. You can use this
approach if CommCare is not the first step in your workflow or you are planning
to run your workflow on schedule with the Cron trigger.

:::tip CommCare data export tool

CommCare also offers a data export tool that can be used to export data from
CommCare to a database. This might be ideal for a one-time export of data to a
database. To learn more about the data export tool, see the
[CommCare docs](https://confluence.dimagi.com/display/commcarepublic/Data+Exports).

:::

In order to connect CommCare with OpenFn v2, you'll often need to set up
CommCare data forwarding for individual forms, and for specific case types.
Let's set up a connection to OpenFn and then see how to do each.

## Authentication

CommCare supports two primary authentication methods - _Basic Authentication_ and
_API key authentication_.

- **Basic authentication** requires users to specify their `username` and `password`
  to connect their OpenFn account.
- **API key authentication** on the other hand requires users to specify their
  `API key` and `username`.

Apart from the API key, username and password, users are required to
provide some more information about their CommCare application and account as
shown in the image of CommCare credential configuration form below.

<img 
  src="/img/commcare_credential_edit.png" 
  alt="CommCare Cred" 
  style={{height: '900px', width: 'auto'}}
/>

With OpenFn, you can set up a credential through the CommCare credential
configuration form or through a raw JSON option. To learn how to set up or
manage your credential, see documentation
[on managing credentials](/documentation/manage-projects/manage-credentials) for
more information.

If you're using the raw JSON option, your configuration should look like this:

```json
{
  "hostURL": "your-app-id", // e.g. https://www.commcarehq.org
  "domain": "your-deployment-url", // e.g. demo-project
  "appId": "your-app-id", // e.g. 1234567890
  "username": "your-commcare-email", // e.g. user@example.com
  "password": "your-password", // Don't add password if you're using API key auth
  "apiKey": "your-api-key" // Don't add apiKey if you're using basic auth
}
```

:::tip

When filling in the CommCare credential on OpenFn, here are a few things to
note:

1. The username is your full email address registered with CommCare
2. The `appId` is the UUID which designates your CommCare project as different
   from everyone elses. It can be found in the URL of your application when you
   first enter it from the project screen. i.e., the last part of this URL:
   `https://www.commcarehq.org/a/YOUR_PROJECT/apps/view/YOUR_APP_ID/`
3. The `hostURL` is the URL of your CommCareHQ instance. For example, if your
   project is hosted at `https://commcarehq.org`, then your `hostURL` is
   `https://commcarehq.org`.

:::

### Helpful Links

#### About Forms, case and data management

- [Case management](https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management)
- [Form and case data in CommCare](https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare)

#### Using the Web API

CommCare has different APIs for reading vs. updating data. Some helpful links:

- [Data APIs](https://confluence.dimagi.com/display/commcarepublic/Data+APIs)
- [Bulk Case Upload API to mass update case records](https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data)
- [CommCare's data APIs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143957366/Data+APIs)

## Implementation Examples

- MiracleFeet (CommCare-to-Salesforce sync):
  https://github.com/OpenFn/miracle-feet
- Lwala (CommCare-Salesforce 2-way sync): https://github.com/OpenFn/lwala
- Grassroot Soccer (CommCare-to-Salesforce sync):
  https://github.com/OpenFn/grassroot-soccer
