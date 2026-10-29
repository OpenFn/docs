---
title: Deployment Instructions
sidebar_label: Instructions
---

## Getting Started

For deployment instructions please see the
[Getting Started](https://openfn.github.io/lightning/readme.html#getting-started)
section in the OpenFn developer docs site.

:::info

The [developer docs site](https://openfn.github.io/lightning) is built
automatically from the
[Lightning GitHub repository](https://github.com/openfn/lightning). You're
welcome to simply browse the repo, if you'd prefer.

:::

## General Considerations

[Deployment](https://openfn.github.io/lightning/deployment.html) has information
on encryption, basic worker configuration, mail, storage, environment variables,
and much more.

[Workers](https://openfn.github.io/lightning/workers.html) has more information
on workers and networking.

[Adaptors](https://openfn.github.io/lightning/adaptors.html) has more
information on adaptors and using local registries.

## Benchmarking

[Benchmarking](https://openfn.github.io/lightning/benchmarking.html) contains
instructions for k6 load testing.

## Upgrading

Upgrading your OpenFn deployment is often as simple as modifying the image tag
in your manifest for `openfn/lightning` and `openfn/ws-worker` but depends
entirely on [how you've chosen to deploy](/deploy/options.md). (You may run
migrations manually, for example, or your deployment tooling may do this for
you.)

In short, you should always:

- Backup your database
- Read the
  [Lightning changelog](https://openfn.github.io/lightning/changelog.html) and
  the
  [Worker changelog](https://github.com/OpenFn/kit/blob/main/packages/ws-worker/CHANGELOG.md)
- Ensure your selected Lightning and Worker versions are compatible
- Run the database migrations.

:::tip Core Team Support

Contributors with an active support agreement will get access to new builds
still under security embargo and are upgraded according to their SLAs. If you're
not a contributor with an active support agreement, please contact your DevOps
team for more information about how to upgrade your instance.

:::
