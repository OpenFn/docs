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

## Examples

### List customers

This job lists customers and saves them to `state.customers`.

```js
// List customers in Stripe

list('customers').then(state => {
  state.customers = state.data.data;
  return state;
});
```

### Get subscriptions

This job takes a list of subscription IDs from the input and fetches each
subscription.

```js
// Get subscription data
fn(state => {
  state.subscriptions = state.data;
  state.subscriptionsData = [];
  return state;
});

each(
  '$.subscriptions',
  get('subscriptions', $.data).then(state => {
    state.subscriptionsData.push(state.data.data);
    return state;
  })
);
```

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

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
