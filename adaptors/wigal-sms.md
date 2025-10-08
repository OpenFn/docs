---
title: Wigal SMS Adaptor
---

## About Wigal SMS

[Wigal](https://wigal.com.gh/) is a Ghana-based technology company that provides enterprise-level digital solutions including their flagship SMS platform called [FROG (Free and Reliable Online Gateway)](https://sms.wigal.com.gh/). FROG is Ghana's leading bulk SMS provider, offering the most competitive messaging prices and reliable delivery to all mobile network operators in the country.


## Integration Options

Wigal SMS supports integration through its FROG API, which enables external services like OpenFn to:

1. **REST API**: Send SMS messages programmatically using the FROG SMS Gateway API. This option is suited for automated notifications, bulk messaging campaigns, or workflows that need to send SMS alerts and communications. See [functions](/adaptors/packages/wigal-sms-docs) for more on how to use this adaptor to work with the API.

2. **Bulk Messaging**: Send messages to multiple recipients simultaneously, perfect for marketing campaigns, alerts, and mass communications.

## Authentication

When integrating with Wigal SMS via OpenFn, the authentication method requires:
- **Username**: Your FROG SMS account username (email address)
- **API Key**: Your FROG SMS API key for authentication
- **Base URL**: The FROG API endpoint (https://frogapi.wigal.com.gh)

See this adaptor's [Configuration docs](/adaptors/packages/wigal-sms-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json
{
  "username": "test@openfn.org",
  "apiKey": "@some(!)apikey",
  "baseUrl": "https://frogapi.wigal.com.gh"
}
```


### Helpful Links

1. [FROG SMS Platform](https://sms.wigal.com.gh/)
2. [Wigal Company Website](https://wigal.com.gh/)
3. [FROG API Documentation](https://frogdocs.wigal.com.gh/)
4. [FROG Registration](https://frog.wigal.com.gh/register)

### Implementation Examples

_Coming soon!_
