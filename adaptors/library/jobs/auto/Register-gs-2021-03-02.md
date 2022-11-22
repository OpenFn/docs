---
title: Register (gs)
sidebar_label: Register (gs)
id: Register-gs-2021-03-02
keywords:
  - library
  - job
  - expression
  - googlesheets
  - appendValues
  - JSON
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Register (gs)
- Adaptor: [`@openfn/language-googlesheets`](https://www.github.com/openfn/language-googlesheets)
- Adaptor Version: [`v2.0.0`](https://www.github.com/openfn/language-googlesheets/releases/tag/v2.0.0)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`appendValues`, `JSON`

## Expression

```js
appendValues({
  spreadsheetId: '1EFkY4zD4qqxnJdH-QaeasKd1zXC-1sNKpEg08W-3sT0',
  range: 'COVID-19 Cases!A2',
  values: state => {
    const kobo = state.data.body;
    
    console.log('Submission data: ' + JSON.stringify(kobo, null, 2));
    
    return [
      [
        kobo['National_ID'],
        kobo['Patient_name'],
        kobo['Last_Name_of_Patient'],
        kobo['Sex'],
        kobo['Age'],
        kobo['Comments'],
        Date(),
      ],
    ];
  },
});
```