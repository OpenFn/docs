---
title: Memento Database Adaptor
---

## About Memento Database

[Memento Database](https://mementodatabase.com/) is a powerful, customizable
database application that enables users to organize any type of data with a
no-code approach.

## Integration Options

Memento Database supports REST API integration with OpenFn:

**REST API**: Memento Database provides a Cloud API that enables external
services like OpenFn to interact with libraries (databases), entries (records),
and files. This API allows you to create, read, update, and delete records,
manage database structures, and synchronize data programmatically.

## Authentication

1. See [Memento Database API docs](https://mementodatabase.docs.apiary.io/) for
   the latest on supported authentication methods.
2. When integrating with Memento Database via OpenFn, the primary authentication
   method is **API Key**. You can generate an API key from your Memento Database
   account settings.

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or if using a Raw
JSON credential type, then your configuration will look something like this:

```json
{
  "apiKey": "your_memento_database_api_key_here",
  "baseUrl": "https://api.mementodatabase.com"
}
```

### Helpful Links

1. [Memento Cloud API Documentation](https://mementodatabase.docs.apiary.io/)
2. [Memento Database Official Website](https://mementodatabase.com/)

### Implementation Examples

_Coming soon!_

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
