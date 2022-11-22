---
title: Create Person in SF
sidebar_label: Create Person in SF
id: Create-Person-in-SF-2019-02-25
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - field
  - fields
  - humanProper
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Create Person in SF
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v1.3.2`](https://www.github.com/openfn/language-salesforce/releases/tag/v1.3.2)
- Created over 3 years ago
- Updated over 3 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `humanProper`, `relationship`, `upsert`

## Expression

```js
upsert("Patient__c", "CommCare_Case_ID__c", fields(
  field('CommCare_Case_ID__c', dataValue("form.case.@case_id")),
  relationship('Clinic__r', 'Location_ID__c', dataValue('form.case.create.owner_id')),
  field('First_Name__c', humanProper(state.data.form.case.update.patient_first_name)),
  field('Last_Name__c', humanProper(state.data.form.case.update.patient_last_name)),
  field('Patient_ID__c', dataValue('form.case.update.patient_id')),
  field('Age_Months_Started_Treatment__c', dataValue('form.case.update.age_months_start_treatment_rounded')),
  field('Registration_Date__c', (state) => {
    const validDate = state.data.form.case.update.registration_date
    return ( validDate ? new Date(validDate).toISOString() : null )
  })
))
```