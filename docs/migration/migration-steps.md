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

## Overview of Migration from v1 to v2

1. Register at https://app.openfn.org/
2. [Customize your project space](../manage-projects/platform-mgmt.md) with a
   custom name and description.
3. Think about how long you want OpenFn to retain your input and output data and
   configure data storage accordingly.

4. **Automated migration**: It is possible to migrate an entire project from v1
   to v2 in an automated way. You can do this by going to Project Settings on
   v1, clicking `Export Config` and choosing `Export for v2 (migrate)`. You will
   receive a `project.yaml` file containing your entire project configuration
   with jobs and triggers. Set up Github sync for your v2 project following
   [this guide](../manage-projects/link-to-gh.md). Then, to migrate, commit the
   exported `project.yaml` file to the Github repo you want to link to your v2
   project, and iniate a sync. Your v1 project configuration will be deployed to
   your v2 project.

:::warning

_BUG_: The v1 Export Config feature doesn’t work at the moment. For now, you can
build your Workflows manually on v2 as described in steps 5-13 below.

:::

5. On v2, the jobs you use for automating tasks are organized as
   [Workflows](../tutorials/tutorial.md), where each Job is 1 "Step" in a
   Workflow. Build out a skeleton to get started: set up
   [Triggers](../build/triggers.md) and the key
   [Steps](https://docs.openfn.org/documentation/build/steps) to get started.
6. While configuring the Steps in your workflow, consider which _which
   conditions_ define when the next Step should execute. On v2, you can define
   [Path conditions](https://docs.openfn.org/documentation/build/paths) to
   configure whether a Step should run "on success", "on failure", or based on
   custom logic. Follow
   [our guide on converting your v1 "triggers" to v2 configuration](../migration/converting-triggers.md)
   to learn more.
7. Once the basic Steps and Paths are configured, copy your job code from your
   GitHub repository or directly from your v1 project and paste it into each
   Step's Inspector view. Get familiar with the revamped Job Inspector for code
   editing [here](../build/steps/step-editor.md).
8. Make sure the Adaptor and Adaptor Version match your v1 jobs exactly. See the
   [Steps docs](../build/steps/step-editor.md) for more info on these.
9. Create [Credentials](../build/credentials.md) for your test and production
   systems. **First test your workflows using your "test" or "sandbox"
   credentials.**
10. Once the Steps are fully configured, add a new custom input and
    [run your workflow](../build/steps/step-editor.md) to start testing.
11. Check out the [History](../monitor-history/activity-history.md) page to
    monitor and review your Workflow runs.
12. Test and iterate.
13. Once the Workflow is validated, back up your configuration to Github. Follow
    [this guide](../manage-projects/link-to-gh.md) to learn how it works and set it up.

    :::tip

    Once the Github sync is live, consider that all changes will be synced with
    the project.yaml file. Therefore, any job changes made via Github, must be
    applied directly to this file. (Unlike the v1 Github sync, edits to
    individual job files will not sync to the OpenFn v2 app. Rather, all changes
    must be made in the `project.yaml` file or within the linked web app).

    :::

14. You may have other design decisions to make, too. For example, if your
    original v1 workflow uses a post request to an OpenFn Inbox in between
    steps, you should adjust your design so that your jobs are linked together
    in one Workflow (1 Step for each Job you had in the v1 configuration). (You
    can still execute another workflow via post request, but this is suboptimal
    in v2—slower and more costly.)

15. If you’re using a Webhook Trigger, you can add an extra layer of security by
    requiring authentication
    ([see relevant docs](../manage-projects/webhook-auth.md)). Note that if you
    do this, you will need to update the webhook configuration in the external
    app that points to OpenFn.
16. Fine-tune your security configuration by following our
    [Project Security and Go-Live Checklist](https://docs.google.com/document/d/1XtiiKszeK5MAltPyqvlL4KCjkHC87YYlX8OPh6fZn4c/edit?usp=sharing)
    to consider other v2-specific security features
    ([such as input/output data storage](docs/manage-projects/io-data-storage.md)).
17. Test some more.
18. When all workflows run smoothly, update each Step to use a "production"
    credential to connect to live systems.
19. If webhooks are used in your source applications, update endpoints in your
    production systems to point to your v2 OpenFn Workflows.
20. You’re now done with your new v2 setup! You can monitor usage on your
    [Workflows Dashboard](../manage-projects/workflow-dashboard.md). Now time to
    shut down your v1 project.
21. Turn off your jobs on v1 and remove the GitHub connection there.
22. If you want to export your v1 data for reference or archival, get in touch
    with us at [support@openfn.org](mailto://support@openfn.org).
23. Finally, when ready, request to delete your project on v1. To do this, go to
    your v1 `Project Settings` and select the `Delete Project` button.

:::info

The OpenFn v1 platform will be sunsetted in 2025. If you need support migrating
your project, post on [Community](https://community.openfn.org) or contact
[support@openfn.org](mailto://support@openfn.org) for paid support options.

:::
