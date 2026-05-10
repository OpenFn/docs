---
title: OpenFn Sync
sidebar_label: Sync
slug: /sync
---

OpenFn projects are fully portable, which means they can be moved to different
places.

You can create a project in the app, download it to your local machine to
develop offline, re-upload it to the app, or even deploy it to a different
OpenFn server.

We call this OpenFn Sync, and it's one of the most powerful features afforded by
OpenFn Projects.

## What is a Project?

A Project is a set of Workflows which solves, automates or integrates some
business function.

A Project lives in the OpenFn app (either on the cloud SaaS instance or on a
privately deployed instance), but it also can exist as files on a file system.

Attached to every Project is some metadata (like a name and a description) and
some configuration like Credentials and Collections.

Inside the OpenFn app, a Project is a billable top level entity, where all the
workflows and configuration are saved to database tables.

The app Project includes a bunch of extra stuff: like configuring Channels,
tracking the run history, saving dataclips, and chat sessions with the AI
assistant.

The Project can also exist on a local file system, in which case it's a bunch of
files which can be read and executed by the CLI. This local representation of a
project is pretty bare-bones: you'll only find workflows and code here.

Multiple related projects can exist on the file system at any one time. Each
will live in a single project file. You can "check out" or "expand" one project
at a time to a local folder, which will create one file for each workflow and
one file for each step.

It's typical that a single conceptual project - that is, the code and
configuration which drives a business function - exists in several places at
once. It might have several representations in the app through sandboxes; be
backed up to GitHub; run locally on a developer's machine; and be distributed to
several remote instances to run in production.

Sometimes, we call this superset of all known, related, distributed Projects a
Workspace. The Sync problem is the question of how code and configuration is
copied/deployed/replicated across Project instances.

Not all artifacts of a Project are included in a sync. Generally we sync the
project's workflows and some of its options. But we do not sync any associated
data, credential values, usage history or AI sessions.

## Project Structure

OpenFn Sync writes a Project to the file system using a number of conventions.
Whether using the CLI or GitHub Sync, a Project has the following structure

```
├── openfn.yaml
├── .projects
│   ├── main@app.openfn.org.yaml
└── workflows
    ├── my-workflow
    │   ├── my-workflow.yaml
    │   ├── my-step.js
```

Briefly, these files are:

- `openfn.yaml` declares this folder to be an OpenFn Project, and contains
  metadata and settings
- The `projects` folder contains a complete YAML representation of each Project
- The `workflows` folder shows the contents of the project - the steps and edges
  and so on.

Let's look at this structure in a bit more detail.

### project.yaml

The project file saves a copy of the whole state of a project as saved in the
app. If you look inside you'll see the workflows represented as plain text.

A project file is named like `<alias>@<domain>.yaml`. The alias is a local name
used to refer to a particular version of the project. The domain comes from the
OpenFn instance the project was downloaded from.

The project file should not be edited locally as any changes will be dropped on
the next fetch.

You can fetch as many projects as you like, and each will be saved to its own
project.yaml file.

The `.projects` folder can and should be committed to source control.

### workflows

Having your whole project inside a single file isn't actually a great way to
read or edit workflows. So the CLI can "checkout" or "expand" a project file
onto the file system.

Checking out is the process of writing each workflow to a workflow.yaml file and
each step to a step.js file. This all lives in the `workflows` directory.

Here you can edit files as much as you like, and changes will be tracked when
you push/deploy back to the app.

You can only check out one project at a time. This is actually great for working
with git, because you can checkout two projects on different branches and
compare/merge them against each other directly.

### workflow.yaml

A workflow.yaml file defines the steps of a workflow and the edges which connect
them.

```
id: my-workflow
name: My Workflow
start: webhook
steps:
  - id: my-step
    name: My Step
    adaptor: '@openfn/language-http@7.2.9'
    expression: ./my-step.js
  - id: webhook
    type: webhook
    enabled: true
    next:
      my-step:
        disabled: false
        condition: always
```

The `next` key on each step defines any downstream edges for that step - ie, the
steps to execute next. In the example above, the `webhook` step is executed
first (determined by the `start` key), and it defines a single edge to
`my-step`, which always executes.

The actual code for each step lives in its own .js file. You can modify the code
freely and sync it back to the server any time. If you want to rename a step,
make sure to update the file name of the step and the path in the
`expression` key in `workflow.yaml`.

### openfn.yaml

This is a top-level configuration file which can mostly be ignored. It is used
by OpenFn tooling to recognise a project root folder. It also holds
configuration options for all local projects, and metadata about the currently
checked out project.

## Authorization

Before you use the CLI to fetch anything from the app, you'll need to provide
some authorization.

The best way to do this is to set an environment variable called
`OPENFN_API_KEY`. Set it to the value of your
[Personal Access Token](https://docs.openfn.org/documentation/api-tokens#about-api-tokens).

:::info Personal Access Tokens

See
[Create and Manage API Tokens](https://docs.openfn.org/documentation/api-tokens)
for help setting up a token.

:::

If you connect to multiple OpenFn projects or apps, you can create a `.env` file
and set any environment variables you need there. The CLI will load this file
and report which keys it's using. Values in your `.env` file will be preferred to
those defined in your system.

You can also pass `--api-key` directly as a flag to most commands.

:::info

This guide assumes you want to sync with our hosted SaaS app at
[app.openfn.org](https://app.openfn.org)

You can sync with a different OpenFn instance by setting the env var
`OPENFN_ENDPOINT` or by passing the `--endpoint` argument to most commands.

:::

## Downloading a Project

To pull a project down from the app to your local machine, run:

```bash
openfn project pull <uuid>
```

This will create a file in your working directory called
`.projects/main@app.openfn.org.yaml`.

:::info

Every Project in the app has a unique identifier, called a UUID, which is used
to reference it. It is a 32 digit number of the form
`a6cc5bdd-b04f-4413-b4b8-132a5115acac`

You can copy a Project's UUID from the URL by browsing to it in the app. It's
the long string after `projects`.

For example, the UUID is the bold section in:
{'https://openfn.org/projects/'}<b>{'abc087dd-3963-4260-8d09-ced2e1ff2bb0'}</b>{'/w'}

:::

After you've pulled a project for the first time, you don't need to specify the
UUID again. You can use the alias, the id, or leave the identifier blank to use
the currently checked out project.

The `project pull` command does three things:

- If you do not have an `openfn.yaml` file, it'll create one
- It will _fetch_ (download) your project from the app and save it into a single
  file at `.projects/main@app.openfn.org.yaml`
- It will _checkout_ (expand) that project onto your file system, expanding
  workflows and steps to their own files.

## Aliases

Rather than identify a local project with a long-winded UUID or id string, you
can use an _alias_.

Each local project is saved to a file like `main@app.openfn.org.yaml`, where the
`main` bit is the local alias of a project.

You can pull a project and set the alias at the same time by running

```bash
openfn project pull <uuid> --alias dev
```

This will save the project to `dev@app.openfn.org.yaml`.

To change the alias, you can simply rename the file. Whatever goes before the
`@` will be treated as the alias.

## Checking Out

You can checkout a project any time with:

```bash
openfn project checkout <alias|id|uuid>
```

This will update your local workflows folder with the target project.

If a checkout will cause changes to be lost (ie, you've changed a step.js file
but haven't deployed it), you will be warned. Add `--force` to ignore the
change, or run `openfn project clean` to wipe and reset the `workflows` folder.

Checking out will only modify files managed by the CLI - basically workflow and
step files. If you have other files in the file system (like state files or test
files) they will be untouched.

## Running workflows in projects

You can execute any workflow in the checked out project by name:

```bash
openfn my-workflow
```

The CLI will find the workflow in your `workflows` folder and run it. You can
pass state via `-s` and set log levels as per usual.

When running a workflow by name like this, you get two benefits:

- **Credentials** are loaded automatically from the credential map in
  `openfn.yaml`, so you don't need to pass `--credential-map`
- **Collections** use the server configured in `openfn.yaml`, so you don't need
  to pass `--collections-endpoint` or anything.

## Deploying a Project

To push your local changes back to the app, run:

```bash
openfn project deploy
```

This will take your currently checked out project and push it to the app. It
will also report what has changed in the local project.

Before uploading, the CLI fetches the latest version of the project from the app
and checks for **divergence** — meaning it checks whether any of your
locally-changed workflows have also been edited in the app since you last
pulled. If they have, the deploy will fail with an error to prevent you from
accidentally overwriting someone else's work.

If you want to push anyway, pass `--force`:

```bash
openfn project deploy --force
```

To preview what would change without actually uploading anything, use
`--dry-run`. This will log the final update payload that would be sent to the
app (as a JSON structure).

You can deploy the checked out project as a new project on the target app by
adding the `--new` flag. This is only available if you have superuser privileges
on the target instance.

You can also deploy the checked out project to another app project by passing
its alias, id or uuid:

```
openfn project deploy main
```

If you currently have a development sandbox checked out, this would merge it
straight into the main app project.

Note that you have to have fetched the target project locally before you can
deploy it.

## Sandboxes

The CLI is fully compatible with sandboxes. Treat them like any other project:
fetch them for the first time with their UUID.

Use the `checkout` command to switch between sandboxes and projects locally.
Remember you can only have a single project checked out at once. The CLI will
warn you if a checkout will cause you to lose any local changes.

When fetching a sandbox, by default the project alias will be set to the sandbox
name.

You can merge two projects locally with `openfn project merge`, and deploy the
resulting project to the app (you'll likely have to force push the change). This
is useful for conflict resolution.

## GitHub

You can configure a Project to sync automatically to GitHub. This means that
commits to GitHub will automatically deploy changes to an OpenFn Project; and
pressing Save & Sync in the app will commit back to GitHub.

Under the hood, GitHub Sync uses the CLI's `pull` and `deploy` commands,
triggered by GitHub Actions, to sync your projects.

Note that by default, GitHub Sync will use the legacy format, with `state.json`,
`project.yaml` and `config.json` files. When setting up a new GitHub Sync, you
can choose to select the v2 format. V2 sync is only suitable for pulling a
single Project per branch to github, as multiple projects will overwrite the
same `workflows/` folder.

See [Version Control](/documentation/link-to-GitHub) for more details about
GitHub Sync.

## Cheatsheet

| Command                                  | Description                                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------------ |
| `openfn project pull <uuid>`             | Pull a project from the app for the first time                                 |
| `openfn project pull`                    | Re-pull the current project                                                    |
| `openfn project pull <uuid> --alias dev` | Pull and set a local alias                                                     |
| `openfn project fetch <alias/id/uuid>`   | Fetch a project without checking it out                                        |
| `openfn project`                         | List all local projects in the current working folder                          |
| `openfn project checkout <alias>`        | Switch to a different local project                                            |
| `openfn project deploy`                  | Deploy checked-out project to the app                                          |
| `openfn project deploy --dry-run`        | Try a deploy but skip the upload step                                          |
| `openfn project deploy --force`          | Force the checked out project to be uploaded, ignoring any divergence warnings |
| `openfn <workflow-name>`                 | Run a workflow in the checked-out project                                      |
| `openfn project clean`                   | Delete the `workflows` folder and all contents, then check out the project     |
