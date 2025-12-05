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

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
