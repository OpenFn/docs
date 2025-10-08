---
title: Divoc Adaptor
---

## About Divoc

DIVOC (Digital Infrastructure for Verifiable Open Credentialing) is an open-source platform designed for issuing and managing digital vaccination certificates. Developed by the eGovernments Foundation and used as the backbone for India's CoWIN platform, DIVOC has issued over 2 billion vaccination certificates across multiple countries including India, Sri Lanka, Philippines, Jamaica, and Indonesia. The platform provides WHO-compliant digital certificates that are accepted in over 120 countries worldwide.

## Integration Options

DIVOC supports REST API integration with OpenFn:

**REST API**: DIVOC provides a comprehensive REST API that enables external services like OpenFn to interact with vaccination certificate management systems. This API allows you to create digital certificates, manage vaccination facilities, register beneficiaries, and generate vaccination reports programmatically. The integration is suited for scheduled certificate issuance, bulk vaccination data synchronization, and workflows that need to update DIVOC with external health system information. See [functions](/adaptors/packages/divoc-docs) for more on how to use this adaptor to work with the DIVOC API.

## Authentication

To connect to DIVOC, you need to provide authentication credentials:

```json
{
  "baseUrl": "https://your-divoc-instance.example.com",
  "access_token": "your_bearer_token_here",
  "username": "your_username",
  "password": "your_password"
}
```

**Required Fields:**
- `baseUrl`: The base URL of your DIVOC instance
- `username`: Your DIVOC username (required)
- `password`: Your DIVOC password (required)

**Optional Fields:**
- `access_token`: Bearer token for API authentication (can be used instead of username/password)


## Helpful Links

- [OpenFn DIVOC Adaptor](https://docs.openfn.org/adaptors/packages/divoc-readme)
