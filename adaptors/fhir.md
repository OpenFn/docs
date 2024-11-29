---
title: FHIR Adaptor
---

## About FHIR

[FHIR](https://www.hl7.org/fhir/overview.html) stands for Fast Healthcare Interoperability Resources. It is a standard for representing and exchanging healthcare data electronically. 

## Integration Options

**1. Rest API:** The FHIR specification includes a REST API that enables external services like OpenFn to pull data from the FHIR server, or push data from external apps to FHIR servers. This option is suited for scheduled, bulk syncs or workflows that must update data with external information. See [functions](https://docs.openfn.org/adaptors/packages/fhir-docs) for more on how to use this adaptor to work with the API.

**2. Webhook:** The FHIR specification does not inherently define a webhook or data-forwarding mechanism. However, many FHIR implementations and platforms offer extensions or configurations that support similar functionality. This option is suited for real-time, event-based data integration. Check out the FHIR `Subscription` resource [documentation](https://build.fhir.org/subscription-definitions.html) to learn more about one way this might be implemented. 

## Authentication

The FHIR standard does not directly prescribe authentication and authorization methods. Instead, it provides security guidelines and leaves the choice of implementation to the developers of FHIR servers and clients. See the FHIR [docs](https://www.hl7.org/fhir/security.html) for the latest security-related recommendations. Depending on the FHIR systems being integrated via OpenFn, you might employ a Basic Auth, API key, or OAuth authentication scheme. 

See this adaptor's [Configuration docs](https://docs.openfn.org/adaptors/packages/fhir-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](https://github.com/OpenFn/docs/blob/main/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "baseUrl": "https://hapi.fhir.org",
  "apiPath": "baseR4"
}
```

### Helpful Links

1. [API documentation](https://www.hl7.org/fhir/http.html)

### Implementation Examples

1. Health in Harmony and ASRI Indonesia- CommCare -> Satusehat sync: [https://openfn.github.io/ConSoSci/arsi/](https://github.com/OpenFn/asri)




