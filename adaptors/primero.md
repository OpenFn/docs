---
title: Primero
---

## Overview

[Primero](https://www.primero.org/) is an open source software platform that
helps social services, humanitarian and development workers manage
protection-related data.

### Data Model

Primero data is primarily stored in **cases**, **services** and **referrals**.

- **Cases** - used to track data on people
- **Referrals** - Referring a record is a way of giving a user limited access to
  a record without transferring it completely
- **Services** - Cases are referred for specific _services_ such as
  `Alternative care` and `Family Reunification`

Learn more about Primero records using the user guides at the Primero
documentation site: https://support.primero.org/documentation

**[See Primero admin guide](https://support.primero.org/assets/books-v2/1sP6VhT70WHhi5ZPbio6EszX-i4jZsBkO/#h.r1lefowgvf0n) for guidance on unique identifiers.**

## Integration Use Cases

1. As a UNICEF caseworker, I would like to electronically send a referral for a
   case to UNHCR. I would also like to receive an update on the referral
   decision.
2. As a UNICEF caseworker, I would like to use a third-party dashboard to
   visualize integrated child protection-related indicators.

## Integration Options

Data integration via the Primero web API:  
https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api

### Sample HTTP requests

**Authentication:**  
`POST /api/v2/tokens`

```js
{
  "user": {
      "user_name": "primero",
      "password": "mysecretpassw0rd"
    }
}
```

(This authentication step is handled in the OpenFn Primero adaptor.)

**Show a paginated list of all cases that are accessible to this user:**  
`GET /api/v2/cases`

**List all referrals that took place for a record:**  
`GET /api/v2/cases/:id/referrals`

See the examples section more sample Primero jobs.

### Integration tips

- Data forwarding can be enabled in Primero. There is a webhook that can forward
  case information to a designated URL endpoint (e.g., OpenFn Inbox). This feature requires a backend configuration update that the Primero support team can help with. The data
  forwarding can happen automatically on insert of a new case, as well as
  on-demand when a user clicks the `Sync` button (which may be added to the page
  layout if this feature is in use).
- Each Primero `case` has a `case_id` which can be used as an external
  identifier in the destination system.
- Each Primero case also has a `record_id` which is the id in the URL for each
  case
- It is helpful to set up a job that only fetches a case from Primero like the
  one
  [here](/adaptors/library/jobs/auto/Get-cases-from-Primero-2021-09-23/#expression).
  This job can come in handy when it's time to test and troubleshoot your
  solution and validate any test data that was setup in Primero.

## Common Errors

`Invalid Record JSON`: This error message means that the request is either
missing fields or sending fields differently from how Primero expects them.
Revisit your mapping specifications document to ensure all fields are being sent
properly.  
`500 Server errors`: This message signals that the server failed to fulfill your
request. Contact the system administrator for assistance.

## OpenFn Adaptors

OpenFn implementations can leverage both the
[`HTTP`](https://github.com/OpenFn/language-http) and
[`Primero`](https://github.com/OpenFn/language-primero) adaptors to connect with
the Primero API.

NOTE: That the Primero Adaptor has versions to support both Primero API V2 and
Primero API V1 (to be deprecated).

## Implementation Examples

1. Cambodia: MoSVY Primero < > OSCaR NGOs:
   https://github.com/OpenFn/unicef-cambodia
2. Cambodia: UNICEF Primero < > ONA Dashboard sync:
   https://github.com/OpenFn/primero-ona-dashboard/
3. Gambella: UNICEF Primero < > UNHCR Progres:
   https://github.com/OpenFn/primero-progres
4. Thailand: UNICEF Primero < > MoPH HIS:
   https://github.com/OpenFn/primero-thailand


### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
