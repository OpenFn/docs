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






