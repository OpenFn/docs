---
title: Portability Proposal
---

OpenFn is currently designing a portable project configuration schema that can
be used to import or export projects between OpenFn/platform and OpenFn/engine.

## Proposal v2

```yaml
jobs:
  job-1:
    expression: >
      alterState((state) => {
        console.log("Hi there!")
        return state;
      })
    language_pack: '@openfn/language-common'
    trigger: trigger-2
  job-2:
    expression: none
    language_pack: '@openfn/language-common'
    trigger: trigger-3
  job-3:
    expression: none
    language_pack: '@openfn/language-common'
    trigger: trigger-3
  job-cron:
    expression: >
      alterState(({counter=0}) => {
        console.log("Hi there!")
        return {counter: counter+1}; 
      })
    language_pack: '@openfn/language-common'
    trigger: every-minute

triggers:
  trigger-2:
    criteria: '{"number":2}'
  trigger-3:
    criteria: '{"b":2}'
  every-minute:
    cron: '* * * * *'
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
