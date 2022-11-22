---
title: Upsert Register Participant (Skillz)
sidebar_label: Upsert Register Participant (Skillz)
id: Upsert-Register-Participant-Skillz-2021-08-30
keywords:
  - library
  - job
  - expression
  - salesforce
  - alterState
  - dataPath
  - dataValue
  - each
  - field
  - fields
  - lastReferenceValue
  - map
  - merge
  - query
  - relationship
  - upsert
  - Array
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Register Participant (Skillz)
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created about 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `dataPath`, `dataValue`, `each`, `field`, `fields`, `lastReferenceValue`, `map`, `merge`, `query`, `relationship`, `upsert`, `Array`

## Expression

```js
query(
  `SELECT Id, Name, CommCare_Ext_ID__c FROM Event__c WHERE CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`
);

alterState(state => {
  // Note: lastReferenceValue selects the first item in the references array.
  state.data.eventName = lastReferenceValue('records[0].CommCare_Ext_ID__c')(state);
  state.data.eventCase = dataValue('form.case.@case_id')(state);

  function objectToArray(object) {
    return !Array.isArray(object) ? [object] : object;
  }

  const { form } = state.data;
  if (form.question1) {
    console.log('Ensuring that "question1" is an array.');
    form.question1 = objectToArray(form.question1);
  } else if (!form.new_participants) {
    console.log('Nothing to upsert. No participants were registered');
  } else {
    console.log('Shifting "new_participants" to "question1" array.');
    form.question1 = objectToArray(form.new_participants);
    console.log('Creating a "case" object inside each item in that array.');
    form.question1 = form.question1.map(item => ({
      ...item,
      case: item.create_skillz_plus_participant.case,
    }));
  }

  console.log('Done with initial data manipulation.');

  return state;
});

beta.each(
  merge(
    dataPath('form.question1[*]'),
    fields(field('intervention_notes_to_save', dataValue('form.intervention_notes_to_save')))
  ),

  upsert(
    'Person__c',
    'Participant_Identification_Number_PID__c',
    fields(
      field('Notes__c', dataValue('intervention_notes_to_save')),
      field('First_Name__c', dataValue('participant_first_name')),
      field('Surname__c', dataValue('participant_surname')),
      relationship('RecordType', 'Name', 'Participant'),
      field('Participant_Identification_Number_PID__c', state => state.data.case['@case_id']),
      field('Sex__c', dataValue('gender')),
      field('Mobile_Number_1__c', dataValue('mobile_number')), //QUESTION: In CommCare, phone doesn't look like it's saving?
      field('School_name_person__c', dataValue('school_name')),
      field('Date_of_Birth__c', dataValue('date_of_birth')),
      field('School_name_person__c', dataValue('school_name')),
      field('Physical_Address__c', dataValue('participants_home_address'))
      //field('Age__c', dataValue('form.question1.age_in_years')), //This is a SF formula field, cannot map
    )
  )
);

each(
  merge(
    dataPath('form.question1[*]'),
    fields(
      field('intervention_name', dataValue('form.intervention_name')),
      field('eventCase', dataValue('eventCase')),
      field('eventName', dataValue('eventName'))
    )
  ),
  upsert(
    'Attendance__c',
    'CommCare_Ext_ID__c',
    fields(
      field('CommCare_Ext_ID__c', state => {
        var eventid = `${state.data.intervention_name}` || `${state.data.eventName}`; //dataValue('intervention_name')(state) || `${state.data.eventName}`;
        var personid = state.data.case['@case_id'];
        const value = personid + '-' + eventid.replace(/\//gi, '');
        return scrubEmojis(value, '');
      }),
      relationship(
        //Attendance looks up to Persn via the case_id
        'Person_Attendance__r',
        'Participant_Identification_Number_PID__c',
        state => state.data.case['@case_id']
      ),
      relationship(
        //Attendance looks up to Event via the Event case_id
        'Event__r',
        'CommCare_Case_ID__c',
        state => `${state.data.eventCase}`
      ),
      // relationship(
      //   //Attendance looks up to Event via the intervention_name
      //   'Event__r',
      //   'CommCare_Ext_ID__c',
      //   state => `${state.data.intervention_name}` || `${state.data.eventName}`
      // ),
      field('Date_of_Birth__c', dataValue('date_of_birth'))
    )
  )
);

//First we insert Person record
// alterState(state => {
//   return upsert(
//     'Person__c',
//     'Participant_Identification_Number_PID__c',
//     fields(
//       field('Notes__c', dataValue('form.intervention_notes_to_save')),
//       field('First_Name__c', dataValue('form.question1.participant_first_name')),
//       field('Surname__c', dataValue('form.question1.participant_surname')),
//       relationship('RecordType', 'Name', 'Participant'),
//       field('Participant_Identification_Number_PID__c', state => state.data.case['@case_id']),
//       field('Sex__c', dataValue('form.question1.gender')),
//       //field('Age__c', dataValue('form.question1.age_in_years')), //This is a SF formula field, cannot map
//       field('Mobile_Number_1__c', dataValue('form.question1.mobile_number')),
//       field('School_name_person__c', dataValue('form.question1.school_name'))
//     )
//   )(state);
// });

// alterState(state => {
//   //Then we upsert related Attendance records
//   return upsert(
//     'Attendance__c',
//     'CommCare_Ext_ID__c',
//     fields(
//       field('CommCare_Ext_ID__c', state => {
//         var eventid = dataValue('form.intervention_name')(state);
//         var personid = dataValue('form.case.@case_id')(state);
//         return personid + '-' + eventid;
//       }),
//       relationship(
//         //Attendance looks up to Persn via the case_id
//         'Person_Attendance__r',
//         'Participant_Identification_Number_PID__c',
//         dataValue('form.case.@case_id')
//       ),
//       relationship(
//         //Attendance looks up to Event via the intervention_name
//         'Event__r',
//         'Name',
//         dataValue('form.intervention_name')
//       ),
//       field('Date_of_Birth__c', dataValue('form.question1.date_of_birth'))
//     )
//   )(state);
// });

```