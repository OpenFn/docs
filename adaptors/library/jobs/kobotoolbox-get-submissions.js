//Get all submissions of a specific form/asset that were submitted after a specific time
fn(state => {
  state.formId = state.data.formId;
  return state;
});

http.get(`/assets/${$.formId}/data/`, {
  query: {
    query: `{"_submission_time":{"$gte":"${$.cursor}"}}`,
  },
});
