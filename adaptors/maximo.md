# Maximo

## About Maximo

[IBM Maximo Application Suite](https://www.ibm.com/products/maximo) is the industry-leading Enterprise Asset Management (EAM) solution designed to manage critical assets, reduce downtime, and improve operational efficiency. Built on decades of industry expertise, Maximo provides end-to-end management of assets from procurement and maintenance to decommissioning, ensuring optimal performance throughout the entire asset lifecycle.

Maximo is essential for organizations managing critical infrastructure, manufacturing equipment, facilities, and transportation assets across industries including energy, utilities, manufacturing, government, and transportation.

## Integration Options

**REST API**: IBM Maximo provides comprehensive REST API access through the Maximo REST API, enabling external applications to interact with asset data, work orders, inventory, and maintenance schedules. The API supports full CRUD operations and integrates with Maximo's workflow engine for automated business processes.

## Authentication

Maximo uses HTTP basic authentication for API access:

```json
{
  "baseUrl": "https://maximo-demo76.mro.com",
  "username": "test@openfn.org",
  "password": "@some(!)password"
}
```

**Authentication Components:**
- **baseUrl**: Your Maximo instance base URL
- **username**: Maximo user account with appropriate API permissions
- **password**: User account password



## Helpful Links

- [IBM Maximo Application Suite](https://www.ibm.com/products/maximo)
- [IBM Maximo Asset Management](https://www.ibm.com/products/maximo/asset-management)
- [Maximo Documentation](https://www.ibm.com/docs/en/masv-and-l/cd)
- [Maximo REST API Guide](https://www.ibm.com/docs/en/maximo-manage/continuous-delivery?topic=overview-maximo-rest-api)
- [IBM Maximo Case Studies](https://www.ibm.com/products/maximo/case-studies)
- [OpenFn Maximo Adaptor Configuration](https://docs.openfn.org/adaptors/packages/maximo-configuration-schema)
- [OpenFn Maximo Adaptor Docs](https://docs.openfn.org/adaptors/packages/maximo-docs)
