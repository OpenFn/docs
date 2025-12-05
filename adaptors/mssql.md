---
title: MSSQL Adaptor
---

## About MSSQL

[Microsoft SQL Server](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16) (MSSQL) is a relational database management system (RDBMS) developed by Microsoft. It supports a wide variety of applications, including data warehousing, transaction processing, and business intelligence. It can be accessed and manipulated using SQL to extract or load data.

## Integration Options

The `mssql` adaptor provides direct database connections for accessing data and executing SQL and standard database operations. See [functions](/adaptors/packages/mssql-docs) for more on how to use this adaptor.


## Authentication

See [MSSQL docs](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16) for the latest on supported authentication methods. When integrating with an MSSQL database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's [Configuration docs](/adaptors/packages/mssql-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "server": "something.database.windows.net",
  "database": "demo-db",
  "userName": "admin",
  "password": "@super(!)Password"
}
```

### Helpful Links

1. [MSSQL documentation](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
