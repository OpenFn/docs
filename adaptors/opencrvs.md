---
title: OpenCRVS Adaptor
---

## About OpenCRVS

[OpenCRVS (Open Civil Registration and Vital Statistics)](https://www.opencrvs.org/)
is an open-source solution designed to collect various population data. The
system is used for recording the details of all major life events, such as
births and deaths. It provides the foundation for human rights, government
service delivery, and the measurement of development goals.

## Integration Options

OpenCRVS supports 2 primary integration options with OpenFn:

1. **Rest API:** OpenCRVS has a REST API that enables external services like
   OpenFn to pull data from OpenCRVS, or push data from external apps to
   OpenCRVS. This option is suited for scheduled, bulk syncs or workflows that
   must update data in OpenCRVS with external information. See
   [functions](/adaptors/packages/opencrvs-docs) for more on how to use this
   adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from OpenCRVS to
   external systems (see
   [docs](https://documentation.opencrvs.org/technology/interoperability/webhook-clients)).
   This option is suited for real-time, event-based data integration.

## Authentication

See [OpenCRVS docs](https://documentation.opencrvs.org/) for the latest on
supported authentication methods. When integrating with OpenCRVS via OpenFn,
there are 2 primary authentication methods supported.

Please note that OpenCRVS take is different `clientId` and `clientSecret` for
each clients; i.e events notifications and search. Ensure to switch credentials
for the different client requests. See
[OpenCRVS authenticate client docs](https://documentation.opencrvs.org/technology/interoperability/authenticate-a-client)

1. Basic Authentication. See this adaptor's
   [Configuration docs](/adaptors/packages/opencrvs-configuration-schema) for
   more on the required authentication parameters.
2. Access token (requires access token created after authenticating in OpenCRVS)

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or if using a Raw
JSON credential type, then your configuration will look something like this:

```json
{
  "domain": "your-doman", //e.g openfn.opencrvs.dev
  "clientId": "your-client-id", // e.g 12345678
  "clientSecret": "your-client-secret-key", // e.g abcd123456
  "access_token": "your-access-token" // Don't add accessToken if you're using client secret and client id
}
```

### Helpful Links

1. [OpenCRVS Documentation](https://documentation.opencrvs.org/)
2. [OpenCRVS API Reference](https://documentation.opencrvs.org/technology/interoperability)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
