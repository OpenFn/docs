---
title: 02a/ Query DB for people to pay
sidebar_label: 02a/ Query DB for people to pay
id: 02a-Query-DB-for-people-to-pay-2019-12-11
keywords:
  - library
  - job
  - expression
  - mysql
  - alterState
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 02a/ Query DB for people to pay
- Adaptor: [`@openfn/language-mysql`](https://www.github.com/openfn/language-mysql)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-mysql)
- Created almost 3 years ago
- Updated over 2 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`

## Expression

```js

sqlString(state => {
  // stored procedure will return a list of names, phone numbers (MSISDN), and salary info for employees that should be paid today
  return 'CALL get_employees_to_pay();';
});

//alterState(state => {
  // Note: we pluck out on the 'RowDataResponses' from the SQL server.
//  state.data.records = state.response.body[0];
//  return state;
//});
```