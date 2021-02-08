---
title: Generic Data Sources
sidebar_label: Generic Sources
---

## Standard webhook configuration

This section describes how to enable push notifications from selected source
applications or how to configure pull jobs to fetch data from those sources. If
you don't see yours in the alphabetical list below feel free to add it with a
pull request.

Every OpenFn project has a unique **Inbox URL** address that can be used as an
endpoint for any JSON webhook. To set up a data source, configure that source to
make a POST over HTTPS to your Inbox URL. See [Your Inbox](/build/inbox.md).

To connect an application with standard JSON webhooks, copy your inbox URL from
the "Inbox" page or your "Project Settings" screen and use it as the destination
URL on your source application. Unless you have specifically configured it on
the "Access & Security" page, no authentication is required.

**_N.B.: This is by no means an exhaustive list._** It is merely a list of
common sources that external contributors have added. Remember that anything
with a REST api or a JSON-based notification service can be used with OpenFn.
