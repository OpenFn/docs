---
title: Salesforce
---

## Salesforce Integration Options

1. APIs: Salesforce has a robust set of RESTful APIs that support a wide range
   of operations. See OpenFn API adaptor
   [`language-salesforce`](https://github.com/OpenFn/language-salesforce).
2. Webhook: Using
   [`Outbound Messages`](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm)
   and workflow automation, admins can configure notifications to be sent to
   OpenFn when a specific event occurs.

## Salesforce Credentials

Salesforce requires a username, password, login URL, and security token to
authenticate via a user. **Note every time you reset the user's password, the
security token will reset and you need to update the Credential record used in
your OpenFn job.**

![Credentials Menu](/img/credentials.png)

A "Salesforce" Credential record should include:

- Username
- Password
- Security Token (Salesforce will email you this when you set your password. If
  you cannot find "security token" in your inbox, see below for how to reset
  it.)
- Login URL: If a production system, use `https://login.salesforce.com/` (unless
  you have a custom domain `https://domainName.salesforce.com/`). For sandbox
  environments, `https://test.salesforce.com/`.

![Salesforce Cred](/img/salesforce-cred.png)

For **OpenFn/devtools** or **OpenFn/engine** the raw JSON of the credential for
inclusion in `state` should look like this:

```json
"configuration": {
  "loginUrl": "https://login.salesforce.com/",
  "username": "openfn@salesforce.org",
  "password": "testing123",
  "securityToken": "Mh4gkye9BVZA9dDjD61Fnd1ba"
},
```

### Resetting Your Security Token

[See instructions here](https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5)
or below screenshot. Once reset, you will receive an email from Salesforce.
Please save this `security token` in your OpenFn `Credential`.

![Token Reset](/img/security-token.png)
