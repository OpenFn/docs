---
title: Versions of the Portability Proposal
---

Our commitment to portability hasn't changed within OpenFn's lifetime - but our
approach and implementation of this commitment have taken many forms.

This document provides a reference to older versions of specification.

## v3

The v3 standard was created for the v2 platform and is linked to the Lightning
project.

V3 uses the legacy CLI deploy commands and protocols. It is still full supported
by the app and CLI, but is being phased out as of May 2026.

[See the v3 specification here](/documentation/deploy/portability-v3)

## v2

Used for export from the legacy platform.

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

## v1

Initial portability proposal

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
