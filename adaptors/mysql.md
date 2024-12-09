---
title: MySQL Adaptor
---

## About MySQL

MySQL is a free and open-source relational database management system. It can be accessed and manipulated using SQL to extract or load data.

## Integration Options

The `mysql` adaptor provides direct database connections for accessing data and executing SQL and standard database operations. See [functions](/adaptors/packages/mysql-docs) for more on how to use this adaptor.


## Authentication

See the [MySQL docs](https://dev.mysql.com/doc/) for the latest on supported authentication methods. When integrating with a MySQL database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's [configuration docs](/adaptors/packages/mysql-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "host": "some-host-url.compute-1.amazonaws.com",
  "database": "demo-db",
  "user": "admin-demo",
  "password": "@super(!)Secretpass"
}
```

### Helpful Links

1. [MySQL documentation](https://dev.mysql.com/doc/)






