---
title: Extract Vitas Data
sidebar_label: Extract Vitas Data
id: Extract-Vitas-Data-2021-05-11
keywords:
  - library
  - job
  - expression
  - mssql
  - sql
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Extract Vitas Data
- Adaptor: [`@openfn/language-mssql`](https://www.github.com/openfn/language-mssql)
- Adaptor Version: [`v2.3.3`](https://www.github.com/openfn/language-mssql/releases/tag/v2.3.3)
- Created over 1 year ago
- Updated over 1 year ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`sql`

## Expression

```js
sql(`select * from receipts where updated_at > ${state.meta.lastSuccess}`);

```