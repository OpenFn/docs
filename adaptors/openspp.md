---
title: OpenSSP Adaptor
---

## About OpenSPP

[OpenSPP (Open Source Social Protection Platform)](https://openspp.org/) is an
integrated and digital social protection information system that enables
governments and humanitarian agencies to streamline the creation and management
of assistance programs.

## Integration Options

OpenSPP supports 2 primary integration options with OpenFn:

1. **Rest API:** OpenSPP has a REST API that enables external services like
   OpenFn to pull data from OpenSPP, or push data from external apps to OpenSPP.
   This option is suited for scheduled, bulk syncs or workflows that must update
   data in OpenSPP with external information. See
   [functions](/adaptors/packages/openspp-docs) for more on how to use this
   adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from OpenSPP to external
   systems (see [docs](https://openspp.org/api)). This option is suited for
   real-time, event-based data integration.

## Authentication

1. See [OpenSPP docs](https://openspp.org/security) for the latest on supported
   authentication methods.
2. When integrating with OpenSPP via OpenFn, there is one primary authentication
   method that is supported: **Basic Authentication**. See this adaptor's
   [Configuration docs](/adaptors/packages/openspp-configuration-schema) for
   more on the required authentication parameters.

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or if using a Raw
JSON credential type, then your configuration will look something like this:

```
{
  "password": "@some(!)Str0ngp4ss0w0rd",
  "username": "test@openfn.org",
  "database": "devel",
  "baseUrl": "https://dev.newlogic-demo.com"
}
```

### Helpful Links

1. [OpenSPP Documentation](https://openspp.org/documentation)
2. [API Reference](https://openspp.org/api)
3. [Integration Guide](https://openspp.org/integration)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
