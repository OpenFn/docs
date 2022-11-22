---
title: Coach Session Register
sidebar_label: Coach Session Register
id: Coach-Session-Register-2021-05-03
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - each
  - field
  - fields
  - query
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Coach Session Register
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `each`, `field`, `fields`, `query`, `relationship`, `upsert`

## Expression

```js
// push to production
query(
  `SELECT Coach_A__c, Coach_A__r.Name from Event__c where CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`
);

fn(state => {
  const present = dataValue('form.present')(state).toLowerCase();

  function getSessionValue() {
    let value;
    switch (present) {
      case 'yes':
        value = 'X';
        break;
      case 'no':
        value = 'A';
        break;
      case '':
        value = 'N';
        break;
      default:
        value = 'U';
        break;
    }
    return value;
  }

  const session_text = dataValue('form.session')(state);

  const session_id = session_text.trim().slice(0, session_text.indexOf(' ')).slice(1);

  const coachname = dataValue('form.coach_name')(state)
    ? dataValue('form.coach_name')(state)
    : state.references[0].records[0].Coach_A__r.Name;

  let external_id = `${dataValue('form.case.@case_id')(state)}
    ${coachname}`; //case_id + coach_name for external Id

  state.data.commcare_external_id = external_id.toLowerCase().replace(/\s/g, '').trim();

  state.data.dynamicFields = [
    field(`Session_${session_id}__c`, getSessionValue()),
    field(`Session_${session_id}_Date__c`, dataValue('form.date')(state)),
    //field(`Session_${session_id}_Duration__c`, dataValue('form.duration')(state)), //NOTE: Duration fields don't exist in SF?
  ];

  state.data.durationFields = [field(`Session_${session_id}_Duration__c`, dataValue('form.duration')(state))];

  return state;
});

upsert('Event__c', 'CommCare_Case_ID__c', state => ({
  ...fields(field('CommCare_Case_ID__c', dataValue('form.case.@case_id'))),
  ...fields(...state.data.durationFields),
}));

query(
  `SELECT Coach_A__c, Coach_A__r.CommCare_Ext_ID__c from Event__c where CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`
);

fn(state => {
  const coaches = dataValue('form.coach_name')(state).split(' ');
  const dynamicFields = state.data.dynamicFields;
  const commcare_external_id = state.data.commcare_external_id;
  const caseid = state.data.form.case['@case_id'];
  return each(
    coaches,
    upsert('Attendance__c', 'CommCare_Ext_ID__c', state => ({
      ...fields(
        relationship('RecordType', 'Name', 'Intervention (Staff)'),
        relationship('Event__r', 'CommCare_Case_ID__c', caseid),
        relationship('Person_Attendance__r', 'CommCare_Ext_ID__c', state => {
          const coach_name = state.data;
          return coach_name;
        }),
        field('CommCare_Ext_ID__c', commcare_external_id)
      ),
      ...fields(...dynamicFields),
    }))
  )(state);
});

```