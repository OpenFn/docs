---
title: Pesapal Adaptor
---

## About Pesapal

[Pesapal](https://www.pesapal.com/) is a leading payment gateway service provider in East Africa, enabling businesses to accept payments from customers using various payment methods including mobile money, cards, and bank transfers. Pesapal supports payments in multiple currencies and provides secure, PCI/DSS compliant payment processing for e-commerce platforms, mobile applications, and other digital services.

## Integration Options

Pesapal supports integration through its REST API, which enables external services like OpenFn to:

1. **REST API**: Submit payment orders, query transaction status, and manage payment workflows. This option is suited for e-commerce integrations, automated billing systems, or workflows that need to process payments and track their status. See [functions](/adaptors/packages/pesapal-docs) for more on how to use this adaptor to work with the API.

2. **IPN (Instant Payment Notification)**: Receive real-time notifications when payment status changes. This option is suited for event-based workflows that need immediate updates on payment completion or failure.

## API Versions

Pesapal offers multiple API versions:

- **API 3.0 (JSON)**: The current version using JSON REST APIs with Bearer token authentication
- **API 2.0 (XML)**: Legacy version using XML and OAuth 1.0 authentication (deprecated)

This adaptor supports both versions, with API 3.0 being recommended for new integrations.

## Authentication

### API 3.0 Authentication

When integrating with Pesapal API 3.0 via OpenFn, the authentication method uses **Consumer Key and Consumer Secret** to generate a Bearer token:

```json
{
  "baseUrl": "https://pay.pesapal.com/v3",
  "consumer_key": "your-consumer-key",
  "consumer_secret": "your-consumer-secret"
}
```

For testing/sandbox environment:
```json
{
  "baseUrl": "https://cybqa.pesapal.com/pesapalv3",
  "consumer_key": "your-sandbox-consumer-key", 
  "consumer_secret": "your-sandbox-consumer-secret"
}
```

### API 2.0 Authentication (Legacy)

For legacy integrations using API 2.0:

```json
{
  "baseUrl": "https://www.pesapal.com",
  "consumer_key": "your-consumer-key",
  "consumer_secret": "your-consumer-secret"
}
```

See this adaptor's [Configuration docs](/adaptors/packages/pesapal-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn.


### Helpful Links

1. [Pesapal API 3.0 Documentation](https://developer.pesapal.com/how-to-integrate/e-commerce/api-30-json/api-reference)
3. [Pesapal Postman Collection](https://documenter.getpostman.com/view/6715320/UyxepTv1)
4. [Test Credentials](https://developer.pesapal.com/api3-demo-keys.txt)
5. [Merchant Registration](https://www.pesapal.com/dashboard/account/register)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
