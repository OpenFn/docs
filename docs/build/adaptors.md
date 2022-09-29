---
title: Adaptors
---

An adaptor is an open-source Javascript module that provides OpenFn core users
with a set of operations that help communicate with a specific external system.
In the past, we often referred to them as "language packages". And the two terms
are sometimes used interchangeably, but the preferred way of communicating about
adaptors is as follows:

- "What _**adaptor**_ is that job using?" ("That job is using
  `language-dhis2`.")
- "The DHIS2 _**adaptor**_ is called `language-dhis2`."
- "I don't have the right _**adaptor**_ for this job, let me install it by
  running `npm install @openfn/language-dhis2`.

In short, _most_ _**adaptors**_ follow the naming convention
`@openfn/language-xyz`, but not all do!

## Where to find them?

### On GitHub

The developed adaptors can be found in GitHub under `https://github.com/openfn`,
starting with the prefix `language-xyz`. Some examples are:

- [language-http](https://github.com/OpenFn/language-http)
- [language-postgresql](https://github.com/OpenFn/language-postgresql)
- [language-primero](https://github.com/OpenFn/language-primero)

### On platform

When creating or editing a job on platform, you can choose the adaptor to run
the job. This way you "import" the needed operations. Simply open the dropdown
list of adaptors, and click on one.

<img src="/img/adaptor_choice_openfn.png" width="300" />

### On npm

Most of our adaptors are also available on
[npmjs](https://www.npmjs.com/search?q=%40openfn).

![Adaptors list in npm](/img/adaptor_npm.png)

#### Install on platform via npm

When using `platform`, you can install adaptors that are not part of the
recommended adaptors picklist directly from
[npm](https://www.npmjs.com/search?q=%40openfn).

To install from npm, click on the _cloud download icon_ next to the adaptor
version picklist. In the **Select Unreleased Adaptor** dialog box, enter the
`adaptor name`(e.g. `dhis2` for `language-dhis2`) and the corresponding
`version number`(e.g. `v2.3.4`), as listed on
[npmjs](https://www.npmjs.com/search?q=%40openfn), for the adaptor of your
choice. The platform will attempt to install the selected adaptor version it can
be used to run the specified job.

Note that after this custom installation of the adaptor, `platform` will not add
this adaptor version to the picklist of recommended adaptors in
[JobStudio](/documentation/jobs/job-studio), but you are guaranteed that the
adaptor will be available to use in any of your jobs as long as you specify it
via the **Select Unreleased Adaptor** dialog.

## Developing adaptors

You can develop a new adaptor from scratch or extend an existing one.

### Extending an adaptor

Extending an adaptor equals adding one or multiple new operations. The new
operations can be added inside the `src/Adaptor.js` file of the adaptor.

<img src="/img/srcfolder.png" width="400" />

### Developing a new adaptor

Developing a new adaptor can be done by cloning the template available
[here](https://github.com/OpenFn/adaptor) via the `USE THIS TEMPLATE` button
over on Github.

![Use this template button](/img/usethistemplate.png)

### Default operation

This template contains a default `create` operation that can be customized
according to the objectives of the new adaptor.

```js
export function create(path, params, callback) {
  return state => {
    // expand references for the data argument with state
    // do the work
    // return state
  };
}
```

### General considerations

#### Using `@openfn/language-common.http`

In many cases, it's useful to be able to execute regular HTTP requests inside a
specialized adaptor (e.g. posting the output of a Primero case fetch to an
OpenFn inbox). Considering these types of situations, `language-common`
implements and exports an `http` module. To use `http` in any job executed with
a specific adaptor consider exporting it directly from `language-common`.

```js
...
export {
  alterState,
  ...
  http,
  ...
  sourceValue,
} from '@openfn/language-common';
```

#### Import language-common from npm

To leverage the last tested available version of our language-common adaptor,
consider importing the one published in `npm` through `@openfn/language-common`.

Accordingly, your `package.json` should add a dependency to that version as this
(snippet taken from `language-postgresql`):

```json
{
  "dependencies": {
    "@openfn/language-common": "1.2.6",
    "pg": "^8.3.2",
    "pg-format": "^1.0.4"
  },
  ...rest
}
```

## Build and tests

### Build

Building an adaptor for release is done by running the command `npm run build`
from the root folder.

### Tests

Tests can be written with nock under the path `test/index.js`.

```js
describe('createPatient', () => {
  before(() => {
    nock('https://fakepatient.server.com')
      .post('/api/patients')
      .reply(200, (uri, requestBody) => {
        return { ...requestBody, fullName: 'Mamadou', gender: 'M' };
      });
  });

  it('makes a post request to the patient endpoint', async () => {
    const state = {
      configuration: {
        baseUrl: 'https://fakepatient.server.com',
        username: 'hello',
        password: 'there',
      },
      data: {
        fullName: 'Mamadou',
        gender: 'M',
      },
    };

    const finalState = await execute(
      create('api/patients', {
        name: dataValue('fullName')(state),
        gender: dataValue('gender')(state),
      })
    )(state);

    expect(finalState.data).to.eql({
      fullName: 'Mamadou',
      gender: 'M',
    });
  });
});
```

Run your tests with `npm run test`. Tests are written to assess dummy calls on
the available helper functions.

```sh
 ~/devtools/adaptors/adaptor > npm run test

> language-template@1.0.0 test /home/taylor/devtools/adaptors/adaptor
> mocha --require @babel/register



  execute
    ✓ executes each operation in sequence
    ✓ assigns references, data to the initialState

  create
    ✓ makes a post request to the right endpoint
    ✓ throws an error for a 404
    ✓ handles and throws different kinds of errors

  createPatient
    ✓ makes a post request to the patient endpoint


  6 passing (16ms)

 ~/devtools/adaptors/adaptor >
```

When writing tests, bear in mind as well for scenarios that could trigger
errors.

```js
describe('create', () => {
  before(() => {
    nock('https://fake.server.com')
      .post('/api/noAccess')
      .reply(404, (uri, requestBody) => {
        return { detail: 'Not found.' };
      });

  it('throws an error for a 404', async () => {
    const state = {
      configuration: {
        baseUrl: 'https://fake.server.com',
        username: 'hello',
        password: 'there',
      },
    };
    const error = await execute(create('api/noAccess', { name: 'taylor' }))(
      state
    ).catch(error => {
      return error;
    });
    expect(error.message).to.eql('Request failed with status code 404');
  });

});
```
