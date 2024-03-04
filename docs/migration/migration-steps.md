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
4. On v2, the jobs you use for automating tasks are organized in
   [Workflows](../tutorials/tutorial.md). Build out a skeleton to get started:
   set up [Triggers](../build/triggers.md) and the key
   [Steps](https://docs.openfn.org/documentation/build/steps) to get started.
5. Remember how you can use “On success” or “On failure” of another job to
   trigger a new one? V2 allows you to do just this, along with setting up
   custom conditions, using
   [Paths](https://docs.openfn.org/documentation/build/paths). Follow
   [our guide on converting your v1 triggers to v2](../migration/converting-triggers.md)
   to learn more.
6. You can now add job code. Check out our
   [detailed docs on building Workflows](../build/workflows.md) to learn more.
7. Create [Credentials(../build/credentials.md)] for your test and production
   systems.
8. For setup and testing, use your test system credentials in your Workflows.
9. Copy your job code from your GitHub repository or directly from your v1
   project and paste it into the jobs. Get familiar with the revamped Job
   Inspector for code editing [here](../build/steps/step-editor.md).
10. Add custom input and [run your workflow](../build/steps/step-editor.md) to
    start testing.
11. Check out the [History](../monitor-history/activity-history.md) page to
    monitor your Workflow runs.
12. Test and iterate.
13. Project version control/GitHub sync has also gone through some changes. To
    connect your project to GitHub, follow
    [this guide](../manage-projects/link-to-gh.md).

    a. Automated migration: It is possible to migrate an entire project from v1
    to v2 in an automated way. You can do this by going to Project Settings on
    v1, clicking `Export Config` and choosing `Export for v2 (migrate)`. You
    will receive a project.yaml file containing your entire project
    configuration with jobs and triggers. To migrate, commit this file to the
    Github repo you want to link to your v2 project, and set up the connection
    as described in the above guide. Your project configuration will be deployed
    to your v2 project.

    :::warning

    _BUG_: The v1 Export Config feature doesn’t work at the moment. For now, you
    can build your Workflows manually on v2 as described in steps 4-12 above.

    :::

    b. NOTE: Once the Github sync is live, consider that all changes will be
    synced with the project.yaml file. Therefore, any job changes made via
    Github, must be applied directly to this file. (Unlike the v1 Github sync,
    edits to individual job files will not sync to the OpenFn v2 app. Rather,
    all changes must be made in the project.yaml file or within the linked web
    app).

14. You may have other design decisions to make, too. For example, if your
    original v1 workflow uses Inbox in between steps, you might need to adjust
    configuration and design so that your jobs are linked together in one
    Workflow (1 Step for each Job you had in the v1 configuration).

15. If you’re using a Webhook Trigger, you can add an extra layer of security by
    requiring authentication. Note that if you do this, you will need to update
    the webhook configuration in the external app that points to OpenFn.
16. Fine-tune your security configuration by following our Project Security and
    Go-Live Checklist.
17. Test some more.
18. When all runs smoothly, switch to production systems from your test systems:
    update the credentials in your Workflows to point to production systems.
19. If webhooks are used, update endpoints in your production systems to point
    to your v2 OpenFn Workflows.
20. You can monitor usage on your
    [Workflows Dashboard](../manage-projects/workflow-dashboard.md).
21. You’re done with your new setup! You can now turn off your jobs on v1 and
    remove the GitHub connection there.
22. If you want to export your v1 data for reference or archival, get in touch
    with us at [support@openfn.org](mailto://support@openfn.org).
23. Finally, when ready, request to delete your project on v1. (The v1 platform
    will be sunsetted in 2025, and our team will provide regular updates until
    then.)
