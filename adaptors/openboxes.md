---
title: OpenBoxes Adaptor
---

## About OpenBoxes

[OpenBoxes](https://openboxes.com/about/) is an open-source supply chain and inventory management system, born after the 2010 Haiti earthquak. Built for low-resource healthcare and disaster-relief settings, with features like inventory, lot/expiry and shipment tracking, purchase orders, requisitions, and customizable reports.

## Integration Options

**Rest API:** OpenBoxes offers a REST API that enables external applications to interact with its services. Refer to the OpenBoxes REST API [documentation](https://docs.openboxes.com/en/develop/api-guide/getting-started/) for detailed guidelines on endpoints and payload formats.

## Authentication

See [OpenBoxes docs](https://docs.openboxes.com/en/develop/api-guide/getting-started/) for the latest on supported authentication methods.
[See our configuration docs](/adaptors/packages/openboxes-configuration-schema) to learn more.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json

{
  "password": "@some(!)Str0ngp4ss0w0rd",
  "username": "test@openfn.org",
  "baseUrl": "https://demo.openboxes.com/openboxes/api"
}

```

### Helpful Links

1. [OpenBoxes Documentation](https://momodeveloper.mtn.com/api-documentation)