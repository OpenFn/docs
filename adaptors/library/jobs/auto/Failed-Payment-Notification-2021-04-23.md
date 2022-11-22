---
title: Failed Payment Notification
sidebar_label: Failed Payment Notification
id: Failed-Payment-Notification-2021-04-23
keywords:
  - library
  - job
  - expression
  - http
  - alterState
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Failed Payment Notification
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`v3.1.7`](https://www.github.com/openfn/language-http/releases/tag/v3.1.7)
- Created over 1 year ago
- Updated over 1 year ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`

## Expression

```js
alterState(state => {
  console.log("We have notified the administrator to manually initiate payment.");
  console.log("We have notified the CHW that payment is pending.");
  return state;
})
```