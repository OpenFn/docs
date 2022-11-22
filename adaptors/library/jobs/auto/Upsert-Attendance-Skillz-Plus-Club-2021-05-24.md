---
title: Upsert Attendance Skillz Plus Club
sidebar_label: Upsert Attendance Skillz Plus Club
id: Upsert-Attendance-Skillz-Plus-Club-2021-05-24
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - each
  - field
  - fields
  - lastReferenceValue
  - map
  - query
  - relationship
  - upsert
  - Array
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Attendance Skillz Plus Club
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `each`, `field`, `fields`, `lastReferenceValue`, `map`, `query`, `relationship`, `upsert`, `Array`

## Expression

```js
query(
  `SELECT Participant_Identification_Number_PID__c from Person__c where Participant_Identification_Number_PID__c  = '${state.data.form.attendance_list.update_participant_cases.item[0]['@id']}'`
);

fn(state => {
  const PID = lastReferenceValue('records[0].Participant_Identification_Number_PID__c')(state);

  if (!PID) {
    console.log(
      `Participant not found with Participant_Identification_Number_PID__c: ${state.data.form.attendance_list.update_participant_cases.item[0]['@id']}`
    );
    return state;
  }
  return execute(
    // Set state.references to event record
    query(
      `SELECT Id, Name, CommCare_Ext_ID__c FROM Event__c WHERE CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`
    ),
    // Organise data and keep it safe
    fn(state => {
      function objectToArray(object) {
        if (!object) return [];
        return !Array.isArray(object) ? [object] : object;
      }

      const eventName = lastReferenceValue('records[0].CommCare_Ext_ID__c')(state);
      state.data.eventName = eventName;

      state.data.form.attendance_list.update_participant_cases.item = objectToArray(
        state.data.form.attendance_list.update_participant_cases.item
      );

      state.data.form.attendance_list.update_participant_cases.item =
        state.data.form.attendance_list.update_participant_cases.item.map(item => ({
          ...item,
          CommCare_Ext_ID__c: `${item['@id']}-${eventName}`,
          event_case_id: state.data.form.case['@case_id'],
        }));

      //  Keep our data safe
      state.items = state.data.form.attendance_list.update_participant_cases.item;

      // Reset references
      state.references = [];

      return state;
    }),
    // Set state.references to an array of attendance records for each participant
    beta.each(
      '$.items[*]',
      query(
        state => `SELECT CommCare_Ext_ID__c, Session_1__c, Session_2__c, Session_3__c, Session_4__c, Session_5__c, Session_6__c, Session_7__c, Session_8__c, Session_9__c, Session_10__c, Session_11__c, Session_12__c, Session_13__c, Session_14__c, Session_15__c, Session_16__c, Session_17__c, Session_18__c, Session_19__c, Session_20__c, Session_21__c, Session_22__c, Session_23__c,Session_24__c, Session_25__c, Session_26__c, Session_27__c, Session_28__c
         FROM Attendance__c
         WHERE CommCare_Ext_ID__c = '${state.data.CommCare_Ext_ID__c}'
         `
      )
    ),
    // Calculate dynamic fields
    fn(state => {
      state.items = state.items.map(item => {
        const record = state.references.find(rec =>
          rec.records[0] ? rec.records[0].CommCare_Ext_ID__c === item.CommCare_Ext_ID__c : true
        ).records[0];

        function getSessionValue(present) {
          if (!present) return 'U';
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

        function getSessionFieldName(record) {
          if (!record || Object.keys(record).length === 0) {
            return 'Session_1__c';
          }

          const fieldName = Object.entries(record)
            .filter(rec => rec[1] === null && rec[0] !== 'CommCare_Ext_ID__c')
            .sort(function (a, b) {
              return a[0].split('_')[1] - b[0].split('_')[1];
            })[0][0];

          return fieldName;
        }

        const sessionValue = getSessionValue(item.attendance_session);
        const sessionDate = item.date;
        const sessionFieldName = getSessionFieldName(record);
        const sessionDateFieldName = `Session_${sessionFieldName.split('_')[1]}_Date__c`;

        return {
          ...item,
          dynamicFields: {
            [sessionFieldName]: sessionValue,
            [sessionDateFieldName]: sessionDate,
          },
        };
      });

      //  Reset state.references
      state.references = [];

      return state;
    }),

    // Upsert
    beta.each(
      '$.items[*]',
      upsert('Attendance__c', 'CommCare_Ext_ID__c', state => ({
        ...fields(
          field('CommCare_Ext_ID__c', dataValue('CommCare_Ext_ID__c')),
          relationship('Person_Attendance__r', 'Participant_Identification_Number_PID__c', dataValue('@id')),
          relationship('Event__r', 'CommCare_Case_ID__c', dataValue('event_case_id'))
        ),
        ...state.data.dynamicFields,
      }))
    )
  )(state);
});

```