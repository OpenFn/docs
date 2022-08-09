---
title: Portability
---

## Intent

Beyond facilitating portability/transferability between OpenFn's
[platform](deploy/platform), [microservice](/documentation/microservice/home),
and
[lightning](https://docs.openfn.org/documentation/getting-started/integration-toolkit/#lightning-coming-soon)
deployment pathways, the portability proposal establishes a simple,
globally-applicable way of **_specifying workflow automation_** and **_systems
integration_** that might be applied across workflow-engines/integration
platforms across the sector. Nothing about the spec _must_ be specific to OpenFn
or any one of our individual products. We envision a future in which software
built with Lightning, the OpenFn Integration Toolkit, and entirely new and
different integration/workflow tools can adopt this specification.

It boils down to several key top-level artifacts: `workflows` (containing jobs
and triggers), `globals`, and `credentials`.

- **Jobs** dictate what tasks or actions must be performed;
- **Triggers** when they must be performed;
- **Globals** are reusable constants, or datasets (like mapping tables) shared
  across jobs;
- and **Credentials** are what, if any, authentication they'll need to perform
  them.

If you're interested in contributing to the specification, reach out to OpenFn
via the [community forum](https://community.openfn.org), write to us, or suggest
changes by submitting a pull request here.

```mdx-code-block
import ReactPlayer from 'react-player';

<ReactPlayer url='https://www.youtube.com/watch?v=9xXK5xoiMgA' />
```

## Proposal v4 `@latest`

The portability specification v4 defines how entire projects (groups of
workflows with their associated triggers, credentials and jobs) can be
represented as code. This specification has been written for
[Lightning](https://docs.openfn.org/documentation/getting-started/integration-toolkit/#lightning-coming-soon),
the fully open source webb app which extends the OpenFn DPG. It aims to (a)
improve developer experience, allowing them to build and test workflows locally;
(b) enable version control and an audit trail of project changes; and (c) enable
users to port existing workflows from the OpenFn platform to Lightning.

This new specification has been designed and documented thanks to support from a
Digital Square Global Goods grant.

The `project.zip` structure and files:

```
/globals
   sample-clinic-map.json
   sample-translations.json
/workflow-a
   job-1.js
   job-2.js
   job-3.js
/workflow-b
   job-4.js
project.yaml
project.state.yaml
```

The `project.yaml`:

```yaml
TODO
```

The `project.state.yaml`:

```yaml
workflows:
  - id: '32hjkd1'
    key: 'workflow-a'
  - id: 'd712js1'
    key: 'workflow-b'

jobs:
  - id: 'jk232hj'
    key: job-1
- id: 'l6s1n3'
    key: 'job-2'

credentials:
  - id: 'cae14s'
    key: 'credential-1'
```

The full specification can be viewed
[here](https://github.com/OpenFn/projects-as-code).

## Other Versions

- [Portability Proposal v4](https://github.com/OpenFn/projects-as-code)
- [Portability Proposal v3](portability-versions#proposal-v3)
- [Portability Proposal v2](portability-versions#proposal-v2)
- [Portability Proposal v1](portability-versions#proposal-v1)
