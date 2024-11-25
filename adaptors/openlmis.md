---
title: openLMIS Adaptor
---

## About openLMIS
[openLMIS](https://openlmis.org/) is an open source, cloud-based electronic logistics management information system (LMIS) purpose-built to manage health commodity supply chains. . 

**Example:**
[openLMIS](https://mojatax.com/](https://openlmis.org/ ) is a logistics management solution with multiple modules for cold chain equipment (CCE), requisitions (orders), inventory management, analytics and vaccine management amongst others.

## Integration Options
There are API endpoints available for different modules.

**Example:**
openLMIS 3.0.1 has an available
[REST API](https://documenter.getpostman.com/view/5385860/2s93RMVao6#intro](https://docs.openlmis.org/en/rel-3.0.1/api/index.html ). See
the documentation for the [CCE](https://test.openlmis.org/cce/docs/) and [auth](https://test.openlmis.org/auth/docs/) modules. 

### Webhook Setup
_Optional_ section to provide additional info on how to configure the webhook to 
point to an OpenFn webhook url, if needed. 

## Authentication
What type(s) of authentication are supported and do we have a recommended method? 
(e.g., basic auth, api key, oauth) Link to important app documentation. 

**Example:**
Users must specify a Mojatax Business `client_id` and `password` to generate an
`access_token`, which can be sent as a **Bearer Token** to access other API
endpoints.
[See Mojatax docs](https://documenter.getpostman.com/view/5385860/2s93RMVao6#e4d5c554-0224-4705-9094-b565c82b1f26)
for detailed guidance.

OpenFn users can use the `Mojatax` credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

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
