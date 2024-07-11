---
title: Workflow Snapshots
sidebar_label: Workflow Snapshots
slug: /workflow-snapshots
---

Workflow snapshots capture and store the state of a workflow and jobs at a specific point in time based on a save operation and/or run. Snapshots are help with debugging, auditing, and improving overall workflow performance.

### When is a snapshot made?
Snapshots are created in 2 ways:
1. When a user saves changes to their workflow either through the canvas or the job editor
2. When a run is made either by creating a new work order or retrying a run

### How can I view a snapshot?
To view a snapshot, go to the `History` page. Expand a work order to see the runs included. 

![Snapshot1](/img/snapshots1.png)

From the expanded history view, there are two ways to visualize snapshots: 
1. By inspecting a step in the run
2. From the Run view

#### Viewing a snapshot by inspecting a step in the run

Click on the inspect icon in front of the step you’d like to view. 

![Inspect](/img/inspect.png)

This will open the inspector screen for that step in the run with all associated artifacts: logs and I/O data. On the inspector, you'll notice that you're in a read-only mode, and hovering on the workflow snapshot ID chip, you’ll see a message that reads “You are viewing a snapshot of this workflow that was taken on ….”

![Snapshot2](/img/snapshots2.png)

To view the corresponding canvas for this snapshot, close this inspector view by clicking the `X` on the top right corner of the page. This will open the associated canvas with the step selected as shown below. 
 
![Snapshot3](/img/snapshots3.png)

From the canvas, you can inspect any step by clicking on the step and opening the inspector for the run associated with the step and snapshot. 

#### Viewing a snapshot from the Run view
From the expanded history view, click on the run ID to open the run view. 

![Snapshot4](/img/snapshots4.png)

From this view, click on the Workflow name (Simple Flow) to open the workflow canvas for this snapshot.
Similar to viewing a snapshot by inspecting a step, you can click the inspect icon in front of the steps to open the inspector for the step. 

### Editing a Snapshot
Snapshots are read-only and serve as a reference for the state of a workflow when saved or a run is executed. To enable editing more, users can either click on the `Switch to latest version` on the canvas or use the toggle at the bottom right of the inspector page to switch to the latest version of the workflow.

When you switch to the latest version, the snapshot ID tag will change to blue colour and the text will be `latest`. 

![Snapshot5](/img/snapshots5.png)

![Snapshot6](/img/snapshots6.png)

### Retrying a Snapshot

When retrying a run with a snapshot, the retry will be executed with the latest version of the workflow and job code. 
