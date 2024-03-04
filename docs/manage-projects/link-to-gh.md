---
title: Linking Your Project to Github (Version Control)
sidebar_label: Linking Your Project to Github
slug: /link-to-Github
---

You can set up version control for your OpenFn projects. This article walks you
through the configuration steps.

### How It Works in a Nutshell

Your whole OpenFn project can be represented as a `project.yaml` file.

The `Sync to Github` feature makes use of Github actions to automatically deploy
(after a commit) or pull (when `Initiate Sync to Branch` button is clicked) to
keep a repository in sync with your OpenFn project.

Using our Command Line Interface, the [@openfn/cli](../deploy/portability.md)
you can pull a project config from OpenFn to a folder or repo on your computer,
and you can deploy a change in your `project.yaml` file from that directory or
repo to OpenFn.

For more detailed information on representing your project as code and using the
@openfn/cli, head over to our documentation on
[Portability](../deploy/portability.md).

### Setting Up Github Integration

You can connect your OpenFn project to a Github repository that you have
administrator access to. This enables a 2-way sync - you can sync your project
to Github, and you can deploy changes you've made outside of OpenFn to your
project.

1. Navigate to `Project Settings > Sync to Github` .

![Connect to Github](/img/lightning_connect_to_gh.png)

2. Select `Connect Branch`. You'll be prompted to sign in to Github.

Click `Configure`...

![Configure](/img/lightning_gh_configure.png)

3. ...then select the Github account that owns the repository you want to
   connect to.

![Install](/img/lightning_gh_install_openfn.png)

4. Select the repository to sync with and hit `Save`.

![Permissions](/img/lightning_gh_permissions.png)

5. You'll be redirected to OpenFn. Select the repository and branch you want to
   sync to.
6. The Github sync process makes use of `pull` and `deploy` Github actions to
   sync between your OpenFn project and Github repo (more on this under
   `How it works` below.) In order to do this, a `pull.yml` and a `deploy.yml`
   file will be committed to your chosen repository when you proceed to connect
   your branch. If you have files with these names in your repo, they will be
   overwritten.
7. Click `Connect Branch`.
8. Add `OPENFN_API_KEY` and `OPENFN_PROJECT_ID` repository secrets to your
   Github repo as described below.

#### Github Repository Secrets

The workflows that interact with the OpenFn actions will need the repository set
up with two secrets used in the github actions:

- OPENFN_API_KEY: This is your API Key as generated from OpenFn and will be
  needed for authentication
- OPENFN_PROJECT_ID: This is your Project ID from OpenFn this will be used to
  pull from the OpenFn instance

9. Add a `config.json` file as below to your repository which specifies your
   endpoint and paths to project spec and state files. Both of these files will
   be automatically created when you first initiate a sync.

```json
{
  "endpoint": "https://app.openfn.org",
  "statePath": "./projectState.json",
  "specPath": "./project.yaml"
}
```

10. Click the sync to Github button to initiate a sync from OpenFn to GitHub.
11. Push a change to your selected branch to push changes from Github to OpenFn.
12. Your GitHub connection is now set up!

#### Using Version Control

##### OpenFn to Github

Each time you want to sync between your project and Github, click the
`Initiate Sync to Branch` button on the version control page and the OpenFn
Github app will run a `openfn pull` action to update the versioned
representation of your project as code.

##### Github to OpenFn

Any time there are changes made to that branch in your Github repo, those
changes will be pushed to your OpenFn project via `openfn deploy`. Note that as
your entire project is represented in your `project.yaml` file, you have to add
all your changes to this file in order for them to be deployed to your OpenFn
project when syncing.

#### Github Repository Structure

Here you can do pretty much what you want, so long as you've got a `config.json`
pointing to your project spec, state, and OpenFn endpoint.

The OpenFn v2 (Lightning) [demo instance](https://demo.openfn.org) is currently
connected to [this repo](https://Github.com/OpenFn/demo-openhie/). Feel free to
play around with it.
