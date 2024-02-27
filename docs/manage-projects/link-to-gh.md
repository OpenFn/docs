---
title: Linking Your Project to GitHub (Version Control)
sidebar_label: Linking Your Project to GitHub
slug: /link-to-github
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

6. Once you have created a a connection, set up `pull` and `deploy` workflows
   that use openfn github actions below.
7. Add `OPENFN_API_KEY` and `OPENFN_PROJECT_ID` repository secrets to your
   Github repo as described below.
8. Add a `config.json` file to your repository which specifies your endpoint
   and paths to project spec and state files.
9. Click the sync to Github button to initiate a sync from Lightning to GitHub.
10. Push a change to your selected branch to push changes from Github to
    Lightning.

#### Github Repository Secrets

The workflows that interact with the OpenFn actions will need the repository set
up with two secrets used in the github actions:

- OPENFN_API_KEY: This is your API Key as generated from Lightning and will be
  needed for authentication
- OPENFN_PROJECT_ID: This is your Project ID from Lightning this will be used to
  pull from the lightning instance

#### Github Repository Structure

Here you can do pretty much what you want, so long as you've got a `config.json`
pointing to your project spec, state, and Lightning endpoint.

#### Example [Deploy Workflow](https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/deploy.yml) for GitHub

See https://docs.github.com/en/actions/quickstart#creating-your-first-workflow
for more help here.

```yml
on:
  push:
    branches:
      - main

jobs:
  deploy-to-lightning:
    runs-on: ubuntu-latest
    name: A job to deploy to Lightning
    steps:
      - name: openfn deploy
        uses: OpenFn/cli-deploy-action@v0.1.11
        with:
          secret_input: ${{ secrets.OPENFN_API_KEY }}
```

#### Example [Pull Workflow](https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/pull.yml) for GitHub

See https://docs.github.com/en/actions/quickstart#creating-your-first-workflow
for more help here.

```yml
on: [repository_dispatch]

jobs:
  pull-from-lightning:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    name: A job to pull changes from Lightning
    steps:
      - name: openfn pull and commit
        uses: OpenFn/cli-pull-action@v0.7.0
        with:
          secret_input: ${{ secrets.OPENFN_API_KEY }}
          project_id_input: ${{ secrets.OPENFN_PROJECT_ID }}
          commit_message_input:
            'user ${{ github.event.client_payload.message }}'
```

The Lightning [demo instance](https://demo.openfn.org) is currently connected to
[this repo](https://github.com/OpenFn/demo-openhie/). Feel free to play around
with it.

11. Your GitHub connection is now set up! From here, each time you want to sync
    between your project and GitHub, click `Initiate Sycn to Branch`.

### How It Works in a Nutshell

Your whole OpenFn project can be represented as a project.yaml file.

Using our Command Line Interface, the [@openfn/cli](../deploy/portability.md)
you can pull a project config from OpenFn to a folder or repo on your computer,
and you can deploy a change in your project.yaml file from that directory or
repo to OpenFn.

The `Sync to Github` feature makes use of GitHub actions to automatically deploy
(after a commit) or pull (when `Initiate Sync to Branch` button is clicked) to
keep a repository in sync with your OpenFn project.

For more detailed information on representing your project as code and using the
@openfn/cli, head over to our documentation on
[Portability](../deploy/portability.md).
