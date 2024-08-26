---
title: Version Control
sidebar_label: Version Control (GitHub Sync)
slug: /link-to-GitHub
---

The version control (GitHub Sync) feature lets users track and manage changes
to their OpenFn projects in GitHub. GitHub Sync enables a 2-way sync between
your OpenFn project and your GitHub repository. By 2-way sync, we mean that you
can **sync changes made to your project on OpenFn to GitHub**, and you can
**deploy changes you've made to your project on GitHub to OpenFn**.

:::info For Cloud Hosted OpenFn Users

GitHub Sync is only available in projects that are subscribed to Core, Growth,
Scale or Custom plans on Cloud Hosted OpenFn. Users can however connect their
OpenFn account to GitHub by authenticating OpenFn to access their GitHub account
by navigating to `User Profile` page and clicking ` Connect your GitHub
Account".

:::

### Configuring your project to use GitHub Sync

Users are able to configure their projects to have access to one or more
repositories on GitHub. To enable sync, the OpenFn project requires a repository
where a GitHub OpenFn application is installed and users are required to have
administrative access to the repositiory.

To configure your project to use Github sync, follow the following steps:

1. Navigate to `Project Settings > Sync to GitHub` .

2. If you have not already connected your OpenFn user account to GitHub, do so
   by clicking the **"Connect your OpenFn account to GitHub"** button.

![Configure](/img/connect-account-to-github.png)

3. Choose which GitHub installation to use for your project or follow tip below
   to update your installations.

   :::tip

   If you don't see any installations, or those installations don't have access
   to the repositories you want, click the **"Create/update GitHub installations
   or modify permissions"** link to manage the OpenFn Installation on GitHub.
   This would require you to grant permissions for OpenFn App to access your
   GitHub account and repository. See
   [Managing Github permissions](#managing-github-permissions) for help.

   When you're done, you can come back here and refresh the lists with the 🔄
   button next to the dropdown lists.

   :::

4. Choose your preferred repository and branch you'd like to connect your
   project

![Configure](/img/github-options.png)

5. **_Optionally_**, if you _first want to sync from GitHub to OpenFn and
   already have config file_, add a filepath to an existing project
   `config.json` file.

   :::caution Most users leave "Path to config" blank.

   This advanced feature allows you to connect to a GitHub repo that _already_
   has an OpenFn `project.yaml` and `config.json`. (Most people can skip this
   step.) It's useful when you want the first sync to pull data from GitHub into
   OpenFn. Most users opt to have the first sync come _from_ OpenFn and let the
   app set up the required `config.json` and `project.yaml` files for them.

   :::

6. Choose the **direction** of the very _first_ sync action. I.e., when this
   connection is established, do you want the integration to _first_ send a copy
   of your OpenFn project to GitHub, or _first_ overwrite your existing OpenFn
   project with an existing `project.yaml` from GitHub?

   :::warning Choosing to _first_ deploy from "GitHub to OpenFn" is destructive

   By default, we take what you've got in your current OpenFn project and send
   it to GitHub to start the version control process. If you choose to instead
   take an existing `project.yaml` file from GitHub and overwrite your current
   OpenFn project, you won't be able to recover your existing workflows on
   OpenFn. This is feature that covers certain advanced use-cases, and unless
   you know what you're doing you should start by syncing from "OpenFn to
   GitHub".

   :::

7. Click **"Connect Branch & Initiate First Sync"** to finish. When you've done
   this, you can head over to GitHub (via the link provided) to view (and start
   working with) your OpenFn project as code.

## Managing GitHub Permissions

Granting the OpenFn app access to your GitHub repositories happens _in GitHub_,
not in OpenFn. We provide a link to install/manage these permissions via the
interface. After clicking that link, you can follow the steps below:

1. Click **"Configure"** or **"Install"**.

![Configure](/img/lightning_gh_configure.png)

2. Then select the GitHub account that owns the repository you want to connect
   to.

![Install](/img/lightning_gh_install_openfn.png)

3. Select the repository to sync with and hit **"Save"**.

![Permissions](/img/lightning_gh_permissions.png)

4. When you're done making changes on GitHub, head back to OpenFn and refresh
   the connection lists with the the 🔄 button next to the drop down list of
   available installations.

## Using Version Control & Managing Changes

The `Sync to GitHub` feature makes use of GitHub actions to automatically deploy
(after a commit on GitHub) or pull (when **"Initiate Sync to Branch"** button is
clicked on OpenFn) project changes to keep a repository in sync with your OpenFn
project.

### Sync from OpenFn to GitHub

This sync pushes changes from your OpenFn project to GitHub. This sync operation
will trigger a `openfn pull` action workflow on your connected Github repository
, which will pull the latest configuration from the OpenFn app and save it as
code in the `project.yaml` file on your repository.

:::info

Your OpenFn project can be represented as code and packaged as project.yaml
which is called the prokect spec. See the
[portability documentation](/documentation/deploy/portability) to learn more.

::: To configure your project to sync to GitHub, follow these steps:

1. Go to the Project where you made edits to your Workflow(s), and then navigate
   to the `Project Settings` page
2. From the project settings, navigate to the `Version Control` page by clicking
   on `Sync to GitHub`
3. Click the button `Initiate Sync to Branch` to trigger a sync to the connected
   Github repository

![Initiating Sync to Github](/img/sync_to_github.png)

### Sync from GitHub to OpenFn

Use this sync method when you want to pull a version of your priject from GitHub
into OpenFn. When this sync is triggered, `openfn-deploy` action is executed on
GitHub and your project spec _(file ending with `.yaml`)_ will be auto-deployed
to OpenFn.

:::tip Considerations for syncing Github changes to OpenFn

From v2.7.19, OpenFn deploy and pull actions now support the use of relative
paths in project spec. Consequently, projects with directory structure that uses
relative paths for job code in project spec, automatically gets packaged and
deployed without the user having to copy changes into the projct spec. This new
approach gives developers more flexibility to better manage their job code in
individual files

To put this in context, check out the sample `project.yaml` file below. We
updated the job named `FHIR-standard-Data-with-change` by writing the job
updated job code in the boody section whilst we updated job
`Notify-CHW-upload-successful` in a different file named
`Notify-CHW-upload-successful.js` which is referenced in the body section as
well. For this project, when you run OpenFn deploy, all your changes will be
bundled and deployed together.

Learn more on [portability documentation](/documentation/deploy/portability).

:::

```yaml
name: openhie-project
description: Some sample
# credentials:
# globals:
workflows:
  OpenHIE-Workflow:
    name: OpenHIE Workflow
    jobs:
      FHIR-standard-Data-with-change:
        name: FHIR-standard-Data-with-change
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          fn(state => {
            console.log("hello github integration")
            console.log("this is an update")
            return state
        });

      Send-to-OpenHIM-to-route-to-SHR:
        name: Send-to-OpenHIM-to-route-to-SHR
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          fn(state => state);

      Notify-CHW-upload-successful:
        name: Notify-CHW-upload-successful
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          path: ./workflow/Notify-CHW-upload-successful.js

      Notify-CHW-upload-failed:
        name: Notify-CHW-upload-failed
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          fn(state => state);

    triggers:
      webhook:
        type: webhook
    edges:
      webhook->FHIR-standard-Data-with-change:
        source_trigger: webhook
        target_job: FHIR-standard-Data-with-change
        condition: always
      FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR:
        source_job: FHIR-standard-Data-with-change
        target_job: Send-to-OpenHIM-to-route-to-SHR
        condition: on_job_success
      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful:
        source_job: Send-to-OpenHIM-to-route-to-SHR
        target_job: Notify-CHW-upload-successful
        condition: on_job_success
      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed:
        source_job: Send-to-OpenHIM-to-route-to-SHR
        target_job: Notify-CHW-upload-failed
        condition: on_job_failure
```

## Structuring your GitHub Repository

:::warning This is an Advanced Configuration :::

When you initiate the connection between OpenFn and your GitHub repository, a
config.json file is automatically created with reference to your project spec
and project state files, and the endpoint of your OpenFn deployment. Users have
the flexibility to edit their config.json files so long it is pointing to the
right project spec, state, and OpenFn endpoint. A standard config file looks
like this:

```json
{
  "endpoint": "https://app.openfn.org",
  "statePath": "./path-to-project-state.json",
  "specPath": "./path-to-project.yaml"
}
```

By default, OpenFn will name all your synchronization artifacts with your
project UUID on OpenFn, so you'll see files that look like this:

```json
{
  "endpoint": "https://app.openfn.org",
  "specPath": "openfn-fdfdf286-aa8e-4c9e-a1d2-89c1e6928a2a-spec.yaml",
  "statePath": "openfn-fdfdf286-aa8e-4c9e-a1d2-89c1e6928a2a-state.json"
}
```

There are three common patterns used to structure OpenFn projects inside git
repositories. See them below:

### Standard

Use this approach if you've got one OpenFn project connected to one git
repository.

```
your-git-repo
├── config.json
├── projectState.json
└── projectSpec.yaml
```

### Production & Test

Use this approach if you've got two OpenFn projects that use the _same
worklows_. Here, you're connecting two projects (prod and test) to a single git
repo and a single `project.yaml` file.

This will allow you to keep two projects in sync when changes are merged from
one branch to another. You might choose to sync:

- Your production project with the `main` branch
- Your test project with the `staging` branch

After a merge, your repo would look like this:

```
your-git-repo
├── projectSpec.yaml ## works both
│
├── prod-config.json
├── prod-projectState.json
│
├── test-config.json
└── test-projectState.json
```

### Monorepo

Sometimes, it's helpful to have multiple OpenFn projects all stored in the same
repo, even if they don't use the same workflows (i.e., even if they don't share
a `project.yaml` file.)

```
your-git-monorepo
├── project-a
│    ├── config.json
│    ├── projectState.json
│    └── projectSpec.yaml
└── project-b
     ├── config.json
     ├── projectState.json
     └── projectSpec.yaml
```
