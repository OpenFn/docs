---
title: Upsert User in Salesforce
sidebar_label: Upsert User in Salesforce
id: Upsert-User-in-Salesforce-2021-04-16
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
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert User in Salesforce
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v1.3.2`](https://www.github.com/openfn/language-salesforce/releases/tag/v1.3.2)
- Created over 1 year ago
- Updated over 1 year ago
- Score: <b>3</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataPath`, `dataValue`, `each`, `field`, `fields`, `upsert`

## Expression

```js
//Example job to upsert Users in Salesforce
each('$.users[*]',
  dataPath('state.data.users'),
  upsert('User', 'Email', fields(
   field('Email', dataValue('email')),
   field('FirstName', dataValue('firstName')),
   field('LastName', dataValue('surname')),
   field('Active', 'true')
 ))
);

```