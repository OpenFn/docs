// Create an observation in Satusehat

fn(state => {
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

  /**
   * Filters and maps observations based on the state and available lookup data.
   */
  function mapObservations(state) {
    return state.visit.observations
      .map(item => {
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
      })
      .filter(data => data !== null);
  }

  state.observationMappedData = mapObservations(state);

  return state;
});

post('Observation', $.observationMappedData);

fn(state => {
  state.observatioinData = state.data;
  return state;
});
