---
title: Merge data into child array then upsert
sidebar_label: 📜 Merge data into child array then upsert
id: upsert-many-items-in-array-with-value-outside-array
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataPath
  - dataValue
  - each
  - field
  - fields
  - merge
  - relationship
  - upsert
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Merge data into child array then upsert
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataPath`, `dataValue`, `each`, `field`, `fields`, `merge`, `relationship`, `upsert`

## Expression

```js
each(
  merge(
    dataPath('form.ID_cards_given_to_vendor[*]'),
    fields(
      field('Vendor_Id', dataValue('form.ID_vendor')),
      field('form_finished_time', dataValue('form.meta.timeEnd'))
    )
  ),
  upsert(
    'Small_Packet__c',
    'sp_id__c',
    fields(
      field('sp_id__c', dataValue('ID_cards_given_to_vendor')),
      relationship('Vendor__r', 'Badge_Code__c', dataValue('Vendor_Id')),
      field(
        'Small_Packet_Distribution_Date__c',
        dataValue('form_finished_time')
      )
    )
  )
);

```