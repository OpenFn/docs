---
layout: post
title: Wrapping my head around jobs
authors: taylor
tags: [how-to, tips, jobs]
featured: true
---

Jobs are business processes turned into functional-style scripts. What does that
mean, how should you approach writing jobs?

<!--truncate-->

First, this is how _I_ think about jobs and what we do at Open Function Group to
try to make our job code as readable, future-proof, and concise as possible.
There are a million different ways to approach writing jobs. This is one.

## It all starts with `state`

If a job is a set of instructions for a chef (a recipe?) then the initial
`state` is all of the ingredients they need tied up in a perfect little bundle.
It usually looks something like this:

```json
{
  "configuration": {
    "hostUrl": "https://moh.kenya.gov.ke/dhis2",
    "username": "taylor",
    "password": "very-secret"
  },
  "data": {
    "type": "registration",
    "patient": {
      "age": 24,
      "gender": "M",
      "nationalId": "321cs7"
    }
  }
}
```

This might be the initial `state` for a real-time, message-triggered job. Some
source system generated a new patient payload and sent that payload to OpenFn.
The data from our source system will wind up in `state.data`. Now if my job is
meant to take this new patient registration information and use it to create a
new record in the national health record system, I'll also need to provide my
robot-chef here with a credential so they can access that system. The credential
I've specified will get put into `state.configuration` and now our "raw
ingredients" are all ready for our robot chef.

Note that even if this job was initiated by a cron trigger (e.g., "Hey chef,
prepare this recipe every Tuesday at 7pm") or by a flow/catch trigger (e.g.,
"Hey chef, prepare this recipe only when you _fail_ to make banana pancakes") it
will have an initial state.

**Every job, and every operation inside that job (think "step" in a recipe) is
called with `state` and returns `state` when it's done.**

Initial state for a cron triggered job might look like this:

```json
{
  "configuration": {
    "hostUrl": "https://moh.kenya.gov.ke",
    "apiKey": "abc123"
  },
  "data": {},
  "lastProcessedId": 321
}
```

And for a fail triggered job like this:

```json
{
  "configuration": {
    "hostUrl": "https://moh.kenya.gov.ke",
    "apiKey": "abc123"
  },
  "data": {},
  "lastProcessedId": 321,
  "error": ["Required field missing", "Patient Surname", "Line 43"]
}
```

No matter what, jobs start with state. See
["Initial and final state for runs"](/documentation/jobs/state) for a detailed
breakdown.

## It ends with `state` too

Now that we've got it in our heads that `state` is the raw ingredients you hand
to your chef when you ask them to prepare a recipe, let's look at the recipe.
Boiled down (excuse the pun) a job for loading those patients into the national
health record system might look like this:

```js
get('/api/insuranceRegistrations');
post('/api/patients', { ...someData });
post('/api/visits', { ...someData });
```

We're telling our chef to take those raw ingredients (login info for our
national health system and a chunk of information about a newly registered
patient) and do the following:

1. Find out whether this person already has a national health insurance number
2. Add this person to the patient registry (making use of some insurance data
   from step 1)
3. Add a visit record with information about this initial visit (making use of
   patient registry data from step 2)

When all of this is done, we'll not only have a new patient and visit logged in
the national health registry, but we'll also return a final `state` object with
information about what we've done that can be used in subsequent jobs. Imagine
that we want to make a cash transfer to this patient so that they can take a cab
to the next visit—we might create a job with the Mpesa adaptor that takes the
final state of this first job as its _initial state_. In this way, jobs are
composable.

But what about the complexity inside our job—in order to complete step 2, we
need some data from the insurance registry and we only get that data in step 1.
Crucially, each operation (again, think "step" in a recipe) takes state and
returns state. In effect, the OpenFn execution pipeline simply calls all of your
action methods _with state_, passing it along from one operation to the next,
waiting for each to finish and using the output from the first as the input for
the second.

While you may write your `get`, `post`, `post` job as it's show above, the way
it's handled by OpenFn is actually more like:

```js
return get('/api/insurance', { ...useDataFromState })(state)
  .then(state2 => post('/api/patients', { ...useDataFromState2 })(state2))
  .then(state3 => post('/api/visits', { ...useDataFromState3 })(state3));
```

Each of these operations returns a function which _takes state_ and returns
state. This means that _within_ a job, you are essentially modifying `state`,
creating/manipulating records in external systems, and returning `state`.

It opens up a really interesting world of possibility for data manipulation,
cleaning, or transformation. Consider what we might do _after_ we get data from
the insurance registry but _before_ we create that patient in the national
patient registry:

```js
get('/api/insuranceRegistrations');
fn(state => {
  console.log(state.data); // let's look at the response from the insurance API.
  state.data.people.filter(p => p.HasActiveInsurance); // and modify the payload to only retain those with active insurance
  return state; // before returning state for our create patients operation.
});
post('/api/patients', { ...someData });
post('/api/visits', { ...someData });
```

We might even need to do some manipulation _before_ we send a `get` request to
the insurance registry. That's no problem:

```js
fn(state => {
  state.data.registrationType = state.data.age > 18 ? 'Adult' : 'Minor';
  return state; // before returning state for our create patients operation.
});
get('/api/insuranceRegistrations', {
  query: { type: dataValue('registrationType') },
});
fn(state => {
  state.data.people.filter(p => p.HasActiveInsurance);
  return state;
});
post('/api/patients', { ...someData });
post('/api/visits', { ...someData });
```

Here, we've added a step to modify the initial `state` before we send that first
`get` request to the insurance API. We determine if the new patient is a minor,
and then use that newly calculated data to apply a query to the insurance API
request.

Using `fn(state => state)` or `alterState(state => state})` is incredibly
useful, because it allows us to separate our data manipulation, calculation, and
raw Javascript (which will be harder for low-tech users to understand) from our
external actions. Let's explore that some more.

## Keeping external actions clean

Inside each operation we could do some data manipulation... all of these
operations, across the many different language packages, allow for inline data
manipulation like this:

```js
get('/api/insuranceRegistrations', {
  query: state => {
    console.log("I'm doing some fancy stuff here.");
    return { type: state.data.age > 18 ? 'Adult' : 'Minor' };
  },
});
post('/api/patients', {
  body: {
    name: state => {
      return `${state.data.firstName}${state.data.lastName}`;
    },
  },
});
```

But if you're interacting with both technical and non-technical users, it makes
for harder to read jobs. Consider the following instead:

```js
// Perform calculations...
fn(state => {
  // Create several new calculated attributes...
  state.data = {
    ...state.data,
    type: state.data.age > 18 ? 'Adult' : 'Minor',
    fullName: `${state.data.firstName}${state.data.lastName}`,
  };

  return state;
});

// Get insurance data...
get('/api/insuranceRegistrations', { query: { type: dataValue('type') } });

// Create new patient...
post('/api/patients', { body: { name: dataValue('fullName') } });
```

Since we often have non-developers creating the external operations like `get`
and `post` above, this pattern makes our handoff easier. The business analyst
can say "I need to have a registration `type` field available for use when
querying the insurance registry." A developer might respond, "Great! How do you
want to calculate it... I've got all of Javascript at my fingertips." That dev
can then make as many API calls as they'd like, perform as many
`map.reduce(...)` calls as their heart desires to complete that calculation...
so long as they make sure the hand off `state` to the business analyst's
operation with a valid `state.data.type` attribute.

A final benefit of this approach is that it becomes much easier to generate job
scripts from Google Sheets. Our implementation team frequently works with
non-technical clients to generate field maps that look like this:

| Path to Source Data | Destination Field |          Auto-generated syntax (using concat) |
| ------------------- | ----------------- | --------------------------------------------: |
| patient.fullName    | name              | field('name', dataValue('patient.fullName')), |
| patient.age         | age               |       field('age', dataValue('patient.age')), |
| ???                 | type              | plz help us calculate 'type' based on x, y, z |
| patient.sex         | gender            |    field('gender', dataValue('patient.sex')), |

We can then copy and paste the syntax generated in that final column directly
into OpenFn and update the bits that need some sort of custom code, writing an
`fn(state)` block or an `alterState(state)` block before the external action.

## Wrapping up

Some key takeaways here:

1. Jobs start and end with `state` — some raw ingredients that will be used in a
   recipe.

2. Jobs are lists of `operations` — steps in a recipe that _each_ take `state`,
   _do some stuff_, and then return `state`.

3. As you move through the steps in a job, you are modifying `state`. Each
   subsequent step begins with the final state from the previous step.

4. It may be useful to keep all your custom Javascript data cleaning,
   manipulation, etc., in a separate operation (e.g., `fn(state)` or
   `alterState(state)`) so that your external actions are clean and easy to
   follow.

Finally, taking a close look at how developers write those `fn(state)` steps
tells us a lot about what the job execution pipeline is really doing:

```js
// here, "fn" is a function that takes state and returns state
fn(state => {
  console.log("I'm doing some cool stuff.");
  //  I might create some new attribute...
  state.myNewThing = true;

  // And ALWAYS return state for the next operation to use...
  return state;
});
```

I hope this gives you sense of how I think about structuring jobs and building
data pipelines or automation flows on OpenFn. We recognize that this stuff is
complex, and are pushing our new documentation regularly, so please do get in
touch if you think there are ways we could improve this type of
walk-through/helper article.

Happy integrating,

Taylor
