```js
alterState(state => {
  console.log('Here we will await the result of a LOT of async operations.');

  console.log('First we needed to break large arrays into smaller chunks.');
  function chunk(arr, chunkSize) {
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
    return R;
  }

  const clinicSets = chunk(state.data.Clinic, 10);
  const patientSets = chunk(state.data.Patient, 10);
  const visitSets = chunk(state.data.Visit, 10);
  const deletedVisitSets = chunk(state.data.VisitDeleted, 10);

  console.log('Then we define a bunch of different async functions.');
  const postClinics = async cs => {
    return post(state.configuration.inboxUrl, {
      body: { clinics: cs },
    })(state);
  };

  const postPatients = async ps => {
    return post(state.configuration.inboxUrl, {
      body: { patients: ps },
    })(state);
  };

  const postVisits = async vs => {
    return post(state.configuration.inboxUrl, {
      body: { visits: vs },
    })(state);
  };

  const postDeletedVisits = async dvs => {
    return post(state.configuration.inboxUrl, {
      body: { deletedVisits: dvs },
    })(state);
  };

  console.log(
    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'
  );
  async function makePosts() {
    return Promise.all([
      ...clinicSets.map(item => postClinics(item)),
      ...patientSets.map(item => postPatients(item)),
      ...visitSets.map(item => postVisits(item)),
      ...deletedVisitSets.map(item => postDeletedVisits(item)),
    ]);
  }

  console.log(
    'Then we return that function, forcing our next operation to await the result of this one.'
  );
  return makePosts();
});

alterState(state => {
  console.log('I show up AFTER those async functions are resolved.');
  return state;
});
```
