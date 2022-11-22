---
title: Add data values
sidebar_label: 📜 Add data values
id: DHIS2-DataValues-API
keywords:
  - library
  - job
  - expression
  - dhis2
  - dataValue
  - field
  - fields
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Add data values
- Adaptor: [`@openfn/language-dhis2`](https://www.github.com/openfn/language-dhis2)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-dhis2)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`

## Expression

```js
// ----
// Add data to data value sets in DHIS2 using a generic JSON message, submitted
// by Taylor Downs @ OpenFn.
// ---

dataValueSet(
  fields(
    field('dataSet', 'pBOMPrpg1QX'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('period', '201401'),
    field('completeData', dataValue('form.date')),
    field('dataValues', function (state) {
      return [
        dataElement('qrur9Dvnyt5', dataValue('form.prop_a')(state)),
        dataElement('oZg33kd9taw', dataValue('form.prop_b')(state)),
        dataElement('msodh3rEMJa', dataValue('form.prop_c')(state)),
      ];
    })
  )
);

```