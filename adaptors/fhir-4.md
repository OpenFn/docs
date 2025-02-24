---
title: Fhir r4 Adaptor
---

Language support for FHIR version 4. This adaptor is compatible with any FHIR r4
compliant server.

The fhir-4 adpator is implemented in TypeScript and comes complete with a full
range of TypeScript definitions.

## About FHIR

## Builder Functions

The fhir-4 adaptor provides builder functions which make it easier to define
FHIR resources.

Builders provide short-hand properties and default values, reducing the
boiler-plate needed to create FHIR resources. They also enable code-assist to be
provided by code editors.

## Creating Resources

Because FHIR resources can be verbose and difficult to author, OpenFn provides a
suite of builder libraries.

The basic pattern is something like this:

```js
create(
  builders.patient({
    id: 'example',
    identifier: [
      {
        value: '12345',
        type: ['MR', 'http://terminology.hl7.org/CodeSystem/v2-0203'],
        system: 'urn:oid:1.2.36.146.595.217.0.1',
        period: { start: '2001-05-06' },
      },
    ],
    active: true,
    name: [
      {
        family: 'Chalmers',
        given: ['Peter', 'James'],
      },
    ],
    managingOrganization: 'Organization/1',
  })
);
```

### Basic Usage

All builders are available on the `b` (short for `builders`) namespace within
your OpenFn expression.

Every resource in FHIR should have a corresponding builder function on the `b.`
namespace (check the reference for details): for example, `b.patient()`,
`b.observation`, `b.encounter` and `b.invoice`.

The first argument for the builder is an object with properties corresponding to
FHIR json:

```js
b.patient({
  identifier: $.data.patientId,
});
```

You don't have to use builder functions - you can just write our your FHIR
structures in-line. But the builders come with some key benefits:

1. They backed by full TypeScript definitions, so you'll get validation and
   code-assist as you type
2. They simplify some FHIR data structures

The builders are designed to take a fuzzy, relaxed definition of a FHIR resource
and convert it to correct JSON. For example, a Reference type can be passed as a
fully FHIR reference object, a string id, or an existing FHIR resource. The
builder will figure out how to parse and map it to a Reference with reasonable
defaults.

Builders are not operations, so they don't sit at the top of your job code. You
can either pass them as an argument to an operation:

```js
create(b.patient($.data));
```

Or within a callback function (like `fn()`):

```js
fn(state => {
  state.newPatient = b.patient(state.data);
  return state;
});
```

### Builder API

The builders have a basic structure like this:

```
b.resource(props)
```

For example,to create a Patient, use the patient builder like this:

```
b.patient({ id: state.data.id })
```

Which will generate the following data structure:

```json
{
  "id": "123",
  "resourceType": "Patient"
}
```

Builders are

## Data Types

The builders have special handling and helpers for FHIR datatypes.s

### Codings

You can create a coding directly with the `coding` builder:

```js
b.coding('MR', 'http://terminology.hl7.org/CodeSystem/v2-0203');
// returns { code: 'MR', system: 'http://terminology.hl7.org/CodeSystem/v2-0203' }
```

You can also use the shorthand form, `c`:

```js
b.c('MR', 'http://terminology.hl7.org/CodeSystem/v2-0203', {
  display: 'Medical record number',
});
// returns { code: 'MR', system: 'http://terminology.hl7.org/CodeSystem/v2-0203' }
```

You can pass any extra properties to the coding to add them to the object.
Standard FHIR properties are type-supported and code-assisted.

```js
b.c('MR', 'http://terminology.hl7.org/CodeSystem/v2-0203', {
  display: 'Medical record number',
});
// returns {
//  code: 'MR',
//  system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
//  display: 'Medical record number' ,
// }
```

### Codeble Concepts

CodeableConcepts can often be represented as a "tuple", or an array of two
strings where the first value is the code, and the second is the system. The
tuple will be expanded to a `{ code, system }` Coding object.

For example, an Identifer's `type` accepts a Codeable Concept. We can create a
patient like this:

```js
builders.patient({
  identifier: [
    {
      type: ['MR', 'http://terminology.hl7.org/CodeSystem/v2-0203'],
    },
  ],
});
```

Which will generate a resource like:

```js
{
  resourceType: 'Patient';
  identifier: [
    {
      type: {
        code: 'MR',
        system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
      },
    },
  ];
}
```

You can also pass a concept object directly, with full type support.

You can also use the `concept` or `cc` builder. Pass one or more codings, as
tuples or objects, and optionally extra keys to add to the concept:

```js
b.concept(codings, props);
```

For example, to create a concept with a single coding:

```js
b.concept(['MR', 'http://terminology.hl7.org/CodeSystem/v2-0203']);
// outputs { coding: [{ type: 'MR', system: 'http://terminology.hl7.org/CodeSystem/v2-0203' }]}
```

Or to add a text string to a pre-defined coding:

```js
// $.coding is  ['MR', 'http://terminology.hl7.org/CodeSystem/v2-0203']
b.concept($.coding, { text: 'National Health Database' });
// outputs { text: 'National Health Database', coding: [...]} }
```

### References

Some FHIR resources reference others. Reference types in the builders provide a
number of short-hands.

For example, a FHIR reference looks like this:

```js
"managingOrganization": {
  "reference": "Organization/1"
}
```

In the patient builder, we can provide this reference in a few ways.

You can pass the reference string directly, which will be "expanded" into a
reference.

```js
b.patient({
  managingOrganization: 'Organization/1',
});
```

You can pass an existing reference object (useful when mapping FHIR to FHIR)

```js
b.patient({
  managingOrganization: $.patient.managingOrganization,
});
```

Or you can pass an existing FHIR resource, if you happen to have access to the
one you want to reference:

```js
b.patient({
  managingOrganization: $.myOrg,
});
```

Where supported, you can also pass an array of references.

You can use `b.reference()` to create your own reference with the above rules
(particularly useful when dealing with extensions which aren't typed).

```js
b.patient({
  managingOrganization: b.ref($.org), // $.org can be a string, resource or reference
});
```

## Multiple Types

Some FHIR properties are polymorphic and support multiple data types. For
example, a Patient's `deceased` property can be of type `boolean` or `datetime`.

In FHIR json, this results in a type suffix being appended to the key. For
example:

```json
{
  "resourceType": "Patient",
  "deceasedBoolean": false,
  "deceasedDateTime": "2025-01-01"
}
```

Builder functions allow you to specify the base property name and not worry
about typing the key.

For example, these both work in a FHIR-compliant way:

```js
b.patient({
  deceased: true,
});
b.patient({
  deceased: '2025-01-01',
});
```

Internally, the builder will determine the type of the incoming value and
generate the correct key.

Note that passing suffixed keys still works just fine.

```js
b.patient({
  deceasedDateTime: '2025-01-01',
});
```

### Extensions

FHIR is highly extensible, and the adaptor builder APIs have many features to
support this.

Any property can be prefixed with `_` to provide an extension, eh,:

```
b.identifier({ \_use: "custom use" })
```

Additionally, some builders, like `identifier`, allow extension objects to be
passed. Every additional arugment will be added to an extension array.

You can also use the `b.addExtension` builder to easily add an extension to a
resource

### System Mappings

FHIR builders allow systems strings in identifiers and codings to be mapped.
This allows you to specify short-form system strings, or more easily map
resources between FHIR systems.

This is done using the `util.setSystemMap` function. This takes an object which
maps source strings to destinations. Keys in the object are values you want to
use in your job code - the values you pass to the builders. The values of the
object are the target values - the systems you want to appear in your generated
resources.

Set the system map at the top of every step that needs a system map (note that
mappings are NOT remembered between steps)

```js
util.setSystemMap({ icd10: 'http://hl7.org/fhir/sid/icd-10' });
```

Because systems tend to be long strings, it can be convenient to define a
short-hand syntax, which simplifies mapping code.

For example:

```js
b.setSystemMap({
  smartcare: 'http://moh.gov.et/fhir/hiv/identifier/SmartCareID',
});

create(
  b.patient({
    identifier: { value: 'xyz', system: 'smartcare' },
  })
);
```

This will generate a resource with a full system:

```js
{
  "resourceType": "Patient"
  "identifier": [
    {
      "system": "http://moh.gov.et/fhir/hiv/identifier/SmartCareID",
      "value": "xyz"
    }
  ],
}
```

You can also use the datatype helpers directly:

```js
util.setSystemMap({ icd10: 'http://hl7.org/fhir/sid/icd-10' });

fn(state => {
  const headache = b.coding('G44.1', 'icd10');
  // ...
  return state;
});
```

This is also useful when mapping resources from one FHIR system to another.
Simply configure a system map and source systems will auto-map to the
destinations:

```js
// map incoming CDR systems to MOH systems
util.setSystemMap({
  'http://cdr.aacahb.gov.et/Encounter':
    'http://moh.gov.et/fhir/hiv/identifier/encounter',
});

b.patient({
  identifier: $.patient.
});
```

### Code Assist

Each builder function is backed by full Typescript Type definitions. This means
full code-complete can be provided in editors that support it.

When editing code with the FHIR adaptor, the Inspector will provide full
code-assist.

Pressing `ctrl + space` will open up the Suggestions list, which provides
contextual auto-completion. Use this to more easily create FHIR resources.

Note that code assist will only provide suggestions for commonly used
properties, but custom properties can also be passed directly and will be
written to the new resource

```
b.patient({ \_address: { /_ ... custom address _/ } })
```

## Bundles

## System maps

## Next Steps

- Value mapping - ie, mapping the string 'M' to a fully-coded value `{ code:
  system }
-
