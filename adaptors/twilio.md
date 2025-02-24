---
title: Twilio Adaptor
---

## About Twilio

[Twilio](https://www.twilio.com/en-us) is a cloud communications platform that enables developers to build and scale applications for voice, messaging, video, and other communication channels.

## Integration Options

Twilio supports 2 primary integration options with OpenFn:

1. **Rest API:** Twilio has a REST API that enables external services like OpenFn to pull data from Twilio, or push data from external apps to Twilio. This option is suited for scheduled, bulk syncs or workflows that must update data in Twilio with external information. See [functions](/adaptors/packages/twilio-docs) for more on how to use this adaptor to work with the API.
2. **Webhook:** Webhook or Data Forwarding to push data from Twilio to external systems (see [docs](https://www.twilio.com/docs/usage/webhooks)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [Twilio docs](https://www.twilio.com/docs/) for the latest on supported authentication methods.
2. When integrating with Twilio via OpenFn, there is one primary authentication method that is supported: **API Key**. See this adaptor's [Configuration docs](/adaptors/packages/twilio-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "accountSid": "account_id",
  "authToken": "evenMoreSecret"
}
```

### Helpful Links

1. [Twilio API Documentation](https://www.twilio.com/docs/)
2. [Webhook Setup](https://www.twilio.com/docs/usage/webhooks)


### Implementation Examples

_Coming soon!_



