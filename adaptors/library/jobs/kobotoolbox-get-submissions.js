//Get all Kobo forms/projects, and then get form submissions
//that were submitted after a specific time
cursor($.cursor, { defaultValue: 'today' });

getForms();

each(
  $.data,
  getSubmissions($.data.uid, {
    query: `{"_submission_time":{"$gte":"${$.cursor}"}}`,
  })
);
