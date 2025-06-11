---
title: Dynamics Adaptor
---

## About Microsoft Dynamics

[Microsoft Dynamics](https://www.microsoft.com/en-us/dynamics-365) is a suite of enterprise resource planning (ERP) and customer relationship management (CRM) applications. It helps organizations manage sales, customer service, marketing, operations, and more.

## Integration Options

**1. Rest API:** Dynamics offers a REST API that enables external applications to interact with its database and perform bulk operations. This option is ideal for applications requiring scheduled or bulk synchronization with Dynamics. Refer to the Dynamics REST API [documentation](https://learn.microsoft.com/en-us/powerapps/developer/data-platform/webapi/overview) for detailed guidelines on endpoints and payload formats.

**2. Webhook:** Webhook or Data Forwarding to push data from Dynamics to external systems (see [docs](https://learn.microsoft.com/en-us/dynamics365/customer-engagement/developer/webhooks)). This option is suited for real-time, event-based data integration.

## Authentication

See [Microsoft docs](https://learn.microsoft.com/en-us/azure/active-directory/) for the latest on supported authentication methods. When integrating with Dynamics via OpenFn, **Access Token** is supported. See this adaptor's [Configuration docs](/adaptors/packages/dynamics-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "resource": "https://openfn.crm2.dynamics.com",
  "apiVersion": "8.2.0",
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"
}
```

### Helpful Links

1. [Microsoft Dynamics Documentation](https://learn.microsoft.com/en-us/dynamics365/)
2. [Dynamics REST API Guide](https://learn.microsoft.com/en-us/powerapps/developer/data-platform/webapi/overview)
3. [Webhooks Setup](https://learn.microsoft.com/en-us/dynamics365/customer-engagement/developer/webhooks)

### Implementation Examples

_Comming soon!_




