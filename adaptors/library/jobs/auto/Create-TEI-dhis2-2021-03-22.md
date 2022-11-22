---
title: Create TEI (dhis2)
sidebar_label: Create TEI (dhis2)
id: Create-TEI-dhis2-2021-03-22
keywords:
  - library
  - job
  - expression
  - dhis2
  - createTEI
  - dataValue
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Create TEI (dhis2)
- Adaptor: [`@openfn/language-dhis2`](https://www.github.com/openfn/language-dhis2)
- Adaptor Version: [`v2.0.11`](https://www.github.com/openfn/language-dhis2/releases/tag/v2.0.11)
- Created over 1 year ago
- Updated about 1 year ago
- Score: <b>3</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`createTEI`, `dataValue`

## Expression

```js
createTEI({
  orgUnit: 'DiszpKrYNg8',
  trackedEntityType: 'nEenWmSyUEp',
  attributes: [
    { attribute: 'zDhUuAYrxNC', value: dataValue('body.Patient_name') },
    { attribute: 'w75KJ2mc4zz', value: dataValue('body.Last_Name_of_Patient') },
  ],
  enrollments: [
    {
      orgUnit: 'DiszpKrYNg8',
      program: 'uy2gU8kT1jF',
      programState: 'oRySG82BKE6', // active
      enrollmentDate: dataValue('body.Date'),
      incidentDate: dataValue('body.Date'),
    },
  ],
});
```