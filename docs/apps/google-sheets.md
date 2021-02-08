---
title: Google Forms/Google Sheets
---

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
