---
title: OpenHIE
---

_This section assumes you are familiar with the OpenHIE specification–a
reference framework that makes sharing health data across information systems
possible through a Health Information Exchange (“HIE”). To learn more, check out
[OpenHIE docs](https://guides.ohie.org/arch-spec/) and
[community](https://ohie.org/)._

## OpenFn Lightning and OpenHIE

OpenFn Lightning is an OpenHIE-compliant **_workflow engine_** used to (1)
automate complex business processes that cut across digital systems (including
OpenHIE components _and_ point of care systems), and to (2) handle data mapping
and transformation.

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

## Context

### The Interoperability layer (IOL):

- Sits between the OpenHIE components and point-of-care systems
- Serves as a single point of entry and secure gateway to the OpenHIE
- Complies with requirements around transaction routing and auditing

_OpenFn Lightning satisfies the functional requirements of the IOL, but is not
fully OpenHIE-compliant since it does not yet leverage the IHE ATNA profile_

### The workflow engine:

- Provides out-of-box interfaces to connect to point of care systems
- Handles complex data mapping and transformation to reformat data for receipt
  by a destination system (e.g., map data from point of care system to the data
  model of a OpenHIE component, and/or map non-FHIR data to FHIR profiles)
- Routes data to the interoperability layer
- Can keep track of the long running state of a patient's care and perform
  actions based on this context (such as sending alerts) to improve patient
  care.

_OpenFn Lightning is an OpenHIE-compliant workflow engine_

## Case study: Using OpenFn to quickly deliver a new OpenHIM mediator in Nigeria

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
