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

## Examples

### Generate a PDF from an HTML string

This job builds an HTML sales report from the input data, converts it to a PDF,
and logs the download link. PDFShift keeps the file for 48 hours.

```js
// Generate a PDF document from a HTML string

fn(state => {
  const { data } = state;

  state.pdfHTMLContent = `<html>
       <body style="font-family: Arial, sans-serif; font-size: 14px;">
         <h1>Sales Report</h1>
         <p>Date: ${data.date}</p>
         <p>Total Sales: $${data.totalSales}</p>
      </body>
    </html>`;

  return state;
});

generatePDF($.pdfHTMLContent, {
  sandbox: true,
  filename: 'trials.pdf',
});

fn(state => {
  const { data } = state;
  console.log(`Download PDF in 48 hours from ${data.url}`);
  return { ...state, pdfData: data };
});
```

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

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
