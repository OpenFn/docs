---
title: Designing Integrations
sidebar_label: Designing Integrations
---

Since 2014 OpenFn's Global Services Team has helped hundreds of organizations
get started on their data automation joruneys.

In this section we have included the process/workflow we follow when embarking
on the design phase of a new project.

Let's start with a question:

### What is "data integration"?

The term "data integration" is thrown around a lot and many people are
intimidated by it. Don't be.

When thinking of "data integrations," you might be thinking of a developer
sitting behind a computer screen writing code to send data between two database
systems. While this is part of the story, it isn't the whole story. Data
integrations can definitely be technical, particularly if there is automation
involved, but what "data integration" really means is a combination of both
technical and business/human processes to combine data from different sources to
create meaningful and valuable information.

:::tip

A data integration is not just the tecnhical process of connecting information,
but it's also the business and human process that is involved with transferring
data from one tool to another and making this data source useful and meaningful.

An integration is **only** as valuable as the insights it's output provide.

:::

### Multiple technologies to get the job done

You are probably viewing this page because your organization is using multiple
technologies to get your work done.

![Designing_Integrations](/img/designing_integration1.png)

<!-- source for diagram: https://docs.google.com/presentation/d/1mVwxE7-0-B5NzTII3nCFaTw2DimGDcFlUQhIbwDE2TU/edit?usp=sharing -->

Perhaps you are using Open Data Kit or SurveyCTO for mobile data collection and
Salesforce, dhis2, or MySQL for a backend MIS database system. Perhaps you are
taking advantage of the powerful analytics and visualization capabilities of
Tableau or PowerBI. You might even be using an SMS service like telerivet or
nexmo to stay connected with customers, or employees.

While there are lots of different tools that serve unique and valuable purposes,
no one tool can do it all and a lot of the time we find ourselves in a position
where we need to to connect the data that's in the tools we use.

So if we are administering surveys using Open Data Kit (ODK) a common workflow
is to aggregate this data and put it into a database like salesforce where we
can analyze it, report on it and share it with other members of our team.

In connecting these different tools we set up different data integration
processes that can be automated, or it can be a more manual approach with
someone manually reviewing surveys and then manually entering it into a database
system, or a combination of both approaches.

Whenever we think about introducing a new tool to our set of tools that our
organization is using or thinking about how can we better streamline this data
integration rpocess and how we share info between tools, it's really important
to sit down with a pen and paper and map out the data process.

## Defining your data process

The first question we ask new clients is **"what is your current data
process?"**

To illustrate how this works, let's create a hypothetical scenario:

- In Ethiopia a global health iNGO is using CommCare for mobile data collection
  and case management. The iNGO's community health workers (CHWs) are in the
  field capturing patient data on their mobile devices. For national reporting
  purposes this CommCare data gets uploaded into Ethiopia's dhis2 database so
  key health indicators can be monitored.

With the basic details of the scenario established, let's draw our first rough
sketch of the current process.

![CommCare_dhis2_1](/img/designing_integration2.png)

<!-- source for diagram: https://docs.google.com/presentation/d/1mVwxE7-0-B5NzTII3nCFaTw2DimGDcFlUQhIbwDE2TU/edit?usp=sharing -->

Great! We can now visually see, in a very basic way, what's going on with our
data, but a lot of the critical details related to the current process have not
yet been considered.

To draw a really good diagram and to gain a fuller understanding of the data flow, we need to dig a bit deeper by getting answers to the following 6 question categories:

1. Tools?  
*What software tools are we using?* 
2. Data flow?  
*How is the data flowing between these tools?*  
3. Tranformation?  
*Is there any data transformation taking place?* 
4. Timing?  
*What initiates this data flow?* 
5. Frequency?  
*How often is this process happening?* 
6. Volume?  
*What is the scale of this integration?*

