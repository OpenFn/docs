//Get all submissions of a specific form/asset that were submitted after a specific time
cursor($.cursor, { defaultValue: 'today' });

getForms();

each(
  $.data,
  getSubmissions($.data.uid, {
    query: `{"_submission_time":{"$gte":"${$.cursor}"}}`,
  })
);
