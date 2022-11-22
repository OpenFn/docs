---
title: commcare reports api
sidebar_label: commcare reports api
id: commcare-reports-api-2016-08-29
keywords:
  - library
  - job
  - expression
  - http
  - get
  - post
  - Promise
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: commcare reports api
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`v0.0.9`](https://www.github.com/openfn/language-http/releases/tag/v0.0.9)
- Created about 6 years ago
- Updated about 6 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`get`, `post`, `Promise`

## Expression

```js
get("api/v0.5/configurablereportdata/daily_form_stats", {
    query: function(state) {
      return { date: state.lastSubmissionDate || "Aug 29, 2016 4:44:26 PM" }
    },
    callback: function(state) {
      // Pick submissions out in order to avoid `post` overwriting `response`.
      var submissions = state.response.body;
      // Use .slice to limit how much you send to the server for testing
      // return submissions
      return submissions.reduce(function(acc, item) {
        return acc.then(
          post(
            "http://localhost:4000/inbox/8ad63a29-5c25-4d8d-ba2c-fe6274dcfbab",
            { body: item }
          )
        )
      }, Promise.resolve(state))
      .then(function(state) {
        console.log(submissions.length)
        if (submissions.length) {
          state.lastSubmissionDate = submissions[submissions.length-1].SubmissionDate
        }
        return state;
      })
      .then(function(state) {
        delete state.response
        return state;
      })
    }
  })
```