---
title: Azure Storage 
---

## About Azure Storage 

[Azure Storage](https://azure.microsoft.com/en-us/products/category/storage) is a cloud-based storage solution provided by Microsoft Azure. It offers scalable and secure storage options for a wide range of data, including unstructured, semi-structured, and structured data. 
## Integration Options

Azure Storage supports 2 primary integration options with OpenFn:

1. **Rest API:** Azure Storage has a REST API that enables external services like OpenFn to pull data from Azure Storage, or push data from external apps to Azure Storage. This option is suited for scheduled, bulk syncs or workflows that must update data in Azure Storage with external information. See [functions](/adaptors/packages/azure-storage-docs) for more on how to use this adaptor to work with the API.
2. **Webhook:** Webhook or Data Forwarding to push data from Azure Storage to external systems (see [docs](https://learn.microsoft.com/en-us/azure/storage/)). This option is suited for real-time, event-based data integration.

## Authentication

1. See [Azure Storage docs](https://learn.microsoft.com/en-us/azure/storage/) for the latest on supported authentication methods.
2. When integrating with Azure Storage via OpenFn, there is one primary authentication method that is supported: **API Key**. See this adaptor's [Configuration docs](/adaptors/packages/azure-storage-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "accountName": "examplestorageaccount01",
  "accountKey": "zzUx5rA4BZkjPet8ztLTEll7azF65Sez7WxGKsJv5B+rp/dby8ARgYpEVe93xFCQDqGBi3FUlxjP+ASt4uepZg=="
}
```

### Helpful Links

1. [Azure Storage Documentation](https://learn.microsoft.com/en-us/azure/storage/)
2. [Azure Blob Storage REST API](https://learn.microsoft.com/en-us/rest/api/storageservices/)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
