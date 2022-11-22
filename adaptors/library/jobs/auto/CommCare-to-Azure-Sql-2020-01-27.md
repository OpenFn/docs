---
title: CommCare to Azure Sql
sidebar_label: CommCare to Azure Sql
id: CommCare-to-Azure-Sql-2020-01-27
keywords:
  - library
  - job
  - expression
  - mssql
  - alterState
  - join
  - map
  - sql
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: CommCare to Azure Sql
- Adaptor: [`@openfn/language-mssql`](https://www.github.com/openfn/language-mssql)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-mssql)
- Created almost 3 years ago
- Updated over 2 years ago
- Score: <b>3</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `join`, `map`, `sql`

## Expression

```js
// Insert household, fail on duplicate (consider upsert strategy, if you want!)
sql({
  query:
    'INSERT INTO Household (' +
    [
      'commcare_id',
      'is_head',
      'total_members',
      'head_name',
      'date_registered',
      'village',
      'new_thing',
    ].join(', ') +
    `) VALUES ('` +
    [
      state.data.metadata.instanceID,
      state.data.form.head_of_household === 'yes' ? 1 : 0,
      state.data.form.hh_members,
      state.data.form.individual_name,
      state.data.form.registration_date,
      state.data.form.village_name,
      state.data.form.new_q,
    ].join(`', '`) +
    `');`,
});

// Prepare a string to be used for VALUES (...) in our member insert.
alterState(state => {
  const data = state.references[0];
  const form = data.form;
  const parentId = data.metadata.instanceID;
  const memArr = form.register_hh_members.map((m, i) => {
    return `('${parentId}-${i}', '${parentId}', '${m.hh_member_name}', '${m.age}')`;
  });

  state.members = memArr.join(', ');
  return state;
});

// Insert members, fail on duplicate
sql({
  query: state =>
    `INSERT INTO HouseholdMember (commcare_id, parent, name, age) VALUES ${state.members}`,
});

```