---
title: Upsert Intervention Notes
sidebar_label: Upsert Intervention Notes
id: Upsert-Intervention-Notes-2021-04-28
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - field
  - fields
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Intervention Notes
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `relationship`, `upsert`

## Expression

```js
//openfn.org source 
upsert(
  'Event__c',
  'CommCare_Case_ID__c',
  fields(
    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),
    //field('Name', dataValue('form.intervention_name')),
    field('Notes__c', dataValue('form.intervention_notes_to_save')),
    relationship('RecordType', 'Name', 'Intervention')
  )
);
```