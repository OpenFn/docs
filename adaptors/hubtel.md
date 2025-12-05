---
title: Hubtel Adaptor
---

## About Hubtel

[Hubtel](https://www.hubtel.com/) is a payment, messaging, and e-commerce platform that enables businesses to send SMS messages, process mobile money transactions, and manage digital commerce operations. Hubtel supports API integrations to facilitate seamless business automation.

## Integration Options

Hubtel supports two primary integration options with OpenFn:

**1. Rest API:** Hubtel offers a REST API that enables external applications to interact with its services. This option is ideal for applications requiring scheduled or bulk synchronization with Hubtel. Refer to the Hubtel REST API [documentation](https://api.hubtel.com/) for detailed guidelines on endpoints and payload formats.

**2. Webhook:** Webhook or Data Forwarding to push data from Hubtel to external systems ([see docs](https://developers.hubtel.com/docs/webhooks)). This option is suited for real-time, event-based data integration.

## Authentication
1. See [Hubtel docs](https://developers.hubtel.com/docs/authentication) for the latest on supported authentication methods.
2. When integrating with Hubtel via OpenFn, authentication via **API Key** is supported.
3. See this adaptor's [Configuration docs](/adaptors/packages/hubtel-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "baseUrl": "https://example.com",
  "clientId": "abc123def",
  "clientSecret": "ghi456jkl"
}
```

### Helpful Links

1. [Hubtel Developer Portal](https://developers.hubtel.com/)
2. [API Reference](https://developers.hubtel.com/docs/)
3. [Webhook Setup Guide](https://developers.hubtel.com/docs/webhooks)

   
### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
