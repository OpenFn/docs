---
title: What's an operation?
---

An Operation is a function which returns a function which takes `state` and
returns a `Promise` or `state`.

The purpose of an Operation is to act as an unresolved unit of behaviour.

For example, when creating an expression - the code itself doesn't know what the
state is going to be, only what _it's going to do_.

Language packs all follow this convention, where the functions that are provided
all return Operations.

```javascript
create('My_Custom_Object__c', {
  Custom_Field__c: dataValue('foo'),
});
```

In the snippet above, the `create` function doesn't know anything about
credentials, or any dynamic data that you may be available at runtime.

```javascript
function create(objectName, data) {
  return function (state) {
    // expand the data argument using state
    // actually do the work
  };
}
```

In this snippet is a simple example of what most functions in OpenFn look like.
The `create` function returns a function that takes state, this is an
`Operation`. The runtime using `execute` will call all Operations with `state`.
