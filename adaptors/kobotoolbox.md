---
title: Kobo Toolbox
---

## App Overview

[Kobo Toolbox](https://www.kobotoolbox.org/) is a suite of open source tools for
field data collection for use in challenging environments. If you've worked on
ODK or ONA, the underlying tech is very similar. They offer free accounts and
hosting for humanitarian projects, and the app provides a nice interface for
managing (and cleaning!) form submissions.

:::note

Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate
with common tools, and (2) to educate any OpenFn user/the wider sector.

:::

## Data Model

Kobo data is collected using `projects` or `forms` which are the actual surveys/
questions being adminsitered. Form responses are collected as individual
`form submissions` (1 row for every form submitted is logged in the Kobo web
app, viewable via the `Data` menu option).

## Integration Use Cases

Example user stories:

- As a M&E manager, I want to monitor Kobo Toolbox survey responses in real-time
  in a central database, so that I can better understand data collection
  activities and program performance across my partner sites.

## APIs & Integration Options

### Webhook: Forward forms in real-time from Kobo using REST service

Webhook or “REST Service” that will forward data to OpenFn (or any designated
endpoint URL). **Note: Kobo not forward any form submissions cleaned via the
Kobo web app. Only form submissions submitted via mobile are forwarded via the
webhook.**

To set this up, follow the
[Kobo REST service guide](https://support.kobotoolbox.org/rest_services.html)

See below for OpenFn-specific configuration instructions:

1. To push data from Kobo, users must click the projects icon on their left-side
   nav bar. It's in the shape of a globe.
2. Once selecting a project, the `Project Settings` link will appear at the top
   left side of the screen. Click it to open the Project Settings page.
3. In the bottom left pane of the project settings page, users must paste their
   `inbox URL` from OpenFn into the `Rest Services` `Service URL` input area and
   select `JSON Post` as the `Service Name`.
4. It's helpful to add a wrapper to your form data if you will be publishing
   multiple forms to OpenFn. You could use
   `{"form":"my_form", "body": %SUBMISSION%}`.
5. Click `Add Service` to start forwarding new Kobo submissions to OpenFn.org.

To test to integration with OpenFn, add a submission manually using the
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

### Web APIs

Kobo APIs support both data and metadata integration. Check out:

- Kobo API docs: https://support.kobotoolbox.org/api.html
- Kobo Community: https://support.kobotoolbox.org/rest_services.html
- Kobo API v2 explorer: https://kf.kobotoolbox.org/api/v2/assets/

#### Using OpenFn to access the Kobo Web API

Timer OpenFn jobs that run on cron schedule can be configured to “GET” data from
Kobo API. If you are cleaning data in Kobo, we recommend this option as it will
fetch cleaned submissions as well.

In order to fetch data from a form, use the Kobo API endpoint of the form. The
base URL is that of your Kobo server, in this example it's
`https://kf.kobotoolbox.org`:
`https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`.

With this OpenFn job snippet we fetch submission data from a list of surveys,
indicated by their IDs.

```js
// set the cursor to use for this run
cursor($.lastEnd || $.manualCursor || '2020-11-20T14:32:43.325+01:00');

// set the cursor for the next run
cursor('now', {
  key: 'lastEnd',
  format: c => dateFns(c, 'YYYY-MM-DD:HH:mm:ss'),
});

fn(state => {
  console.log('Current cursor value:', state.cursor);

  state.surveys = [
    //** Specify new forms to fetch here **//
    {
      formId: 'aVdh90L9979L945lb02',
      name: 'Initial Data Collection',
    },
    {
      formId: 'bkgIF96fK7v9n7Hfj2',
      name: 'Follow-up',
    },
  ];
  return state;
});

each(
  $.surveys,
  getSubmissions($.data.formId, {
    query: { end: { $gte: `${$.cursor}` } },
  }).then(state => {
    // Lookup each form's id from the previous state
    const { name, formId } = state.references.at(-1);

    state.submissions[formId] = {
      name,
      submissions: state.data,
    };

    return state;
  })
);
```

Check out some of our
[training slides](https://docs.google.com/presentation/d/1Q9YKKiaTg3ty4BC6f7PMsnXcrT6WaF0w_Eo4yOh8fQw/edit#slide=id.gcf42eece58_0_1080)
for an overview of Kobo integration options.

## App Setup & Integration Tips

### App installation and configuration

The [Kobo documentation](https://support.kobotoolbox.org/) offers detailed
guidance on setting up forms and managing data collection.

You can find some of our training materials on Kobo form management
[here](https://docs.google.com/presentation/d/16ZenDRq3zmX6LgrH4_g3O9lISTve42ZDJgjm7RThbTY/edit#slide=id.gc90ebee775_0_242).

### Hidden Values & Tagging Submissions

A small useful trick we learned is if you want to add a hidden value to your
forms to "inject" data or tag your form (for example a tag to mark a form as
"test"), you can add it to the form as a
[calculated field](https://support.kobotoolbox.org/calculate_questions.html).

### Unique Identifiers

You can use the following Kobo-generated unique identifiers for forms and
submissions:

1. `"formId": "adiNTJXFtpKEDGGZFMUtgQ"`: This is a unique form instance ID, it
   will be different for every copy/clone of the same form.
2. `"_id": 85252496`: This is the form submission, it's unique within the same
   Kobo server
3. `"uuid" : bfcda81622a94de3a85f69aed29790af`: This changes every time a
   submission is cleaned; if you'd still like to use it as unique ID, you can
   create a `calculate` question in your form with the calculation
   `once(uuid())`. This will prevent the `uuid` from updating with each
   submission edit.

To uniquely identify the questions, you can use the `Data Column Name` under
question options. This is unique within a form and it's different from what is
displayed in the survey as the question itself. You can find more info on it in
the [Kobo docs](https://support.kobotoolbox.org/question_options.html).

Similarly, if you have multiple choice question (called `Select Many` question
type in Kobo),you can specify the underlying identifier (called `XML value`) for
each option. This is the value that you'll see when you export the collected
data.

### Exporting form metadata and submission data

You can manually download your form metadata, such as question names and labels,
question types, in XLS or XML format from the project's Form section on the web
interface, see more detail
[here](https://support.kobotoolbox.org/new_form.html).

To export submission data in XLS or CSV format, follow
[these steps](https://support.kobotoolbox.org/export_download.html).

## OpenFn Adaptor

Check out
[OpenFn/language-kobotoolbox](https://www.github.com/openfn/language-kobotoolbox)
for some helper functions for extracting or "getting" data in bulk from Kobo
Toolbox.

If `language-kobotoolbox` does not provide functions to support your integration
requirements, [`language-http`](https://www.github.com/openfn/language-http) may
also be implemented to send GET/POST/PUT requests to the Kobo APIs.

## Integration Examples

See the `ConSoSci` GitHub repo for several example Kobo-to-database jobs:
https://github.com/OpenFn/consosci

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
