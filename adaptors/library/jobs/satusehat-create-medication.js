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
