// Example with language-salesforce: use top-level sequential operations
// instead of wrapping in a Promise.
query('SELECT Name FROM Account');

fn(state => {
  console.log(state.references[0].records);
  console.log('doing stuff here');
  console.log('and in here');
  return state;
});

fn(state => {
  console.log('and also in here!');
  console.log(state.references);
  return state;
});
