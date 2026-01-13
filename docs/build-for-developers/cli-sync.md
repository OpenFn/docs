---
title: CLI Sync Reference (beta)
sidebar_label: Sync Reference
slug: /cli-sync
---

This article contains a reference guide to the CLI sync commands found in
`openfn project`, available since CLI XXX and undoing active development

`openfn project` is a new command (and set of subcommands) designed to help run
and build projects from the OpenFn app locally on your computer.

You can use `openfn project` to:

- Download projects run Lightning
-

Downloaded projects are fully compatible with the CLI

::: tip

The new `openfn project pull` nd `openfn project deploy` commands are
replacements for `openfn pull` and `openfn deploy`. You can use the new command
through `openfn pull --beta` and `openfn deploy --beta`.

:::

- explain file structure on pull
- this is a terse reference and cheatsheet

## Environments

By default, when syncing to an app, the CLI will call app.openfn.org. If using
another deployment, or local, you'll have to set this value

Set env vars:

```
OPENFN_API_KEY=<key from app>
OPENFN_ENDPOINT=https://app.staging.openfn.org
```

A `.env` file at the project root will be automatically loaded by the CLI. Check
debug output for details.

## Folder structure

After pulling a project, it may look like this:

```
├── openfn.yaml
├── .projects
│   ├── main@app.staging.openfn.org.yaml
│   └── test@app.staging.openfn.org.yaml
└── workflows
    ├── my-workflow
    │   ├── my-workflow.yaml
    │   ├── job.js
```

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

## Downloading a Project

Pull (fetch + checkout) a project:

```
openfn project pull <uuid|uuid>
```

Pull with custom alias:

```
openfn project pull <uuid> --alias staging
```

Pull to custom path:

```
openfn project pull <alias|uuid> -o path/to/output
```

Force overwrite:

```
openfn project pull <alias|uuid> --force
```

Fetch without checkout:

```
openfn project fetch <alias|uuid>
```

Fetch to custom file:

```
openfn project fetch <alias> -o path/to/file.yaml
```

## Switching Projects

Checkout a different project:

```
openfn project checkout <alias>
```

Checkout from file path:

```
openfn project checkout path/to/project.yaml
```

## Merging Projects

Merge a project into the checked-out project:

```
openfn project merge <alias>
```

Merge and remove unmapped workflows:

```
openfn project merge <alias> --remove-unmapped
```

Merge to custom output:

```
openfn project merge <alias> -o path/to/output.yaml
```

Merge with custom base/target:

```
openfn project merge <alias> --base path/to/target.yaml
```

Force merge incompatible workflows:

```
openfn project merge <alias> --force
```

## Running a Project

## Sandboxes

## Other Commands

List all projects in workspace:

```
openfn project list
```

## Workspace Options

From any project command, set the working dir or path to the workspace. This
should point to a folder with an openfn.yaml

```
openfn project fetch staging -w /path/to/workspace
```

You can also use an environment variable to pin this, if you're using a monorepo
style:

```
OPENFN_WORKSPACE=/path/to/workspace
```
