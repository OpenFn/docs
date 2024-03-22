---
title: Javascript Tips
sidebar_label: Javascript Tips
---

OpenFn supports all modern JavaScript features.

This section highlights some useful JavaScript features and operators which
might help make your code cleaner. This is not meant to be an exhaustive guide,
just a pointer to some good techniques on some of the newer aspects of the
language.

### Variables: var vs let vs const

JavaScript gives you three different ways to declare variables, and this can be
a bit confusing.

- `var` is a variable that can have its value reassigned. You can re-declare a
  `var` multiple times.
- `let` is basically the same as a var, but cannot be redeclared and has subtly
  different scoping rules.
- `const` is used for variable whose values do not change.

It doesn't really matter which style you use (except perhaps if you try to
assign to a `const`).

Most OpenFn jobs are written in quite a functional style anyway - you may find
you don't even need to declare variables.

<details>
<summary>What is functional programming?</summary>
Functional programming is a style of programming, increasingly popular in modern Javascript.

Broadly, the idea is to minimize the usage of control flow statements (like
`if/else`,`for`) and instead use chains of functions. In functional programming
we pass data through a pipeline to get the result we want sound familiar?).

```js
const items = [10, 109, 55];

// Imperative JS
const transformedItems = [];
for (const i of items) {
  if (i < 100) {
    transformedItems.push(i * 2);
  }
}

// Functional js
const transformedItems = items.filter(x => x > 100).map(x => x * 2);
```

Functional programming tends to be more terse and condensed than regular,
imperative programming. This is a good and bad thing - but if you're used to the
style, it tends to be very readable and translates well across languages.

</details>

Most modern, idiomatic JavaScript is written with `const` and `let`. This can
actually make your code more readable and intentional, and the rules are
actually pretty simple:

- Use a `const` if you don't want a variable value to change.
- Use a `let` if you expect variable value to change.

This can get a little tricky with objects and arrays. We can assign an object to
a const, but still change the properties of the object. The same for arrays.
This is all to do with pointers and how JavaScript stores variables - the key to
it is that you're not assigning a new value to the variable, but you are
modifying the _contents_ of the variable.

Check these examples:

```js
// Example 1: Objects
const data = {};

// We can mutate the object here
// The data variable is still referencing the same object
data.name = 'OpenFn';

data = { name: 'Lightning' }; // This throws a runtime error because we are re-assigning the variable!

// Example 2: Arrays
const ids = [1, 2, 3];

// We can call functions on the ids array, which will mutate the array's contents
ids.push(4);
ids.pop();

// But we cannot re-assign the variable

ids = [4, 5, 6]; // This throws a runtime error because we are re-assigning the variable!
```

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

:::tip Problems returning an object?

Always wrap objects in brackets when returning an object from an arrow
expression:

```
post('wwww', () => ({ id: 'a', name: 'adam' }))
```

When Javascript sees a brace `{` after an arrow, it expects to see a block of
statements, not an object. Wrapping the object in brackets tells Javascript to
parse an expression instead of a block.

:::

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
