---
title: Common Adaptor
---

## About OpenFn "Common" Language

Use this adaptor to write JavaScript, or to leverage common expressions and
[helper functions](/adaptors/packages/common-docs) for OpenFn.

This adaptor is typically used for transforming data in OpenFn workflows that
automate "ETL" (extract, transform, load) processes. See below examples.

```js
//use fn() to write your own functions
fn(state => {
  // write javascript...
  // ...to do some things to state
  console.log(state.data); //or to debug
  return state;
});
```

```js
//use each() to create 1 account for each form
each(
  $.forms,
  create('Account', {
    Kobo_ID__c: $.data.id,
    Name: $.data.customer_name,
    Phone: $.data.customer_phone,
  })
);
```
