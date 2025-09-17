---
title: PDFShift Adaptor
---

## About PDFShift

[PDFShift](https://pdfshift.io/) is a solution designed to automate document
conversion tasks.

## Integration Options

PDFShift has a REST API that enables external services like OpenFn to pull data
from PDFShift, or push data from external apps to PDFShift. This option is
suited for scheduled, bulk syncs or workflows that must update data in PDFShift
with external information. See [functions](/adaptors/packages/pdfshift-docs) for
more on how to use this adaptor to work with the API.

## Authentication

See [PDFShift docs](https://docs.pdfshift.io/#authentication) for the latest on
supported authentication methods. When integrating with PDFShift via OpenFn,
only one primary authentication method is supported.

Api Key (requires api key created after authenticating in PDFShift). See this
adaptor's [Configuration docs](/adaptors/packages/pdfshift-configuration-schema)
for the required authentication parameters.

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or if using a Raw
JSON credential type, then your configuration will look something like this:

```json
{
  "apiKey": "sk_563874gfvftdv2t28462763fy23d28"
}
```

### Helpful Links

1. [PDFShift Documentation](https://docs.pdfshift.io/#introduction)
