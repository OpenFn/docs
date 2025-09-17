---
sidebar_label: Workflow Design
title: Design your first workflow to automate
---

# Designing your first OpenFn workflow

This article explains how to use the information gathered during discovery to determine the specific workflow steps, design your workflow, and draft a diagram to document the steps in the process you would like to automate. 

## Why diagram your workflow?
During requirements gathering you might outline the new workflow with a list of steps or use existing documentation on a business process/protocol. 
__For example:__
1. New patient visits clinic
2. Worker registers patient in mobile app (KoboToolBox)
3. Every day, sync new patients to national health information system (DHIS2)

Next, consider visually outlining the structure and flow of a workflow to ensure it can be more easily understood by various stakeholders. Diagraming can help to capture: 
1. The right flow/sequence of steps,
2. Dependencies,
3. Redundancies, and
4. Who is responsible for each step 


## Main steps to workflow diagramming
1. Diagram the human/manual process steps of this workflow,
2. Identify opportunities for automation,
3. Detail the functional steps of the ideal automation process, 
4. Share the diagram with all stakeholders for final sign off, and update it as necessary

The output of this exercise is clear documentation on how a business process will be executed by automation, humans, and often a combination of both. 

## Diagram using global standards
When diagramming, consider using global standards like BPMN (business process model and notation) so that diagrams are consistent and can be understood by outside parties. BPMN (learn more about standard
[BPMN 2.0](https://www.omg.org/spec/BPMN/2.0/)) has flowchart-like symbols and
precise notation that can be translated to software process components.

Check out these resources for learning & building your own BPMN diagrams:

- `BPMN.io` open-source modeler: https://bpmn.io/
- `Camunda BPMN Tool` includes a free tool and tutorial:
  https://camunda.com/bpmn/
- `LucidChart` provides a very user-friendly diagramming interface:
  https://www.lucidchart.com/pages/bpmn

Looking for a crash course? This video provides a quick overview of BPMN and how
to use it: https://www.youtube.com/watch?v=BwkNceoybvA

### OpenFn Examples of BPMN Diagrams

See the below example BPMN diagram for the user story:

> As a program manager, I want to extract beneficiary details ("tracked entity
> instances") from my country's DHIS2 system, so that I can enroll them as
> contacts in my SMS campaign configured on RapidPro to send them automated
> alerts and program updates.

<img src="/img/sample-bpmn.webp" url />
