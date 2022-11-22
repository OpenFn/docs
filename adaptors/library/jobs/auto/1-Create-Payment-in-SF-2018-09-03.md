---
title: 1. Create Payment in SF
sidebar_label: 1. Create Payment in SF
id: 1-Create-Payment-in-SF-2018-09-03
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

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 1. Create Payment in SF
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v1.3.2`](https://www.github.com/openfn/language-salesforce/releases/tag/v1.3.2)
- Created about 4 years ago
- Updated almost 4 years ago
- Score: <b>3</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`create`, `dataValue`, `field`, `fields`, `relationship`

## Expression

```js
create('Payment__c', fields(
  field('Name', dataValue('reference_number')),
  field('Amount__c', dataValue('amount')),
  field('Phone_Number__c', dataValue('sender_number')),
  relationship('Contract__r', 'ContractNumber', dataValue('contract_number'))
));
```