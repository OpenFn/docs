---
title: Integration Design
---

# Getting Started on Integration Design

**Integration design begins with the functional or business requirements (not
the technical bits).** Therefore, you do not need to be an IT consultant or
software engineer to start designing an integration solution! (Although having
those resources certainly helps when we get to the technical specifications...
but more on that later).

A clear understanding and _documentation_ of the business processes, functional
requirements, and people interacting with your desired integration are the first
critical step in integration design. As you're planning for your next
integration project, start developing the following documentation to get started
with solution.

## 1. Capture requirements as user stories

Documenting _why_ the integration is needed and the driving requirements is
important to making sure the priority needs are identified and that everyone is
aligned on project expectations.

_User stories_ are short, simple descriptions of a requirement told from the
perspective of the person who desires the new functionality.

> As a `<type of user>`, I want `<some functionality>` so that
> `<desired business outcome>`.

Good user stories will capture 3 parts:

1. _Who_ - who is using the solution?
2. _What_ - what do they hope to achieve via the solution?
3. _Why_ - why is this desire important? What are the business implications?

If you capture these 3 elements, user stories can b ean effective way of
detailing integration requirements and starting discussions at your organization
about which requirements are priority.

### Example user stories:

- **Case Referrals:** As a caseworker, I want to automatically send referral
  requests to my partner agency using another case management system, so that I
  can securely share case information and quickly notify them when their
  services are needed in a crisis situation.
- **EMR - HIS:** As a clinic manager, I would like to integrate patient data
  from the district clinic electronic medical record system with the national
  DHIS2 health information system, so that I can securely and automatically
  report on health outcomes for key indicators in my district.
- **Kobo Toolbox - MSSQL Database:** As a M&E manager, I want to monitor Kobo
  Toolbox survey responses in a central database in real-time, so that I can
  better understand data collection activities and program performance across my
  research partner sites.

## 2. Diagram the business process

Once the user stories have been identified, start to document the functional
processes that are in place (or will need to be implemented) in order to achieve
the desired requirments. These might be automated or human/manually-driven
processes. This is the precursor step to mapping out the data flow (which
details the technical steps for how connections will be made and data exchanged
between systems). Again, process mapping is _business analysis_–not a technical
exercise.

For example, if you want to exchange information between your organization and
another... how might this exchange work from a functional point of view? _What_
information will be exchanged? With _whom_ (between which systems or users)?
_When_ will the information be exchanged? And what are the human or automation
steps that should facilitate and trigger this exchange? These business process
questions are discussed in more detail on the
[So, what is an integration?](../getting-started/so-you-want-to-integrate.mdx)
page.

:::tip

Capture the current & desired process Document _current and desired_ business
processes in order to determine how information should be exchanged between your
organization/system/users and others, and to ensure alignment of expectations
and assumptions across partners.

:::

### Use BPMN for standardized documentation

When documenting internal business procedures, consider using standard Business
Process Model and Notation (BPMN) as a standard way to graphically document key
business processes. BPMN (learn more about standard
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

## 3. Map data elements to be exchanged

Once the business processes are documented, start to document the specific data
elements to be exchanged. This exercise requires a lot of specificity to detail
the individual "fields" or "attributes" to be exchanged.

The output of this exerice is a `Data Element Mapping Specification`, which will
serve as (1) documentation of the specific data elements agreed to be exchanges,
as well as (2) a guide for how to translate meaning between partners and systems
(e.g., `client` in one system might mean `patient` in another).

If your organization already has a data management or sharing agreement, this
might be the perfect starting point for identifying the specific data points to
be exchanged.

### Mapping Specification Template

Collaborating on mapping specifications with implementing partners is an
important exercise for documenting very specific requirements and building
consensus on what data exactly will be exchanged, and how.

:::tip Template for getting started

[Use this template](https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit?usp=sharing)
for drafting your own data element mapping specification.

:::

This template includes:

1. Details on the source metadata such as field API name, data type, sample data
   values and comments:
   ![image](https://user-images.githubusercontent.com/80456839/130796010-fe900c03-1bff-40c0-9263-c29e22d9191f.png)
2. Similar details on the destination metadata:
   ![image](https://user-images.githubusercontent.com/80456839/130796087-67b0359d-207a-4169-aa88-6609572b2561.png)
3. Notes on data transformations & cleaning required and comments for tracking
   changes & questions for technical input:

   ![image](https://user-images.githubusercontent.com/80456839/130796170-2e29a997-9b41-44f7-ac60-79375d096cc9.png)

### To build a complete mapping specification, you’ll need to...

1. Define the data elements to be exchanged by connected systems (you may need
   to export target system metadata to identify exact names)
2. Determine which data elements belong to the data source, and which belong to
   the destination system
3. Agree on how the data elements should map between target systems
4. Analyze the structure and quality of the data to consider if data values will
   need to be transformed, cleaned, or re-labeled in order to map

This mapping will serve as a blueprint for the technical integration setup, and
will be an important artefact of the data sharing agreement between partners.

### Tips for drafting mapping specifications

- **Version mappings** to keep track of mapping change requests over time
- **Color coding:** Highlight any fields that require further discussion one
  color and any newly added fields another color
- Use Google Sheets or shared document comments and email to notify appropriate
  users when changes have been made to the mappings
- Include a **legend/README** that explains how to use the mappings template
- **Unique identifiers:** spend time evaluating available unique identifier
  schemes and what options may already be implemented by related information
  systems
- When mapping multiple choice questions, make sure to consider how the answer
  choices should map to the source/destination system.
- Check out system-specific mapping tips by visiting the `Apps` section of the
  Docs site (see sidebar).

## Next Steps

Once you have your (1) `user stories`, (2) `business process diagrams`, and (3)
`data element specifications` defined, you have produced a suite of functional
design documentation that will drive the technical design of your integration
solution, as well as memorialize the business decisions and agreements made by
implementing partners.

Share this documentation with any technical implementation team, or check out
the [Build](../build/jobs.md) documentation section to learn how to
implement these design specifications using OpenFn.
