---
title: openLMIS Adaptor
---

## About openLMIS
[openLMIS](https://openlmis.org/) is an open source, cloud-based electronic logistics management information system (LMIS) purpose-built to manage health commodity supply chains. It has multiple modules for cold chain equipment (CCE), requisitions (orders), inventory management, analytics and vaccine management amongst others.

## Integration Options
There are API endpoints available for different modules.

openLMIS 3.0.1 has an available
[REST API](https://documenter.getpostman.com/view/5385860/2s93RMVao6#intro](https://docs.openlmis.org/en/rel-3.0.1/api/index.html ). See
the documentation for the [CCE](https://test.openlmis.org/cce/docs/) and [auth](https://test.openlmis.org/auth/docs/) modules. 

## Authentication
The [Auth Service](https://docs.openlmis.org/en/rel-3.7.0/components/authServiceDesign.html) in OpenLMIS v3 is a stand-alone micro-service that implements OAuth 2. This is used by other OpenLMIS micro-services as well as by the Reference UI AngularJS application. It is also available for use by other mobile apps or web apps that may integrate with OpenLMIS.

The Auth Service provides API endpoints to generate or check a token as well as to handle user password resets (a forgot password workflow). 

**Example:**
Users must specify an openLMIS `username` and `password` to generate an
`access_token`, which can be sent as a **Bearer Token** to access other API
endpoints.
[See openLMIS docs](https://docs.openlmis.org/en/rel-3.7.0/components/authServiceDesign.html)
for detailed guidance.

See this adaptor's
[Configuration docs](/adaptors/packages/mojatax-configuration-schema) for
technical docs on the authentication parameters required. If working locally or
if using a `Raw JSON` credential type, then your configuration will look
something like this:

```json
{
  "baseUrl": "https://vfd-staging.mojatax.com",
  "password": "@some(!)Str0ngp4ss0w0rd",
  "clientId": "the-long-uuid-provided-by-mojatax"
}
```
## Integration Tips
_Optional_ section to include integration design & setup tips and tricks, 
in case there are valuable learnings we want to make sure the next integrator
is aware of. 

## Helpful Links

- API documentation: [add link]
- Other links/articles: [add link]
