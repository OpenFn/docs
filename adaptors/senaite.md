---
title: Senaite Adaptor
---

## About Senaite

[Senaite](https://www.senaite.com/) is an Enterprise Open Source Laboratory Information Management System (LIMS) designed for laboratory environments. Built on the Plone CMS, Senaite provides comprehensive sample management, workflow automation, quality control, and reporting capabilities for analytical laboratories.

Senaite is particularly suited for analytical laboratories requiring ISO/IEC 17025 compliance and serves industries including environmental testing, food safety, pharmaceuticals, and clinical diagnostics.

## Authentication

The Senaite adaptor uses HTTP basic authentication with the following configuration:

```json
{
  "username": "your_senaite_username",
  "password": "your_senaite_password", 
  "baseUrl": "https://your-senaite-instance.com"
}
```

## Integration Options

### HTTP Requests

Make authenticated HTTP requests to Senaite's REST API:

```js
request("GET", "catalogs", {
  query: { portal_type: "Sample" },
  headers: { "Accept": "application/json" }
});
```


## Helpful Links

- [Senaite Documentation](https://www.senaite.com/docs/quickstart)
- [OpenFn Senaite Adaptor Configuration](https://docs.openfn.org/adaptors/packages/senaite-configuration-schema)
- [OpenFn Senaite Adaptor Docs](https://docs.openfn.org/adaptors/packages/senaite-docs)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
