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
