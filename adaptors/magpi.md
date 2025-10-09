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

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
