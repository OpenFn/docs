---
sidebar_label: Design Process Overview
title: Design Process Overview
---

This article outlines the high-level steps to design  automated workflows, inspired by the OpenFn core team’s standard implementation process. 

Typically the design process happens outside of OpenFn, in conversation and collaboration with relevant business/program and technical stakeholders. Then, once the design is finalized, the workflow configuration, testing, monitoring, and management is handled in OpenFn. 

## Key Terms 

Before you dive in, make sure you have a clear understanding of these key terms we’ll reference throughout this documentation: 

### Workflow
The set of instructions that determine how to solve a problem or accomplish a task. They are often broken down into smaller, independent tasks. 

![Workflow](/img/worfklow.png)


### Workflow Automation
The use of software to perform these tasks independently, in accordance with predefined business rules, and without the need for human input. 

![Workflow Automation](/img/workflow_automation.png)

### Data Integration

The process of combining data from different sources into a centralized view. Data integration is a means of achieving workflow automation. Its tasks may be streamlined, automated, and managed by a workflow automation tool.

![Data Integration](/img/data_integration.png)


## Introduction

Workflow automation design features 5 main steps that are covered in depth in other articles:
1. [Discovery & Scoping](/documentation/next/design/discovery)
2. [Workflow Design](/documentation/next/design/design-workflow)
3. [API Discovery and Technical Design](/documentation/next/design/api-discovery)
4. [Data Element Mapping Specifications](/documentation/next/design/mapping-specs)
5. [Workflow Specifications](/documentation/next/design/workflow-specs)

### Example Use Case
Throughout the design documentation we will reference the fictional data collection & workflow automation scenario below:

_PatientCare is a health NGO that runs a network of community health workers who provide care to patients in remote areas in Guinea. PatientCare workers collect patient data in [KoboToolBox](https://www.kobotoolbox.org/). The Guinean government uses [DHIS2](http://dhis2.org) as its national health information system (HIS) and requires PatientCare to register all patient data in the HIS._