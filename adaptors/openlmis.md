---
title: OpenLMIS Adaptor
---

## About OpenLMIS

[OpenLMIS (Open Logistics Management Information System)](https://openlmis.org/) is an open-source, electronic logistics management information system designed to improve the management and distribution of health commodities. It enables supply chain management, providing visibility and accuracy in inventory tracking, order management, and reporting.


## Integration Options

OpenLMIS supports 2 primary integration options with OpenFn:

1. **Rest API:** OpenLMIS has a REST API that enables external services like OpenFn to pull data from OpenLMIS, or push data from external apps to OpenLMIS. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenLMIS with external information. See [functions](/adaptors/packages/openlmis-docs) for more on how to use this adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from OpenLMIS to external systems (see [docs](https://openlmis.org/documentation/)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [OpeLMIS docs](https://openlmis.github.io/openlmis-api/) for the latest on supported authentication methods.
2. When integrating with OpenLMIS via OpenFn, there is one primary authentication method that is supported: **Basic Authentication**. See this adaptor's [Configuration docs](/adaptors/packages/openlmis-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "password": "@some(!)Str0ngp4ss0w0rd",
  "username": "administrator",
  "baseUrl": "https://test.openlmis.org"
}
```

### Helpful Links

1. [OpenLMIS Documentation](https://openlmis.org/documentation/) 
2. [OpenLMIS API Guide](https://openlmis.github.io/openlmis-api/)
3. [Integration Guide](https://openlmis.org/integration/)

### Implementation Examples

_Coming soon!_


