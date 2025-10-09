---
title: WhatsApp Adaptor
---

## About WhatsApp

The [WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp) enables organizations to communicate with their customers on WhatsApp at scale. It supports sending messages, notifications, and media, as well as receiving inbound customer messages through a secure and reliable API.

This adaptor allows OpenFn users to integrate workflows with WhatsApp Business Cloud or On-Premise APIs to send and receive WhatsApp messages as part of automated processes.

## Integration Options

The WhatsApp Business API provides a [REST API](https://developers.facebook.com/docs/whatsapp) to manage message sending, conversations, and contacts. See [functions](/adaptors/packages/whatsapp-docs) for examples of how to use this adaptor to call the API.

In addition, WhatsApp Business supports [Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples) that deliver inbound messages and delivery status updates in real time. These can be consumed by OpenFn workflows via a [webhook event trigger](/documentation/build/triggers#webhook-event-triggers) when customers send messages.

## Authentication
Access to the WhatsApp Business API requires a `Permanent Access Token` (for Cloud API) or a generated `Bearer Token` (for On-Premise deployments). This token must be included as an Authorization Bearer Token in all requests.

For Cloud API, you must also specify your `phone_number_id` and `whatsapp_business_account_id`.
[See Meta WhatsApp Business docs](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started) for detailed guidance.

OpenFn users can use the `whatsapp` credential type when [creating a credential](/documentation/manage-projects/manage-credentials) on the app. 

If working locally or if using a `Raw JSON` credential type in OpenFn, your configuration will look something like this ([see configuration docs](/adaptors/packages/whatsapp-configuration-schema)):

```json
{
  "baseUrl": "https://graph.facebook.com/v21.0",
  "apiToken": "EAAJZC...your_long_lived_access_token",
  "phoneNumberId": "123456789012345",
  "wabaId": "987654321098765"
}

```

## Helpful Links

- WhatsApp Business API documentation: https://developers.facebook.com/docs/whatsapp
- Cloud API Get Started guide: https://developers.facebook.com/docs/whatsapp/cloud-api/get-started
- Webhook payload examples: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
