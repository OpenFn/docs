---
title: CommCare Adaptor
---

## About CommCare

[CommCare](https://www.dimagi.com/commcare/) is an open mobile digital platform
for data collection, case management, and service delivery, primarily used by
organizations working in low-resource settings. CommCare provides a no-code
interface that allows non-technical users to build customized mobile
applications for various purposes, including surveys, client tracking, decision
support for frontline workers, and service delivery monitoring.

CommCare is an open source Digital Public Good built by
[Dimagi](https://www.dimagi.com), which also offers paid options for use of its
CommCare cloud-hosted platform SaaS.

:::info CommCare API Access

If using CommCare SaaS, as of October '24, only 
projects with the Pro Plan or above include API access
([see CommCare docs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143958022/API+Access)).

:::

### CommCare Use Cases

- Community Health Worker: Registers patients and collects data, manages cases
  over time, and provides health care and education.
- NGO: Collectes surveys and feedback, registers beneficiaries, and monitors
  field activities.
- Government: Collects data for public services, such as health enrollment,
  school enrollment, and census data.

## Integration Options

CommCare supports 2 primary integration options:

1. **Webhook or
   [Data Forwarding](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143945549/Enabling+Data+Integration+Form+and+Case+Forwarding)**
   to _push_ `cases` and `forms` data from CommCare to external systems. This
   option is suited for _real-time_, event-based data integration.

2. **[REST APIs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143958022/API+Access)**
   that enable external services like OpenFn to _pull_ data from CommCare, or
   push data from external apps to CommCare. This option is suited for
   _scheduled, bulk syncs_ or workflows that must update data in CommCare with
   external information.

This OpenFn adaptor is designed for option #2
[CommCare's APIs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2279637003/CommCare+API+Overview).
Read on for how to configure the CommCare webhook (option #1) to trigger OpenFn
workflows based on CommCare form or case updates.

## Webhook or Data Forwarding Setup (CommCare-to-OpenFn)

Forward `cases` and/or `forms` from CommCare to OpenFn using a https webhook
service. To use webhoooks, you'll need to set up a CommCare connection and data
forwarding on the forms you want to forward. See
[CommCare docs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143945549/Enabling+Data+Integration+Form+and+Case+Forwarding)
or below OpenFn-tailored instructions.

### Creating a Connection

To set up a connection, in CommCareHQ you'll need to:

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

![Connection](/img/commecare_connection_settings.webp)

### Data Forwarding Options

There are two options for forwarding data from CommCare to an external platform:

- Forward `forms` on submission (if desired, you can filter by form id)
- Forward `cases` on create _or_ update (if desired, you can filter by case
  type)

#### Forwarding Individual Forms

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

![Forms](/img/commecare_forward_forms.webp)

#### Forwarding Specific Case Types

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

![Cases](/img/commcare_forward_cases.webp)

:::tip Data Forwarding and OpenFn Workflow Design

We recommend a 1-to-1 relationship between workflows and data forwarding rules
on CommCare. This approached offers a clean and efficient way of updading and
editing your workflows without impacting other forms. When doing this, note that
every workflow with a webhook trigger has a unique webhook URL consequently
requiring you to set up a separate CommCare connection for each workflow.

:::

## How to Extract or Modify CommCare Data

**See the available [helper functions](/adaptors/packages/commcare-docs)** for a
full list of functions supported by this adaptor for extracting and/or modifying
CommCare data.

To fetch data from CommCare via OpenFn, you can:

1. Configure a new workflow with a "cron" trigger and define the frequency of
   your workflow (e.g., daily at 8:00AM)
2. Add a "Get data" step linked to this CommCare adaptor
3. Edit the Step and open the Inspector (`</>`) to write a basic job using this
   adaptor's [GET](/adaptors/packages/commcare-docs#get) or
   [bulk](/adaptors/packages/commcare-docs#bulk) helper functions to specify
   which data you want to extract or "pull" from CommCare

See [platform docs](/documentation/build/workflows) for more guidance on
building workflows.

:::tip CommCare data export tool for spreadsheet extracts

CommCare also offers a data export tool that can be used to export data from
CommCare to a spreadsheet. This might be ideal for a one-time export of data. To
learn more about the data export tool, see the
[CommCare docs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143954661/Data+Exports).

:::

## Authentication

[See CommCare docs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143946031/Authentication)
for the latest on supported authentication methods.

When integrating with CommCare via OpenFn, there are 2 primary authentication
methods supported:

1. Basic authentication (requires username + password), or
2. API Key (requires username + api key created in CommCareHQ)

**See this adaptor's
[Configuration docs](/adaptors/packages/commcare-configuration-schema) for more
on required authentication parameters.**

See platform docs [on managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn and see the below CommCare credential
example.

![CommCare Cred](/img/commcare_credential_edit.webp)

If you're using the `Raw JSON` credential type, your configuration may look like this:

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

:::tip Tips for configuring your credential

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
4. If you have two factor authentication enabled in your CommCare account,
   consider using API key authentication method. See more
   [details here](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2279637003/CommCare+API+Overview#Two-Factor-authentication).

:::


## Integration Design Tips

### CommCare Data Model

When integrating with CommCare, generally there are options to read or modify
`forms`, `cases`, or `lookup tables`. Most often, OpenFn users opt to integrate
`cases`, as these records typically contain the latest information about the
entities being managed in CommCare (e.g., patients, households, groups).

[See CommCare docs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143954460/Metadata+Glossary#Types-of-Data-in-CommCare)
for a detailed description of the types of data.

> In the CommCare data model, a case is anything that we track over time, while
> form data is any information collected about a case at a specific point in
> time through a CommCare form. Ultimately form data is the source of all case
> data, but not all form data is case data.

![CommCare-data-model](/img/commcare-data-model.webp)

### Mapping CommCare Metadata to External Systems
Use the [CommCare App Summary](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143956371/App+Summary) to view and export case or form metadata to XLS. This will help you discover what data is available to be mapped to an external system. 

### Unique Identifiers

- As CommCare data is stored in forms and cases, there are two types of UIDs in
  CommCare: `case_id` & form `id`. 
- You can search for a particular case or form submission in CommCare by using the `Find Data by ID` feature [here](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143955380/Find+Data+by+ID).
- [See docs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143946126/Generating+a+Unique+ID+for+beneficiaries) for more on generating custom unique IDs.

:::tip Embedding External IDs and Hidden Values in Forms

If integrating with CommCare `forms`, you may need to make sure that any unique identifiers or external IDs you want to reference in your integration are configured in your forms. You may consider using
[hidden values](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143954117/Hidden+Values+Tutorial+Part+1+Adding+Two+Questions+Using+a+Hidden+Value) to capture external IDs in form data, without affecting the end user experience.

:::

### Lookup Tables in CommCare
Lookup tables in CommCare store reference data that can be used across multiple forms and workflows. They are often used for predefined lists such as as health facility names, geographic locations, product catalogs, or standardized response options.
When fetching lookup table data in using CommCare APIs, there are two main approaches:
**1. Using the Fixture API**
```
get("fixture/?fixture_type=diagnosis")
```

**Pros:**
- Simple and direct for fetching specific tables.
- Works well when only a few tables (e.g., 2-3) are needed.
**Cons:**
- Requires multiple API calls if several tables are needed, which can be inefficient.

**2. Using the lookup_table_item API**
```
const findLookupById = (id) => state.data.filter((i) => i.data_type_id === id);

state.facility = findLookupById("facility_table_id");
state.product = findLookupById("product_table_id");
state.medications = findLookupById("medications_table_id");
```

**Pros:**
- Fetches all lookup tables in a single request, reducing API calls.
- Useful for OpenFn workflows requiring multiple lookup tables.
**Cons:**
- Retrieves all lookup tables and filters them in-memory, which can be inefficient if only a few tables are needed.
  
#### Best Practices
- Use the Fixture API when fetching only a few lookup tables.
- Use the lookup_table_item API for cases where multiple lookup tables are needed at once.
- Consider performance trade-offs when selecting an approach, balancing API efficiency with data processing overhead.

#### Troubleshooting tips
If some tables are throwing errors when being fetched using the fixtures API, the lookup table might be corrupt. Consider exporting the table and re-importing it.


## Helpful Links

### About Forms, case and data management

- [Case management overview](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143955170/Case+Management+Overview)
- [Form and case data in CommCare](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143954460/Metadata+Glossary)
- [CommCare Lookup tables](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143955074/Lookup+Tables)
- [Lookup table APIs](https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143957320/Lookup+Table+API)

### CommCare API Docs

CommCare has different APIs for reading vs. modifying data. Some helpful links:

- [Data APIs](https://confluence.dimagi.com/display/commcarepublic/Data+APIs)
- [API Explorer](https://commcare-api-explorer.dimagi.com/)
- [Bulk Case Upload API to mass update case records](https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data)

### Implementation Examples

- Mercy Corps Kenya (CommCare-Azure SQL DB): https://github.com/OpenFn/mercycorps-kenya
- MiracleFeet (CommCare-to-Salesforce sync):
  https://github.com/OpenFn/miracle-feet
- Lwala (CommCare-Salesforce 2-way sync): https://github.com/OpenFn/lwala
- myAgro (CommCare-Salesforce): https://github.com/OpenFn/myagro-commcare-sf
