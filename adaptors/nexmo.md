---
title: Nexmo Adaptor
---

## About Nexmo

[Nexmo](https://www.vonage.com/) (now part of Vonage) is a leading cloud communications platform that provides APIs for SMS, voice, video, and messaging services. Vonage's Communication APIs enable developers to embed real-time communications capabilities into applications, websites, and business workflows with global reach and enterprise-grade reliability.

Nexmo/Vonage is particularly valuable for businesses needing reliable global communications, customer engagement platforms, authentication systems, and omnichannel messaging solutions.

## Integration Options

**REST API**: Nexmo provides comprehensive REST APIs for all communication services, enabling developers to send SMS messages, make voice calls, verify phone numbers, and access detailed analytics. The APIs support multiple authentication methods and provide real-time delivery status and detailed reporting.

## Authentication

Nexmo uses API key and secret-based authentication for accessing communication services:

```json
{
  "apiKey": "mYaP1K3y",
  "apiSecret": "supersecret"
}
```

**Authentication Components:**
- **apiKey**: Your Nexmo API key for identifying your account
- **apiSecret**: Your Nexmo API secret for authenticating requests

API credentials can be obtained from the Vonage Dashboard and provide access to all Nexmo communication services.

## Helpful Links

- [Vonage Developer Center](https://developer.vonage.com/)
- [SMS API Documentation](https://developer.vonage.com/messaging/sms/overview)
- [OpenFn Nexmo Adaptor Configuration](https://docs.openfn.org/adaptors/packages/nexmo-configuration-schema)
- [OpenFn Nexmo Adaptor Docs](https://docs.openfn.org/adaptors/packages/nexmo-docs)
