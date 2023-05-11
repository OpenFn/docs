fn(async state => {
  const { Patient, Visit } = state.data;

  console.log('Here we break large arrays into smaller chunks.');
  const chunk = (arr, chunkSize) => {
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize) R.push(arr.slice(i, i + chunkSize));
    return R;
  };

  const patientSets = chunk(Patient, 10);
  const visitSets = chunk(Visit, 10);

  console.log('Patient sets:', patientSets.length);
  console.log('Visit sets:', visitSets.length);

  const visitChunks = [];
  const patientChunks = [];

  patientSets.forEach(sets => {
    const data = {
      Visit: [],
      Patient: sets,
    };
    patientChunks.push(data);
  });

  visitSets.forEach(sets => {
    const data = {
      Visit: sets,
      Patient: [],
    };
    visitChunks.push(data);
  });

  let countInbox = 0;
  console.log('Then we define our async function that make multiple posts requests,');
  console.log('each after a fix period of time.');
  const postToInbox = async data => {
    countInbox++;
    console.log(`${countInbox} request to inbox`);

    await new Promise(resolve => setTimeout(resolve, 2000));
    await post(state.configuration.inboxUrl, { body: data })(state);
  };

  console.log('For each one of our chunks, we send one by one awaiting response.');
  for (const patient of patientChunks) {
    await postToInbox(patient);
  }
  for (const visit of visitChunks) {
    await postToInbox(visit);
  }

  return { ...state, patientChunks, visitChunks };
});
