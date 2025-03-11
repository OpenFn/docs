---
title: Project Management
---

## What is a Project?

A `Project` on OpenFn is a shared workspace for a team or organization that
contains their Workflows, Credentials and Collaborators scoped to that project.

## Managing Projects

We introduced a `Projects` table in `v2.7.14` to help users manage their OpenFn
projects in a table view. This is the new page that you'll see everytime your
login to your OpenFn account. When users click `Projects` in the menu sidebar, 
you will see the list of projects where you have been granted collaborator access.

![Project Table](/img/projects-table.png)

## Creating a new Project

To create a new Project, follow the following steps:

1. Log in into your OpenFn account or navigate to projects table by clicking
   `Projects` on the breadcrumb if you're in a different project.
2. On the projects table, click on `Create project`. This will open a modal for
   you to provide the details of the project.
3. Enter the `name` and `description` of the new project.
4. For users on cloud-hosted OpenFn, you'll be required to select a
   `billing account` your new project should be billed to.

:::info For cloud hosted users on app.openfn.org

1. Projects in a billing account should have unique names.
2. New projects CANNOT be on a free plan. 

:::

![Create a project modal](/img/create-project-modal.png)

## Updating Project Information

You can access your Project's information under `Settings` (see app menu
sidebar). Setup allows you to view or edit the project name and description.

![Project Overview](/img/lightning_project_overview.png)

You can also export your entire project "as code" - either to save it, or to
edit your project locally. You can learn more about this feature on our
[Portability page](/documentation/deploy/portability).

## Managing Project Concurrency

OpenFn supports concurrent runs of workflows and projects. This means that multiple runs of
the same workflow or project can be executed at the same time, provided they are
configured to run in parallel.

To manage project concurrency, you can use the `Concurrency` section in the
project settings.

![Project Concurrency](/img/configuring-project-concurrency.png)

You can enable or disable parallel execution for a project. When parallel
execution is disabled, only one run of a workflow in the project can be
executed at a time.

:::info Project vs workflow level concurrency

Project level concurrency overrides workflow level concurrency. This means that
if parallel execution is disabled for a project, workflow concurrency settings
will be ignored.

:::



