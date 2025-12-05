---
title: Odoo Adaptor
---

## About Odoo

[Odoo](https://odoo.com/) is a marketing automation platform that allows businesses to design, send, and manage email campaigns. It also provides tools for audience management, analytics, and integrations with other platforms to support marketing efforts.

## Integration Options

Odoo supports two primary integration options with OpenFn:

**1. Direct DB Connection:** This is what _this_ adaptor supports to directly connect to your Odoo database. 

**2. Rest API:** Odoo offers a REST API that enables external applications to interact with its services, but this is a *paid option/may require an additional plugin*. This option is ideal for applications requiring scheduled or bulk synchronization with Odoo. Refer to the Odoo REST API [documentation](https://www.odoo.com/documentation/16.0/developer/api/external_api.html) for detailed guidelines on endpoints and payload formats.

**3. Webhook:** Webhook or Data Forwarding to push data from Odoo to external systems ([see docs](https://www.odoo.com/documentation/16.0/developer/reference/webhooks.html)). This option is suited for real-time, event-based data integration.

## Authentication
1. See [Odoo docs](https://www.odoo.com/documentation/16.0/developer/misc/api/odoo.html) for the latest on supported authentication methods.
2. When integrating with Odoo via OpenFn, authentication via **User Credentials** is supported.
3. See this adaptor's [Configuration docs](/adaptors/packages/odoo-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "password": "@some(!)Str0ngp4ss0w0rd",
  "username": "test@openfn.org",
  "database": "devel",
  "baseUrl": "https://dev.newlogic-demo.com"
}
```

### Helpful Links
1. [Odoo Developer Portal](https://www.odoo.com/documentation)
2. [API Reference](https://www.odoo.com/documentation/16.0/developer/api/external_api.html)
3. [Webhook Setup Guide](https://www.odoo.com/documentation/16.0/developer/reference/webhooks.html)
   
### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
