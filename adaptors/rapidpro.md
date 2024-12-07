---
title: RapidPro Adaptor
---

## About RapidPro

[RapidPro](https://app.rapidpro.io/) is an open-source platform for building scalable, automated messaging workflows. It is widely used in development and humanitarian contexts for managing communication via SMS, social media, and other messaging channels. 


## Integration Options

**RapidPro supports two primary integration options:**

**1. Rest API:** RapidPro has an available REST API that enables external services like OpenFn to pull data RapidPro, or push data from external apps to RapidPro. This option suits scheduled, bulk syncs or workflows that must update data in RapidPro with external information. See [functions](/adaptors/packages/rapidpro-docs) for more on how to use this adaptor to work with the API.

**2. Webhook:** RapidPro also has a Webhook or Data Forwarding to push data from Rapidpro to external systems. This option is suited for real-time, event-based data integration. Check out the RapidPro [developer documentation](https://docs.rapidpro.io/webhooks/) to learn how to set up a webhook to push data to OpenFn.

## Authentication

When integrating with RapidPro via OpenFn, one primary authentication method is supported: **Personal Access Token (PAT)**. See this adaptor's [Configuration docs](/adaptors/packages/rapidpro-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "host": "https://app.rapidpro.io/",
  "token": "#Super-sSCrecrete-token"
}
```

### Helpful Links

1. [RapidPro API documentation](https://rapidpro.io/api/v2/)
2. [RapidPro Community](https://community.rapidpro.io/)

### Implementation Examples

1. Sample RapidPro -> DHIS2 sync: [https://github.com/OpenFn/rapidpro-dhis2](https://github.com/OpenFn/rapidpro-dhis2)




