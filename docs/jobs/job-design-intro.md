---
title: Introduction to job design
---

A job defines the specific series of tasks or database actions to be performed when a triggering message is received (even-based) or a pre-scheduled (and recurring) time is reached.
It's the series of instructions for handling the data coming from a source system and to be sent to the destination system, or in other words, mapping data elements from one system to the other.

Designing a job really just means clearly defining the “rules” for data element mapping.

Step 1: Map your data flows
1. Define your input(s) → What Kobo form are used to collect data? How many forms? Are there different form versions?
2. Define your output(s)→ Where should the data be stored? In what format? What are your analysis requirements? 
       
      
Step 2: Map your data elements 
1. Export the metadata of your Kobo form (input) & destination DB (output)
2. Paste the metadata into an Excel spreadsheet → see Mapping template
3. Map data elements & define rules for data cleaning and transformation
    a. How should the data collected be translated into your destination system’s data model? 
    b. Does your destination system have data input & validation requirements? 
