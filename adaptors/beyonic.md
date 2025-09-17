---
title: Beyonic 
---

## About Beyonic

Beyonic is a digital payments platform that supports mobile money payments, collections, and bulk disbursements, offering integration with major mobile network operators and banks. 

## Integration Options

Beyonic supports 2 primary integration options with OpenFn:

1. **Rest API:** Beyonic has a REST API that enables external services like OpenFn to pull data from Beyonic, or push data from external apps to Beyonic. This option is suited for scheduled, bulk syncs or workflows that must update data in Beyonic with external information. See [functions](/adaptors/packages/beyonic-docs) for more on how to use this adaptor to work with the API.
2. **Webhook:** Webhook or Data Forwarding to push data from Beyonic to external systems (see [docs](https://apidocs.beyonic.com/webhooks)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [Beyonic docs](https://apidocs.beyonic.com) for the latest on supported authentication methods.
2. When integrating with Beyonic via OpenFn, there is one primary authentication method that is supported: **API Key**. See this adaptor's [Configuration docs](/adaptors/packages/beyonic-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "apiUrl": "https://beyonic.com/api",
  "apiToken": "cdjhiooiSIUJHDYSYUIHASIOHKAANOAJJjsiujhaka"
}
```

### Helpful Links

1. [Beyonic Documentation](https://apidocs.beyonic.com)
2. [Beyonic API Reference](https://apidocs.beyonic.com/reference)
3. [Webhook Guide](https://apidocs.beyonic.com/webhooks)

### Implementation Examples

_Coming soon!_




