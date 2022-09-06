---
title: Lightning
sidebar_label: Lightning
---

## What is Lightning ?

[OpenFn/Lightning](https://github.com/OpenFn/lightning/) is a _fully open
source_ workflow automation platform which can be deployed and run anywhere. It
is designed for governments or NGOs who want to deploy and manage their _own_
integration platform, and need fully-fledged user management and auditing
capabilities. Lightning relies on the same tried-and-trusted core technology as
the OpenFn iPaaS and comes with an improved, visual interface for building
integrations.

## Features list

Coming soon - this will be updated when Lightning Beta is released by end of
Q4 2022.

## Roadmap

Here's an overview of what we're working on now, what we'll be doing next and
what's coming later.

#### Now

- Build an entire workflow through a single visual interface
- Save inputs from a workflow run for testing and debugging
- View, sort, filter and search workflow runs

#### Soon

- Add authentication rules to webhooks
- Allow users to create accounts on a hosted demo of Lightning
- Export projects as code

#### Later

- Bulk reprocess workflows
- Automated version control
- Hosted options for Lightning
- ATNA-compliant audit events
- Zero-persistance pipelines

## Your questions about Lightning, answered

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

#### How do you decide what to build and how ?

// I don't know how to define this section, plus it might need a bit of
reworking -- let me know what you think

##### Integrations break

Anyone that has worked on integration projects in the past is well aware that
integrations do break. No matter how well designed they are, the fact is that
they connect multiple systems that all change over time: new API versions get
released, data models change, codes/mappings change, data standards are updated
and the processes themselves evolve. This is why Lightning includes:

Enhanced testing and debugging:

- Save inputs as edge cases for robust workflow testing
- View the input and output for each step in a workflow to easily identify where
  an error occurred
- Throw custom errors to improve API messages (adaptors)
- Add custom logic to handle a step failure (fail triggers)

First of class monitoring:

- Get notified on run failures
- View the status of every run
- Search workflow runs by input/output data and logs
- Filter workflow runs by status, workflow name and date

Re-processing functionality:

- Bulk reprocess requests to address any issues

##### Collaboration is key

On one hand, the users that understand what processes need automating are (more
often than not) business analysts, not developers. They’re the experts on what
needs to happen when and where, and they’re very capable of planning out
integrations and putting together mapping specifications and bpmn flows.

On the other hand, integrations will always require custom logic that cannot be
simplified through low-code, require knowledge of javascript and thus cannot be
implemented by non-technical users.

That’s why the best integrations are built when non-technical users and
developers collaborate. Lightning is being developed to bridge the gap between
non-technical and technical users through:

Intuitive, user-friendly user interface for non-technical users:

- Understand a workflow in a visual, human-readable format (abstract away from
  code to make it more non-technical user friendly)
- Build credentials through a form (no need to look at confusing API docs)
- Build requests through a form
- Save mappings used in workflows as constants so they can be easily viewed and
  edited without having to look at code
- Clear documentation for user to learn how to plan and build integrations

Projects-as-code and CLI for a developer interface:

- Export, import and configure projects as code in the code editor of your
  choice
- Run, test and deploy projects through a command line interface
- Review and track changes through github version control

Collaboration functionality:

- Track changes through version control
- Rollback to a previous version
- Get notified when a workflow is changed
- Share a link to a specific workflow error on the runs history page
- Share a link to a specific workflow step within the builder
- Add collaborators as view-only user or editor to a project
- Audit all changes made to credentials

##### It’s not ‘just’ a request or a piece of data, it’s a person

OpenFn specialises in integration tooling for the health and humanitarian
sector. This means that behind every piece of data which comes in through a
request lies a person in need of critical services.

Accountability:

- Credential audit trail
- Version control

Security:

- Secure credential management (encrypted at REST, credential secrets are
  scrubbed from logs, secure credential sharing
- Zero-persistence pipelines
- Role-based project access
- Additional authentication rules for webhooks

##### Standards and compliance matter

Lightning is part of the OpenFn Integration Toolkit which is a certified Digital
Public Good. It is fully open source and even has an Open Source Steering
Committee to make sure our users can influence the roadmap.

Lightning makes sure to stay in line with sector standards, and will be GovStack
compliant and OpenHIE compliant.

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

Lightning will be released in Beta by the end of Q4. You can view our roadmap
above, or read through our
[changelog](https://github.com/OpenFn/Lightning/blob/main/CHANGELOG.md).
