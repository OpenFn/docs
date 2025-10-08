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

## Common Use Cases

### 1. Retail Chain Management
- Sync product catalogs across multiple store locations
- Consolidate sales data from various POS systems
- Manage inventory levels across warehouses and branches

### 2. Tax Compliance Integration
- Automate tax report generation from sales data
- Ensure EBM compliance for retail transactions
- Integrate with accounting systems for financial reporting

### 3. E-commerce Integration
- Sync online store inventory with physical retail locations
- Process sales transactions from multiple channels
- Manage customer data across digital and physical touchpoints

### 4. Financial Services Integration
- Connect mobile money payment processing
- Integrate invoice financing and credit scoring
- Sync transaction data with banking and payment platforms

### 5. Supply Chain Management
- Track product quantities and batch numbers
- Manage supplier relationships and purchase orders
- Integrate with logistics and distribution systems

## API Operations

The Zata adaptor supports various operations including:

- **Product Management**: Create, update, and track products and inventory
- **Transaction Processing**: Handle sales transactions with customer and payment details
- **Company & Branch Management**: Manage multiple business locations and organizational structure
- **Inventory Control**: Track stock levels, reduce quantities, and manage batch numbers
- **Customer Management**: Store and retrieve customer information including TIN numbers
- **Data Retrieval**: Access product types, transaction history, and compliance reports

### Helpful Links

1. [Zata Platform](https://zata.rw/)
2. [Zata API Documentation](https://docs.zata.rw/)
3. [HiQ Africa](https://hiq.africa/)
4. [Get API Access](https://calendly.com/hiqafrica)
5. [Zata Community](https://community.zata.rw/)

### Implementation Examples

_Coming soon!_
