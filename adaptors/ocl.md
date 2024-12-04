---
title: OCL Adaptor
---

## About OCL

[OCL (Open Concept Lab)](https://openconceptlab.org/) is an open-source platform that provides a collaborative environment for creating, managing, and sharing standardized healthcare terminologies, dictionaries, and value sets.

## Integration Options

**1. Rest API:** OCL offers a REST API that allows systems to interact with its concept dictionaries and value sets. With the API, you can:
This option is suited for scheduled synchronization or workflows requiring regular updates to or from OCL. Refer to the [OCL REST API documentation](https://docs.openconceptlab.org/en/latest/oclapi/overview.html) for endpoint details and usage examples.

**2. Bulk Export and Import**: OCL supports exporting and importing concept dictionaries and value sets in various formats (e.g., JSON, CSV). This allows for manual or automated bulk data integration. Use this option for one-time integrations or systems without direct API connectivity.

## Authentication
When integrating with OCL via OpenFn, **Basic Authentication** is supported. See this adaptor's [Configuration docs](/adaptors/packages/ocl-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "hostUrl": "https://api.openconceptlab.org/",
  "username": "usernmame",
  "password": "supersecretpassword"
}
```
## Helpful Links
1. [OCL Developer Guide](https://docs.openconceptlab.org/)
2. [OCL API Reference](https://docs.openconceptlab.org/en/latest/oclapi/apireference/index.html)
3. [OCL Community Support](https://openconceptlab.org/category/community/)
4. [OCL GitHub Repository](https://github.com/OpenConceptLab)


## Implementation Examples
1. OpenFn Prototype for Médecins Sans Frontières (MSF) LIME Project - OpenMRS -> OCL -> DHIS2 sync: https://github.com/OpenFn/openfn-lime
