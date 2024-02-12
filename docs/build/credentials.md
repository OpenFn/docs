---
title: Credentials
---

## Credentials

Credentials are used to authorize connections to destination systems. In the
future, our Adaptors will use credentials to fetch meta-data from source and
destination applications and make the job writing process easier.

Credentials can only be viewed, or edited by a single user — their "owner" (or
the person that created that credential). All the collaborators on a particular
Project can choose those credentials for use when defining a job.

![Credentials Page](/img/settings_credentials.png)

### Create a new Credential

You can create a new Credential while configuring a new Step in your Workflow,
or via the Settings > Credentials page.
[Read this](/documentation/next/manage-projects/manage-credentials) for more on
managing credentials.

### Understand the app-specific credentials

Check out the dedicated [Adaptor docs](/adaptors) page for your app to inspect
the `configuration schema` and see what credential details will be required to
authenticate with your app (e.g., `username`, `api_key`).

If your app is not listed in the Adaptors section, then inspect your app's API
documentation to see what is required for "authentication". You can then create
a `Raw JSON` Credential in OpenFn to define whatever credential inputs are
require (e.g., `{"api_key": "ADD-your-let", "url": "add-url"}`).

Some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl, host, or
ApiUrl. Leave off the final "/" in these Urls: `https://login.salesforce.com` or
`http://demo.openmrs.org/openmrs` or `https://play.dhis2.org`.
