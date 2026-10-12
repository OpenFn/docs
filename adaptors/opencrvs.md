---
title: OpenCRVS Adaptor
---

## About OpenCRVS

[OpenCRVS (Open Civil Registration and Vital Statistics)](https://www.opencrvs.org/)
is an open-source solution designed to collect various population data. The
system is used for recording the details of all major life events, such as
births and deaths. It provides the foundation for human rights, government
service delivery, and the measurement of development goals.

## Integration Options

OpenCRVS supports 2 primary integration options with OpenFn:

1. **Rest API:** OpenCRVS has a REST API that enables external services like
   OpenFn to pull data from OpenCRVS, or push data from external apps to
   OpenCRVS. This option is suited for scheduled, bulk syncs or workflows that
   must update data in OpenCRVS with external information. See
   [functions](/adaptors/packages/opencrvs-docs) for more on how to use this
   adaptor to work with the API.

2. **Webhook:** Webhook or Data Forwarding to push data from OpenCRVS to
   external systems (see
   [docs](https://documentation.opencrvs.org/technology/interoperability/webhook-clients)).
   This option is suited for real-time, event-based data integration.

## Examples

### Query birth records

This job builds a search from the incoming data and returns up to 10 registered
births that match.

```js
// Get a birth record from OpenCRVS

fn(state => {
  const { data } = state;
  state.birthQuery = {
    event: 'birth',
    registrationStatuses: ['REGISTERED'],
    fatherFirstNames: data.fatherFirstNames,
    motherFirstNames: data.motherFirstNames,
    childGender: data.childGender,
    dateOfRegistrationStart: data.dateOfRegistrationStart,
    dateOfRegistrationEnd: data.dateOfRegistrationEnd,
    declarationJurisdictionId: data.declarationJurisdictionId,
    eventLocationId: data.eventLocationId,
  };

  return state;
});

queryEvents($.birthQuery, { count: 10, skip: 0 });
```

### Create a birth notification

This job builds the FHIR bundle for a birth notification (composition, child,
mother, father, informant and encounter) and sends it with
`createBirthNotification`. The identifiers and values are sample data.

<details>
<summary>Show code</summary>

```js
// Create a birth notification in OpenCRVS

fn(state => {
  const motherId = util.uuid();
  const comparisonId = util.uuid();
  const childId = util.uuid();
  const encounterId = util.uuid();
  const fatherId = util.uuid();
  const informantId = util.uuid();

  state.birthNotificationEntryData = [
    {
      fullUrl: `urn:uuid:${comparisonId}`,
      resource: {
        identifier: {
          system: 'urn:ietf:rfc:3986',
          value: '8f793c5a-3d53-4c9b-898b-1c04759716c6',
        },
        resourceType: 'Composition',
        status: 'final',
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-types',
              code: 'birth-notification',
            },
          ],
          text: 'Birth Notification',
        },
        class: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/classes',
              code: 'crvs-document',
            },
          ],
          text: 'CRVS Document',
        },
        subject: {
          reference: `urn:uuid:${childId}`,
        },
        date: '2022-08-14T14:43:47.000Z',
        author: [],
        title: 'Birth Notification',
        section: [
          {
            title: 'Child details',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'child-details',
                },
              ],
              text: 'Child details',
            },
            entry: [
              {
                reference: `urn:uuid:${childId}`,
              },
            ],
          },
          {
            title: 'Birth encounter',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'birth-encounter',
                },
              ],
              text: 'Birth encounter',
            },
            entry: [
              {
                reference: `urn:uuid:${encounterId}`,
              },
            ],
          },
          {
            title: "Mother's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'mother-details',
                },
              ],
              text: "Mother's details",
            },
            entry: [
              {
                reference: `urn:uuid:${motherId}`,
              },
            ],
          },
          {
            title: "Informant's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'informant-details',
                },
              ],
              text: "Informant's details",
            },
            entry: [
              {
                reference: `urn:uuid:${informantId}`,
              },
            ],
          },
          {
            title: "Father's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'father-details',
                },
              ],
              text: "Father's details",
            },
            entry: [
              {
                reference: `urn:uuid:${fatherId}`,
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: `urn:uuid:${util.uuid()}`,
      resource: {
        resourceType: 'Task',
        status: 'draft',
        intent: 'unknown',
        identifier: [],
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'BIRTH',
            },
          ],
        },
        focus: {
          reference: `urn:uuid:${comparisonId}`,
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/contact-person',
            valueString: 'MOTHER',
          },
          {
            url: 'http://opencrvs.org/specs/extension/contact-person-phone-number',
            valueString: '+260759205190',
          },
          {
            url: 'http://opencrvs.org/specs/extension/contact-person-email',
            valueString: 'axon@gmail.com',
          },
          {
            url: 'http://opencrvs.org/specs/extension/timeLoggedMS',
            valueInteger: 0,
          },
          {
            url: 'http://opencrvs.org/specs/extension/in-complete-fields',
            valueString: 'N/A',
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/178e21a9-60ad-4283-bd49-f576f61a5648',
            },
          },
        ],
      },
    },
    {
      fullUrl: `urn:uuid:${childId}`,
      resource: {
        resourceType: 'Patient',
        active: true,
        name: [
          {
            use: 'en',
            family: 'Tatke',
            given: ['Harney'],
          },
        ],
        gender: 'male',
        birthDate: '2022-06-29',
        deceasedBoolean: false,
        multipleBirthBoolean: false,
      },
    },
    {
      fullUrl: `urn:uuid:${motherId}`,
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            use: 'official',
            type: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/identifier-type',
                  code: 'NATIONAL_ID',
                },
              ],
            },
            value: '3624667568',
          },
        ],
        name: [
          {
            use: 'en',
            family: 'Ratke',
            given: ['Mom'],
          },
        ],
        gender: 'female',
        telecom: [
          {
            use: 'mobile',
            system: 'phone',
            value: '+260759205190',
          },
        ],
        birthDate: '2002-06-29',
        deceasedBoolean: false,
        multipleBirthInteger: 2,
        maritalStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/StructureDefinition/marital-status',
              code: 'M',
            },
          ],
          text: 'MARRIED',
        },
        address: [
          {
            type: 'PRIMARY_ADDRESS',
            line: [
              '12',
              'Usual Street',
              'Usual Residental Area',
              '',
              '',
              'URBAN',
            ],
            city: 'Meghanland',
            district: 'c51ea274-8ffa-4b0b-b3d3-12991e9f0630',
            state: 'c5d7a275-3638-41a3-bd53-145bd9410fd6',
            postalCode: '52275',
            country: 'FAR',
          },
        ],
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/patient-occupation',
            valueString: 'Housewife',
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'FAR',
                    },
                  ],
                },
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: '',
                },
              },
            ],
          },
          {
            url: 'http://opencrvs.org/specs/extension/educational-attainment',
            valueString: 'POST_SECONDARY_ISCED_4',
          },
        ],
      },
    },
    {
      fullUrl: `urn:uuid:${informantId}`,
      resource: {
        resourceType: 'RelatedPerson',
        relationship: {
          coding: [
            {
              system:
                'http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype',
              code: 'MOTHER',
            },
          ],
        },
        patient: {
          reference: `urn:uuid:${motherId}`,
        },
      },
    },
    {
      fullUrl: `urn:uuid:${fatherId}`,
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            use: 'official',
            type: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/identifier-type',
                  code: 'NATIONAL_ID',
                },
              ],
            },
            value: '6848901132',
          },
        ],
        name: [
          {
            use: 'en',
            family: 'Ratke',
            given: ['Dad'],
          },
        ],
        gender: 'male',
        telecom: [
          {
            use: 'mobile',
            system: 'phone',
            value: '+260759205190',
          },
        ],
        birthDate: '2002-06-29',
        deceasedBoolean: false,
        multipleBirthInteger: 2,
        maritalStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/StructureDefinition/marital-status',
              code: 'M',
            },
          ],
          text: 'MARRIED',
        },
        address: [
          {
            type: 'PRIMARY_ADDRESS',
            line: [
              '12',
              'Usual Street',
              'Usual Residental Area',
              '',
              '',
              'URBAN',
            ],
            city: 'Madgeland',
            district: 'c51ea274-8ffa-4b0b-b3d3-12991e9f0630',
            state: 'c5d7a275-3638-41a3-bd53-145bd9410fd6',
            postalCode: '52275',
            country: 'FAR',
          },
        ],
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/patient-occupation',
            valueString: 'Businessman',
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'FAR',
                    },
                  ],
                },
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: '',
                },
              },
            ],
          },
          {
            url: 'http://opencrvs.org/specs/extension/educational-attainment',
            valueString: 'POST_SECONDARY_ISCED_4',
          },
        ],
      },
    },
    {
      fullUrl: `urn:uuid:${encounterId}`,
      resource: {
        resourceType: 'Encounter',
        status: 'finished',
        location: [
          {
            location: {
              reference: 'Location/704b9706-d729-4834-8656-05b562065deb',
            },
          },
        ],
      },
    },
    {
      fullUrl: `urn:uuid:${util.uuid()}`,
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: `urn:uuid:${encounterId}`,
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'procedure',
                display: 'Procedure',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '57722-1',
              display: 'Birth plurality of Pregnancy',
            },
          ],
        },
        valueQuantity: {
          value: 'SINGLE',
        },
      },
    },
    {
      fullUrl: `urn:uuid:${util.uuid()}`,
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: `urn:uuid:${encounterId}`,
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured',
            },
          ],
        },
        valueQuantity: {
          value: 4,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
    },
    {
      fullUrl: `urn:uuid:${util.uuid()}`,
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: `urn:uuid:${encounterId}`,
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'procedure',
                display: 'Procedure',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '73764-3',
              display: 'Birth attendant title',
            },
          ],
        },
        valueString: 'PHYSICIAN',
      },
    },
    {
      fullUrl: `urn:uuid:${util.uuid()}`,
      resource: {
        resourceType: 'QuestionnaireResponse',
        extension: [],
        status: 'completed',
        subject: {
          reference: `urn:uuid:${encounterId}`,
        },
        item: [
          {
            text: 'birth.mother.mother-view-group.motherIdType',
            linkId: '',
            answer: [
              {
                valueString: 'NATIONAL_ID',
              },
            ],
          },
          {
            text: 'birth.father.father-view-group.fatherIdType',
            linkId: '',
            answer: [
              {
                valueString: 'NATIONAL_ID',
              },
            ],
          },
        ],
      },
    },
  ];

  return state;
});

createBirthNotification($.birthNotificationEntryData);
```

</details>

## Authentication

See [OpenCRVS docs](https://documentation.opencrvs.org/) for the latest on
supported authentication methods. When integrating with OpenCRVS via OpenFn,
there are 2 primary authentication methods supported.

Please note that OpenCRVS take is different `clientId` and `clientSecret` for
each clients; i.e events notifications and search. Ensure to switch credentials
for the different client requests. See
[OpenCRVS authenticate client docs](https://documentation.opencrvs.org/technology/interoperability/authenticate-a-client)

1. Basic Authentication. See this adaptor's
   [Configuration docs](/adaptors/packages/opencrvs-configuration-schema) for
   more on the required authentication parameters.
2. Access token (requires access token created after authenticating in OpenCRVS)

See platform docs on
[managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn. If working locally or if using a Raw
JSON credential type, then your configuration will look something like this:

```json
{
  "domain": "your-doman", //e.g openfn.opencrvs.dev
  "clientId": "your-client-id", // e.g 12345678
  "clientSecret": "your-client-secret-key", // e.g abcd123456
  "access_token": "your-access-token" // Don't add accessToken if you're using client secret and client id
}
```

### Helpful Links

1. [OpenCRVS Documentation](https://documentation.opencrvs.org/)
2. [OpenCRVS API Reference](https://documentation.opencrvs.org/technology/interoperability)

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
