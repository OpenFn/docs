---
title: Portability
---

The Portability Specification is an idea right at the heart of OpenFn Projects.
It is both a technical standard and an ongoing commitment. It ensures that code
written in an OpenFn application can be:

- Deployed to another OpenFn instance (critical for production services running
  in-country)
- Executed on a local machine (great news for developers building workflows or
  adaptors)
- Ejected from OpenFn entirely and executed through a generic JavaScript runtime

This manifesto drives the core functionality of OpenFn Sync, CLI Deploy, Sandbox
merging, and Project export/import from the app.

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

A core tenet of OpenFn Projects is that they can be represented as code, on a
file system or a git branch.

This improves the OpenFn developer experience by:

1. Allowing workflows to be built and tested locally
2. Enabling project version control and an audit trail of project changes
3. Allowing users to port existing projects between different instances (i.e.,
   deployments) of Lightning.

## Project Spec

The unit of portability - the thing that encodes a Project and allows it to be
shared, synced, deployed and edited - is called a Project Spec. It is an
abstract definition of a project, a blueprint which can be deployed to many
places.

This structure defines a set of workflows, and for each workflow, its core
configuration, and the sequence of steps which it executes. We usually represent
this structure as YAML, because it's convenient for humans and machines, but it
can be represented in any text format.

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
id: portability-example
name: Portability Example
collections:
  - cache
credentials:
  - name: local login
    owner: editor@openfn.org
workflows:
  - name: Event-based workflow
    steps:
      - id: transform-data
        name: Transform data
        expression: fn(s => s)
        adaptor: '@openfn/language-common@latest'
      - id: webhook
        type: webhook
        webhook_reply: before_start
        enabled: true
        next:
          transform-data:
            disabled: false
            condition: always
    id: event-based-workflow
    start: webhook
  - name: Scheduled workflow
    steps:
      - id: common
        name: Common
        expression: fn(s => s)
        adaptor: '@openfn/language-common@3.3.1'
      - id: cron
        type: cron
        enabled: true
        cron_expression: 00 00 * * 1-5
        cron_cursor_job_id: get-data
        next:
          get-data:
            disabled: false
            condition: always
      - id: get-data
        name: Get data
        expression: fn(s => s)
        adaptor: '@openfn/language-http@latest'
        configuration: editor@openfn.org|local login
        next:
          throw-error:
            disabled: false
            condition: on_job_failure
          common:
            disabled: false
            condition: '!state.error'
            label: sometimes
          never:
            disabled: true
            condition: on_job_success
      - id: never
        name: never
        expression: fn(s => s)
        adaptor: '@openfn/language-http@7.2.10'
      - id: throw-error
        name: throw error
        expression: fn(s => s)
        adaptor: '@openfn/language-common@3.3.1'
    id: scheduled-workflow
    start: cron
```

The latest schema for a project spec file is defined in TypeScript
[here](https://github.com/OpenFn/kit/blob/main/packages/lexicon/portability.d.ts)

## Syncing Projects

For more details about how a project can be deployed, executed, pulled and
edited, see our extensive documentation on [CLI Sync](/documentation/sync).

## Linked Resources

While we designed Projects with portability in mind - some features are
intrinsically NOT portable.

For example, credentials contain highly secure tokens, which by design and
nature should be very hard to extract from the OpenFn platform. So credentials
aren't really portable. When exporting a project, sensitive credentials should
not be included in that exported, plain-text document.

Similarly, collections are a feature which is tied closely to a specific
deployment of an OpenFn platform. The data of collections is not covered by the
portability spec (although with the right permissions data can be synced between
collections).

These kinds of non-portable resources are not part of a project, but they are
LINKED to a project.

Usually resources are linked by name. Credentials and collections just declare a
dependency on a thing with a given name, which must be resolved at runtime. The
CLI has tools to do that, and when deploying to a target instance the instance
may need to be pre-configured to have matching resources.

## Legacy Portability Specifications

For older versions of our approach, see
[Portability Versions](portability-versions)
