---
title: ODK
---

In order to fetch data from ODK Central, you must run a scheduled job with a cron trigger using the `odk` adaptor.

Here's an example of a job that gets submission metadata.

```js
getSubmissions({
  projectId: 1,
  xmlFormId: 'my-form',
});
```

Every time this job runs it will get the metadata of all submissions.

```json
[
  {
    "instanceId": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44",
    "submitterId": 23,
    "deviceId": "imei:123456",
    "userAgent": "Enketo/3.0.4",
    "reviewState": "approved",
    "createdAt": "2018-01-19T23:58:03.395Z",
    "updatedAt": "2018-03-21T12:45:02.312Z",
    "currentVersion": {
      "instanceId": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44",
      "instanceName": "village third house",
      "submitterId": 23,
      "deviceId": "imei:123456",
      "userAgent": "Enketo/3.0.4",
      "createdAt": "2018-01-19T23:58:03.395Z",
      "current": true
    }
  }
]
```

If instead of submission metadata, you want to get the submission content as JSON, you can use ODK's [OData Data Document endpoint](https://docs.getodk.org/central-api-odata-endpoints/#data-document). The OData endpoint supports filtering by submission date and be used to get windows of data.

OpenFn's `request` method can be used to connect to the OData endpoint.

```js
request("GET", '/v1/projects/{projectId}/forms/{xmlFormId}.svc/Submissions');
```

This request would return JSON like this:

```json
{
  "@odata.context": "https://your.odk.server/v1/projects/7/forms/simple.svc/$metadata#Submissions",
  "value": [
    {
      "__id": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44",
      "age": 25,
      "meta": {
        "instanceID": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44"
      },
      "name": "Bob"
    },
    {
      "__id": "uuid:297000fd-8eb2-4232-8863-d25f82521b87",
      "age": 30,
      "meta": {
        "instanceID": "uuid:297000fd-8eb2-4232-8863-d25f82521b87"
      },
      "name": "Alice"
    }
  ]
}
