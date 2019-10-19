## Standard webhook configuration
This section describes how to enable push notifications from selected source applications or how to configure pull jobs to fetch data from those sources. If you don't see yours in the alphabetical list below feel free to add it with a pull request.

To connect an application with standard JSON webhooks, copy your inbox
URL from the "Inbox" page or your "Project Settings" screen and use it as the
destination URL on your source application. Unless you have specifically
configured it on the "Access & Security" page, no authentication is required.

***N.B.: This is by no means an exhaustive list.*** It is merely a list of common sources that external contributors have added. Remember that anything with a REST api or a JSON-based notification service can be used with OpenFn.

## CommCare HQ
1. Go to "Project Settings".
2. Click "Data Forwarding".
3. "Add a forwarding location" for Cases, Forms, or both.
4. Specify JSON, using your OpenFn inbox URL as the target. See the [CommCare documentation](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128).
2. Create a [message-filter trigger like this](/documentation.html#match-a-message-with-a-fragment-inside-another-object-called-form).
3. Set up a `job` running on that filter to process CommCare submissions or case updates.

## Magpi
Magpi does not push data to OpenFn. In order to fetch data from Magpi, you must run a job on a timer using `langugage-magpi`:
```js
fetchSurveyData({
  "surveyId": 37479, // the survey id
  "afterDate": "2016-05-31", // the initial "after" date
  // after the first run, OpenFn will only fetch new submissions
  "postUrl": "https://www.openfn.org/inbox/secret-5c25-inbox-ba2c-url" // the inbox to post form data to.
});
```
Every time this job runs it will only fetch new data, by default.

## SurveyCTO
SurveyCTO does not push data to OpenFn. In order to fetch data from SurveyCTO, you must run a job on a using `language-surveycto`:
```js
fetchSubmissions(
  "form_id", // the form id
  "Sep 1, 2016 3:56:02 PM", // the initial "after" date
  // after the first run, OpenFn will only fetch new submissions
  "https://www.openfn.org/inbox/something-secret" // the inbox to post form data to.
)
```
Every time this job runs it will only fetch new data, by default.

## Open Data Kit (ODK) Aggregate
1. To new submissions from ODK in real-time, click the "Form Management" tab at the top of your Aggregate interface.
2. Click "Publish" next to the form you'd like to publish to OpenFn.
3. A dialogue box will open.
4. In the "Publish To:" picklist, select `Z-ALPHA JSON Server`.
5. Choose which data to publish in the "Data to Publish:" picklist. You may: **"Upload Existing Data ONLY"** (ideal for migrations of finished data sets), **"Stream New Submission Data ONLY"** (ideal for new projects), or **"BOTH Upload Existing & Stream New Submission Data"** (ideal for connecting ongoing projects which are already running).
6. In the "URL to publish to:" text box, enter your OpenFn Inbox UUID. (e.g., `https://www.openfn.org/inbox/8ad63a29-mUCh-sEcRET-cODes-wOW`)
7. Leave "Authorization token:" blank.
8. Leave "Include Media as:" set to "Links(URLs) to Media".
9. Click "Publish" and enter your email address in the dialogue box.
10. Click the "Published Data" tab under "Form Management" and select your form to view the status of your publisher. You can also now check your OpenFn inbox to see ODK submissions arrive.

## Kobo
1. To push data from Kobo, users must click the projects icon on their left-side nav bar. It's in the shape of a globe.
2. Once selecting a project, the `Project Settings` link will appear at the top left side of the screen. Click it to open the Project Settings page.
3. In the bottom left pane of the project settings page, users must paste their inbox URL from OpenFn into the `Rest Services` `Service URL` input area and select `JSON Post` as the `Service Name`.
4. Click `Add Service` to start forwarding new Kobo submissions to OpenFn.org.

To test to integration, add a submission manually using the `enter data in
browser` button. Head back to your history page at OpenFn to view the newly
submitted data and write a new `filter` and `job` to map your Kobo data to any
destination system on OpenFn.

Here's a sample post from Kobo REST service. Note that questions inside groups
are prefixed with `groupname/` rather than sitting inside a group object like
ODK: ```json { "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",
"group1/name": "twenty", "group1/age": "19", "formhub/uuid":
"6f5773a110b046cb97e3d71f6c04e7a6", "first_q": "hello", "final_q": "why not?",
"_xform_id_string": "groups", "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",
"_userform_id": "taylordowns2000_groups", "_tags": [], "_submitted_by": null,
"_submission_time": "2016-04-22T06:38:20", "_status": "submitted_via_web",
"_notes": [], "_id": 889409, "_geolocation": [ null, null ],
"_bamboo_dataset_id": "", "_attachments": [] } ```

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
      'method': 'post',
      "contentType" : "application/json",
      'payload': payload
  };
  var response = UrlFetchApp.fetch(url, options);
}


function isDate(v) {
  if (Object.prototype.toString.call(v) === "[object Date]") {
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
  if (Object.prototype.toString.call(v) === "[object Number]") {
    return true;
  }
  else {
    return false;
  }
}


function getReportData(){
  var bookReportData = {formId : "bookReport", data: []};
  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();

  var pageCount = 0;
  var bookRating = 0;

  for (i in data) {

    if (isDate(data[i][0])){        //  ignore header line
      if (isNumber(data[i][3])) {
        pageCount = data[i][3]
      }

      if (isNumber(data[i][6])) {
        bookRating = data[i][6]
      }

      bookReportData.data.push(
        {
          Timestamp : data[i][0],
          Title : data[i][1],
          Author : data[i][2],
          NumberOfPages : pageCount,
          Summary : data[i][4],
          Protagonist : data[i][5],
          Rating : bookRating,
          EmailTeacher : data[i][7],
          EmailStudent : data[i][8],
          SendStatus : data[i][9]
        }
      );
    }
  }

//  Logger.log(bookReportData);

  sendToOpenFn(bookReportData);  
}
```

## Application Developers
This section is for you if you are hoping to build or extend an existing application that can connect to OpenFn. We follow modern web-standard JSON api guidelines.

For your application to a be data provider (or "source") for OpenFn integrations, we highly recommend that you create a "notifications service" (sometimes called a "webhooks service" or "event-based push API"). This is preferrable to using a REST api for two reasons: (1) A notifications service will give your clients the ability to set up real-time integrations, and (2) a notifications service is more efficient for both your servers and OpenFn—instead of having requests be made and handled every X seconds, your servers and OpenFn's servers will only work when new data is available.

For your appliation to be a consumer (or "destination") for OpenFn, you must either have a standard, JSON-based rest API or create a language-package that meets your API specifications.

### Sending data to OpenFn
To send data to OpenFn, your application must be able to make an HTTPS post to an external URL with a valid JSON object as the post body. See the following example using cURL:
```
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Cache-Control: no-cache" \
  -d '{"foo":"bar", "baz":"qux"}' \
  "https://staging.openfn.org/inbox/some-secret-api-key"
```
OpenFn will respond with a 200 and an empty JSON object in the event of a successful post. 400s mean that the user's external URL is wrong, and 500s means that there is an application error on OpenFn. While 500s are rare, they could be due to invalid JSON in your POST body.

If you cannot notifiy an external URL when some event takes place, you can still integrate with OpenFn if you have a JSON-based REST API. OpenFn users can make HTTP GET requests to your application and perform additional actions based on your response. You should allow either basic or token authentication and responsd to a valid GET with JSON. There is no specific format for your response, as users can parse it any way they'd like, extracting relevant data and then performing other actions—like loading it into a destination system—with that data. See [language-http](https://www.github.com/openfn/language-http) for details on how users make these generic HTTP requests.

### Receiving data from OpenFn
To make it easy for users to connect to your application, it's highly recommended that you create a language-package with your required authentication and a set of simple, allowable actions nicely abstracted into "helper functions". See [language-dhis2](https://www.github.com/openfn/language-dhis2) for an example of a language-package which creates a simpler interface for a traditional JSON-based REST api. Language packages are written in Javascript and execute in Node. You can convert OpenFn's JSON into XML, or any other format before sending it to your application and you may make use of any node modules you'd like. See [language-postgresql](https://www.github.com/openfn/language-postgresql) for an example of a language package that connects directly to PostgreSQL databases using a popular NPM module called "pg".

To receive data from OpenFn's generic language-http langauge package, your application must allow either basic, token, or digest authenticated POST, PUT, or GET requests. (Though it is not advisable to create an API that requires GET requests to create or update data.)
