---
sidebar_label: Standards
title: Standards & OpenFn
---

OpenFn follows global standards for open source software and for workflow engine
solutions. Read on to learn how OpenFn complies with specific standards.

## Digital Public Good

OpenFn is recognised by the
[Ditial Public Goods Alliance](https://digitalpublicgoods.net/) as a Digital
Public Good, or "DPG".

:::info Digital Public Goods Definition

Open-source software, open data, open AI models, open standards, and open
content that adhere to privacy and other applicable best practices, do no harm
by design and are of high relevance for attainment of the United Nations 2030
Sustainable Development Goals (SDGs)

:::

You can read more about the DPG standard
[here](https://digitalpublicgoods.net/standard/).

## Global Good for Health

OpenFn is one of 36 software applications that have been recognised as a Digital
Square
[Global Good for Health](https://wiki.digitalsquare.io/index.php/What_are_Global_Goods#:~:text=Digital%20Square%20Global%20Goods%20are,scale%2C%20are%20used%20across%20multiple).

:::info Global Goods for Health Definition

A mature digital health software global good is software that is Free and Open
Source Software (FOSS), is supported by a strong community, has a clear
governance structure, is funded by multiple sources, has been deployed at
significant scale, is used across multiple countries, has demonstrated
effectiveness, is designed to be interoperable, and is an emergent standard
application.

:::

You can read more about Global Goods for Health
[here](https://digitalsquare.org/digital-health-global-goods).

## OpenHIE Standard Architecture

OpenFn is considered a OpenHIE reference technology and is compliant with the
OpenHIE standard architecture for digital health implementations.

_This section assumes you are familiar with the OpenHIE specification–a
reference framework that makes sharing health data across information systems
possible through a Health Information Exchange (“HIE”). To learn more, check out
[OpenHIE docs](https://guides.ohie.org/arch-spec/) and
[community](https://ohie.org/)._

### OpenFn and OpenHIE

The OpenFn platform v2 ([OpenFn/lightning](https://github.com/OpenFn/)) is an
OpenHIE-compliant **_workflow engine_** used to (1) automate complex business
processes that cut across digital systems (including OpenHIE components _and_
point of care systems), and to (2) handle data mapping and transformation.

If your organization is implementing the OpenHIE standard architecture, then
OpenFn provides a workflow engine that interfaces with your interoperability
later component (“IOL”). OpenFn can be implemented to automate:

- Workflows between point of service systems;
- Workflows between across core HIE components;
- Data transformation steps required to prepare data before routing it to other
  HIE components via the IOL. (Note that OpenFn workflows serve as a
  web-UI-accessible and manageable alternative to OpenHIM “mediators”.)

OpenFn supports the
[functional requirements](https://guides.ohie.org/arch-spec/openhie-component-specifications-1/openhie-interoperability-layer-iol#openhie-iol-functional-requirements)
of the OpenHIE IOL, therefore some organizations also use OpenFn as their
central interoperability layer. That said, please note that OpenFn cannot yet be
used as a fully OpenHIE-compliant **_interoperability layer _**because it does
not leverage the IHE ATNA profile (see
[requirement IOL-WF1](https://guides.ohie.org/arch-spec/openhie-component-specifications-1/openhie-interoperability-layer-iol#openhie-iol-workflow-requirements)).

![openhie_architecture](/img/openhie_architecture.webp)

_For an overview of OpenFn Lightning and how it fits into OpenHIE, see our
[introduction for the OpenHIE showcase](https://www.youtube.com/watch?v=PTRRZBYtqyc)_
or read on for more context.

### More on how OpenFn supports the OpenHIE spec

#### The Interoperability layer (IOL):

- Sits between the OpenHIE components and point-of-care systems
- Serves as a single point of entry and secure gateway to the OpenHIE
- Complies with requirements around transaction routing and auditing

_OpenFn Lightning satisfies the functional requirements of the IOL, but is not
fully OpenHIE-compliant since it does not yet leverage the IHE ATNA profile_

#### The workflow engine:

- Provides out-of-box interfaces to connect to point of care systems
- Handles complex data mapping and transformation to reformat data for receipt
  by a destination system (e.g., map data from point of care system to the data
  model of a OpenHIE component, and/or map non-FHIR data to FHIR profiles)
- Routes data to the interoperability layer
- Can keep track of the long running state of a patient's care and perform
  actions based on this context (such as sending alerts) to improve patient
  care.

_OpenFn Lightning is an OpenHIE-compliant workflow engine_

### Case study: OpenFn as an OpenHIM Mediator

In Nigeria, as part of the
[ALMANACH project](https://articles.nigeriahealthwatch.com/almanach-revolutionising-the-management-of-childhood-illnesses-in-adamawa-state/),
SwissTPH used OpenFn to automate data mapping and exchange between CommCare and
DHIS2 for disease surveillance. The workflow ran on OpenFn’s cloud for several
years and in preparation for handover and scaling-up, the team at SwissTPH then
prepared a deep integration with OpenHIM for local deployment.

SwissTPH took their existing OpenFn workflow and built it into their OpenHIM
instance as a “mediator”, ensuring all data is routed via this IOL while still
leveraging OpenFn’s out-of-box DHIS2 adaptor and reusable workflow templates to
quickly develop automation that reformats data received from CommCare and maps
it to the DHIS2 data model.

![swisstph](/img/swisstph.webp)

## GovStack

OpenFn is compliant with
[GovStack's standard specification](https://govstack.gitbook.io/bb-workflow/2-description)
for workflow engines.

## Pricinciples for Digital Development

OpenFn was designed for the social sector and has been actively prioritizing the
[Principles of Digital Development](https://digitalprinciples.org/) since its
inception.

OpenFn solutions are:

- **interoperable** (connect any application);
- **reusable** (utilize existing OpenFn configurations as templates, or easily
  share, copy, and modify your own configurations; see docs.openfn.org/library);
- **sustainable** (flexible implementation options with no lock-in);
- **scalable** (OpenFn leverages enterprise-grade tech to handle high data
  volumes and provides a range of deployment options to ensure total solution
  ownership on any server);
- **promote open standards and open access** (through our open-source software,
  documentation, and features to help users implement open standards in their
  information exchange solutions), and
- **address privacy & security**.

## FHIR for health data exchange

[FHIR](https://www.hl7.org/fhir/) (pronounced "fire" 🔥) is a standard for
health care data exchange, published by HL7®.

OpenFn is used by health organizations to connect multiple FHIR- and non-FHIR
compliant systems in a secure, stable, and scalable manner. OpenFn can
facilitate 2 categories of FHIR workflows:

### 1. Non-FHIR to FHIR Data Exchange

OpenFn users can configure workflows to convert non-FHIR data to FHIR-compliant
formats, and then route to FHIR systems.

For example, get data from CommCare mobile app, convert to FHIR, and send to
national health system's FHIR store.
![nonFHIR Workflow](/img/workflow_nonfhir_fhir.webp)

### 2. FHIR to FHIR Data Exchange

OpenFn users can also configure Workflows to automate the exchange and routing
of _already_ FHIR-compliant data to other FHIR-compliant systems.

For example, get data from OpenMRS's FHIR API, and forward to the national
health system's FHIR store (no data transformation needed).

![FHIR Workflow](/img/workflow_fhir_fhir.webp)

## FHIR Adaptors

OpenFn [adaptors](/adaptors) fast-track integration setup with target
applications (including FHIR endpoints!). The core team is currently working on
a suite of FHIR-specific adaptors to enable interoperability with FHIR systems.

The [fhir-4 adaptor](/adaptors/fhir-4) makes it easy to access and modify data
held on any [FHIR r4](https://www.hl7.org/fhir/R4/) compliant server. It also
provides full code-assist to developers while creating specific resource
definitions, simplifying data-entry and mapping logic.

We also provide a generic [fhir](/adaptors/fhir) adaptor that's compatible with
all FHIR versions.

:::info Fhir 4 support

The `fhir-4` adaptor is new to OpenFn as of March 2025. It introduces richer
levels of support from the generic [fhir](/adaptors/fhir)adaptor. Support for
other FHIR versions is coming soon

:::

See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki/Generating-Fhir-Adaptors)
to learn how to build your own FHIR adpator specific to your target FHIR
Implementation Guide

## Other Data Standards

OpenFn Workflows can automate data transformation, cleaning, and formatting
rules to ensure compliance with _your_ organization's specific standards.

Ask on the [community](https://community.openfn.org) to explore how OpenFn can
be leverage to help automate application and enforcement of other data
standards.
