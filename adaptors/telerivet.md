---
title: Telerivet Adaptor
---

## About Telerivet

[Telerivet](https://www.telerivet.com/) is a platform for sending, receiving, and automating SMS, voice calls, and mobile messaging through various channels. Telerivet is commonly used for customer notifications, marketing campaigns, and transactional messaging.

## Integration Options

Telerivet supports 2 primary integration options with OpenFn:

1. **Rest API:** Telerivet has a REST API that enables external services like OpenFn to pull data from Telerivet, or push data from external apps to Telerivet. This option is suited for scheduled, bulk syncs or workflows that must update data in Telerivet with external information. See [functions](/adaptors/packages/telerivet-docs) for more on how to use this adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from Telerivet to external systems (see [docs](https://telerivet.com/api/webhook)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [Telerivet docs](https://developers.google.com/gmail/api/auth/scopes) for the latest on supported authentication methods.
2. When integrating with Telerivet via OpenFn, there is one primary authentication method that is supported: **API Key**. See this adaptor's [Configuration docs](/adaptors/packages/telerivet-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "projectId": "telerivet_project_id",
  "apiKey": "telerivet_api_key"
}
```

### Helpful Links

1. [Telerivet API Documentation](https://telerivet.com/api)
2. [Webhook Setup](https://telerivet.com/help/webhooks) 



### Implementation Examples

_Coming soon!_



