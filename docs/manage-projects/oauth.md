---
title: OAuth Authentication
sidebar_label: OAuth Authentication
slug: /oauth
---

Some applications require OAuth as an authentication method for connecting with
third party applications making requests via their APIs. This guide walks you
through how to set up and manage OAuth clients.

### OAuth Authentication

Some applications require [OAuth](https://oauth.net/2/) as an authentication
method for connecting with third-party applications and making requests via
their APIs. OpenFn allows you to connect with applications using their OAuth
authentication. To use this feature in your OpenFn workflows, you need to set up
OAuth clients and credentials for your instances or projects. This guide walks
you through the management of OAuth clients and credentials.

### Setting up an OAuth client

#### What is an Oauth Client and when do I need it?

By setting up OAuth for an application, you authorize OpenFn to connect and
interact with this application within a set of scopes defined by you. For
example, you might set up an OAuth authorization for OpenFn to connect
to your Google Sheets account to read and track changes on your behalf. In this
example, you need to set up an OpenFn client that will represent an instance of
OpenFn on Google and will hold all the permissions OpenFn needs on your behalf.
All API requests and responses are managed through the OpenFn client and
authorized by an authorization token stored by the client.

In most cases, one client setup might be sufficient for one application but
depending on the project requirements and organization policy, several clients
might be set up for one application. These clients might be owned by the same or
different OpenFn users and accessible to different projects.

For every application you need to connect to OpenFn, you need to set up at least
one client for your project(s).

Oauth clients can be set up either on the [project credentials page](../manage-projects/manage-credentials.md) or the [user credentials page](../manage-users/user-credentials.md). 

### Creating an OAuth client 

:::note
Currently only users with [super user privileges](https://docs.openfn.org/documentation/manage-projects/user-roles-permissions#super-user-privileges) can create OAuth clients.
::: 