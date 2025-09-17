---
sidebar_label: Mapping Specifications
title: Writing Data Element Mapping Specifications
---

# Mapping data elements to define data integration & automation rules

This article walks through the data element mapping process used to develop
entity- and field-level specifications for how data points should be exchanged,
cleaned, and/or transformed in a data integration workflow. In basic terms, data
mapping is the process of connecting a data field from one source to a data
field in another source (e.g., System A "patient" = "person" in System B).

A data element mapping specification is a special type of data dictionary that
serves as (1) documentation on how you are translating meaning between systems,
and (2) specifications for developers building the workflow automation solution.

For each automation step in your workflow, you will document which data elements
(or metadata) will be referenced, as well as the “rules” for how these data
elements should be mapped, reassigned, cleaned, transformed, and/or calculated.

![mapping](/img/mapping_example.webp)

**To draft a data element mapping specification, you’ll need to…**

1. Export the metadata or ask for a list of data elements from the target
   systems,
2. Procure a sample “input” record from the source system and procure a sample
   output record from the destination system. At best, this is an example JSON
   payload or a link to example records. At worst, this is a screenshot or a CSV
   file with “dummy” data.
3. Start “mapping” the data elements and recording transformation rules!

|            ![mapping](/img/mapping_process.webp)            |
| :--------------------------------------------------------: |
| _The data mapping process for data integration solutions._ |

## OpenFn Mapping Specification Template

You can document data elements, mappings, and rules using the OpenFn mapping
specification template. This
[template](https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608)
was created by the OpenFn team as a result of lessons learned from implementing
data integration solutions for NGOs and government partners around the world. It
is used on all OpenFn projects and is maintained by the OpenFn team.

## Mapping Considerations

### Maintaining Mapping Specifications

Once your OpenFn project is live, the Mapping Specs document may be the
business-friendly way your users interact with your solution. If you make any
changes, make sure the Mapping Spec always matches your job code. Also consider
versioning your mapping specs so stakeholders have access to historical
implementations of the solution.

### Functional vs. Technical Mapping

After your organization (or “the business”) determines the functional data
element mapping rules for source/target systems, you'll need to consider which
other technical data elements are required in order for the integration to work.
These may include system-specific fields, IDs, and/or API parameters that are
“under the hood" and may not be visible to the end user, but are required by the
target system to share the data.

### Global variables and mapping rules

Sometimes when mapping lists of values or option sets (e.g., lists of diagnoses,
geographic hierarchies, list of services globally offered at the organization),
these values are "global" and need to referenced repeated throughout your
workflow implementation.

For example, imagine that your source app has a list of coded location IDs
(e.g., `01, 02, 03`) that need to be mapped to a global list of location values
or administrative units:

```js
//source location IDs: destination location values
01: 'Western Cape',
02: 'Eastern Cape',
03: 'Gauteng'
```

In your mapping spec, you should capture this list of global values and mapping
rules in a separate `globals` sheet to then reference throughout your mapping
spec. See an example of this specification in the
[template mapping specification](https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit).

Then, when building your workflow to implement this globals mapping table
specification, your job expression might looks something like the below code
snippet.

```js
//Workflow step 1
//First we use fn() to transform, map & clean our data
fn(state => {

    //Global mapping rules you want to implement in your workflow
    const locationMap = {
        //location_id from source app: location value in destination app
        01: 'Western Cape',
        02: 'Eastern Cape',
        03: 'Gauteng'
    }

    // Here we build the payload of our http request body...
    // We assume the input is an array of records
    const payload = state.data.map(record => ({
        location: locationMap[record.location_id] //translate location_id to the mapped value
        external_id: record.case_id
    }));

    return {...state, payload};
});

//Workflow step 2
//Then we post the payload built in the prior operation to create a record
post('/api/myEndpoint', {
  headers: {
    'Content-Type': 'application/json',
  },
  body: (state) => state.payload
});
```

#### Managing global variables & mappings outside of OpenFn

While the OpenFn XLS-based mapping template is helpful for collaborating with
other stakeholders on defining the mapping requirements, once these
specifications are set, you might consider capturing any `globals` mapping rules
in an outside application, rather than hard-coding these in your job code
directly (as in the example above).

Instead, you might store these global variables and mapping rules in a separate
database table or in an application like
[Open Concept Lab](https://openconceptlab.org/), which has a user-friendly web
app for recording data dictionaries & mapping rules, and REST API support. This
would then allow you to dynamically query these mapping rules using OpenFn, to
ensure your integration is utilizing the latest and greatest specifications.

In this case, your workflow configuration might look like the below, where the
second step in the workflow is dedicated to querying this list of global
mappings from the app in which they're stored to dynamically fetch the latest
globals every time the workflow is run.

![ocl-workflow-example](/img/workflow-ocl-example.webp)

:::tip

To see documentation of a workflow implementation that uses
[Open Concept Lab](https://openconceptlab.org/) to store mapping specifications
and global variables,
[check out this](https://docs.google.com/presentation/d/1NEhgHD3P9luYYsJFMfGee8eR8xA03MpgcZcGPpzTLjE/edit#slide=id.g1ed42eefbd1_0_0)
Médecins Sans Frontières overview of an example OpenFn workflow that maps
OpenMRS data to DHIS2.

:::

### Mapping to Individual or Aggregate Entities

Consider if your integration requires a 1-to-1 exchange of individual records,
or if there is a need for individual records to be summaries or aggregated. Your
workflow may require you to map individual entities (i.e., 1-to-1 mapping). For
example, you can map a patient from KoboToolBox to a patient in DHIS2. You
should use the
[default OpenFn mapping template](https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608)
for such scenarios.

However, if your workflow requires mapping individual entities to an
aggregate/summarized entity (i.e., many-to-1 mapping), then you can use OpenFn’s
[aggregate mapping template](https://docs.google.com/spreadsheets/d/1JVcM7FEkCeezHXONRaAaEPFks9lS8xO_q51jql_hUtc/edit)
to start. For example, you might collect individual patient records in
KoboToolBox, but want to send an aggregated count of patients to DHIS2 for key
indicator results reporting (e.g. the number of patients under 18 years old).
