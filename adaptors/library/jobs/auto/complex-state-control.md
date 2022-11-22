---
title: Using promises
sidebar_label: 📜 Using promises
id: complex-state-control
keywords:
  - library
  - job
  - expression
  - salesforce
  - alterState
  - query
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Using promises
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `query`

## Expression

```js
// Example with language-salesforce
alterState(state => {
  // return state => {
  return new Promise((resolve, reject) => {
    query('SELECT Name FROM Account')(state)
      .then(state => {
        console.log(state.references[0].records);
        console.log('doing stuff here');
        return state;
      })
      .then(state => {
        console.log('and in here');
        resolve(state);
      });
  });
  // };
});

alterState(state => {
  console.log('and also in here!');
  console.log(state.references);
  return state;
});

```