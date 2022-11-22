---
title: Upsert to mBrana
sidebar_label: Upsert to mBrana
id: Upsert-to-mBrana-2021-05-11
keywords:
  - library
  - job
  - expression
  - postgresql
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert to mBrana
- Adaptor: [`@openfn/language-postgresql`](https://www.github.com/openfn/language-postgresql)
- Adaptor Version: [`v3.1.4`](https://www.github.com/openfn/language-postgresql/releases/tag/v3.1.4)
- Created over 1 year ago
- Updated about 1 year ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`upsert`

## Expression

```js
// Your job goes here.
upsert(
  'users', // the DB table
  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME
  { name: 'Elodie', id: 7 },
  { writeSql:true, execute: true }
);
```