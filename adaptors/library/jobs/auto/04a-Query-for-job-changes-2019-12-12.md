---
title: 04a/Query for job changes
sidebar_label: 04a/Query for job changes
id: 04a-Query-for-job-changes-2019-12-12
keywords:
  - library
  - job
  - expression
  - mysql
  - alterState
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 04a/Query for job changes
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
  return "SELECT position_id, position_name, salary, facility_id, facility_name, status \
    FROM position_updates WHERE status in ('NEW', 'CLOSED');";
});

alterState(state => {
  state.new_jobs = state.response.body;
  console.log(state.new_jobs);
  return state;
})

sqlString(state => {
  return `UPDATE position_updates SET status='PROCESSED' WHERE status in ('NEW','CLOSED')`;
});
```