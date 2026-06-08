---
title: ET-MFR Adaptor
---

## About ET-MFR
The Ethiopia Master Facility Registry (MFR) is an open source tool developed and led by the Federal Ministry of Health (FMoH) to support the standardization of health facility information across the country. As a centralized and authoritative source, the MFR provides a comprehensive, up-to-date database of all public and private health facilities operating within Ethiopia’s health system.

## Integration Options
ET-MFR has an available [REST API](https://mfr.moh.gov.et/swagger/index.html). See [functions](/adaptors/packages/et-mfr-docs) for more on how to use this adaptor to work with the API.

## Authentication
Users may specify a `baseUrl`, `username` and `password`. The `username` and `password` are then encoded into a basic authentication header and sent as part of every HTTP request.

OpenFn users can use the `iHRIS` credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

See the adaptor's [configuration schema docs](/adaptors/packages/et-mfr-configuration-schema)

If working locally or
if using a `Raw JSON` credential type, then your configuration will look
something like this:

```json
{
  "baseUrl": "https://example.et-mfr.com",
  "username": "admin",
  "password": "password"
}
```

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).


