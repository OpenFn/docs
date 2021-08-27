---
title: How to design an integration
---

## Define user stories
AK to draft how to draft user stories. 

**Example user stories:** 
- **CommCare - Salesforce:** As a community health worker I want to store patient data that was collected in rural areas with no internet access in Salesforce so I can better analyze the data being collected and make more informed recommendations. 
- **DHIS2 - Go.Data:** As a MOH employee, I would like to integrate contact data from my country’s surveillance system, so that I can use Go.Data for contact tracing & follow-up in a way that does not duplicate efforts.	
- **Kobo Toolbox - MSSQL Database:** As a M&E manager, I want to monitor Kobo Toolbox survey responses in real-time in a central database, so that I can better understand data collection activities and program performance across my partner sites.

## Gather integration requirements
**Key design questions to consider:** 
1. Why are they interested in integration? What problem are we solving for? What efficiency is to be gained?
2. What data needs to flow between systems? Ideally, describe which **specific resources** in either system need to be **created/ updated/ deleted**.   
(E.g., “Every time a new case is registered in CommCare, it must be entered into the DHIS2 system as a new tracked entity instance.” Or, “Every night at 11pm, all hospital inventory transactions must be uploaded in bulk to our OpenLMIS inventory reporting system.) 
4. Direction of the data flow? (one-way or two-way)     
If two-way, which is the **system of record**? (I.e., if there is conflicting information about a record linked across these systems, which system’s information will be considered true?)
5. Volumes of data to be synced or processed over a specific unit of time? (e.g., 100 cases synced every 1 day/month/year, 500 SMS to be sent each month)
6. Frequency of data sync? (i.e., real-time, daily batch sync @ 11pm) 
7. What **triggers** or “kicks off” a sync? (i.e., new case registration or update)
8. Is the integration likely to change? 
9. What is the t**echnical capacity** of the implementing organization? 
10. Are there available resources to provide ongoing support? 
11. Is there a desire to learn how to manage the solution independently? 
12. Do you have a full time system administrator for the systems that you plan to integrate?
13. Does anyone in the organization have experience with **JSON or Javascript**?
14. Available **API documentation**? Or available sample data? (See questions in the next step.)

See this **Interoperability Planning QuickStart** for more questions to consider: https://worldhealthorganization.github.io/godata/interoperability-quickstart/



## Document your data flows 
**Understand the _user flow_ before/after/adjacent to the integration sync. The goal of this stage is to document the _client’s process_.**

Ask the client to walk you through the system from user POV (user flow): 
- Record a video   
- Ensure you have link(s) to sample data records  
- Export JSON state files to upload to Github `sampleData` directory  

### Data Flow Diagrams
Data flow diagrams should capture how data should functionally flow between systems, what systems and users are involved , and the different process steps that might be manual/human or automated. This is a client-friendly diagram. 

**Tips for drafting flow diagrams**
- Consider 1 diagram for every triggering action
- Use swim lanes to specify the different systems involved
- Be clear about user vs. system/automated actions
- Consider scenarios if an action fails
- See here for best practice on flow diagram design and symbols to use: https://www.gliffy.com/blog/guide-to-flowchart-symbols

**Examples:**   
[UNHCR Primero - UNICEF Progres](https://docs.google.com/presentation/d/1S_BuMzJ2MzcvJCoHUPWxkfwYkFP-V-ValIWH4EP3Cj8/edit)  
[Moodle - CommCare](https://drive.google.com/file/u/2/d/1KIS7IRhi79ebiWccebcL-ZprTYeg_j5a/view?usp=sharing)   
[Go.Data - HMIS](https://worldhealthorganization.github.io/godata/1-2-godata--hmissurveillance-system/#solution-overview)    


**Resources for building data flow diagrams:**
- [LucidChart](https://www.lucidchart.com/pages/examples/data-flow-diagram-software)
- AK any others you have experience with? 

## Map your data elements
Mapping specifications typically involve a lot of client interaction, and will usually have multiple versions as we learn more about the system data models and potential variations in data inputs/outputs. They should serve as (1) documentation on how we’re translating meaning between systems, and (2) as supporting specifications for job-writing.  These specifications are essential as the absence of proper specifications and data transformation logic can lead to poor data quality. 

### To build a complete mapping template, you’ll need to...
1. Export the metadata for the systems you’re connecting to
2. Procure a sample state (to inform your source mappings & to consider if data value transformations will be needed)
3. Procure a sample output record, if possible (to inform your destination mappings & to consider if data value transformations will be needed)

### Example Mapping Specs
Here is a [template](https://docs.google.com/spreadsheets/d/1c9UZwy6ohaftJREb83WYrTORKJ35xzwO01TJq4YHLCQ/edit#gid=281221207) you can use to start. 

This template includes:
1. Details on the source fields such as API name, type, sample and comments: 
![image](https://user-images.githubusercontent.com/80456839/130796010-fe900c03-1bff-40c0-9263-c29e22d9191f.png)
2. Similar details on the destination fields: 
![image](https://user-images.githubusercontent.com/80456839/130796087-67b0359d-207a-4169-aa88-6609572b2561.png)
3. OpenFn-specific columns including transformations and comments:
![image](https://user-images.githubusercontent.com/80456839/130796170-2e29a997-9b41-44f7-ac60-79375d096cc9.png)


**Other examples:**
[ConSoSci example](https://docs.google.com/spreadsheets/d/1KpGTpa5CxzGeq19P_rMwR_t4SCroZQFnesX925QFf5M/edit#gid=0)
[DHIS2 example](https://docs.google.com/spreadsheets/d/1MX_uXqBMIp-Vpz4ZmDHMKCiHbSEN0JHM7tkb-zbIHtE/edit#gid=1107183492)
[Go.Data example](https://docs.google.com/spreadsheets/d/1SNx5wB818ikveaVhHqW9c4N05leL1WGZulsdC_BJj70/edit)
[Design workbook](https://docs.google.com/spreadsheets/d/1jx7jD7qBs6tc1WAZFwt6kZ_vo7t0-QffUGljE0P-N6A/edit#gid=937164064)


### Tips for drafting mapping specifications 
- **Version mappings** to keep track of batches of changes requests  
- **Color coding:** Highlight any fields that require further discussion one color and any newly added fields another color
- Use Google Sheets comments and email to notify appropriate users when changes have been made to the mappings
- Include a **legend/readme** that explains how to use the mappings template 
- **Unique identifiers:** spend time evaluating available unique identifier schemes and what options may already be implemented by related information systems
- When mapping multiple choice questions, make sure to consider how the answer choices should map to the source/destination system.
- Check out system-specific mapping tips by visiting the `Apps` section of the [OpenFn Documentation](https://docs.openfn.org/documentation/) site.

