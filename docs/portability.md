---
title: Portability
---

## Intent

Beyond facilitating portability/transferability between OpenFn's
[platform](deploy/platform), [microservice](/documentation/microservice/home)
and
[lightning](https://docs.openfn.org/documentation/getting-started/integration-toolkit/#lightning-coming-soon)
deployment pathways, the portability proposal esablished a simple,
globally-applicable way of **specifying workflow automation** that might be
applied across workflow-engines/integration platforms across the sector. Nothing
about the spec _must_ be specific to OpenFn or any one of our individual
products. We envision a future in which software built on [core](deploy/diy),
[engine](deploy/diy), and entirely new and different integration/workflow tools
can adopt this specification.

It boils down to three key sets of artifacts: `jobs`, `triggers`, and
`credentials`. Respectively, they determine (1) what actions must be performed,
(2) when they must be performed, and (3) what, if any, authentication they'll
need to perform them.

If you're interested in contributing to the specification, reach out to OpenFn
via the [community forum](https://community.openfn.org), write to us, or suggest
changes by submitting a pull request here.

```mdx-code-block
import ReactPlayer from 'react-player';

<ReactPlayer url='https://www.youtube.com/watch?v=9xXK5xoiMgA' />
```

## Proposal v4 `@latest`

The portability specification v4 defines how entire projects can be ported
(groups of workflows with their associated triggers, credentials and jobs). This
specification has been written for
[Lightning](https://docs.openfn.org/documentation/getting-started/integration-toolkit/#lightning-coming-soon),
the fully open source webb app which extends the OpenFn DPG. It aims to (a)
improve developer experience, allowing them to build and test workflows locally
(b) Enable version control and an audit trail of project changes (c) Enable
users to port existing workflows from the OpenFn platform to Lightning

Work for writing the specification has been funded by the Digital Square Global
Goods grant.

     The `project.zip` structure and files:

     ```
     /globals
     /workflow-a
        job-1.js
        job-2.js
        job-3.js
     /workflow-b
        job-4.js
     project.yaml
     project.state.yaml
     ```

     The `project.state.yaml`:

     ```yaml
     workflows:
     - id: "32hjkd1"
     key: "workflow-a"
     - id: "d712js1"
     key: "workflow-b"
     jobs:
     - id: "jk232hj"
     key: job-1
     - id: "l6s1n3"
     key: "job-2"
     credentials:
     - id: "cae14s"
     key: "credential-1"
     ```

The full specification can be viewed
[here](https://github.com/OpenFn/projects-as-code).

## Other Versions

- [Portability Proposal v4](https://github.com/OpenFn/projects-as-code)
- [Portability Proposal v3](portability-versions#proposal-v3)
- [Portability Proposal v2](portability-versions#proposal-v2)
- [Portability Proposal v1](portability-versions#proposal-v1)
