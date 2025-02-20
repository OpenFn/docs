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

### Basic Usage

All builders are available on the `b` (short for `builders`) namespace within
your OpenFn expression.

Every resource in Fhir should have a corresponding builder function on the `b.`
namespace (check the reference for details).

The first argument for the builder takes an object with properties corresponding
to FHIR json:

```
b.patient({
  identifier: $.data.patientId,
})
```

You don't have to use builder functions - you can just write our your FHIR
structures in-line. But the builders come with two benefits:

1. They backed by full TypeScript definitions, so you'll get validation and
   code-assist as you type
2. They simplify some FHIR data structures

The builders are designed to take a fuzzy, relaxed definition of a FHIR resource
and convert it to correct JSON.

Builders are not operations, so they don't sit at the top of your job code. You
can either pass them as an argument to an operation:

```js
create(
  b.patient({
    identifier: $.data.patientId,
  })
);
```

Or within a callback function (like `fn()`):

```js
fn(state => {
  state.newPatient = b.patient({
    identifier: $.data.patientId,
  });
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

### System Mappings

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
// { coding: [{ type: 'MR', system: 'http://terminology.hl7.org/CodeSystem/v2-0203' }]}
```

Or to add a text string to a pre-defined coding:

```js
b.concept($.coding, { text: 'National Health Database' });
// { text: 'National Health Database', coding: [...]} }
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

## Typed Keys

TODO what do we call these???

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
