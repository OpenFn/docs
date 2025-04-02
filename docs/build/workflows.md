---
title: Workflows
sidebar_label: Workflows
---

**Workflows** are automated processes or sets of instructions that accomplish a
task. In OpenFn configuration, a Workflow consists of a Trigger, Steps, and
Paths that define automation logic. Read on to learn how to configure Workflows.

## Create Workflows

To create a new Workflow in your Project:

1. Go to the **Workflows** page.
2. Click the **Create new workflow** button.
3. Give your Workflow a descriptive `Name` (e.g., `Register patients`,
   `Refer cases`, `Monthly payroll`).
4. Choose your [Trigger](../build/triggers.md)
5. Edit your first [Step](../build/steps/steps.md)
6. Modify the [Path Condition](../build/paths.md), if needed, to define _when_
   the Workflow should proceed to the next Step.
7. Configure more Steps as needed

Check out the video overview below to learn how to create a Workflow.

<iframe width="784" height="441" src="https://www.youtube.com/embed/HmE_wp_g1RY?si=Pud7DPS0BevAjStp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Merging branches and Skipping Steps

The workflow builder allows branch merging and skipping steps. To merge two or
more steps into one step or to skip some steps:

1. Hover on the step you want to merge or initiate a skip
2. You will see a link 🔗 icon beside the new step icon.
3. Click on the link icon and drag to create a path
4. Drop the new path on the desired step in your workflow

![Merging](/img/workflow_builder_merging.gif)

:::note Looping is not supported

Looping workflows are not supported so you have to connect paths to downstream
steps. When using branching and skipping paths, you can use edge conditions like
with any other step.

:::

## Run Workflows

To run a Workflow, you can either activate the Trigger (e.g., send a request to
the Webhook Event Trigger's URL, or wait for the cron timer to be activated), or
run your workflow manually. Check out the video below for how to run your
workflow manually.

<iframe width="784" height="441" src="https://www.youtube.com/embed/dssixE3Sukc?si=n3Jpdiu_aiBLXuHb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

:::info

Please note that workflows are disabled by default. When you are ready to have
your workflow running, you have to manually enable the workflow.

:::

### Enabling or Disabling a Workflow

There are two ways to disable or enable a workflow in your OpenFn project:

1. via the workflow state toggle
2. via the workflow trigger

#### Via the workflow state toggle

You can enable or disable your workflow by using the toggle button located on
the corresponding row in the project workflows list or the toggle on the
navigation bar in the workflow canvas.

The screenshot below shows an enabled workflow in the workflow list.

![Via the workflow list](/img/workflow_list_toggle.png)

The screenshot below shows a disabled workflow in the workflow canvas.

![Via the workflow canvas](/img/workflow_canvas_toggle.png)

#### Via the workflow trigger

To enable or disable a workflow via the workflow trigger, select the trigger
icon on the canvas and use the toggle in the configuration panel to toggle the
workflow state.

![Enabled workflow in the trigger panel](/img/via-trigger-panel.png)

## Limit Concurrency

Workflow **concurrency** is the number of runs that will be allowed for a given
workflow **_at the same time_**. In OpenFn, project owners and administrators
are able to limit the maximum number of the runs that can be executed at the
same time for a workflow. You might do this to ensure "one at a time" serial
processing or to keep a fast OpenFn workflow from overwhelming the API rate
limit of some other connected system.

:::info

Please check to make sure that your parallel execution is not disabled for your
project as it will override the workflow level concurrency limit.

:::

### What happens when concurrency limit is set on a workflow?

When concurrency limit is configured for a workflow, the maximum number of runs
that are executed concurrently will not exceed the number that has been set for
the workflow. For example:

- **Concurrency not set (or = 0)**: There's no artificial limit applied, and
  this workflow will only be limited by the total computing power available
  across your OpenFn installation.
- **Concurrency = 1**: Runs for this workflow will only take place 1-at-a-time.
  Each run must _finish_ before the next run can start.
- **Concurrency = 2**: No more than 2 runs for this workflow can be executed at
  a time and other runs will have stay `enqueued`. If runs "A", "B", and "C" are
  all enqueued, "A" and "B" will start executing. Once "A" finishes, "C" will
  start. (No more than 2-at-a-time.)

### Setting Concurrency for a workflow

Concurrency limits can be set via the workflow settings modal on the workflow
canvas.

1. Click on the settings icon beside the save button on your workflow to open
   the workflow settings
2. In the modal, enter the maximum concurrency limit
3. Click save.

![Configuring Concurrency](/img/configuring-concurrency.png)

### Log Outputs

For data security and compliance purposes, the log output of a workflow run can
be configured to disable logging `console.log()` statements. This can be done
via the workflow configuration modal by a project owner or administrator.

1. Click on the settings icon.
2. In the modal, toggle the **Allow `console.log()` usage** switch to disable
   logging `console.log()` statements. By default, this is enabled.

![Configuring Log Outputs](/img/configuring-log-outputs.png)

## Keyboard Shortcuts

From the canvas you can perform certain common actions (e.g., save) using
keystrokes. Check out the full list of keyboard shortcuts
[here](/documentation/keyboard-shortcuts).
