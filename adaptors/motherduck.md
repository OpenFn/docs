---
title: MotherDuck Adaptor
---

## About MotherDuck

[MotherDuck](https://motherduck.com) is a serverless cloud data warehouse built on DuckDB that makes big data feel small. It combines the power of DuckDB's analytical engine with cloud scalability, offering ultra-fast analytics without the operational complexity of traditional data warehouses. 

## Integration Options

MotherDuck supports REST API integration with OpenFn:

**REST API**: MotherDuck provides API access that enables external services like OpenFn to interact with cloud databases, execute SQL queries, and manage data warehousing operations. See [functions](/adaptors/packages/motherduck-docs) for more on how to use this adaptor to work with the MotherDuck API.

## Authentication

1. See [MotherDuck docs](https://motherduck.com/docs/getting-started/interfaces/client-apis/connect-query-from-python/installation-authentication/) for the latest on supported authentication methods.
2. When integrating with MotherDuck via OpenFn, the primary authentication method is **Token**. You can generate a token from your MotherDuck account settings.
3. See this adaptor's [Configuration docs](/adaptors/packages/motherduck-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json
{
  "token": "token_abc123...",
  "database": "my_database",
  "sessionHint": "primary"
}
```

### Helpful Links

1. [MotherDuck Documentation](https://motherduck.com/docs/)
2. [MotherDuck Official Website](https://motherduck.com/)

### Implementation Examples

_Coming soon!_

#### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).