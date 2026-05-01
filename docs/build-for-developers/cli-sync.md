---
title: OpenFn Sync
sidebar_label: OpenFn Sync
slug: /sync
---

OpefnFn projects are fully portable, which means they can be moved to different
places.

You can create a project in the app, download it to your local machine to
develop offline, re-upload it to the app, or even deploy it to a different
OpenFn server.

We call this OpenFn Sync, and it's one of the most powerful features affording
by OpenFn Projects.

## What is a Project?

A Project basically set of Workflows (and maybe some configuration) which
solves, automates or integrates some business function. It usually lives in the
app, but it can just be some files on a file system.

Inside the OpenFn app, a Project is a top level entity backed by a bunch of
database tables.

The app Project includes a bunch of extra stuff: like configuring Channels,
tracking the run history, saving dataclips, and providing support from the AI
assistant.

The Project can also exist on the file system, in which case it's a bunch of
files which can be read and executed by the CLI. This local representation of a
project is pretty bare-bones: you'll only find workflows and code here.

Multiple related projects can exist on the file system at any one time. Each
will ive in a single project file. You can "check out" or "expand" one project
at a time to a local folder, which will create one file for each workflow and
one file for each step.

Sometimes, We call this superset of all known, related, distributed projects a
Workspace.

Not all artifacts of a Project are included in a sync. Generally we sync the
project's workflows and some of its options. But we do not sync any associated
data, credential values, usage history or AI sessions.

## Authorization

Before you use the CLI to fetch anything from the app, you'll need to provide
some authorization.

The best way to do this is to set an environment variable called
`OPENFN_API_KEY`. Set it to the value of your
[Personal Access Token](https://docs.openfn.org/documentation/api-tokens#about-api-tokens).

::: info Personal Access Tokens

See
[Create and Manage API Tokens](https://docs.openfn.org/documentation/api-tokens)
for help setting up a token.

:::

If you connect to multiple OpenFn projects or apps, you can create a `.env` file
and set any environment variables you need there. The CLI will load this file
and report which keys its using. Values in your `.env` file will be preferred to
those defined in your system.

You can also pass `--api-key` directly as a flag to most commands.

::: info

This guide assumes you want to sync with our hosted SaaS app at app.openfn.org

You can sync with a different OpenFn instance by setting the env var
`OPENFN_ENDPOINT` or by passing the `--endpoint` argument to most commands.

:::

## Downloading a Project

To pull a project down from the app to your local machine, run:

```bash
openfn project pull <uuid>
```

After you've pulled a project for the first time, you don't need to specify the
UUID again (in any commands).

The `project pull` command does three things:

- If you do not have an `openfn.yaml` file, it'll create one
- It will _fetch_ your project from the app and save it into a single file at
  `.projects/main@app.openfn.org.yaml`
- It will _checkout_ that project onto your file system, expanding workflows and
  steps to their own files.

This will create a file in your working directory called
`.projects/main@app.openfn.org.yaml`.

## Understanding a Project Structure

Pulling a project from the app will create a file structure that looks like
this:

```
├── openfn.yaml
├── .projects
│   ├── main@app.staging.openfn.org.yaml
└── workflows
    ├── my-workflow
    │   ├── my-workflow.yaml
    │   ├── job.js
```

There are three key files to understand here:

### project.yaml

The project file saves a copy of the whole state of a project as saved in the
app. If you look inside you'll see the workflows represented as0 plain text.

A project file is named like `<alias>@<domain>.yaml`. The alias is a local name
used to refer to a particular version of the project.

The project file should not be edited locally as changes will be dropped on the
next fetch.

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

You can only check out on project a time. This is actually great for working
with git, because you can checkout two projects on different branches and
compare/merge them against each other directly.

### openfn.yaml

This is a top-level configuration file

We call this file system a Workspace (not a project, because technically it
holds multiple projects)

At any time, one project can be "checked out" or "expanded". That means the the
contents of the `workflows` folder represents that specific project. You cannot
checkout two versions of the same workflow at once.

- `openfn.yaml` contains settings and metadata about the checked out project
- `.projects` contains a yaml file for each project. This is a local copy of a
  remote project. It should always reflect an app's view of a project. You
  should generally not edit these files.
- `workflows` contains all the workflows for the checked out project. These are
  compatible with the CLI.

## Aliases

Rather than identify a local project with a long-winded UUID or id string, you
can use an _alias_.

Each local project is saved to a file like `main@app.openfn.org.yaml`, where the
`main` bit is the local alias of a project.

You can pull a project and set the alias at the same time by running

```bash
openfn project pull <uuid> --alias dev
```

This will save the project to `dev@app.openfn.org.yaml`

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
adding the `--new` command. This is only available if you have superuser
privileges on the target instance.

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

## GitHub

## Cheatsheet

| Command                                  | Description                                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------------ | ----- | --------------------------------------- |
| `openfn project pull <uuid>`             | Pull a project from the app for the first time                                 |
| `openfn project pull`                    | Re-pull the current project                                                    |
| `openfn project pull <uuid> --alias dev` | Pull and set a local alias                                                     |
| `openfn project fetch <alias             | id                                                                             | uuid` | Fetch a project without checking it out |
| `openfn project`                         | List all local projects in the current working folder                          |
| `openfn project checkout <alias>`        | Switch to a different local project                                            |
| `openfn project deploy`                  | Deploy checked-out project to the app                                          |
| `openfn project deploy --dry-run`        | Try a deploy but skip the upload step                                          |
| `openfn project deploy --force`          | Force the checked out project to be uploaded, ignoring any divergence warnings |
| `openfn <workflow-name>`                 | Run a workflow in the checked-out project                                      |
| `openfn project clean`                   | Delete the `workflows` folder and all contents, then check out the project     |
