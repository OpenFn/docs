---
title: Msupply Adaptor
---

## About Msupply

Msupply is an open source software that is used to automate pharmaceutical supply chain systems. 

## Integration Options

GraphQL API: Msupply has a GraphQL API that enables external services like OpenFn to pull data from Msupply, or push data from external apps to Msupply. Refer to the Msupply GRraphQL API [documentation](https://docs.msupply.foundation/docs/developer/graphql/) for detailed guidelines on endpoints and payload formats.

## Authentication
See [Msupply docs](https://docs.msupply.foundation/docs/developer/graphql/) for the latest on supported authentication methods.
[See our configuration docs](/adaptors/packages/msupply-configuration-schema) to learn more.


See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json

{
  "password": "@some(!)Str0ngp4ss0w0rd",
  "username": "test@openfn.org",
  "baseUrl": "https://example.com"
}

```

### Helpful Links

1. [Msupply Documentation](https://docs.msupply.foundation/docs/introduction/introduction/)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
