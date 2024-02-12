---
title: History tracking in OpenFn
sidebar_label: History
---

For platform administrators, `History` is your central console for monitoring
all activity across your active Workflows. Read on to understand its key
components.

## History

The `History` page provides a list of all of the
[Work Orders](/documentation/get-started/terminology#work-order) and
[Runs](/documentation/get-started/terminology#run) that have been processed
in a Project.

![History](/img/case-referral-history.png)

## Workflow execution: Work Orders and Runs

OpenFn Workflows are executed as follows:

1. A Workflow `Trigger` is activated by a webhook event, cron timer, or manual
   action.
2. This creates a `Work Order`--a request to run a Workflow with a given input
   (e.g, a new form submission or patient record that needs to be processed).
   For a Work Order to be cpmpleted, it should reach an ending Step succesfully
   (without errors) - this ensures that the processing of has been completed.
3. A `Run` is then executed to try to complete the Workflow successfully. This
   Run will have a
   [status code](/documentation/monitor-history/status-codes), indicating
   whether the Workflow Steps were successfully processed.
4. If the 1st `Run` fails, then you can rerun it to "retry" the workflow. A 2nd
   `Run` will be created. If successful, then both the Run and related Work
   Order will be updated with a `success` status.

![History Page](/img/history-page-annotated.png)

Check out the other pages in this docs section to learn more about inspecting
Runs, troubleshooting, and rerunning failed Runs.
