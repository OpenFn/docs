---
title: OpenELIS Adaptor
---

## About OpenELIS
OpenELIS stands for Open-source Laboratory Information System. It is an open-source laboratory information system (LIS) used widely in public health settings.

## Integration Options
OpenELIS has an available REST API. See [functions](/adaptors/packages/openelis-docs) for more on how to use this adaptor to work with the API.

## Authentication
Users must specify a `baseUrl`, `username` and `password`. The `username` and `password` are then encoded into a basic authentication header and sent as part of every HTTP request.

OpenFn users can use the `OpenELIS` credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

See the adaptor's [configuration schema docs](/adaptors/packages/openelis-configuration-schema)

If working locally or
if using a `Raw JSON` credential type, then your configuration will look
something like this:

```json
{
  "baseUrl": "https://example.openelis.com",
  "username": "admin",
  "password": "password"
}
```

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).


