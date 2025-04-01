// Update Encounter resource with diagnosis data
fn(state => {
  const diagnosisKeys = Object.keys(state.patient).filter(
    key =>
      key.endsWith('diagnosis') && (key.startsWith('primary') || /\d/.test(key))
  );
  const diagnosisArray = diagnosisKeys
    .map((key, index) => {
      let rank;
      if (key.startsWith('primary')) {
        rank = 1;
      } else {
        const match = key.match(/(\d+)/);
        rank = match ? parseInt(match[1], 10) : index + 1;
      }
      return { key, rank };
    })
    .sort((a, b) => a.rank - b.rank);

  const conditionEntry = state.data.entry.find(
    entry => entry.response.resourceType === 'Condition'
  );
  const conditionResourceId = conditionEntry
    ? conditionEntry.response.resourceID
    : null;

  const encounterEntry = state.data.entry.find(
    entry => entry.response.resourceType === 'Encounter'
  );
  state.encounterResourceId = encounterEntry
    ? encounterEntry.response.resourceID
    : null;

  if (conditionResourceId) {
    state.encounterMappedData.resource = {
      ...state.encounterMappedData.resource,
      diagnosis: state.conditionMappedData.map((item, index) => ({
        condition: {
          reference: `Condition/${conditionResourceId}`,
          display: item.resource.code.coding[0].display,
        },
        use: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/diagnosis-role',
              ...(diagnosisKeys.includes('primary_diagnosis') && {
                code: 'CC',
                display: 'Chief compliant',
              }),
            },
          ],
        },
        rank: diagnosisArray[0]?.rank,
      })),
      statusHistory: [
        ...state.encounterMappedData.resource.statusHistory,
        {
          period: {
            end: state.visit_date,
            start: state.visit_date,
          },
          status: 'finished',
        },
      ],
      status: 'finished',
      id: state.encounterResourceId,
    };
  }

  console.log(state.encounterMappedData);
  return state;
});

put(
  `Encounter/${$.encounterResourceId}`,
  state => state.encounterMappedData.resource
);
