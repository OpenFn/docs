---
title: Moodle
---

## Overview

[Moodle](https://moodle.org/) is a free and open-source online learning
management system.

### Integration Use Cases

1. As a teacher on Moodle, I want to send profile, enrollment, and grade updates
   to CommCare so I can continue supporting students offline.
2. As a teacher on Moodle, I want to automatically send student engagement data
   to CommCare so I can integrate SMS notifications to increase student
   participation.
3. As a student on Moodle, I want to access my course data and grades even when
   not connected to the internet.

### Learn More

Helpful links...

1. Moodle Docs – https://docs.moodle.org/310/en/Main_page
2. Moodle API Docs - https://moodle.org/plugins/webservice_restful

## Integration Options

Data integration via the Moodle web API:
https://moodle.org/plugins/webservice_restful

Data forwarding using a Webhook: https://moodle.org/plugins/local_webhooks

### More on the Moodle API

**Sample HTTP requests**

Authentication:  
`GET mymoodlesite.com/login/token.php?service=moodle_mobile_app &username=USERNAME&password=PASSWORD`

Retrieve course information for all courses:  
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= core_course_get_courses&moodlewsrestformat=json HTTP/1.1`

Retrieve enrolled users in a specific course:  
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= core_enrol_get_enrolled_users&courseid=225&moodlewsrestformat=json HTTP/1.1`

Retrieve all final grades for one student:  
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= gradereport_user_get_grade_items&userid=46580&courseid=225&moodlewsrestformat=json HTTP/1.1`

**Integration tips**

1. The endpoint `get_enrolled_users` does not return all user profile details.
   We have had to access `core_user_get_users_by_field` and filter by one
   specific user to retrieve profile information such as phone number and
   address.
2. Googling the endpoint you're using goes a long way!

## Connect with OpenFn

The [`language-http`](https://github.com/OpenFn/language-http#language-http-)
can be used to make HTTP requests to the Moodle API.

## Implementation Examples

**Moodle -> CommCare Integration:**

In a project implementation for creating an education app (based on CommCare),
we extract data from a Moodle learning management system daily, and then upload
Moodle student `user` data as `case` records in Commcare.

_Example User Story: As a coach using CommCare, when a student's profile and
grades are updated in Moodle, I would like to automatically see that data
reflected in my mobile app so that I can follow-up with the relevant support to
ensure they perform well._

Example job to get enrolled users via the Moodle API endpoint (aka
`web service function`): `core_enrol_get_enrolled_users`

```js
fn(state => {
  const { loginUrl, username, password, host } = state.configuration;
  return get(
    `${loginUrl}&username=${username}&password=${password}`,
    {},
    state => {
      const { token } = state.data;
      const courseIds = [224, 225];
      const enrolledUsers = [];
      return each(
        courseIds,
        fn(state => {
          let courseid = state.data;
          return get(
            `${host}`,
            {
              query: {
                wstoken: token,
                wsfunction: 'core_enrol_get_enrolled_users',
                courseid,
                moodlewsrestformat: 'json',
              },
              headers: { 'content-type': 'application/json' },
            },
            state => {
              console.log(
                `Getting users enrolled in the course with ${courseid}...`
              );
              enrolledUsers.push(state.data);
              return { ...state, enrolledUsers };
            }
          )(state);
        })
      )(state);
    }
  )(state);
});
```

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
