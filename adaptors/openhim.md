---
title: OpenHIM Adaptor
---

## About OpenHIM

[OpenHIM (Open Health Information Mediator)](https://openhim.org/) is an open-source, middleware solution designed to facilitate interoperability between health information systems. It acts as a mediator, handling data transformation, validation, and routing between various systems. 

## Integration Options

OpenHIM supports 2 primary integration options with OpenFn:

1. **Rest API:** OpenHIM has a REST API that enables external services like OpenFn to pull data from OpenHIM, or push data from external apps to OpenHIM. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenHIM with external information. See [functions](/adaptors/packages/openhim-docs) for more on how to use this adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from OpenHIM to external systems (see [docs](https://openhim.org/docs/user-guide/alerting-reports/)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [OpenHIM docs](https://openhim.org/documentation) for the latest on supported authentication methods.
2. When integrating with OpenHIM via OpenFn, there is one primary authentication method that is supported: **Basic Authentication**. See this adaptor's [Configuration docs](/adaptors/packages/openhim-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "apiUrl": "http://openhim.com/api"
}
```

### Helpful Links

1. [OpenHIM Documentation](https://openhim.org/documentation)
2. [OpenHIM API Reference](https://openhim.org/api)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
