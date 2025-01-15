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

:::note 
Looping workflows are not supported so you have to connect paths to
downstream steps. When using branching and skipping paths, you can use edge
conditions like with any other step. 
:::

## Run Workflows

To run a Workflow, you can either activate the Trigger (e.g., send a request to
the Webhook Event Trigger's URL, or wait for the cron timer to be activated), or
run your workflow manually. Check out the video below for how to run your
workflow manually.

<iframe width="784" height="441" src="https://www.youtube.com/embed/dssixE3Sukc?si=n3Jpdiu_aiBLXuHb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Turn off or disable Workflows

To "turn off" or disable a Workflow:

1. Open the Workflow
2. Click on the Trigger
3. Select the **Disable this trigger** checkbox
4. Select **Save** to save your changes and turn off / disable your workflow

![disable-wf](/img/disable-wf.png)

## Limit Concurrency

Workflow **concurrency** is the number pf runs will be allowed for a given
workflow **_at the same time_**. In OpenFn, project administrators and editors
are able to limit the maximum number of the runs that can be executed at the
same time for a workflow. You might do this to ensure "one at a time" serial
processing or to keep a fast OpenFn workflow from overwhelming the API rate
limit of some other connected system.

:::info

Note that this setting allows administrators to _limit_ the maximum concurrency
for a workflow, but the **global maximum** (i.e., the highest concurrency that
can be reached if a workflow is _not_ limited by a project administrator) will
be controlled by your OpenFn instance superuser. This global maximum will be
determined by the computing power and throughput made available to your
installation.

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

## Keyboard Shortcuts

From the canvas you can perform certain common actions (e.g., save) using
keystrokes. Check out the full list of keyboard shortcuts
[here](/documentation/keyboard-shortcuts).
