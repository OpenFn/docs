---
title: DHIS2 Events
sidebar_label: DHIS2 Events
id: DHIS2-Events-2016-01-27
keywords:
  - library
  - job
  - expression
  - dhis2
  - create
  - dataValue
  - Math
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: DHIS2 Events
- Adaptor: [`@openfn/language-dhis2`](https://www.github.com/openfn/language-dhis2)
- Adaptor Version: [`v3.0.4`](https://www.github.com/openfn/language-dhis2/releases/tag/v3.0.4)
- Created almost 7 years ago
- Updated 9 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`create`, `dataValue`, `Math`

## Expression

```js
create('trackedEntityInstances', {
  orgUnit: 'DiszpKrYNg8',
  trackedEntityType: 'Zy2SEgA61ys',
  attributes: [
    {
      attribute: 'flGbXLXCrEo', // system case ID
      value: Math.random(),
    },
  ],
});

// create('trackedEntityInstances', {
//   trackedEntityType: 'nEenWmSyUEp', // a person
//   orgUnit: 'g8upMTyEZGZ', // Njandama MCHP
//   attributes: [
//     {
//       attribute: 'w75KJ2mc4zz', // attribute id for first name
//       value: dataValue('case.firstName')(state), // data from submission
//     },
//     {
//       attribute: 'zDhUuAYrxNC', // attribute id for last name
//       value: dataValue('case.lastName')(state), // data from another submission field
//     },
//   ],
//   enrollments: [
//     {
//       orgUnit: 'g8upMTyEZGZ', // Njandama MCHP
//       program: 'IpHINAT79UW', // enroll in Child Program
//       enrollmentDate: new Date().toISOString().slice(0, 10), // some custom javascript
//       incidentDate: state.data.metadata.timeStart.slice(0, 10), // more custom javascript
//     },
//   ],
// });
```