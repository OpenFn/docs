---
title: Moodle
---

## Overview

Moodle is a free and open-source online learning management system.

### Integration Use Cases


1. As a teacher on Moodle, I want to send profile, enrollement, and grade updates to CommCare so I can continue supporting students offline.
2. As a teacher on Moodle, I want to automatically send student engagement data to CommCare so I can integrate SMS notifications to increase student participation.
3. As a student on Moodle, I want to access my course data and grades even when not connected to the internet.


### Learn More
Helpful links...

1. Moodle Docs –
   https://docs.moodle.org/310/en/Main_page
2. Moodle API Docs - https://moodle.org/plugins/webservice_restful

## Integration Options

Data integration via the Moodle web API: https://moodle.org/plugins/webservice_restful

Data forwarding using a Webhook: https://moodle.org/plugins/local_webhooks

### More on the Moodle API

**Sample requests**

Retreive course information for all course:
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction=
core_course_get_courses&moodlewsrestformat=json HTTP/1.1
Host: ibertel.se.gob.hn`


Retrieve enrolled users in a specific course: 
`GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction=
core_enrol_get_enrolled_users&courseid=225&moodlewsrestformat=json HTTP/1.1
Host: ibertel.se.gob.hn`


**Integration tips**

## Connect with OpenFn

The [`language-http`](https://github.com/OpenFn/language-http#language-http-) can be
used to make HTTP requests to the Moodle API.

## Implementation Examples

Links to jobs and code snippets and/or summary of past solution
