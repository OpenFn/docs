---
title: HTTP Adaptor
---

## About the HTTP "universal" adaptor

Communicate with web apps using [HTTP (HyperText Transfer Protocol)](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/). 
This adaptor enables out-of-box integration with any REST API! 

## Integration Options

Use this adaptor to communicate with **any REST API** or any other app that can communicate via HTTP. 

**Note that OpenFn also supports Webhooks, but that is a workflow trigger type ([see docs](/documentation/build/triggers#webhook-event-triggers)), not an adaptor.**

## Authentication

HTTP itself does not enforce authentication, but many applications that use HTTP implement security mechanisms to control access. Common methods that can be used when integrating with OpenFn include Basic Authentication, API Keys and OAuth. See this adaptor's [Configuration docs](/adaptors/packages/http-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

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




