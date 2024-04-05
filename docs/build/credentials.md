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

If Oauth2 _clients_ have been configured on your OpenFn instance, you can use
them create Oauth credentials. These all work the same way:

1. First you pick an Oauth credential type from the "New Credential" interface.
2. Then you give it a name.
3. You optionally select additional "scopes" that you want to use. (See the
   in-app link to third-party documentation on scopes, depending on what
   application you're using.)
4. And then click "Sign in with \_\_\_\_\_\_".

You will be asked by the third-party application to verify your identity and
that you'd like to use Oauth. Once you accept, back on OpenFn you'll be able to
save and use your new credential just like any other.

:::tip

If you don't see an Oauth credential type available for your app, contact the
superuser who deployed your instance of OpenFn and ask them to set up some Oauth
clients for your app. Users of the OpenFn platform SaaS can post on
[community.openfn.org](https://community.openfn.org) or send an email to
[support@openfn.org](support@openfn.org).

:::

#### e.g., GoogleSheets Oauth Credential

Note the credential selects only required scopes for Google Sheets.

![Google Oauth](/img/google-oauth2.png)

#### e.g., Salesforce Oauth Credential

Note that you can choose which scopes to access on Salesforce.

![Salseforce Oauth](/img/salesforce-oauth2.png)

:::tip

Check out the dedicated [Adaptor docs](/adaptors) page for app-specific
credential guidance.

:::

### Creating a dedicated "integration user" for your OpenFn workflow
To keep target systems as secure and controlled as possible, we recommend that credentials used in the integration be granted API-only access to the target application. You _can_ use your personal user as an OpenFn credential for your workflow, but we recommend that you create a dedicated "OpenFn" integration user or service account user to access your target applications. 

This might not be available in every target system, but many do offer the creation of user roles that have API-only access permissions, and may allow you to determine the scopes for which APIs or endpoints users can access. 

API-only access minimizes risk of data breach. This helps with: 
- **Traceability**: Accessing with an integration user provides an audit trail of who logged in when and what changes were made. For example, if you used your personal user login for a system in an integration implementation, it would be hard to know if it was YOU, a human, who made a change vs. an automated system action via the API user. 

- **Minimizing breach impact**: The user can be deactivated if user is compromised, and no one can log in through the frontend with API credential if it’s breached. 

- **Ensuring the principle of least privilege**: Each integration user need only have access to the subset of data supporting its specific use case. 

Check out the docs on [Security Best Practices](/documentation/get-started/security) to learn more. 