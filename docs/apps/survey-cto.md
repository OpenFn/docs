---
title: SurveyCTO
---

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
