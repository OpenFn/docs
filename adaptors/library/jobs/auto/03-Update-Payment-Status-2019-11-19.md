---
title: 03/ Update Payment Status
sidebar_label: 03/ Update Payment Status
id: 03-Update-Payment-Status-2019-11-19
keywords:
  - library
  - job
  - expression
  - mysql
  - alterState
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 03/ Update Payment Status
- Adaptor: [`@openfn/language-mysql`](https://www.github.com/openfn/language-mysql)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-mysql)
- Created about 3 years ago
- Updated over 2 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`

## Expression

```js
sqlString(state => {
  console.log(state.data.transactionCode);
  return `SELECT record FROM entry WHERE string_value='${state.data.transactionCode}'`;
});

alterState(state => {
  // Note: we pluck out on the 'RowDataResponses' from the SQL server.
  const recordData = state.response.body.filter(x => x.record !== undefined);
  // Get the first record
  state.data.record = recordData[0] && recordData[0].record;
  return state;
});

sqlString(state => {
  return `UPDATE entry SET string_value='completed' where record=${state.data.record} and string_value='initiated'`;
});

sqlString(state => {
  return `UPDATE last_entry SET string_value='completed' where record=${state.data.record} and string_value='initiated'`;
});

sqlString(state => {
  return `UPDATE hippo_person_payments SET status='completed' where id='person_payments|${state.data.record}'`;
});
```