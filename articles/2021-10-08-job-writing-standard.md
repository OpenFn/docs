---
layout: post
title: Standardizing our way of writing a job
author: Mamadou Cisse
author_url: https://github.com/lakhassane
author_image_url: https://avatars.githubusercontent.com/lakhassane
tags: [how-to, tips, jobs, standard]
featured: true
---

A [job](https://docs.openfn.org/documentation/jobs/job-design-intro) defines
different series of tasks performed to process data from one source system to
another destination system. Those different tasks might serve different
purposes: **execute a function from an adaptor (upsert, post)** or **clean and
map data**.

Depending on the type of job you are writing, it's always good to make a clear
separation of concerns between your tasks (operations). See it as a diagram
where you have different activities, each activity taking one specific input and
producing one specific output.

## An example to go with

![Sample BPMN diagram](/img/bpmn_example.png)

Taking this example above, we can see different blocks with different concerns.

One way of writing a job that satisfies this workflow would be something like
below:

```js
fn(state => {
  const { data } = state;
  const { uuid, firstname, lastname, address, phone_number } = data;

  const patient = {
    id: uuid,
    name: `${firstname} ${lastname}`,
    address,
    phone_number,
  };

  return query(
    `SELECT firstname, lastname FROM patient_c WHERE id = '${patient.id}'`
  )(state).then(state => {
    const { records } = state.references[0];
    if (records.length > 0) {
      // mapping then upsert
    } else {
      // mapping then create
    }
  });
});
```

Easy right? Imagine this needs to be done for 10 patients? 100 ? 1000? The
runtime is going to be huge when querying the database thousands of time.

For this purpose, we try to keep our operations as simple and elementary as
possible.

## Standardizing

Going back to the diagram above, we can have a clear distinction of what each
block might be doing. In case we deal we a large dataset, the code above could
be separated as follow:

1. One block to transform data, build a common mapping base.
2. Query database to find matching Ids.
3. Process the matches to build patient mapping we should update and those we
   should create records for.
4. Bulk update records.
5. Bulk create records.

```js
fn(state => {
  const { patients } = state.data;

  const ids = patients.map(d => d.uuid);

  // we build a base for our mapping
  const baseMapping = data => {
    return {
      id: data.uuid,
      name: `${data.firstname} ${data.lastname}`,
      address: data.address,
      phone_number: data.phone_number,
    };
  };

  return { ...state, ids, baseMapping };
});

// bulk query the db to fetch all patients that match
query(
  state =>
    `SELECT Id, firstname, lastname, modified_date FROM patient_c WHERE Id in ('${state.ids.join(
      "','"
    )}')`
);

// intermediary block to process fetched data from the query
fn(state => {
  const { records } = state.references[0];

  const recordIds = records.map(rec => rec.Id);

  const toUpdate = state.data.patients
    .filter(patient => recordsIds.includes(patient.uuid))
    .map(patient => {
      return {
        ...state.baseMapping(patient),
        ...{
          updated_at: new Date(),
        },
      };
    });
  const toCreate = state.data.patients
    .filter(patient => !recordsIds.includes(patient.uuid))
    .map(patient => {
      return {
        ...state.baseMapping(patient),
        ...{
          created_at: new Date(),
          status: 'inactive',
        },
      };
    });
  return { ...state, toUpdate, toCreate };
});

// final blocks to upsert and create
bulk(
  'patient_c',
  'update',
  {
    extIdField: 'Id',
    failOnError: true,
    allowNoOp: true,
  },
  state => {
    console.log('Bulk upserting patients.');
    return state.toUpdate;
  }
);

bulk(
  'patient_c',
  'insert',
  {
    failOnError: true,
    allowNoOp: true,
  },
  state => {
    console.log('Bulk creating patients.');
    return state.toCreate;
  }
);
```

This allows us not only to reduce the amount of requests to your system but also
allows for easier maintenance and evolution. If we wanted to update our mapping,
we know exactly the only place where we could go instead of multiple places.

## Data Binding

The final example presented previously implement also our data binding mechanism
from task to task (read operation here). When passing data from one operation to
another, it always goes through state. Remember, every operation
[takes state and returns state](https://docs.openfn.org/articles/2021/07/05/wrapping-my-head-around-jobs).
In case you want to store the result of one operation and use it in subsequent
ones, consider wrapping it inside state, which is the common object passed
between operations.

```js
get('www.example.com/patients', { query: { nid: '123' } }, state => ({
  ...state,
  patient: state.data,
}));

get('www.example.com/clinics/7', {}, state => ({
  ...state,
  clinic: state.data,
}));

fn(state => {
  console.log(state.patient); // here they are!
  console.log(state.clinic); // here it is!
  return state;
});
```

## Final thought

To sum this up, when faced with a large dataset, it's better to optimize
execution and runtime by allowing different operations in your job to have
different roles.

Steps to remember:

**Step 1.** Process your data, clean and transform using a **fn()** block.

**Step 2.** Any query made to an external system should, _whenever possible_, be
it's own block.

One final thought is how this pattern (fn, query, fn, bulk) keeps your
operations clean and very flexible. Everything in here is either
**language-common** or **javascript**. Our fn blocks (among other functions from
language-common) can be used in ANY job, regardless of the language package!
