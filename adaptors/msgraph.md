---
title: Microsoft Graph
---

### Overview

[Microsoft Graph](https://learn.microsoft.com/en-us/graph/overview) or "MS
Graph" is a REST API that allows you to access data and insights from data
stored within an Organization’s Microsoft 365 instance with access across
domains such as Microsoft Core Services, Enterprise Mobility + Security
Services, Windows Services, and Dynamics 365 Business Central services. The MS
Graph Rest API also allows authorized users to connect and build new
applications that deliver value to users within and outside the organization.

This MS Graph Adaptors allows OpenFn users to seamlessly authenticate and
integrate with the Microsoft 265 platform to access data or perform specific
workflow-driven operations on behalf of a tenant or a user within the Microsoft
365 instance. For example, the MSgraph Adaptor allows users to build OpenFn
Workflows to extract documents stored in SharePoint, create or update files, and
manage permissions. Another use case is building a workflow to connect with a
Microsoft user's emails, calendar, and contacts to read and manage specific
information directly.

### Authentication and Authorization

This adaptor requires OAuth authorization to connect with the MS Graph. This
authorization can be achieved by a user or organization admin consenting to an
OAuth client to access resources. Users can request authorization via the
default OpenFn Microsoft OAuth client or choose to Add new (generic) OAuth
client(s) for their account and projects. To authorize MS Graph for your OpenFn
workflows read our documentation on
[using OAuth credentials](/documentation/build/credentials#use-oauth2-credentials).

:::info

Setting up your own generic OAuth client requires that you have an OAuth
application set up. Please refer to Microsoft's documentation to
[configure an OAuth App](https://learn.microsoft.com/en-us/entra/identity/saas-apps/openidoauth-tutorial)
via Microsoft entra app gallery.

:::

#### Permissions (Scopes)

Permissions and access in an OAuth instance are defined by scopes which are
named differently by providers based on their functions within their platform.
For MS Graph, there are two types of scopes: Delegated permission and
Application Scopes. Delegated permissions are used by applications that sign in
a user and act on behalf of the signed-in user. These permissions require the
user to consent and are subject to the same data access restrictions as the user
within the organization. Application scopes, on the other hand, are used by
applications that run without a signed-in user. They require admin consent and
provide access to all data for an organization, typically used by background
services or daemons. OpenFn workflows and generic OAuth setup are compatible
with both the delegated and application scopes. Below is a list of commonly used
OAuth MS Scopes for your reference. **The scopes required will depend on your
use case, so please refer to the MS Graph documentation on
[OAuth Scopes](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc)),
and/or consult with your system administrator.**

1. _User scopes_:
   - `User.Read` (Read user profile)
   - `User.ReadBasic.All` (Read basic user profile)
   - `User.ReadWrite` (Read and write user profile)
   - `User.ManageIdentities.All` (Manage user identities)
2. _Mail scopes_:
   - `Mail.Read` (Read mail)
   - `Mail.ReadBasic` (Read basic mail)
   - `Mail.ReadWrite` (Read and write mail)
   - `Mail.Send` (Send mail)
3. _Calendar scopes_:
   - `Calendars.Read` (Read calendars)
   - `Calendars.ReadWrite` (Read and write calendars)
4. _Contacts scopes_:
   - `Contacts.Read` (Read contacts)
   - `Contacts.ReadWrite` (Read and write contacts)
5. _Files scopes_:
   - `Files.Read` (Read files)
   - `Files.ReadWrite` (Read and write files)
   - `Files.Read.All` (Read all files)
   - `Files.ReadWrite.All` (Read and write all files)
6. _Groups scopes_:
   - `Groups.Read.All` (Read all groups)
   - `Groups.ReadWrite.All` (Read and write all groups)
7. _Directory scopes_:
   - `Directory.Read.All` (Read directory)
   - `Directory.ReadWrite.All` (Read and write directory)
8. _Application scopes_:
   - `Application.Read.All` (Read applications)
   - `Application.ReadWrite.All` (Read and write applications)
9. _Other scopes_:
   - `offline_access` (Access resources even when the user is offline)
   - `openid` (Authenticate with OpenID Connect)

### Helpful links

- [MS Graph Overview](https://learn.microsoft.com/en-us/graph/overview)
- [MS Graph OAuth Scopes](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
