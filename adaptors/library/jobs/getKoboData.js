//Sample job to get Kobo data and post back to OpenFn Inbox
fn(state => {
  console.log(`Started at: ${new Date().toISOString()}`);
  state.submissions = [];
  state.data = {
    surveys: [
      // =========================================================================
      //== TODO: Specify new forms to fetch here, including the Kobo form id, tag, name, and owner ==//
      { id: 'aijj9FSpuCzMTRnMPGike8', tag: 'nrgt_historical', name: 'NRGT Makira 2017 - Test OpenFn', owner: 'bns' }, // example
      //consider listing multiple forms
      // =========================================================================
     
    ].map(survey => ({
      formId: survey.id,
      tag: survey.tag,
      name: survey.name, 
      owner: survey.owner,
      url: `https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`,
    })),
  };
  console.log(`Fetching data for ${state.data.surveys.length} surveys.`);
  return state;
});

each(dataPath('surveys[*]'), state => {
  const { url, tag, formId, name, owner } = state.data;
  return get(url, {}, state => {
    state.data.submissions = state.data.results.map((submission, i) => {
      return {
        i,
        // Here we append the tags defined above to the Kobo form submission data
        form: tag,
        formName: name, 
        formOwner: owner,
        body: submission,
      };
    });
    const count = state.data.submissions.length;
    console.log(`Fetched ${count} submissions from ${formId} (${tag}).`);
    //Once we fetch the data, we want to post each individual Kobo survey
    //back to the OpenFn inbox to run through the jobs
    return each(dataPath('submissions[*]'), state => {
      console.log(`Posting ${state.data.i + 1} of ${count}...`);
       // =========================================================================
       //== TODO: replace openfnInboxUrl with your OpenFn Project Inbox URL ====//
      return post(openfnInboxUrl, { body: state => state.data })(state);
    })(state);
    // =========================================================================
  })(state);
});

fn(state => {
  console.log(`Finished at: ${new Date().toISOString()}`);
  return {
    data: {
      message: "No cursor required. Job fetches all submission for given forms."
    },
    references: []
  };
});
