// ----
// Add data to data value sets in DHIS2 using a generic JSON message, submitted
// by Taylor Downs @ OpenFn.
// ---

dataValueSet(
  fields(
    field('dataSet', 'pBOMPrpg1QX'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('period', '201401'),
    field('completeData', dataValue('form.date')),
    field('dataValues', function (state) {
      return [
        dataElement('qrur9Dvnyt5', dataValue('form.prop_a')(state)),
        dataElement('oZg33kd9taw', dataValue('form.prop_b')(state)),
        dataElement('msodh3rEMJa', dataValue('form.prop_c')(state)),
      ];
    })
  )
);
