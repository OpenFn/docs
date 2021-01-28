---
title: Generic Data Sources
---

## Standard webhook configuration

This section describes how to enable push notifications from selected source
applications or how to configure pull jobs to fetch data from those sources. If
you don't see yours in the alphabetical list below feel free to add it with a
pull request.

Every OpenFn project has a unique **Inbox URL** address that can be used as an
endpoint for any JSON webhook. To set up a data source, configure that source to
make a POST over HTTPS to your Inbox URL. See [Your Inbox](/build/inbox.md).

To connect an application with standard JSON webhooks, copy your inbox URL from
the "Inbox" page or your "Project Settings" screen and use it as the destination
URL on your source application. Unless you have specifically configured it on
the "Access & Security" page, no authentication is required.

**_N.B.: This is by no means an exhaustive list._** It is merely a list of
common sources that external contributors have added. Remember that anything
with a REST api or a JSON-based notification service can be used with OpenFn.

## Magpi

Magpi is not able to push data to external URLs. In order to fetch data from
Magpi, you must run a scheduled job with a cron trigger using `langugage-magpi`:

```js
fetchSurveyData({
  surveyId: 37479, // the survey id
  afterDate: '2016-05-31', // the initial "after" date
  // after the first run, OpenFn will only fetch new submissions
  postUrl: 'https://www.openfn.org/inbox/secret-5c25-inbox-ba2c-url', // the inbox to post form data to.
});
```

Every time this job runs it will only fetch new data, by default.

## SurveyCTO

SurveyCTO is not able to push data to external URLs. In order to fetch data from
SurveyCTO, you must run a job on a using `language-surveycto`:

```js
fetchSubmissions(
  'form_id', // the form id
  'Sep 1, 2016 3:56:02 PM', // the initial "after" date
  // after the first run, OpenFn will only fetch new submissions
  'https://www.openfn.org/inbox/something-secret' // the inbox to post form data to.
);
```

Every time this job runs it will only fetch new data, by default.

## Open Data Kit (ODK) Collect

To bypass ODK Aggregate and submit forms directly to OpenFn make the following
changes in your ODK Collect app.

1. Select `General Settings`.
2. Select `Server Settings`.
3. Under `Type`, select `Other`.
4. Under `URL`, enter `https://www.openfn.org
5. Under `Submission path`, enter `/inbox/your-unique-inbox-url` (you can copy
   this from your OpenFn Inbox).
6. Optional: If you have enabled auth methods on your inbox, enter your
   `username` and `password` on this same screen.

Note that you cannot load forms from OpenFn. Forms must be loaded directly via
[ODK's direct method](https://docs.opendatakit.org/collect-forms/#loading-forms-directly),
which allows you to send forms as files via email/Whatsapp. Users can then
choose to download the files and save them in the `odk/ forms` folder on their
mobile.

Note that if you want to reverse this setup and configure ODK Collect to
re-connect to your Aggregate instance again:`

1. Go back to `General Settings`.
2. Select `Server Settings`.
3. Under `Type`, select `ODK Aggregate`.
4. Under `URL`, enter `Your Aggregate URL`
5. Under `Submission path`, enter `/submissions`.
6. Enter your ODK Aggregate `username` and `password` on this same screen.

## Open Data Kit (ODK) Aggregate

1. To new submissions from ODK in real-time, click the "Form Management" tab at
   the top of your Aggregate interface.
2. Click "Publish" next to the form you'd like to publish to OpenFn.
3. A dialogue box will open.
4. In the "Publish To:" picklist, select `Z-ALPHA JSON Server`.
5. Choose which data to publish in the "Data to Publish:" picklist. You may:
   **"Upload Existing Data ONLY"** (ideal for migrations of finished data sets),
   **"Stream New Submission Data ONLY"** (ideal for new projects), or **"BOTH
   Upload Existing & Stream New Submission Data"** (ideal for connecting ongoing
   projects which are already running).
6. In the "URL to publish to:" text box, enter your OpenFn Inbox UUID. (e.g.,
   `https://www.openfn.org/inbox/8ad63a29-mUCh-sEcRET-cODes-wOW`)
7. Leave "Authorization token:" blank.
8. Leave "Include Media as:" set to "Links(URLs) to Media".
9. Click "Publish" and enter your email address in the dialogue box.
10. Click the "Published Data" tab under "Form Management" and select your form
    to view the status of your publisher. You can also now check your OpenFn
    inbox to see ODK submissions arrive.

## Ona.io

1. To push data from Ona.io, click on the drop-down menu next to a specific form
   and select `Settings`.
2. On the left-side menu, select `Webhooks`.
3. Paste your OpenFn inbox URL into the URL input field.
4. Click "Add webhook".
5. Ensure that the webhook is now listed with the `JSON` tag, indicating that it
   will forward data as JSON.
6. Check to see that, once a form is submitted, it is forwarded to your OpenFn
   inbox.

## Community Health Toolkit

1. To push data from CHT applications to OpenFn, leverage the
   [Outbound Push](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/)
   feature to forward specified data to your OpenFn project.
2. When definining the
   [`destination`](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#destination),
   specify your OpenFn inbox URL as the `baseURL`. No `auth` parameters are
   required, unless you have configured Inbox Security on your OpenFn project.
3. Define the data to forward to OpenFn in the
   [`mapping`](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#mapping)
   property. This will structure the payload that is sent to your OpenFn Inbox
   as a "Message".

To send data _to_ CHT applications, check out the
[CHT API](https://docs.communityhealthtoolkit.org/apps/reference/api/).

## Google Forms/Google Sheets

You can send data to OpenFn whenever a new row is added to a Google Sheet, for
example when a new submission is made to a Google Form. Below is some sample
code you may add to your Google Sheet to make it push data to OpenFn whenever
new rows are added.

```js
function sendToOpenFn(e) {
  var payload = JSON.stringify(e);
  var url = 'https://www.openfn.org/inbox/your-id-here';
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload,
  };
  var response = UrlFetchApp.fetch(url, options);
}

function isDate(v) {
  if (Object.prototype.toString.call(v) === '[object Date]') {
    if (isNaN(v.getTime())) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function isNumber(v) {
  if (Object.prototype.toString.call(v) === '[object Number]') {
    return true;
  } else {
    return false;
  }
}

function getReportData() {
  var bookReportData = { formId: 'bookReport', data: [] };
  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();

  var pageCount = 0;
  var bookRating = 0;

  for (i in data) {
    if (isDate(data[i][0])) {
      //  ignore header line
      if (isNumber(data[i][3])) {
        pageCount = data[i][3];
      }

      if (isNumber(data[i][6])) {
        bookRating = data[i][6];
      }

      bookReportData.data.push({
        Timestamp: data[i][0],
        Title: data[i][1],
        Author: data[i][2],
        NumberOfPages: pageCount,
        Summary: data[i][4],
        Protagonist: data[i][5],
        Rating: bookRating,
        EmailTeacher: data[i][7],
        EmailStudent: data[i][8],
        SendStatus: data[i][9],
      });
    }
  }

  //  Logger.log(bookReportData);

  sendToOpenFn(bookReportData);
}
```
