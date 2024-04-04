---
title: Credentials
---

## Credentials

Credentials are used to authorize connections to external systems. Some Adaptors
will use credentials to fetch meta-data from source and destination applications
and make the job writing process easier.

Credentials can only be viewed, or edited by a single user — their "owner" (or
the person that created that credential). All the collaborators on a particular
Project can choose those credentials for use when defining a job.

![Credentials Page](/img/settings_credentials.png)

### Create a new Credential

You can create a new Credential while configuring a new Step in your Workflow,
or via the Settings > Credentials page.
[Read this](/documentation/manage-projects/manage-credentials) for more on
managing credentials.

### Understand the app-specific credentials

Check out the dedicated [Adaptor docs](/adaptors) page for your app to inspect
the `configuration schema` and see what credential details will be required to
authenticate with your app (e.g., `username`, `api_key`).

If your app is not listed in the Adaptors section, then inspect your app's API
documentation to see what is required for "authentication". You can then create
a `Raw JSON` Credential in OpenFn to define whatever credential inputs are
required. E.g.:

```json
{
  "api_key": "someSecretKey",
  "base_ur": "https://example.com/api/v2"
}
```

Note that some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl,
host, or ApiUrl. While most adaptors will handle a "trailing slash" in a URL
gracefully, when in doubt you should leave it off. For example:

- prefer `https://login.salesforce.com` to `https://login.salesforce.com/`,
- use `http://demo.openmrs.org/openmrs` instead of
  `http://demo.openmrs.org/openmrs/`,
- and write `https://play.dhis2.org` rather than `https://play.dhis2.org/`.

### Use Oauth2 credentials

If Oauth2 _clients_ have been configured on your Lightning instance, you can use
them create Oauth credentials. These all work the same way:

1. First you pick an Oauth credential type from the "New Credential" interface.
2. Then you give it a name.
3. You optionally select additional "scopes" that you want to use. (See the
   in-app link to third-party documentation on scopes, depending on what
   application you're using.)
4. And then click "Sign in with \_\_\_\_\_\_".

You will be asked by the third-party application to verify your idenityt and
that you'd like to use Oauth. Once you accept, back on OpenFn you'll be able to
save and use your new credential just like any other.

:::tip

If you don't see any Oauth credential types, contact the superuser who deployed
your instance of Lightning and ask them to set up some Oauth clients.

:::

#### e.g., GoogleSheets Oauth Credential

Note you've only got required scopes for Google Sheets.

![Google Oauth](/img/google-oauth2.png)

#### e.g., Salesforce Oauth Credential

Note that you can choose which scopes to access on Salesforce.

![Salseforce Oauth](/img/salesforce-oauth2.png)
