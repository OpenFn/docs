---
title: Work Order & Run Status Codes
sidebar_label: Status Codes
---

## Work Order Status

A `Work Order` is a request to start the execution of an OpenFn Workflow with a
given input (e.g., "complete the referral workflow for patient 123"). A Work
Order is the typically the unit of business value for an organization, because
users want to make sure each workflow request has been processed successfully.

Because administrators may want to run the same Work Order multiple times (e.g.,
"try to complete the referral workflow for patient 123 again now that the
government case management system is back online") the "status" of a Work Order
is determined by the status of the _last_ Run for that Work Order.

I.e., if the "complete the referral workflow for patient 123" Work Order has
been run twice and the first run attempt failed but the second run succeeded,
the "status" for that Work Order will be "success".

## Run Status

Every Run has a status which indicates whether it completed successfully.

| Status    | Chip |        Type        | Abort Run?\* | Description/Example                                                                                                                                                          |
| :-------- | :--: | :----------------: | :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pending   |  ⚪  |                    |      -       | The run is waiting for an available worker to begin execution                                                                                                                |
| Running   |  🔵  |                    |      -       | The run is still in progress                                                                                                                                                 |
| Success   |  🟢  |                    |      -       | Either all the steps in this run succeeded _or_ every error was properly handled. Technically, a run is successful if the final step in each branch (the leaf node) succeeds |
| Failed    |  🔴  |      JobError      |      No      | A request failed with status code 404                                                                                                                                        |
| Failed    |  🔴  |     TypeError      |      No      | Try to reference `state.data.patient.age` when `state.data.patient` is `undefined`                                                                                           |
| Failed    |  🔴  |     RangeError     |      No      | Calling `state.patients[5]` when only 2 patients exist                                                                                                                       |
| Crashed   |  🟠  |    SyntaxError     |     Yes      | You've got some bad JavaScript and the worker cannot compile your job code                                                                                                   |
| Crashed   |  🟠  |   ReferenceError   |     Yes      | You've got an undeclared variable in your job code                                                                                                                           |
| Cancelled |  ⚪  |                    |     Yes      | A user aborted the execution                                                                                                                                                 |
| Killed    |  🟡  |   SecurityError    |     Yes      | Your code failed security checks, e.g. tried to use `eval`                                                                                                                   |
| Killed    |  🟡  |    ImportError     |     Yes      | You tried to import external module that we don't allow                                                                                                                      |
| Killed    |  🟡  |      OomError      |     Yes      | Your run used more memory than allowed by the Lightning instance                                                                                                             |
| Killed    |  🟡  | StateTooLargeError |     Yes      | Your step returned a `state` object that exceeded 25% of the total run memory limit                                                                                          |
| Killed    |  🟡  |    TimeoutError    |     Yes      | Took longer than the maximum runtime allowed by the Lightning instance                                                                                                       |
| Exception |  ⚫  |                    |     Yes      | An error occurred that we didn't expect (the instance superuser has been notified)                                                                                           |
| Lost      |  ⚫  |                    |     Yes      | Lightning lost communication with the worker (the instance superuser has been notified)                                                                                      |
| Rejected  |  ⚪  |                    |      -       | The instance administrator won't process this run request because your project has reached its run limit                                                                     |

### \*Note on error handling within a workflow

Note that if a workflow step fails (e.g., `JobError`, `TypeError`, `RangeError`)
the OpenFn worker will continue processing the workflow as there may be error
handling rules in downstream edges. (E.g., "If step 3 fails, execute step 4.")

If a step fails with a crash (e.g., `Syntax Error`) the worker won't be able to
execute any downstream logic and the whole attempt will be aborted.
