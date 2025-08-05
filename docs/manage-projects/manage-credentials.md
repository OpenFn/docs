---
title: Manage Credentials
---

You can view the Credentials related to a Project under the Project
`Settings > Credentials` page. In this article, you'll learn how to manage your
credentials related to a project.

## View all Project Credentials

Via this `Credentials` page, you can see a list of all Credentials, including
the name, type, and owner, and whether they are for a production environment.

![Credentials Overview](/img/lightning_credentials_overview.webp)

:::info Viewing credential secrets

All Project Collaborators can view the credential name, type, and owner, but
only the Credential Owner can view the credential secrets (username, password,
etc.).

:::

## Create a new Credential

1. Click on the `New Credential` button, and choose the type of app you want to
   connect.
2. If your app is not listed, choose "Raw JSON" to create your own custom
   credential or "configuration" input. For example:

```json
{ "loginUrl": "https://random-app.com", "username": "test", "password": "pwd" }
```

![Credential Type](/img/lightning_choose_cred_type.webp)

3. Click `Configure Credentials` and add the authentication details for your
   app. The credential form will indicate which fields are required.

![Add Credential](/img/lightning_add_cred.webp)

:::tip Not sure how to fill in all credential details?

While creating a new credential form, if you're not sure what some of these
fields require (e.g., "security token"), then head over to the relevant
`Adaptors` docs page to learn more and read about the "configuration schema" or
ask on [Community](https://community.openfn.org).

:::

3. Click `Save` and you'll see it listed in your `Credentials` page. You can now
   use it across the Project when building and running Workflows.

![New Credential Ready](/img/lightning_new_cred_ready.webp)

## Keychain Credentials (Variable Auth)

Keychain credentials allow for a single job to make use of multiple credentials.
They work by inspecting the data in the job's runtime state (i.e., state.data)
and checking for the value of a predetermined identifier. Based on that value,
present in the data for a given source message, for example, another credential
will be selected and applied for that particular job run.

Keychain credentials allow for a single job to make use of multiple credentials.
They work by inspecting the data in the initial input for a given run (e.g.,
state.data) and checking for the value of a predetermined identifier.

Imagine you have 2 credentials in your project:

1. Taylor’s Login, External ID: abc123, Body:
   `{ username: “tay”, password: “shhhhh” }`

2. Roina’s Login, External ID: def456, Body:
   `{ username: “ro”, password: “veryshh” }`

And a job that uses a “Keychain Credential” with a path of `$.data.myId`.

If a job in your workflow uses the “Keychain Credential” and the initial
dataclip for a given run looks like this:

```json
{
  "data": {
    "content": "Hello world",
    "myId": "abc123"
  }
}
```

Then the keychain credential will search for abc123 in your project credentials
and provide those secrets to the same job. I.e., the will run with the “Taylor’s
Login” credential.

If another run is executed, and the initial dataclip for that run is:

```json
{
  "data": {
    "content": "Goodbye!",
    "myId": "def456"
  }
}
```

The same job will run with the “Roina’s Login” credential.

:::info Notes & Limitations

Since credential secrets are fetched at the start of a run (not the start of a
step) it’s not currently possible to resolve keychain credentials based on data
that is added to state later in a run. I.e., the data must be present in the
input dataclip for the whole run, not the input dataclip of the step that uses
the keychain credential. :::

## Create a Keychain Credential

1. On the `Credentials` page under project settings, click on the dropdown icon
   on the `Add New` button to select the Keychain option:
   ![](/img/keychain_credential_dropdown.webp)
2. Name your keychain credential and assign it a JSONPath expression. You can
   also select a default credential to use when the JSONPath expression doesn't
   match:

![](/img/keychain_modal.webp)

3. To assign an external ID for your keychain by creating a new credential or
   editing an existing credential: ![](/img/assign_externalID.webp)

4. Now on a job in your workflow, you are able to select and use a keychain
   credential: ![](/img/keychain_selection.webp)

5. You can now reference your keychain in your input to use it:
   ![](/img/keychain_input.webp)

## Share Credentials

If you own a Credential, you can choose which Project has access to it. To
update which Projects your Credential is shared with, follow the steps on the
[User Credentials docs page](/documentation/user-credentials).

## `Raw JSON` Credentials

Raw credentials are valid JSON documents which are passed into a job's runtime
state. Note that owners of these credentials will be able to view them, in their
entirety, in the clear.

Raw credentials will work with any adaptor, so long as that adaptor's required
`configuration` keys (e.g., `baseUrl`) are specified in your credential. See the
"configuration schema" docs for each adaptor to see what is required for that
app.

:::info Use `Raw JSON` to specify custom credential inputs

Use the `Raw JSON` credential type if you would like to store secrets that are
not standard inputs in an adaptor's credential form. For example, if my REST API
requires a `client_id` instead of a `username`, then my `configuration` schema
might look like the below code snippet. Because `client_id` isn't an option in
the default `Http` credential form, I can create my own custom credential using
the `Raw JSON` type.

:::

Example Raw JSON credential body or `configuration`:

```json
{
  "baseUrl": "https://myapp.com/api",
  "client_id": "test-j01",
  "password": "testing123",
  "customInput": "whateverYouWant"
}
```
