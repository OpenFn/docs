---
title: Portability
---

## Intent

Beyond facilitating portability/transferability between OpenFn's
[platform](deploy/platform), [microservice](/documentation/microservice/home),
and
[lightning](/documentation/getting-started/integration-toolkit/#lightning-coming-soon)
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

## Proposal v4 `@next`

The portability specification v4 defines how entire projects (groups of
workflows with their associated triggers, credentials and jobs) can be
represented as code. This specification has been written for
[Lightning](/documentation/getting-started/integration-toolkit/#lightning-coming-soon),
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
name: "My Project" # The project name

globals: # All global constants accessible to this project
  clinic-map: file://./globals/clinic-map.json
  project-expense-codes: file://./globals/project-expense-codes.json
  service-codes:
    body:
      m126: Medical Referral
      g01: General Checkup
      ps: Psycho-social Support

workflows: # All workflows in a project
  CommCare-to-OpenMRS: #The workflow name. Workflow names won't have spaces
    jobs: # All jobs/steps in a workflow
      Coerce-to-FHIR: # The job/step name
        trigger: webhook #webhook urls are uids so are not included
        adaptor: language-fhir
        enabled: true
        credential: my-fihr-credential #looks up credential in state by its name
        # when running locally, the credentials values are taken from the overrides file
        # cli run workflow "CommCare-to-OpenMRS" --overrides ./keys-and-values.yaml
        body: "file://./CommCare-to-OpenMRS/Coerce-to-FHIR.js" # each job job-body is stored in a separate file, within a folder for the whole workflow

      Load-to-openmrs:
        trigger:
          on-success: Coerce-to-FHIR
        adaptor: language-openmrs
        credential: my-other-credential
        enabled: true
        body:
          # no "include", but pathlike doesn't work: if you're doing a uri you need to be explicit about it
          # default to local fs -- no numbering because too complicated if users change the order
          "file://./CommCare-to-OpenMRS/Load-to-openmrs.js"

      Send-Wrap-Up-Reports:
        trigger:
          on-success: Load-to-openmrs
        enabled: true
        adaptor: language-mailgun
        globals:
          - service-codes
          - clinic-map
        body: >
          # this triggers a new workflow
          fn(state => state)
          sendEmail(state => state.emailContent)

  Kobo-to-DHIS2: #This is a second workflow
    Fetch-Kobo-Submissions:
      trigger:
        cron: * 5 * * *
      enabled: true
      adaptor: language-kobotoolbox
      body: "file://./Kobo-to-DHIS2/Fetch-Kobo-Submissions.js"

    Upload-to-DHIS2:
      trigger:
        on-success: Fetch-Kobo-Submissions
      adaptor: language-kobotoolbox
      enabled: false
      body: "file://./Kobo-to-DHIS2/Upload-to-DHIS2.js"
```

The `project.state.yaml`:

```yaml
project:
  - id: '45bffee'
    key: 'My Project'

globals:
  - id: 'sj23n36'
    key: 'clinic-map'
  - id: 'bss522g'
    key: 'project-expense-codes'
  - id: '22aa4st'
    key: 'service-codes'

workflows:
  - id: 'cfd7c68'
    key: 'CommCare-to-OpenMRS' # this is the NAME and the KEY
  - id: 'd1ecc4f'
    key: 'Kobo-to-DHIS2'

jobs:
  - id: 'ns6yw54'
    key: 'Coerce-to-FHIR'
  - id: '12bs52j'
    key: 'Load-to-openmrs'
  - id: 'lk81hs6'
    key: 'Send-Wrap-Up-Reports'

  - id: 'sn26sh2'
    key: 'Fetch-Kobo-Submissions'
  - id: 'sk1722h'
    key: 'Upload-to-DHIS2'

credentials:
  - id: '12ms62y'
    key: 'My FHIR Credential'
```

The full specification can be viewed
[here](https://github.com/OpenFn/projects-as-code).

## Other Versions

- [Portability Proposal v4](https://github.com/OpenFn/projects-as-code)
- [Portability Proposal v3](portability-versions#proposal-v3)
- [Portability Proposal v2](portability-versions#proposal-v2) (`@latest` for
  platform-app/microservice compatibility.)
- [Portability Proposal v1](portability-versions#proposal-v1)
