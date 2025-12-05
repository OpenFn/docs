---
title: PostgreSQL
---

## Overview

PostgreSQL is a free and open-source relational database management system. It
can be accessed and manipulated using SQL to extract or load data.

## Integration Use Cases

PostgreSQL databases are great for those looking to configure their own database
and can be used to feed into reports and analytics.

Example user stories:

- As an NGO program manager, I would like to be able to automatically see cases
  registered in our case-management system in a Postgres database which is
  connected to a visualization dashboard.
- As a fundraiser at an NGO, I would like to see all consumption data in
  Postgres so I can better monitor activities in real-time.

## Integration Options

OpenFn adaptors (see
[language-postgresql](https://github.com/OpenFn/language-postgresql)) provide
direct database connections for accessing data and executing SQL and standard
database operations.

### Authentication:

To create the direct DB connection, you'll need to specify the following
credential inputs.

```json
{
  "configuration": {
    "host": "some-host-url.compute-1.amazonaws.com",
    "port": "5432",
    "database": "testdatabase",
    "user": "myusername",
    "password": "testing123",
    "ssl": true,
    "allowSelfSignedCert": true
  }
}
```

(This authentication step is handled in the OpenFn adaptor.)

### Sample Job Expressions:

This function creates a table `users` in a database from a given array of
columns.

```js
insertTable('users', state =>
  state.data.map(column => ({
    name: column.name,
    type: column.type,
    required: true, // optional
    unique: false, // optional - set to true for unique constraint
  }))
);
```

This function is used to insert a single record in a Postgres database.

```js
insert(
  'users',
  {
    email: 'antony@gmail.com',
    first_name: 'Antony',
    inserted_at: '2020-08-27 00:00:00',
    updated_at: '2020-08-27 00:00:00',
  },
  { setNull: ["''", "'undefined'"], writeSql: true, logValues: true }
);
```

See the [Job Library](/adaptors/library) for more sample jobs.

### Integration tips

- **Keys**: Make sure the primary key and foreign keys for each table are known
  documented in the mapping specifications
- **Unique identifiers**: To avoid the "ON CONFLICT DO UPDATE command cannot
  affect row a second time" error discussed below, spend time thinking through
  which field or combination of fields makes each record unique using the sample
  data recieved
- **Testing**: Create a robust test suite which outlines which tables should be
  updated by each job run
  ![image](https://user-images.githubusercontent.com/80456839/150614749-6d667df9-495c-4153-b5d6-48632e3ba05a.webp)

## Common Errors

1. `Connection TIMEOUT` - This error usually means the destination system is
   offline or inaccessible to your user. Contact the destination system
   administrator.
2. `error: value too long for type character varying(16)` &
   `error: null value in column "household_id" violates not-null constraint` -
   Both of these errors highlight a mismatch in the data you're attempting to
   add to the database and what it's configured to accept. In this case, you are
   sending more than 16 characters for a field that only accepts up to 16
   characters AND sending "null" for a required field in that table.
3. `error: ON CONFLICT DO UPDATE command cannot affect row a second time`- This
   error means that there are two rows with the same value for unique fields.
   Review the sample data and mapping specifications to decide what makes a
   record unique in that table.

## OpenFn Adaptors

OpenFn implementations can leverage the
[`PostgreSQL`](https://github.com/OpenFn/language-postgresql) adaptor.

## Implementation Examples

1. Wildlife Conservation Society Kobo < > Database:
   https://github.com/OpenFn/consosci
2. Cambodia Primero < > ONA Database:
   https://github.com/OpenFn/primero-ona-dashboard
   

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
