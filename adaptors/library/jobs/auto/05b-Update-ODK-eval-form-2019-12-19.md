---
title: 05b/Update ODK eval form
sidebar_label: 05b/Update ODK eval form
id: 05b-Update-ODK-eval-form-2019-12-19
keywords:
  - library
  - job
  - expression
  - http
  - get
  - post
  - Number
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 05b/Update ODK eval form
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-http)
- Created almost 3 years ago
- Updated over 2 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`get`, `post`, `Number`

## Expression

```js
// Your job goes here.
get(
  'http://165.227.185.106/formXml',
  {
    query: {
      formId: 'evaluation_form',
    },
  },
  state => {
    let template = state.data.body;
    let templateUpdated = false;

    const itemEx = /<item>\s?<label>[^<>]*<\/label>\s?<value>[^<>]*<\/value>\s?<\/item>/gi;
    const itemMatches = template.match(itemEx);

    const selectUserEx = /<select1\s+ref="\/EvaluationForm\/social_worker_id">/gi;

    console.log(`Receiving ${state.new_employees.length} new data!`);

    for (let j = 0; j < state.new_employees.length; j++) {
      let userExists = false;

      let userId = state.new_employees[j].person_id.split('|')[1];
      console.log(`Processing user: ${userId}.`);

      for (let i = 0; i < itemMatches.length; i++) {
        if (itemMatches[i].indexOf(userId) >= 0) {
          userExists = true;
        }
      }

      if (!userExists) {
        const selectUserMatches = template.match(selectUserEx);
        const msisdn = state.new_employees[j].msisdn;
        const userItem =
          `<item><label>${state.new_employees[j].person_name}</label><value>${userId}_${msisdn}</value></item>`;
        console.log(`Adding user: ${userItem}.`);
        template = template.replace(
          selectUserEx,
          selectUserMatches[0] + userItem
        );
        templateUpdated = true;
      } else {
        console.log('Not seeing any user to add. Moving along!');
      }
    }

    if (templateUpdated) {
      const versionEx = /id="\S+"\s+version="(\S+)"/;
      const versionMatches = template.match(versionEx);
      const currentVersion = Number.parseInt(versionMatches[1]);
      console.log(`Updating form version from: ${currentVersion}`);
      template = template.replace(currentVersion, currentVersion + 1);
    }

    state.template = template;
    return state;
  }
);

post('http://165.227.185.106/formUpload', {
  formData: state => {
    return {
      form_def_file: {
        value: state.template,
        options: {
          filename: 'evaluation_form.xml'
        }
      }
    };
  },
});

```