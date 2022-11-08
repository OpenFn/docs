---
id: adaptors-intro
title: Adaptors
sidebar_label: Introduction
slug: /
---

An adaptor is an open-source Javascript module that provides OpenFn core users
with a set of operations that help communicate with a specific external system.
In the past, we often referred to them as "language packages". And the two terms
are sometimes used interchangeably, but the preferred way of communicating about
adaptors is as follows:

- "What _**adaptor**_ is that job using?" ("That job is using
  `language-dhis2`.")
- "The DHIS2 _**adaptor**_ is called `language-dhis2`."
- "I don't have the right _**adaptor**_ for this job, let me install it by
  running `npm install @openfn/language-dhis2`.

In short, _most_ _**adaptors**_ follow the naming convention
`@openfn/language-xyz`, but not all do!

## Where to find them?

### On GitHub

The developed adaptors can be found in GitHub under
[github.com/OpenFn/adaptors](https://github.com/OpenFn/adaptors), inside the
`packages` directory. Some examples are:

- [http](https://github.com/OpenFn/adaptors/tree/main/packages/http)
- [postgresql](https://github.com/OpenFn/adaptors/tree/main/packages/postgresql)
- [primero](https://github.com/OpenFn/adaptors/tree/main/packages/primero)

### On platform

When creating or editing a job on platform, you can choose the adaptor to run
the job. This way you "import" the needed operations. Simply open the dropdown
list of adaptors, and click on one.

<img src="/img/adaptor_choice_openfn.png" width="300" />

### On npm

Most of our adaptors are also available on
[npmjs](https://www.npmjs.com/search?q=%40openfn).

![Adaptors list in npm](/img/adaptor_npm.png)

#### Install on platform via npm

When using `platform`, you can install adaptors that are not part of the
recommended adaptors picklist directly from
[npm](https://www.npmjs.com/search?q=%40openfn).

To install from npm, click on the _cloud download icon_ next to the adaptor
version picklist. In the **Select Unreleased Adaptor** dialog box, enter the
`adaptor name`(e.g. `dhis2` for `language-dhis2`) and the corresponding
`version number`(e.g. `v2.3.4`), as listed on
[npmjs](https://www.npmjs.com/search?q=%40openfn), for the adaptor of your
choice. The platform will attempt to install the selected adaptor version it can
be used to run the specified job.

Note that, after this custom installation of the adaptor, `platform` will not
add this adaptor version to the picklist of recommended adaptors in
[JobStudio](/documentation/jobs/job-studio), but you are guaranteed that the
adaptor will be available to use in any of your jobs as long as you specify it
via the **Select Unreleased Adaptor** dialog.

## Developing adaptors

The source code and technical documentation for developing or extending existing
adaptors can be found at www.github.com/OpenFn/adaptors.
