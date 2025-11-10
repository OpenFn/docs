---
title: Gmail Adaptor
---

## About Gmail

Gmail is a free email service developed by Google that supports email communication, collaboration, file sharing and integration with other Google services.

## Integration Options

Gmail supports 2 primary integration options with OpenFn:

1. Rest API: Gmail has a REST API that enables external services like OpenFn to pull data from Gmail, or push data from external apps to Gmail. This option is suited for scheduled, bulk syncs or workflows that must update data in Gmail with external information. See [functions](/adaptors/packages/gmail-docs) for more on how to use this adaptor to work with the API.

2. Webhook: While Gmail does not natively support webhooks, you can implement webhook-like functionality to push data from Gmail to external systems. This option is suited for real-time, event-based data integration. Check out the Gmail [developer documentation](https://developers.google.com/gmail/api/guides/push) to learn how to set up push notifications on Gmail.

## Authentication

1. See [Gmail docs](https://developers.google.com/gmail/api/auth/scopes) for the latest on supported authentication methods.
2. When integrating with Gmail via OpenFn, there is one primary authentication method that is supported: **Access Token**. You can generate an access token from Gmail using these [instructions](https://developers.google.com/identity/protocols/oauth2).
3. See this adaptor's [Configuration docs](/adaptors/packages/gmail-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmhax0rZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"
}
```

### Helpful Links

1. [API documentation](https://developers.google.com/gmail/api/guides)
2. [Community Support](https://support.google.com/mail/)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
