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

1. Using the [OpenFN Platform](www.openfn.org/how)
2. Using [DevTools](https://docs.openfn.org/documentation/devtools/home) locally

In this article we'll be covering both of them.

## Definitions

Before going any further, let's take a closer look at the terminology and
meaning of the OpenFN specific tools we use in this blog.

- Job: a job defines the specific series of tasks or database actions to be
  performed when a triggering message is received (even-based) or a
  pre-scheduled (and recurring) time is reached.
  [Learn more](https://docs.openfn.org/documentation/build/jobs)
- Trigger: Triggers are responsible for starting job runs automatically. They
  come in 4 types. The most common are "message filter" triggers, but there are
  also "cron" triggers, "flow" triggers, and "fail" triggers.
  [Learn more](https://docs.openfn.org/documentation/build/triggers)
- Credentials: Credentials are used to authorize connections to destination
  systems. In the future, our adaptors will use credentials to fetch meta-data
  from source and destination applications and make the job writing process
  easier. [Learn more](https://docs.openfn.org/documentation/build/credentials)
- Adaptors: An adaptor is an open-source Javascript module that provides OpenFn
  core users with a set of operations that help communicate with a specific
  external system. In the past, we often referred to them as "language
  packages". [Learn more](https://docs.openfn.org/documentation/build/adaptors)
- Core: Core is the central job processing program used in the OpenFn platform.
  It creates an isolated Node VM, passes in state and an expression, then runs
  the expression in this limited access Node VM.
  [Learn more](https://github.com/OpenFn/core)
- DevTools is a set of developpers tools. (Adaptors and Core) built by OpenFN.
  They allow to do all the job writing and execution locally without using the
  OpenFN Cloud Platform.
  [Learn more](https://docs.openfn.org/documentation/devtools/home)

## Anatomy of a Job

Jobs are usually simple programs written using the OpenFN DSL, that takes data
as input, process it and returns an output. The input data is defined in a json
file usually called `state.json`.

### Let's meet state.json

Here is a sample state.json file:

```json
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
    "countries": [
      {
        "name": "England",
        "capital": "London"
      },
      {
        "name": "Senegal",
        "capital": "Dakar"
      }
    ]
  }
}
```

The most important thing to notice in a state file is that it's composed of two
main parts, the `configuration` part and the `data` part.

- configuration is the part where the credentials of the destination system have
  to be written.
- data is a json object containing the data that needs to be processed and sent
  to the destination system.
