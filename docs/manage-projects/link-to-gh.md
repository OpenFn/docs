---
title: GitHub Sync
sidebar_label: GitHub Sync
slug: /link-to-GitHub
---

GitHub Sync enables two-way sync between an OpenFn project and your GitHub
repository.

This means changes made to a Project in OpenFn can commit back to your GitHub
repo; and commits pushed to GitHub can update the Project in your OpenFn App.

:::info For Cloud Hosted OpenFn Users

GitHub Sync is only available in projects that are subscribed to Core, Growth,
Scale or Custom plans.

:::

### Configuring your Project to use GitHub Sync

Users can configure their projects to access one or more repositories on GitHub.
Users must have admin access to the GitHub Repo to ensure the OpenFn application
is installed.

To configure your project to use GitHub sync, follow these steps:

1. Navigate to `Project Settings > Sync to GitHub`.

2. If you have not already connected your OpenFn user account to GitHub, do so
   by clicking the **"Connect your OpenFn account to GitHub"** button.

![Configure](/img/connect-account-to-github.webp)

3. Choose which GitHub installation to use for your project or follow the tip
   below to update your installations.

   :::tip

   If you don't see any installations, or those installations don't have access
   to the repositories you want, click the **"Create/update GitHub installations
   or modify permissions"** link to manage the OpenFn Installation on GitHub.
   This would require you to grant permissions for OpenFn App to access your
   GitHub account and repository. See
   [Managing GitHub permissions](#managing-github-permissions) for help.

   When you're done, you can come back here and refresh the lists with the 🔄
   button next to the dropdown lists.

   :::

4. Choose your preferred repository and branch you'd like to connect your
   project to.

5. Choose the **direction** of the very _first_ sync action. You can either send
   a copy of your OpenFn project to GitHub (this will not affect your project on
   OpenFn), or you can import a project already on GitHub into OpenFn (which
   will remove any existing workflows in the app and replace them with the
   project on GitHub).

6. Click **"Connect Branch & Initiate First Sync"** to finish. When you've done
   this, you can head over to GitHub (via the link provided) to view (and start
   working with) your OpenFn project as code.

## Managing GitHub Permissions

Granting the OpenFn app access to your GitHub repositories happens _in GitHub_,
not in OpenFn. We provide a link to install/manage these permissions via the
interface. After clicking that link, you can follow the steps below:

1. Click **"Configure"** or **"Install"**.

![Configure](/img/lightning_gh_configure.webp)

2. Then select the GitHub account that owns the repository you want to connect
   to.

![Install](/img/lightning_gh_install_openfn.webp)

3. Select the repository to sync with and hit **"Save"**.

![Permissions](/img/lightning_gh_permissions.webp)

4. When you're done making changes on GitHub, head back to OpenFn and refresh
   the connection lists with the 🔄 button next to the dropdown list of
   available installations.

## Using Version Control & Managing Changes

The `Sync to GitHub` feature makes use of GitHub actions to automatically deploy
(after a commit on GitHub) or pull (when **"Initiate Sync to Branch"** button is
clicked on OpenFn) project changes to keep a repository in sync with your OpenFn
project.

### Sync from OpenFn to GitHub

This sync pushes changes from your OpenFn project to GitHub. This sync operation
will trigger an `openfn pull` action workflow on your connected GitHub
repository, which will pull the latest configuration from the OpenFn app and
save it as code in your repository. See
[Project Structure](http://localhost:3000/documentation/sync#project-structure)
to understand what will be created in GitHub.

:::info The Portability Spec

Your OpenFn project can be represented as code. This representation of your
project excludes any details which are unique to your app, like credentials or
UUIDs. It is sometimes called the project spec. See the
[portability documentation](/deploy/portability.md) to learn more.

:::

After successfully setting up your project connection to GitHub as detailed
[above](#managing-github-permissions), you can initiate subsequent syncs either
via the Canvas, the Inspector or the version control page in the project
settings.

To initiate a sync via the Canvas or Inspector, press `Ctrl+Shift+s`. (Or
`⌘+Shift+s` on Mac; see [keyboard shortcuts](/keyboard-shortcuts.md).) You can
also click the dropdown icon beside the save button to select `Save & Sync`.
When you click Save & Sync, you'll see a confirmation modal with an option for
you to customize the commit message.

![Initiating Save & Sync](/img/save-and-sync.webp)

:::info Sync is a "project level" action

When you trigger `Save & Sync` in a workflow, your new changes and _previous_
uncommitted changes (if any) to your project's resources (including other
workflows) will be committed to GitHub. I.e., if there are other, uncommitted
changes by either you or someone else to other workflows in the project, they’ll
also show up in that sync.

:::

To configure your project to sync to GitHub via the project settings:

1. Go to the Project where you made edits to your Workflow(s), and then navigate
   to the `Project Settings` page
2. From the project settings, navigate to the `Version Control` page by clicking
   on `Sync to GitHub`
3. Click the button `Initiate Sync to Branch` to trigger a sync to the connected
   GitHub repository

![Initiating Sync to GitHub](/img/sync_to_github.webp)

### Sync from GitHub to OpenFn

Use this sync method when you want to pull a version of your project from GitHub
into OpenFn. When this sync is triggered, the `openfn deploy` action is executed
on GitHub and the workflows defined there will be uploaded to OpenFn.

### Advanced Sync Options

#### Use Legacy Formats

Over time, we have used different file formats to represent an OpenFn project as
code.

By default, since Lightning version v2.20.0, GitHub Sync expands your project
across the file system (see
[the docs](http://localhost:3000/documentation/sync#project-structure) for more
details), writing each workflow to a folder with a yaml workflow representation,
plus all job code in a `.js` file. This format is driven by an `openfn.yaml`
file at the root of the file system.

Prior to this, GitHub Sync wrote a project to three files: `config.json`,
`state.json` and `project.yaml`.

This way of representing a project still works perfectly well and is fully
supported. Users who are reconnecting an existing Github Sync using this format
should enable legacy formats to reduce the size of the diff on GitHub created by
the next commit.

#### Workspace folder

GitHub Sync works by writing a project representation to a single folder on the
file system (mostly in the `workflows` folder).

By default, GitHub sync will read and write from the root of your repository.

For repos which are structured more like a monorepo, and contain several
projects, you can specify the path to a subfolder to use to sync this specific
project. The folder should point to where the `openfn.yaml` and `workflows`
folder lives for the correct project.

Note that it is safe to connect a Sandbox to a branch and overrwite the
`workflows`folder for that branch. Sandboxes are designed to work without
setting a different workspace folder per sandbox.

#### Local Alias

When a project is written to GitHub, it is written with an alias. This is the
`main` in `main@app.openfn.org.yaml` file created in your `.projects` folder.

The alias is a shorthand used by CLI user to easily reference a project without
having to use its UUID.

By default, a project will be assigned the alias `main`, and a sandbox will use
the sandbox name as an alias.

You can specify your own project alias by setting this value.

## Troubleshooting

### GitHub Sync Error: Unexpected inputs provided: ["snapshots"]

If you installed GitHub sync before July 17th, 2024 you may need to update your
`.github/workflows/openfn-pull.yml` file to match:

```
on:
  workflow_dispatch:
    inputs:
      projectId:
        description: 'OpenFN Project ID'
        required: true
      apiSecretName:
        description: 'OpenFN API Key secret name i.e OPENFN_project_API_KEY'
        required: true
      pathToConfig:
        description: 'Path to config.json'
        required: true
      branch:
        description: 'Branch to commit the project state and spec'
        required: true
      commitMessage:
        description: 'Commit message for project state and spec'
        required: true
      snapshots:
        description: 'IDs of snapshots separated by spaces'
        required: false

jobs:
  pull-from-lightning:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    name: A job to pull changes from Lightning
    steps:
      - name: openfn pull and commit
        uses: openfn/cli-pull-action@v1.1.0
        with:
          secret_input: ${{ secrets[inputs.apiSecretName] }}
          project_id_input: ${{ inputs.projectId }}
          config_path_input: ${{ inputs.pathToConfig }}
          branch_input: ${{ inputs.branch }}
          commit_message_input: ${{ inputs.commitMessage }}
          snapshots_input: ${{ inputs.snapshots }}
```
