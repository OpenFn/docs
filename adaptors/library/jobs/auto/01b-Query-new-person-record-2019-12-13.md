---
title: 01b/ Query new person record
sidebar_label: 01b/ Query new person record
id: 01b-Query-new-person-record-2019-12-13
keywords:
  - library
  - job
  - expression
  - mysql
  - alterState
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 01b/ Query new person record
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
  // The person information is in state from the previous operation
  console.log(state.references[0].RegistrationForm)
  return (
    `SELECT id FROM hippo_person WHERE firstname='` +
    state.references[0].RegistrationForm.first_name +
    `' AND surname='` +
    state.references[0].RegistrationForm.last_name +
    `'`
  );
});

alterState(state => {
  // Note: we pluck out on the 'RowDataResponses' from the SQL server.
  const personData = state.response.body;
  console.log(personData);
  // Get the first record
  state.data.person_id = personData[0] && personData[0].id
   return state;
});

```