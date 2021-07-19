---
title: Kobo Toolbox
---

## Overview

[Kobo Toolbox](https://www.kobotoolbox.org/) is a suite of open source tools for
field data collection for use in challenging environments. If you've worked on
ODK or ONA, the underlying tech is very similar. They offer free accounts and
hosting for humanitarian projects, and the app provides a nice interface for
managing (and cleaning!) form submissions.

:::note

Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate
with common tools, and (2) to educate any OpenFn user/the wider sector.

:::

## Integration Use Cases

Example user stories:

- As a M&E manager, I want to monitor Kobo Toolbox survey responses in real-time
  in a central database, so that I can better understand data collection
  activities and program performance across my partner sites.
- ... .

## Integration Options

1. Webhook or “REST Service” that will forward data to OpenFn. Note: for Kobo,
   this will not forward any cleaned data.

To set this up, follow the
[Kobo REST service guide](https://support.kobotoolbox.org/rest_services.html)
and add your OpenFn Inbox URL as the `Endpoint URL` in Kobo.

2. Timer OpenFn jobs that run on cron schedule and “GET” data from Kobo API. If
   you are cleaning data in Kobo, we recommend this option as it will fetch
   cleaned submissions as well.

In order to fetch data from a form, use the Kobo API endpoint of the form. The
base URL is that of your Kobo server, in this example it's
`https://kf.kobotoolbox.org`:
`https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`.

With this OpenFn job snippet we fetch submission data from a list of surveys,
indicated by their IDs.

```javascript
alterState(state => {
  console.log('Current cursor value:', state.lastEnd);
  // Set a manual cursor if you'd like to only fetch data after this date.
  const manualCursor = '2020-11-20T14:32:43.325+01:00';
  state.data = {
    surveys: [
      //** Specify new forms to fetch here **//
      {
        id: 'aVdh90L9979L945lb02',
        name: 'Initial Data Collection',
      },
      {
        id: 'bkgIF96fK7v9n7Hfj2',
        name: 'Follow-up',
      },
    ].map(survey => ({
      formId: survey.id,
      name: survey.name,
      url: `https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`,
      query: `&query={"end":{"$gte":"${state.lastEnd || manualCursor}"}}`,
    })),
  };
  return state;
});

each(dataPath('surveys[*]'), state => {
  const { url, query, formId, name } = state.data;
  return get(`${url}${query}`, {}, state => {
    state.data.submissions = state.data.results.map((submission, i) => {
      return {
        i,
        // Here we append the names defined above to the Kobo form submission data
        formName: name,
      };
    });
  });
});
```

### Kobo Web API

Kobo APIs support both data and metadata integration. Check out:

- Kobo API docs: https://support.kobotoolbox.org/api.html
- Kobo Community: https://support.kobotoolbox.org/rest_services.html
- Kobo API v2 explorer: https://kf.kobotoolbox.org/api/v2/assets/

### Webhook service to forward submission data to OpenFn endpoint (or another app)

See the official docs here: https://support.kobotoolbox.org/rest_services.html

1. To push data from Kobo, users must click the projects icon on their left-side
   nav bar. It's in the shape of a globe.
2. Once selecting a project, the `Project Settings` link will appear at the top
   left side of the screen. Click it to open the Project Settings page.
3. In the bottom left pane of the project settings page, users must paste their
   inbox URL from OpenFn into the `Rest Services` `Service URL` input area and
   select `JSON Post` as the `Service Name`.
4. It's helpful to add a wrapper to your form data if you will be publishing
   multiple forms to OpenFn. You could use
   `{"form":"my_form", "body": %SUBMISSION%}`.
5. Click `Add Service` to start forwarding new Kobo submissions to OpenFn.org.

To test to integration, add a submission manually using the
`enter data in browser` button. Head back to your history page at OpenFn to view
the newly submitted data and write a new `filter` and `job` to map your Kobo
data to any destination system on OpenFn.

Here's a sample post from Kobo REST service. Note that questions inside groups
are prefixed with `groupname/` rather than sitting inside a group object like
ODK:

```json
{
  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "group1/name": "twenty",
  "group1/age": "19",
  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",
  "first_q": "hello",
  "final_q": "why not?",
  "_xform_id_string": "groups",
  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "_userform_id": "taylordowns2000_groups",
  "_tags": [],
  "_submitted_by": null,
  "_submission_time": "2016-04-22T06:38:20",
  "_status": "submitted_via_web",
  "_notes": [],
  "_id": 889409,
  "_geolocation": [null, null],
  "_bamboo_dataset_id": "",
  "_attachments": []
}
```

## Getting Started with Kobo

The [Kobo documentation](https://support.kobotoolbox.org/) offers detailed
guidance on setting up forms and managing data collection.

A small useful trick we learned is if you want to add a hidden value to your
forms (for example a tag to mark a form as "test"), you can add it to the form
as a
[calculated field](https://support.kobotoolbox.org/calculate_questions.html).

You can use the following Kobo-generated unique identifiers for forms and
submissions:

1. "formId": "adiNTJXFtpKEDGGZFMUtgQ". This is a unique form instance ID, it
   will be different for every copy/clone of the same form.
2. "\_id": 85252496. This is the form submission, it's unique within the same
   Kobo server
3. "\uuid" : bfcda81622a94de3a85f69aed29790af. This changes every time a
   submission is cleaned; if you'd still like to use it as unique ID, you can
   create a `calculate` question in your form with the calculation
   `once(uuid())`. This will prevent the `uuid` from updating with each
   submission edit.

## OpenFn Adaptor

Check out
[OpenFn/language-kobotoolbox](https://www.github.com/openfn/language-kobotoolbox)
for some helper functions for extracting or "getting" data in bulk from Kobo
Toolbox.

## Integration Examples

See the `ConSoSci` Github repo for several example Kobo-to-database jobs:
https://github.com/OpenFn/consosci
