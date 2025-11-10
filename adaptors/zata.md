---
title: Zata Adaptor
---

## About Zata

[Zata](https://zata.rw/) is HiQ Africa's flagship retail management and tax compliance platform designed for businesses in East Africa. Zata specializes in automating sales tax reports, managing inventory, and ensuring regulatory compliance with tax authorities like Rwanda Revenue Authority (RRA). The platform offers integrated solutions for retail stock management, EBM (Electronic Billing Machine) invoice automation, and financial services integration.

## Key Features

- **Tax Compliance Automation**: Automated sales tax reporting and EBM integration
- **Inventory Management**: Real-time stock tracking, product management, and warehouse operations
- **Transaction Processing**: Sales transaction management with customer and payment tracking
- **Multi-branch Support**: Manage multiple retail locations from a single platform
- **Financial Integration**: Connect with mobile money services (MTN MoMo, Airtel Money) and invoice financing
- **API-First Architecture**: Developer-friendly REST API for seamless integration

## Integration Options

Zata supports integration through its REST API, which enables external services like OpenFn to:

1. **REST API**: Create and manage sales transactions, products, customers, and inventory. This option is suited for e-commerce platforms, POS systems, or ERP integrations that need to sync retail data with Zata's compliance and inventory management features. See [functions](/adaptors/packages/zata-docs) for more on how to use this adaptor to work with the API.

2. **Real-time Sync**: Synchronize product catalogs, customer data, and transaction records between external systems and Zata's platform for unified retail operations.

## Authentication

When integrating with Zata via OpenFn, the primary authentication method supported is: **API Token**.

See this adaptor's [Configuration docs](/adaptors/packages/zata-configuration-schema) for more on required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json
{
  "apiToken": "EAAZAq6ZBYUd64BO83b46fn2MdraueL5s9I5IRZCtWUpYsfmEZARN2HDmL8BE5UhFf98EuTnpkhZBWTR9xippoN1a9MzY8Giw3pjSp55YMAF1nowqsy9aLODz48dm8TpXk8ZADUt6qX3vnYJzcn4OH9jrOIiW5ivt3By0beSjbX0E32ZCUMQpS9xRirepvc7qgGKurWQKIcPLPVSGjXQlZCSZBmLdCL8IW07qfjISupZA3HIniORAZDZD",
  "baseUrl": "https://example.com",
  "apiVersion": "v1"
}
```


### Helpful Links

1. [Zata Platform](https://zata.rw/)
2. [Zata API Documentation](https://docs.zata.rw/)
5. [Zata Community](https://community.zata.rw/)

### Implementation Examples

_Coming soon!_

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
