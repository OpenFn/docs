---
title: Google Summer of Code
---

## Overview

OpenFn provides data integration, automation, and interoperability tools that
are used to scale the world's most promising health and humanitarian
interventions. UNICEF, the World Health Organization, the IRC, and the Wildlife
Conservation Society are just a few of the many organizations that drive
efficiency via OpenFn software. With an open-core model, we've got hosted and
locally-deployed solutions in 40+ countries, and this summer you'll get the
chance to work on leading-edge ETL tools built in Elixir/Erlang, and NodeJs. If
learning about APIs, data transformation, and middleware/automation layers
excites you, OpenFn is the place to be.

## Mentors

This summer, you'll get the chance to work with some of the core team at OpenFn,
including [Chaiwa Berian](https://openfn.org/team#chaiwa),
[Mamadou Cissé](https://openfn.org/team#mamadou),
[Stu Corbishley](https://openfn.org/team#stuart), and
[Taylor Downs](https://openfn.org/team#taylor). They're based in Zambia,
Senegal, South Africa, and the United Kingdom, respectively. Between them,
they've got almost 50 years of experience working in software and... a PhD in
Computer Science. (Hey thanks, Mamadou 😉.)

## Project Ideas

### OpenFn/microservice Extension

OpenFn projects (see [`project.yaml`](portability)) can be deployed on the
platform _or_ on microservice, a Phoenix web application. This summer, GSOC
interns will have the opportunity to build out the front-end for this community
supported web app.

Difficulty level: `medium`

You'll be working in [`Docker`](https://docs.docker.com/get-started/),
[`Phoenix`](https://www.phoenixframework.org/),
[`Elixir`](https://elixir-lang.org/) and [`Erlang`](https://www.erlang.org/).

### OpenFn/engine Extension

Engine is part of the common FOSS toolkit that is used both by `microservice`
and `platform`. It's the software which is responsible for actually executing
calls to `OpenFn/core` and doing neat things like streaming logs back to the
requester. If you're keen on really understanding how Elixir and Erlang work,
getting your hands dirty with OTP apps, engine is where you want to be working
this summer.

Difficulty level: `high`

You'll be working in [`Elixir`](https://elixir-lang.org/) and
[`Erlang`](https://www.erlang.org/).

### OpenFn/core Metrics

At the bottom of it all, whether we're providing secure patient data transfer
services for ministries of health or making child protection case referrals for
UNICEF, OpenFn relies on spinning up NodeVMs, executing code inside those VMs
safely, and then shutting the down. Welcome to the core.

This summer you could have the chance to dig into that _sandboxed-VM-in-a-VM_
magic, learn loads about NodeJs, and provide end-users with better metrics on
exactly what kinds of compute they're using to "get the job done".

Difficulty level: `medium`

You'll be working in [`NodeJs`](https://nodejs.dev/learn) and
[`Typescript`](https://www.typescriptlang.org/).

### Adaptors 2.0

Adaptors are the API wrappers that allow OpenFn users to quickly and easily work
with the most common APIs in international development. They provide an
interface for connecting to DHIS2, ODK, CommCare, OpenMRS, etc., etc.

They're NodeJs modules, but in order to make the adaptor development and _use_
process better, we want to bring them into the future with Typescript. Adaptors
should tell you how to use them while you use them.

Check out this thread on
[community.openfn.org](https://community.openfn.org/t/discussion-regarding-adapter-2-0-project)
for more information.

Difficulty level: `medium`

You'll be working in [`NodeJs`](https://nodejs.dev/learn) and
[`Typescript`](https://www.typescriptlang.org/).
