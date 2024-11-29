---
title: HTTP Adaptor
---

## About HTTP

[HTTP (HyperText Transfer Protocol)](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/) is a protocol used for transferring data over the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. 

## Integration Options

**1. Rest API:** HTTP supports standard methods like `GET`, `POST`, `PUT`, and `DELETE` for interacting with web resources. This option is suited for scheduled, bulk syncs or workflows that must update data with external information. See [functions](https://docs.openfn.org/adaptors/packages/http-docs) for more on how to use this adaptor to work with the API. Note: This adaptor can be used to communicate w/ any API that supports HTTP. 

**2. Webhook:** HTTP enables real-time communication via webhooks. Check if your source system offers this feature. 

## Authentication

HTTP itself does not enforce authentication, but many applications that use HTTP implement security mechanisms to control access. Common methods that can be used when integrating with OpenFn include Basic Authentication, API Keys and OAuth. See this adaptor's [Configuration docs](https://docs.openfn.org/adaptors/packages/http-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](https://github.com/OpenFn/docs/blob/main/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "username": "test@openfn.org",
  "password": "@some(!)Password",
  "access_token": "00QCjAl4MlV-WPX",
  "baseUrl": "https://instance_name.surveycto.com"
}
```


### Implementation Examples

1. UNICEF Primero - UNHCR Progres Interoperability: [https://github.com/OpenFn/primero-progres](https://github.com/OpenFn/primero-progres)
2. UNICEF Thailand Primero Interoperability: [https://openfn.github.io/primero-thailand/](https://openfn.github.io/primero-thailand/)




