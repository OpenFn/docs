---
title: Asana Adaptor
---

## About Asana

[Asana](https://app.asana.com/) is a web-based project management tool that helps teams organize, plan, collaborate, and execute tasks. 

## Integration Options

Asana supports 2 primary integration options:

1. Rest API: Asana has an available REST API that enable external services like OpenFn to pull data from Asana, or push data from external apps to Asana. This option is suited for scheduled, bulk syncs or workflows that must update data in Asana with external information. See [functions](/adaptors/packages/asana-docs) for more on how to use this adaptor to work with the API.

2. Webhook: Asana also has a [Webhook or Data Forwarding](https://developers.asana.com/docs/webhooks-guide) to push data from Asana to external systems. This option is suited for real-time, event-based data integration. Check out the Asana [devloper documentation](/adaptors/packages/asana-docs) to learn how to set up a webhook to push data to OpenFn.

## Authentication

See [Asana docs](https://developers.asana.com/docs/authentication) for the latest on supported authentication methods. 

When integrating with Asana via OpenFn, there is one primary authentication method supported: **Personal Access Token (PAT)**. You can generate a personal access token from the Asana [developer console](https://developers.asana.com/docs/personal-access-token).

See this adaptor's [Configuration docs](/adaptors/packages/asana-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "apiVersion": "1.0",
  "token": "sample-tokenyWSJdXBACMLLWMNGgADFA"
}
```

### Helpful Links

1. [API documentation](https://developers.asana.com/docs/overview)

### Implementation Examples

1. The Wildlife Conservation Society (WCS) - KoboToolBox -> GoogleSheets -> Asana sync: [https://openfn.github.io/ConSoSci/asana/](https://openfn.github.io/ConSoSci/asana/)




