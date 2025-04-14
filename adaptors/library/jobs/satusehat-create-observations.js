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
          coding: [JSON.parse(value.snomed_code)],
          value: parseFloat(value.value),
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
          coding: [JSON.parse(value.snomed_code)],
          value: Number(JSON.parse(value.value)),
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
          coding: [JSON.parse(value.snomed_code)],
          value: JSON.parse(value.value),
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
