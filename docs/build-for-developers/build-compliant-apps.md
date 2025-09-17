---
title: Developing connected applications
sidebar_label: Building compliant APIs
---

This section is for you if you are hoping to build or extend an existing
application that can connect to OpenFn. We follow modern web-standard JSON API
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
either have a standard, JSON-based REST API or create a language-package that
meets your API specifications.

## Sending data to OpenFn

To send data to OpenFn, your application must be able to make an HTTPS post to
an external URL with a valid JSON object as the post body. See the following
example using cURL:

```sh
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Cache-Control: no-cache" \
  -d '{"foo":"bar", "baz":"qux"}' \
  "https://app.openfn.org/i/some-secret-inbox-uuid"
```

OpenFn will respond with a 200 and an empty JSON object in the event of a
successful post. 400s mean that the user's external URL is wrong, and 500s means
that there is an application error on OpenFn. While 500s are rare, they could be
due to invalid JSON in your POST body.

If you cannot notify an external URL when some event takes place, you can still
integrate with OpenFn if you have a JSON-based REST API. OpenFn users can make
HTTP GET requests to your application and perform additional actions based on
your response. You should allow either basic or token authentication and
response to a valid GET with JSON. There is no specific format for your
response, as users can parse it any way they'd like, extracting relevant data
and then performing other actions—like loading it into a destination system—with
that data. See [language-http](https://www.github.com/openfn/language-http) for
details on how users make these generic HTTP requests.

### Payload sizing

If you're using the platform, and you're not planning on using an enterprise
plan you'll have to consider the size of the data you're sending in each
payload. Run `state` is typically limited to `10MB` and you should therefore
keep your payloads well below that limit.

## Receiving data from OpenFn

To make it easy for users to connect to your application, it's highly
recommended that you create a language-package with your required authentication
and a set of simple, allowable actions nicely abstracted into "helper
functions". See [language-dhis2](https://www.github.com/openfn/language-dhis2)
for an example of a language-package which creates a simpler interface for a
traditional JSON-based REST api. Adaptors are written in Javascript and execute
in Node. You can convert OpenFn's JSON into XML, or any other format before
sending it to your application and you may make use of any node modules you'd
like. See
[language-postgresql](https://www.github.com/openfn/language-postgresql) for an
example of an adaptor that connects directly to PostgreSQL databases using a
popular NPM module called "pg".

To receive data from OpenFn's generic `language-http` adaptor, your application
must allow either basic, token, or digest authenticated POST, PUT, or GET
requests. (Though it is not advisable to create an API that requires GET
requests to create or update data.)
