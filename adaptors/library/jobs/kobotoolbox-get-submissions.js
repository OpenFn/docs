//Get all submissions of a specific form/asset that were submitted after a specific time
fn(state => {
  state.formId = state.data.formId;
  return state;
});

getSubmissions($.formId, {
  query: `{"_submission_time":{"$gte":"${$.cursor}"}}`,
});
