---
title: Core
---

:::caution Core reaching EOL in 2023.

OpenFn/core is currently still being used by the v1 platform (www.openfn.org)
but is reaching end-of-life in 2023.

:::

## What is core?

Core is the central job processing program used in the OpenFn platform. It's
what actually executes `jobs` with `state` and `adaptors` to do work for
governments and NGOs all over the world.

## Where is it used?

Core is used in OpenFn v1 (the web platform) and by developers who want to test
job execution on their local machines. It's _not_ used in Lightning (OpenFn v2)
which instead makes use of the new runtime. For a local developer experience
using the new runtime, check out [CLI](./cli.md).

## Why might I want to use it now?

If you've got jobs running on OpenFn v1 and want to test them locally, core will
give you the exact same job running experience as you see on the web. This can
be incredibly helpful for debugging.

:::tip Using the new CLI.

If you're a new OpenFn user and want to build or test jobs for Lighting (v2) and beyond in 2023, use the new [CLI](./cli.md) instead!

:::

## How do I use it?

Check out the official documentation on
[Github](https://github.com/OpenFn/core).

The tl;dr: is that you execute jobs from the command line by passing in an
expression, state, and the path to an adaptor.

```sh
npm install @openfn/core
core execute -l ../language-http.Adaptor -e ./some-exprsesion.js -s ./some-state.json
```

The full options are:

```sh
-l, --language    resolvable language/adaptor path                [required]
-e, --expression  target expression to execute                    [required]
-s, --state       Path to initial state file.                     [required]
-o, --output      Path to write result from expression
-t, --test        Intercepts and logs all HTTP requests to console
```
