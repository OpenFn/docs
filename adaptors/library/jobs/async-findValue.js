// For each item in an array, use findValue to look up a related record's ID,
// then upsert the enriched array in a single operation.
fn(async state => {
  const path = state.data.body.st_grass_repeat
    ? 'st_grass_repeat'
    : 'plot_forest_area/st_grass_repeat';

  const dataArray = state.data.body[path] || [];

  const dataGrass = [];
  for (const item of dataArray) {
    dataGrass.push({
      WCSPROGRAMS_TaxaID: await findValue({
        uuid: 'WCSPROGRAMS_TaxaID',
        relation: 'WCSPROGRAMS_Taxa',
        where: {
          ScientificName: `%${item[`${path}/grass_species`]}%`,
        },
        operator: { ScientificName: 'like' },
      })(state),
      UnknownSpeciesImage: item[`${path}/noknown`],
      GrassPercent: item[`${path}/grass_perc`],
      GrassHeight: item[`${path}/grass_height`],
      AnswerId: state.data.body._id,
    });
  }

  state.dataGrass = dataGrass;
  return state;
});

upsertMany(
  'WCSPROGRAMS_VegetationGrass',
  'WCSPROGRAMS_VegetationGrassCode',
  state => state.dataGrass
);
