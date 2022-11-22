---
title: Timeout to create a delay
sidebar_label: 📜 Timeout to create a delay
id: timeout
keywords:
  - library
  - job
  - expression
  - http
  - alterState
  - get
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Timeout to create a delay
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-http)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `get`

## Expression

```js
// To properly use a timeout, wrap it in a promise. This job has two operations
// and it executes the get(...) operation after the alterState(...) operation
// waits for 4000ms.
alterState(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wait, and then resolve');
      resolve(state);
    }, 4000);
  });
});

get('https://jsonplaceholder.typicode.com/todos/1');

```