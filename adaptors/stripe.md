---
title: Stripe Adaptor
---

## About Stripe

[Stripe](https://stripe.com/) is a solution designed to automate payment
processing and financial operations.

## Integration Options

Stripe has a REST API that enables external services like OpenFn to pull data
from Stripe, or push data from external apps to Stripe. This option is suited
for scheduled, bulk syncs or workflows that must update data in Stripe with
external information. See [functions](/adaptors/packages/stripe-docs) for more
on how to use this adaptor to work with the API.

## Authentication

See [Stripe docs](https://docs.stripe.com/api/authentication) for the latest on
supported authentication methods. When integrating Stripe via OpenFn, Stripe API
Key is required.
[See our configuration docs](/adaptors/packages/stripe-configuration-schema) to
learn more.

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or if using a Raw
JSON credential type, then your configuration will look something like this:

```json
{
  "apiKey": "sk_test_53ixb7na9ydu4tqfufg477365gbvrnv348r475gf4bf485845gbrf
"
}
```

### Helpful Links

1. [Stripe Documentation](https://docs.stripe.com/get-started)
