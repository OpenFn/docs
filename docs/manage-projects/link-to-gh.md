---
title: Version Control
sidebar_label: Version Control (GitHub Sync)
slug: /link-to-GitHub
---

You can link your OpenFn projects to GitHub to benefit from industry-standard
best-practices for version control and code promotion. This article walks you
through the configuration steps.

### Setting up your GitHub connection

You can connect your OpenFn project to a GitHub repository that you have
administrator access to. This enables a 2-way sync: you can sync changes made to
your project on OpenFn to GitHub, and you can deploy changes you've made to your
project on GitHub to OpenFn.

1. Navigate to `Project Settings > Sync to GitHub` .

2. If you have not already connected your OpenFn user account to GitHub, do so
   by clicking the **"Connect your OpenFn account to GitHub"** button.

![Configure](/img/connect-account-to-github.png)

3. Choose which GitHub Installation to use for this connection or
   [manage your GitHub installations](#managing-github-permissions).

   :::tip

   If you don't see any installations, or those installations don't have access
   to the repositories you want, click the **"Create/update GitHub installations
   or modify permissions"** link to manage the OpenFn Installation on GitHub.
   When you're done, you can come back here and refresh the lists with the 🔄
   button next to the dropdown lists.

   :::

4. Choose which repository you'd like to connect.

5. Choose which branch you'd like to connect.

![Configure](/img/github-options.png)

6. **_Optionally_** add a filepath to an existing project `config.json` file.

   :::caution Most users leave "Path to config" blank.

   This advanced feature allows you to connect to a GitHub repo that _already_
   has an OpenFn `project.yaml` and `config.json`. (Most people can skip this
   step.) It's useful when you want the first sync to pull data from GitHub into
   OpenFn. Most users opt to have the first sync come _from_ OpenFn and let the
   app set up the required `config.json` and `project.yaml` files for them.

   :::

7. Choose the **direction** of the very _first_ sync action. I.e., when this
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

8. Click **"Connect Branch & Initiate First Sync"** to finish. When you've done
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

## Using Version Control

### OpenFn to GitHub

Each time you want to sync between your project and GitHub, click the
**"Initiate Sync to Branch"** button on the version control page and the OpenFn
GitHub app will run a `openfn pull` action to update the versioned
representation of your project as code.

### GitHub to OpenFn

Any time there are changes made to the specified branch in your GitHub repo,
those changes will be pushed to your OpenFn project. Note that your entire
project is represented in your `project.yaml` file. In order to deploy any
changes to OpenFn, you have to add them to this file in order for them to be
deployed when syncing.

## How It Works

Your whole OpenFn project can be represented as a `project.yaml` file.

The `Sync to GitHub` feature makes use of GitHub actions to automatically deploy
(after a commit on GitHub) or pull (when **"Initiate Sync to Branch"** button is
clicked on OpenFn) to keep a repository in sync with your OpenFn project.

Using our Command Line Interface, the [@openfn/cli](../deploy/portability.md)
you can pull a project config from OpenFn to a folder or repo on your computer,
and you can deploy a change in your `project.yaml` file from that directory or
repo to OpenFn.

For more detailed information on representing your project as code and using the
@openfn/cli, head over to our documentation on
[Portability](../deploy/portability.md).

## Repository Structure (Advanced Configuration)

Here you can do pretty much what you want, so long as you've got a `config.json`
pointing to your project spec, state, and OpenFn endpoint. That config file
looks like this:

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
