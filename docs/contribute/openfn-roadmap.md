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
help our small engineering team build _meaningful_ products and features faster
without compromising on quality. With Shape Up in place, we typically commit to
_projects_ that can be delivered in a 4-6 week period with multiple releases
based on QA approval within the building cycle. We also prioritize feedback and
feature requests from our users over features in the backlog.

:::success Transparency and building what matters

Note that it's fairly rare for us to commit to delivering a specific feature
more than 2 or 3 months in the future. We are committed to constantly evaluating
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

### See [**_Epics_**](https://github.com/orgs/OpenFn/projects/3/views/7) 🤔 for a list of projects that we're considering, roughly-prioritized

### See [**_Bugs_**](https://github.com/orgs/OpenFn/projects/3/views/22) 🐞 for reported bugs

We will update this site monthly to reflect our progress on major items. You can
also keep track of all new features, changes, and bug fixes in real-time via our
[Changelog](https://openfn.github.io/lightning/changelog.html).

## How to **get involved**

We collect feedback and new feature requests via our
[Community](https://community.openfn.org/c/feature-requests/) site. This allows
OpenFn core team and users to track, engage by upvoting their favorite and
mission critical feature requests.

:::info Join our weekly product update

We encourage you to join our weekly product updates where we present what's new
and coming next. It's also a good opportunity for you to ask us questions about
OpenFn. The call holds every Friday at 11 AM GMT (London)
[here](https://meet.google.com/vaw-qvfq-mru) -
(https://meet.google.com/vaw-qvfq-mru). You can also
[add our events to your calendar](https://calendar.google.com/calendar/u/0?cid=Y182Y2Y4NWY0NjlhNWVlMzA4NzEwMWE5MWNhYmRjZTRkMDZlZDU1OGY1OTM3ZGUzNTQ0NWNkYmQ2NDFhMDY3MGFjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20)
so you never miss out on our demos, webinars, and product updates.

:::

### Upvote features 👍

1. Go to the community
   [feature request board](https://community.openfn.org/c/feature-requests/)
2. Scroll down or use the filter and search features to see existing feature
   requests
3. Click on the (Vote) button beside the title of the request to upvote
4. If you want more upvotes for this feature request, share a link to the
   feature with your network

### Request a new feature 💡

1. Go to the community
   [feature request board](https://community.openfn.org/c/feature-requests/)
2. Click on `+ New Topic` to create a new request.
3. Provide a very clear, concise and descriptive title for the feature (e.g.,
   "Make the new workflow button green")
4. Describe the feature request in detail and why it's important to you. Helpful
   if you can add reference images and links.
5. Share the feature request on across your professional network for upvotes

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

:::success Newly Released Features

View [Product Updates](https://community.openfn.org/c/product-updates/20) to see
**features that have been recently delivered** and, in the event that something
is removed from the roadmap, an explanation of what's been removed and why.

For more granular details, the
[CHANGELOG](https://openfn.github.io/lightning/changelog.html) is always up to
date.

:::

### Lightning Roadmap

OpenFn/Lightning is the fully open-source workflow automation platform at the
core of the OpenFn Digital Public Good (learn more about the product
[here](/documentation#openfn-v2-lightning-)).

|                         **ID**                          | **Feature**                                            | **Status** | **Timeline** |    **Δ**     | **Description**                                                                                                                                                                                |
| :-----------------------------------------------------: | :----------------------------------------------------- | :--------: | :----------: | :----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [2920](https://github.com/OpenFn/lightning/issues/2920) | Filter work orders by run state                        |   Shaped   |    Q1'25     |              | Allow users to filter project work orders by run state via the history page.                                                                                                                   |
| [2524](https://github.com/OpenFn/Lightning/issues/2524) | Project Sandbox & Production Modes                     |  Tracked   |    Q2'25     |              | Allow users to be able to switch between sandbox and production modes in their projects.                                                                                                       |
| [2352](https://github.com/OpenFn/lightning/issues/2352) | Improve GitHub Sync experience                         |  Tracked   |    Q1'25     |   ✨ (new)   | Improving user experience for projects with GitHub sync enabled. This covers issues like alerting on sync failure, auto-syncing, and sync prompts.                                             |
| [2965](https://github.com/OpenFn/lightning/issues/2965) | Allow importing projects via project.yaml              |  Tracked   |    Q1'25     |   ✨ (new)   | Allow users to create new projects by importing `project.yaml` file.                                                                                                                           |
| [2999](https://github.com/OpenFn/lightning/issues/2999) | Show errors to users on the canvas                     |  Tracked   |    Q1'25     |   ✨ (new)   | Allow users to see job and path conditions errors on the canvas.                                                                                                                               |
| [2723](https://github.com/OpenFn/lightning/issues/2723) | Workflow Template Library                              |  Tracked   |    Q1'25     |              | Create a library of common workflows that users can easily access and clone for use in their projects.                                                                                         |
| [2904](https://github.com/OpenFn/lightning/issues/2904) | Show audit log and workflow history at a project level |  Tracked   |    Q1'25     |              | Allow project owners and admnins to view their project audit log via the project settings. Workflow history will enable collaborators to see the varios snapshots of a workflow in a timeline. |
| [2155](https://github.com/OpenFn/lightning/issues/2155) | Easy Custom Inputs for Work Orders                     |  Tracked   |    Q2'25     | ⬇️ ~~Q1'25~~ | Users should be able to trigger a manual run with a custom input data. The input data can a raw JSON, CSV, I/O data clip or dataset from project collections                                   |
| [2722](https://github.com/OpenFn/lightning/issues/2722) | Canvas & Inspector Redesign                            |  Tracked   |    Q2'25     |              | Redesign the canvas and inspector to make user experience and workflow building better for users.                                                                                              |
|     [608](https://github.com/OpenFn/kit/issues/608)     | Websocket Worker Monitoring                            |  Tracked   |    Q2'25     |              | Give users better visibility of what's happening on inside the worker, especially when an error occurs during run execution.                                                                   |

_You can follow Lightning's progress and track delivered features in the
[Changelog](https://openfn.github.io/lightning/changelog.html)._

### Adaptors Roadmap

OpenFn's open-source adaptors can connect any application, including web APIs,
databases, and even raw data files, enabling interoperability with any
information system ([read more](/adaptors/)). Adaptors, alongside OpenFn's
workflow engine, enable automated workflows that cut across digital systems.

|                        **ID**                        | **Adaptor**      | **Status** | **Timeline** |  **Δ**   | **Description**                                                                                                                                          |
| :--------------------------------------------------: | :--------------- | :--------: | :----------: | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  [947](https://github.com/OpenFn/adaptors/pull/947)  | Africa's Talking |  Tracked   |    Q1'25     | ✨ (new) | Allow users to be automate SMS workflows across Africa via Africas Talking.                                                                              |
|                          -                           | OCL              |  Tracked   |    Q1'25     |          | To ensure that mappings stored in [OCL](https://openconceptlab.org/) can be more easily access and processed as inputs in OpenFn/Lightning workflows     |
| [737](https://github.com/OpenFn/adaptors/issues/737) | MOSIP 🆕         |  Tracked   |    Q1'25     |          | Add a [MOSIP](https://mosip.io/#1) adaptor that enables users to integrate with MOSIP for identity management use cases across countries.                |
| [736](https://github.com/OpenFn/adaptors/issues/736) | OpenCRVS 🆕      |  Tracked   |    Q1'25     |          | Add an [OpenCRVS](https://www.opencrvs.org/) adaptor.                                                                                                    |
| [738](https://github.com/OpenFn/adaptors/issues/738) | ArcGIS 🆕        |  Tracked   |    Q1'25     |          | Add an [ArcGIS](https://www.arcgis.com/) adaptor for users to build workflow that manage data sync between source and online maps with OpenFn Workflows. |
| [697](https://github.com/OpenFn/adaptors/issues/697) | DHIS2            | Delivered  |    Q1'25     |          | Extend the [DHIS2](https://www.dhis2.org) Adaptor to support Personal Access Token(PAT).                                                                 |

### Docs Roadmap

| **ID** | **Feature**                 | **Status**  | **Timeline** | **Δ** | **Description**                                                                                                                                                           |
| :----: | :-------------------------- | :---------: | :----------: | :---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -    | New Lightning User Guidance | In Progress |    Q1'25     |       | New documentation, videos, and other user guidance on how to use OpenFn/Lightning and how to migrate existing OpenFn/platform projects to Lightning (the new OpenFn "v2") |

## Have questions, feedback or found a bug?

We encourage users to post their questions on the OpenFn Community at
[community.openfn.org](https://community.openfn.org), or consider creating
issues for bugs via product repository. You can also independently start
contributing to the OpenFn software, adaptors, or documentation by getting
started [here](./writing-code.md).
