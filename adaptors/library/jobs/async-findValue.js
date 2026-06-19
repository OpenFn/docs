// For each item in the grass repeat array, look up a related Taxa ID with
// findValue, then upsert all the enriched records in a single operation.
fn(state => {
  const path = state.data.body.st_grass_repeat
    ? 'st_grass_repeat'
    : 'plot_forest_area/st_grass_repeat';

  state.grassPath = path;
  state.answerId = state.data.body._id;
  state.dataArray = state.data.body[path] || [];
  state.dataGrass = [];
  return state;
});

each(
  $.dataArray,
  findValue({
    uuid: 'WCSPROGRAMS_TaxaID',
    relation: 'WCSPROGRAMS_Taxa',
    where: {
      ScientificName: state =>
        `%${state.data[`${state.grassPath}/grass_species`]}%`,
    },
    operator: { ScientificName: 'like' },
  }).then(state => {
    const path = state.grassPath;
    const item = state.dataArray[state.index];

    // findValue writes the found uuid value to state.data
    state.dataGrass.push({
      WCSPROGRAMS_TaxaID: state.data,
      UnknownSpeciesImage: item[`${path}/noknown`],
      GrassPercent: item[`${path}/grass_perc`],
      GrassHeight: item[`${path}/grass_height`],
      AnswerId: state.answerId,
    });
    return state;
  })
);

upsertMany(
  'WCSPROGRAMS_VegetationGrass',
  'WCSPROGRAMS_VegetationGrassCode',
  state => state.dataGrass
);
