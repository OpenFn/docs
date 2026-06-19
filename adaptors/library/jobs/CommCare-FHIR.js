// CommCare form submission mapped to the FHIR patient encounter standard,
// submitted by Simon Kelly @ Dimagi.
encounter({
  resourceType: 'Encounter',
  status: 'finished',
  type: [{ coding: [{ system: 'momconnect:type', code: '8' }] }],
  contained: [
    {
      resourceType: 'Patient',
      id: 'patient',
      identifier: [
        { use: 'official', system: 'momconnect:sanid', value: $.data.properties.id_number },
      ],
      name: [
        {
          use: 'official',
          family: [$.data.properties.family_name],
          given: [$.data.properties.given_name],
          text: `${$.data.properties.given_name} ${$.data.properties.family_name}`,
        },
      ],
      gender: 'female',
      birthDate: $.data.properties.dob,
      telecom: [{ system: 'phone', value: $.data.properties.msisdn }],
      communication: [
        {
          language: {
            coding: [{ system: 'urn:ietf:bcp:47', code: $.data.properties.language_code }],
          },
          preferred: true,
        },
      ],
    },
    {
      resourceType: 'Observation',
      id: 'edd',
      code: {
        coding: [
          { system: 'http://loinc.org', code: '11778-8', display: 'Delivery date Estimated' },
        ],
      },
      valueDateTime: $.data.properties.edd,
      status: 'preliminary',
    },
  ],
  patient: { reference: '#patient' },
  period: { start: $.data.properties.visit_date },
  extension: [
    { url: 'momconnect:mha', valueInteger: 2 },
    { url: 'momconnect:swt', valueInteger: 3 },
    { url: 'momconnect:dmsisdn', valueString: '+27831111111' },
  ],
});
