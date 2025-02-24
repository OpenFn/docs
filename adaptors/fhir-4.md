---
title: FHIR r4 Adaptor
---

Language support for FHIR version 4. This adaptor is compatible with any FHIR r4
compliant server.

The FHIR 4 adaptor is implemented in TypeScript and comes complete with full
TypeScript definitions.

## About FHIR

[FHIR](https://www.hl7.org/fhir/overview.html) stands for Fast Healthcare
Interoperability Resources. It is a standard for representing and exchanging
healthcare data electronically.

## Authentication

The FHIR standard does not directly prescribe authentication and authorization
methods. Instead, it provides security guidelines and leaves the choice of
implementation to the developers of FHIR servers and clients. See the FHIR
[docs](https://www.hl7.org/fhir/security.html) for the latest security-related
recommendations. Depending on the FHIR systems being integrated via OpenFn, you
might employ a Basic Auth, API key, or OAuth authentication scheme.

See this adaptor's
[Configuration docs](/adaptors/packages/fhir-4-configuration-schema) for more on
the required authentication parameters.

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or if using a Raw
JSON credential type, then your configuration will look something like this to
define your target endpoint and FHIR version:

```
{
  "baseUrl": "https://hapi.fhir.org", //fhir endpoint
  "apiPath": "baseR4" //fhir version
}
```

## Code Assist

The OpenFn Inspector provides full code-assist and code-complete for all FHIR
resource types.

Pressing `ctrl + space` will open up the Suggestions list, which provides
contextual auto-completion. Use this to more easily create FHIR resources.

Note that code assist will only provide suggestions for commonly used
properties, but custom properties can also be passed directly and will be
written to the new resource

## Bundles

The FHIR-4 adaptor provides support for bundles.

You can create resources and add them to a bundle:

```js
addToBundle($.resource);
```

Where `$.resource` is a FHIR resource, or an array of resources, on the state
object.

This will add the resources to a bundle resource, under the `entry` key, on
state under a key called `bundle`. To save the bundle under a different key,
pass a string as the second argument:

```js
addToBundle($.resource, 'patients-bundle');
```

Each item in the bundle will be given a `request` object with the `PUT` method
and a URL. For example:

```js
addToBundle({
  id: 'x',
  resourceType: 'Patient',
});
```

Will create a state object like this:

```json
{
  "bundle": {
    "resourceType": "bundle",
    "entry": [
      {
        "resource": {
          "id": "x",
          "resourceType": "Patient"
        },
        "request": {
          "method": "PUT",
          "url": "Patient/x"
        }
      }
    ]
  }
}
```

To send the Bundle to the FHIR server defined in `state.configuration.baseURL`,
call `uploadBundle()`.

You can pass the name of a key on state to upload a specific bundle:

```js
uploadBundle('patients-bundle');
```

Or you can pass your own bundle object in directly:

```js
uploadBundle($.bundle);
```

## Builder Functions

The FHIR-4 adaptor provides builder functions which make it easier to define
FHIR resources.

Builders provide short-hand properties and default values, reducing the
boiler-plate needed to create FHIR resources. They also enable code-assist to be
provided by code editors.

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
`b.observation()`, `b.encounter()` and `b.invoice()`.

The first argument for the builder is an object with properties corresponding to
FHIR json:

```js
b.patient({
  identifier: $.data.patientId,
});
```

Which will generate the following data structure:

```json
{
  "resourceType": "Patient"
  "id": "123",
}
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

## DataTypes Builders

The builders have special handling and helpers for FHIR datatypes, like
`identifier` and `coding`.

Like resource builders, they exist on the `b.` or `builders.` namespace. Unlike
the other builders, they are hand-written and not auto-generated from the spec.
This means they have a slightly different API.

The most important datatype builders are detailed below.

:::tip

When you pass an object into a builder, internally that object will be passed to
a datatype builder.

So you can either pass a reference directly:

```js
b.patient({
  identifier: {
    value: 'abc',
  },
});
```

Or use a builder explicitly:

```js
b.patient({
  identifier: b.id('abc'),
});
```

You may want to use a builder to pass an extension.

```js
b.patient({
  identifier: b.identifier('abc', {
    url: 'http://hospital.example.org/fhir/StructureDefinition/identifier-issuingDepartment',
    value: 'Emergency Department',
  }),
});
```

:::

### Identifiers

Use `b.identifier(id, ...extensions)` or its shorthand,
`b.id(id, ...extensions)`, to create an Identifier object.

You can pass a single string value to create an identifier without a system:

```js
b.identifier('ip_request1.1');
```

More commonly, you'll pass a `{ value, system }` pair:

```js
b.identifier({
  system: 'http://moh.gov.et/fhir/hiv/identifier/MRN',
  value: 'MRN12345671',
});
```

Any additional arguments will be treated as extensions:

```js
b.identifier(
  {
    system: 'http://moh.gov.et/fhir/hiv/identifier/MRN',
    value: 'MRN12345671',
  },
  {
    url: 'http://hospital.example.org/fhir/StructureDefinition/identifier-issuingDepartment',
    valueString: 'Emergency Department',
  },
  {
    url: 'http://hospital.example.org/fhir/StructureDefinition/identifier-issuedDate',
    valueDateTime: '2023-06-15T14:30:00Z',
  }
);
```

Resulting in the following JSON structure:

```json
{
  "resourceType": "Patient",
  "identifier": [
    {
      "system": "http://moh.gov.et/fhir/hiv/identifier/MRN",
      "value": "MRN12345671",
      "extension": [
        {
          "url": "http://hospital.example.org/fhir/StructureDefinition/identifier-issuingDepartment",
          "valueString": "Emergency Department"
        },
        {
          "url": "http://hospital.example.org/fhir/StructureDefinition/identifier-issuedDate",
          "valueDateTime": "2023-06-15T14:30:00Z"
        }
      ]
    }
  ]
}
```

### Codings

Use `b.coding(code, system, extra)` or its shorthand,
`b.c(code, system, extra)`, to create a Coding object

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

### Codeable Concepts

Use `b.concept(codings, extra)` or its shorthand, `b.cc(codings, extra)`, to
create a Codeable Concept with one or more codings.

Pass one or more codings, as tuples or objects, and optionally extra keys to add
to the concept:

```js
b.concept(codings, props);
```

For example, to create a concept with a single coding:

```js
b.concept(['MR', 'http://terminology.hl7.org/CodeSystem/v2-0203']);
// outputs { coding: [{ type: 'MR', system: 'http://terminology.hl7.org/CodeSystem/v2-0203' }]}
```

Or for multiple codings (note the extra array!)

```js
b.concept([
  ['M', 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus'],
  ['02', 'http://national-registry.example.org/marital-status'],
]);
```

You can add extra props to the concept, like text:

```js
b.concept($.codings, { text: 'Married' });
// outputs { text: 'Married', coding: [...]} }
```

Where a CodeableConcept is expected, it can be represented as a "tuple", or an
array of two strings where the first value is the code, and the second is the
system. The tuple will be expanded to a `{ code, system }` Coding object.

For example, an Identifier's `type` accepts a CodeableConcept. We can create a
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

```json
{
  "resourceType": "Patient",
  "identifier": [
    {
      "type": {
        "code": "MR",
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
      }
    }
  ]
}
```

You can also pass a concept object directly, with full type support.

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

### Multiple Types

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

Any property can be prefixed with `_` to provide an extension, e.g,,:

```js
b.identifier({ _use: 'custom use' });
```

You can add an extension to any resource using the
`addExtension(resource, extensionUrl, extensionValue)` builder.

For example, the following code:

```js
fn(state => {
  const patient = b.patient({});

  b.addExtension(
    patient,
    'http://hl7.org/fhir/StructureDefinition/patient-religion',
    // declare a codeableConcept
    b.cc(
      ['1023', 'http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation'],
      { text: 'Muslim' }
    )
  );

  return state;
});
```

Creates a patient with an `religious affiliation` extension:

```json
{
  "resourceType": "Patient",
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/patient-religion",
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "1023",
            "system": "http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation"
          }
        ],
        "text": "Muslim"
      }
    }
  ]
}
```

You can call `addExtension` Multiple times for a given resource. It will
intelligently manage the `extension` array on the target resource for you.

In addition, some datatype builders, like, `identifier`, allow extensions to be
passed as extra arguments. For example:

```js
b.identifier('12345', {
  url: 'http://hospital.example.org/fhir/StructureDefinition/identifier-issuingDepartment',
  value: 'Emergency Department',
});
```

Produces an identifier like:

```json
{
  "extension": [
    {
      "url": "http://hospital.example.org/fhir/StructureDefinition/identifier-issuingDepartment",
      "valueString": "Emergency Department"
    }
  ],
  "value": "12345"
}
```

### System Mappings

FHIR builders allow `system` strings in identifiers and codings to be mapped.
This allows you to specify short-form system strings, or more easily map
resources between FHIR systems.

This is done using the `util.setSystemMap(map)` function. This takes an object
which maps source strings to destinations. Keys in the object are values you
want to use in your job code - the values you pass to the builders. The values
of the object are the target values - the systems you want to appear in your
generated resources.

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
