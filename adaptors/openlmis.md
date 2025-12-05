---
title: OpenLMIS Adaptor
---

## About OpenLMIS

[OpenLMIS (Open Logistics Management Information System)](https://openlmis.org/) is an open-source, electronic logistics management information system designed to improve the management and distribution of health commodities. It enables supply chain management, providing visibility and accuracy in inventory tracking, order management, and reporting.


## Integration Options
OpenLMIS v3 uses a micro-services architecture with different services each providing different APIs - [see docs](https://docs.openlmis.org/en/latest/components/).

**Rest API:** OpenLMIS has a REST API that enables external services like OpenFn to pull data from OpenLMIS, or push data from external apps to OpenLMIS. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenLMIS with external information. See [functions](/adaptors/packages/openlmis-docs) for more on how to use this adaptor to work with the API.

## Authentication

1. See [OpenLMIS docs](https://openlmis.github.io/openlmis-api/) for the latest on supported authentication methods.
2. The [Auth Service](https://docs.openlmis.org/en/latest/components/authServiceDesign.html0) in OpenLMIS v3 is a stand-alone micro-service that implements **OAuth 2**. See this adaptor's [Configuration docs](/adaptors/packages/openlmis-configuration-schema) for more on the required authentication parameters.

When configuring your credential, `clientId` and `clientSecret` are required inputs for the authentication. If working with a demo environment, OpenLMIS provides default values for these inputs, which should be changed for any production system. In the below example, we have included these default values available.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "password": "@some(!)Str0ngp4ss0w0rd",
  "username": "administrator",
  "baseUrl": "https://test.openlmis.org",
  "clientId": "user-client", // Default value for demo systems
  "clientSecret": "changeme" // Default value for demo systems
}
```

### Helpful Links

1. [OpenLMIS Documentation](https://openlmis.org/documentation/) 
2. [OpenLMIS API Guide](https://openlmis.github.io/openlmis-api/)
3. [Integration Guide](https://openlmis.org/integration/)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
