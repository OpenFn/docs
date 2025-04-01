// Create a medication from visit data and lookup table

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

fnIf(
  !state.errors &&
    state.visit.properties['prescription_1'] &&
    state.visit.properties['prescription_1'].length > 0,
  state => {
    const properties = state.visit.properties;
    const medicineKeys = extractMedicineKeys(properties);

    const obatList = state.lookup_table.obat;

    state.medicationSatusehatId = [];
    console.log({ medicineKeys });

    // Map medication data for each relevant key
    state.medicationMappedData = mapMedications(
      medicineKeys,
      properties,
      obatList,
      state
    );

    console.log(`${state.medicationMappedData.length} Medications created`);
    return state;
  }
);

// Function to extract the relevant medicine keys
function extractMedicineKeys(properties) {
  return Object.keys(properties).filter(
    key =>
      key.startsWith('prescription_') &&
      !key.includes('_amount') &&
      !key.includes('_instruction') &&
      !key.includes('_dose')
  );
}

// Function to map the medications to FHIR Medication resource format
function mapMedications(medicineKeys, properties, obatList, state) {
  return medicineKeys
    .flatMap(medicineKey => {
      const medicineName = properties[medicineKey];

      // Filter obat list to find matching medicine by name
      return obatList.filter(item => item.fields['Nama'] === medicineName);
    })
    .map(item => {
      if (item.fields.satusehat_id) {
        // If satusehat_id is present, add to medicationSatusehatId array
        state.medicationSatusehatId.push({
          [`prescription_${state.medicationSatusehatId.length + 1}`]:
            item.fields.satusehat_id,
        });
        return null;
      } else {
        // Create a new Medication resource if no satusehat_id exists
        state.medicationId = generateUUID();
        state.medicationSatusehatId.push({
          [`prescription_${state.medicationSatusehatId.length + 1}`]:
            state.medicationId,
        });
        return createMedicationResource(item, state.medicationId);
      }
    })
    .filter(data => data !== null);
}

function createMedicationResource(item, medicationId) {
  return {
    fullUrl: `urn:uuid:${medicationId}`,
    request: {
      method: 'POST',
      url: 'Medication',
    },
    resource: {
      resourceType: 'Medication',
      id: state => state.medicationId,
      meta: {
        profile: [
          'https://fhir.kemkes.go.id/r4/StructureDefinition/Medication',
        ],
      },
      identifier: [
        {
          system: `http://sys-ids.kemkes.go.id/medication/${state.asri_satusehat_id}`,
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
    },
  };
}
// Update the bundle with the new medication data
collections.get('fhir-bundles', `*${$.bundleName}`);
collections.set('fhir-bundles', item => item.id, {
  id: $.bundleName,
  entry: [...$.data?.[0].value.entry, ...$.medicationMappedData],
  steps: [...$.data?.[0].value.steps, 'Medication'],
});
