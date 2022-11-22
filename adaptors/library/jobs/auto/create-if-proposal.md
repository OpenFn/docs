---
title: Create/update records if...
sidebar_label: 📜 Create/update records if...
id: create-if-proposal
keywords:
  - library
  - job
  - expression
  - salesforce
  - createIf
  - dataValue
  - field
  - fields
  - relationship
  - upsertIf
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Create/update records if...
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.1.0`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.1.0)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`createIf`, `dataValue`, `field`, `fields`, `relationship`, `upsertIf`

## Expression

```js
// Using upsertIf and createIf we can conditionally create or update records if
// some condition in the source data is met.

upsertIf(
  // a path which resolves to true/false
  dataValue('form.legal.allowedToSync'), 
  'Patient__c',
  'Patient_ID__c',
  fields(
    field('Name__c', dataValue('form.name')),
    field('Patient_ID__c', dataValue('form.identification.govId'))
  )
);

createIf(
  // or a function which returns true/false
  state => state.data.form.completedVisit === 'yes',
  'Visit__c',
  fields(
    field('Date__c', dataValue('form.visit.visit_date')),
    field('Type__c', 'checkup'),
    relationship(
      'Patient__r',
      'Patient_ID__c',
      dataValue('form.identification.govId')
    )
  )
);

```