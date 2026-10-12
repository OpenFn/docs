---
title: OpenELIS Adaptor
---

## About OpenELIS

OpenELIS (Open Enterprise Laboratory Information System) Global is an
open-source, web-based software designed to manage laboratory workflows,
specifically tailored for public health and reference laboratories in low- and
middle-income countries. It automates laboratory processes—from sample tracking
to reporting—supporting ISO and SLIPTA quality standards.

## Integration Options

OpenELIS has an available REST API. See
[functions](/adaptors/packages/openelis-docs) for more on how to use this
adaptor to work with the API. Visit the
[OpenELIS homepage](https://openelis.org/) for more details.

## Authentication

Users must specify a `baseUrl`, `username` and `password`. The `username` and
`password` are then encoded into a basic authentication header and sent as part
of every HTTP request.

OpenFn users can use the `OpenELIS` credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

See the adaptor's
[configuration schema docs](/adaptors/packages/openelis-configuration-schema)

If working locally or if using a `Raw JSON` credential type, then your
configuration will look something like this:

```json
{
  "baseUrl": "https://example.openelis.com",
  "username": "admin",
  "password": "password"
}
```

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
