---
title: Lightning (Beta)
sidebar_label: Lightning
---

## Introducing Lightning

[OpenFn/Lightning](https://github.com/OpenFn/lightning/) is the v2 of the OpenFn
integration software: a _fully open source_ workflow automation platform
designed for governments and NGOs who need a flexible solution to integrate and
connect _any system_.

##### Leveraging the tech powering the field-tested enterprise OpenFn platform...

Lightning brings together the tried and tested technology which we have been
using since 2015 (the OpenFn [Integration Toolkit](/documentation#our-products))
to manage the orchestration and execution of integrations in a stable, scalable
and secure way.

##### ...and providing a fully open source web app with a user-friendly web interface.

A fully open source web app, it can be deployed anywhere through Docker and
comes with a user-friendly, low-code interface with the full functionality
needed for organizations to build, run and audit their workflows all in one
place.

![Lightning](/img/lightning_build_run_audit.webp)

### Build

Empower more users in your organization to have a say in what gets automated and
how. Lightning’s visual interface makes workflows more intelligible to
non-technical users, bridging the gap between the IT specialists that build out
automations and program managers that are the real business/ program experts on
the processes that need automating.

![Lightning build interface](/img/lightning_build.webp)

### Audit

Treat every workflow run with the care and attention it deserves. In OpenFn,
each incoming request or transaction that gets processed is more than a piece of
data - it represents a vulnerable child in need of critical support, a farmer
managing their savings to make sure they can afford the next harvest. Lightning
provides users with a dashboard that allows them to monitor the health of their
integrations to make sure no request goes unprocessed.

![Lightning audit interface](/img/lightning_audit.webp)

## Features

##### General

- Deploy Lightning via docker
- Create and delete user accounts
- Create new projects and assign users with different access levels to these
  projects (owner/admin/editor/viewer)
- Transfer credential ownership to another user
- View an audit trail of all credential changes (superuser role)
- Set up SSO via an identity provider
- Generate and revoke API tokens
- List projects, jobs and runs via JSON API

##### Workflow builder

- Create a new workflow with a webhook or cron trigger
- Create and configure jobs for a workflow with any OpenFn adaptor and operation
- Create credentials through a form
- View all available operations for a given adaptor
- View the metadata from your external system (DHIS2 and Salesforce)
- View the input and output from the last run of each job in a workflow
- Run a job manually

##### Runs history

- View all runs grouped by workflow
- Search and filter runs by status, workflow and run logs
- Retry a workflow run from the start (first job)

##### Project settings

- Get notified via email on run failure
- Receive a daily, weekly or monthly digest of project activity
- View collaborators for a project
- Update a project name and description

## Roadmap

See the [Lightning Roadmap](./openfn-roadmap.md) for a detailed list of features
that are in the backlog, planned, and/or in development for the OpenFn Digital
Public Good.

_You can follow our progress and track delivered features in our
[changelog](https://github.com/OpenFn/Lightning/blob/main/CHANGELOG.md)._

## Try it out

:::danger Please note

Lightning is still in Beta. Full release planned for Q4 2023.

:::

You have 3 options for exploring OpenFn/Lightning:

1. For quick viewing, visit [demo.openfn.org](https://demo.openfn.org/) and log
   into our demo account with username: `demo@openfn.org` password:
   `welcome123`. (NOTE that any changes made here are lost when the demo resets
   every 24 hours. I.e., don't build things you'd like to keep.)
2. To get your own account and start building non-production workflows, register
   for an account at [app.openfn.org](https://app.openfn.org/).
3. To install and run Lightning locally follow the instructions in the
   [github README](https://github.com/OpenFn/Lightning).

Go through the
[self-paced user interview](https://www.openfn.org/blog/2023-04-13-lightning-beta)
to learn how OpenFn Lightning works _and_ help us out with feedback in just 15
minutes.

## Guiding principles

Lightning is developed in line with the
[principles for digital development](https://digitalprinciples.org/principles/)
and under the guidance of it's Open Source Steering Committee which you can read
about [here](https://openfn.github.io/governance/OSSC.html).

On top of this, Lightning follows 4 key principles which determine how it should
be developed:

### 1. Standards and compliance matter

Lightning is part of the OpenFn Integration Toolkit which is a certified Digital
Public Good. It is fully open source and even has an Open Source Steering
Committee to make sure our users can influence the roadmap.

Lightning workflows can be used to automatically enforce and apply data exchange
standards, such as FHIR and ADX. Lightning's design and roadmap are driven by
open standards, and will therefore provide a GovStack- and OpenHIE-compliant
workflow engine. Learn more via the following resources:

- [Watch this video](https://youtu.be/PTRRZBYtqyc) to learn how OpenFn is an
  OpenHIE-compliant workflow engine.
- Check out OpenFn's entry in the
  [OpenHIE Reference Technologies page](https://wiki.ohie.org/display/documents/Reference+Technologies).
- Explore the OpenFn-Instant OpenHIE
  [reference demo implementation](./instant-openhie.md).
- Learn more about the GovStack
  [Workflow Building Block](https://govstack.gitbook.io/bb-workflow/2-description)
  specification.

### 2. Interoperability is an ongoing process

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

### 3. Collaboration is key

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

### 4. It’s not "just" a request or a piece of data, it’s a person

OpenFn specializes in integration tooling for the health and humanitarian
sector. This means that behind every piece of data which comes in through a
request lies a person in need of critical services. This is why Lightning
focusses on:

Accountability:

- Credential audit trail
- Version control

Security:

- Secure credential management (encrypted at REST, credential secrets are
  scrubbed from logs, secure credential sharing
- Zero-retention pipelines
- Role-based project access
- Additional authentication rules for webhooks

## Security

OpenFn treats security as a top priority, and is trusted to handle information
of the most sensitive nature (for example UNICEF’s child case data).

To increase transparency and accountability around security, as well to help
other digital public goods think through key aspects of their own organizations’
security postures, below is a list of the **key aspects of our own security
program**.

### Organizational security practices

To ensure a positive security posture at OpenFn, we:

- Conduct Employee IT security onboarding training & policy
- Run monthly security standups with the whole team
- Conduct an annual security review informed by the OWASP ASVS

### DevSecOps

To ensure best practices in our code we:

- Monitor dependency vulnerabilities via GitHub’s
  [dependabot](https://github.com/features/security)
- Perform static code analysis on each commit with
  [Sobelow](https://sobelow.io/)
- Ensure code is clean and standardised through preflight checks
- Monitor code coverage of unit tests and integration tests with Codecov

### Roles and permissions

Lightning provides identity and access management for users via various roles
and permissions which determine what level of access they have for resources
across projects and instances (i.e., deployments).

Lightning has 2 types of access levels:

1. Instance-wide access levels are managed via an attribute on the `user`
   object:

- **Superusers** are the administrator of the Lightning instance. They can
  manage projects and users, configure authentication providers and view the
  audit trail.
- **Users** are normal Lightning users. They can manage their own account and
  credentials, and have access to projects they are added to.

2. Project-wide access levels

- A project **viewer** can view the resources of a project in read-only mode and
  configure their own project digest and failure alerts.
- A project **editor** can view, create and edit the jobs and workflows of a
  project they have access to, as well as run and rerun jobs.
- A project **admin** has administration access to project members. They can
  edit the name and description as well as delete a project.
- A project **owner** can delete a project.

### Application security

Lightning is designed to:

- Scrub credential data from run logs
- Encrypt credentials at REST
- Track credential changes through an audit trail
- Encrypt passwords
- Enforce access controls with deny by default
- Allow users to differentiate between staging and production credentials
- Enable secure credential transfer across users
- Purge credentials and user data on account deletion
- Allow administrators to configure SSO through an identity provider

### Data residency

OpenFn Lightning is fully open source and can be deployed in any country. We
offer high-availability managed deployments that are localized to any GCP or AWS
location—guaranteeing that no data ever leaves the selected country.

### Implementation guidance and recommendations

To help our users adopt best practices when it comes to the design of their
integrations, we’ve published a
[Security Guidebook for data integration implementations](./getting-started/security.md).

## Get involved

We are building out in the open, follow our progress on
[GitHub](https://github.com/OpenFn/lightning) by clicking ‘Watch’ to track
updates and new releases. Ongoing discussions with our Open Source Steering
Committee about Lightning are documented on our
[community forum](https://community.openfn.org/c/ossc/15). Your feedback and
comments are welcome there. If you would like to become a beta user or learn
more about Lightning, book in a call with our product manager here:
https://calendly.com/amber-openfn/short-call.

![Lightning preview](/img/lightning_preview.webp)

## Lightning FAQ

#### I can see that Lightning was built recently, is it new? And if so, how can I trust it?

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

#### If Lightning was built by open-sourcing code from the OpenFn platform, how is it different?

Under the hood, Lightning is the same as the OpenFn platform. Integrations are
made up of the same building blocks of triggers, adaptors and job expressions;
requests are executed, retried and reprocessed in exactly the same way.

What changes in Lightning is how users _build and monitor_ their integrations.

#### Can I run anything from the OpenFn platform in Lightning?

Yes, integrations built out on the OpenFn platform are fully compatible with
Lightning.

#### Who is Lightning for?

Lightning is for anyone in the government or NGO space that needs to integrate
different systems.

#### What will I lose by switching from platform to Lightning?

Right now: version control, authentication rules on webhooks, and the other
features in our roadmap (we’re still in beta).

Later: nothing - if a feature has proven important to our platform users, it
will be available in Lightning. If there is any feature you require in Lightning
to be able to switch over to it, speak up! You can reach out to our team via the
[OpenFn Community](https://community.openfn.org/).

#### When will Lightning Beta be ready?

Lightning is currently in Beta. You can register for an account on
[app.openfn.org](https://app.openfn.org/). Lightning will be released in
Q4 2023.
