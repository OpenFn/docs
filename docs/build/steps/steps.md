---
title: Configure Steps
---

A Step is a specific task or activity in a workflow. Each Step is linked to an
[Adaptor](/adaptors/) and contains business logic to perform a specific task or
operation in that target app.

:::note

In OpenFn V1, there was no concept of `Workflow Steps`--they were referred to as
`Jobs`. In V2, `Jobs` now are defined as _the job expressions or script that
define the business logic and transformation rules of individual `Steps`_.

:::

## Create or edit a Step

Via the Workflow Canvas, click the plus `+` icon to create a _new_ Step, or
click on an existing Step to view or configure its key components.

## Configure the Step

To properly configure a Step, you must understand its basic anatomy.

![Step Anatomy](/img/anatomy_of_step.webp)

A Step includes these key components:

- `Name` - A human-readable name describing the Step and its purpose.
- `Adaptor` - The selected [Adaptor](/adaptors/) that is used to provide
  app-specific functionality for this Step (e.g., `dhis2` or `commcare`).
- `Adaptor Version` - The version of the selected Adaptor, which determines
  which API endpoints and Adaptor functions are available. See below section
  `Choose an Adaptor Version` to learn more.
- `Credentials` - The Credential used to authorize connections to the target app
  related to this Step.
- `Job` - The custom code that defines the business logic and/or sequence of
  operations to be executed in the connected app.

:::tip Writing Jobs

Writing Jobs to add custom logic for business or data transformation rules
typically requires basic knowledge of JavaScript. See the
[Job-writing docs](/documentation/build/workflows) for a detailed overview and
the [Library Examples](/adaptors/library) for sample code.

:::

## 1. Name your Step

First, give your Step a `Name` that describes its purpose (e.g.,
`create patient`, `map form data`);

## 2. Choose an Adaptor

Next, select an `Adaptor` to define which app your Step will connect with.

:::tip

Each Step can only have 1 Adaptor. If you want to connect with 2 different apps,
you should create 2 different Steps.

:::

We've got a whole section on creating new [Adaptors](/adaptors), but the
critical thing to be aware of when writing a step is that you've got to choose
an **Adaptor**, and an **Adaptor Version**.

All of the discussion below of helper functions like `create` or `findPatient`
requires some understanding of adaptors. When you run a step, you're borrowing a
layer of functionality that's been built to connect with some specific API, type
of API, or database.

For example, `create` means one thing in the `salesforce` Adaptor and another
thing entirely in `dhis2`. For this reason, before you can begin writing a step
you have to decide which [Adaptor](/adaptors/) to work with.

### 3.Choose an Adaptor Version

Pick the Adaptor Version you want to use. We recommend selecting the latest
version available, unless you want to use an older version that is compatible
with an older version of the API you're connecting with. See the
[Adaptor docs](/adaptors) for details on each Adaptor.

Adaptors change over time. They're open source, and we encourage as much
contribution as possible—releasing new versions for use on OpenFn.org as soon as
they pass our security reviews. New features may be added and bugs may be fixed,
but in order to make sure that an existing integration is not broken, we
recommend that you select a specific version (rather than using the
"auto-upgrade" feature) when you choose an adaptor. The highest released version
is the default choice here.

:::tip

The _first 4 lines_ in the log of any run on OpenFn will tell you what adaptor
you're running. (As well as the version of worker, engine and NodeJs) This is
incredibly important, particularly if you're trying to troubleshoot steps in
various environments (like your own shell, app.openfn.org etc.).

:::

Pay careful attention to which `version` you're using to write a step. Consider
the following run logs:

```sh
Versions for run f470a3da-8b90-480e-a94f-6dd982c91afe:
    ▸ node.js                     18.19.0
    ▸ worker                      0.5.0
    ▸ engine                      0.2.6
    ▸ @openfn/language-primero    2.9.1
...more logs here...
```

#### Managing Adaptor Versions

While it may be beneficial to upgrade as part of your routine maintenance, these
upgrades should be carefully tested. Most often, customers upgrade to a new
adaptor version for an existing step when they are already making business-driven
changes to that step. Some business-driven changes may actually _require_
upgrading the version in order to use a new feature from the adaptor. Even if
those changes don't require an upgrade, if the technical team must spend time
testing step-specific changes anyway, it may be an ideal opportunity to also test
an upgrade of the adaptor version.

Adaptors follow [SEMVER](https://semver.org/) so you can be reasonably assured
that upgrading from `x.1.z` to `x.2.z` will not lead to existing step code
failing, but an upgrade from `3.y.z` to `4.y.z` may—in SEMVER _major_ upgrades
(those that change the first number in the `x.y.z` version number) have
"breaking" or "non-backwards compatible" changes.

:::tip

When you configure a Step, you can select a specific `Adaptor Version` to
version-lock your Step. Avoid selecting `latest` for Adaptor Version, if you
want this and to avoid the risk of accidental upgrades on live Workflows.

:::

### 4. Write a Job for custom business logic or data transformation rules

Click the code button `</>` displayed on the configuration panel to write or
edit a Job expression to define the "rules" or the specific tasks to be
completed by your Step. See the pages on [the Inspector](./step-editor.md) and
[writing Jobs](/documentation/jobs/job-writing-guide) to learn more.
