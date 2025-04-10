// Create an encounter in Satusehat

fn(state => {
  state.encounterId = util.uuid();

  state.encounterMapping = {
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

post('Encounter', $.encounterMapping);

fn(state => {
  state.encounterData = state.data;
  return state;
});
