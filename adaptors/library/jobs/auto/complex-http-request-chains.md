---
title: Chaining HTTP Requests
sidebar_label: 📜 Chaining HTTP Requests
id: complex-http-request-chains
keywords:
  - library
  - job
  - expression
  - http
  - dataPath
  - each
  - get
  - post
  - put
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Chaining HTTP Requests
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-http)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataPath`, `each`, `get`, `post`, `put`

## Expression

```js
each(
  dataPath('someArray[*]'),
  post(
    'https://en7a5l7u3izq6.x.pipedream.net/',
    {
      body: state => {
        return { name: state.data.surname, age: state.data.age };
      },
    },
    state => {
      console.log('in the callback');
      console.log(state.data);
      get(
        'https://en7a5l7u3izq6.x.pipedream.net/',
        {},
        // Note how we don't use: `put(args)(state)` because state is already
        // provided by the parent operation, get(), to its callback...
        put('https://en7a5l7u3izq6.x.pipedream.net/')
        // ...but since we've called get() INSIDE an anonymous function, we'll
        // need to pass state to it manually: get(args)(state)...
      )(state);
      return state;
    }
  )
);

```