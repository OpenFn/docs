---
title: Microservice
---

:::important

We're still in the process of migrating the docs for devtools over here.

In the meantime, check out https://openfn.github.io/microservice/

:::

## Introduction

Similar to `platform`, OpenFn/microservice runs on `project.yaml` files. This
means that when organizations or governments have an open-source license
requirement, all their jobs, credentials, and project configurations can be
exported from OpenFn's iPaaS and used to create a microservice deployment.

While this approach doesn't provide the OpenFn platform front-end with its
various project management and configuration features, it's perfect for groups
with DevOps experience and 100% compatible with the platform. You can even build
and test entire projects on `platform` and then export the `project.yaml` file
to run on your own servers using `microservice`.

This microservice approach provides flexibility to governments and NGOs, so they
are never locked-in to OpenFn's SaaS platform offering. At any time, an
organization can port their existing jobs, triggers, and credentials from
OpenFn.org to run with our FOSS integration toolkit, using their own
infrastructure.

## Prerequisites

Familiarity with other elements of OpenFn's open source integration toolkit is
helpful when considering the microservice approach.

- [OpenFn/docs](https://docs.openfn.org/)
- [OpenFn/engine](https://github.com/openfn/engine)
- [OpenFn/core](https://github.com/openFn/core)
- [OpenFn/devtools](https://openfn.github.io/devtools/)
