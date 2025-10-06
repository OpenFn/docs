---
title: Mpesa Adaptor
---

## About Mpesa

[Mpesa](https://developer.safaricom.co.ke/Documentation) is a mobile money transfer service in Kenya that allows users to store and transfer money through their mobile phones.

## Integration Options

**Rest API:** Mpesa offers a REST API that enables external applications to interact with its services. This option is ideal for applications requiring scheduled or bulk synchronization with Mpesa. Refer to the Mpesa REST API [documentation](https://developer.safaricom.co.ke/Documentation) for detailed guidelines on endpoints and payload formats.

## Authentication
See [Mpesa docs](https://developer.safaricom.co.ke/Documentation) for the latest on supported authentication methods.
[See our configuration docs](/adaptors/packages/mpesa-configuration-schema) to learn more.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json

{
  "short_code": "654321",
  "pass_key": "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
  "consumer_key": "GA2PNftcXvv2uC2VdgNjxXyvF8eZ4td6iBsL7N7N2ZFnXzf3",
  "consumer_secret": "zKjr2j0jjihCtzIwzGtgnV0YgP82jZf1hY9RW6HygntWG6AGuf4tAUe3E5tPtiyA"
}

```

### Helpful Links

1. [Mpesa Documentation](https://developer.safaricom.co.ke/)