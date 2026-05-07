---
title: Portability
---

The Portability Specification is an idea right at the heart of OpenFn Projects.
It is both a technical standard and an ongoing commitment.

The Portability Specification ensures that code written in an OpenFn application
can be:

- Deployed to another OpenFn instance (critical for production services running
  in-country)
- Executed on a local machine (great news for developers)
- Ejected from OpenFn entirely and executed through a generic JavaScript runtime

The Portability Specification drives the core functionality of OpenFn Sync, CLI
Deploy, Sandbox merging, and Project export/import from the app.

:::info Legacy Portability Specifications

Our commitment to portability hasn't changed within OpenFn's lifetime - but our
approach and implementation of this commitment have taken many forms.

This document describes the latest Portability Specification, published in
May 2026. For older specifications, see
[Portability Versions](portability-versions)

:::

Nothing about the spec _must_ be specific to OpenFn or any one of our individual
products. We envision a future in which software built with Lightning, the
OpenFn Integration Toolkit, and entirely new and different integration/workflow
tools can adopt this specification.

If you're interested in contributing to the specification, reach out to OpenFn
via the [community forum](https://community.openfn.org), write to us, or suggest
changes by submitting a pull request here.

## Projects As Code

A core tenant of OpenFn Projects is that they can be represented as code, on a
file system or a git branch.

This improves the OpenFn developer experience by:

1. Allowing workflows to be built and tested locally
2. Enabling project version control and an audit trail of project changes
3. Allowing users to port existing projects between different instances (i.e.,
   deployments) of Lightning.

## Project Spec

:::warning TODO

project file? Project text? Project source? Oh I like source

:::

The unit of portability - the thing that encodes a Project and allows it to be
shared, synced, deployed and edited - is called a Project Spec.

It is a structured artifact which defines a set of workflows, and for each
workflow, its, its core configuration, and the sequence of steps which it
executes. We usually represent this structure as YAML, because it's convenient
for humans and machines, but it can be represented in any text format.

With a copy of a project spec, users can:

- Import a project into an OpenFn app instance
- Execute workflows locally with the CLI
- Deploy a project to an OpenFn app instance
- Merge sandbox projects locally

Keys are regularly added to this structure as new features are introduced. We
expect and ensure that these keys are supported in all applications of the spec.

Project specs can be exported from the app via the Settings page.

Workflows can also be interchanged independently, using the same spec. So you
can import a Workflow to an existing project, or execute it locally without
cloning a whole project.

## Spec Example

Here is an example Project spec in YAML format:

```yaml
id: joe-sync-1
name: Joe Sync 1
description: Duplication of staging joe-sync-1
collections:
  - joestuff
credentials:
  - name: http test
    owner: editor@openfn.org
options:
  allow_support_access: false
  requires_mfa: false
  retention_policy: retain_all
workflows:
  - name: A
    steps:
      - id: a
        name: a
        expression: fn(s => s)
        adaptor: '@openfn/language-http@7.2.9'
        configuration: editor@openfn.org|http test
      - id: webhook
        type: webhook
        enabled: true
        next:
          a:
            disabled: false
            condition: always
    id: a
    start: webhook
```

The latest schema for a project spec file is defined in TypeScript
[here](https://github.com/OpenFn/kit/blob/5e4d65af25a6854886c15294ed4cf17f93ecbc19/packages/lexicon/portability.d.ts)

## Linked Resources

:::warning TODO

I don't really want to talk about state here - but I do want to touch on the
idea that the spec is uncoupled from an instance, and that we have these "linked
resources" which on deploy get assigned UUIDs

But the new statefile, main@app.openfn.org.yaml, is not part of the portability
spec! It's just an artefact used by the CLI to track and instance.

If the SPEC is standard for interopability which might go beyond openfn, the
STATEFILE isa proprietary artefact of sync which is 100% coupled to the app

:::

Project State links a project to related artifacts which live on a specific
instance of the app - like a user or a credential.

The Project Spec does not link directly to those resources. Rather, it
references those resources by an identifier string.

When syncing or deploying a project, the hosting app will attempt to reference
an artifact with the same identifier within the project's scope, and connect it.
That connection is local to that instance and usually requires a UUID reference.
This connection is not portable.

:::warning TODO

I want to neatly reference users of the portability spec.

Like "see CLI Sync" to read more about how portability works in practice.

:::

## Execution

TODO: touch on executing workflows with CLI, and also compiling a workflow and
running that with native node.
