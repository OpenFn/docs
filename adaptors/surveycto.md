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

SurveyCTO provides in-built capability to integrate with a some third party
applications such as [Zapier](https://zapier.com/),
[Google Sheets](https://www.google.com/sheets/about/) and
[OpenFN](https://www.openfn.org/). Additionally, SurveyCTO has REST APIs and
configurable webhooks to receive data in real time in CSV or JSON format.

1. ** Webhooks (Real time) **: SurveyCTO has a
   [webhooks service](https://docs.surveycto.com/05-exporting-and-publishing-data/03-publishing-data-to-the-cloud/05.forms-to-webhooks.html)
   which allows you to publish data to your OpenFn workflow(or any endpoint
   URL). Note that as submissions come in to the server, SurveyCTO will
   automatically publish your selected fields to your chosen webhook but there
   will be a brief delay of up to ten minutes from the time the submission
   occurs and the time SurveyCTO sends this data to OpenFn.

To setup the webhooks:

- Login to SurveyCTO and navigate to the export section of the form setup
- Scroll down to "Your data" section and make sure "Advanced Mode" is enabled
- Click the _Configure_ button and _Add Webhook_
- Add a _Name_ for the webhook and the OpenFn _Webhook URL_
- Select the fields you want to publish and click on _Save_

2. ** APIs ** : SurveyCTO has
   [RESTful APIs](https://support.surveycto.com/hc/en-us/articles/360033156894-REST-API-documentation)
   that we can use to pull data. For connectng with these APIs, OpenFb has
   developed an API adaptor for a quicker integation setup - see
   ['language-surveycto'](https://github.com/OpenFn/adaptors/tree/main/packages/surveycto)

We can download data using REST APIs in JSON or CSV formats. Important APIs:
https://_servername_.surveycto.com/api/v1/forms/files/csv/formid

https://_servername_.surveycto.com/api/v2/forms/data/wide/json/formid?date=[D]

- JSON is the desirable format for API-to-API integration
- Replace **formId** with the **formId** that we are using and the **date**
  starting from which we want to fetch the data or set it as _0_ to fetch all
  data

```js
fetchSubmissions(
  'test', //the form id
  {
    date: 'Apr 18, 2024 6:26:21 AM', // the initial "after" date, if not specified, the function will fetch submissions from all times
    status: 'approved|rejected', // filtering by status, if not specified, the function will fetch submissions of all status
  }
);
```

##
