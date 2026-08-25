---
title: Google Cloud Healthcare Adaptor
---

## About Google Cloud Healthcare

The [Google Cloud Healthcare API](https://cloud.google.com/healthcare-api) is a solution that enables the secure storage, management, and exchange of healthcare data on Google Cloud. It bridges existing care systems and applications hosted on Google Cloud, facilitating interoperability and integration with advanced analytics and machine learning tools. 

## Integration Options

**1. Rest API:**  Google Cloud Healthcare offers a REST API that enables external applications to interact with its database and perform bulk operations. This option is ideal for applications requiring scheduled or bulk synchronization with Google Cloud Healthcare. The API supports the [HL7® FHIR®](https://www.hl7.org/fhir/overview.html) (Fast Healthcare Interoperability Resources) standard. See [functions](/adaptors/packages/googlehealthcare-docs) for more on how to use this adaptor to work with the API.

**2. Webhook:** The Google Cloud Healthcare API does not natively support webhooks as part of its core functionality. However, you can implement webhook-like behavior using other Google Cloud services and tools in combination with the Healthcare API.

## Authentication

1. See [Google Cloud Healthcare API docs](https://cloud.google.com/healthcare-api/docs/authentication#:~:text=You%20can%20authenticate%20to%20the,CLI%20credentials%20and%20ADC%20credentials.) for the latest on supported authentication methods.
2. When integrating with Google Cloud Healthcare via OpenFn, there is one primary authentication method that is supported: **Access Token**. See this adaptor's [Configuration docs](/adaptors/packages/googlehealthcare-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"
}
```

![Google Cloud Healthcare access token credential](/img/googlehealthcare-access-token.webp)

### Using a Google Service Account

We recommend using a
[Google Service Account](https://cloud.google.com/iam/docs/service-accounts-create)
to generate the access token rather than using a personal user credential.
Service accounts are designed for machine-to-machine access, do not require a
human login, and provide a clear audit trail which is particularly important for
healthcare data integrations.

When setting up a service account for Google Cloud Healthcare:

- Grant only the IAM roles your workflow requires, following the principle of
  least privilege. See
  [Google Cloud IAM roles for Healthcare](https://cloud.google.com/healthcare-api/docs/access-control)
  for the available roles.
- Generate a short-lived access token from the service account to use as your
  OpenFn credential, rather than a long-lived personal token.

See the [Credentials page](/documentation/build/credentials#creating-a-dedicated-integration-user-for-your-openfn-workflow)
for broader guidance on why dedicated integration users and service accounts are
recommended for all OpenFn workflows.

### Helpful Links

1. [Google Cloud Healthcare API Documentation](https://cloud.google.com/healthcare-api)
2. [Cloud Healthcare API Documentation](https://cloud.google.com/healthcare-api/docs)
3. [FHIR Standard](https://www.hl7.org/fhir/)
4. [Google Cloud Authentication Overview](https://cloud.google.com/docs/authentication)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
