---
title: Create SMS linked to contact
sidebar_label: 📜 Create SMS linked to contact
id: Create-SMS-Linked-to-Contact-in-SF
keywords:
  - library
  - job
  - expression
  - salesforce
  - create
  - dataValue
  - field
  - fields
  - relationship
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Create SMS linked to contact
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`create`, `dataValue`, `field`, `fields`, `relationship`

## Expression

```js
create(
  'SMS__c',
  fields(
    field('text__c', dataValue('message_text')),
    relationship(
      'Contact__r',
      'Contact_Phone_Number__c',
      dataValue('from_number')
    ),
    field('date__c', dataValue('date'))
  )
);

```