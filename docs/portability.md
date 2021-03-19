---
title: Portability
---

## Intent

Beyond facilitating portability/transferability between OpenFn's
[platform](deploy/platform) and [microservice](deploy/microservice) deployment
pathways, the portability proposal (needs a better name... and...) seeks to
establish a simple, globally-applicable way of **specifying workflow
automation** that might be applied across workflow-engines/integration platforms
across the sector. Nothing about the spec _must_ be specific to OpenFn or any
one of our individual products. We envision a future in which software built on
[core](deploy/diy), [engine](deploy/diy), and entirely new and different
integration/workflow tools can adopt this specification.

It boils down to three key sets of artifacts: `jobs`, `triggers`, and
`credentials`. Respectively, they determine (1) what actions must be performed,
(2) when they must be performed, and (3) what, if any, authentication they'll
need to perform them.

If you're interested in contributing to the specification, reach out to OpenFn
via the [community forum](https://community.openfn.org), write to us, or suggest
changes by submitting a pull request here.

## Proposal v2 `@latest`

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
      alterState(state => {
        console.log("Hi there!")
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: every-minute
  flow-job:
    expression: >
      alterState(state => {
        state.data.number = state.data.number * 3
        return state;
      })
    adaptor: '@openfn/language-common'
    trigger: after-j1
  catch-job:
    expression: >
      alterState(state => {
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

## Other Versions

- [Portability Proposal v3](portability-versions#proposal-v3) `@next`
- [Portability Proposal v1](portability-versions#proposal-v1)
