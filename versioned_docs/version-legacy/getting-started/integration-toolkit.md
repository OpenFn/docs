---
title: The Integration Toolkit
---

:::warning

This page is from the v1 legacy docs. Visit the "v2" docs to see an updated
overview on the OpenFn Integration Toolkit and its products.

:::

OpenFn's free and open-source Integration Toolkit gives governments and NGOs
around the world more flexibility and freedom to chose how they achieve success
in integration and interoperability projects. The Toolkit is both a recognized
[Digital Public Good](https://digitalpublicgoods.net/) ("DPG") and a
[Digital Square Global Good](https://digitalsquare.org/digital-health-global-goods).

![DPG](/img/openfn_dpg.webp)

The Toolkit provides a suite of software tools and documentation to help users
design, build, and automate integrations.

## About the Toolkit

At the heart of the toolkit is the `project`—a set of jobs, triggers, and
credentials which allow organizations to flexibly define workflows and
integrations across their systems.

Projects can be ported from the `platform` to `microservice` (the main
deployment pathway for the Integration Toolkit) and back again (see below) but
to really understand the toolkit you've got to first understand Open Function
Group and `platform`, the enterprise iPaaS.

![Integration Toolkit](/img/integration-toolkit.webp)

Open Function Group has been building free and open source software (FOSS) for
data integration projects in the health, humanitarian, and international
development sectors since in 2014. Their software and services are now in use by
governments, NGOs, and impact-first businesses in over 40 countries.

OFG's first integration platform was entirely FOSS, but they soon shifted to an
["open-core"](https://en.wikipedia.org/wiki/Open-core_model) (think GitLab) in
order to sustain their impact-focused integration work. Their main hosted
offering, the OpenFn "platform", is _proprietary_ but makes extensive use of the
open-source integration toolkit; in fact, the "platform" may be thought of as an
enterprise/hosted layer running on-top of the basic, open-source building blocks
provided by the Integration Toolkit.

### Why OFG is driving the development of the Integration Toolkit

Our mission is to make health & humanitarian interventions more efficient &
effective, and we see investment in the integration toolkit as strategic.

We'll strive to preserve the integration toolkit as a healthy and bona fide open
source project and sustains its operations through business activities related
to the toolkit and their other proprietary and/or service offerings until it
grows legs of its own and is taken over by the broader community.

We have designed the tools in the toolkit to be useful as standalone pieces of
software _and_ as modules, used by other applications. Because a substantial
portion of OFG's revenue comes from contracts related to the platform, and
because the platform relies on OpenFn/core, OpenFn/engine, and the OpenFn
adaptors, we hope to ensure that OFG will always be incentivized to continue
their investment in the integration toolkit.

In other words, we're attempting to ensure that as OFG grows, they will continue
enhancing the open source integration toolkit regardless of whether or not
additional funders and/or stakeholders contribute to the project.

## What's in the Integration Toolkit

Separate from "the platform", the integration toolkit is the suite of
applications and modules provided by OFG and the community which enable data
integration, interoperability, and automation solutions via OpenFn-compliant
jobs, triggers, and credentials. The key components of the toolkit are:

1. OpenFn/docs
2. OpenFn/core
3. OpenFn/engine
4. OpenFn/microservice
5. OpenFn/devtools
6. the OpenFn adaptors
7. _OpenFn/lightning (coming soon...)_

:::caution Microservice and devtools are being replaced by Lightning

Please note that [OpenFn/microservice](https://github.com/OpenFn/microservice)
and [OpenFn/devtools](https://github.com/OpenFn/devtools) are being deprecated
and replaced by [OpenFn/Lightning](https://github.com/OpenFn/lightning), When
lighting is released.

:::

### Lightning, coming soon!

Lightning is an upcoming addition to the Integration Toolkit. It is a _fully
open source_ workflow automation platform designed for governments and NGOs who
need a flexible solution to integrate and connect _any system_.

You can read all about it [here](../about-lightning.md)!

## Architecture for implementation

![Lightning architecture](/img/lightning_architecture.webp)

## Open Source Steering Committee (OSSC)

We've also initiated an Open Source Steering Committee (OSSC) to represent the
OpenFn community of end users and implementers. It reviews and gives feedback on
major roadmap decisions, new designs, specifications, features, and protocol
changes.

The OSSC's membership and decision making process are defined in the
[OSSC's internal governance policy](https://openfn.github.io/governance/OSSC.html)
if if you're interested in joining, we'd love to hear from you!
