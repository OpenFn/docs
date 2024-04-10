---
title: Automated Migration
sidebar_label: Automated Migration
slug: /automated-migration
---

You can use our `export and deploy` functionality to automatically migrate your
existing project from v1 to v2. This guide walks you through the steps.

### Automated Migration Overview

You can export your existing project configuration containing the jobs and
triggers from v1, then use the OpenFn
[CLI](https://github.com/OpenFn/kit/tree/main/packages/cli) tool to deploy it to
your v2 project space. To start, make sure you have the latest version of the
CLI installed. To learn more about the project configuration as code, head over
to our [Portability](../deploy/portability.md) page.

In order to be able to deploy the project, you need to have at least Admin
access to the v2 project you're deploying to.

### Exporting Your v1 Project

1. Navigate to `Project Settings` on your https://v1.openfn.org/ project.
2. Click `Export Config` under the Project Configuration section and choose
   `Export for v2 (migrate)`. You'll receive a download link by email, and you
   can also access the link from the `Downloads` menu.
3. Save the downloaded `project.yaml` file on your computer.

### Setup and Deployment

4. Create a new `config.json` file with the content below. As the first item,
   paste your v2 API key. [This page](../manage-users/api-tokens.md) shows you
   have to create one. `specPath` is the path to the downloaded `project.yaml`
   file. You can keep `statePath` as the default below. Finally, `endpoint` is
   the address of the v2 instance. If you're using our hosted solution, keep it
   as "https://app.openfn.org".

```json
{

    "apiKey": {"your-v2-api key"},

    "specPath": "4474_2024045092123Z_v2_project.yaml",

    "statePath": ".state.json",

    "endpoint": "https://app.openfn.org"
}

```

5. It's time to use the CLI. First you need to pull the config of your v2
   project. Start by copying the project ID from the URL of your v2 project like
   so:

![Project ID](/img/projectid.png)

6. Then use the `openfn pull` CLI commmand with the project ID and the path to
   your `config.json` file created above.

```
PS D:\Documents\OpenFn\rita-test> openfn pull b719a0f8-a455-4328-8e12-6f0d12020786 -c config.json
```

This will create a new `project.yaml` file and a `.state.json`.

7. Now you have your v2 project config with any jobs that may have been set up.
   To add the config from v1, take your exported `project.yaml`, copy everything
   from under `workflows:`

![Select Workflows](/img/select_workflow_to_add.png)

8. And append it to the end of the newly created `project.yaml`.

![Existing Workflows](/img/migration_existing-workflows.png)

![Workflows Added](/img/migration_workflow_pasted.png)

9. Finally, to deploy the entire config to v2:

```
PS D:\Documents\OpenFn\rita-test> openfn deploy -c .\config.json
```

When prompted, confirm deployment by typing `y`.

10. Verify the new config on your v2 project. For an overview of all the
    neccesary migration steps, check out
    [this page](../migration/migration-steps.md).
