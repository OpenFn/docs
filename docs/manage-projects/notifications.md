---
title: Failure Notifications and Digests
sidebar_label: Email Notifications
slug: /notifications
---

If you would like to receive email `Notifications` when a Workflow Run fails or
emailed summary `Digests` on activity across your project, read on to learn how
to configure your project settings accordingly.

This article walks you through how to set up email notifications to monitor your
workflows.

### Failure Alerts

You can enable failure alerts to receive email notifications when a run fails
under `Project Settings > Collaboration`. Failure alerts are off until you turn
them on, and you can only change your own settings.

![Failure Alert](/img/lightning_failure_alert.webp)

The email links to the failed work order, to the run and its logs, and to the
workflow's health page, where failures are grouped by error.

To avoid filling your inbox, you get at most 3 alerts for each workflow every 5
minutes. Later alerts in the same 5 minutes say in the subject line how many
times the workflow has failed.

![Failure Email](/img/lightning_failure_email.webp)

![Failure Run](/img/lightning_failed_run.webp)

### Email Digests

Also in `Project Settings > Collaboration`, you can choose to receive daily,
weekly or monthly email digests from a project, counting the successful and
failed work orders for each of your workflows. The digest is set to `Never`
until you change it.

Digests are sent at 10:00 UTC: daily digests every day, weekly digests on
Mondays, and monthly digests on the 1st of the month. Each digest links to the
matching runs on the History page and, if there were failures, to the workflow's
health page.

![Digest Email Setting](/img/lightning_digest.webp)

![Digest Email](/img/lightning_weekly_digest.webp)

:::note

If you want to adjust your notifications settings and you are a Collaborator on
more than 1 Project, then you will need to go to the
`Project Settings > Collaboration` page for _each_ Project you belong to.

:::
