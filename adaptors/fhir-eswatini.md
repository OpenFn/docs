---
title: FHIR Eswatini Adaptor
---

Language support for the
[Eswatini National Health Information Exchange](https://hapifhir.eswatinihie.com)
FHIR Implementation Guide.

This adaptor is generated from the Eswatini FHIR Implementation Guide (IG),
which means it understands Eswatini-specific profiles, extensions, and value
sets. It is designed to make writing FHIR-conformant job code as simple as
possible.

## About FHIR

[FHIR](https://www.hl7.org/fhir/overview.html) stands for Fast Healthcare
Interoperability Resources. It is a standard for representing and exchanging
healthcare data electronically.

Learn more about FHIR and
[FHIR for heath data exchange](/documentation/get-started/standards#fhir-for-health-data-exchange).

## How This Adaptor Helps

Writing conformant FHIR resources by hand is verbose. The raw JSON for basic
Patient looks something like this:

```json
{
  "resourceType": "Patient",
  "meta": {
    "profile": [
      "https://hapifhir.eswatinihie.com/fhir/StructureDefinition/SzPatient"
    ]
  },
  "identifier": [
    {
      "use": "official",
      "type": {
        "coding": [
          {
            "system": "https://hapifhir.eswatinihie.com/fhir/CodeSystem/SzPersonIdentificationsCS",
            "code": "PI",
            "display": "Personal ID Number"
          }
        ]
      },
      "system": "http://homeaffairs.sys",
      "value": "1999001000000"
    }
  ],
  "name": [{ "family": "Gule", "given": ["Jacob", "Samuel"] }],
  "gender": "male",
  "birthDate": "1990-01-01",
  "extension": [
    {
      "url": "https://hapifhir.eswatinihie.com/fhir/StructureDefinition/SzInkhundlaExtension",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "https://hapifhir.eswatinihie.com/fhir/CodeSystem/SzTinkhundlaCS",
            "code": "3",
            "display": "LOBAMBA"
          }
        ],
        "text": "LOBAMBA"
      }
    }
  ]
}
```

The fhir-eswatini adaptor reduces this to:

```js
b.patient({
  identifier: {
    use: 'official',
    type: 'PI',
    system: 'http://homeaffairs.sys',
    value: '1999001000000',
  },
  name: [{ family: 'Gule', given: ['Jacob', 'Samuel'] }],
  gender: 'male',
  birthDate: '1990-01-01',
  inkhundla: '3',
});
```

The "builder function" `b.patient()` handles the profile URL, the full
identifier type coding, and the extension structure automatically.

This means that workflow code which maps information into fhir resources is
simpler and cleaner. It's easier to write, easier to read, easier to reason
about, and easier to modify.

## Builder functions

All builder functions are available on the `b` (short for `builders`) namespac.

There is a builder for every resource type in the Eswatini IG: `b.patient()`,
`b.encounter()`, `b.observation()`, `b.condition()` and so on. See the
[reference docs](/adaptors/packages/fhir-eswatini-docs) for the full list.

Pass a plain object with the properties you want:

```js
const patient = b.patient({
  gender: 'male',
  birthDate: '1990-01-01',
});
```

Builders are not operations themselves. Pass them as an argument to an operation
like `create()`, or use them inside a callback:

```js
fn(state => {
  state.patient = b.patient(state.data);
  return state;
});
```

### TODO Bundling

```js
addToBundle(
  b.patient({
    gender: 'male',
    birthDate: '1990-01-01',
  })
);
```

## Value mapping

The adaptor knows the Eswatini IG's value sets, so short code values are
automatically expanded to full coded concepts.

For example, an identifier's `type` accepts a short code from the Eswatini
Person Identifications code system:

```js
b.patient({
  identifier: {
    type: 'PI', // expands to a full CodeableConcept
    system: 'http://homeaffairs.sys',
    value: '1999001000000',
  },
});
```

The same applies to other coded fields. For example, an encounter's `class`
accepts short codes like `OPD`, `IPD`, `CO`, and `SO`:

```js
b.encounter({
  class: 'OPD', // expands to full coding with system and display
  subject: 'Patient/123',
});
```

To know the range of value allowed, follow the links in the docs to the value
set definition (the docs will link you straight into the Implementation Guide).
Any Code value declared on that page is allowed.

![Example listing of code values from the FHIR IG](/img/fhir-eswatini-valueset-example.png)

You can also define your own value mappings. This is useful when mapping your
input data into FHIR. Just declare the mappings at the top of your job code with
the correct URL and whatever values you want.

```js
b.setValues(
  // get the value set URL from the docs
  'http://172.209.216.154:3447/fhir/ValueSet/SzTinkhundlaVS',
  // Define your own mappings, where the key is the code value passed to
  // to the builder, and the value is whatever should be mapped
  // In this example, we want to map an inkhundla name to the code
  {
    mbabane: {
      system: 'https://hapifhir.eswatinihie.com/fhir/CodeSystem/SzTinkhundlaCS',
      code: '264',
      display: 'MBABANE',
    },
  }
);
```

Custom mappings like this do not override the default system values. In fact,
your custom mappings are expanded first and THEN the system mappings cut in - so
you can declare custom mappings which map right to codings, which will then be
expanded:

```js
b.setValues(
  'http://172.209.216.154:3447/fhir/ValueSet/SzTinkhundlaVS',
  // Map to the code, and let the default mapping expand the full extension
  {
    mbabane: '264',
  }
);
```

Now your job code can do:

```js
b.patient({
  inkundla: 'mbabane',
});
```

If you declare mappings relative to the format your source data, you can declare
the value based on your data without complex mapping code

```js
b.patient({
  inkundla: $.patient.district, // mapping from a different dataset
});
```

## Extensions as properties

Eswatini-specific extensions are exposed as simple named properties on the
relevant builders, instead of requiring you to construct extension objects
manually.

For example, for the Patient resource, supported extension properties are:

| Property           | Extension            |
| ------------------ | -------------------- |
| `inkhundla`        | SzInkhundlaExtension |
| `chiefdom`         | SzChiefdomExtension  |
| `registrationDate` | SzRegistrationDate   |

Pass a code value and the builder constructs the full extension:

```js
b.patient({
  inkhundla: '3',
  chiefdom: '7',
  registrationDate: '2025-06-01T10:00:00Z',
});
```

```json
{
  "extension": [
    {
      "url": "http://172.209.216.154:3447/fhir/StructureDefinition/SzInkhundlaExtension",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "https://hapifhir.eswatinihie.com/fhir/CodeSystem/SzTinkhundlaCS",
            "code": "3",
            "display": "LOBAMBA"
          }
        ],
        "text": "LOBAMBA"
      }
    },
    {
      "url": "http://172.209.216.154:3447/fhir/StructureDefinition/SzChiefdomExtension",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "https://hapifhir.eswatinihie.com/fhir/CodeSystem/SzChiefdomCS",
            "code": "7",
            "display": "Lobamba"
          }
        ],
        "text": "Lobamba"
      }
    },
    {
      "url": "http://172.209.216.154:3447/fhir/StructureDefinition/SzRegistrationDate",
      "valueDateTime": "2025-06-01T10:00:00Z"
    }
  ]
}
```

## Multi-profile resources

Some FHIR resource types have multiple Eswatini profiles. For these, pass the
profile name as the first argument to the builder.

### Observation

The `observation` builder accepts one of `SzCauseOfDeath`,
`SzClinicalObservation`, `SzLabResult`, `SzMannerOfDeath`, or `SzVitalSigns`:

```js
b.observation('SzVitalSigns', {
  status: 'final',
  subject: 'Patient/123',
});
```

### ServiceRequest

The `serviceRequest` builder accepts one of `SzLabRequest` or `SzReferral`:

```js
b.serviceRequest('SzReferral', {
  status: 'active',
  intent: 'order',
  subject: 'Patient/123',
});
```

## Finding More Examples

The size and complexity of FHIR implementations can make it hard to document
effectively.

The design of the builders is to be intuitive: pass any reasonable value to a
key and the builder should do the right thing with it.

If you're not sure, and the API reference documentation isn't clear, the best
places to get help are:

1. Look at the
   [unit tests](https://github.com/OpenFn/adaptors/tree/main/packages/fhir-eswatini/test/resources)
   for the resource you are building. These are hand written and have many
   examples of mapping values (the unit tests are how we validate that the
   different mappings work!)
1. Look at the
   [source code](https://github.com/OpenFn/adaptors/tree/main/packages/fhir-eswatini/src/profiles)
   of the builder function you are using. The builders are quite verbose and you
   should be able to see how your input data is processed. Check that the key
   you want is supported, and check how the value is processed (is it value
   mapped? Is it sent to another builder?)

## Authentication

See this adaptor's
[Configuration docs](/adaptors/packages/fhir-eswatini-configuration-schema) for
the required authentication parameters.

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or using a Raw JSON
credential type, your configuration will look something like this:

```json
{
  "baseUrl": "https://hapifhir.eswatinihie.com",
  "apiPath": "fhir"
}
```

### I've noticed a problem with this adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we
welcome contributions from our community. Check out our
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for
more information on how you can update adaptors!

Or, you can always reach out to the Community through our
[Community Forum here](https://community.openfn.org/).
