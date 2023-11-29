---
title: Intro to the OpenFn CLI
sidebar_label: Intro to CLI
slug: /cli
---

:::info What is this tutorial?

- It's a _hands-on_ way to learn about the new OpenFn CLI. By following the
  prompts and "challenges", a developer with a bit of Javascript experience
  should be able to write, run, and debug complex, multi-step jobs with OpenFn,
  using nothing but a text editor and their terminal.
- The estimated time to finish this developer challenge is 1 to 2 hours
  (depending on your familiarity with the underlying concepts and tooling)
- If you are stuck and need help, please post in
  [community.openfn.org](https://community.openfn.org/t/about-the-job-writing-category/11/1)

:::

## Intro to the OpenFn CLI

The [@openfn/cli](https://github.com/OpenFn/kit/tree/main/packages/cli) is a
command line interface for running OpenFn workflows locally. It enables
developers to run, build, and test steps in an OpenFn workflow.

This CLI replaces [@openfn/devtools](https://github.com/OpenFn/devtools) and
provides a new suite of features and improvements, including:

- a new runtime and compiler for executing and creating runnable OpenFn jobs,
- customizable logging output,
- automatic installation of language adaptors,
- and support for the adaptors monorepo
  ([@openfn/adaptors](https://github.com/OpenFn/adaptors)) where all OpenFn
  adaptor source code and documentation lives.

These features are designed to make it easier and more convenient for developers
to use and understand OpenFn.

:::caution Looking for a way to execute jobs from OpenFn v1 locally? Use Core!

If you're looking for a way to execute jobs running on the OpenFn v1 platform,
please see the documentation for **[@openfn/core](/documentation/core)** and
[Devtools](/documentation/devtools/home).

:::


Learn more about CLI
[github.com/OpenFn/kit/](https://github.com/OpenFn/kit/tree/main/packages/cli)
