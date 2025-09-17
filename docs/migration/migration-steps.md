---
title: Migration Steps
sidebar_label: Migration Steps
slug: /migration-steps
---

In this article, we walk you through the steps of migrating your project from
OpenFn v1 to v2. Some of these steps may require you to make new design
decisions. For customized migration support, ask your questions on our
[Community](https://.community.openfn.org) or get in touch at
[support@openfn.org](mailto://support@openfn.org).

## Guide for migrating your v1 project to v2

1. Create a new Project on the v2 platform by registering for an account on the
   OpenFn-hosted platform ([register here](https://www.openfn.org/pricing) for
   free & paid plans) or deploy your own instance of
   [OpenFn/lightning](https://github.com/OpenFn/lightning).
2. [Customize your Project](../manage-projects/platform-mgmt.md) with a custom
   name and description.
3. Think about how long you want OpenFn to retain your input and output data and
   configure data storage accordingly.
   [See this page](../manage-projects/io-data-storage.md) to learn more.
4. Migrate your v1 project's `Jobs` configuration to the v2, as `Workflows`. See
   the below sections to determine if you prefer to automatically (recommended)
   or manually migrate your OpenFn configuration from your v1 to v2 project.
5. Create [Credentials](../build/credentials.md) for your test and production
   systems. **First test your Workflows using your "test" or "sandbox"
   credentials.**
6. Once your Workflow Steps are fully configured, add a new custom input and
   [run your workflow](../build/steps/step-editor.md) to start testing.
7. Check out the [History](../monitor-history/activity-history.md) page to
   monitor and review your Runs to confirm your Workflows are running
   successfully.
8. Test and iterate.
9. Once your Workflows are tested, sync your new v2 configuration to GitHub for
   version control. Follow [this guide](../manage-projects/link-to-gh.md) to
   learn how it works and set it up.

   :::warning Turn off GitHub sync on v1 before setting it up on v2 If you're
   using the same GitHub repo and branch for both your v1 and v2 project,
   disable GitHub sync on v1 _before_ you enable it on v2. Otherwise every
   change you still make on v1 will trigger a GitHub > OpenFn sync on v2,
   overwriting any changes you may not have synced yet from your v2 project to GitHub.

   :::

   :::warning GitHub sync works differently in v2

   Once the GitHub sync is live, consider that all changes will be synced with
   the `project.yaml` file. Therefore, any job changes made via GitHub, must be
   applied directly to this file. (Unlike the v1 GitHub sync, edits to
   individual job files will not sync to the OpenFn v2 app. Rather, all changes
   must be made in the `project.yaml` file or within the linked web app.)

   :::

10. You may have other design decisions to make, too. For example, if in your v1
    project, you may have a workflow where Job #1 sends a http `post` request
    with data to your Project's Inbox, which then triggers a Job #2 (or step 2
    in your workflow). In v2, the Project Inbox does not exist, so we recommend
    that your re-configure Job #1 and #2 as one combined Workflow with 2 Steps
    (1 Step for each Job you had in the v1 configuration).

    Note that in v2 you can still configure one Workflow to trigger another
    Workflow via a `post` request, but we recommend this should only be done if
    the processes are truly distinct and not part of one workflow. The
    1-Workflow design will also help to minimize costs and complexity.

11. If your Workflows use a Webhook Trigger, you can add an extra layer of
    security by requiring webhook authentication
    ([see relevant docs](../manage-projects/webhook-auth.md)). Note that if you
    do this, you will need to update the webhook configuration in the external
    app that points to OpenFn.
12. Fine-tune your security configuration by following our
    [Project Security and Go-Live Checklist](https://docs.google.com/document/d/1XtiiKszeK5MAltPyqvlL4KCjkHC87YYlX8OPh6fZn4c/edit?usp=sharing)
    to consider other v2-specific security features
    ([such as input/output data storage](docs/manage-projects/io-data-storage.md)).
13. Test some more to validate the correct configuration, especially if you've
    adjusted your Project Settings.
14. When all Workflows run successfully, update each Step in your Workflows to
    use a "production" Credential to connect to live systems.
15. While you're testing, you may be using [Path Conditions](../build/paths.md)
    to allow only test data, such as `test_case == yes`. If you then want to
    exclude test data from your production systems, don't forget to update edge
    conditions, eg. `test_case == no`. Check out [this
    guide(https://docs.openfn.org/documentation/converting-triggers#converting-message-filters)]
    for a specific example.
16. If webhooks are used in your source applications, update the webhook
    configurations in these apps to point to your v2 OpenFn Workflows (you can
    locate your Workflow's new webhook endpoint URL by clicking n the Trigger).
17. You’re now done with your new v2 Project setup! You can "turn on" your
    Workflows and monitor usage on your
    [Workflows Dashboard](../manage-projects/workflow-dashboard.md). Now time to
    shut down your v1 project.
18. Turn "off" your Jobs on v1.
19. You have the option to export some of your v1 data: `Messages` and
    `Run History` for reference or archival. To do this, visit the `Downloads`
    page in your v1 project. Your most recent downloadable `receipts archives`
    and `runs archives` are at the bottom of the export list. You can generate a
    new export by navigating to the `Inbox` or `Activity History` page,
    filtering your view to query the desired data to export, and then select the
    cloud ☁ icon to `Export to csv`.
20. Finally, when ready, request to delete your project on v1. To do this, go to
    your v1 `Project Settings` and select the `Delete Project` button.

:::tip
[See this XLS checklist](https://docs.google.com/spreadsheets/d/1pTw5_PZ0RNad-haqw_ydel5ka4ezSxcfF71un7Sga5I/edit?usp=sharing)
of the above migration steps to help manage your migration. If you encounter
questions or issues, post on the [Community](https://community.openfn.org).

:::

## How to automatically migrate your OpenFn project configuration to v2

Check out our docs on
[Self-Guided Migration](../migration/automated-migration.md) to learn more about
how to _automatically_ migrate your configuration from v1 to v2. **This is the
recommended process** but requires admin-level user access to both your v1 and
v2 Projects.

### How to manually migrate your OpenFn project configuration to v2

1. On v2, the Jobs you use for automating tasks are organized as
   [Workflows](../tutorials/tutorial.md), where each Job is 1 "Step" in a
   Workflow. Build out a skeleton to get started: set up
   [Triggers](../build/triggers.md) and the key
   [Steps](https://docs.openfn.org/documentation/build/steps) to get started.
2. While configuring the Steps in your workflow, consider _which conditions_
   define when the next Step should execute. On v2, you can define
   [Path conditions](https://docs.openfn.org/documentation/build/paths) to
   configure whether a Step should run "on success", "on failure", or based on
   custom logic. Follow
   [our guide on converting your v1 "triggers" to v2 configuration](../migration/converting-triggers.md)
   to learn more.
3. Once the basic Steps and Paths are configured, copy your job code from your
   GitHub repository or directly from your v1 project and paste it into each
   Step's Inspector view. Get familiar with the revamped Job Inspector for code
   editing [here](../build/steps/step-editor.md).
4. Make sure the Adaptor and Adaptor Version match your v1 jobs exactly. See the
   [Steps docs](../build/steps/step-editor.md) for more info on these.

:::info

The OpenFn v1 platform will be sunsetted in 2025. If you need support migrating
your project, post on [Community](https://community.openfn.org) or contact
[support@openfn.org](mailto://support@openfn.org) for paid support options and
private queries.

:::
