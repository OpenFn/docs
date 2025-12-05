---
title: Google Forms/Google Sheets
---

The Google Sheets adaptor provides seamless integration between Google Forms,
Google Sheets, and the OpenFn platform, enabling robust data flow management.

## Authentication and Authorization

This adaptor requires OAuth authorization to connect with Google Sheets. This
authorization can be achieved by a user or organization admin consenting to an
OAuth client to access resources. Users can request authorization via the
default OpenFn Google OAuth client or choose to
`Add new (generic) OAuth client(s)` for their account and projects.

To authorize Google Sheets for your OpenFn workflows, read our documentation on
[using OAuth credentials](/documentation/build/credentials#use-oauth2-credentials).

:::info Google Oauth Client Setup Tips for Super Users

Setting up your own generic OAuth client requires that you have an OAuth
application set up. If you are a super user configuring a new Google OAuth
client for your OpenFn deployment, then please refer to Google's documentation
to
[configure an OAuth Client ID](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow),
as well as see the standard
[openid-configuration](https://accounts.google.com/.well-known/openid-configuration)
for how to complete the OAuth Client Setup form on OpenFn.

:::

### Permissions (Scopes)

Permissions and access in an OAuth instance are defined by scopes which are
named differently by providers based on their functions within their platform.

For GoogleSheets, your super user will likely need to add the following scopes
to the Oauth Client Setup configured for Google in your OpenFn deployment. That
said, please refer to
[Google's documentation on Oauth scopes](https://developers.google.com/identity/protocols/oauth2/scopes)
for the latest information.

- **The required endpoints** for the Google Oauth Client are available at
  https://accounts.google.com/.well-known/openid-configuration.
- **The mandatory scopes** are `openid email profile`
- **The optional scopes** are available here:
  https://developers.google.com/identity/protocols/oauth2/scopes (note that you
  need to use the full URL, e.g.,
  `https://www.googleapis.com/auth/spreadsheets`)

## Integration Options

There are a couple of primary ways to integrate with this app, each catering to
different use cases.

### 1. Pushing Data to OpenFn via Google App Scripts

With this method, data from Google Forms or Google Sheets is automatically
pushed to an OpenFn webhook trigger workflow whenever new entries are made. This
real-time approach ensures that your data processing pipelines are continuously
fed with the latest information.

**Use Cases:** - Monitoring survey responses in real-time. - Triggering
immediate actions based on form submissions. - Enabling timely data
synchronization between Google Forms/Sheets and external systems.

To push data to OpenFn in real-time we will have to configure a _trigger_ on a
Google App Script as demonstrated in the example below.
![image](https://github.com/OpenFn/docs/assets/167166847/4680c12b-ad57-497e-9073-37e287624f42)

```js
function sendToOpenFn(data) {
  var payload = JSON.stringify(data);
  var url = 'https://app.openfn.org/i/your-workorder-id';
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload,
  };
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
}

function onFormSubmit(e) {
  var headers = Object.keys(e.namedValues); // Get column headers from form responses

  // Create the survey form entry object dynamically
  var surveyFormEntry = { formId: 'surveyForm', data: {} };

  // Iterate over each row of form responses
  for (var i = 1; i < e.values.length; i++) {
    // Start from index 1 to skip header row
    var formData = {};

    // Iterate over each column header and assign corresponding value from form response
    for (var j = 0; j < headers.length; j++) {
      var value = e.namedValues[headers[j]][i - 1]
        ? e.namedValues[headers[j]][i - 1].toString()
        : ''; // Convert value to string, handle empty values
      if (value.trim() !== '') {
        // Check if the value is not empty
        formData[headers[j]] = value;
      }
    }
    if (Object.keys(formData).length > 0) {
      surveyFormEntry.data = formData;
      // Send the survey form entry to OpenFn and log the workorder id back on Google sheet
      sendToOpenFn(surveyFormEntry); // Sending data to OpenFn and getting the response
    }
  }
}
```

### 2. Pulling Data from Google Sheets using OpenFn

Alternatively, you can pull data from Google Sheets at specific intervals or
on-demand using a `cron` workflow in OpenFn, allowing for more controlled data
retrieval processes. This method is particularly useful when you need to fetch
historical data or perform periodic data updates.

Check out the docs on available [functions](./packages/googlesheets-docs) to
learn how to configure a workflow step to use this OpenFn adaptor to
`getValues()` and fetch data from a target Google Sheet.

**Use Cases:** - Aggregating data for periodic reporting or analysis. -
Implementing batch processing for efficiency and resource optimization.

### 3. Pushing Data to Google Sheets via OpenFn

The Google Sheets adaptor can also be used to push data to Google Sheets from
other systems via OpenFn. This allows for seamless integration between external
applications and Google Sheets, leveraging OpenFn as the integrator.

**Use Cases:** - Importing data from CRM systems into Google Sheets for sales
analysis. - Updating inventory levels in a Google Sheets spreadsheet from an
e-commerce platform. - Automatically populating project management data from
task tracking systems into Google Sheets for reporting purposes.

A step by step guide is found
[in this tutorial](https://docs.openfn.org/documentation/tutorials/http-to-googlesheets)
that shows us how to get data via a REST API and push it to Google Sheet.

### Helpful Resources

- [Google Sheets API Overview](https://developers.google.com/sheets/api/guides/concepts)
- OpenFn Workflow Tutorial:
  [HTTP-to-GoogleSheets](https://docs.openfn.org/documentation/tutorials/http-to-googlesheets)
  

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
