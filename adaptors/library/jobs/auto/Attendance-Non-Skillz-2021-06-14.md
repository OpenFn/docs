---
title: Attendance Non Skillz
sidebar_label: Attendance Non Skillz
id: Attendance-Non-Skillz-2021-06-14
keywords:
  - library
  - job
  - expression
  - salesforce
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

- Name: Attendance Non Skillz
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated about 2 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataPath`, `dataValue`, `each`, `field`, `fields`, `lastReferenceValue`, `map`, `merge`, `query`, `relationship`, `upsert`, `Array`

## Expression

```js
fn(state => {
if (!state.data.form.attendance_list.update_participant_cases.item) {
  console.log("No participant attendance data was provided, not upserting to Salesforce.")
  return state;
} 
else {
query(
  `SELECT Id, Name, CommCare_Ext_ID__c FROM Event__c WHERE CommCare_Case_ID__c = '${state.data.form.attendance_list.update_participant_cases.item[0]['@id']}'`
);

// fn(state => {
  const records = lastReferenceValue('records')(state);
  const eventName = lastReferenceValue('records[0].CommCare_Ext_ID__c')(state);
  if (!eventName) {
    console.log(
      `Participant not found with CommCare_Case_ID__c: ${state.data.form.attendance_list.update_participant_cases.item[0]['@id']}`
    );
    return state;
  }

  return execute(
    fn(state => {
      // Note: lastReferenceValue selects the first item in the references array.
      state.data.eventName = eventName ? eventName.replace(/\//gi, '') : null;

      function getSessionValue(present) {
        switch (present.toString().toLowerCase()) {
          case 'yes':
            return 'X';
          case 'no':
            return 'A';
          case '':
            return 'N';
          default:
            return 'U';
        }
      }

      function getSessionId(session_text) {
        return session_text.toString().trim().slice(0, session_text.indexOf(' ')).slice(1);
      }

      function objectToArray(object) {
        if (!object) return [];
        return !Array.isArray(object) ? [object] : object;
      }

      state.data.form.attendance_list.update_participant_cases.item = objectToArray(
        state.data.form.attendance_list.update_participant_cases.item
      );

      const sessionText = dataValue('form.attendance_list.session')(state);
      const sessionId = getSessionId(sessionText);

      //   @aleksa-krolls confirm the path for the session date
      const sessionDate = dataValue("form.case['@date_modified']")(state);

      state.data.form.attendance_list.update_participant_cases.item =
        state.data.form.attendance_list.update_participant_cases.item.map(item => {
          const sessionValue = getSessionValue(item.attendance_session);
          return {
            ...item,
            dynamicFields: { [`Session_${sessionId}__c`]: sessionValue, [`Session_${sessionId}_Date__c`]: sessionDate },
          };
        });

      return state;
    }),

    each(
      merge(
        dataPath('form.attendance_list.update_participant_cases.item[*]'),
        fields(
          field('intervention_name', dataValue('form.intervention_name')),
          field('eventName', dataValue('eventName')),
          field('caseid', dataValue('form.case.@case_id'))
        )
      ),
      upsert('Attendance__c', 'CommCare_Ext_ID__c', state => ({
        ...fields(
          relationship('Event__r', 'CommCare_Case_ID__c', dataValue('caseid')),
          field('CommCare_Ext_ID__c', state => `${state.data['@id']}-${state.data.eventName}`),
          relationship('Person_Attendance__r', 'Participant_Identification_Number_PID__c', dataValue('@id'))
        ),
        ...state.data.dynamicFields,
      }))
    )
  )(state);
}});

```