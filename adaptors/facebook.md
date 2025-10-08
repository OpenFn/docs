---
title: Facebook Adaptor
---

## About Facebook

[Facebook](https://www.facebook.com/) is the world's largest social networking platform, connecting billions of people globally. Facebook provides various APIs and integration capabilities, particularly through Facebook Messenger, enabling businesses to create automated messaging experiences, customer service bots, and interactive communication workflows.

The Facebook Messenger platform is particularly valuable for businesses seeking to provide customer support, marketing automation, and interactive customer engagement through one of the world's most popular messaging platforms.

## Integration Options

**Messenger API**: Facebook provides the Messenger Platform API that enables businesses to send messages, create interactive experiences, and build chatbots. The API supports rich messaging features including text, images, quick replies, and structured templates for creating engaging user interactions through Facebook Messenger.

## Authentication

Facebook uses OAuth 2.0 access tokens for Messenger API authentication:

```json
{
  "access_token": "EAAGm0PX4ZCpsBAEHuZBwZBZCDEZDZD7ZC8ZBZBt7MbZA7sVZA"
}
```

**Authentication Components:**
- **access_token**: Facebook API access token obtained through Facebook App configuration

Access tokens are generated through Facebook for Developers and provide access to send messages through Facebook Pages and Messenger conversations based on the app permissions and page access granted.


## Helpful Links

- [Facebook for Developers](https://developers.facebook.com/)
- [Messenger Platform Documentation](https://developers.facebook.com/docs/messenger-platform)
- [Facebook Business](https://business.facebook.com/)
- [Messenger Platform API Reference](https://developers.facebook.com/docs/messenger-platform/reference)
- [Facebook App Dashboard](https://developers.facebook.com/apps/)
- [Messenger Platform Getting Started](https://developers.facebook.com/docs/messenger-platform/getting-started)
- [OpenFn Facebook Adaptor Configuration](https://docs.openfn.org/adaptors/packages/facebook-configuration-schema)
- [OpenFn Facebook Adaptor Docs](https://docs.openfn.org/adaptors/packages/facebook-docs)
