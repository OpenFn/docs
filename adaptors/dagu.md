---
title: Dagu Adaptor
---

## About Dagu
Dagu is an open source tool for managing supply chain functions at health facilities, incorporating inventory
and patient service management systems used in Ethiopia. It includes an inventory management system at the facility store level and a patient service management system at the dispensing unit level. It is designed to manage daily transactions incorporating the business process and operations at each health facility.

## Integration Options
See [Dagu adaptor functions](/adaptors/packages/dagu-docs) for more on how to use this adaptor to work with the API.

## Authentication
Users must specify a  `baseUrl`, `username` and `password` to generate an `access_token`, which is then sent as `Bearer token` as part of the headers in every HTTP request.

OpenFn users can use the `Dagu` credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

See the adaptor's [configuration schema docs](/adaptors/packages/dagu-configuration-schema)

If working locally or
if using a `Raw JSON` credential type, then your configuration will look
something like this:

```json
{
  "baseUrl": "https://example.dagu.com",
  "username": "admin",
  "password": "password"
}
```

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).


