---
title: MailChimp Adaptor
---

## About Mailchimp

[Mailchimp](https://mailchimp.com/) is a marketing automation platform that allows businesses to design, send, and manage email campaigns. It also provides tools for audience management, analytics, and integrations with other platforms to support marketing efforts.

## Integration Options

Mailchimp supports two primary integration options:

**1. Rest API:** Mailchimp offers a REST API that enables external applications to interact with its services. This option is ideal for applications requiring scheduled or bulk synchronization with OpenMRS. Refer to the Mailchimp REST API [documentation](https://mailchimp.com/developer/marketing/api/) for detailed guidelines on endpoints and payload formats.

**2. Webhook:** Webhook or Data Forwarding to push data from MailChimp to external systems. This option is suited for real-time, event-based data integration.

## Authentication

When integrating with Mailchimp via OpenFn, authentication via **API Key** is supported. See this adaptor's [Configuration docs](/adaptors/packages/mailchimp-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "server": "us11",
  "apiKey": "0eb22c7b4a1c5bcd789379bf8a92902d-us13"
}
```

### Helpful Links
1. [Developer Portal](https://mailchimp.com/developer/)
2. [API Reference](https://mailchimp.com/developer/marketing/)
3. [Webhook Setup Guide](https://mailchimp.com/developer/marketing/guides/set-up-webhooks/)

### Implementation Examples

1. GIFE Project - Mailchimp -> Salesforce sync: [https://github.com/OpenFn/gife](https://github.com/OpenFn/gife)




