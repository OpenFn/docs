---
title: Redis Adaptor
---

## About Redis

[Redis (Remote Dictionary Server)](https://redis.io/) is an open-source, in-memory data store used as a database, cache, and message broker. It is commonly used for caching, real-time analytics, session management, and pub/sub messaging.


## Integration Options

The `redis` adaptor provides direct database connections for accessing data and executing NoSQL and standard database operations. See [functions](/adaptors/packages/redis-docs) for more on how to use this adaptor.


## Authentication

See [Redis](https://redis.io/docs/latest/) for the latest on supported authentication methods. When integrating with a NoSQL database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's [Configuration docs](/adaptors/packages/redis-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "host": "redis.example.com",
  "password": "@some(!)Str0ngp4ss0w0rd",
  "username": "test@openfn.org"
}
```

### Helpful Links

1. [Redis Documentation](https://redis.io/documentation)






