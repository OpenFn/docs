// Sample job to get Kobo data and post each submission back to an OpenFn inbox
fn(state => {
  console.log(`Started at: ${new Date().toISOString()}`);

  const surveys = [
    // TODO: Add the Kobo form IDs, tags, names, and owners to fetch here
    { id: 'aijj9FSpuCzMTRnMPGike8', tag: 'nrgt_historical', name: 'NRGT Makira 2017 - Test OpenFn', owner: 'bns' },
  ].map(survey => ({
    formId: survey.id,
    tag: survey.tag,
    name: survey.name,
    owner: survey.owner,
    url: `https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`,
  }));

  console.log(`Fetching data for ${surveys.length} surveys.`);
  return { ...state, surveys, submissions: [] };
});

// Fetch submissions for each survey
each(
  $.surveys,
  fn(async state => {
    const { url, tag, formId, name, owner } = state.data;
    state = await get(url, {})(state);

    const newSubmissions = state.data.results.map((submission, i) => ({
      i,
      form: tag,
      formName: name,
      formOwner: owner,
      body: submission,
    }));

    console.log(`Fetched ${newSubmissions.length} submissions from ${formId} (${tag}).`);
    return { ...state, submissions: [...state.submissions, ...newSubmissions] };
  })
);

// Post each submission to the OpenFn inbox
// TODO: Replace openfnInboxUrl with your OpenFn Project Inbox URL
each(
  $.submissions,
  fn(async (state, openfnInboxUrl) => {
    console.log(`Posting submission ${state.data.i + 1}...`);
    return post(openfnInboxUrl, state.data)(state);
  })
);

fn(state => {
  console.log(`Finished at: ${new Date().toISOString()}`);
  return { ...state, data: { message: 'All submissions posted.' }, references: [] };
});
