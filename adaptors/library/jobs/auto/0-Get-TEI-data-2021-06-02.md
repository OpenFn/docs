---
title: 0 - Get TEI data
sidebar_label: 0 - Get TEI data
id: 0-Get-TEI-data-2021-06-02
keywords:
  - library
  - job
  - expression
  - dhis2
  - alterState
  - dataValue
  - getData
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 0 - Get TEI data
- Adaptor: [`@openfn/language-dhis2`](https://www.github.com/openfn/language-dhis2)
- Adaptor Version: [`v2.0.4`](https://www.github.com/openfn/language-dhis2/releases/tag/v2.0.4)
- Created over 1 year ago
- Updated 9 months ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `dataValue`, `getData`

## Expression

```js
// TODO: get all TEIs with vaccination state 'NOT YET REQUESTED' via save filter from Austin.


// NOTE: if we can get a webhook with the desired info, let's drop this job!

getData('trackedEntityInstances', {
  fields: '*',
  ou: 'V5XvX1wr1kF', // traningland?
  program: 'EZkN8vYZwjR', //
  trackedEntityInstance: dataValue('id'), // the value from the post
});

alterState(state => {
  console.log('The response from DHIS2', state.data);
  console.log('Only pass necessary data to the DIVOC job.');
  const necessary = state.data.trackedEntityInstances[0];
  console.log(necessary);
  return { ...state, data: necessary };
});

```