---
title: Kobo Toolbox
---

## Overview

:::note

Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate
with common tools, and (2) to educate any OpenFn user/the wider sector.

:::

## Integration Use Cases

Example user stories...

## Further Reading

1. Links to external sites and OpenFn docs...

## Integration Options

### Data & Metadata integration via Kobo Web API

Summary & links... Learning about Kobo API, what we can/cannot extract from
different endpoints...

### Webhook service to push submission data to OpenFn endpoint

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

## OpenFn Adaptor

Check out
[OpenFn/language-kobotoolbox](https://www.github.com/openfn/language-kobotoolbox)

## Integration Examples

Links to sample jobs/ code snippets...
