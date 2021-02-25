---
title: Moodle
---

## Overview

Moodle is a free and open-source online learning management system.

### Integration Use Cases

As a Go.Data implementer, I want to send a weekly report on Go.Data cases to my government's HIS for automated reporting across key health indicators related to my response effort.

1. As a teacher on Moodle, I want to upload and download lecture notes and monitor my students' progress, grade and activities. 
2. As a teacher on Moodle, I want to back up teaching and learning documents. 
3. As a student on Moodle, I want to to easily track my grades and course progress throughout the course.


### Learn More
Helpful links...
1. OpenFn Moodle notes -

2. Moodle Docs –
   https://docs.moodle.org/310/en/Main_page
3. Moodle API Docs - https://moodle.org/plugins/webservice_restful

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


**Integration tips:
**

## Connect with OpenFn

The [`language-http`](https://github.com/OpenFn/language-http#language-http-) can be
used to make HTTP requests to the Moodle API.

## Implementation Examples

Links to jobs and code snippets and/or summary of past solution
