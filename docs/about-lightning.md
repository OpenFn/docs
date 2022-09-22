---
title: Lightning (Coming soon)
sidebar_label: Lightning
---

## Introducing Lightning

[OpenFn/Lightning](https://github.com/OpenFn/lightning/) is a _fully open
source_ workflow automation platform designed for governments and NGOs who need
a flexible solution to integrate and connect _any system_.

##### Leveraging the tech powering the field-tested enterprise OpenFn platform...

Lightning brings together the tried and tested technology which we have been
using since 2015 (the OpenFn
[Integration Toolkit](/documentation/getting-started/integration-toolkit)) to
manage the orchestration and execution of integrations in a stable, scalable and
secure way.

##### ...and providing a fully open source web app with a user-friendly web interface.

A fully open source web app, it can be deployed anywhere through Docker and
comes with a user-friendly, low-code interface with the full functionality
needed for organizations to build, run and audit their workflows all in one
place.

![Lightning](/img/lightning_build_run_audit.png)

### Build

Empower more users in your organization to have a say in what gets automated and
how. Lightning’s visual interface makes workflows more intelligible to
non-technical users, bridging the gap between the IT specialists that build out
automations and program managers that are the real business/ program experts on
the processes that need automating.

![Lightning build interface](/img/lightning_build.png)

### Audit

Treat every workflow run with the care and attention it deserves. In OpenFn,
each incoming request or transaction that gets processed is more than a piece of
data - it represents a vulnerable child in need of critical support, a farmer
managing their savings to make sure they can afford the next harvest. Lightning
provides users with a dashboard that allows them to monitor the health of their
integrations to make sure no request goes unprocessed.

![Lightning audit interface](/img/lightning_audit.png)

## Guiding principles

Lightning is developed in line with the
[principles for digital development](https://digitalprinciples.org/principles/)
and under the guidance of it's Open Source Steering Committee which you can read
about [here](https://openfn.github.io/governance/OSSC.html).

On top of this, Lightning follows 4 key principles which determine how it should
be developed:

### Standards and compliance matter

Lightning is part of the OpenFn Integration Toolkit which is a certified Digital
Public Good. It is fully open source and even has an Open Source Steering
Committee to make sure our users can influence the roadmap.

Lightning makes sure to stay in line with sector standards, and will be GovStack
compliant and OpenHIE compliant.

### Interoperability is an ongoing process

Anyone that has worked on integration projects in the past is well aware that
integrations do break. No matter how well designed they are, the fact is that
**they connect multiple systems that all change over time**: new API versions
get released, data models change, IDs, codes and mappings change, data standards
are updated and the processes themselves evolve. This is why Lightning will
include:

Enhanced testing and debugging:

- Save data from workflow runs as test data for robust workflow testing of edge
  cases
- View the input and output for each step in a workflow to easily identify where
  an error occurred
- Throw custom errors to improve API messages (adaptors)
- Add custom logic to handle a workflow step failure (fail triggers)

First of class monitoring:

- Get notified on run failures
- View the status of every run
- Search workflow runs by input/output data and logs
- Filter workflow runs by status, workflow name and date

Re-processing functionality:

- Bulk reprocess workflow runs after updating workflow steps to course-correct
  if a workflow has been running with flawed logic

### Collaboration is key

On one hand, the users that understand what processes need automating are (more
often than not) business analysts, not developers. They’re the experts on what
needs to happen when and where, and they’re very capable of planning out
integrations and putting together mapping specifications and bpmn flows.

On the other hand, integrations often require custom logic that cannot be
simplified through low-code and therefore must be implemented by software
engineers.

That’s why **the best integrations are built when non-technical users and
developers collaborate**. Lightning is being developed to bridge the gap between
non-technical and technical users through:

Intuitive, user-friendly user interface for non-technical users:

- Understand a workflow in a visual, human-readable format (abstract away from
  code to make workflows understandable to non-technical users)
- Build credentials through a form interface (remove the need to read through
  confusing API documentation)
- Build API requests through a form interface
- Save mappings used in workflows as constants so they can be easily viewed and
  edited without needing to read code
- Clear documentation for users to learn how to plan and build integrations

Projects-as-code and CLI for a developer interface:

- Export, import and configure projects as code in the code editor of your
  choice
- Run, test and deploy projects through a command line interface
- Review and track changes through version control

Collaboration functionality:

- Track changes through version control
- Rollback to a previous version
- Get notified when a workflow is changed
- Share a link to a specific workflow error on the runs history page
- Share a link to a specific workflow step within the builder
- Add collaborators as view-only user or editor to a project
- Audit all changes made to credentials

### It’s not ‘just’ a request or a piece of data, it’s a person

OpenFn specialises in integration tooling for the health and humanitarian
sector. This means that behind every piece of data which comes in through a
request lies a person in need of critical services. This is why Lightning
focusses on:

Accountability:

- Credential audit trail
- Version control

Security:

- Secure credential management (encrypted at REST, credential secrets are
  scrubbed from logs, secure credential sharing
- Zero-persistence pipelines
- Role-based project access
- Additional authentication rules for webhooks

## Get involved:

We are building out in the open, you can follow our progress on the
[Lightning repository](https://github.com/OpenFn/lightning) by clicking ‘Watch’
to track updates and new releases. Ongoing discussions about the development of
Lightning with our Open Source Steering Committee are documented on our
[community forum](https://community.openfn.org/c/ossc/15), all feedback and
comments on Lightning are welcome there. If you would like to become a beta user
or just want to learn more about Lightning and where we’re heading, book in a
call with our product manager here:
https://calendly.com/amber-openfn/short-call.

![Lightning preview](/img/lightning_preview.png)

## Lightning FAQ

#### I can see that Lightning was built recently, is it new? And if so, how can I trust it ?

The Lightning repository may be new, but the technology isn’t. We’ve built out
Lightning by porting the tried and tested code from our proprietary platform. In
other words, Lightning is built with code that has been used in production by
governments and NGOs since 2015 and already handles tens of millions of
transactions a year. Software becomes more robust over time - the more it’s
used, the more edge cases are uncovered and bugs fixed. Over the past 7 years,
every time a bug has come up in our platform, we’ve fixed it and added a test
for it. By bringing over the same tests from platform to Lightning, we’re
essentially guaranteeing the same level of robustness by taking into account
every single edge case or bug that we have ever encountered.

#### If Lightning was built by open-sourcing code from the OpenFn platform, how is it different ?

Under the hood, Lightning is the same as the OpenFn platform. Integrations are
made up of the same building blocks of triggers, adaptors and job expressions;
requests are executed, retried and reprocessed in exactly the same way.

What changes in Lightning is how users _build and monitor_ their integrations.

#### Can I run anything from the OpenFn platform in Lightning ?

Yes, integrations built out on the OpenFn platform are fully compatible with
Lightning.

#### Who is Lightning for ?

Lightning is for anyone in the government or NGO space that needs to integrate
different systems.

#### What will I lose by switching from platform to Lightning ?

Right now: version control, authentication rules on webhooks, etc (that’s why
we’re still in alpha).

Later: nothing - if a feature has proven important to our platform users, it
will be available in Lightning. If there is any feature you require in Lightning
to be able to switch over to it, speak up ! You can reach out to our product
manager Amber via [email](mailto:amber@openfn.org) or even better book some time
with her through her [calendar](https://koalendar.com/e/amber-rignell-openfn).

#### When will Lightning Beta be ready ?

Lightning will be released in Beta by the end of Q4. We will be adding our
roadmap to this page shortly but in the meantime you can follow our progress
through our
[changelog](https://github.com/OpenFn/Lightning/blob/main/CHANGELOG.md).
