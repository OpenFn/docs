---
title: Google Drive Adaptor
---

## About Google Drive

[Google Drive](https://www.google.com/drive/) is Google's cloud-based file storage and synchronization service that allows users to store files online and access them from any computer or mobile device. Google Drive provides secure cloud storage, real-time collaboration capabilities, and seamless integration with Google Workspace applications including Docs, Sheets, and Slides.

## Integration Options

**REST API**: Google Drive provides comprehensive REST APIs through the Google Drive API, enabling developers to create, read, update, and manage files and folders programmatically. The API supports OAuth 2.0 authentication and provides access to metadata, content manipulation, and sharing permissions management.

## Authentication

Google Drive uses OAuth 2.0 access tokens for API authentication:


### OAuth2

To authorize Google Drive using OAuth2 for your OpenFn workflows, read our documentation on
[using OAuth credentials](/documentation/build/credentials#use-oauth2-credentials).

![Google Drive OAuth credential](/img/googledrive-oauth2.webp)

### Access Token

If you need to test the adaptor locally you, you can generate a 1hour token using gcloud cli, then provide the token directly:

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"
}
```

Access tokens provide scoped access to Google Drive resources based on the permissions granted during the OAuth flow.

![Google Drive access token credential](/img/googledrive-access-token.webp)

### Using a Google Service Account

We recommend using a
[Google Service Account](https://cloud.google.com/iam/docs/service-accounts-create)
instead of a personal user OAuth credential. Service accounts are designed for
machine-to-machine access and do not require a human login or interactive
consent flow, making them more reliable and auditable for integration workflows.

When setting up a service account for Google Drive:

- Grant only the scopes your workflow requires, following the principle of
  least privilege. See
  [Google's documentation on OAuth scopes](https://developers.google.com/identity/protocols/oauth2/scopes#drive)
  for the available Drive scopes.
- Share the specific Drive folder(s) or file(s) with the service account's
  email address (e.g. `my-service-account@my-project.iam.gserviceaccount.com`)
  at the appropriate permission level (Viewer for read-only, Editor for write
  access).

See the [Credentials page](/documentation/build/credentials#creating-a-dedicated-integration-user-for-your-openfn-workflow)
for broader guidance on why dedicated integration users and service accounts are
recommended for all OpenFn workflows.



## Helpful Links


- [Google Drive API Documentation](https://developers.google.com/drive/api)
- [OpenFn Google Drive Adaptor Configuration](https://docs.openfn.org/adaptors/packages/googledrive-configuration-schema)
- [OpenFn Google Drive Adaptor Docs](https://docs.openfn.org/adaptors/packages/googledrive-docs)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
