---
title: Work Order & Attempt Status Codes
sidebar_label: Status Codes
---

## Work Order Status

A work order (e.g., "complete the referral workflow for patient 123") is the
typically the unit of business value for an organization.

Because administrators may want to attempt the same work order multiple times
(e.g., "try to complete the referral workflow for patient 123 again now that the
government case management system is back online") the "status" of a work order
is determined by the status of the _last_ run for that work order.

I.e., if the "complete the referral workflow for patient 123" work order has
been run twice and the first one failed but the second attempt succeeded, the
"status" for that work order will be "success".

## Run Status

Every run has a status which indicates whether it completed successfully.

| Status    | Chip |      Type      | Abort Attempt?\* | Description                                                                                                                                                                  |
| :-------- | :--: | :------------: | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pending   |  ⚪  |                |        No        | The run is waiting for an available worker to begin execution                                                                                                                |
| Running   |  🔵  |                |        No        | The run is still in progress                                                                                                                                                 |
| Success   |  🟢  |                |        No        | Either all the steps in this run succeeded _or_ every error was properly handled. Technically, a run is successful if the final step in each branch (the leaf node) succeeds |
| Failed    |  🔴  |    JobError    |        No        | A request failed with status code 404                                                                                                                                        |
| Failed    |  🔴  |   TypeError    |        No        | Try to reference `state.data.patient.age` when `state.data.patient` is `undefined`                                                                                           |
| Failed    |  🔴  |   RangeError   |        No        | Calling `state.patients[5]` when only 2 patients exist                                                                                                                       |
| Crashed   |  🟠  |  SyntaxError   |       Yes        | You've got some bad JavaScript and the worker cannot compile your job code                                                                                                   |
| Crashed   |  🟠  | ReferenceError |       Yes        | You've got an undeclared variable in your job code                                                                                                                           |
| Cancelled |  ⚪  |                |       Yes        | A user aborted the execution                                                                                                                                                 |
| Killed    |  🟡  | SecurityError  |       Yes        | Your code failed security checks, e.g. tried to use `eval`                                                                                                                   |
| Killed    |  🟡  |  ImportError   |       Yes        | You tried to import external module that we don't allow                                                                                                                      |
| Killed    |  🟡  |    OomError    |       Yes        | Your run used more memory than allowed by the Lightning instance                                                                                                             |
| Killed    |  🟡  |  TimeoutError  |       Yes        | Took longer than the maximum runtime allowed by the Lightning instance                                                                                                       |
| Exception |  ⚫  |                |       Yes        | An error occurred that we didn't expect (the instance superuser has been notified)                                                                                           |
| Lost      |  ⚫  |                |       Yes        | Lightning lost communication with the worker (the instance superuser has been notified)                                                                                      |

### \*Note on error handling within a workflow

Note that if a step fails (e.g., `JobError`, `TypeError`, `RangeError`) the
worker will continue processing the workflow as there may be error handling
rules in downstream edges. (E.g., "If step 3 fails, execute step 4.")

If a step fails with a crash (e.g., `Syntax Error`) the worker won't be able to
execute any downstream logic and the whole attempt will be aborted.
