// Create a bundle in Satusehat with the given entries
fn(state => {
  state.bundleEntry = [
    {
      fullUrl: 'urn:uuid:51def515efd04bb98bd007c77375bf4f',
      request: {
        method: 'POST',
        url: 'Observation',
      },
      resource: {
        category: [
          {
            coding: [
              {
                code: 'vital-signs',
                display: 'Vital Signs',
                system:
                  'http://terminology.hl7.org/CodeSystem/observation-category',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2024-08-14T00:00:00.000Z',
        encounter: {
          display:
            "Kopi lihdia daripada aku aku's patient_intake on 2024-08-14",
          reference: 'Encounter/f09c268c-f0bd-4b37-9234-ffad2863eee1',
        },
        performer: [
          {
            reference: 'Practitioner/N10000003',
          },
        ],
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P024783798934',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 80,
        },
      },
    },
  ];

  return state;
});

post('/', {
  resourceType: 'Bundle',
  type: 'transaction',
  entry: $.bundleEntry,
});
