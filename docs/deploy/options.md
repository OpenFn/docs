---
title: Planning
---

## Introduction

OpenFn can be used as a secure, stable, scalable cloud-hosted offering or
deployed locally—with both managed and un-managed options. Regardless of which
path you choose, you can configure OpenFn so that no sensitive data is kept
outside your country's borders.

:::success Portability

Because of OpenFn's [portability specification](/deploy/portability.md) and
open-source deployment tools you can transition between these various pathways
at any time. We're committed to a **no vendor lock-in** experience.

:::

|   Pathway   |                                Free Cloud                                |                           OpenFn Cloud                            |                                                           Dedicated                                                            |                                   Do-it-yourself (DIY)                                   |
| :---------: | :----------------------------------------------------------------------: | :---------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| Description |           Go live today on OpenFn.org for small scale projects           |           Scale up and down, pay only for what you need           |                  A dedicated, unrestricted OpenFn installation anywhere in the world on our servers or yours                   |                     Deploy and manage your own solutions with OpenFn                     |
|   License   |                   Free forever with usage limitations                    |               SaaS plans with custom SLAs available               | Deployment on your infrastructure in defined tiers (see [below](#local-deployment-with-openfn)); contact enterprise@openfn.org | Use freely as part of any solution, but make all _derivative_ works open source (LGPLv3) |
|  Location   |                  Secure **global** cloud infrastructure                  |              Secure **global** cloud infrastructure               |                                      **Local (in-country)** or **Global** infrastructure                                       |                                    Wherever you want                                     |
| Deployment  |    **Click to start** at [OpenFn.org](https://www.openfn.org/signup)     | **Click to start** at [OpenFn.org](https://www.openfn.org/signup) |                                               **Contact** enterprise@openfn.org                                                |        Read this docs page and visit our [GitHub](https://www.github.com/OpenFn)         |
|   Support   | Give & receive support via the [community](https://community.openfn.org) |              Various levels from support@openfn.org               |                                             Various levels from support@openfn.org                                             |         Give & receive support via the [community](https://community.openfn.org)         |

:::info Project Implementation Options

Whichever pathway you choose, you can set it up yourself, work with a
[certified implementer](https://www.openfn.org/partners), or with the OpenFn
core team.

:::

## Local deployment with OpenFn

If you want OpenFn's help deploying on your own infrastructure, we generally
advise thinking about three tiers. They form a ladder: start with a pilot, prove
the integration, then move up as your team's capacity allows.

Every tier assumes a **working container runtime** (Docker Engine or Kubernetes)
that your team provides before deployment begins. If you can't yet provision and
operate Docker hosts or a Kubernetes cluster, start by closing that gap, for
example with a local implementation partner.

|                   | Docker Pilot                                                   | Resilient Production                                      | Integrated Production                               |
| ----------------- | -------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------- |
| Purpose           | Prove that OpenFn can move real data between your real systems | A production platform built on OpenFn's standard patterns | OpenFn wired into your existing operational tooling |
| Runtime           | A single Docker host you provide                               | Docker Engine across 2+ nodes, or your Kubernetes cluster | Your production stack                               |
| High availability | No                                                             | Yes                                                       | Yes                                                 |
| Operated by       | OpenFn, for the duration of the pilot                          | Your team                                                 | Your team                                           |
| Scope             | Fixed                                                          | Fixed                                                     | Scoped after a discovery phase                      |

### Docker Pilot

A time-boxed, dev-grade deployment whose only job is to confirm the integration
works in your environment. It includes a single Docker host (yours), Postgres
running as a container, OpenFn's default monitoring, secrets in a `.env` file,
mail via Mailgun or your existing SMTP server, a runbook based on OpenFn's
standard template, and Deployment 101 training.

The pilot runs on one host with no redundancy: if that host fails, the service
is down until it is restored. That is acceptable for a time-boxed test and not
for production.

### Resilient Production

The default for production. Multiple instances of each OpenFn service run across
two or more nodes, so the platform stays available if a single server or
container fails. It includes backups with tested restore procedures, monitoring
and alerting on OpenFn's standard patterns, secrets management through a
supported standard option for your runtime, an update and rollback path, and a
full production runbook.

Before choosing this tier, name the person or team who will operate the
platform. They should already be running containerized applications.

### Integrated Production

Everything in Resilient Production, plus integration with your own monitoring
and alerting (e.g., Prometheus, Grafana, Datadog), secrets manager (e.g.,
HashiCorp Vault, AWS Secrets Manager), CI/CD pipelines, and change-control
processes. Because this work depends on your environment, it is scoped only
after a discovery phase.

### What you receive

Every tier ends with a deployment GitHub repository holding your OpenFn
configuration, handover technical documentation, Deployment 101 training, and a
runbook. Production tiers add a backup and restore verification report;
Integrated Production adds bespoke integration documentation and a discovery and
scoping report.

If your team will need ongoing help operating the platform after handover,
contact enterprise@openfn.org.

## Sample Local Deployment Plan

:::info This is just an example

Your requirements will vary, but this is an example plan for achieving a
large-scale, high-sensitivity local deployment.

:::

If you're considering a large-scale/high-sensitivity implementation of OpenFn on
local/government-managed servers, you might:

1. **Run a proof-of-concept, prototype, or time-bound production solution**
   using the cloud hosted offering while determining fit and value. (It's a more
   secure, less expensive, and faster way to prove out the value and viability
   of the solution itself.) If the pilot must run on your own infrastructure,
   use a time-boxed [Docker Pilot](#docker-pilot) instead.
2. While the first phase is running, **assess the value and begin
   preparations**:
   1. Assess the **value of the solution** itself—is it solving the problems you
      thought it would?
   2. Assess your **data residency requirements**—do you need to run this
      solution in country?
   3. Assess your team’s technical **DevOps capacity**—how are other local
      deployments of DPGs going?
   4. Assess your country's computing, storage, and networking
      infrastructure—what options\* are available for servers and network
      connectivity?
   5. Determine if a **"zero-persistence"** cloud solution or a **locally
      deployed** solution is best for your ministry—with the data above run a
      cost-benefit analysis on both options.
3. Engage with OpenFn.org or a certified partner to **practice deployment**,
   migration, rollback, restart, backup, etc. A [Docker Pilot](#docker-pilot) is
   a good setting for this.
4. Using OpenFn’s portability tools, **run a cloned local version** of your
   cloud-hosted solution to assess the readiness of your local deployment.
5. Establish a **fail-over protocol** with OpenFn to “fail to cloud” for
   critical systems.
   1. How often should the implementation configuration (not the sensitive data)
      be backed up to the OpenFn.org hosted cloud?
   2. What credentials and/or test environments should the cloud backup have
      access to?
   3. Establish a plan for switching between cloud and local.
6. Establish a **support retainer** with OpenFn-certified local vendors and/or
   the OpenFn core team to help maintain the local deployment in case of issues.
7. **Transition fully to your local deployment** and maintain capacity to
   support or redeploy your solution to other cloud or local servers.
8. **Monitor & adjust your strategy** as and when required by your country’s
   usage and data sovereignty requirements evolve over time.

\*Head over to the [Requirements](/deploy/requirements.md) page for more
information on recommended server specifications.

## Moving from cloud to local

For users that are planning a self-hosted implementation, we recommend
developing and testing the initial solution on the OpenFn SaaS (possibly on a
free tier) and then exporting for use in a local deployment of Lightning.

This allows the implementer to focus on ironing out the business and technical
requirements of the automation before incurring deployment costs. Focus on the
solution, not the deployment. Your OpenFn solution can then be migrated to a
local deployment of Lightning once it has been piloted, its value has been
proven, and you're ready to scale it up.

### A user journey for locally deployed OpenFn

1. Build and test your workflows on [OpenFn.org](https://www.openfn.org).
2. Export your OpenFn project _as code_ using the "export" button or deployment
   CLI.
3. Deploy your local instance of OpenFn/Lightning.
4. Import your project (from step #2) to your local OpenFn/Lightning instance
   using the deployment CLI.
5. Re-configure your credentials (credential secrets will _not_ be included in
   the export).
6. Test your locally deployed project.

## Technical Guidelines

For detailed deployment instructions, head to the
[Lightning repository](https://github.com/OpenFn/lightning) on GitHub, paying
special attention to:

1. [Getting Started](https://github.com/OpenFn/lightning#getting-started)
2. [Deployment notes](https://github.com/OpenFn/lightning/blob/main/DEPLOYMENT.md)
   (encryption, workers, mail, storage and environment variables)
3. [Workers](https://github.com/OpenFn/lightning/blob/main/WORKERS.md)
4. [Benchmarking tooling](https://github.com/OpenFn/lightning/tree/main/tooling/benchmarking)
