---
title: Adaptors
---

An adaptor is an open-source module that provides the necessary operations that
help communicate with a specific external system. We often refer to them as
`language-packages`. In the following, we might use the two terms
interchangeably.

## Where to find them?

### On GitHub

The developed adaptors can be found in GitHub under `https://github.com/openfn`,
starting with the prefix `language-XXXX`. Some examples are:
`language-http (https://github.com/OpenFn/language-http)`,
`language-postgresql (https://github.com/OpenFn/language-postgresql)`.

### On openfn.org

When creating or editing a job, you can choose the adaptor to run the job. This
way you "import" the needed operations. Simply open the dropdown list of
adaptors, and click on one.

<img src="/img/adaptor_choice_openfn.png" width="300" />

### On npm

Some of our language-packages are also available in
[npmjs](https://www.npmjs.com/search?q=%40openfn).

![Adaptors list in npm](/img/adaptor_npm.png)

## Developing an adaptor

You can develop a new adaptor from scratch or extend an existing one.

### Extending an adaptor

Extending an adaptor equals adding one or multiple new operations. The new
operations can be added inside the `src/Adaptor.js` file of the adaptor.

<img src="/img/srcfolder.png" width="400" />

### Developing a new adaptor

Developing a new Adaptor a a language package can be done by cloning the
template available in this Url: `https://github.com/OpenFn/adaptor` via the
`USE THIS TEMPLATE` button over on Github.

![Use this template button](/img/usethistemplate.png)

#### Default operation

This template contains a default `create` operation that can be customized
according to the objectives of the new language-package.

```javascript
export function create(path, params, callback) {
  return state => {
    // expand references for the data argument with state
    // do the work
    // return state
  };
}
```

## Build and tests

### Build

Building an adaptor is done by running the command `make` from the root folder.

![Build an adaptor](/img/make.png)

### Tests

Tests can be written with nock under the path `test/index.js`.

```javascript
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

```javascript
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
