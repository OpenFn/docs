---
title: Upsert Home Visit Log Form
sidebar_label: Upsert Home Visit Log Form
id: Upsert-Home-Visit-Log-Form-2021-05-03
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - field
  - fields
  - lastReferenceValue
  - query
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Home Visit Log Form
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `lastReferenceValue`, `query`, `relationship`, `upsert`

## Expression

```js
// push to production

query(
  `SELECT Participant_Identification_Number_PID__c from Person__c where Participant_Identification_Number_PID__c  = '${state.data.form.case['@case_id']}'`
);

fn(state => {
  const PID = lastReferenceValue('records[0].Participant_Identification_Number_PID__c')(state);
  if (!PID) {
    console.log(
      `Participant not found with Participant_Identification_Number_PID__c: ${state.data.form.case['@case_id']}`
    );
    return state;
  }

  return execute(
    fn(state => {
      const { form } = state.data;
      const { basic_information } = form;
      if (basic_information.intervention_hidden) {
        return query(
          `SELECT Id, Event__c, CreatedDate, Person_Attendance__c
        FROM Attendance__c
        WHERE Person_Attendance__r.Participant_Identification_Number_PID__c = '${form.case['@case_id']}'
        ORDER BY CreatedDate DESC LIMIT 1`
        )(state).then(state => {
          const { records } = state.references[0];
          const eventId = records[0].Event__c;
          state.data.eventField = [field('Event__c', eventId)];
          return state;
        });
        // state.data.eventField = [
        //   relationship('Event__r', 'CommCare_Ext_ID__c', dataValue('form.basic_information.intervention_hidden')(state)),
        // ];
        // return state;
      } else {
        return query(
          `SELECT Id, Event__c, CreatedDate, Person_Attendance__c
        FROM Attendance__c
        WHERE Person_Attendance__r.Participant_Identification_Number_PID__c = '${form.case['@case_id']}'
        ORDER BY CreatedDate DESC LIMIT 1`
        )(state).then(state => {
          const { records } = state.references[0];
          const eventId = records[0].Event__c;
          state.data.eventField = [field('Event__c', eventId)];
          return state;
        });
      }
    }),

    upsert('Home_Visit__c', 'CommCare_Ext_ID__c', state => ({
      ...fields(
        field('CommCare_Ext_ID__c', dataValue('id')),
        // relationship('Event__r', 'CommCare_Ext_ID__c', dataValue('form.basic_information.intervention_hidden')),
        relationship('Person_visiting__r', 'Participant_Identification_Number_PID__c', dataValue('form.case.@case_id')),
        //=== NOTE: We do not need to map People information because Home Visit is related to Person. ======//
        //This info already lives on the Person-level.
        // field('First_Name__c', dataValue('form.basic_information.participant_first_name')),
        // field('Surname__c', dataValue('form.basic_information.participant_surname')),
        // field('Sex__c', dataValue('form.basic_information.gender')),
        // field('Date_of_Birth__c', dataValue('form.basic_information.date_of_birth')),
        // field('Physical Address Community City', dataValue('form.basic_information.participant_address')),
        //================
        field('Consent_Given__c', dataValue('form.basic_information.consent_received')),
        //field('Consent_Given__c', dataValue('form.participant_infomation.visit_information.consent_given')) //Repeated mapping
        //field('From_Venue__c', dataValue('form.basic_information.venue_hidden')),
        field('Reason_for_Home_Visit__c', dataValue('form.participant_infomation.reason_for_home_visit')),
        field('Visit_Date__c', dataValue('form.participant_infomation.visit_information.visit_date')),
        field('Additional_Comments__c', dataValue('form.administrative.visit_notes'))
      ),
      ...fields(...state.data.eventField),
    }))
  )(state);
});

```