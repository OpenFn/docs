---
title: Big Query 
---

## About Big Query 

BigQuery is Google Cloud’s fully managed, serverless, and highly scalable data warehouse solution. It enables organizations to store, analyze, and visualize large datasets using SQL queries, machine learning, and real-time analytics. 

## Integration Options

BigQuery supports 2 primary integration options with OpenFn:

1. **Rest API:** BigQuery has a REST API that enables external services like OpenFn to pull data from BigQuery, or push data from external apps to BigQuery. This option is suited for scheduled, bulk syncs or workflows that must update data in BigQuery with external information. See [functions](/adaptors/packages/bigquery-docs) for more on how to use this adaptor to work with the API.
2. **Webhook:** Webhook or Data Forwarding to push data from BigQuery to external systems (see [docs](https://cloud.google.com/run/docs/triggering/webhooks)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [BigQuery docs](https://cloud.google.com/bigquery/docs) for the latest on supported authentication methods.
2. When integrating with BigQuery via OpenFn, there is one primary authentication method that is supported: **API Key**. See this adaptor's [Configuration docs](/adaptors/packages/bigquery-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "type": "service_acconut",
  "project_id": "some-project-id",
  "private_key_id": "670b9e3c8c366e83aa569dd57cbfc5c575b72e42",
  "private_key": "-----BEGIN PRIVATE KEY-----\nblah\nmoreblah=\n-----END PRIVATE KEY-----\n",
  "client_email": "bigquery@some-project.iam.gserviceaccount.com",
  "client_id": "someid",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bigquery%40some-project.iam.gserviceaccount.com"
}
```

### Helpful Links

1. [BigQuery Documentation](https://cloud.google.com/bigquery/docs)
2. [BigQuery REST API](https://cloud.google.com/bigquery/docs/reference/rest)


### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
