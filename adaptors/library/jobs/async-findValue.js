fn(async state => {
  const dataArray =
    state.data.body.st_grass_repeat ||
    state.data.body["plot_forest_area/st_grass_repeat"] ||
    [];
  const dataGrass = [];
  const path = state.data.body.st_grass_repeat
    ? "st_grass_repeat"
    : "plot_forest_area/st_grass_repeat";

  for (let data of uniqueGrass) {
    dataGrass.push({
      WCSPROGRAMS_TaxaID: await findValue({
        uuid: "WCSPROGRAMS_TaxaID",
        relation: "WCSPROGRAMS_Taxa",
        where: {
          ScientificName: `%${state.handleValue(
            data["st_grass_repeat/grass_species"]
          )}%`,
        },
        operator: { ScientificName: "like" },
      })(state),
      UnknownSpeciesImage: data[`${path}/noknown`],
      GrassPercent: data[`${path}/grass_perc`],
      GrassHeight: data[`${path}/grass_height`],
      AnswerId: state.data.body._id,
    });
  }
  
  return upsertMany(
    "WCSPROGRAMS_VegetationGrass",
    "WCSPROGRAMS_VegetationGrassCode",
    () => dataGrass
  )(state);
});
