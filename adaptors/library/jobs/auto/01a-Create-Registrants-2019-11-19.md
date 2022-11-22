---
title: 01a/ Create Registrants
sidebar_label: 01a/ Create Registrants
id: 01a-Create-Registrants-2019-11-19
keywords:
  - library
  - job
  - expression
  - http
  - alterState
  - post
  - JSON
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 01a/ Create Registrants
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-http)
- Created about 3 years ago
- Updated over 2 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `post`, `JSON`

## Expression

```js
// @trigger 'odk submission' either via Aggregate JSON Forwarding or via direct
//          submission to OpenFn.org/inbox
// @credential 'ihris'
// @adaptor 'http'
// -----------------------------------------------------------------------------

// =============================================================================
// Pluck out parts of the ODK submission and prepare our 'person' object that we
// will use in multiple requests to iHRIS. =====================================
console.log(JSON.stringify(state.data))
alterState(state => {
  state.person = {
    'form[person][0][0][fields][id]': 'person|0',
    'form[person][0][0][fields][surname]': state.data.RegistrationForm.last_name,
    'form[person][0][0][fields][firstname]': state.data.RegistrationForm.first_name,
    'form[person][0][0][fields][nationality]': `country|${state.data.RegistrationForm.country}`,
    'form[person][0][0][fields][residence]': 'district|3',
  };
  return state;
});

// =============================================================================
// Create records via iHRIS api, with the hostUrl, port, and authentication
// handled by the credential ===================================================
post(
  '/manage/person',
  {
    formData: state => {
      state.person.submit_type = 'confirm';
      return state.person;
    },
  },
  post('/manage/person', {
    formData: state => {
      state.person.submit_type = 'save';
      return state.person;
    },
    options: {
      successCodes: [302],
    },
  })
);


```