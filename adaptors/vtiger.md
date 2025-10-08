---
title: Vtiger Adaptor
---

## About Vtiger

[Vtiger CRM](https://www.vtiger.com/) is an all-in-one customer relationship management platform that helps businesses manage sales, marketing, and customer support operations in a unified interface. Built around an open-source core, Vtiger provides comprehensive CRM capabilities including lead management, opportunity tracking, customer service, project management, and inventory management.

## Integration Options

Vtiger supports integration through its comprehensive REST API and web services, which enable external services like OpenFn to:

1. **REST API**: Create, read, update, and delete CRM records including leads, contacts, organizations, opportunities, cases, and custom modules. This option is suited for data synchronization, automated data entry, or workflows that need to maintain customer information across multiple systems. See [functions](/adaptors/packages/vtiger-docs) for more on how to use this adaptor to work with the API.

2. **Web Services**: Access Vtiger's web service APIs for third-party application integration, enabling seamless data exchange between Vtiger and external systems.

## Authentication

When integrating with Vtiger via OpenFn, the authentication method requires:
- **Host URL**: Your Vtiger CRM instance URL
- **Username**: Your Vtiger CRM username (email address)
- **Access Token**: Your Vtiger access token for API authentication

See this adaptor's [Configuration docs](/adaptors/packages/vtiger-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json
{
  "hostUrl": "https://openfunction.od2.vtiger.com",
  "username": "test@openfn.org", 
  "accessToken": "@some()!veryHugeToke"
}
```


### Helpful Links

1. [Vtiger CRM Platform](https://www.vtiger.com/)
2. [Vtiger Documentation](https://www.vtiger.com/docs/)
4. [REST API Manual](https://help.vtiger.com/article/147111249-Rest-API-Manual)
5. [Web Services Integration](http://community.vtiger.com/help/vtigercrm/developers/third-party-app-integration.html)
6. [Free Trial](https://www.vtiger.com/get-started/)

### Implementation Examples

_Coming soon!_
