---
title: OpenIMIS Adaptor
---

## About OpenIMIS

[OpenIMIS (Open Insurance Management Information System)](https://openimis.org/) is an open-source software solution designed to manage health financing schemes such as health insurance, results-based financing, and universal health coverage. 

## Integration Options

OpenIMIS supports 2 primary integration options with OpenFn:

1. **Rest API:** OpenIMIS has a REST API that enables external services like OpenFn to pull data from OpenIMIS, or push data from external apps to OpenIMIS. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenIMIS with external information. See [functions](/adaptors/packages/openimis-docs) for more on how to use this adaptor to work with the API.

2. **Webhook:** OpenIMIS does not natively support webhooks as a standard feature. However, integrations and custom implementations can enable webhook-like behavior. More details can be found on the OpenMRS [documentation page​](https://wiki.openmrs.org/).

## Authentication

1. See [OpenIMIS docs](https://docs.openimis.org/en/latest/user_manual/user_login/login.html) for the latest on supported authentication methods.
2. When integrating with OpenIMIS via OpenFn, there is one primary authentication method that is supported: **Basic Authentication**. See this adaptor's [Configuration docs](/adaptors/packages/openimis-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "baseUrl": "https://demo.openimis.org",
  "username": "test@openfn.org",
  "password": "@some(!)Str0ngp4ss0w0rd"
}
```

### Helpful Links

1. [OpenIMIS Documentation](https://openimis.org/documentation)
2. [API Reference (REST & GraphQL)](https://openimis.org/api)
3. [Integration Guide](https://openimis.org/integration)


### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
