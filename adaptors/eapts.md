---
title: EAPTS Adaptor
---

## About EAPTS

[EAPTS](https://dhpi.moh.gov.et/project/b7175989-30d8-42d6-a5ee-8d48cbad0c61) (Electronic Asset and Pharmaceutical Tracking System) is a comprehensive pharmaceutical management platform used across healthcare facilities to monitor medicines, medical supplies, and equipment.  

It provides real-time visibility into inventory, prescription tracking, and dispensing unit performance to strengthen pharmaceutical logistics and health program oversight.

The **@openfn/language-eapts** adaptor enables seamless integration between OpenFn workflows and EAPTS APIs—automating tasks such as:

- Synchronizing stock and dispensing data  
- Validating prescriptions and patient records  
- Generating dashboards or analytics reports  
- Monitoring supply chain performance programmatically  

---

## Use OpenFn + EAPTS for Data-Driven Health Workflows

EAPTS plays a critical role in pharmaceutical inventory control and traceability.  
However, managing cross-system data exchange—such as syncing with DHIS2, KoboToolbox, or Salesforce—can be complex.

**OpenFn workflows bridge this gap**, enabling automated data exchange, real-time validations, and notifications across multiple digital health systems.

Example:
> Use OpenFn to fetch updated stock levels from EAPTS nightly and automatically sync them with your national reporting system.

---

## Integration Options

Use this adaptor to connect to the **EAPTS API**, enabling your workflows to make authenticated HTTP requests for retrieving or sending data related to medicines, stock reports, or prescription validations.

Typical workflow example:

_Coming soon !!!_

---

## Authentication

See this adaptor’s  
[Configuration docs](https://docs.openfn.org/adaptors/packages/eapts-configuration-schema)  
for details on the authentication parameters required to connect securely to the EAPTS API.

---

## Functions

### `get(path, options) ⇒ Operation`

Make a GET request to fetch data from EAPTS.

| Param | Type | Description |
|-------|------|-------------|
| path | `string` | Path to the API resource |
| options | `RequestOptions` | Optional request parameters |

**Writes to state:**

| State Key | Description |
|-----------|-------------|
| data | Parsed response body |
| response | HTTP response (headers, statusCode, body, etc.) |
| references | Array of previous data objects used in the Job |

**Example: Get a stockout report**
```js
get("DispensingUnit/Dashboard/StockOutReport");
