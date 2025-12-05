---
title: Mojatax Adaptor
---

## About Mojatax

[Mojatax](https://mojatax.com/) is a mobile application designed to help
businesses and individuals in Tanzania issue TRA (Tanzania Revenue Authority)
fiscal receipts directly from their mobile devices. It simplifies the process of
tax receipt issuance.

## Integration Options

Mojatax 1.0 has an available
[REST API](https://documenter.getpostman.com/view/5385860/2s93RMVao6#intro). See
[functions](/adaptors/packages/mojatax-docs) for more on how to use this adaptor
to work with the API.

As of October '24, there is no documented support for a webhook or a data
forwarding feature.

## Authentication

Users must specify a Mojatax Business `client_id` and `password` to generate an
`access_token`, which can be sent as a **Bearer Token** to access other API
endpoints.
[See Mojatax docs](https://documenter.getpostman.com/view/5385860/2s93RMVao6#e4d5c554-0224-4705-9094-b565c82b1f26)
for detailed guidance.

OpenFn users can use the `Mojatax` credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

See this adaptor's
[Configuration docs](/adaptors/packages/mojatax-configuration-schema) for
technical docs on the authentication parameters required. If working locally or
if using a `Raw JSON` credential type, then your configuration will look
something like this:

```json
{
  "baseUrl": "https://vfd-staging.mojatax.com",
  "password": "@some(!)Str0ngp4ss0w0rd",
  "clientId": "the-long-uuid-provided-by-mojatax"
}
```

## Helpful Links

- Mojatax API documentation on Postman:
  https://documenter.getpostman.com/view/5385860/2s93RMVao6#intro
  

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
