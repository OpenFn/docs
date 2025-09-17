---
sidebar_label: Discovery & Scoping
title: Discovery & Scoping for OpenFn Projects
---

# Discovery & Scoping for OpenFn Projects

This article outlines key discovery and scoping questions to confirm the
business value, core workflow requirements, technical feasibility, and client
capacity when starting a new implementation. This article will be referencing
the example use case introduced in the
[series introduction](/documentation/design/design-overview#example-use-case).

:::tip To quickly export and/or share these questions, please see this
[slide deck](https://docs.google.com/presentation/d/1WIc_uNAqapILF7redhTnZXpPRo1jFPSmAjoAplGt42w/edit?usp=sharing).

:::

## Key Questions

### Business Value Assessment

The first step in the discovery process is a business value assessment to
determine the potential return on investment, efficiency gains, and other
valuable outcomes to be used to monitor success.

**Questions to ask:**

1. What are the workflow(s) you want to automate?
2. How are the workflows currently being managed?
   - Is there an existing manual or semi-automatic business process?
   - If yes, how much staff time is spent managing these workflows?
3. What problem(s) will automation solve for? What efficiencies or benefits to
   be gained? What is the cost of inaction?
   - If we do not automate these workflows, then what is the status quo?
   - Is the current workflow slow, insecure, or leading to poor data quality or
     service delivery?

**Example:**

1. I want to automate the syncing of case data from KoboToolBox to DHIS2
   Tracker.
2. Our team currently spends 3 hours a week manually exporting the Kobo Data and
   entering it into DHIS2.
3. This automation will eliminate the risk of human error in manually entering
   the data, save us money and time, and enable us to work with more patients.

## Workflow Requirements Gathering

Use the questions below to determine the specific workflow steps. The output of
these questions should be a draft workflow or business process diagram (consider
drafting the diagram in [BPMN](https://www.bpmn.org/) to leverage a standardized
notation).

**Questions to ask:**

1. What triggers the workflow and how often should it run? (e.g., real-time or
   scheduled)
   - Is there a user action or system event that should trigger the workflow to
     run? (e.g., real-time on form submission, or when record status set to
     “closed”)
   - Or should this workflow be scheduled at a specific day/time? (e.g., every
     day at 12:00)
2. Does the workflow require a one-way or two-way data flow?
   - E.g., if the workflow is sending one record from System A to System B, does
     the data need to flow only one way? Or once the data is synced to System B,
     should something be sent back to System A for a bi-directional data flow?
3. What are the expected data volumes? (e.g., 100 referrals every month, 12k
   forms every year)

**Example:** The workflow should sync patient data from KoboToolBox to DHIS2
each time a form is submitted (i.e. real-time sync). There are a maximum of 5000
patients registered in Kobo per month.

![Workflow](/img/functional_example.webp)

### Technical feasibility assessment

The answers to the questions below will help you draft a solution diagram to
document specifically which instances will be connected & which integration
interfaces to use.

1. How many instances of the target systems exist? (I.e., Are you connecting to
   1 or 2 DB instances?)
2. Are the target systems built? Is any configuration expected to change?
   - If config is still in progress, then consider revisiting this project when
     the systems are stable.
3. Is there an available REST API?
   - If yes, please provide the documentation.
   - If not yet, then consider revisiting this project after this API has been
     built and tested.
   - If no, then what are other available methods for data import/export?
     - Is it possible to secure a direct database connection?
     - Or is there a webhook or method for forwarding data to an external
       system?
     - Or a way to export/import data using file exports? What data formats are
       available?
4. Where are the target systems hosted? Any known security requirements or
   authentication considerations? (e.g., firewalls, VPN requirements, IP
   whitelist requirements)
5. Is there an available test environment we can access to test integration with
   the application? (If not, is there a public demo of the application running
   on the same version that you’re currently running so that we can test the
   APIs?)

Example: Only one instance of PatientCare and DHIS2 exist for this integration
and they have already been built with REST APIs. They are both hosted on
PatientCare managed servers that require IP whitelisting for access.

![Workflow](/img/technical_example.webp)

### Capacity assessment

The answers to the questions below will help you identify project roles for the
implementation design & delivery, as well as a plan for training, rollout,
ongoing administration, and support.

1. Does each target system have a full-time system administrator?
   - Are the administrators available to support integration setup & testing?
   - Will the administrators be able to provide a test/developer environment for
     testing?
   - Who will learn how to administer OpenFn?
2. What are their technical backgrounds?
   - What are other resources available to provide ongoing support?
   - Does anyone in the organization have experience with Javascript or JSON?
3. Is there a desire to learn how to manage the OpenFn implementation
   independently?
4. Who at the organization will be responsible for ongoing governance of the
   solution and overseeing change management? Are resources available to meet
   regularly to review change requests?

**Example:**

| Name   | Role                                                                                                                                                                                                      |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ian    | OpenFn System Admin who will be responsible for ongoing mgmt & monitoring                                                                                                                                 |
| Melody | PatientCare Admin, who will train their system’s users on the workflow                                                                                                                                    |
| Arnis  | DHIS2 Admin, who will train their system’s users on the workflow                                                                                                                                          |
| Ramona | Programs focal point who will champion users, inform workflow requirements, and meet regularly with users to collect feedback, propose changes, and review change requests with the system administrators |

### Documenting the Solution Architecture

Once you’ve gathered the key solution requirements, consider creating a
“Solution Architecture” diagram to document the following:

1. Different solution components
2. Data flows between these components (highlighting data exchange within the
   organization and between third party services)
3. Types of data exchanged
4. Authentication/access points

Such diagrams promote transparency, help to identify potential data exposure
risks, and provide documentation of compliance with data protection
requirements. Check out the example solution architecture diagrams below.

**Example 1:**

![Workflow](/img/solution_diagram1.webp)

**Example 2:**

|                                                      ![Workflow](/img/solution_diagram2.webp)                                                       |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |
| _[Source](https://lucid.app/lucidchart/1e997197-2d67-4393-8394-a532d83561b2/edit?invitationId=inv_85b809a1-6fbd-4275-abdc-618fbd56e90d&page=0_0#)_ |
