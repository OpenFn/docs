---
title: FormSG Adaptor
---

## About FormSG

[FormSG](https://form.gov.sg/) is an open-source form builder developed by the Singapore Government's Open Government Products team to digitize paper processes for government agencies. It enables secure collection of up to Confidential (Cloud-Eligible) and Sensitive (High) data with end-to-end encryption.

## Integration Options

FormSG supports webhook integration with OpenFn:

**Webhooks**: FormSG provides webhook functionality that enables real-time form submission data to be sent to external applications like OpenFn. Using the official FormSG JavaScript SDK, you can securely decrypt and process form submissions as they are received. This integration is suited for automated workflow triggers, real-time data processing, and applications that need immediate response to form submissions. The webhook system includes signature verification to ensure data authenticity and security. See [functions](/adaptors/packages/formsg-docs) for more on how to use this adaptor to work with FormSG webhooks.

## Authentication

1. See [FormSG SDK documentation](https://github.com/opengovsg/formsg-sdk) for the latest on webhook authentication and signature verification methods.
2. When integrating with FormSG via OpenFn, you need a **Form Secret Key** which is generated when you create a form in FormSG. This key is used for decrypting submissions and verifying webhook signatures.
3. See this adaptor's [configuration docs](/adaptors/packages/formsg-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json
{
  "formSecretKey": "your-secret-key-here",
  "mode": "production",
  "webhookEndpoint": "https://my-domain.com/submissions"
}
```


### Implementation Examples

_Coming soon!_

#### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).