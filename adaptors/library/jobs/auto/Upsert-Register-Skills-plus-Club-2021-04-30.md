---
title: Upsert Register Skills plus Club
sidebar_label: Upsert Register Skills plus Club
id: Upsert-Register-Skills-plus-Club-2021-04-30
keywords:
  - library
  - job
  - expression
  - salesforce
  - alterState
  - dataValue
  - field
  - fields
  - join
  - map
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Register Skills plus Club
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `dataValue`, `field`, `fields`, `join`, `map`, `relationship`, `upsert`

## Expression

```js
// push to production
alterState((state) => {
  
  function clean(str) {
    if (!!str)
      return str
        .split('_')
        .map(word => {
          let new_word = word.toString().toLowerCase();
          return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);
        })
        .join(' ');
  }
  
  const coachFieldNames = ['Coach_A__r','Coach_B__r','Coach_C__r','Coach_D__r']
 
  state.data.destinationCoachFields = state.data.form.coaches
  .split(' ')
  .reduce(
    (accumulator, currentValue, currentIndex) => [
      ...accumulator,
      (currentIndex < coachFieldNames.length && !!currentValue
        ? relationship(coachFieldNames[currentIndex], 'CommCare_Ext_ID__c', currentValue)
        : []),
    ],
    []
  );

  return state; 
}); 



upsert(
  'Event__c',
  'CommCare_Case_ID__c',
  state=>({
  ...fields(
      field('Name', dataValue('form.name_of_skillz_plus_club')),
      field('CommCare_Ext_ID__c', dataValue('form.name_of_skillz_plus_club')),
      field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),
      relationship('RecordType', 'Name', 'Intervention'),
      relationship('Site__r', 'CommCare_Ext_ID__c', dataValue('form.skillz_plus_site')),
      relationship('Venue__r', 'CommCare_Ext_ID__c', dataValue('form.skillz_plus_venue')),
    ),
    ...fields(...state.data.destinationCoachFields)
  })
);

```