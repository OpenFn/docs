---
sidebar_label: API Discovery
title: API Discovery for Workflow Design 
---

# Discovering APIs to inform your workflow automation design
This article explains how to analyze API documentation and draft a technical workflow diagram.

## What is an API?
APIs tell applications how to communicate. An API is the “messenger” that: 
1. Tells you how to form a request,
2. Delivers your request to the provider that you’re requesting it from, and then 
3. Delivers the response back to you

| ![Workflow](/img/api_diagram.webp) |
|:--:|
| *[Source](https://snipcart.com/blog/integrating-apis-introduction)*|

OpenFn connects with APIs via http requests sent via the web. OpenFn can automate any tasks supported by the APIs of the applications it integrates with (e.g., if an app’s API supports sending payments, then OpenFn can automate sending payments). 

## How to analyze API documentation

In the beginning of the design process, you should explore the target system’s API documentation to determine the options for integration. 


### Determine integration options
Consider these questions to determine your integration options–even if an API is not available. :
1. Is there a RESTful API? 
    - If yes, OpenFn can connect out-of-box! REST API is the gold standard for most modern web apps, and typically supports JSON data format.
2. Is there a webhook? 
    - Most mobile data collection apps offer this feature. Some call it “data forwarding”, “web callback”, or “HTTP push API”.
    - Webhooks automatically send messages or notifications when something happens (e.g., when a new form is submitted, notify external services like OpenFn). These event-based notifications enable real-time data integration or automated actions. 
3. Otherwise, what are other options for importing/exporting data from the target applications? 
    - Can you connect directly to a database? 
    - Is there a way to import/export files? (JSON, CSV, XLS, or XML)
    - Is there a legacy API (e.g., SOAP) that we can communicate with via HTTP requests? 

:::tip 
OpenFn can connect any app, even if an API is not supported. See the [“Adaptors”](/adaptors) section to learn more.

:::


### Authentication
API documentation will typically have a section dedicated to authentication options. Look for this to discover which authentication methods are supported, and whether configuration work will be required to set up a new user or API credential. 

Consider that authentication methods that leverage API Keys or OAuth are typically more secure than basic authentication (username/password). 

:::tip 

As early as possible, request an API credential from the system administrator of the app you’re trying to integrate with. This way, you can test authentication with a developer/test environment to verify that you’re able to connect. 

:::

### API Endpoints
Analyze the documentation to see which resources/entities and features are supported by the API. For example, if you want to register Patient records via the API, search for reference to the “/patients” endpoint (or whatever this resource is called in your target application). 

This section of the documentation will include an overview of which HTTP request methods (i.e., POST, GET, etc.) and request parameters are supported, as well as example HTTP requests you can send to the API.

__HTTP request methods will inform you which operations are supported by the API.__ 
1. __C__reate → POST
2. __R__ead → GET
3. __U__pdate → PUT or PATCH
4. __D__elete → DELETE

For example, if you want to query Patient records from an app, see if the API documentation supports `GET ‘/patients’`. 

### Limits
Be on the lookout for API limits. Documentation will often have a dedicated section that will describe if there are any limits or considerations for API requests and rates, concurrency, and record limits. Understanding these limits upfront can inform your integration design to ensure high-performing, scalable automation. 

## Technical Workflow Diagramming

The output of API discovery should be a “technical” workflow diagram. This diagram is different from the functional workflow diagram produced during [“Discovery”](/documentation/design/discovery) in that it captures the technical specifications for how to integrate with target applications. These specifications include the specific methods/operations (e.g., GET, POST) and the database/API names of the target resources (i.e., specific API endpoints or database tables). 

![Workflow](/img/api_example.webp)

__When drafting your technical specifications, consider the following:__
1. __Plan for failure. Your workflows will fail. Consider what happens when they do…__
    - Should individuals be notified? 
    - How can the workflow be re-processed safely? 
    - How to ensure no duplicate data is created? 
2. __Where possible, use unique identifiers to build idempotent automation. Check for existing records in the target system using an available unique identifier:__ 
    - System record UUIDs (e.g., record_id: asjd2910-b8zy1s0a),
    - Unique codes (e.g., HOUSEHOLD-10013) and 
    - Unique combination of attributes (e.g., familyName + phoneNumber + village + districtCode)
3. __If the target system does not have native “upsert” operation or built-in duplicate-checking before insert, implement an upsert  (“update or insert”) pattern to…__
    - Check if a record exists using a unique identifier…
    - If yes, update the record.
    - If not, insert a new record.
4. __Don’t forget to consider data volumes. Depending on whether you need to handle 1, 10000, or 1M+ records, your workflow approach may need change.__
    - Estimate the file size of the data to be extracted 
    - Consider API limits (records returned per page, request rate limits)
    - Consider bulk operations & batching requests


Check out the technical workflow diagram below for syncing forms submissions from KoboToolBox to DHIS2. The original functional diagram can be found [here](/documentation/design/discovery#workflow-requirements-gathering). 

![Workflow](/img/technical_example.webp)