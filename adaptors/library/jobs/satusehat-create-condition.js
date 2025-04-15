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
