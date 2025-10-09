---
title: Ghana NIA (National Identification Authority) Adaptor
---

## About Ghana NIA

The Ghana National Identification Authority (NIA) is a statutory body established by the National Identification Authority Act, 2006 (Act 707) to create, maintain, provide and promote the use of national identity cards known as Ghana Cards. The NIA delivers exceptional identity services through a digitalized ecosystem for the promotion of safety, security, good governance and development in Ghana. The authority manages the National Identification System (NIS) that serves millions of Ghanaians and eligible foreigners, providing secure digital identity services for various government and private sector applications.

## Integration Options

Ghana NIA supports REST API integration with OpenFn:

**REST API**: The Ghana NIA system provides API access for national identification services, enabling external systems like OpenFn to interact with identity verification, card issuance, and demographic data. See [functions](/adaptors/packages/ghana-nia-docs) for more on how to use this adaptor to work with the Ghana NIA API.

## Authentication

To connect to Ghana NIA, you need to provide authentication credentials:

```json
{
  "baseUrl": "https://your-nia-instance.gov.gh",
  "merchantKey": "your_merchant_key"
}
```

**Required Fields:**
- `baseUrl`: The base URL of the Ghana NIA system
- `merchantKey`: Your NIA merchant key for API authentication (required)

## Helpful Links

- [Ghana NIA Official Website](https://nia.gov.gh/)
- [OpenFn Ghana NIA Adaptor](https://docs.openfn.org/adaptors/packages/ghana-nia-readme)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
