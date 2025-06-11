---
title: Versions of the Portability Proposal
---

OpenFn is currently designing a portable project configuration schema that can
be used to import or export projects between OpenFn/platform and OpenFn/engine.

## Proposal v4

The portability specification v4 defines how entire projects (groups of
workflows with their associated triggers, credentials and jobs) can be
represented as code. This specification has been written for
[Lightning](/documentation/legacy/getting-started/integration-toolkit#lightning-coming-soon),
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

## Proposal v3

v3 introduces
[URI schemes](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
`file://`, `https://`, `gcs://`

```yaml
jobs:
  job-1:
    expression: 'file://my-job.js' # URIs may be used (e.g., https://raw.githubusercontent.com/org/repo/my-job.js)
    adaptor: '@openfn/language-common'
    trigger: trigger-1
    credential: my-secret-credential
  recurring-job:
    expression: >
      fn(state => {
        console.log("Hi there!")
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: every-minute
  flow-job:
    expression: >
      fn(state => {
        state.data.number = state.data.number * 3
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: after-j1
  catch-job:
    expression: >
      fn(state => {
        state.message = "handled it."
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: j1-fails

triggers:
  trigger-1:
    criteria: '{"number":2}'
  every-minute:
    cron: '* * * * *'
  after-j1:
    success: job-1
  j1-fails:
    failure: job-1

credentials:
  my-secret-credential:
    username: '******' # Credential keys get exported, but values must be manually reentered
    password: '******'
  my-other-credential: 'file://gcp_credential.json' # And URIs may be specified directly for the credential body
```

## Proposal v2

```yaml
jobs:
  job-1:
    expression: >
      registerPatient({
        patient-id: state.data.id,
        dob: state.data.birth
      })
    adaptor: '@openfn/language-openmrs'
    trigger: trigger-1
    credential: my-secret-credential
  recurring-job:
    expression: >
      fn(state => {
        console.log("Hi there!")
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: every-minute
  flow-job:
    expression: >
      fn(state => {
        state.data.number = state.data.number * 3
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: after-j1
  catch-job:
    expression: >
      fn(state => {
        state.message = "handled it."
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: j1-fails

triggers:
  trigger-1:
    criteria: '{"number":2}'
  every-minute:
    cron: '* * * * *'
  after-j1:
    success: job-1
  j1-fails:
    failure: job-1

# Note that credential keys get copied, but values must be manually entered
# after the export is completed.
credentials:
  my-secret-credential:
    username: '******'
    password: '******'
```

## Proposal v1

```js
const project = {
  async: true,
  triggers: {
    uniqueTriggerId: {
      // trigger properties
    },
    otherTrigger: {
      // other trigger properties
    },
  },
  credentials: {
    // for now, credentials will not be synced //
    // secret1: {
    // username: 'mamadou',
    // pass: 'shhh',
  },
  staticData: {
    // static objects that can be accessed from any job
  },
  jobs: {
    payHealthWorker: { trigger: 'otherTrigger' },
    syncToSalesforce: {
      expression: 'uri://github.com/jobs/expresion.js',
      trigger: 'uniqueTriggerId',
      credential: 'secret1',
    },
  },
};
```
