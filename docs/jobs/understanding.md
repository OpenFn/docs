---
title: A closer look at jobs
---

This is technical documentation aimed at making complex custom jobs easier to
write.

## Key Terms and Concepts

1. **core** (https://github.com/openfn/core) is the Javascript program which
   executes jobs for OpenFn in an emphemeral Node.js environment.
2. **state** is a .JSON file that is built and passed into the Node environment.
   It contains at least two keys, `configuration` and `data`. Configuration will
   be populated with your credential and it used by adaptors for authentication,
   and data will be populated with message data if the job was triggered by an
   incoming message.

```json
{
  "configuration": {
    "username": "taylor",
    "password": "shhhhhh",
    "loginUrl": "https://login.salesforce.com"
  },
  "data": {
    "a": 1,
    "b": {
      "x": [1, 2, 3]
    }
  }
}
```

3. **expressions** are sequences of operations to be executed. They are part of
   "jobs", which also include a credential, a trigger, a label, and (sometimes)
   a github filepath.
4. **operations** are named functions, exported for use by specific adaptors,
   which take state and return state.

## State is passed to operations. Operations Return state.

This is a key concept. When you write:

```js
create('object', fields(
  field(...)
));
```

The execute function in your language-package (e.g., `language-salesforce`) will
execute each operation with state, then return state. If you want to execute
operations inside another custom function, you must explicitly pass in state.

```js
fn(state => {
  return create('object', fields(
    field(...)
  ))(state)
});
```

## Sequences of operations inside custom functions.

Using `execute` you can string together several sequential operations inside a
custom function.

```js
fn(state => {
  const { userName } = state.data.form.meta;

  if (userName != 'tester') {
    return execute(
      upsert("person__c", "Name", fields(
        field(...),
        field(...)
      )),
      beta.each(
        dataPath("form.array[*]"),
        upsert("object", "Name", fields(
          field(...)
        ))
      )
    )(state)
  }
  return state;
});
```

## Controlling timing between operations with async functions.

To get really complex, you might want to execute a number of async functions
inside an `alterState` operation, but WAIT for those functions to resolve before
moving on to your next operation. If `execute` doesn't work for your use case,
you could use `Promise.all` and return an async function.

```js
fn(state => {
  console.log('Here we will await the result of a LOT of async operations.');
  console.log('First we define a bunch of different async functions.');
  const postClinics = async c => {
    return post(state.configuration.inboxUrl, {
      body: { clinics: c },
    })(state);
  };

  const postPatients = async p => {
    return post(state.configuration.inboxUrl, {
      body: { patients: p },
    })(state);
  };

  const postVisits = async v => {
    return post(state.configuration.inboxUrl, {
      body: { visits: v },
    })(state);
  };

  console.log(
    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'
  );
  async function makePosts() {
    return Promise.all([
      ...state.data.clinicSets.map(item => postClinics(item)),
      ...state.data.patientSets.map(item => postPatients(item)),
      ...state.data.visitSets.map(item => postVisits(item)),
    ]);
  }

  console.log(
    'Then we return that function, forcing our next operation to await the result of this one.'
  );
  return makePosts();
});

fn(state => {
  console.log('I get called AFTER those async functions are resolved.');
  return state;
});
```
