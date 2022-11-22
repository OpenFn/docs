---
title: Add events
sidebar_label: 📜 Add events
id: DHIS2-Events-API
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

- Name: Add events
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
// Create new events in DHIS2 using a generic JSON message, submitted by
// Taylor Downs @ OpenFn for demonstration porpoises.
// ---

event(
  fields(
    field('program', 'eBAyeGv0exc'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('eventDate', dataValue('meta.date')),
    field('status', 'COMPLETED'),
    field('storedBy', 'admin'),
    field('coordinate', {
      latitude: '59.8',
      longitude: '10.9',
    }),
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