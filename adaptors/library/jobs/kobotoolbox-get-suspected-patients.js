// Get all submissions of a specific form/asset and get the percentage of patients suspected of having covid-19
getSubmissions('aDReHdA7UuNBYsiCXQBr43');

fn(state => {
  const results = state.data?.results;

  const suspectedPatients = results.filter(
    item => item['Please_select_sample_type'] === 'suspected_covid_19'
  );
  const suspectedCovidPatientsPercentage =
    (suspectedPatients.length / results.length) * 100;
  return { ...state, suspectedCovidPatientsPercentage };
});
