---
title: Google Forms/Google Sheets
---

## Google Sheets Adaptor Overview

Google Sheets adaptor provides seamless integration between Google Forms, Google
Sheets, and the OpenFn platform, enabling robust data flow management. There are
two primary ways to utilize this adaptor, each catering to specific use cases:

### 1. Pushing Data to OpenFn

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

### 2. Pulling Data from Google Sheets

Alternatively, you can pull data from Google Sheets at specific intervals or
on-demand using a `cron` workflow in OpenFn, allowing for more controlled data
retrieval processes. This method is particularly useful when you need to fetch
historical data or perform periodic data updates.

**Use Cases:** - Aggregating data for periodic reporting or analysis. -
Implementing batch processing for efficiency and resource optimization.

The example below shows how to configure a trigger on Google sheets that sends
data to OpenFn on the first day of the month as well as a code snippet showing
how to retrieve report data from a Google Sheets spreadsheet and send it to
OpenFn. By customizing these functions to suit your specific requirements, you
can effectively manage data flow between Google Sheets and OpenFn.
![Screenshot 2024-05-20 at 20 34 52](https://github.com/OpenFn/docs/assets/167166847/61ccd374-44bb-4634-b66a-556396914e87)

```js
// Function to send the data to OpenFn using a POST request
function sendToOpenFn(e) {
  // Convert the event object to a JSON string
  var payload = JSON.stringify(e);
  // The URL of the OpenFn Webhook where data will be sent
  var url = 'https://www.openfn.org/i/webhook-id-here';
  // Options for the UrlFetchApp.fetch method
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload,
  };
  // Send the POST request with the payload to the specified URL
  var response = UrlFetchApp.fetch(url, options);
}

// Function to check if a value is a valid Date object
function isDate(v) {
  // Check if the value is a Date object
  if (Object.prototype.toString.call(v) === '[object Date]') {
    // Check if the Date object is valid
    if (isNaN(v.getTime())) {
      return false; // Invalid date
    } else {
      return true; // Valid date
    }
  } else {
    return false; // Not a Date object
  }
}

// Function to check if a value is a Number
function isNumber(v) {
  // Check if the value is a Number object
  if (Object.prototype.toString.call(v) === '[object Number]') {
    return true; // It's a number
  } else {
    return false; // It's not a number
  }
}

// Function to get report data from the active Google Sheet and send it to OpenFn
function getReportData() {
  // Initialize an object to hold the form ID and data
  var bookReportData = { formId: 'bookReport', data: [] };
  // Get all data from the active sheet as a 2D array
  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();

  // Initialize variables to store page count and book rating
  var pageCount = 0;
  var bookRating = 0;

  // Loop through each row in the data
  for (i in data) {
    // Check if the first cell in the row is a valid date (to ignore the header line)
    if (isDate(data[i][0])) {
      // If the page count column (index 3) is a number, store its value
      if (isNumber(data[i][3])) {
        pageCount = data[i][3];
      }

      // If the rating column (index 6) is a number, store its value
      if (isNumber(data[i][6])) {
        bookRating = data[i][6];
      }

      // Push the row data as an object to the bookReportData array
      bookReportData.data.push({
        Timestamp: data[i][0], // Timestamp of the report
        Title: data[i][1], // Title of the book
        Author: data[i][2], // Author of the book
        NumberOfPages: pageCount, // Number of pages in the book
        Summary: data[i][4], // Summary of the book
        Protagonist: data[i][5], // Protagonist of the book
        Rating: bookRating, // Rating given to the book
        EmailTeacher: data[i][7], // Teacher's email
        EmailStudent: data[i][8], // Student's email
        SendStatus: data[i][9], // Status of the data sending
      });
    }
  }

  // Log the bookReportData object for debugging (optional)
  // Logger.log(bookReportData);

  // Send the collected data to OpenFn
  sendToOpenFn(bookReportData);
}
```

### 3. Pushing Data to Google Sheets

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
