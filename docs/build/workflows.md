---
title: Workflows
sidebar_label: Workflows
---

`Workflows` are automated processes or sets of instructions that accomplish a
task. In OpenFn configuration, a Worklfow consists of a Trigger, Steps, and
Paths that define automation logic. Read on to learn how to configure Workflows.

## Create a new Workflow

To create a new Workflow in your Project: 
1. Go to the `Workflows` page.
2. Click `Create new workflow` button.
3. Give your Workflow a descriptive `Name` (e.g., `Register patients`, `Refer cases`, `Monthly payroll`).
4. Choose your [Trigger](/documentation/build/triggers)
5. Edit your first [Step](/documentation/build/steps/steps)
6. Modify the [Path Condition](/documentation/build/paths), if needed, to define _when_ the Workflow should proceed to the next Step. 
7. Configure more Steps as needed

Check out the video overview below to learn how to create a Workflow. 
<iframe width="784" height="441" src="https://www.youtube.com/embed/HmE_wp_g1RY?si=Pud7DPS0BevAjStp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Run Workflows
To run a Workflow, you can either activate the Trigger (e.g., send a request to the Webhook Event Trigger's URL, or wait for the cron timer to be activated), or run your workflow manually. 

<!-- TODO: ADD DOCS ON HOW TO MANUALLY RUN A WORKFLOW -->

## Turn off Workflows
To "turn off" or disable a Workflow: 
1. Open the Workflow
2. Click on the Trigger
3. Select the `Disable this trigger` checkbox
4. Select `Save` to save your changes