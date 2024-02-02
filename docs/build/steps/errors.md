---
title: Exit Codes & Errors
---

## About errors

Errors are your friends. The most important thing you can do when encountering
an error in any step of a data integration project is to _read_ what's on the
screen. While this may sound obvious, it's very easy to see a big block of
technical language and switch off.

Often, there are simple business reasons that a run is failing and they can be
identified from the error messages displayed in the logs by @openfn/core.

## Standard Exit Codes

### 0: Success

Exit code `0` is a success (run succeeded, e.g. a destination system responded
with a `200`)

### 1: Error

Exit code `1` is a normally-handled error (run failed normally, e.g. a
destination system responded with a `4XX`, `5XX`, or some specialized
`RequiredFieldMissing` error.)

### 2: Timeout

Exit code `2` means that your run timed out. It exceeded the timeout you set for
your job, or if you're using the hosted platform on a non-enterprise plan, it
exceeded `100` seconds.

### 10: Core Error

Exit code `10` means there was an error in `@openfn/core/cli.js execute`. It's
possible that you job can't be run how it's written, but that various validation
checks failed to warn you earlier.

### 134: Out of memory

This is a standard out of memory error from the NodeVM. See
[NodeVM memory limits](#nodevm-limits) below.

## Special Exit Codes (Platform)

The OpenFn platform controls the execution of all of your jobs via the ErlangVM.
(Learn about Erlang [here](https://www.erlang.org/).) The following exit codes
are applied at the level of this controlling VM, rather than down inside your
run's NodeVM.

### 3: Failed to start

Exit code `3` means the run could not be started due to an Erlang error. This
could relate to network traffic, but very rare as an error which takes place
_before_ the run is started will be retried—with an exponential backoff—for a
very long time.

### 4: The NodeVM is unresponsive

Exit code `4` means that the NodeVM running your job became unresponsive. It
attempted to exit after the timeout but couldn't, so we shut down the process
from the controlling ErlangVM.

### 5: Elixir/ErlangVM Error

Exit code `5` means we encountered an unexpected error during the execution of
your job which could only be caught by the controlling ErlangVM. Errors like
this are very rare and trigger an internal audit by the OpenFN engineering team.

### 6: Aborted by project administrator

Exit code `6` means that a run created and queued for execution but then
subsequently aborted by request of an administrator or owner of that project.

### 11: Node.js Error

Exit code `11` means that there was an error in the NodeVM execution but the
exit code itself couldn't be captured by our application.

## Limits

We've shifted this content to a dedicated [limits](/documentation/jobs/limits)
page.

### [NodeVM memory limits](/documentation/jobs/limits#nodevm-memory-limits)

### [Job state limits](/documentation/jobs/limits#job-state-limits)
