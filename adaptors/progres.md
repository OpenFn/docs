---
title: ProGres Adaptor
---

## About ProGres

[ProGres](https://www.unhcr.org/) (Protection Registration and Case Management System) is UNHCR's flagship registration and case management system used globally to manage refugee and person of concern data. ProGres v4 is designed to support UNHCR's protection mandate by facilitating the registration, documentation, and case management of refugees, asylum-seekers, internally displaced persons (IDPs), stateless persons, and other persons of concern.

ProGres is essential for UNHCR operations worldwide, serving as the primary system for managing the protection and assistance of displaced populations.

## Integration Options

**REST API via DTP**: ProGres integrations operate through UNHCR's Data Transfer Platform (DTP), a middleware layer that provides secure API access to ProGres data. The DTP acts as a protective gateway, ensuring data security and compliance with UNHCR's strict data protection protocols. Integration requires SSL certificate-based authentication and API tokens for secure communication.

## Authentication

ProGres integration requires multiple authentication components for secure access through the DTP:

```json
{
  "url": "https://endpoint/To/DTP",
  "key": "-----BEGIN PRIVATE KEY-----SOMETYPEOFPRIVATEVALUE-----END PRIVATE KEY-----",
  "cert": "-----BEGIN CERTIFICATE-----SOMETYPEOFVALUE-----END CERTIFICATE-----",
  "token": "[REDACTED]"
}
```

**Authentication Components:**
- **URL**: The DTP endpoint URL for your ProGres instance
- **Private Key**: SSL private key for certificate-based authentication
- **Certificate**: SSL certificate for secure communication
- **Token**: API subscription key for request authorization

All requests must include the subscription key in headers and use SSL certificate authentication for secure data transfer.

## Helpful Links

- [OpenFn ProGres Adaptor Configuration](https://docs.openfn.org/adaptors/packages/progres-configuration-schema)
- [OpenFn ProGres Adaptor Docs](https://docs.openfn.org/adaptors/packages/progres-docs)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
