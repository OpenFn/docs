---
title: Connecting Applications
---

## General Introduction

<!-- TODO: @Jed -->

## Microservices

<!-- TODO: @Jed -->

## Platform Projects

<!-- TODO: @Jed -->

## App Specific Examples
<!-- @Taylor do these examples belong here? -->
## Overview

:::note

Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate
with common tools, and (2) to educate any OpenFn user/the wider sector.

:::

### Kobo

#### Integration Use Cases

Example user stories...

#### Further Reading

1. Links to external sites and OpenFn docs...

#### Integration Options

#### Data & Metadata integration via Kobo Web API

Summary & links... Learning about Kobo API, what we can/cannot extract from
different endpoints...

#### Webhook service to push submission data to OpenFn endpoint

1. To push data from Kobo, users must click the projects icon on their left-side
   nav bar. It's in the shape of a globe.
2. Once selecting a project, the `Project Settings` link will appear at the top
   left side of the screen. Click it to open the Project Settings page.
3. In the bottom left pane of the project settings page, users must paste their
   inbox URL from OpenFn into the `Rest Services` `Service URL` input area and
   select `JSON Post` as the `Service Name`.
4. It's helpful to add a wrapper to your form data if you will be publishing
   multiple forms to OpenFn. You could use
   `{"form":"my_form", "body": %SUBMISSION%}`.
5. Click `Add Service` to start forwarding new Kobo submissions to OpenFn.org.

To test to integration, add a submission manually using the
`enter data in browser` button. Head back to your history page at OpenFn to view
the newly submitted data and write a new `filter` and `job` to map your Kobo
data to any destination system on OpenFn.

Here's a sample post from Kobo REST service. Note that questions inside groups
are prefixed with `groupname/` rather than sitting inside a group object like
ODK:

```json
{
  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "group1/name": "twenty",
  "group1/age": "19",
  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",
  "first_q": "hello",
  "final_q": "why not?",
  "_xform_id_string": "groups",
  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "_userform_id": "taylordowns2000_groups",
  "_tags": [],
  "_submitted_by": null,
  "_submission_time": "2016-04-22T06:38:20",
  "_status": "submitted_via_web",
  "_notes": [],
  "_id": 889409,
  "_geolocation": [null, null],
  "_bamboo_dataset_id": "",
  "_attachments": []
}
```

#### OpenFn Adaptor

Check out
[OpenFn/language-kobotoolbox](https://www.github.com/openfn/language-kobotoolbox)

#### Integration Examples

Links to sample jobs/ code snippets...

### Commcare

#### Push cases and/or forms from CommCare to OpenFn

1. Go to "Project Settings".
2. Click "Data Forwarding".
3. "Add a forwarding location" for Cases, Forms, or both.
4. Specify JSON, using your OpenFn inbox URL as the target. See the
   [CommCare documentation](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128).
5. Create a
   [message-filter trigger like this](../appendix#match-a-message-with-a-fragment-inside-another-object-called-form).
6. Set up a `job` running on that filter to process CommCare submissions or case
   updates.

### Go.Data

#### Overview

Go.Data is an outbreak investigation tool for field data collection during
public health emergencies.

#### Integration Use Cases

Example user stories...

#### Further Reading

1. OpenFn Go.Data notes -
   https://drive.google.com/file/d/12YDZXt9_-XUv8HcAiyzZsqRitBkedKqf/view?usp=sharing
2. Go.Data User Guides –
   https://drive.google.com/drive/u/8/folders/1cTcXZLEM4XRxht6VvsSrKq8QGMie-knj
3. Go.Data GitHub Repository – https://github.com/WorldHealthOrganization/godata
4. Go.Data API Explorer - http://who-stable.clarisoft.com/explorer/#/

#### Integration Options

Data integration via the Go.Data web API - link here: ...

#### OpenFn Adaptor

The open-source [`language-godata`](https://openfn.github.io/language-godata/)
adaptor has been developed with a series of helper functions for common
operations to expedite integration setup.

Also, the generic
[`language-http`](https://github.com/OpenFn/language-http#language-http-) can be
used to make HTTP requests to the Go.Data API and can perform any operations not
supported by `language-godata`.

#### Implementation Examples

Links to jobs and code snippets...

### Application Developers

This section is for you if you are hoping to build or extend an existing
application that can connect to OpenFn. We follow modern web-standard JSON api
guidelines.

For your application to a be data provider (or "source") for OpenFn
integrations, we highly recommend that you create a "notifications service"
(sometimes called a "webhooks service" or "event-based push API"). This is
preferable to using a REST api for two reasons: (1) A notifications service will
give your clients the ability to set up real-time integrations, and (2) a
notifications service is more efficient for both your servers and OpenFn—instead
of having requests be made and handled every X seconds, your servers and
OpenFn's servers will only work when new data is available.

For your application to be a consumer (or "destination") for OpenFn, you must
either have a standard, JSON-based rest API or create a language-package that
meets your API specifications.

#### Sending data to OpenFn

To send data to OpenFn, your application must be able to make an HTTPS post to
an external URL with a valid JSON object as the post body. See the following
example using cURL:

```sh
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Cache-Control: no-cache" \
  -d '{"foo":"bar", "baz":"qux"}' \
  "https://staging.openfn.org/inbox/some-secret-api-key"
```

OpenFn will respond with a 200 and an empty JSON object in the event of a
successful post. 400s mean that the user's external URL is wrong, and 500s means
that there is an application error on OpenFn. While 500s are rare, they could be
due to invalid JSON in your POST body.

If you cannot notifiy an external URL when some event takes place, you can still
integrate with OpenFn if you have a JSON-based REST API. OpenFn users can make
HTTP GET requests to your application and perform additional actions based on
your response. You should allow either basic or token authentication and
responsd to a valid GET with JSON. There is no specific format for your
response, as users can parse it any way they'd like, extracting relevant data
and then performing other actions—like loading it into a destination system—with
that data. See [language-http](https://www.github.com/openfn/language-http) for
details on how users make these generic HTTP requests.

#### Receiving data from OpenFn

To make it easy for users to connect to your application, it's highly
recommended that you create a language-package with your required authentication
and a set of simple, allowable actions nicely abstracted into "helper
functions". See [language-dhis2](https://www.github.com/openfn/language-dhis2)
for an example of a language-package which creates a simpler interface for a
traditional JSON-based REST api. Language packages are written in Javascript and
execute in Node. You can convert OpenFn's JSON into XML, or any other format
before sending it to your application and you may make use of any node modules
you'd like. See
[language-postgresql](https://www.github.com/openfn/language-postgresql) for an
example of a language package that connects directly to PostgreSQL databases
using a popular NPM module called "pg".

To receive data from OpenFn's generic language-http langauge package, your
application must allow either basic, token, or digest authenticated POST, PUT,
or GET requests. (Though it is not advisable to create an API that requires GET
requests to create or update data.)