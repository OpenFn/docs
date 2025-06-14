---
sidebar_label: Workflow Specifications
title: Writing Workflow Automation Specifications
---

# Writing specifications for workflow automation solutions

__The key outputs of the the design process are:__

1. [Functional Workflow diagram](/documentation/design/discovery#workflow-requirements-gathering)
2. [Technical Workflow diagram](/documentation/design/discovery#workflow-requirements-gathering)
3. [Solution Architecture Diagram](/documentation/design/discovery#documenting-the-solution-architecture)
4. [Data element mapping specifications](/documentation/design/mapping-specs)


Given these, you’ll be ready to finalize your workflow specifications and hand-off to developers for job-writing!  

Each “task” or “step” in the OpenFn swimlane of your technical diagram can be implemented as a distinct operation in your workflow configuration. In the example diagram below, you might implement 1 job with 3 chained operations, or 3 jobs with 1 operation each. 

![workflow](/img/workflow_specs.webp)

__The workflow specifications should link to all of the design artifacts and highlight the following:__
1. The required number of OpenFn jobs and the function of each
2. Links to sample input/output and API documentation
3. Unique identifiers
4. Expected data volumes
5. Authentication requirements