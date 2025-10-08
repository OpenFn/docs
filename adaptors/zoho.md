---
title: Zoho Adaptor
---

## About Zoho

[Zoho Analytics](https://www.zoho.com/analytics/) (formerly Zoho Reports) is a comprehensive business intelligence and analytics platform that enables organizations to connect, analyze, and visualize data from multiple sources. Zoho Analytics provides self-service BI capabilities with AI-powered insights, allowing users to create reports, dashboards, and perform advanced analytics without extensive technical knowledge.

## Integration Options

Zoho Analytics supports integration through its comprehensive REST API, which enables external services like OpenFn to:

1. **REST API**: Add, update, and retrieve data from Zoho Analytics tables and databases. This option is suited for ETL processes, data synchronization, or workflows that need to populate analytics datasets with external information. See [functions](/adaptors/packages/zoho-docs) for more on how to use this adaptor to work with the API.

2. **Data Pipeline Integration**: Automate data ingestion from various sources into Zoho Analytics for real-time reporting and dashboard updates.

## Authentication

When integrating with Zoho Analytics via OpenFn, the authentication method uses:
- **Account**: Your Zoho Analytics account identifier  
- **Auth Token**: Your Zoho authentication token
- **API Version**: The Zoho Analytics API version (v1 or v2, with v2 being recommended)

See this adaptor's [Configuration docs](/adaptors/packages/zoho-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json
{
  "account": "yourzohoaccount",
  "authToken": "secreauthtoken",
  "apiVersion": "v2"
}
```

## Main Functions

### addrow

The primary function of this adaptor is `addrow`, which adds row data to a database table in Zoho Analytics. This function enables you to:

- Insert new records into existing Zoho Analytics tables
- Populate datasets for reporting and dashboard visualization  
- Sync data from external systems into your analytics workspace
- Maintain up-to-date information for business intelligence operations


### Helpful Links

1. [Zoho Analytics Platform](https://www.zoho.com/analytics/)
2. [Zoho Analytics API Documentation](https://www.zoho.com/analytics/api/)
3. [API Specification](https://www.zoho.com/analytics/api/v2/api-specification.html)
4. [Developer Console](https://api-console.zoho.com/)


### Implementation Examples

_Coming soon!_
