---
title: Designing a job
---

A job defines the specific series of tasks or database actions to be performed
when a triggering message is received (even-based) or a pre-scheduled (and
recurring) time is reached. It's the series of instructions for handling the
data coming from a source system and to be sent to the destination system, or in
other words, mapping data elements from one system to the other.

Designing a job really just means clearly defining the “rules” for data element
mapping. We'll walk through the main steps using Kobo Toolbox as an example
source system and a Postgres database as destination but check out the [integration design](../design/design-quickstart.md) page for more details on data flow diagrams and mappings.

Step 1: Map your data flows

1. Define your input(s). What data collection forms are used to collect data?
   How many forms? Are there different form versions?
2. Define your output(s). Where should the data be stored? In what format? What
   are your analysis requirements?

Step 2: Map your data elements

1. Export the metadata of your form (input) & destination DB (output).
2. Paste the metadata into an Excel spreadsheet to create a mapping sheet:

![Sample mapping sheet](/img/data-element-mapping.webp)

3. Map data elements & define rules for data cleaning and transformation a. How
   should the data collected be translated into your destination system’s data
   model?  b. Does your destination system have data input & validation
   requirements?

Step 3. Define your operations: insert, update, upsert...

1. Find out or create the unique identifiers you will use to insert and update
   data (form ID, answer ID, or, case or patient ID etc.).
2. Determine operations: e.g. insert, update, upsert, upsertMany
3. Check the adaptor for helper functions. a. Example from
   [language-postgresql](https://github.com/OpenFn/language-postgresql)
   - `insert(...)`, `insertMany(...)`
   - `update(...)`, `updateMany(...)`
   - `upsert(...)`, `upsertMany(...)`  → update if record exists or insert if it
     doesn’t; references an external Id b. Example from
     [language-dhis2](https://github.com/OpenFn/language-dhis2) using Tracked
     Entity Instances (TEI)
   - `updateTEI(...)`
   - `upsertTEI(...)`

Example upsert job:

```
upsert('mainDataTable', 'AnswerId', {
  AnswerId: dataValue('\_id'), //external Id for upsert
  column: dataValue('firstQuestion)'),
  LastUpdate: new Date().toISOString(),
  Participant: dataValue('participant'),
  Surveyor: dataValue('surveyor'),
  ...
});
```
