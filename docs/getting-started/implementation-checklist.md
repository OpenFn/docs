---
sidebar_label: Implementation Checklist
title: Implementation Checklist for planning your next integration project
---

# Implementation Checklist

This checklist draws from experience of implementing interoperability projects
with in-country government agencies (incl. UNICEF country offices, Ministry of
Social Services Cambodia, MoH Thailand) to offer an implementation & planning
guide covering key milestones in most interoperability and integration projects.

While this checklist should be tailored for each implementation, the tasks
outlined here provide a template workplan that can help any organization prepare
for their upcoming implementation.

:::tip Check out a real-world example 
See the UNICEF Cambodia repository for
documented outputs from this checklist from an interoperability project
implemented for the Cambodia Ministry of Social Affairs, Veterans, and Youth
Rehabilitation and partner NGOs:
[openfn.github.io/unicef-cambodia/](https://openfn.github.io/unicef-cambodia/)
:::

## (1) Preparing for the Technical Implementation

- [ ] Point of contacts identified for informing functional requirements,
      technical requirements (incl. target system administrators), & testing
- [ ] Dating sharing agreement finalized (including data residency & compliance
      requirements, and detailed list of data points that may be exchanged)

## (2) Functional Requirements

- [ ] Business value articulated & user stories documented.
      [Learn more about user stories.](/documentation/design/design-quickstart#1-capture-requirements-as-user-stories)
- [ ] Diagrams documenting business processes.
      [Learn more about diagrams & BPMN notation.](/documentation/design/design-quickstart#2-diagram-the-business-process)
- [ ] Data element mapping specifications drafted.
      [Read about mapping specs here](/documentation/design/design-quickstart#3-map-data-elements-to-be-exchanged).

## (3) System APIs

- [ ] Do the target systems have available APIs?
- [ ] API documentation secured
- [ ] Access to staging/developer environments for testing with target systems
      secured
- [ ] Authentication via the API tested to verify your system credentials
- [ ] Target API endpoints determined based on the functional requirements
- [ ] Target API endpoints tested to validate API behavior and verify your
      system credential's permissions

## (4) Data Flows

- [ ] `Trigger` confirmed (What kicks off a flow or data sync? Is it time- or
      event-based?)
- [ ] Diagrams documenting the technical data flow finalized.
      [Learn more about diagrams & BPMN notation.](/documentation/design/design-quickstart#2-diagram-the-business-process)
- [ ] Data element mapping specifications finalized (with specifications for
      data transformation, cleaning, & calculation rules, technical specs)
- [ ] Technical specifications finalized for the integration setup (which
      reference the `Diagrams` & `Data element mapping specifications`)
- [ ] Solution assumptions documented (regarding human workflows, data entry,
      consent, other criteria)
- [ ] Testing plan drafted with testing instructions for end users with expected
      inputs & outputs

## (5) Security

- [ ] Sign-off received for the technical specifications & how compliance will
      be ensured
- [ ] Sign-off for data points (if any) that can be logged to help monitor
      integration `Activity History`
- [ ] Administrator users & access levels confirmed

## (6) Administration

### Provisioning, Hosting, & Maintenance

- [ ] Deployment pathway confirmed (SaaS, Local, Open-Source) - If using OpenFn,
      [learn about deployment options](/documentation/deploy/options).
- [ ] Hosting & Maintenance: Software maintenance, security updates, server
      status, etc. - confirm roles & responsibilities across systems

### Support

- [ ] Administor responsible for monitoring the integration is identified &
      trained
- [ ] Support point of contacts (e.g., system administrators) identified for
      each target system if troubleshooting support required
- [ ] Solution documentation & training materials saved/shared

## Questions or feedback?

If you have any inputs, comments, or questions–please contribute! Submite a pull
request to this documentation page or leave a comment in
[OpenFn Community](https://community.openfn.org/).
