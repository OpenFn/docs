---
title: Ghana BDR (Births and Deaths Registry) Adaptor
---


## About Ghana BDR

The Ghana Births and Deaths Registry (BDR) is the official government agency responsible for registering all births, deaths, and related vital events within Ghana's boundaries. Established under the Registration of Births and Deaths Act 1027 of 2020, the BDR maintains comprehensive records of vital statistics and provides certified documentation for citizens. The registry serves as the primary source for birth certificates, death certificates, adoption records, and other vital registration services essential for legal identification and government services in Ghana.

## Integration Options

Ghana BDR supports REST API integration with OpenFn:

**REST API**: The Ghana BDR system provides API access for vital registration services, enabling external systems like OpenFn to interact with birth and death registration data.  See [functions](/adaptors/packages/ghana-bdr-docs) for more on how to use this adaptor to work with the Ghana BDR API.

## Authentication

To connect to Ghana BDR, you need to provide authentication credentials:

```json
{
  "baseUrl": "https://your-bdr-instance.gov.gh",
  "username": "your_username",
  "password": "your_password"
}
```

**Required Fields:**
- `baseUrl`: The base URL of the Ghana BDR system
- `username`: Your BDR system username (required)
- `password`: Your BDR system password (required)


## Helpful Links

- [Ghana BDR Official Website](https://bdr.gov.gh/)
- [OpenFn Ghana BDR Adaptor](https://docs.openfn.org/adaptors/packages/ghana-bdr-readme)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
