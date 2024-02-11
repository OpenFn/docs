---
title: Rerun after failures & Workflow edits
sidebar_label: Rerun failures
---

Did a step in your workflow fail? Looking to resync historical data? Whatever
the reason, watch the below video tutorial
([or see link](https://youtu.be/DvLRA6kloNE?si=U0NMx-HsCMZxeJwg)) to learn how
to rerun your Workflow.

<iframe width="784" height="441" src="https://www.youtube.com/embed/DvLRA6kloNE?si=Seczc1JFhThQBbUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Rerun via History page

To rerun your Workflow from the `History` page:

1. Locate your failed `Work Order` (use the search bar or filters, if needed)
2. Collapse the Work Order to view related `Runs`
3. Click `rerun` next to the Step that you want to rerun the workflow from.
   Choose the first step to start from the beginning, or a later step to rerun
   the workflow from that step onwards.
4. This will create a new `Run` related to the same Work Order. Check the
   `Status` to see if this Run successfully completed the Work Order.

## Rerun via Inspector view

To rerun your Workflow from the `Inspector` page:

1. Locate your failed `Work Order` (use the search bar or filters, if needed)
2. Collapse the Work Order to view related `Runs`
3. Click `inspect` next to the Step that you want open up in the `Inspector`
   view for further troubleshooting.
4. This will open up the `Inspector` view so that you can see the `Input` and
   `Output` of the failed Step. You can make edits to the custom logic, as
   needed, in the `Editor` panel.
5. When ready to retry the workflow against the same Input, click
   `Rerun from here`. This will create a new `Run` for the same Work Order. Go
   to `History` page to check the `Status` to see if this Run successfully
   completed the Work Order.
6. If you prefer to create a _new_ Work Order (instead of retrying the same Work
   Order), you can click the dropdown next to "Rerun from here" and _instead_
   choose `Create New Work Order`.
