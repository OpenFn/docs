---
layout: post
title: Planning for your next integration
author: Aicha Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/u/80456839?v=4
tags: [how-to, tips, integration, design]

featured: true
---

Planning and preparing for your next integration project means **_design,
design, and more design._** In this article we will discuss the various pieces
of documentation produced by the design process and how critical they are for
the technical implementation phase.

<!--truncate-->

## Requirements gathering

Most of the documentation is produced through requirements gathering at the very
beginning of integration planning. The goal of this phase is to understand and
document the business process first from the users’ point of view and secondly
from a technical point of view. One way to capture the former is by writing user
stories which outline the **_who, what and why_** of the user flow. An example
user story is "As a DHIS2 user, I want to create a new case record in DHIS2 and
automatically check whether a case has already been created in the system, so
that I can avoid entering duplicate or incorrect case data."

:::tip Tip: Attlassian has a great explanation of user stories! 
“A user story is
an informal, general explanation of a software feature written from the
perspective of the end user. Its purpose is to articulate how a software feature
will provide value to the customer. It's tempting to think that user stories
are, simply put, software system requirements." Learn more
[here](https://www.atlassian.com/agile/project-management/user-stories#:~:text=Summary%3A%20A%20user%20story%20is,simply%20put%2C%20software%20system%20requirements.).
:::

After outlining the business process from the users point of view, it is helpful
to then translate them into technical terms. For example, the user story above
can in part be translated to: “Every time a new case is registered in CommCare,
it must be entered into the DHIS2 system as a new tracked entity instance.” This
statement already identifies the **direction of the data flow** and the
**trigger** to be used for the sync, and brings us closer to the final technical
specification. 

**Other important questions to consider during the requirements gathering phase:**

1. Volumes of data to be synced or processed over a specific unit of time?
2. Frequency of data sync? (i.e., real-time, daily batch sync @ 11pm)
3. Where is the application hosted? And who manages it/ provides ongoing
   support? If it is hosted locally, is it web accessible or can it only be
   accessed via the local network? If it is hosted by a third party, do you have
   access to that third party to request changes, API access, technical
   documentation, etc.?
4. Is there an available REST API and/or webhooks service with available
   documentation and sample data?
5. Any known security requirements or authentication considerations? (e.g.,
   firewalls, VPN requirements, IP whitelist requirements?)

## Data flow and integration flow diagrams

Two of the main pieces of documentation that come out of requirements gathering
are **data flow diagrams** and **integration flow diagrams**. Data flow diagrams
are _client-friendly_ and capture how data should functionally flow between
systems, what systems and users are involved , and the different process steps
that might be manual/human or automated. On the other hand, integration flow
diagrams are often intended for engineers and capture the technical
specifications for the data flow. At OpenFn, BPMN is used for standardized
documentation.

:::tip What is BPMN standard? 
“Business Process Model and Notation (BPMN) will
provide businesses with the capability of understanding their internal business
procedures in a graphical notation and will give organizations the ability to
communicate these procedures in a standard manner. “ Learn more
[here](https://www.bpmn.org/).

:::

**Tips for drafting flow diagrams**

- Consider one diagram for every triggering action
- Use swim lanes to specify the different systems involved
- Be intentional about color use
- Be clear about user vs. system/automated actions
- Consider scenarios if an action fails

## Mapping specifications

The mapping process is often a negotiation between the source and destination
systems and defines which specific fields/attributes will be synced in the
integration. It should include sample data for each field and specify any
necessary transformations between the two systems. The mapping process is often
made easier with a sample state of the fields you'll get from the source system
and a sample output file of what is expected by the destination system.

See
[here](https://docs.google.com/spreadsheets/d/1c9UZwy6ohaftJREb83WYrTORKJ35xzwO01TJq4YHLCQ/edit#gid=281221207)
for a mapping template that you can get started with! This template includes a
README which features a **change log and instructions for use.** The change log
can be especially useful if many users are expected to make changes to the
mapping document. The instructions outline a key for how fields should be
highlighted when they are newly added or require further discussion, for
example.

**Mapping tips:**

- Unique identifiers and external identifiers: analyze unique identifiers and
  external identifiers for objects
- As you design your integration and map data elements between systems, make
  sure that option values for picklist fields also match the data from your
  connected application.
- Version mappings to keep track of changes
- Use the README to highlight rows which require further discussion

## The test suite

Another important piece of documentation that comes out of design and testing is
the test suite. Test suites capture **_what success looks like_** and often use user
stories as input for individual test cases. The test suite organizes testing
steps and provides a dedicated space for detailed results which capture links,
screenshots and comments. Check out
[this](https://docs.google.com/spreadsheets/d/1XuCUg5uw40Z1SE42cJooJFicMtFzHsagHr5SXqQjpw0/edit#gid=1652048905)
example test suite from an existing OpenFn integration!

## Technical specifications document

The final document captures technical specifications which are prepared for
engineers to get started on job-writing. These specifications not only include
the documents discussed above (i.e mappings specifications, data flow diagrams,
etc.), but also include the number of OpenFn jobs needed and the _function of
each job._ For example, it should describe how/when an integration is triggered,
what APIs or system interfaces specifically are involved, and complex logic to
be implemented in jobs. It should also describe which specific resources in
either system need to be created, updated, or deleted.

## Final thoughts

As you can see, a lot happens before engineers can get started on technical
work. The main documentation we discussed are user stories, data and integration
flow diagrams, mappings specifications, and finally, technical specifications. This
documentation is critical for the technical implementation phase and ensures
everyone is on the same page.

Happy integration planning!

Aicha
