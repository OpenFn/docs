---
title: Javascript Tips
sidebar_label: Javascript Tips
---

OpenFn supports all modern JavaScript features.

This section highlights some useful JavaScript features and operators which
might help make your code cleaner. This is not meant to be an exhaustive guide,
just a pointer to some good techniques on some of the newer aspects of the
language.

### Optional chaining

JavaScript is an untyped language - which is very conveient for OpenFn jobs and
usually makes life easier.

However, a common problem is that when writing long property chains, an
exception will be thrown if a property is missing. And this happens all the time
when fetching data from remote servers.

Optional chaning allows JavaScript to stop evaluating a property chain and
return undefined as the result of that whole expression:

```js
const x = a.b?.c?.d?.e;
```

In this example, if `c`, for example, is not defined, then `x` will be given a
value of `undefined`. No exception will be thrown.

You can do this with string properties too, although the syntax is a bit
fiddlier:

```js
const x = a.b['missing-link']?.d?.e;
```

This can also be used for optional function calls (less useful in job writing
but included for completeness):

```js
const x = a.b?.();
```

You can combine optional chaning with the wonderfully named **"nullish
coalescing"** operator. This works a bit like a ternary expression or an or - if
anything to left of the operator returns `null` or `undefined`, the value to the
right will be returned.

```js
const x = a.b?.c?.d?.e ?? 22;
```

In this example, if any of the values in the chain are not defined, `x` will be
assigned a value of 22.

### Arrow functions

Arrow functions are used throughout this guide and we expect that most users are
familiar with their usage.

An arrow function is an alternative way to write a JavaScript function. There
are a few reasons why they are popular in modern JavaScript:

- They feel lightweight, with less syntax required
- They do not have a `this` scope - although this is largely irrelevant to
  OpenFn programming (and indeed most modern JS frameworks)

Arrow functions are always anonymous - they have no name - but they can be
assigned to variables of course.

```js
function upperCase(name) {
  return name.toUpperCase();
}

const getName = () => {
  return name.toUpperCase();
};
```

An arrow function can contain a single expression and no body, and will return
the expression:

```js
function getX() {
  return x;
}

const getX = () => x;
```

This pattern makes arrow functions lightweight and elegant, and aligns nicely
with functional programming paradigms.

### Rest and spread operators

The spread or rest operator `...` can be used for several purposes. It can be
quite complex to understand, but in OpenFn it has a couple of strong uses.

First, you can **"spread"** or **"apply"** the properties and value of one (or
more) objects to a new object. This is a really conveient way to shallow clone
objects.

It works a lot like `Object.assign(obj, first, second, third)`.

Here's how we shallow clone with spread:

```js
const newState = {
  ...state,
};
```

Properties are declared in sequence, so you can spread an object and then
declare more properties:

```js
const newState = {
  ...state
  data: {} // create a new data object but keep all other keys of state
}
```

You can spread multiple objects, which again will apply in order. This example
applies some default values, then overwrites with whatever is on state, then
finally overwrites the data key.

```js
const newState = {
  ...defaults,
  ...state
  data: {} // create a new data object but keep all other keys of state
}
```

Spreading like this does not affect the original object (ie, in the example
above, `defaults` and `state` are not changed), although remember that this is
only a shallow clone, and non-primitive values use pointers, not copies.

<details>
<summary>What is a shallow clone?</summary>
To shallow clone an object means to copy all the top-level keys and values of that object onto a new object.

But this ONLY applies to top-level keys. And if a value contains an object,
you're really just copying a _pointer_ to that object.

```js
const a = {
  x: 1,
  y: {
    values: [1, 2, 3]
  }
};

// declare b as a shallow clone of a
const b = {
  ... a
}

b.x = 2; // a.x is unchanged
b.y.values = []; // a.y.values is changed
b.y = 20' // a.y is unchanged
```

A deep clone means that all properties in the whole object tree are cloned.

</details>
