fn(state => {
  state.formId = state.data.formId;
  return state;
});

getSubmissions($.formId);
