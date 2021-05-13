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
