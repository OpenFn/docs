---
title: Create Patient in OpenMRS
sidebar_label: Create Patient in OpenMRS
id: Create-Patient-in-OpenMRS-2019-10-24
keywords:
  - library
  - job
  - expression
  - openmrs
  - dataValue
  - field
  - fields
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Create Patient in OpenMRS
- Adaptor: [`@openfn/language-openmrs`](https://www.github.com/openfn/language-openmrs)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-openmrs)
- Created about 3 years ago
- Updated about 3 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`

## Expression

```js
//Job to create patient in OpenMRS 
patient(
  fields(
    field("gender", dataValue("form.gender")), //map values from CommCare forms
    field("names", function(state) {
      return [{
        "patient_id": dataValue("form.case.@case_id")(state),
        "creator": dataValue("form.user")(state)
      }]
    })
  )
)





```