---
title: Roadmap and Product Ethos
sidebar_label: Roadmap
---

## Introduction

This page details the planned roadmaps for the key products in the OpenFn
product suite, including Lightning, Adaptors, and this Docs site. While this
page will be updated periodically, you can track our realtime roadmap and
progress [here](#what-are-we-currently-working-on).

## Our approach to product development

At OpenFn, we follow the [Shape Up approach](https://basecamp.com/shapeup) to
help our small engineering team build _meaningul_ products and features faster
without compomising on quality. With Shape Up in place, we typcially commit to
_projects_ that can be delivered in a 4-6 week period with multiple releases
based on QA approval within the building cycle. We also proiritize feedback and
feature requests from our users over features in the backlog.

:::success Transparency and building what matters

Note that it's fairly rare for us to commit to delivering a specific feature
more than 2 or 3 months in the future. We are committed to constantly evluating
what our user base needs most and spending the few resources we have to deliver
value to them—we simply can't guarantee that what sounds like the "7th most
important feature to build" now will still be on our list in 6 months.

At the same time, we strive to be as transparent and inclusive as we can in our
planning processes. We have a big backlog of feature requests and GitHub issues
(bug reports, stubs, even partially shaped epics or projects) that are getting
voted up, commented on, and used as inspiration when we're deciding what to
prioritize next.

Read on to learn more about how we work, how you can see what's coming, and how
you can get involved!

:::

## What are we currently working on?

All of our team's work is tracked publicly using a GitHub Project. Three key
views give you up-to-the-minute insights on what we're doing and what's on our
immediate roadmap.

### See [**_Now_**](https://github.com/orgs/OpenFn/projects/3/views/1) 🚧 for what's been funded and is currently being built

### See [**_Next_**](https://github.com/orgs/OpenFn/projects/3/views/2) 📝 for what's being shaped and _may_ be funded in the next cycle

### See [**_Epics_**](https://github.com/orgs/OpenFn/projects/3/views/7) 🤔 for a list of projects that we're considering, roughly-prioritized

### See [**_Bugs_**](https://github.com/orgs/OpenFn/projects/3/views/22) 🐞 for reported bugs

We will update this site periodically (ideally after each cycle, typically
lasting between 2-6 weeks) to reflect our progress on major items. You can also
keep track of all new features, changes, and bug fixes in our
[Changelog](https://openfn.github.io/lightning/changelog.html).

## How to **get involved**

We use [Canny](https://openfn.canny.io/feature-requests) to receive, track,
engage and manage new feature requests from the community of users of OpenFn
globally whilst giving users the ability to the upvote their favoritie and
mission critical feature request.

### Upvote features 👍

1. Go to [openfn.canny.io](https://openfn.canny.io/feature-requests)
2. Scroll down or use the filter and search features to see existing feature
   requests
3. Click on the (^) beside the request to upvote
4. If you want more upvotes for this feature request, share a link to the
   feature with your network

### Request a new feature 💡

1. Go to [openfn.canny.io](https://openfn.canny.io/feature-requests)
2. Provide a very clear, concise and descriptive title for the feature (e.g.,
   "Make the new workflow button green")
3. Describe the feature request in detail and why it's important to you
4. Share the feature request on the OpenFn community and across your
   professional network for upvotes

:::info Tip

When describing the feature, it is very helpful to help us understand the
problem, proposed solution (if any) and similar solutions we might glean
insights from _if they exist_.

:::

### Open an issue or bug directly

If you prefer the direct approach, you can search across all tracked issues in
OpenFn's GitHub org [here](https://github.com/OpenFn), comment on them, or even
pick them up to work on yourself. If you don't find what you're looking for,
please go ahead an create an issue in the relevant repo. We'll do our best to
respond promptly!

## Summary Roadmaps

#### How to interpret `Status` values in the roadmap

- `Tracked` means we're thinking about this, but it hasn't been
  designed/scoped/shaped
- `Shaped` means it's been scoped and ready to be picked up by an engineer
- `In dev` means it's currently being worked on by an engineer (see
  [_NOW_](#what-are-we-currently-working-on))
- `Delivered` means it's been released (see
  [Changelog](https://openfn.github.io/lightning/changelog.html))

### Lightning Roadmap

OpenFn/Lightning is the fully open-source workflow automation platform at the
core of the OpenFn Digital Public Good (learn more about the product
[here](/documentation#openfn-v2-lightning-)).

| **Feature**                                          | **`Status`** | **Target Timeline** | **Related Links**                                                                                                               | **Description**                                                                                                                                                              |
| ---------------------------------------------------- | ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Project datastores and buffers                    | Delivered    | Q4 '24              | [Issue 2190](https://github.com/OpenFn/lightning/issues/2190)                                                                   | Allow users to configure a data store or buffer that allows temporary of storage of data that can be used in a workflow.                                                     |
| 2. Make User Onboarding better with resources        | Delivered    | Q4 '24              | [Issue 2523](https://github.com/OpenFn/Lightning/issues/2523)                                                                   | Control what is printed in run logs by specifying log levels and allow users to disable printing console.logs, for data privacy once workflows are handling production data. |
| 3. Snapshots and Audit Trail                         | In dev       | Q4 '24              | [Issue 2526](https://github.com/OpenFn/Lightning/issues/2526)                                                                   | Control what is printed in run logs by specifying log levels and allow users to disable printing console.logs, for data privacy once workflows are handling production data. |
| 4. Enable Save and Sync on Canvas and Inspector      | In dev       | Q4 '24              | [Issue 2707](https://github.com/OpenFn/lightning/issues/2707)                                                                   | Make version control more accessible to user by allowing users to save and sync their changes to GitHub via the canvas and inspector.                                        |
| 5. Make AI Assistant available for all users         | In dev       | Q4 '24              | [Issue 2613](https://github.com/OpenFn/lightning/issues/2613)                                                                   | Add AI Assistant to help users build workflows faster and easier.                                                                                                            |
| 6. OpenFn Workflow JSON APIs                         | Shaped       | Q4 '24              | [Issue 2126](https://github.com/OpenFn/Lightning/issues/2126)                                                                   | Expose API endpoints that allows developers to interact with OpenFn from other platforms or within jobs. e.g create a new workflow with the jobs given a JSON payload.       |
| 7. Manual Runs for Cron jobs                         | Shaped       | Q4 '24              | [Issue 1880](https://github.com/OpenFn/Lightning/issues/1880)                                                                   | Allow users to manually run cron triggered workflows with a custom cursor and run now button.                                                                                |
| 8. Workflow library                                  | Tracked      | Q1 '25              | [Issue 2723](https://github.com/OpenFn/lightning/issues/2723)                                                                   | Create a library of common workflows that users can easily access and clone for use in their projects.                                                                       |
| 9. Load local adaptors into lightning                | Tracked      | Q1 '25              | [Issue 2155](https://github.com/OpenFn/lightning/issues/2155)                                                                   | Enable lightning to use local adaptors to allow developers quickly test adaptors locally without deploying to npm                                                            |
| 10. Allow custom inputs for manual runs              | Tracked      | Q1 '25              | [Issue 2155](https://github.com/OpenFn/lightning/issues/2155)                                                                   | Users should be able to trigger a manual run with a custom input data. The input data can a raw JSON, CSV, I/O data clip or dataset from project collections                 |
| 11. Redesign workflow canvas and inspector interface | Tracked      | Q1 '25              | [Issue 2722](https://github.com/OpenFn/lightning/issues/2722)                                                                   | Redesign the canvas and inspector to make user experience and workflow building better for users.                                                                            |
| 12. Enable sandbox and production modes              | Tracked      | Q1 '25              | [Issue 2524](https://github.com/OpenFn/Lightning/issues/2524) and [Issue 2525](https://github.com/OpenFn/Lightning/issues/2525) | Allow users to be able to switch between sandbox and production modes in their projects.                                                                                     |
| 13. Control log output and levels                    | Tracked      | Q1 '25              | [Issue 1755](https://github.com/OpenFn/Lightning/issues/1755)                                                                   | Control what is printed in run logs by specifying log levels and allow users to disable printing console.logs, for data privacy once workflows are handling production data. |
| 14. Enhanced websocket worker Monitoring             | Tracked      | Q1 '25              | [Issue 608](https://github.com/OpenFn/kit/issues/608)                                                                           | Give users better visibility of what's happening on inside the worker, especially when an error occurs during run execution.                                                 |

_You can follow Lightning's progress and track delivered features in the
[Changelog](https://openfn.github.io/lightning/changelog.html)._

### Adaptors Roadmap

OpenFn's open-source adaptors can connect any application, including web APIs,
databases, and even raw data files, enabling interoperability with any
information system ([read more](/adaptors/)). Adaptors, alongside OpenFn's
workflow engine, enable automated workflows that cut across digital systems.

| **Feature**                                                                                       | **`Status`** | **Target Timeline** | **Related Links**                                                                                             | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------- | ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Develop an [`OpenLMIS`](https://openlims.org/) adaptor                                          | Delivered    | Q3 2024             | [Issue 533](https://github.com/OpenFn/adaptors/issues/533)                                                | Enable users to build workflows that interface with OpenLIMS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3. Enhancements to [`FHIR`](http://www.hl7.org/fhir/) & [`OpenHIM`](http://openhim.org/) adaptors | Delivered    | Q3 2024             | See existing adaptors for [FHIR](/adaptors/packages/fhir-docs) and [OpenHIM](/adaptors/packages/openhim-docs) | To rebuild the existing 2021 [OpenFn Instant-OpenHIE reference demo](/documentation/get-started/standards#openhie-standard-architecture) to highlight the exchange of data between existing non-FHIR digital health tools and a HAPI FHIR server. (OpenFn Lightning is OpenHIE-compliant and can be used as a workflow engine for the OpenHIE Interoperability layer - [learn more here](/documentation#openfn-v2-lightning-#standards-and-compliance-matter).) We also want to demonstrate data exchange between existing non-FHIR digital health tools and key components of Google's [Open Health Stack](https://developers.google.com/open-health-stack) and [Cloud Healthcare API](https://cloud.google.com/healthcare-api/docs/concepts/fhir) |
| 4. Enhancements to the [`OCL`](https://openconceptlab.org/) adaptor                               | Tracked      | Q1 2025             | [See existing adaptor docs](/adaptors/packages/ocl-readme)                                                    | To ensure that mappings stored in OCLs can be more easily access and processed as inputs in OpenFn/Lightning workflows                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5. Implement [MOSIP](https://mosip.io/#1) Adaptor                                                 | Tracked      | Q1 2025             | [Issue 737](https://github.com/OpenFn/adaptors/issues/737)                                                    | Add an adaptor that enables users to integrate with MOSIP for identity management use cases across countries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 6. Implement [OpenCRVS](https://www.opencrvs.org/) Adaptor                                        | Tracked      | Q1 2025             | [Issue 736](https://github.com/OpenFn/adaptors/issues/736)                                                    | Enable OpenFn workflows to integrate with OpenCRVS for CRVS workflows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 7. Implement [ArcGIS](https://www.arcgis.com/) Adaptor                                            | Tracked      | Q1 2025             | [Issue 738](https://github.com/OpenFn/adaptors/issues/738)                                                    | Add an ARCGIS adaptor for users to build weorkflow that manage data sync between source and online maps with OpenFn Workflows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 8. Support Personal Access Tokens in DHIS2                                                        | Tracked      | Q1 2025             | [Issue 697](https://github.com/OpenFn/adaptors/issues/697)                                                    | Extend the DHIS2 Adaptor to support Personal Access Token(PAT).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Docs Roadmap

| **Feature**                    | **`Status`** | **Target Timeline** | **Related Links**               | **Description**                                                                                                                                                           |
| ------------------------------ | ------------ | ------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. New Lightning User Guidance | In Progress  | 2024                | To be hosted on docs.openfn.org | New documentation, videos, and other user guidance on how to use OpenFn/Lightning and how to migrate existing OpenFn/platform projects to Lightning (the new OpenFn "v2") |

## Have questions, feedback or found a bug?

We encourage users to post their questions on the OpenFn Community at
[community.openfn.org](https://community.openfn.org), or consider creating
issues for bugs via product repository. You can also independetly start
contributing to the OpenFn software, adaptors, or documentation by getting
started [here](./writing-code.md).
