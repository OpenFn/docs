---
title: Mailgun Adaptor
---

## About Mailgun

[Mailgun](https://www.mailgun.com/) is an email delivery service designed for developers and provides APIs for sending, receiving, and tracking emails.

## Integration Options

Mailgun supports 2 primary integration options with OpenFn:

1. **Rest API:** Mailgun has a REST API that enables external services like OpenFn to pull data from Mailgun, or push data from external apps to Mailgun. This option is suited for scheduled, bulk syncs or workflows that must update data in Mailgun with external information. See [functions](/adaptors/packages/mailgun-docs) for more on how to use this adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from Mailgun to external systems (see [docs](https://documentation.mailgun.com/docs/mailgun/user-manual/tracking-messages/#webhooks)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [Mailgun docs](https://developers.google.com/gmail/api/auth/scopes) for the latest on supported authentication methods.
2. When integrating with Mailgun via OpenFn, there is one primary authentication method that is supported: **API Key**. See this adaptor's [Configuration docs](/adaptors/packages/mailgun-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "domain": "sandbox-123.mailgun.org",
  "apiKey": "otherThiNGfSECret"
}
```

### Helpful Links

1. [Mailgun API Documentation](https://documentation.mailgun.com/)
2. [Event Webhooks](https://documentation.mailgun.com/en/latest/api-events.html#event-webhooks)
3. [Support and Community](https://help.mailgun.com/)

### Implementation Examples

1. [Women for Women International - Committed Giving <> Salesforce Integration](https://github.com/OpenFn/women-for-women?tab=readme-ov-file#email-alerts)



