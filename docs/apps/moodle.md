---
title: Moodle
---

## Overview

Moodle is a free and open-source online learning management system.

### Integration Use Cases


1. As a teacher on Moodle, I want to send profile, enrollment, and grade updates to CommCare so I can continue supporting students offline.
2. As a teacher on Moodle, I want to automatically send student engagement data to CommCare so I can integrate SMS notifications to increase student participation.
3. As a student on Moodle, I want to access my course data and grades even when not connected to the internet.


### Learn More
Helpful links...

1. Moodle Docs – https://docs.moodle.org/310/en/Main_page
2. Moodle API Docs - https://moodle.org/plugins/webservice_restful

## Integration Options

Data integration via the Moodle web API: https://moodle.org/plugins/webservice_restful

Data forwarding using a Webhook: https://moodle.org/plugins/local_webhooks

### More on the Moodle API

**Sample requests**

Authentication: 

`GET mymoodlesite.com/login/token.php?service=moodle_mobile_app
&username=USERNAME&password=PASSWORD`

Retrieve course information for all courses:
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction=
core_course_get_courses&moodlewsrestformat=json HTTP/1.1`


Retrieve enrolled users in a specific course: 
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction=
core_enrol_get_enrolled_users&courseid=225&moodlewsrestformat=json HTTP/1.1`

Retrieve all final grades for one student:
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction=
gradereport_user_get_grade_items&userid=46580&courseid=225&moodlewsrestformat=json HTTP/1.1`

**Integration tips**

1. The endpoint `get_enrolled_users` does not return all user profile details. We have had to access `core_user_get_users_by_field` and filter by one specific user to retrieve profile information such as phone number and address. 
2. Googling the endpoint you're using goes a long way!


## Connect with OpenFn

The [`language-http`](https://github.com/OpenFn/language-http#language-http-) can be
used to make HTTP requests to the Moodle API.

## Implementation Examples

**Moodle -> CommCare Integration: 
**

In a pilot for the Empleando Futuros program, Dimagi and Banyan Global are developing a learning management system in Moodle and Commcare. OFG will sync the two platforms and automate data flow to enable monitoring of program enrollment and youth participation in CommCare.

Example: As a coach, when a student's grade is updated in Moodle, I would like to automatically see that data reflected in our CommCare mobile app.

Integration [Documentation](https://docs.google.com/spreadsheets/d/1jmMEXcvtQCZRnfQjpHFjN9qTulp8ThrvqCs8Ac7CvO4/edit#gid=0): 
⋅⋅* Mapping specifications 
⋅⋅* List of Moodle endpoints used and sample JSON responses
⋅⋅* Data flows diagrams

