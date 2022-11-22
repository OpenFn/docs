---
title: Get CommCare Forms (Bulk Extract)
sidebar_label: Get CommCare Forms (Bulk Extract)
id: Get-CommCare-Forms-Bulk-Extract-2022-05-16
keywords:
  - library
  - job
  - expression
  - http
  - each
  - get
  - post
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Get CommCare Forms (Bulk Extract)
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`v3.1.7`](https://www.github.com/openfn/language-http/releases/tag/v3.1.7)
- Created 6 months ago
- Updated 6 months ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`each`, `get`, `post`

## Expression

```js
// Your job goes here.
get(
  'https://www.commcarehq.org/a/commcare-demo-2035/api/v0.5/form/',
  {
    query: {
      limit: 1000, //max limit: 1000
      offset: state.meta && state.meta.next ? state.meta.limit + state.meta.offset : 0,
      received_on_start: '2022-05-16',
      received_on_end: '2022-05-18',
      xmlns: 'http://openrosa.org/formdesigner/C87A7E2A-D98D-4E2C-9F0B-997E0AE635C6',
    },
  },
  state => {
    const { meta, objects } = state.data;
    const { openfnInboxUrl } = state.configuration;
    const xmlnsList = [
      'http://openrosa.org/formdesigner/C87A7E2A-D98D-4E2C-9F0B-997E0AE635C6'

    ];

    // const forms = objects.filter(obj => xmlnsList.includes(obj.form['@xmlns']));
    const forms = objects;

    state.configuration = { baseUrl: 'https://www.openfn.org' };
    console.log('Posting form submissions to OpenFn Inbox...');

    return each(forms, state => {
      return post(`/inbox/${openfnInboxUrl}`, { body: state.data }, state => ({
        ...state,
        data: {},
        references: [],
      }))(state);
    })(state);
  }
);
```