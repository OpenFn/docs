---
title: Planning
---

## Introduction

OpenFn can be used as a secure, stable, scalable cloud-hosted offering or
deployed locally—with both managed and un-managed options. Regardless of which
path you choose, you can configure OpenFn so that no sensitive data is kept
outside your country's borders.

:::success Portability

Because of OpenFn's [portability specification](/documentation/deploy/portability) and open-source
deployment tools you can transition between these various pathways at any time.
We're committed to a **no vendor lock-in** experience.

:::

|        Pathway        |                                             Free Cloud                                            |                                                   OpenFn Cloud                                                    |                                                                Dedicated                                                                |                                                Do-it-yourself (DIY)                                                |
| :-------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
|      Description      |                     Go live today on OpenFn.org for small scale projects                     |                                 Scale up and down, pay only for what you need                                 |                       A dedicated, unrestricted OpenFn installation anywhere in the world on our servers or yours                       |                                  Deploy and manage your own solutions with OpenFn                                  |
|        License        |                             Free forever with usage limitations                              | **SaaS** [plans](https://www.openfn.org/pricing); contact enterprise@openfn.org for custom/invoice agreements | **SDaaS** includes deployment, maintenance, security patches, upgrades, and troubleshooting as a service; contact enterprise@openfn.org | LGPLv3 means use freely as part of any closed or open-source solution, but make all _derivative_ works open source |
|       Location        |                            Secure **global** cloud infrastructure                            |                                    Secure **global** cloud infrastructure                                     |                                           **Local (in-country)** or **Global** infrastructure                                           |                                                 Wherever you want                                                  |
|      Deployment       |              **Click to start** at [OpenFn.org](https://www.openfn.org/signup)               |                       **Click to start** at [OpenFn.org](https://www.openfn.org/signup)                       |                                                    **Contact** enterprise@openfn.org                                                    |                     Read this docs page and visit our [GitHub](https://www.github.com/OpenFn)                      |
| Setup & Configuration | **Your choice** to setup yourself, with a certified implementer, or with the OpenFn.org team |         **Your choice** to setup yourself, with a certified implementer, or with the OpenFn.org team          |                      **Your choice** to setup yourself, with a certified implementer, or with the OpenFn.org team                       |            **Your choice** to setup yourself, with a certified implementer, or with the OpenFn.org team            |
|        Support        |           Give & receive support via the [community](https://community.openfn.org)           |                                    Various levels from support@openfn.org                                     |                                                 Various levels from support@openfn.org                                                  |                      Give & receive support via the [community](https://community.openfn.org)                      |

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
   of the solution itself.)
2. While the first phase is running, **assess the value and begin
   preparations**:
   1. Assess the **value of the solution** itself—is it solving the problems you
      thought it would?
   2. Asses your **data residency requirements**—do you need to run this
      solution in country?
   3. Assess your team’s technical **DevOps capacity**—how are other local
      deployments of DPGs going?
   4. Assess your countries computing, storage, and networking
      infrastructure—what options\* are available for servers and network
      connectivity?
   5. Determine if a **"zero-persistence"** cloud solution or a **locally
      deployed** solution is best for your ministry—with the data above run a
      cost-benefit analysis on both options.
3. Engage with OpenFn.org or a certified partner to **practice deployment**,
   migration, rollback, restart, backup, etc.
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

\*Head over to the [Requirements](./requirements.md) page for more information
on recommended server specifications.

## Moving from cloud to local (v1 or v2)

For users that are planning a self-hosted implementation, we recommend
developing and testing the initial solution on the OpenFn SaaS (v1 or v2,
possibly on a free tier) and then exporting for use in Lightning (v2).

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

For detailed deployment documentation instructions, head to the Lightning
[developer docs page](https://openfn.github.io/lightning/readme.html), paying
special attention to several sections:

1. [Getting Started](https://openfn.github.io/lightning/readme.html#getting-started)
2. [Deployment Considerations](https://openfn.github.io/lightning/deployment.html)
3. [Benchmarking](https://openfn.github.io/lightning/benchmarking.md.html#run-benchmarking-tests-against-the-demo-webhook)
