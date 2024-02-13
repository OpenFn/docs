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

:::tip

Check out a real-world example See the UNICEF Cambodia repository for documented
outputs from this checklist from an interoperability project implemented for the
Cambodia Ministry of Social Affairs, Veterans, and Youth Rehabilitation and
partner NGOs:
[openfn.github.io/unicef-cambodia/](https://openfn.github.io/unicef-cambodia/)

:::
 
:::info

The XLS version of this template can be found [here](https://docs.google.com/spreadsheets/d/1_XY0nx0OLNUsogrIHnRaSTyZ-KdcSXks-tqwm3ZfMc4/edit#gid=72612093).

:::


## (1) Preparing for the Implementation

- [ ] Point of contacts identified for each target system (incl. system administrators, folks who can speak to the functional and technical requirements)
- [ ] Data sharing agreement finalized (if required; common for cross-organization workflows)
- [ ] Business value assessed & documented
- [ ] High-level workflow requirements gathered & documented (in diagram)
- [ ] Technical feasibility assessment completed to verify integration approach, available connection points, and OpenFn deployment option and adaptors
- [ ] Capacity assessment completed


## (2) Discovery & Design - Functional Workflow Requirements

- [ ] User stories documented to capture business value & desired outcomes
      Learn more about user stories [here.](../design/design-quickstart.md#1-capture-requirements-as-user-stories)
- [ ] Workflow BPMN diagram capturing functional steps of the business process finalized
      Learn more about diagrams & BPMN notation [here.](../design/design-quickstart.md#2-diagram-the-business-process)
- [ ] Request list of data elements from administrators of target systems
      Read about mapping specs [here.](../design/design-quickstart.md#3-map-data-elements-to-be-exchanged).
- [ ] Data element mapping specifications finalized (functional/business-friendly version)
- [ ] Client sign-offs on workflow diagram & mapping specs
- [ ] Workflow assumptions documented (e.g., what human, manual steps does the workflow rely on; what are the unique identifiers) 
- [ ] Testing scenarios drafted 

## (3) Discovery & Design - Technical Specifications

- [ ] Documentation on APIs or target connection points secured
- [ ] Connection points & authentication methods confirmed
- [ ] Access secured to developer/sandbox environments for testing
- [ ] Authentication and authorization methods & credentials tested
- [ ] Target API endpoints determined based on functional specifications & review of API docs
- [ ] Target API endpoints tested to validate the functional data element specifications can be delivered
- [ ] Workflow BPMN diagram capturing the technical steps of the workflow finalized 
- [ ] Technical version of data element mapping specifications created 
- [ ] Workflow assumptions updated to include any technical considerations 
- [ ] Test scenarios updated to include any technical considerations
- [ ] Project Security Configuration Checklist drafted to capture data security & compliance considerations
- [ ] Github repository created
- [ ] Job specifications written for developers 

## (4) Build

- [ ] OpenFn platform: project space created & relevant users invited
- [ ] OpenFn platform: Jobs, triggers, and credentials configured 
- [ ] OpenFn platform: Version control configured to connect Github repo
- [ ] Jobs written & pushed to branch on Github
- [ ] Job code review complete and merged to main branch on Github
- [ ] OpenFn platform: Github paths updated on each job to link to source file
- [ ] Test data created (if needed)
- [ ] Engineer updates mapping specifications (if needed)

## (5) Testing

- [ ] Testing Round 1: Developers run jobs locally with sample data provided
- [ ] Testing Round 2: Analysts complete Test Scenarios & run jobs on platform
- [ ] Iteration: Analysts submit feedback to developers & re-test
- [ ] UAT Round 1: Client completes Test Scenarios
- [ ] Iteration: Analysts submit feedback to developers & re-test
- [ ] UAT Round 2 (if needed): Client completes Test Scenarios
- [ ] Iteration: Analysts submit feedback to developers & re-test

## (6) Training & Prep for Go-Live

- [ ] Training materials drafted for client administrators
- [ ] Documentation drafted, and all project artefacts/docs linked
- [ ] Project Security Configuration Checklist reviewed to determine if any configuration changes or settings need to be implemented post-testing
- [ ] Confirm that production system(s) have been configured
- [ ] Production credentials secured & tested (authentication & authorization)
- [ ] OpenFn platform: "production" project created (cloned from "staging" project), job configuration migrated, & jobs connected to production credentials
- [ ] OpenFn administrator users & access levels confirmed and granted?
- [ ] Support POCs identified for each target system?
- [ ] Establish support structures & governance model for change management 
- [ ] Training session delivered to designated OpenFn and target system administrators and any other ToTs

### Rollout & Support

- [ ] Go Live: Turn "on" OpenFn jobs in production platform project so that the workflow is now live in production systems
- [ ] Confirm administrators have OpenFn notifications turned on to "Each Time" so that they will receive failure notifications (see OpenFn Account Settings)
- [ ] Communicate to end users as needed about the go-live and its implications

## Questions or feedback?

If you have any inputs, comments, or questions–please contribute! Submit a pull
request to this documentation page or leave a comment in
[OpenFn Community](https://community.openfn.org/).
