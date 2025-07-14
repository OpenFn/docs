---
title: Logs & Troubleshooting
sidebar_label: Logs & Troubleshooting
keywords:
  - runs
  - logs
  - log levels
  - status codes
  - exit codes
  - troubleshooting
---

This page provides troubleshooting tips for _OpenFn v2 platform_ users.

## Runs

One of the most helpful pages for troubleshooting on OpenFn is the
[History](./activity-history.md) page. This page provides a list of all of the
runs executed for a Work Order and their status. Project administrators can
troubleshoot errors by clicking into the run to review the run details. Learn
more about runs [here](./inspect-runs.md) here.

### Status codes

Every run will have a status code. The status code is a way for OpenFn to
classify the run status and can help you troubleshoot errors. Learn more about
OpenFn status codes and what each one means [here](./status-codes.md).

### The time it took for the workflow to fail

The run will also record how long it took before the workflow failed. This
information helps users understand if the workflow is taking longer than it
should and is especially helpful with errors that involve timeouts. You can use
the run to determine at which operation the workflow is timing out and determine
if the workflow performance can be optimized.

### Run logs

As workflows are developed it is important to log details which will make
testing and troubleshooting much easier in the future.

#### Log Levels

![log-levels](/img/log-levels.webp)

| Level   | Description                                                                                                                          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `debug` | Shows all logs, including system-level stuff produced by the "runtime" and the output of a user-entered `console.debug()` statement. |
| `info`  | The default log level, shows key information produced by the adaptors or `console.log()`/`console.info()` statements.                |
| `warn`  | Hides most of the noise and only shows major run events (step start/end), adaptor warnings, or `console.warn()` statements.          |
| `error` | Hides all but major run events, adaptor errors, and `console.error()` statements.                                                    |

#### Mappings

If possible, the logs should be written so that you can see exactly what was
mapped between the source system and the destination system. In summary, the log
can have a **"Data received from source system"** section and a **"Data to be
uploaded to destination system"** section.

These logs can help admins verify that the source data and the data being
uploaded to the destination system is correct. For example, seeing in the logs
that a unique identifier is being mapped to `undefined` in the destination
system can help you understand the root cause of an error. This Salesforce error
message might be caused by an `undefined` mapping:

`METHOD_NOT_ALLOWED: HTTP Method 'PATCH' not allowed. Allowed are GET,HEAD,POST at HttpApi.getError`.

#### Error messages

The run log should also tell us if an error has been thrown, and depending on
the destination system, what the error message is. Sometimes the error message
is very specific like:

`NOT_FOUND: Provided external ID field does not exist or is not accessible`

This error from Salesforce usually indicates that `External ID` has not been
checked in the field settings in Salesforce.

Other error messages are not as clear and can take some time to debug:

`TypeError [Error]: Cannot read property 'split' of undefined`

**`TypeErrors`** usually indicate that the job received a part of the input that
it wasn't expecting, or there is a syntax error in your job code. It means that
the job needs to be updated to know how to handle the input. In this case, the
job received an old version of the Commcare form which was missing a field on
which the job called the `split` function. You can determine this by reviewing
the job for which fields the split function is being called on and checking that
they are all present in the message.

The more you test and troubleshoot with a particular system, the more familiar
with its error messages you become.

:::tip

OpenFn has outlined several of the more common error messages specific to some
of the systems that we have integrated in the past. Explore these systems and
their error messages [here](/adaptors#connect-anything).

:::

## Leveraging search and filtering in OpenFn

Leverage the various search functionalities in OpenFn to find the right runs to
support your troubleshooting. You can search on the History page across OpenFn
IDs, Inputs, and/or Logs.

Check out this [video](https://youtu.be/XIUykmLCxwQ?si=hquc8rPTJrAZkbbD) for how
to use Search.

## Sign up for email alerts

You can turn on notifications to receive
[email alerts](../manage-projects/notifications.md) when a workflow fails and
subscribe to digests that summarize project activity.

## More

> What happens if my survey data from ODK needs to link to existing records in
> my Salesforce system but a respondent enters or selects an invalid
> `external ID`?

Great question, and don't worry, it happens all the time. Assuming you've
already taken all possible measures to either pre-load external IDs in your ODK
form or use more human-proof IDs (like barcodes and fingerprints) here's the
flow of work:

1. Read the email, and inspect the reason for failure.

2. 99% of failed runs on OpenFn are due to `value mismatches`. The _collected_
   `id` in ODK doesn't match the _expected_ `id` in Salesforce. You must now
   choose to either:

   A. Edit the source `id` in your `receipt` & retry the attempt.

   B. Edit the related `id` in your destination system & retry the attempt.

   C. Ignore the attempt—this source data will never reach your destination
   system. (There have been reports of ODK Aggregate's JSON publisher sending
   duplicate values. If that happens and your run fails due to "duplicate
   values" on a particular unique field you can safely ignore the run in
   OpenFn.)

Editing data in your destination system can be done through that system's
interface. Many tools that act as `sources` (like ODK) do not allow for easy
editing and re-submission of data. You can use OpenFn to edit the source data
before retrying the attempt.

### Common Error Messages

The most common error messages with explanations are:

```sh
DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0
The insert is blocked because you are attempting to create a new record with a
unique field with the same value as an existing record.
```

```sh
Required value missing
```

```sh
ExternalId not found
```

```sh
{ INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields: Contact__c.
Please check the security settings of this field and verify that it is
read/write for your profile or permission set. }
```

This last one may arise if a master-detail relationship in Salesforce is not set
as reparentable and the user attempts to run an upsert.
