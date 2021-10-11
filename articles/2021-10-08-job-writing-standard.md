---
layout: post
title: Standardizing our way of writing a job
author: Mamadou Cisse
author_url: https://github.com/lakhassane
author_image_url: https://avatars.githubusercontent.com/lakhassane
tags: [how-to, tips, jobs, standard]
featured: true
---

A [job](documentation/jobs/job-design-intro) defines a series of different tasks
(they're called "operations") for processing data within or between systems.
Those different tasks often serve different purposes, most commonly:
**interacting with an API** (e.g., using the `createTEI` function from the
`dhis2` adaptor) or **cleaning and mapping data** (e.g., taking an array of
names and creating a single `fullName` attribute).

Depending on the type of job you are writing, you might want make a clear
separation of concerns between your operations. See it as a diagram where you
have different activities, each activity taking one specific input and producing
one specific output.

<!--truncate-->

## An example to go with

![Sample BPMN diagram](/img/bpmn_example.png)

In the example above, we can see different blocks with different concerns. One
way of writing a job that satisfies the workflow would be the following:

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

<!-- TODO: Discuss the meaning of this block here. -->

Easy right? Imagine this needs to be done for 10 patients? 100 ? 1000? The
runtime is going to be huge when querying the database thousands of time.

For this purpose, we try to keep our operations as simple and elementary as
possible.

## Standardizing

Going back to the diagram above, we can create distinctions between what each
block does. In case we're dealing with a large dataset, the code above could be
separated as follows:

1. Transform data, build a common mapping base.
2. Query database to find matching Ids.
3. Process the matches to build patient mapping we should update and those we
   should create records for.
4. Bulk update records.
5. Bulk create records.

```js
// 1. we build a base for our mapping
fn(state => {
  const { patients } = state.data;

  const ids = patients.map(d => d.uuid);

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

// 2. bulk query the db to fetch all patients that match
query(state => {
  const ids = state.ids.join("','");
  return `SELECT Id, firstname, lastname, modified_date FROM patient__c WHERE Id in ('${ids}')`;
});

// 3. intermediary block to process fetched data from the query
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

// 4. Then upsert
bulk(
  'patient___c',
  'update',
  {
    extIdField: 'Id',
    failOnError: true,
    allowNoOp: true,
  },
  state => state.toUpdate
);

// 5. And finally create
bulk(
  'patient__c',
  'insert',
  {
    failOnError: true,
    allowNoOp: true,
  },
  state => state.toCreate
);
```

This allows us not only to reduce the amount of requests to an external system
but also allows for easier maintenance and evolution. If we wanted to update our
mapping, we only need to make changes in one place.

## Data Binding

The final example presented previously implement also our data binding mechanism
from task to task (read operation here). When passing data from one operation to
another, it always goes through state. Remember, every operation
[takes state and returns state](articles/2021/07/05/wrapping-my-head-around-jobs).
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

## A final thought

To sum this up, when faced with a large dataset, it's better to optimize
execution and runtime by allowing different operations in your job to have
different roles.

Steps to remember:

**Step 1.** Process your data, clean and transform using a **fn()** block.

**Step 2.** Any query made to an external system should, _whenever possible_, be
it's own block.

One final thought is how this pattern (`fn`, `apiCall`, `fn`, `apiCall`) keeps
your operations clean and very flexible. Everything in the `fn` blocks uses
either **language-common** or raw Javascript so, for the most part, they can be
used in ANY job, regardless of the adaptor!
