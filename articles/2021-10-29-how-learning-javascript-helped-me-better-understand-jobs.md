---
layout: post
title: How learning JavaScript helps me better understand OpenFn jobs
authors: aicha
tags: [javascript, tips, jobs, learning]
featured: true
---

OpenFn automation happens via [jobs](/documentation/build/workflows) which
define specific steps ("operations") that OpenFn should perform. They're written
in a basic scripting language that runs on top of (and has full access to)
**Javascript**. A basic understanding of Javascript will take your job writing
on OpenFn to the next level. To improve my limited knowledge of JavaScript, I
have been taking Codecademy's
[Introduction to JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript).

<!--truncate-->

In this post we'll discuss:

1. Arrow functions
2. Falsy values
3. Other short-hand notation

Keep reading for all the important learnings I have taken from just the first
four modules!

## What is that little `=>` arrow?

Javascript allows us to create _functions_ which take _arguments_ and _do stuff_
with them. Most times, function declaration in Javascript looks like this:

```js
function getAge(dateString) {
  if (!dateString) return;

  const today = new Date();
  const birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
```

This was simple enough for me to follow. We are declaring a function,
`getAge()`, which has the steps to calculate a person's age and can be easily
reused throughout the job.

But other times, function writing looks like this:

```js
const getAge(dateString) => {
  if (!dateString) return;
  // and so on...
}
```

In OpenFn, you're often writing unnamed functions that take `state` as their
only argument and you use them right away. See how concise writing and using a
function can be with the arrow:

```js
upsert('tbl_study', 'study_id', {
  study_id: state => state.studyIDMap[state.formType],
});
```

These **`arrow functions`** confused me when reading through jobs. I've learned
that, for the most part, they can be thought of as short-hand notation which
removes the need to type out `function` for every function declaration.

:::tip

MDN has a great explanation
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
Tl;dr: "An arrow function expression is a compact alternative to a traditional
function expression, but is limited and can't be used in all situations."

:::

Further, we can make the code even more concise by also removing the
parenthesis, curly braces, and the return keyword when certain criteria are met.
In the code above, the parenthesis are omitted because there are no parameters,
and the curly braces and return keyword are omitted because the function body is
composed of a single-line block. As you can see, there are a variety of ways to
write functions and this course is helping me better recognize them. Some key
terminology here is: `function expression`, `arrow function`,
`concise function`, `anonymous function`, and `implicit returns`.

## Falsy values

During the [mapping](/adaptors/salesforce/#mapping-and-design-considerations)
phase of integration design, we often discuss how each answer choice for
**picklist** values should map from the source system to the destination system.
Sometimes the mapping is simple but other times, there is an extensive list of
possible choices that can be found in the
[message](/documentation/get-started/terminology/#message) and not all are
relevant to the destination system. Then the question is, **how should the job
handle values which are not explicitly mapped?**

Sometimes we hear clients say to "ignore" those values. **But what does it
really mean to "ignore" a value?** Should we set it to `0`? An empty string? How
about `null`, `undefined` or `NaN`? In Javascript these are all `falsy` values.

:::tip

MDN is great for falsy values too! Check their explanation out
[here](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

:::

Determining what is really meant here is important and the value selected has
different implications depending on the system.

Take this sample mapping for different districts in Conakry. The value left of
the colon is from the source system and the value to the right is for the
destination system.

```javascript
const districtMapping = {
  Ratoma: 'RT',
  Kaloum: 'KL',
  Dixinn: 'DX',
  Matam: 'MA',
  Matoto: 'MT',
  Other: undefined,
};
```

If the destination system is Salesforce, this mapping would not upload "Other"
to Salesforce. However if "Other" mapped to an empty string instead, this would
upload the empty string to Salesforce. **This distinction is especially
important in cases where we are overwriting existing data.** For instance, if a
student previously lived in Ratoma and then moved to an unknown district marked
as "Other", `undefined` _would not_ update the student's district in Salesforce
but the empty string would. Both of these are falsy values but have different
meanings in Salesforce.

How about if the message includes a value for a district that _is not_ in the
mapping? Such as "New York". Should the job default to `undefined`? Or `null`?

These questions are just a few examples of how understanding `falsy` values in
Javascript can make it easier to implement the best mapping for the real-world
use case.

## Short-circuit evaluation, template literals, and all the short hand that used to confuse me

**Short-circuit evaluation**

When we are syncing forms to a database, we sometimes expect different versions
of the same form with fields present one version but not the other. One way to
mitigate this discrepancy is by submitting a dummy value for the field whenever
it is missing in the message. I just learned the fastest way to add this code to
my jobs! For example, the code below will ensure that `household_id` always has
a value in the destination system: if `survey_info/household_id` is present in
the message this will be the assigned value, otherwise it will assign the dummy
value `state.data.body._id`.

```js
household_id: state.data.body['survey_info/household_id'] || state.data.body._id,
```

**Template literals**

Like the arrow discussed above, the "dollar sign" was another symbol that often
confused me. But template literals are actually very straightforward. They
increase the readability of the code and make it easier to see what the
resulting string will be. Wrap your template in the backtick (\`) symbols and
then each variable in `${}`.

```js
const sign = '$';
console.log(`The ${sign} isn't so confusing!`);
```

## Higher-order functions & iterators

The most challenging module in the course covered **higher-order functions**.
These are defined as **functions that accept other functions as arguments and/or
return functions as output.** But why are these important and how are they used
in OpenFn jobs? It turns out we use them quite alot! The code below is an
example from an existing integration with the field names replaced.

```js
const participantsToUpdate = state.data.json.filter(data =>
  state.idList.includes(data.id)
);
const participantsToCreate = state.data.json.filter(
  data => !state.idList.includes(data.id)
);
```

This code is using a built-in JavaScript method that **helps us iterate on
arrays to manipulate elements and return values.** The `.filter()` method is
being used to return a new array after filtering out certain elements from the
original array. We have declared two variables to store the new arrays:
`participantsToUpdate` and `participantsToCreate`. Participants whose ids are
existing in the destination system (or who are in the `idList` array) are added
to `participantsToUpdate`, and any remaining participants are added to
`participantsToCreate`. This filtering helped us perform the correct operations
on each participant type. For instance, later in the job, we use the filtered
arrays to only overwrite a participant's `reportNumber` field if it is a new
participant. `.filter()` is just one of many higher-order functions that power
OpenFn jobs.

## Objects & job mappings

The final lesson was on objects and key-value pairs--something used in almost
every OpenFn job! The result of the design and mapping phase of requirements
gathering is almost always a mapping document which includes key-value pairs in
plain English. These specifications are then translated to JavaScript via
**_objects_**. The code below is a snippet of an object which captures the
key-value pairs for states in the US.

```js
const stateMapping = {
   AK: 'ALASKA',
   AZ: 'ARIZONA',
   AR: 'ARKANSAS',
   CA: 'CALIFORNIA',
   ....
```

The value left of the colon is how the state is represented in the source
system, and the value right of the colon represents how OpenFn will send the
data to the destination system. This mapping process is key to integration
design. Learn more about mappings
[here](/adaptors/salesforce/#mapping-and-design-considerations).

:::tip

MDN has more details on objects
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
Tl;dr: "The Object class represents one of JavaScript's data types. It is used
to store various keyed collections and more complex entities."

:::

## Next steps

I'm well on my way to becoming a better job reader and writer. Here are some
next steps:

1.  Understand `fn(state)` and how `state` can be manipulated in OpenFn jobs.

2.  Explore what's available on the JavaScript docs
    [site](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

3.  Sign up for the next level JavaScript course.
