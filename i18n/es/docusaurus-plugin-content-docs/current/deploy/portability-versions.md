---
title: Versiones de la propuesta de portabilidad
translation_source_hash: 6f60d19ea47e10d8a98feb1db3e323c0fe2297d1
translation_review_status: machine
---

Nuestro compromiso con la portabilidad no ha cambiado a lo largo de la historia
de OpenFn, pero la forma de abordarlo y de ponerlo en práctica ha tomado muchas
formas.

Este documento sirve de referencia para las versiones anteriores de la
especificación.

## v3 {#v3}

El estándar v3 se creó para la plataforma v2 y está vinculado al proyecto
Lightning.

La v3 usa los comandos y protocolos de despliegue antiguos de la CLI. La app y
la CLI todavía la admiten por completo, pero se está retirando desde mayo
de 2026.

[Consulta la especificación v3 aquí](/documentation/deploy/portability-v3)

## v2 {#v2}

Se usa para exportar desde la plataforma antigua.

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

## v1 {#v1}

Propuesta inicial de portabilidad

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
