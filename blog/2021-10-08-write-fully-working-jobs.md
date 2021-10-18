---
layout: post
title: 'Automate Data Pipelines With Jobs Using Core And Adaptors'
author: Elias W. BA
author_url: https://github.com/elias-ba
author_image_url: https://avatars.githubusercontent.com/elias-ba
tags: [tips, jobs, core, adaptors, tutorial]
image: /img/automate.jpg
featured: false
---

So, you have two systems A and B which you want to exchange data which maybe
need transformations. You don't necessarily want to waste hours of programming
writing middleware to do it. In this article, I explain how you can use OpenFN
jobs to solve your problem very efficiently and very easily.

<!--truncate-->

![automate](/img/automate.jpg)

## So, what the heck are jobs ?

Jobs are very easy to write and very powerful integration scripts that allow you
to automate the integration of almost any system that exchanges data using the
OpenFN tooling and platform.

Jobs are written using a Domain Specific Language (DSL) based on JavaScript and
created by OpenFN. That DSL is data centric and inspired by functional
programming features. It's very handy for processing chunks of data, which is
very important in integration workflows.

There are two way of writing Jobs:

1. Using the [OpenFN Platform](https://www.openfn.org/how)
2. Using [DevTools](/documentation/devtools/home) locally

In this article we'll be covering both of them.

## Definitions

Before going any further, let's take a closer look at the terminology and
meaning of the OpenFN specific tools we use in this blog.

- Job: a job defines the specific series of tasks or database actions to be
  performed when a triggering message is received (even-based) or a
  pre-scheduled (and recurring) time is reached.
  [Learn more](/documentation/build/jobs)
- Trigger: Triggers are responsible for starting job runs automatically. They
  come in 4 types. The most common are "message filter" triggers, but there are
  also "cron" triggers, "flow" triggers, and "fail" triggers.
  [Learn more](/documentation/build/triggers)
- Credentials: Credentials are used to authorize connections to destination
  systems. In the future, our adaptors will use credentials to fetch meta-data
  from source and destination applications and make the job writing process
  easier. [Learn more](/documentation/build/credentials)
- Adaptors: An adaptor is an open-source Javascript module that provides OpenFn
  core users with a set of operations that help communicate with a specific
  external system. In the past, we often referred to them as "language
  packages". [Learn more](/documentation/build/adaptors)
- Core: Core is the central job processing program used in the OpenFn platform.
  It creates an isolated Node VM, passes in state and an expression, then runs
  the expression in this limited access Node VM.
  [Learn more](https://github.com/OpenFn/core)
- DevTools is a set of developpers tools. (Adaptors and Core) built by OpenFN.
  They allow to do all the job writing and execution locally without using the
  OpenFN Cloud Platform. [Learn more](/documentation/devtools/home)

## Anatomy of a Job

Jobs are usually simple programs written using the OpenFN DSL, that takes data
as input, process it and returns an output. The input data is defined in a json
file usually called `state.json`.

**NB**: The naming of the files are just a convention that we strongly recommend
to follow as far as possible but not an obligation. One can name the files
however they want.

Below we'll see the different files needed to write a job and their contents.

### The `state.json` file

Here is a sample state.json file:

```json
// state.json
{
  "configuration": {
    "host": "some nice url",
    "username": "a fancy username",
    "password": "a super secret password"
  },
  "data": {
    "persons": [
      {
        "name": "Elias W. BA",
        "country": "Senegal"
      },
      {
        "name": "Taylor Downs",
        "country": "London"
      }
    ],
    "capitals": [
      {
        "name": "Dakar"
      },
      {
        "name": "London"
      }
    ]
  }
}
```

The most important thing to notice in a state file is that it's composed of two
main parts, the `configuration` part and the `data` part.

- configuration is the part where the credentials of the destination system have
  to be written. If no credentials are required, then it should just be an empty
  object (`configuration: {}`). Something important to notice is that the
  credentials depend on the destination system and the adaptor used to query
  that system. It's important to read the documentation of the adaptor to have
  informations about the names of the credentials and their values.
- data is a json object containing the data that needs to be processed and sent
  to the destination system.

### expression.js

This the main file of a job and where all processing happens. It contains
"simple" programs written using the OpenFN DSL for writing jobs. The principle
of this DSL is to have a small function which takes a state as input (remember
the `state.json` file in the previous section) does data transformations /
manipulations and returns a new state. Find an example below:

```javascript
fn(state => {
  ...
  return newState;
});

```

Our above example uses a `fn` block that takes a `state` and returns another
state that we named `newState` wich the result of the transformations /
manipulations brought to the initial state.

These blocks depend on two of things:

- the API exposed by the adapter we are using, for example, we can use the `sql`
  block exposed by the
  [`language-postgresql`](https://github.com/OpenFn/language-postgresql) adapter
  to extract data directly from the state and insert it into a database sql
  postgres data.

  ```javascript
  sql(
    state =>
      `INSERT INTO untitled_table (name, the_geom) VALUES ('` +
      dataValue('form.first_name')(state) +
      `', ST_SetSRID(ST_Point(` +
      dataValue('lat')(state) +
      `, ` +
      dataValue('long')(state) +
      `),4326))`,
    { writeSql: true, execute: true }
  );
  ```

  Note the presence of the datavalue keywords which are other functions
  available in the DSL of OpenFN and which allow you to access a data in the
  state by giving the json path. In the second part of this tutorial you will
  see how we can use all of this in practice, but the most important thing for
  now is to get to know it.

  - the functions exposed by the DSL itself. Actually, every job expression can
    access some functions like `fn`, `alterState`, etc. Most of the time `fn` is
    the main function we use to start a block.

Now let's see an example of simple `expression.js` file that contains a `fn`
block. We'll be using our previous `state.json` file and retrieve all countries
from persons and all capitals from capitals and put these arrays inside state
and return it. A simple and not relevant job but it allows us to see how it can
look like.

```javascript
// expression.js
fn(state => {
  const countries = state.data.persons.map(person => person.country);
  const capitals = state.data.capitals.map(capital => capital.name);
  return { ...state, data: { countries, capitals } };
});
```

### output.json

The `output.json` file is the file that is generated after compiling and
executing our job. It contains the job execution result and that result depends
on what the job was doing. We do not create that file, it's generated after
executing the job using `core` and sometimes it's very important. In big
workflows where we have a job that executes and passes its results to another
jobs and so on, the `output.json` of one job can be the `state.json` of another
and so on.

See below the corresponding `output.json` of our previous job expression after
execution.

```json
{
  "countries": ["Senegal", "London"],
  "capitals": ["Dakar", "London"]
}
```

## Run a job using `core`

Now that we know how jobs work and the main components, let's try to run one
using `core`.

- First of all, we need to install `core` and chose an adaptor. For this example
  we'll be using `language-common` adaptor wich the most basic adaptor. For that
  we'll create a working directory and clone the adaptor inside of it. To do
  that, open a terminal session and copy and paste the below code without the
  `$` sign:

```bash
$ cd ~
$ mkdir example-job
$ npm install -g @openfn/core
$ git clone https://github.com/OpenFn/language-common.git .
```

NB: Make sure you have [`npm`](https://nodejs.org/en/) and
[`git`](https://git-scm.com/) installed.

Now we have everything we need to create our sample job and run it. Open your
preferred editor (we recommend Visual Studio Code) inside the `example-job`
folder and create 2 files named respectively: `state.json` and `expression.js`.

- Inside `state.json` paste the below code:

```json
{
  "configuration": {},
  "data": {
    "persons": [
      {
        "name": "Elias W. BA",
        "country": "Senegal"
      },
      {
        "name": "Taylor Downs",
        "country": "London"
      }
    ],
    "capitals": [
      {
        "name": "Dakar"
      },
      {
        "name": "London"
      }
    ]
  }
}
```

- Inside `expression.js` paste the below code:

```javascript
fn(state => {
  const countries = state.data.persons.map(person => person.country);
  const capitals = state.data.capitals.map(capital => capital.name);
  return { ...state, data: { countries, capitals } };
});
```

Now open your terminal again and make sure you're still in the `example-job`
folder (`$ cd ~/example-job`). Copy and paste the below code to execute our job
using `core`.

```bash
$ core execute -l ./language-common -e expression.js -s state.json -o output.json
```

Now, if you can see in your terminal something like this

```
╭─────────────────────────────────────────────╮
│ ◲ ◱  @openfn/core#v1.4.3 (Node.js v14.17.6) │
│ ◳ ◰           @openfn/language-common@1.6.1 │
╰─────────────────────────────────────────────╯
Finished.
```

that means you successfully wrote and execute your very first OpenFN Job using
`core` and `language-common` 🎉🥳👏. In the part 2 of this tutorial, we'll dig
deeper in job writing using more interesting adaptors like `language-postgresql`
or `language-salesforce`.

## Conclusion

We come to the end of the first part of our tutorial on how to write OpenFN
jobs. In this part the most important part has been to understand how jobs work
and what constitutes them. In the second part we will now take a concrete use
case and try to write jobs that correspond to these situations. We will also see
how to do all this on the [OpenFN platform](https://www.openfn.org). See you
next time 🤞✌️👋
