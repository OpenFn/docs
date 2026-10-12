---
title: Satusehat Adaptor
---

## About Satusehat

[Satusehat](https://satusehat.kemkes.go.id/platform/docs/id/playbook/introduction/)
is a health data exchange ecosystem that connects information systems or
applications from all members of the Indonesian digital health ecosystem
including health facilities, regulators, guarantors, and digital service
providers.

SATUSEHAT uses HL7 [FHIR](https://www.hl7.org/fhir/) (Fast Healthcare
Interoperability Resources) in implementing standard data models and Application
Programming Interfaces (APIs).

:::info FHIR

FHIR (Fast Healthcare Interoperability Resources) is a global (international)
standard that defines the data format and its elements (called " resources ")
and an application programming interface (API ) standard for information
exchange

:::

The following example shows a HTTP POST request to creating an `Encounter` FHIR
resource. Data was taken from the
[Satusehat Postman Collection](https://www.postman.com/satusehat/satusehat-public/request/56uan96/encounter-create)

```js
post('Encounter', {
  resourceType: 'Encounter',
  status: 'arrived',
  class: {
    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
    code: 'AMB',
    display: 'ambulatory',
  },
  subject: {
    reference: 'Patient/100000030009',
    display: 'Budi Santoso',
  },
  participant: [
    {
      type: [
        {
          coding: [
            {
              system:
                'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
              code: 'ATND',
              display: 'attender',
            },
          ],
        },
      ],
      individual: {
        reference: 'Practitioner/N10000001',
        display: 'Dokter Bronsig',
      },
    },
  ],
  period: {
    start: '2022-06-14T07:00:00+07:00',
  },
  location: [
    {
      location: {
        reference: 'Location/b017aa54-f1df-4ec2-9d84-8823815d7228',
        display:
          'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
      },
    },
  ],
  statusHistory: [
    {
      status: 'arrived',
      period: {
        start: '2022-06-14T07:00:00+07:00',
      },
    },
  ],
  serviceProvider: {
    reference: 'Organization/{{Org_id}}',
  },
  identifier: [
    {
      system: 'http://sys-ids.kemkes.go.id/encounter/{{Org_id}}',
      value: 'P20240001',
    },
  ],
});
```

Checkout Satusehat's
[Postman Collection](https://www.postman.com/satusehat/satusehat-public/overview)
for more examples and resources.

## Mapping Satusehat URLs to Adaptor Functions

The Satusehat adaptor functions provide convenient HTTP method helpers - like
[`get()`](/adaptors/packages/satusehat-docs#get).

Each takes a path to a FHIR resource, relative to the baseURL in the
configuration file, and a list of query parameters. Some helpers (like `post`)
also take a FHIR resource as a JSON object.

For example, a request to find an
[encounter by subject](https://www.postman.com/satusehat/satusehat-public/request/ef2ilan/encounter-by-subject)
requires a URL like this:

```
https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Encounter?subject=100000030009
```

In OpenFn, we would use the `get` function, pass the path as the first argument,
and the query parameters as the second. Like this:

```js
get('Encounter', { subject: '100000030009' });
```

The result will be written to `state.data`.

## Integration Options

1. **[REST APIs](https://satusehat.kemkes.go.id/platform/docs/id/postman-workshop/)**
   enable external services like OpenFn to pull data from Satusehat or push data
   to Satusehat from external apps. This option is suitable for scheduled
   workflows or those that need to update data in Satusehat with external
   information.

## How to Extract or Modify Satusehat Data

**See the available [helper functions](/adaptors/packages/satusehat-docs)** for
a full list of functions supported by this adaptor for extracting and/or
modifying Satusehat data.

To fetch data from Satusehat via OpenFn, you can:

1. Configure a new workflow with a "cron" trigger and define the frequency of
   your workflow (e.g., daily at 8:00AM)
2. Add a "Get data" step linked to this Satusehat adaptor
3. Edit the Step and open the Inspector (`</>`) to write a basic job using this
   adaptor's [GET](/adaptors/packages/satusehat-docs#get) to specify which data
   you want to extract or "pull" from Satusehat

See [platform docs](/documentation/build/workflows) for more guidance on
building workflows.

## Examples

These jobs come from an integration that sends CommCare visits to Satusehat.
Each one expects the visit in `state.visit` and the patient in `state.patient`,
and saves what Satusehat returns for the next step.

### Create an Encounter

This job maps a visit to an Encounter resource and posts it.

<details>
<summary>Show code</summary>

```js
// Create an encounter in Satusehat based on an incoming Commcare visit

fn(state => {
  state.encounterId = util.uuid();

  state.encounter = {
    id: state.encounterId,
    resourceType: 'Encounter',
    identifier: [
      {
        system: `http://sys-ids.kemkes.go.id/encounter/${state.visit.organizationId}`,
        value: state.visit.case_id,
      },
    ],
    status: 'arrived',
    class: {
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
      code: 'AMB',
      display: 'ambulatory',
    },
    subject: {
      reference: 'Patient/P00805884304',
      display: 'Elizabeth Dior',
    },
    participant: [
      {
        type: [
          {
            coding: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                code: 'ATND',
                display: 'attender',
              },
            ],
          },
        ],
        individual: {
          reference: `Practitioner/N10000001`,
          display: 'Voigt',
        },
      },
    ],
    period: {
      start: state.visit.visit_date,
      end: state.visit.visit_date,
    },

    location: [
      {
        location: {
          reference: `Location/574d5ffd-2dc2-453b-a787-d1c63cc89ae4`,
          display: `PLKB`,
        },
        extension: [
          {
            url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/ServiceClass',
            extension: [
              {
                url: 'value',
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        'http://terminology.kemkes.go.id/CodeSystem/locationServiceClass-Outpatient',
                      code: 'reguler',
                      display: 'Kelas Reguler',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    statusHistory: [
      {
        status: 'arrived',
        period: {
          start: state.visit.visit_date,
          end: state.visit.visit_date,
        },
      },
    ],
    serviceProvider: {
      reference: `Organization/${state.visit.organizationId}`,
    },
  };

  return state;
});

// Post our encounter resources to Satusehat
post('Encounter', $.encounter);

fn(state => {
  //  Store the newly created resources, created by the server, into state for the next step
  state.encounter = state.data;
  return state;
});
```

</details>

### Create Conditions

This job maps each diagnosis on the visit to a Condition resource with its
ICD-10 code.

<details>
<summary>Show code</summary>

```js
// Map diagnosis objects from commcare into Condition resources

fn(state => {
  state.conditions = state.visit.diagnosis.map(diagnosis => {
    const diagnosisName = diagnosis.fields.name;
    const code = diagnosis.fields['icd_10_code'];

    return {
      resourceType: 'Condition',
      clinicalStatus: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
            code: 'active',
            display: 'Active',
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/condition-ver-status',
            code: 'confirmed',
            display: 'Confirmed',
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                'http://terminology.hl7.org/CodeSystem/condition-category',
              code: 'encounter-diagnosis',
              display: 'Encounter Diagnosis',
            },
          ],
        },
      ],
      subject: {
        reference: `Patient/${state.patient.ihs_number}`,
        display: state.patient.full_name,
      },
      encounter: {
        reference: `Encounter/${state.encounterId}`,
        display:
          state.patient.full_name +
          "'s " +
          state.visit.properties.visit_type +
          ' on ' +
          state.visit.properties.visit_date,
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/sid/icd-10',
            code: code,
            display: diagnosisName,
          },
        ],
      },
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '74262004',
              display: 'Oral cavity structure',
            },
          ],
        },
      ],
      recorder: {
        reference: state.encounter.resource.participant[0].individual.reference,
      },
      onsetDateTime: state.visit.visit_date,
      recordedDate: state.visit.visit_date,
    };
  });
  return state;
});

// Post our condition resources to Satusehat
post('Condition', $.conditions);

fn(state => {
  //  Store the newly created resources, created by the server, into state for the next step
  state.conditions = state.data;
  return state;
});
```

</details>

### Create Observations

This job maps each observation on the visit to an Observation resource, handling
each FHIR value type.

<details>
<summary>Show code</summary>

```js
// Create observation in Satusehat based on an incoming Commcare visit

function createObservationData(item, state, result) {
  const patientReference = `Patient/${state.patient.ihs_number}`;
  const encounterReference = `Encounter/${state.encounterId}`;
  const encounterDisplay = `${state.patient.full_name}'s ${state.visit.properties.visit_type} on ${state.visit.properties.visit_date}`;
  return {
    resourceType: 'Observation',
    status: 'final',
    category: [
      {
        coding: item.category,
      },
    ],
    code: {
      coding: item.code,
    },
    subject: {
      reference: patientReference,
    },
    performer: [
      {
        reference: `Practitioner/N10000001`,
        display: 'Voigt',
      },
    ],
    encounter: {
      reference: encounterReference,
      display: encounterDisplay,
    },
    effectiveDateTime: state.visit.visit_date,
    ...result,
  };
}

fn(state => {
  //  Filtering and mapping observations based on the visit.
  state.observations = state.visit.observations.map(item => {
    const { value_type: valueType, value } = item;
    const dataObjects = [];

    if (valueType === 'valueCodeableConcept') {
      value.forEach(value => {
        const result = {
          [valueType]: {
            coding: [JSON.parse(value.snomed_code)],
            value: JSON.parse(value.value),
          },
        };
        const data = createObservationData(
          { ...item, id: value.id },
          state,
          result
        );
        dataObjects.push(data);
      });
    } else if (valueType === 'valueQuantity') {
      const result = {
        [valueType]: {
          coding: [value.snomed_code],
          value: value.value,
        },
      };
      const data = createObservationData(
        { ...item, id: value.id },
        state,
        result
      );
      dataObjects.push(data);
    } else if (valueType === 'valueInteger') {
      const result = {
        [valueType]: {
          coding: value.snomed_code,
          value: value.value,
        },
      };
      const data = createObservationData(
        { ...item, id: value.id },
        state,
        result
      );
      dataObjects.push(data);
    } else if (valueType === 'valueDateTime') {
      const result = {
        [valueType]: {
          coding: [JSON.parse(value.snomed_code)],
          value: new Date(JSON.parse(value.value)).toISOString(),
        },
      };
      const data = createObservationData(
        { ...item, id: value.id },
        state,
        result
      );
      dataObjects.push(data);
    } else if (valueType === 'valueBoolean') {
      const result = {
        [valueType]: {
          coding: [JSON.parse(value.snomed_code)],
          value: JSON.parse(value.value) === 'never' ? false : true,
        },
      };
      const data = createObservationData(
        { ...item, id: value.id },
        state,
        result
      );
      dataObjects.push(data);
    } else {
      const result = {
        [valueType]: {
          coding: [value.snomed_code],
          value: value.value,
        },
      };

      if (result) {
        const data = createObservationData(item, state, result);
        dataObjects.push(data);
      }
    }

    return dataObjects;
  });

  return state;
});

// Post our observation resources to Satusehat
post('Observation', $.observations);

//  Store the newly created resources, created by the server, into state for the next step
fn(state => {
  state.observations = state.data;
  return state;
});
```

</details>

### Create Medications

This job finds the prescriptions on the visit and posts a Medication resource
for each, using its KFA code.

<details>
<summary>Show code</summary>

```js
// Create medication in Satusehat based on an incoming Commcare visit

fn(state => {
  // state.visit is a Commcare Visit record
  const properties = state.visit.properties;
  const medicineKeys = Object.keys(properties).filter(
    key =>
      key.startsWith('prescription_') &&
      !key.includes('_amount') &&
      !key.includes('_instruction') &&
      !key.includes('_dose')
  );

  const medicationId = util.uuid();

  // Map medication data for each relevant key
  state.medication = medicineKeys.map(item => {
    return {
      resourceType: 'Medication',
      id: state => medicationId,
      meta: {
        profile: [
          'https://fhir.kemkes.go.id/r4/StructureDefinition/Medication',
        ],
      },
      identifier: [
        {
          system: `http://sys-ids.kemkes.go.id/medication/${state.visit.satusehatId}`,
          use: 'usual',
          value: item.fields['Nama'],
        },
      ],
      code: {
        coding: [
          {
            system: 'http://sys-ids.kemkes.go.id/kfa',
            code: item.fields['kfa_codes'],
            display: item.fields['Nama'],
          },
        ],
      },
      status: 'active',
      extension: [
        {
          url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType',
          valueCodeableConcept: {
            coding: [
              {
                system:
                  'http://terminology.kemkes.go.id/CodeSystem/medication-type',
                code: 'NC',
                display: 'Non-compound',
              },
            ],
          },
        },
      ],
    };
  });

  return state;
});

// Post our medication resources to Satusehat
post('Medication', $.medication);

fn(state => {
  //  Store the newly created resources, created by the server, into state for the next step
  state.medication = state.data;
  return state;
});
```

</details>

## Authentication

[See Satusehat docs](https://satusehat.kemkes.go.id/platform/docs/id/api-catalogue/authentication/)
for the latest on supported authentication methods.

When integrating with Satusehat via OpenFn, there are 2 primary authentication
methods supported:

1. Basic authentication (requires clientId + clientSecret), or
2. Access token (requires access token created after authenticating in
   Satusehat)

**See this adaptor's
[Configuration docs](/adaptors/packages/satusehat-configuration-schema) for more
on required authentication parameters.**

See platform docs
[on managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn and see the below Satusehat credential
example.

![Satusehat Cred](/img/satusehat_credential_edit.webp)

If you're using the `Raw JSON` credential type, your configuration may look like
this:

```json
{
  "clientId": "your-client-id", // e.g 12345678
  "clientSecret": "your-client-secret-key", // e.g abcd123456
  "baseUrl": "your-base-url", // e.g https://api-satusehat-stg.dto.kemkes.go.id
  "accessToken": "your-access-token" // Don't add accessToken if you're using client secret and client id
}
```

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
