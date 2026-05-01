---
title: EAPTS Adaptor
---

## About EAPTS

[EAPTS](https://dhpi.moh.gov.et/project/b7175989-30d8-42d6-a5ee-8d48cbad0c61) (Electronic Asset and Pharmaceutical Tracking System) is a comprehensive pharmaceutical management platform used across healthcare facilities in Ethiopia to monitor medicines, medical supplies, and equipment. EAPTS provides real-time visibility into inventory levels, prescription tracking, and dispensing unit performance to strengthen pharmaceutical logistics and health program oversight.

## Integration Options

EAPTS supports integration through its REST API, which enables external services like OpenFn to:

1. **REST API**: Pull data from EAPTS or push data from external applications to EAPTS. This API allows you to synchronize stock and dispensing data, validate prescriptions and patient records, generate dashboards or analytics reports, and monitor supply chain performance programmatically. This option is suited for scheduled, bulk syncs, automated nightly stock level updates to national reporting systems, real-time prescription validations, or workflows that need to exchange data between EAPTS and other health information systems such as DHIS2, KoboToolbox, or Salesforce. See [functions](https://docs.openfn.org/adaptors/packages/eapts-docs) for more on how to use this adaptor to work with the API.

2. **Data Export**: Export pharmaceutical inventory, dispensing records, and stock reports for analysis and integration with external systems like DHIS2, national health databases, or reporting platforms.

## Authentication

When integrating with EAPTS via OpenFn, the primary authentication method supported is:

**API Token Authentication**. See this adaptor's [Configuration docs](https://docs.openfn.org/adaptors/packages/eapts-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](https://docs.openfn.org/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn.

If working locally or if using a Raw JSON credential type, then your configuration will look something like this:
```json
{
  "baseUrl": "https://your-eapts-instance.example.com",
  "apiToken": "sk_test_53iburgn5yb3u4nfufg477365gbvrnv348r475gf4bf485845gbrf"
}
```

**Required Fields:**
- `baseUrl`: The base URL of your EAPTS instance (e.g., `https://example.com`)
- `apiToken`: The API token for authenticating requests to EAPTS

### Helpful Links

1. [EAPTS Platform](https://dhpi.moh.gov.et/project/b7175989-30d8-42d6-a5ee-8d48cbad0c61)
2. [OpenFn EAPTS Adaptor](https://docs.openfn.org/adaptors/packages/eapts-readme)
3. [EAPTS Configuration Schema](https://docs.openfn.org/adaptors/packages/eapts-configuration-schema)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
