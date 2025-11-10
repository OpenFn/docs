# EAPTS

## App Overview

[EAPTS](https://dhpi.moh.gov.et/project/b7175989-30d8-42d6-a5ee-8d48cbad0c61) (Electronic Asset and Pharmaceutical Tracking System) is a comprehensive pharmaceutical management system used for tracking medicines, medical supplies, and assets in healthcare facilities. The system provides real-time inventory management, prescription tracking, and dispensing unit monitoring capabilities for health programs.

The **@openfn/language-eapts** adaptor enables seamless integration between OpenFn workflows and EAPTS APIs, allowing you to automate data synchronization, validate prescriptions, monitor stock levels, and manage pharmaceutical supply chains programmatically.

---

## Functions

### get
`get(path, options) ⇒ Operation`

Make a GET request

| Param | Type | Description |
|-------|------|-------------|
| path | `string` | Path to resource |
| options | `RequestOptions` | Optional request options |

This operation writes the following keys to state:

| State Key | Description |
|-----------|-------------|
| data | the parsed response body |
| response | the response from the HTTP server, including headers, statusCode, body, etc |
| references | an array of all previous data objects used in the Job |

**Example: Get a stockout report**
```js
get("DispensingUnit/Dashboard/StockOutReport");
```

---

### post
`post(path, body, options) ⇒ Operation`

Make a POST request

| Param | Type | Description |
|-------|------|-------------|
| path | `string` | Path to resource |
| body | `object` | Object which will be attached to the POST body |
| options | `RequestOptions` | Optional request options |

This operation writes the following keys to state:

| State Key | Description |
|-----------|-------------|
| data | the parsed response body |
| response | the response from the HTTP server, including headers, statusCode, body, etc |
| references | an array of all previous data objects used in the Job |

**Example**
```js
post("Patient/CheckPrescription", { 
  "prescriptionRowGuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6" 
});
```

---

### request
`request(method, path, body, options) ⇒ Operation`

Make a general HTTP requests

| Param | Type | Description |
|-------|------|-------------|
| method | `string` | HTTP method to use |
| path | `string` | Path to resource |
| body | `object` | Object which will be attached to the POST body |
| options | `RequestOptions` | Optional request options |

This operation writes the following keys to state:

| State Key | Description |
|-----------|-------------|
| data | the parsed response body |
| response | the response from the HTTP server, including headers, statusCode, body, etc |
| references | an array of all previous data objects used in the Job |

**Example**
```js
request("POST", "DispensingUnit/Request/History", { "search": {} });
```

---

## Interfaces

### HttpState
State object

**Properties**

| Name | Description |
|------|-------------|
| data | the parsed response body |
| response | the response from the HTTP server, including headers, statusCode, body, etc |
| references | an array of all previous data objects used in the Job |

---

### RequestOptions
Options provided to the HTTP request

**Properties**

| Name | Type | Description |
|------|------|-------------|
| body | `object` \| `string` | body data to append to the request. JSON will be converted to a string (but a content-type header will not be attached to the request). |
| errors | `object` | Map of errorCodes -> error messages, ie, `{ 404: 'Resource not found;' }`. Pass `false` to suppress errors for this code. |
| form | `object` | Pass a JSON object to be serialised into a multipart HTML form (as FormData) in the body. |
| query | `object` | An object of query parameters to be encoded into the URL. |
| headers | `object` | An object of headers to append to the request. |
| parseAs | `string` | Parse the response body as json, text or stream. By default will use the response headers. |
| timeout | `number` | Request timeout in ms. Default: 300 seconds. |
| tls | `object` | TLS/SSL authentication options. See https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions |
