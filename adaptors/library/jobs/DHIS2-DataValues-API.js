// ----
// Add data to data value sets in DHIS2 using a generic JSON message, submitted
// by Taylor Downs @ OpenFn. Co-authored by @mtuchi
// ---

fn(state => {
  const { form } = state.data;
  // Create a data value set mapping
  state.dataValueSetMap = {
    dataSet: 'pBOMPrpg1QX',
    completeDate: form.date,
    period: '201401',
    orgUnit: 'DiszpKrYNg8',
    dataValues: [
      {
        dataElement: 'f7n9E0hX8qk',
        value: form.prop_a,
      },
      {
        dataElement: 'Ix2HsbDMLea',
        value: form.prop_b,
      },
      {
        dataElement: 'eY5ehpbEsB7',
        value: form.prop_c,
      },
    ],
  };
  return state;
});

// Create dataValueSets
create('dataValueSets', state => state.dataValueSetMap);
