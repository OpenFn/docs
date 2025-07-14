---
title: SurveyCTO
---

## App Overview

[SurveyCTO](https://www.surveycto.com/) is a versatile data collection platform
designed to streamline the process of gathering field data for research,
evaluations, and monitoring purposes. SurveyCTO operates in the cloud, providing
users with convenient online access to its suite of tools and features.

At its core, SurveyCTO offers a comprehensive solution for creating and
deploying customized surveys, forms, and questionnaires, enabling organizations
to collect data efficiently and accurately. In addition to its primary data
collection functionality, SurveyCTO boasts a range of advanced features,
including robust data validation, real-time monitoring capabilities, and
seamless integration with external data systems. This versatile platform caters
to a diverse array of needs, serving researchers, NGOs, government agencies, and
other entities seeking reliable data collection solutions.

## Integration Use Cases:

As SurveyCTO is primarily a mobile data collection tool, often that data needs
to be extracted, managed, summarized, and analysed in another system (e.g.,
database/data warehouse, analytics tools, and "MIS"/data management software
like like DHIS2, Salesforce, etc.).

Example user story:

- As a program or M&E manager, I would like my field officers to collect data in
  places with limited connection availability using SurveyCTO. I want the data
  collected to automatically sync to my Tabluea dashboard for visualization and
  further analysis.

## Integration Options

SurveyCTO provides a REST API which can be accessed via the OpenFn `surveycto`
adaptor. In SurveyCTO, admins can also configure webhooks to push data to
OpenFn/other external systems in real-time in CSV or JSON format.

![openfn-trigger-options](/img/openfn_surveycto_trigger.webp)

### 1. Webhooks (for real-time integration):

SurveyCTO has a
[webhooks service](https://docs.surveycto.com/05-exporting-and-publishing-data/03-publishing-data-to-the-cloud/05.forms-to-webhooks.html)
which allows you to publish data to your OpenFn workflow (or any endpoint URL).
Note that as submissions come in to the server, SurveyCTO will automatically
publish your selected fields to your chosen webhook but there will be a brief
delay of up to ten minutes from the time the submission occurs and the time
SurveyCTO sends this data to OpenFn. (Therefore this integration is _near_
real-time, depending on how quickly SurveyCTO forwards the data.)

To configure a webhook to push data to OpenFn:

1. Login to SurveyCTO and navigate to the export section of the form setup
2. Scroll down to "Your data" section and make sure "Advanced Mode" is enabled
3. Click the `Configure` button and `Add Webhook`
4. Add a `Name` for the webhook and paste your OpenFn `Webhook URL` (copied from
   your OpenFn Workflow trigger)
5. Select the fields you want to publish/forward to OpenFn and click on `Save`

[See this docs page](https://docs.surveycto.com/05-exporting-and-publishing-data/03-publishing-data-to-the-cloud/05.forms-to-webhooks.html)
for more on SurveyCTO webooks.

![Configuraing the webhook for OpenFn](/img/surveycto_webhook_config.webp)

### 2. API integration (for scheduled and/or bulk data integration):

SurveyCTO provides
[RESTful APIs](https://support.surveycto.com/hc/en-us/articles/360033156894-REST-API-documentation)
that we can use to pull data on a scheduled basis using OpenFn `cron triggers`.
For connectng with these APIs, OpenFb has developed an API adaptor for a quicker
integation setup - see
[the `surveycto' adaptor source](https://github.com/OpenFn/adaptors/tree/main/packages/surveycto).

Via the REST API, data can be extracted in JSON or CSV formats. Example APIs
endpoints include:

`https://_servername_.surveycto.com/api/v1/forms/files/csv/formid`

`https://_servername_.surveycto.com/api/v2/forms/data/wide/json/formid?date=[D]`

- JSON is the desirable format for API-to-API integration and when working with
  OpenFn
- Replace the `formId` parameter with the **formId** of the survey you want to
  extract
- If you want to filter form submissions by the survey submission `date`,
  replace the `[D]` parameter with the survey submission date value you want to
  filter by and see SurveyCTO docs on data format requirements

When using the OpenFn `surveycto` adaptor to connect with the `/formid` API
endpoint, your job expression might look as follows. See the `functions` and
`examples` in the sidebar for more.

```js
fetchSubmissions(
  'form123', //replace with the form id
  {
    date: 'Apr 18, 2024 6:26:21 AM', //if submission date filter not specified, the function will fetch submissions from ALL-TIME
    status: 'approved|rejected', // add to filter by status; if not specified, the function will fetch submissions of ALL statuses
  }
);
```

## Configuring a Credential with API Access

To authenticate with the SurveyCTO API, your OpenFn Workflow will require a user
credential where the setting `Allow server API access` has been enabled. This
setting controls whether or not users in a given role can use the API to fetch
forms and data from the server.
[See SurveyCTO docs](https://docs.surveycto.com/04-monitoring-and-management/01-the-basics/00b.managing-user-roles.html)
on managing user roles.
