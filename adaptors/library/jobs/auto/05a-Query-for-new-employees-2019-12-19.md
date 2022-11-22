---
title: 05a/Query for new employees
sidebar_label: 05a/Query for new employees
id: 05a-Query-for-new-employees-2019-12-19
keywords:
  - library
  - job
  - expression
  - mysql
  - alterState
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 05a/Query for new employees
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
  return "SELECT person_id, person_name, msisdn, status FROM employee_updates WHERE status='NEW';";
});

alterState(state => {
  state.new_employees = state.response.body;
  console.log(state.new_employees);
  return state;
})

sqlString(state => {
  return `UPDATE employee_updates SET status='PROCESSED' WHERE status='NEW'`;
});
```