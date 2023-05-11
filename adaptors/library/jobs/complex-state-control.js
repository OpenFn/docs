// Example with language-salesforce
fn(state => {
  // return state => {
  return new Promise((resolve, reject) => {
    query('SELECT Name FROM Account')(state)
      .then(state => {
        console.log(state.references[0].records);
        console.log('doing stuff here');
        return state;
      })
      .then(state => {
        console.log('and in here');
        resolve(state);
      });
  });
  // };
});

fn(state => {
  console.log('and also in here!');
  console.log(state.references);
  return state;
});
