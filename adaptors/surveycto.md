---
title: SurveyCTO
---

## Real-time (with webhooks)

SurveyCTO has a
[webhooks service](https://docs.surveycto.com/05-exporting-and-publishing-data/03-publishing-data-to-the-cloud/05.forms-to-webhooks.html)
which allows you to publish data to your OpenFn inbox. Note that as submissions
come in to the server, SurveyCTO will automatically publish your selected fields
to your chosen webhook but there will be a brief delay of up to ten minutes from
the time the submission occurs and the time SurveyCTO sends this data to OpenFn.

From SurveyCTO:

- You can get started by going to your server console's Export tab, scrolling
  down to the Advanced: publishing form and dataset data to the cloud section,
  and clicking the ON/OFF toggle to ON if you haven't already enabled cloud
  publishing.

- To configure any one of your forms to publish via webhooks, click on the
  Configure option for that form, and then click Add Webhook in the panel that
  appears.

## Periodic

In order to fetch data from SurveyCTO periodically, you can use
`language-surveycto`:

```js
fetchSubmissions(
  'form_id', // the form id
  'Sep 1, 2016 3:56:02 PM', // the initial "after" date
  // after the first run, OpenFn will only fetch new submissions
  'https://www.openfn.org/inbox/something-secret' // the inbox to post form data to.
);
```

Every time this job runs it will only fetch new data, by default.
