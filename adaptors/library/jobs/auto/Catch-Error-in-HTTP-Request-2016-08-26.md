---
title: Catch Error in HTTP Request
sidebar_label: Catch Error in HTTP Request
id: Catch-Error-in-HTTP-Request-2016-08-26
keywords:
  - library
  - job
  - expression
  - http
  - get
  - JSON
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Catch Error in HTTP Request
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-http)
- Created about 6 years ago
- Updated 28 days ago
- Score: <b>48</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`get`, `JSON`

## Expression

```js
get(
  'https://jsonplaceholder.typicode.com/wrongUrl', // the url
  {
    transformResponse: [
      data => {
        console.log("The data from the response, BEFORE the error is thrown");
        console.log(JSON.stringify(data, null, 2))
        return data;
      }
    ],
  }, // no additional options
  state => { // the callback
    console.log('the data', state.data)
    return state; 
  }
);
```