---
title: Linking your Project to GitHub (Version Control)
sidebar_label: Linking your Project to GitHub
---

You can set up version control for your OpenFn projects. This article walks you
through the configuration steps.

### Setting up GitHub integration

You can connect your OpenFn project to a GitHub repository that you have
administrator access to. This enables a 2-way sync - you can sync your project
to GitHub, and you can deploy changes you've made outside of OpenFn to your
project.

1. Navigate to `Project Settings > Sync to GitHub` .

![Connect to GitHub](/img/lightning_connect_to_gh.png)

2. Select `Connect Branch`. You'll be prompted to sign in to GitHub.

Click `Configure`...

![Configure](/img/lightning_gh_configure.png)

3. ...then select the GitHub account that owns the repository you want to
   connect to.

![Install](/img/lightning_gh_install_openfn.png)

4. Select the repository to sync with and hit `Save`.

![Permissions](/img/lightning_gh_permissions.png)

5. You'll be redirected to OpenFn. Select the repository and branch you want to
   sync to, and click `Connect Branch`.

6. Your GitHub connection is now set up! From here, each time you want to sync
between your project and GitHub, click `Initiate Sycn to Branch`.

### How It Works in a Nutshell

Your whole OpenFn project can be represented as a project.yaml file.

Using our Command Line Interface, the
[@openfn/cli](/documentation//deploy/portability#using-the-cli-to-deploy-or-describe-projects-projects-as-code)
you can pull a project config from OpenFn to a folder or repo on your computer,
and you can deploy a change in your project.yaml file from that directory or
repo to OpenFn.

The `Sync to Github` feature makes use of GitHub actions to automatically deploy
(after a commit) or pull (when `Initiate Sync to Branch` button is clicked) to
keep a repository in sync with your OpenFn project.

For more detailed information on representing your project as code and using the
@openfn/cli, head over to our documentation on
[Portability](/documentation//deploy/portability).
