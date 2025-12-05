---
title: CartoDB (CARTO) Adaptor
---

## About CartoDB

CARTO (formerly CartoDB) is a cloud-native spatial intelligence platform that enables organizations to unlock the power of location data. Built to work natively with major cloud data warehouses like Google BigQuery, Snowflake, Amazon Redshift, and Databricks, CARTO provides advanced geospatial analysis, visualization, and app development capabilities without requiring data movement or ETL processes. The platform serves data analysts, developers, and GIS professionals with tools for spatial analytics, interactive mapping, and location intelligence.

## Integration Options

CartoDB supports REST API integration with OpenFn:

**REST API**: CartoDB provides a comprehensive SQL API that enables external services like OpenFn to interact with geospatial datasets. This API allows you to execute SQL queries, insert/update spatial data, and perform complex geospatial analyses programmatically. The integration is suited for scheduled data synchronization, bulk geospatial operations, and workflows that need to update CartoDB datasets with external spatial information. See [functions](/adaptors/packages/cartodb-docs) for more on how to use this adaptor to work with the CartoDB SQL API.

## Authentication

To connect to CartoDB, you need to provide your account credentials:

```json
{
  "account": "your_carto_username",
  "apiKey": "your_api_key_here"
}
```

**Required Fields:**
- `account`: Your CARTO account username (required)
- `apiKey`: Your CARTO API key for authentication (required)

You can obtain your API key from your CARTO account dashboard under API Keys section.


## Helpful Links

- [CARTO API Reference](https://api-docs.carto.com/)
- [OpenFn CartoDB Adaptor](https://docs.openfn.org/adaptors/packages/cartodb-readme)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
