---
title: Create Person in OpenMRS
sidebar_label: Create Person in OpenMRS
id: Create-Person-in-OpenMRS-2016-02-12
keywords:
  - library
  - job
  - expression
  - openmrs
  - dataValue
  - field
  - fields
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Create Person in OpenMRS
- Adaptor: [`@openfn/language-openmrs`](https://www.github.com/openfn/language-openmrs)
- Adaptor Version: [`v0.0.2`](https://www.github.com/openfn/language-openmrs/releases/tag/v0.0.2)
- Created almost 7 years ago
- Updated over 1 year ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`

## Expression

```js
person(
  fields(
    field("gender", "M"),
    field("names", function(state) {
      return [{
        "givenName": dataValue("form.first_name")(state),
        "familyName": "Sports_Music_Field_Day"
      }]
    })
  )
)
```