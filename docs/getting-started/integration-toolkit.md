---
title: The Integration Toolkit
---

OpenFn's free and open-source Integration Toolkit gives governments and NGOs
around the world more flexibility and freedom to chose how they achieve success
in integration and interoperability projects. The Toolkit is both a recognized
[Digital Public Good](https://digitalpublicgoods.net/) ("DPG") and a
[Digital Square Global Good](https://digitalsquare.org/digital-health-global-goods).

![DPG](/img/openfn_dpg.png)

The Toolkit provides a suite of software tools and documentation to help users
design, build, and automate integrations. Read on for more information.

## Lightning Coming Soon!

Lightning extends the existing OpenFn Integration Toolkit DPG. It is a fully
open source, low-code integration web app that will enable governments and NGOs
to get their integrations up and running even faster and deploy them locally in
a matter of minutes.

##### Leveraging the tech powering the field-tested enterprise OpenFn platform...

Lightning brings together the tried and tested technology we have been using
since 2015 (OpenFn core, engine, adaptors and code from the OpenFn SaaS
platform) to manage the orchestration and execution of integrations in a stable,
scalable and secure way.

##### ...but providing a fully open source web app with a user-friendly web interface.

A fully open source web app, it can be deployed anywhere through Docker and
comes with a user-friendly, low-code interface with the full functionality
needed for organizations to build, run and audit their workflows all in one
place. ![Lightning](/img/lightning_build_run_audit.png)

##### Build

Empower more users in your organization to have a say in what gets automated and
how. Lightning’s visual interface makes workflows more intelligible to
non-technical users, bridging the gap between the IT specialists that build out
automations and program managers that are the real business/ program experts on
the processes that need automating.

##### Audit

Treat every workflow run with the care and attention it deserves. In OpenFn,
each incoming request or transaction that gets processed is more than a piece of
data - it represents a vulnerable child in need of critical support, a farmer
managing their savings to make sure they can afford the next harvest. Lightning
provides users with a dashboard that allows them to monitor the health of their
integrations to make sure no request goes unprocessed.

##### Follow our progress and give us a hand:

We are building out in the open, you can follow our progress on the
[Lightning repository](https://github.com/OpenFn/lightning) by clicking ‘Watch’
to track updates and new releases. Ongoing discussions about the development of
Lightning with our Open Source Steering Committee are documented on our
[community forum](https://community.openfn.org/c/ossc/15), all feedback and
comments on Lightning are welcome there. If you would like to become a beta user
or just want to learn more about Lightning and where we’re heading, book in a
call with our product manager here:
https://calendly.com/amber-openfn/short-call.

![Lightning preview](/img/lightning_preview.png)

## More about the Toolkit

At the heart of the toolkit is the `project`—a set of jobs, triggers, and
credentials which allow organizations to flexibly define workflows and
integrations across their systems.

Projects can be ported from the `platform` to `microservice` (the main
deployment pathway for the Integration Toolkit) and back again (see below) but
to really understand the toolkit you've got to first understand Open Function
Group and `platform`, the enterprise iPaaS.

![Integration Toolkit](/img/integration-toolkit.png)

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

## Open Source Steering Committee (OSSC)

We've also initiated an Open Source Steering Committee (OSSC) to represent the
OpenFn community of end users and implementers. It reviews and gives feedback on
major roadmap decisions, new designs, specifications, features, and protocol
changes.

The OSSC's membership and decision making process are defined in the
[OSSC's internal governance policy](https://openfn.github.io/governance/OSSC.html)
if if you're interested in joining, we'd love to hear from you!
