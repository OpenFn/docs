---
title: Intuit Adaptor (QuickBooks)
---

## About Intuit (QuickBooks)

[Intuit](https://www.intuit.com/) provides financial, accounting, and tax management solutions for businesses and individuals, including **QuickBooks**, **TurboTax**, and **Mint**. 

## Integration Options

Intuit supports 2 primary integration options:

1. **Rest API**: Intuit has an available [REST API](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account#the-account-object) that enables external services like OpenFn to pull data from Intuit, or push data from external apps to Intuit. This option is suited for scheduled, bulk syncs or workflows that must update data in Intuit with external information. See [functions](/adaptors/packages/intuit-docs) for more on how to use this adaptor to work with the API.

2. **Webhook**: Intuit also has a [Webhook or Data Forwarding](https://developer.intuit.com/app/developer/qbo/docs/api/webhooks) to push data from Intuit to external systems. This option is suited for real-time, event-based data integration. Check out the Intuit [developer documentation](https://developer.intuit.com/app/developer/qbo/docs/api/webhooks) to learn how to set up a webhook to push data to OpenFn.

## Authentication

See [Intuit docs](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization) for the latest on supported authentication methods. 

When integrating with Intuit via OpenFn, there is one primary authentication method supported: **Access Token**. See this adaptor's [Configuration docs](/adaptors/packages/intuit-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "access_token": "your-qpi-token-JSUzI1NiIsIng1dCI6IjlGW",
  "baseUrl": "https://sandbox-quickbooks.api.intuit.com"
}
```

### Helpful Links

1. [API Documentation](https://developer.intuit.com/)
2. [Webhook Configuration Documentation](https://developer.intuit.com/app/developer/qbo/docs/api/webhooks)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
