// Fetch user details and course grades using async/await in fn().
// Avoid nesting operations inside callbacks — use sequential awaits instead.
each(
  $.enrolledUsers.slice(0, 10),
  fn(async state => {
    const { host } = state.configuration;
    const { id } = state.data;

    // Step 1: Get user details
    state = await get(host, {
      query: {
        wstoken: state.token,
        wsfunction: 'core_user_get_users_by_field',
        field: 'id',
        'values[]': id,
        moodlewsrestformat: 'json',
      },
    })(state);

    const { phone1, address } = state.data[0];
    const user = { id, 'Teléfono móvil': phone1, Dirección: address, grades: [] };

    // Step 2: Get grades for each course sequentially
    for (const courseid of state.courseIds) {
      state = await get(host, {
        query: {
          wstoken: state.token,
          wsfunction: 'gradereport_user_get_grade_items',
          userid: id,
          courseid,
          moodlewsrestformat: 'json',
        },
      })(state);

      const { graderaw } = state.data.usergrades[0].gradeitems[0];
      user.grades.push({ courseid, graderaw });
    }

    return {
      ...state,
      usersfields: [...(state.usersfields || []), user],
      enrolledUsers: [],
      response: [],
    };
  })
);
