---
title: Standardizing our way of writing a job
---

A [job](https://docs.openfn.org/documentation/jobs/job-design-intro) defines
different series of tasks performed to process data from one source system to
another destination system. Those different tasks might serve different
purposes: **execute a function from an adaptor (upsert, post)** or **clean and
map data**.

Depending on the type of job you are writing, it's always good to make a clear
separation of concerns between your tasks. See it as a diagram where you have
different activities, each activity taking one specific input and producing one
specific output.

![Sample BPMN diagram](/img/bpmn_example.png)

Taking this example above, we can see different block with different concerns.

One way of writing a job that satifies this workflow would be something like
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
      // upsert
    } else {
      // create
    }
  });
});
```

Easy right? Imagine this needs to be done for 10 patients? 100 ? 1000? The
runtime is going to be huge.

For this purpose, we try to keep how block as simple and elementary as possible.
Going back to the diagram above, we can have a clear distinction of what each
block might be doing. In case we deal we a large dataset, the code above could
be written as follow:

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

// bulk query the db to fetch all patient that match
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

// finals blocks to upsert and creates
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

To sum this up, when faced with large data, it's better to optimize execution
and runtime by allowing different blocks in your job to have different roles.
This also allows for easier maintenance and evolution. If we wanted to add more
mapping we know exactly the only place where we could go instead of multiple
places.

Steps to remember:

**Step 1.** Process your data, clean and transform using a **fn()** block.

**Step 2.** Any query made to an external system should, if possible, be it's
own block.
