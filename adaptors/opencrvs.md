---
title: OpenCRVS Adaptor
---

## About OpenCRVS

[OpenCRVS (Open Civil Registration and Vital Statistics)](https://www.opencrvs.org/) is an open-source solution designed to collect various population data. The system is used for recording the details of all major life events, such as births and deaths. It provides the foundation for human rights, government service delivery, and the measurement of development goals. 

## Integration Options

OpenCRVS supports 2 primary integration options with OpenFn:

1. **Rest API:** OpenCRVS has a REST API that enables external services like OpenFn to pull data from OpenCRVS, or push data from external apps to OpenCRVS. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenCRVS with external information. See [functions](/adaptors/packages/opencrvs-docs) for more on how to use this adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from OpenCRVS to external systems (see [docs](https://documentation.opencrvs.org/technology/interoperability/webhook-clients)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [OpenCRVS docs](https://documentation.opencrvs.org/) for the latest on supported authentication methods.
2. When integrating with OpenCRVS via OpenFn, there is one primary authentication method that is supported: **Basic Authentication**. See this adaptor's [Configuration docs](/adaptors/packages/opencrvs-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
   "domain": "openfn.opencrvs.dev",
}
```

### Helpful Links

1. [OpenCRVS Documentation](https://documentation.opencrvs.org/)
2. [OpenCRVS API Reference](https://documentation.opencrvs.org/technology/interoperability)

### Implementation Examples

_Coming soon!_




