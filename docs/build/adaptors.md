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
`@openfn/language-xyz`.

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

Note that, after this custom installation of the adaptor, `platform` will not
add this adaptor version to the picklist of recommended adaptors in
[JobStudio](https://docs.openfn.org/documentation/jobs/job-studio), but you are
guaranteed that the adaptor will be available to use in any of your jobs as long
as you specify it via the **Select Unreleased Adaptor** dialog.

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

#### Generic helper functions with specific examples

We think that helper functions should be generic enough to be able to handle
many actions depending on arguments they're given. For example an adaptor that
allows to do CRUD operations on a API doesn't need to provide a helper function
for every endpoint. Instead it can only have a helper function for every action
(create, delete, update, ...) and that helper function be generic enough to be
able to handle all endpoints (`action('resourceType', payload, options)`). We
encourage adding more working examples of how to use the helper function
depending on the different actions it can do. This is a design we've built in
the [`language-dhis2`](https://github.com/OpenFn/language-dhis2) adaptor and
that we encourage to use for building adaptors. It allows to have less code to
maintain in the adaptor and also makes adaptors easier to learn and to use.

Below is an example of documentation of the `create` function in the
`language-dhis2` helper function.

```javascript
/**
 * A generic helper method to create a record of any kind in DHIS2
 * @public
 * @function
 * @param {string} resourceType - Type of resource to create. E.g. `trackedEntityInstances`, `programs`, `events`, ...
 * @param {Object} data - Data that will be used to create a given instance of resource. To create a single instance of a resource, `data` must be a javascript object, and to create multiple instances of a resources, `data` must be an array of javascript objects.
 * @param {Object} [options] - Optional `options` to control the behavior of the `create` operation.` Defaults to `{operationName: 'create', apiVersion: null, responseType: 'json'}`
 * @param {Object} [params] - Optional `import parameters` for a given a resource. E.g. `{dryRun: true, importStrategy: CREATE}` See {@link https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html DHIS2 API documentation} or {@link discover}. Defauls to `DHIS2 default params` for a given resource type.
 * @param {function} [callback] - Optional callback to handle the response
 * @returns {Operation}
 *
 * @example <caption>-a single `program`</caption>
 * create('programs', {
 *   name: 'name 20',
 *   shortName: 'n20',
 *   programType: 'WITHOUT_REGISTRATION',
 * });
 *
 * @example <caption>-a single `event`</caption>
 * create('events', {
 *   program: 'eBAyeGv0exc',
 *   orgUnit: 'DiszpKrYNg8',
 *   status: 'COMPLETED',
 * });
 *
 * @example <caption>-a single `trackedEntityInstance`</caption>
 * create('trackedEntityInstances', {
 *   orgUnit: 'TSyzvBiovKh',
 *   trackedEntityType: 'nEenWmSyUEp',
 *   attributes: [
 *     {
 *       attribute: 'w75KJ2mc4zz',
 *       value: 'Gigiwe',
 *     },
 *   ]
 * });
 *
 * @example <caption>-a single `dataValueSet`</caption>
 * create('dataValueSets', {
 *   dataElement: 'f7n9E0hX8qk',
 *   period: '201401',
 *   orgUnit: 'DiszpKrYNg8',
 *   value: '12',
 * });
 *
 * @example <caption>-a single `dataValueSet` with `dataValues`</caption>
 * create('dataValueSets', {
 *   dataSet: 'pBOMPrpg1QX',
 *   completeDate: '2014-02-03',
 *   period: '201401',
 *   orgUnit: 'DiszpKrYNg8',
 *   dataValues: [
 *     {
 *       dataElement: 'f7n9E0hX8qk',
 *       value: '1',
 *     },
 *     {
 *       dataElement: 'Ix2HsbDMLea',
 *       value: '2',
 *     },
 *     {
 *       dataElement: 'eY5ehpbEsB7',
 *       value: '3',
 *     },
 *   ],
 * });
 *
 * @example <caption>-a single `enrollment`</caption>
 * create('enrollments', {
 *   trackedEntityInstance: 'bmshzEacgxa',
 *   orgUnit: 'TSyzvBiovKh',
 *   program: 'gZBxv9Ujxg0',
 *   enrollmentDate: '2013-09-17',
 *   incidentDate: '2013-09-17',
 * });
 */
export function create(resourceType, data, options, params, callback) {
  return state => {
    if (isArray(data) && resourceType === 'programs') {
      Log.warn("DHIS2 doesn't allow creation of multiple programs at once.");
      return state;
    }

    const expandedData = expandReferences(data)(state);
    const body = nestArray(expandedData, resourceType);

    const expandedResourceType = expandReferences(resourceType)(state);
    const expandedOptions = expandReferences(options)(state);
    const expandedParams = expandReferences(params)(state);

    const operationName = expandedOptions?.operationName ?? 'create';
    const { username, password, hostUrl } = state.configuration;
    const responseType = expandedOptions?.responseType ?? 'json';
    delete expandedParams?.filters;
    const queryParams = new URLSearchParams(expandedParams);
    const apiVersion =
      expandedOptions?.apiVersion ?? state.configuration.apiVersion;
    const url = buildUrl('/' + expandedResourceType, hostUrl, apiVersion);
    const headers = {
      Accept: CONTENT_TYPES[responseType] ?? 'application/json',
      'Content-Type': 'application/json',
    };

    logOperation(operationName);
    logApiVersion(apiVersion);
    logWaitingForServer(url, queryParams);
    warnExpectLargeResult(expandedResourceType, url);

    console.log('hello?');

    return axios
      .request({
        method: 'POST',
        url,
        auth: {
          username,
          password,
        },
        params: queryParams,
        data: body,
        headers,
      })
      .then(result => {
        Log.info(
          `${operationName} succeeded. Created ${expandedResourceType}: ${
            result.data.response?.importSummaries
              ? result.data.response.importSummaries[0].href
              : result.data.response?.reference
          }.\nSummary:\n${prettyJson(result.data)}`
        );
        if (callback) return callback(composeNextState(state, result.data));
        return composeNextState(state, result.data);
      });
  };
}
```

## Build and tests

### Build

All adaptor releases are built inside a docker container. The importance of
running the build and release process through a container is to standardize the
build environment across the team.

To learn more about building adaptors using docker, read
[this document](devtools/home/#building-adaptors-for-platform).

### Tests

#### Unit tests

Unit tests can be written with [nock](https://github.com/nock/nock) under the
path `test/index.js`.

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

#### Integration tests

We use integration testing to make sure helper functions are performed. As we
said above, for each helper function we have different usage examples. For each
example, we write an automated test that validates it (integration test).

For this we have a file named `tests/integration.js` in which we write all the
adaptor's integration tests.

We use [mocha](https://mochajs.org/) and its hooks like the before hook to write
integration tests. The hooks are used to prepare the elements necessary to run
the tests, for example (in the case of the `language-dhis2` adapter) choosing
the organizational unit to work with or the program.

Below is an example of an integration test.

```javascript
const { expect } = require('chai');
const { create, execute } = require('../src/Adaptor');
const crypto = require('crypto');

const getRandomProgramPayload = () => {
  const name = crypto.randomBytes(16).toString('hex');
  const shortName = name.substring(0, 5);
  const programType = 'WITHOUT_REGISTRATION';
  return { name, shortName, programType };
};

const globalState = {
  configuration: {
    username: 'admin',
    password: 'district',
    hostUrl: 'https://play.dhis2.org/2.36.4',
  },
  program: 'IpHINAT79UW',
  organisationUnit: 'DiszpKrYNg8',
  dataSet: 'pBOMPrpg1QX',
  trackedEntityInstance: 'bmshzEacgxa',
  programStage: 'A03MvHHogjR',
  dataElement: 'Ix2HsbDMLea',
  enrollment: 'CmsHzercTBa',
};

describe('create', () => {
  it('should create an event program', async () => {
    const state = {
      ...globalState,
      data: { program: getRandomProgramPayload() },
    };

    const response = await execute(
      create('programs', state => state.data.program)
    )(state);
    expect({
      httpStatus: response.data.httpStatus,
      httpStatusCode: response.data.httpStatusCode,
      status: response.data.status,
    }).to.eql({
      httpStatus: 'Created',
      httpStatusCode: 201,
      status: 'OK',
    });
  });
}
```
