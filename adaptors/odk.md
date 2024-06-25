---
title: ODK
---

In order to fetch data from ODK Central, you must run a scheduled job with a cron trigger the `odk` adaptor.

```js
getSubmissions({
  projectId: 1,
  xmlFormId: 'my-form',
});
```

Every time this job runs it will get the metadata of every submission. 

```json
[
  {
    "instanceId": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44",
    "submitterId": 23,
    "deviceId": "imei:123456",
    "userAgent": "Collect/v2024",
    "reviewState": "approved",
    "createdAt": "2018-01-19T23:58:03.395Z",
    "updatedAt": "2018-03-21T12:45:02.312Z",
  },
  {
    "instanceId": "uuid:d25b774a-7858-4f6f-be15-0e7dda1a5f20",
    "submitterId": 15,
    "deviceId": "imei:987654",
    "userAgent": "Enketo/3.0.4",
    "reviewState": "rejected",
    "createdAt": "2018-01-20T24:12:03.515Z"
  }
]
```

If instead of submission metadata, you want to get the submission content as JSON, you can use ODK's [OData Data Document endpoint](https://docs.getodk.org/central-api-odata-endpoints/#data-document). The OData endpoint supports filtering by submission date and be used to get windows of data.

OpenFn's `request` method can to connect to the OData endpoint.

```js
request("GET", '/v1/projects/{projectId}/forms/{xmlFormId}.svc/Submissions');
```