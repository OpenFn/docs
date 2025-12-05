---
title: Inform Adaptor
---

## About Inform

[Inform](https://inform.unicef.org/) is UNICEF's platform for building forms and surveys, collecting field data (even offline), and viewing results in simple dashboards. Inform enables organizations to create digital forms, collect data in the field (with offline capabilities), and analyze results through intuitive dashboards and reporting tools.

## Integration Options

Inform supports integration through its REST API, which enables external services like OpenFn to:

1. **REST API**: Pull data from Inform or push data from external applications to Inform. This option is suited for scheduled, bulk syncs or workflows that need to update data in Inform with external information. See [functions](/adaptors/packages/inform-docs) for more on how to use this adaptor to work with the API.

2. **Data Export**: Export collected survey and form data for analysis and integration with external systems like DHIS2, databases, or reporting platforms.

## Authentication

When integrating with Inform via OpenFn, the primary authentication method supported is: **Access Token**. 

See this adaptor's [Configuration docs](/adaptors/packages/inform-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json
{
  "baseUrl": "https://data.inform.unicef.org",
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"
}
```

### Helpful Links

1. [Inform Platform](https://inform.unicef.org/)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
