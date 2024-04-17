---
sidebar_label: Implementation Checklist
title: Implementation Checklist for planning your next integration project
---


# Implementation Checklist

This [Implementation Checklist](https://docs.google.com/spreadsheets/d/1_XY0nx0OLNUsogrIHnRaSTyZ-KdcSXks-tqwm3ZfMc4/edit#gid=72612093) checklist draws from experience of implementing interoperability projects
with in-country government agencies (incl. UNICEF country offices, Ministry of
Social Services Cambodia, MoH Thailand) to offer an implementation & planning
guide covering key milestones in most interoperability and integration projects.

While this checklist should be tailored for each implementation, the tasks
outlined provide a template workplan that can help any organization prepare
for their upcoming implementation. **The implementation process is broken up into the seven phases summarized below. Check out the checklist for detailed steps.**


:::tip

Check out a real-world example See the UNICEF Cambodia repository for documented
outputs from this checklist from an interoperability project implemented for the
Cambodia Ministry of Social Affairs, Veterans, and Youth Rehabilitation and
partner NGOs:
[openfn.github.io/unicef-cambodia/](https://openfn.github.io/unicef-cambodia/)

:::
 



## (1) Preparing for the Implementation
Set the project up for success by creating a project plan, defining roles responsibilities, documenting the business value of the implementation, and confirming the technical feasibility of the implementation. 

Key Outputs:
- Business Value Assessment
- High-level workflow requirements
- Technical Feasibility Assessment 
- Capacity Assessment


## (2) Discovery & Design - Functional Workflow Requirements
Gather and document user stories and functional workflow requirements.

Key Outputs:
- Solution Architecture Diagram
- Workflow Diagrams (functional) 
- Data Element Mapping Specifications (functional)


## (3) Discovery & Design - Technical Specifications
Iterate on workflow requirements to define technical specifications for how the workflow will be implemented. For instance, consider specific API endpoints to access and HTTP methods/operations to use for each.

Key Outputs:
- Solution Architecture Diagram
- Workflow Diagrams (technical) 
- Data Element Mapping Specifications (technical)

## (4) Build
Configure the workflow on OpenFn.org and develop and test the jobs and adaptors to be used in the workflow. 


Key Outputs:
- OpenFn Project configuration
- Jobs
- Adaptors - new/updated (if needed)
- Drafted “Project Security Configuration Checklist” to document config settings implemented



## (5) Testing
Create a test suite and conduct UAT. After UAT, Incorporate any feedback and iterate on the testing process. 

Key Outputs:

- Completed test suite
- Backlog of new requests (if feedback identified for future phases)
- Completed “Project Security Configuration Checklist”



## (6) Training & Prep for Go-Live
Train OpenFn administrators and target system end users and document what was implemented. This is also the phase where the configuration and code is migrated to production environments. 

Key Outputs:
- Published documentation 
- Training video recording
- Signed-off “Project Security Configuration Checklist”
- Ready-to-go OpenFn project



## (7) Rollout & Support
Turn “on” OpenFn workflows to go-live and establish support structures & a governance model for change management.

Key Outputs:
- “Live” OpenFn project
- Documented support model



## Questions or feedback?

If you have any inputs, comments, or questions—please contribute! Submit a pull
request to this documentation page on GitHub or leave a comment in
[OpenFn Community](https://community.openfn.org/).

Interested in receiving **training on the OpenFn implementation process**? Contact [partnerships@openfn.org](mailto://partnerships@openfn.org). 
