---
title: MS Graph
---

### Overview

MS Graph is a REST API that allows you to access Microsoft Cloud products. After
you register your app and get authentication tokens for a user or service, you
can make requests to the MS Graph API.

### Adding an MS Graph client

OpenID configuration:
https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration

To create an MS Graph Client, you need to have an application registered. This
can be an existing application or a new application that can be registered in a
few minutes.

#### Obtaining Client ID and secret for an existing application

1. Open the [Azure portal](https://portal.azure.com). From the dashboard click
   `App services` to open the default directory or overview page. On the left
   menu, click `App registrations` to open the list of applications that have
   been registered.

![App Registration 1](/img/app_reg1.png)

2. On the app registration page, click on the `All Applications` tab to see all
   the applications you have access to.

![App Registration 2](/img/app_reg2.png)

3. Click on the preferred application from the list to see the application
   overview. From the menu, click on Certificates & secrets and select the
   Client secrets tab to manage client secrets for your application. To create a
   new one, click on the New client secret button.

##### Registering a new application to obtain client secret and ID

1. Go to the Azure portal: https://portal.azure.com On the dashboard,

2. Click “App Registrations” or if that’s not available, click App Services then
   “App Registrations” to add as a new resource

![App Registration 3](/img/app_reg3.png)

3. To create a new application:

- Provide the name of the application
- Select the account type (depending on the use case)
- Set the redirect URI to web and https://app.openfn.org/authenticate/callback
- Click `Register` to create the application

![App Registration 4](/img/app_reg4.png)

4. From the default directory, click on `App registrations` on the side menu to
   the list of applications you have registered.

![App Registration 5](/img/app_reg5.png)

5. From the list, select the application you have just registered to open it in
   detail.

![App Registration 6](/img/app_reg6.png)

6. From the menu, click on `Certificates & secrets` and select the
   `Client secrets` tab to manage client secrets for your application. To create
   a new one, click on the `New client secret` button.

![App Registration 7](/img/app_reg7.png)

7. Copy your client secret and client ID to create a new OAuth client on OpenFn.

8. Set API Permissions for scopes required by the application. Setting API
   permissions is a crucial step in registering an application because it helps
   to define the resources the application can access and what actions it can
   perform on behalf of users or the organization. To set API permissions, click
   on API permission on the left menu on the overview page.

![App Registration 8](/img/app_reg8.png)

9. On the API permissions page, click Add a permission to open the interface to select an API.

![App Registration 9](/img/app_reg9.png)

10. On this interface, you can select any of the available APIs provided by Microsoft. In this case, select Microsoft Graph.

11. Select permission type: depending on your application needs, you can choose between designated permissions and application permissions. Application permissions require admin consent while designated permissions require only user consent.

![App Registration 10](/img/app_reg10.png)

12. When you have selected the permission type, search and check the boxes to add the scopes you need.

![App Registration 11](/img/app_reg11.png)

13. When you’re done, click `Add Permissions` to complete.

Scopes:

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
