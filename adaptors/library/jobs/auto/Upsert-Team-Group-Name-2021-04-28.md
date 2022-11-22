---
title: Upsert Team/Group Name
sidebar_label: Upsert Team/Group Name
id: Upsert-Team-Group-Name-2021-04-28
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

- Name: Upsert Team/Group Name
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `relationship`, `upsert`

## Expression

```js
// Upsert event by unique 'Name'
upsert(
  'Event__c',
  'CommCare_Case_ID__c',
  fields(
    field(
      'Class_Group_Team__c',
      dataValue('form.question_group.group__team_name')
    ),
    relationship('RecordType', 'Name', 'Intervention'), 
    field(
      'CommCare_Case_ID__c',
      dataValue('form.case.@case_id')
    ),
  )
);
```