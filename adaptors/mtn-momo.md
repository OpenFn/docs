---
title: MTN-Momo Adaptor
---

## About Mtn-Momo

[Mtn-Momo](https://momodeveloper.mtn.com/api-documentation/api-description) is a mobile money transfer service in Kenya that allows users to store and transfer money through their mobile phones.

## Integration Options

**Rest API:** Mtn-Momo offers a REST API that enables external applications to interact with its services. Refer to the Mtn-Momo REST API [documentation](https://momodeveloper.mtn.com/api-documentation/getting-started) for detailed guidelines on endpoints and payload formats.

## Authentication

See [Mtn-Momo docs](https://momodeveloper.mtn.com/api-documentation/api-description) for the latest on supported authentication methods.
[See our configuration docs](/adaptors/packages/mtn-momo-configuration-schema) to learn more.

Mtn-Momo supports two primary authentication methods:

1. **Subscription Key** is passed to all request headers for all the requests.

2. **API User and API Key**

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json

{
  "api_key": "630ee209443d787927b08b3c57902",
  "api_user": "630ee209443d787927b08b3c57902",
  "subscription_key": "630ee209443d787927b08b3c57902",
  "baseUrl": "https://sandbox.momodeveloper.mtn.com/"
}

```

### Helpful Links

1. [Mtn-Momo Documentation](https://momodeveloper.mtn.com/api-documentation)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
