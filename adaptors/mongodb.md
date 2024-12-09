---
title: MongoDB Adaptor
---

## About MongoDB

[MongoDB](https://www.mongodb.com/) is a NoSQL, document-oriented database that stores data in BSON (Binary JSON) format, enabling easy storage and retrieval of complex and hierarchical data structures

## Integration Options

The `mongodb` adaptor provides direct database connections for accessing data and executing SQL and standard database operations. See [functions](/adaptors/packages/mongodb-docs) for more on how to use this adaptor.


## Authentication

See the [MongoDB docs](https://www.mongodb.com/docs/) for the latest on supported authentication methods. When integrating with a MongoDB database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's [configuration docs](/adaptors/packages/mongodb-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "clusterHostname": "yourCluster-xxxyzzz.mongodb.net",
  "username": "admin",
  "password": "@secret(!)Pass"
}
```

### Helpful Links

1. [MongoDB documentation](https://www.mongodb.com/docs/)






