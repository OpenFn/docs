---
title: Jobs
---

# What is a Job

<!-- TODO: @Jed -->

Work in progress

# Composing Job Expressions

<!-- TODO: @Jed -->

Work in progress

# Available JavaScript Globals

<!-- TODO: @Jed -->

Work in progress

# Named Functions

<!-- TODO: @Jed -->

Work in progress

## Jobs

A job defines the specific series of tasks or database actions to be performed
when a triggering message is received (even-based) or a pre-scheduled (and
recurring) time is reached.

### Composing Job Expressions

In most cases, a job expression is a series of `create` or `upsert` actions that
are run after a message arrives, using data from that message. It could look
like this:

#### Basic Job Expression

```js
create(
  'Patient__c',
  fields(field('Name', dataValue('form.surname')), field('Age__c', 7))
);
```

That would create a new `Patient__c` in some other system. The patient's `Name`
will be determined by the triggering message (the value inside `form.surname`,
specifically) and the patient's `Age__c` will _always_ be 7. See how we hard
coded it?

What you see above is OpenFn's own syntax, and you've got access to dozens of
common "helper functions" like `dataValue(path)` and destination specific
functions like `create(object,attributes)`. While most cases are covered
out-of-the-box, jobs are **evaluated as Javascript**. This means that you can
write your own custom, anonymous functions to do whatever your heart desires:

#### Job Expression with Custom Javascript

```js
create(
  'Patient__c',
  fields(
    field('Name', state => {
      console.log('Manipulate state to get your desired output.');
      return Array.apply(null, state.data.form.names).join(', ');
    }),
    field('Age__c', 7)
  )
);
```

Here, the patient's name will be a comma separated concatenation of all the
values in the `patient_names` array from our source message.

### Available Javascript Globals

For security reasons, users start with access to the following standard
Javascript globals, and can request more by opening an issue on Github:

- Array
- console
- JSON
- Number
- Promise
- String

\*N.B. The runtime environment on the server is Node v6.17.0.

Other than the expression tree, Jobs have certain attributes that must be set:

1. **Filter** - The message filter that will triggers the job.
2. **Adaptor** - The adaptor for the destination system you're connecting to.
3. **Credential** - The credential that will be used to gain access to that
   destination system.
4. **Active?** - A boolean which determines whether the job runs in real-time
   when matching messages arrive.

### Named Functions

**N.B.: This is just a sample.** There are lots more available in the
language-packs.

## Complex Custom Jobs

### Introduction

This is technical documentation aimed at making complex custom jobs easier to
write.

## Key Terms and Concepts

1. **core** (https://github.com/openfn/core) is the Javascript program which
   executes jobs for OpenFn in an emphemeral Node.js environment.
2. **state** is a .JSON file that is built and passed into the Node environment.
   It contains at least two keys, `configuration` and `data`. Configuration will
   be populated with your credential and it used by language packages for
   authentication, and data will be populated with message data if the job was
   triggered by an incoming message.

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
4. **operations** are named functions, exported for use by specific
   language-packages, which take state and return state.

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
alterState(state => {
  return create('object', fields(
    field(...)
  ))(state)
});
```

## Sequences of operations inside custom functions.

Using `execute` you can string together several sequential operations inside a
custom function.

```js
alterState(state => {
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
alterState(state => {
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

alterState(state => {
  console.log('I get called AFTER those async functions are resolved.');
  return state;
});
```
