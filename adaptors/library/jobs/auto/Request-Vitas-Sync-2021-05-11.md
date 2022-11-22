---
title: Request Vitas Sync
sidebar_label: Request Vitas Sync
id: Request-Vitas-Sync-2021-05-11
keywords:
  - library
  - job
  - expression
  - http
  - alterState
  - dataPath
  - dataValue
  - each
  - post
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Request Vitas Sync
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`v3.1.7`](https://www.github.com/openfn/language-http/releases/tag/v3.1.7)
- Created over 1 year ago
- Updated about 1 year ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `dataPath`, `dataValue`, `each`, `post`

## Expression

```js
alterState(state => {
  const vitasSystemsToCheck = [
    'vitas-1',
    'thatMinistry-vitas-7',
    '3',
    '4',
    '5',
  ]
  return { ...state, data: { vitasSystemsToCheck } };
});

each(
  dataPath('vitasSystemsToCheck[*]'),
  post(state.configuration.inboxUrl, {
    body: { "db": dataValue('database-id') },
  })
);
```