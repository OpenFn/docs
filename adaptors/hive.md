---
title: Hive Adaptor
---

## About Apache Hive

[Apache Hive](https://hive.apache.org/) is a data warehouse software that facilitates reading, writing, and managing large datasets stored in distributed storage systems.

## Integration Options

The `hive` adaptor provides direct database connections for accessing data and executing SQL and standard database operations. See [functions](/adaptors/packages/hive-docs) for more on how to use this adaptor.


## Authentication

See [Hive docs](https://hive.apache.org/docs/) for the latest on supported authentication methods. When integrating with a Hive database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's [Configuration docs](/adaptors/packages/hive-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "host": "some-host-url.compute-1.amazonaws.com",
  "database": "demo-db",
  "username": "admin-demo",
  "password": "@super(!)Secretpass"
}
```

### Helpful Links

1. [Hive documentation](https://hive.apache.org/)


### Implementation Examples

_Coming soon!_




