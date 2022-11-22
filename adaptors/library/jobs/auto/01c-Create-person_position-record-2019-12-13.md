---
title: 01c/ Create person_position record
sidebar_label: 01c/ Create person_position record
id: 01c-Create-person_position-record-2019-12-13
keywords:
  - library
  - job
  - expression
  - http
  - alterState
  - post
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 01c/ Create person_position record
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-http)
- Created almost 3 years ago
- Updated over 2 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `post`

## Expression

```js
// Pluck out parts of the ODK submission and prepare our 'person_postion' object that we
// will use in multiple requests to iHRIS. =====================================
alterState(state => {
  console.log(state);
  // The position field in the form holds the position ID and the salary
  const positionData = state.references[0].RegistrationForm.position.split('_');
  const startDateComponents = state.references[0].RegistrationForm.start_date.split('-')
  state.person_position = {
    'form[person_position][0][0][fields][id]': 'person_position|0',
    'form[person_position][0][0][fields][parent]': state.data.person_id,
    'form[person_position][0][0][fields][position]': 'position|'+positionData[0],
    'form[person_position][0][0][fields][start_date][day]': startDateComponents[2],
    'form[person_position][0][0][fields][start_date][month]': startDateComponents[1],
    'form[person_position][0][0][fields][start_date][year]': startDateComponents[0],
    'form[salary][0][0][fields][salary]': 'currency|3='+positionData[1],
    'can_edit_position': '1'
  };
  state.person_contact = {
    'form[person_contact_personal][0][0][fields][id]': 'person_contact_personal|0',
    'form[person_contact_personal][0][0][fields][parent]': state.data.person_id,
    'form[person_contact_personal][0][0][fields][mobile_phone]': state.references[0].RegistrationForm.phone_number,
    'contact_type': 'personal',
  };
  return state;
});

// =============================================================================
// Create records via iHRIS api, with the hostUrl, port, and authentication
// handled by the credential ===================================================
post(
  '/manage/make_offer',
  {
    formData: state => {
      state.person_position.submit_type = 'confirm';
      return state.person_position;
    },
  },
  post('/manage/make_offer', {
    formData: state => {
      state.person_position.submit_type = 'save';
      return state.person_position;
    },
    options: {
      successCodes: [302],
    },
  })
);

post(
  '/manage/contact?contact_type=personal',
  {
    formData: state => {
      state.person_contact.submit_type = 'confirm';
      return state.person_contact;
    },
  },
  post('/manage/contact?contact_type=personal', {
    formData: state => {
      state.person_contact.submit_type = 'save';
      return state.person_contact;
    },
    options: {
      successCodes: [302],
    },
  })
);


```