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

## Key Features

- **Payment Processing**: Submit order requests and handle payment workflows
- **Transaction Status Tracking**: Query payment status using order references or tracking IDs  
- **Multiple Payment Methods**: Support for mobile money (M-Pesa, Airtel Money), cards, and bank transfers
- **Multi-currency Support**: Accept payments in various currencies (KES, UGX, TZS, USD, etc.)
- **IPN Integration**: Real-time payment status notifications via webhooks
- **Secure Processing**: PCI/DSS compliant payment handling

## Common Use Cases

1. **E-commerce Integration**: Process online store payments and sync order status with inventory management systems
2. **Subscription Billing**: Automate recurring payment processing for subscription services
3. **Financial Reporting**: Extract payment data for accounting and reporting systems
4. **Payment Status Monitoring**: Track payment flows and handle failed transactions
5. **Multi-platform Integration**: Sync payment data between mobile apps and web platforms

### Helpful Links

1. [Pesapal API 3.0 Documentation](https://developer.pesapal.com/how-to-integrate/e-commerce/api-30-json/api-reference)
2. [Pesapal Developer Portal](https://developer.pesapal.com/)
3. [Pesapal Postman Collection](https://documenter.getpostman.com/view/6715320/UyxepTv1)
4. [Test Credentials](https://developer.pesapal.com/api3-demo-keys.txt)
5. [Merchant Registration](https://www.pesapal.com/dashboard/account/register)

### Implementation Examples

_Coming soon!_
