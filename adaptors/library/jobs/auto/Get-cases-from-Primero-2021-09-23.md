---
title: Get cases from Primero
sidebar_label: Get cases from Primero
id: Get-cases-from-Primero-2021-09-23
keywords:
  - library
  - job
  - expression
  - primero
  - getCases
  - JSON
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Get cases from Primero
- Adaptor: [`@openfn/language-primero`](https://www.github.com/openfn/language-primero)
- Adaptor Version: [`v2.2.8`](https://www.github.com/openfn/language-primero/releases/tag/v2.2.8)
- Created about 1 year ago
- Updated about 1 year ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`getCases`, `JSON`

## Expression

```js
getCases({
   remote: true,
   case_id: "234bbac3-7278-430a-98b5-1abc460671ec" //extract 1 case using case id
   //query: //...or use 'query' to filter by other criteria to get many cases
 },  state => {
    console.log(`Primero cases extracted: ${JSON.stringify(state.data)}`); //logging Primero response
    return { ...state, data: {}, references: [] }
  })
```