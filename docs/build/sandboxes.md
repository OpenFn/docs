---
title: Sandboxes
sidebar_label: Sandboxes
---

Sandboxes are a way to develop fixes and new features on workflows without
affecting live, or "in production", runs.

:::info Sandboxes are new to OpenFn since October 2025.

At the time of writing sandboxes are under active development and testing. We
expect to be in full working order by the end of November 2025, but until then
we recommend not using them with live workflows.

To access sandboxes, you'll need to enable the Experimental Features option in
your user settings.

:::

A sandbox is essentially a clone of a project, with its own private history,
webhooks, cron triggers credentials and access rights. It also has its own
billing rules - so sandbox runs and AI tokens don't affect your main project.
Unlike most sandbox settings, the billing rules derive from the original
project, rather than duplicate them.

The idea is that you can develop the workflow in total isolation from the main
project, and once you're done, merge (read as "push" or "promote") changes back.

:::tip Short-lived sandboxes

sandboxes work best when they're short-lived, so right now they are destroyed
after merging. While you can create as many sandboxes as you like (subject to
your usage allowance), we recommend keeping the number low to reduce the risk of
merge conflicts.

:::

## Isolated Context

A sandbox is an isolated copy of your original project with its own context. As
such, your sandbox has its own "private" copies of the following artefacts and
features:

- Workflows
- Dataclips
- Run History
- Subscription (run limits, AI credits and collection memory)
- Collections
- Settings

By "private copy", what we mean is that changing a Workflow in a sandbox will
not affect the same-named Workflow in any other project or sandbox, or that a
Run in a sandbox will contribute to your usage in any other sandbox or project,
and so on.

## Creating sandboxes

When you create a new sandbox, we basically create a total copy of your project.
Any changes made to the sandbox will not affect your main project workflows - so
you can experiment freely without breaking anything.

To create a sandbox, enter a Project, click on sandboxes, and click on the
Create sandbox button.

You'll need to set a name for the sandbox. This is unique within your project
and its sandboxes. If you're familiar with git, treat it like a branch name.
Otherwise, you can either give it a general name like `testing`, or name it for
a specific feature, like `new-patient-workflow`.

You'll also need to set an Environment (see below). This configures all
credentials within the sandbox to use that environment variant. If you're not
sure, set the environment to `dev` (you can change this at any time from the
Setup tab of the sandbox Settings page).

A color will be randomly selected to associate with the sandbox. You'll see this
color in the app UI while you're using the sandbox. You can select a different
color if you like.

Click Create sandbox when you're ready. You'll automatically enter the sandbox.

## Viewing a sandbox

To develop and test a sandbox, you need to enter it in the app from the
sandboxes menu.

When sandbox is active, the app will change color to help you understand what
you're looking at. [TODO] We also list the active sandbox in the breadcrumbs at
the top of the page, and in a banner on the Inspector.

Each sandbox has its own isolated Workflows, Subscription, History and settings.
As you click through the pages, you'll notice that your original project's
details are excluded. This is because your sandbox is an independent clone of
the original project.

## Environments

Environments allow you to run a Workflow with a special set of credentials. This
lets you use development servers, modes and databases while building your
sandbox, without interfering with live production services.

Each sandbox has an associated environment. By default it's `main`, which
implies that this is your live production environment. But you can create an
environment like `dev` or `staging`.

The environment is just a label, and each credential used in your workflow has a
set of values associated with that label. For example, when connecting to DHIS2,
your main credential will contain private login details. But your `dev`
environment might use the public sandbox and so contain a different username and
password.

All environments are securely stored and encrypted within our database, so it's
perfectly safe to duplicate production credentials across multiple environments.

For each Credential used in your workflow, you must ensure there is a value set
to match your sandbox environment. If you do not configure your credentials, the
Workflow will fail with clear instructions on how to correct it.

To change a the environment used by a Sandbox, first enter the Sandbox from the
Sandboxes page, then go to the Settings page. The environment can be edited
under the Identity section of the Setup tab (right at the top of the page).

## Merging sandboxes

Once you've finished making changes to your workflows, it's time to merge them
back into your main project.

This is easy in the app: simply head to the Sandboxes page, find the Sandbox you
want to merge in the list, and click the Merge icon on the right-hand side.

You'll be prompted to select the target project or sandbox to merge into: pick
from the list and click Merge. Usually you'll want to merge into the original
project, which is selected by default.

When merging, we replace the contents of workflows in your project with those in
your sandbox. Any workflows which are not in the sandbox will be ignored. If you
rename a workflow in the sandbox, you'll see the new workflow appear in your
main project, and the original workflow will be left alone (you'll probably want
to delete that manually).

Note that settings and options, like concurrency and data retention rules, are
not transferred in the merge, nor are historical runs or dataclips. Just the
Workflow contents.

After merging, the sandbox will be destroyed, along with its history and
dataclips. Any environments and credentials assocaited with the project will be
unaffected.

:::tip

You can also use the CLI to merge your changes locally, give them one final
test, and then deploy them to your main project.

::::

## Conflicts

If you've ever worked with a source version control system - like git or
Subversion - you'll be familiar with the idea of conflicts.

A conflict occurs when you're trying to merge a Sandbox into your original
project (or another sandbox), and there are incompatible changes between them.

Say you create a Sandbox from your main project and in the sandbox, you change
the adaptor of one step from `common` to `http`. And while you're making this
change, a colleague goes to the main project and sets the adaptor of the same
step to `salesforce`.

What happens when you try and merge the sandbox? Should we preserve the original
change? Or accept the change in the sandbox? Or something else?

Occasionally these conflicts are trivial to resolve and you might wonder what
all the fuss is about. But often they are complex, and it can be difficult or
impossible to automate a solution.

[TODO not implemented yet] When we detect a conflict like this, we'll show a
warning when you try and merge the Sandbox. You can choose to "force push" the
Sandbox and overwrite whatever changes happened on the target Project, or you
can cancel and resolve the conflict yourself.

For now, the only way to resolve conflicts manually is to use the CLI to edit
your project locally, and pushed the resolved, final version up to the app.

:::tip

We'll be adding better support for resolving conflicts soon.

:::

## Editing sandboxes Locally

Sandboxes are fully compatible with the CLI.

We're still working on docs and features for that - check back soon for more
details!
