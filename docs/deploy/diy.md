---
title: Do-it-yourself Deployments
sidebar_label: DIY
---

:::warning

Are you sure you want to build a new application using **core** and/or
**engine**? OpenFn's completely free and open source
**[microservice](microservice)** offering provides a pretty good base in the
event that you'd like to extend our existing functionality for your own
purposes.

:::

:::note

We're in the process of migrating the docs for **OpenFn/core** and
**OpenFn/engine** here.

In the meantime, check out:

- https://github.com/OpenFn/core
- https://github.com/OpenFn/engine

:::

## On DIY implementations using OpenFn/core and OpenFn/engine

OpenFn's core ETL tools are all open-source, and here we will explain how those
tools can be used to perform ETL operations from your command line. You can even
take this further and wrap them together in your own hosted service!

To create an integration service like `platform` or `microservice`, you will
need to build a REST endpoint that allows JSON or XML to be posted to it,
returning a `2XX` and checking the body of that message to see if it matches
some criteria. If the criteria match for that message, you must perform
`execute` from `core`, using the message data and some stored configuration as
state. See a sample state.json below:

### State.json

```json
{
  "data": {
    "word_count": 284,
    "last_update": "2016-11-10 13:58:47",
    "folder_name": "Civil Disobedience",
    "file_owner": "student@school.org.za",
    "file_name": "Mock Journal Article"
  },
  "configuration": {
    "host": "109.XXX.11X.2XX",
    "port": "5432",
    "database": "data-warehouse",
    "user": "postgres",
    "password": "secret-password",
    "ssl": true
  }
}
```

Make sure to store your logs. If you'd like to be able to retry transactions,
persist the message data and provide an interface for manipulating that data by
hand, or re-running certain transactions after the job expression has been
altered.

Make sure that a single inbound message can kick off the running of multiple
jobs.

To get started, or just run fn-lang manually, from your command line, check out
[openfn-devtools](https://github.com/OpenFn/openfn-devtools). With windows and
linux install scripts, it's the fastest way to get up and running with OpenFn on
your local machine.

### Sample files for DIY getting started

Below you can find sample code to fill the 3 files required to run fn-lang -
`message.json`, `expression.js` and `config.json`.

#### message.json

```json
{
  "xform_ids": [],
  "version": null,
  "user_id": "user1",
  "server_date_opened": null,
  "server_date_modified": null,
  "properties": {
    "prop_c": "2013-05-18",
    "prop_b": "Female",
    "prop_a": 99,
    "owner_id": null,
    "external_id": null,
    "date_opened": null,
    "date": "2013-05-17",
    "case_type": "case_type",
    "case_name": "Demo"
  },
  "indices": {}
}
```

#### expression.js

```js
event(
  fields(
    field('program', 'eBAyeGv0exc'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('eventDate', dataValue('properties.date')),
    field('status', 'COMPLETED'),
    field('storedBy', 'admin'),
    field('coordinate', {
      latitude: '59.8',
      longitude: '10.9',
    }),
    field('dataValues', function (state) {
      return [
        {
          dataElement: 'qrur9Dvnyt5',
          value: dataValue('properties.prop_a')(state),
        },
        {
          dataElement: 'oZg33kd9taw',
          value: dataValue('properties.prop_b')(state),
        },
        {
          dataElement: 'msodh3rEMJa',
          value: dataValue('properties.prop_c')(state),
        },
      ];
    })
  )
);
```

#### config.json

```json
{
  "username": "admin",
  "password": "district",
  "apiUrl": "https://play.dhis2.org/demo"
}
```
