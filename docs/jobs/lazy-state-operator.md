---
sidebar_label: Lazy State Operator
title: The Lazy State Operator
---

## The Lazy State Operator

:::tip Experimental Feature

The Lazy State operator is new to OpenFn as of April 2024. It is still
considered an experimental feature. But it works great, and we encourage you to
use it!

If you've got any feedback, issues or suggestions around the Lazy State
Operator, we'd love to hear from you on
[Community](https://community.openfn.org)! Or you can raise an issue on
[GitHub](https://github.com/openfn/kit/issues).

:::

The Lazy State Operator is a shorthand syntax that makes it easier to read state
when passing data into an operation.

Instead of writing `state.data` to access something on state, you can use `$`,
like this:

```js
get($.data.url);
```

The `$` ensures that the value passed to the operation will be resolved at the
correct time. Think of it like passing a path to some part of state, rather than
passing the value of that path.

What's nice about this is that you can basically ignore the previous section
entirely and not think too much about state evaluation. Just read from `$` like
your state object and the OpenFn runtime will resolve the value correctly at
run-time.

The `$` symbol is really just syntactic sugar for `(state) => state` (in most
cases, we just do a string replace when compiling your code). These two
statements behave in exactly the same way:

<!-- prettier-ignore -->
```js
get($.data.url);
get((state) => state.data.url);
```

We call it "lazy state" because the reference will be resolved by the runtime
engine immediately before its used. This bypasses a lot of the asynchronicity
problems of Javascript which are discussed in
[Reading State Lazily](#reading-state-lazily).

:::tip $ Only works within Operations

`$` only works when used inside an expression that's passed to an operation. In
other words, you can only use it when you could write `(state) => state` instead
(like the example above).

:::

## Usage Examples

The following short code snippets show some examples of how the Lazy State
Operator can be used. Each example can be re-written without `$`, but with it
the syntax is shorter, more readable and more expressive.

Basic usage is simply to pass state into an operation:

```js
upsert('patient', $.data.patients[0]);
```

You can use it inside an object (so long as that object is passed to an
operation):

```js
create('agent', {
  name: $.patient.name,
  country: $.patient.country,
});
```

You can use it inside a string template:

```js
get(`/patients/${$.patient.id}`);
```

Or inside other expressions, like concatenation:

```js
create({
  name: $.patients[0].first_name + ' ' + $.patients[0].last_name,
});
```

Or mathematics:

```js
create({
  profit: $.report.revenue - $.report.expenses,
});
```

You can use it when mapping data structures:

```js
create('user', {
  countryCode: countries[$.location.country],
});
```

And you can use it in nested operations like, with `each()`:

<!-- prettier-ignore -->
```js
each($.data.patients,
  post(`patients/${$.data.patient.id}`, $.data.patient)
);
```

## $ is not state

The `$` operator is **not** an alias for `state`.

It cannot be used in place of the `state` variable. It cannot be assigned to, or
be on the left hand side of an assignment, and can only be used inside an
argument to a function

This also means that Lazy State Operator can only be used to READ from state. It
cannot be used to assign to state directly.

These examples are all errors:

```js
❌ const url = $.data.url;
get(url);

❌ get(() => $.data.url);

❌ $.data.x = fn();

❌ fn(state => {
  $.data.x = 10;
});
```

<details>
<summary>Compilation rules for advanced users</summary>

How does the Lazy State Operator work? The "magic" is in the compiler.

Simply put, whenever the compiler sees `$` in your code, it replaces it with
`(state) => state`. Like this:

```
get($.data.url) // compiles to get((state) => state.data.url)
```

In practice, the rules are a little more complicated than that. When seeing a
`$` operator, the compiler will first check that `$` hasn't been declared as a
variable or parameter. If it has, it'll ignore it entirely.

But if the `$` is deemed to be a State Operator, the compiler will first replace
the `$` symbol with `state`, then find the operation which is being called, then
wrap the argument in an arrow function (if it isn't already).

```
get({ url: $.data.url }) // compiles to get((state) => { url: state.data.url })
```

This "hoisting" of the arrow function enables more complex and interesting
expressions to be used with lazy state, like templated string literals or
dynamic object lookups.

If you're curious (or need to troubleshoot something) you can use the
`openfn compile` command in the CLI to see the compiled code, which will tell
you how the compiler is treating your State operators.

</details>
