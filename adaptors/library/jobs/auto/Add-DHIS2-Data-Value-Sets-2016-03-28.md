---
title: Add DHIS2 Data Value Sets
sidebar_label: Add DHIS2 Data Value Sets
id: Add-DHIS2-Data-Value-Sets-2016-03-28
keywords:
  - library
  - job
  - expression
  - dhis2
  - dataPath
  - dataValue
  - each
  - field
  - fields
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Add DHIS2 Data Value Sets
- Adaptor: [`@openfn/language-dhis2`](https://www.github.com/openfn/language-dhis2)
- Adaptor Version: [`v0.1.0`](https://www.github.com/openfn/language-dhis2/releases/tag/v0.1.0)
- Created over 6 years ago
- Updated about 5 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataPath`, `dataValue`, `each`, `field`, `fields`

## Expression

```js
each(
  dataPath("data[*]"),
  // Use our system specific helper functions...
  dataValueSet(
    fields(
      field("dataSet", "pBOMPrpg1QX"),
      field("orgUnit", "DiszpKrYNg8"),
      field("period", "201401"),
      field("completeData", dataValue("today")),
      field("dataValues", function(state) {
        // Or write your own JS...        
        console.log("Do anything you want in here.");
        return [
          dataElement("qrur9Dvnyt5", state.data.site_school_number),
          dataElement("oZg33kd9taw", state.data.light_source),
          dataElement("msodh3rEMJa", state.data.number_of_children)
        ];
      })
    )
  )
);

```