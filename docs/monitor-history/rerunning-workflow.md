---
title: Retry & Cancel Runs
sidebar_label: Retry & Cancel
---

From the `History` page, you can take actions on Work Orders and Runs depending
on their current state. Use **Retry** to re-execute completed work orders, or
**Cancel** to remove pending runs from the queue.

## Available Actions by Work Order State

| Work Order State                                                                              | Available Actions |
| :-------------------------------------------------------------------------------------------- | :---------------- |
| **Pending** (runs waiting in the queue)                                                       | Cancel            |
| **Running**                                                                                   | None              |
| **Final states** (Success, Failed, Crashed, Killed, Exception, Lost, Cancelled, Rejected)     | Retry, Retry from |

:::info Selecting work orders with mixed states

When you select multiple work orders with different state categories (e.g., some
pending and some failed), both Retry and Cancel buttons will be disabled. Select
only work orders in the same state category to use bulk actions.

:::

## Retry a Work Order

Did a step in your workflow fail? Looking to resync historical data? Whatever
the reason, watch the below video tutorial
([or see link](https://youtu.be/DvLRA6kloNE?si=U0NMx-HsCMZxeJwg)) to learn how
to rerun your Workflow.

<iframe width="784" height="441" src="https://www.youtube.com/embed/DvLRA6kloNE?si=Seczc1JFhThQBbUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Retry via History page

To rerun your Workflow from the `History` page:

1. Locate your failed `Work Order` (use the search bar or filters, if needed)
2. Collapse the Work Order to view related `Runs`
3. Click `rerun` next to the Step that you want to rerun the workflow from.
   Choose the first step to start from the beginning, or a later step to rerun
   the workflow from that step onwards.
4. This will create a new `Run` related to the same Work Order. Check the
   `Status` to see if this Run successfully completed the Work Order.

### Retry via Inspector view

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

## Cancel Pending Runs

If runs are stuck in the queue or were created by mistake, you can cancel them.
Cancelling moves runs from `available` to `cancelled` and updates the
corresponding work order status from `pending` to `cancelled`. See
[Status Codes](./status-codes.md) for more on what each status means.

There are several ways to cancel:

- **Cancel all runs for a work order:** Click the action button on a pending
  work order row in the History page to cancel all of its pending runs.
- **Cancel a single run:** Click the cancel button next to an individual run
  item, either in the run list or on the run detail page.

:::note Runs that start before confirmation

If a pending run begins executing between the time you open the cancel
confirmation dialog and the time you confirm, that run will **not** be
cancelled. Only runs still in the queue at the moment of confirmation are
affected.

:::

## Bulk Actions

You can act on multiple work orders at once by selecting them via checkboxes on
the History page:

- **Bulk Cancel:** Select work orders in the `Pending` state, then click the
  `Cancel` button to cancel all pending runs across the selected work orders.
- **Bulk Retry:** Select work orders in a final state (e.g., Failed, Crashed),
  then click the `Retry` button.

Bulk action buttons are only enabled when all selected work orders share the
same state category. Selecting work orders with mixed states (e.g., some pending
and some failed) or selecting only running work orders will disable all action
buttons.
