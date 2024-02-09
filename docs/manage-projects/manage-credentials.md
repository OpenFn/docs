---
title: Manage Credentials
---

You can view the Credentials related to a Project under the Project
`Settings > Credentials` page. In this article, you'll learn how to manage your
credentials related to a project.

### View all Project Credentials

Via this `Credentials` page, you can see a list of all Credentials, including
the name, type, and owner, and whether they are for a production environment.

![Credentials Overview](/img/lightning_credentials_overview.png)

:::info Viewing credential secrets

All Project Collaborators can view the credential name, type, and owner, but
only the Credential Owner can view the credential secrets (username, password,
etc.).

:::

### Create a new Credential

1. Click on the `New Credential` button, and choose the type of app you want to
   connect.
   
2. If your app is not listed, choose "Raw JSON" to create your own custom
credential or "configuration" input. For example:

```json
{ "loginUrl": "https://random-app.com", "username": "test", "password": "pwd" }
```

![Credential Type](/img/lightning_choose_cred_type.png)

3. Click `Configure Credentials` and add the authentication details for your
   app. The credential form will indicate which fields are required.

![Add Credential](/img/lightning_add_cred.png)

:::tip Not sure how to fill in all credential details?

While creating a new credential form, if you're not sure what some of these
fields require (e.g., "security token"), then head over to the relevant
`Adaptors` docs page to learn more and read about the "configuration schema" or
ask on [Community](https://community.openfn.org).

:::

3. Click `Save` and you'll see it listed in your `Credentials` page. You can now
   use it across the Project when building and running Workflows.

![New Credential Ready](/img/lightning_new_cred_ready.png)

### Share Credentials

If you own a Credential, you can choose which Project has access to it. You can update project access on your `User Profile` - just follow the steps on the [User Credentials](https://docs.openfn.org/documentation/next/manage-users/user-credentials) docs page.