---
title: Magpi
---

Magpi is not able to push data to external URLs. In order to fetch data from
Magpi, you must run a scheduled job with a cron trigger using `language-magpi`:

```js
fetchSurveyData({
  surveyId: 37479, // the survey id
  afterDate: '2016-05-31', // the initial "after" date
  // after the first run, OpenFn will only fetch new submissions
  postUrl: 'https://www.openfn.org/inbox/secret-5c25-inbox-ba2c-url', // the inbox to post form data to.
});
```

Every time this job runs it will only fetch new data, by default.

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
