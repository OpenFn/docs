---
title: FHIR Adaptor
---

## About FHIR

[FHIR](https://www.hl7.org/fhir/overview.html) stands for Fast Healthcare Interoperability Resources. It is a standard for representing and exchanging healthcare data electronically. 


:::tip About this adaptor and features coming soon! 

This adaptor is very basic and generic, used mostly to integrate demo FHIR servers. It's a work-in-progress, so share questions and feedback on [community.openfn.org](https://community.openfn.org).

**FHIR version-specific adaptors (e.g., `fhir-r4`) with enhanced functionality are coming soon** to fast-track integration setup with more helper functions, templates, and docs than this simple adaptor. See the [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki/Generating-Fhir-Adaptors) for how to build an adaptor specific to your FHIR Implementation Guide. 

:::

## Integration Options

**1. Rest API:** The FHIR specification includes a REST API that enables external services like OpenFn to pull data from the FHIR server, or push data from external apps to FHIR servers. This option is suited for scheduled, bulk syncs or workflows that must update data with external information. See [functions](/adaptors/packages/fhir-docs) for more on how to use this adaptor to work with the API.

**2. Webhook:** The FHIR specification does not inherently define a webhook or data-forwarding mechanism. However, many FHIR implementations and platforms offer extensions or configurations that support similar functionality. This option is suited for real-time, event-based data integration. Check out the FHIR `Subscription` resource [documentation](https://build.fhir.org/subscription-definitions.html) to learn more about one way this might be implemented. 

## Authentication

The FHIR standard does not directly prescribe authentication and authorization methods. Instead, it provides security guidelines and leaves the choice of implementation to the developers of FHIR servers and clients. See the FHIR [docs](https://www.hl7.org/fhir/security.html) for the latest security-related recommendations. Depending on the FHIR systems being integrated via OpenFn, you might employ a Basic Auth, API key, or OAuth authentication scheme. 

See this adaptor's [Configuration docs](/adaptors/packages/fhir-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this to define your target endpoint and FHIR version:

```
{
  "baseUrl": "https://hapi.fhir.org", //fhir endpoint
  "apiPath": "baseR4" //fhir version
}
```

### Helpful Links

1. [API documentation](https://www.hl7.org/fhir/http.html)
2. [Digital Square on FHIR](https://digitalsquare.org/resourcesrepository/digital-square-on-fhir-4c78p)
3. [Basic guide to interacting with FHIR Server](https://smilecdr.com/docs/fhir_standard/fhir_introduction.html)
4. [Creating your first FHIR resource](https://medblocks.com/blog/fhir-101-creating-your-first-patient-resource-like-a-pro)
5. Google's [Open Health Stack](https://developers.google.com/open-health-stack) tooling for working with FHIR

Have resources or links to share? Submit a PR to edit this page or post on [community.openfn.org](https://community.openfn.org).

