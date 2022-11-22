---
title: Promises and nested requests
sidebar_label: 📜 Promises and nested requests
id: promise-all-nested-requests
keywords:
  - library
  - job
  - expression
  - http
  - alterState
  - each
  - get
  - Promise
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Promises and nested requests
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-http)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `each`, `get`, `Promise`

## Expression

```js
each(
  '$.enrolledUsers[10]',
  alterState(state => {
    const { host } = state.configuration;
    const { id } = state.data;
    const usersfields = [];
    return get(
      host,
      {
        query: {
          wstoken: state.token,
          wsfunction: 'core_user_get_users_by_field',
          field: 'id',
          'values[]': id,
          moodlewsrestformat: 'json',
        },
      },
      state => {
        const { id, phone1, address } = state.data[0];
        const fields = [
          { id, 'Teléfono móvil': phone1, Dirección: address, grades: [] },
        ];
        console.log(state.courseIds);
        let promises = [];
        state.courseIds.forEach(courseid => {
          promises.push(
            get(
              host,
              {
                query: {
                  wstoken: state.token,
                  wsfunction: 'gradereport_user_get_grade_items',
                  userid: id,
                  courseid,
                  moodlewsrestformat: 'json',
                },
              },
              state => {
                console.log('fetched');
                const { graderaw } = state.data.usergrades[0].gradeitems[0];
                const grades = [{ courseid, graderaw }];
                fields[0].grades.push(...grades);
              }
            )(state)
          );
        });

        return Promise.all(promises).then(() => {
          usersfields.push(...fields);
          return {
            ...state,
            usersfields,
            enrolledUsers: [],
            response: [],
          };
        });
      }
    )(state);
  })
);

```