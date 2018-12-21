# Job Execution

## Introduction

This is technical documentation aimed at making complex custom jobs easier to
write.

## Key Terms and Concepts
1. **core** (https://github.com/openfn/core) is the Javascript program which
executes jobs for OpenFn in an emphemeral Node.js environment.
2. **state** is a .JSON file that is built and passed into the Node environment.
It contains at least two keys, `configuration` and `data`. Configuration will be
populated with your credential and it used by language packages for authentication,
and data will be populated with message data if the job was triggered by an
incoming message.
```json
{
  "configuration": {
    "username": "taylor",
    "password": "shhhhhh",
    "loginUrl": "https://login.salesforce.com"
  },
  "data": {
    "a": 1,
    "b": {
      "x": [1,2,3]
    }
  }
}
```
3. **expressions** are sequences of operations to be executed. They are part of
"jobs", which also include a credential, a trigger, a label, and (sometimes) a
github filepath.
4. **operations** are named functions, exported for use by specific
language-packages, which take state and return state.

## State is passed to operations. Operations Return state.

This is a key concept. When you write:
```js
create('object', fields(
  field(...)
));
```
The execute function in your language-package (e.g., `language-salesforce`) will
execute each operation with state, then return state. If you want to execute operations
inside another custom function, you must explicitly pass in state.
```js
alterState(state => {
  return create('object', fields(
    field(...)
  ))(state)
});
```

## Sequences of operations inside custom functions.
Using `execute` you can string together several sequential operations inside a
custom function.
```js
alterState(state => {
  const { userName } = state.data.form.meta;

  if (userName != 'tester') {
    return execute(
      upsert("person__c", "Name", fields(
        field(...),
        field(...)
      )),
      beta.each(
        dataPath("form.array[*]"),
        upsert("object", "Name", fields(
          field(...)
        ))
      )
    )(state)
  }
  return state;
});
```
