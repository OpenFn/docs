// ----
// Create new events in DHIS2 using a generic JSON message, submitted by
// Taylor Downs @ OpenFn, Co-authored by @mtuchi
// ---

fn(state => {
  const { meta, form } = state.data;

  state.events = {
    program: 'eBAyeGv0exc',
    orgUnit: 'DiszpKrYNg8',
    occurredAt: meta.date,
    status: 'COMPLETED',
    storedBy: 'admin',
    geometry: {
      type: 'POINT',
      coordinates: [59.8, 10.9],
    },
    dataValues: [
      {
        dataElement: 'qrur9Dvnyt5',
        value: form.prop_a,
      },
      {
        dataElement: 'oZg33kd9taw',
        value: form.prop_b,
      },
      {
        dataElement: 'msodh3rEMJa',
        value: form.prop_c,
      },
    ],
  };

  return state;
});

create('events', state => state.events);
