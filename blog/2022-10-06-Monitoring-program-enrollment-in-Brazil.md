---
title: Monitoring program enrollment in Brazil with automated data syncing
author: Aissatou Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
tags:
  [
    case study,
    Brazil,
    education,
    SFTP,
    Salesforce,
  ]
featured: true
---

The [Itaú Social Foundation](https://www.itausocial.org.br/en/) is an organization in Brazil which develops and implements interventions to improve Brazilian public education. According to the foundation’s 2020 annual report, 4.4 million students benefited from its programming across 4,262 Brazilian municipalities in 2020 alone. 

<!--truncate-->

| ![Itau Social Impact](/img/itau_social.png) |
|:--:|
| <b>Itaú Social's impact on Brazilian education in 2020. Credits: Itaú Social.</b>|


Itaú Social uses Salesforce as its information system for monitoring its social impact in Brazil and informing future programming. To connect its siloed information systems and better analyze its impact across its immense network of partner organizations, programs, and students, Itaú Social has recently expanded its Salesforce system to consolidate data from multiple sources and enable impact analysis via one system. However, it takes the staff lots of time and money to manually load data from multiple source systems into one destination system. Exchanging this data manually also increases the risk to data quality and makes it difficult to track data loading errors. 

With OpenFn’s help, Itaú Social has implemented secure data integration across its systems, minimizing the need for staff to manually migrate data to Salesforce. OpenFn enables automated data sharing and reporting, thereby increasing efficiency and data quality of these processes. This has ultimately helped the Foundation achieve faster and better outcomes for students across Brazil. 

![Brazil Students](/img/brazil_students.png)

### Two source systems–one destination. 

OpenFn is helping Itaú Social consolidate data from two source systems into Salesforce.

| ![Itau Integration Diagram](/img/itau_integration_diagram.png) |
|:--:|
| <b>The current implementation integrates data from an API and SFTP server with Salesforce.</b>|

#### Source 1 - API:

Itaú Social uses an internal, custom-built system to collect and store important information about partner organization registration and about enrollment data for the students they serve. The data from this system is accessed via a REST API. 

#### Source 2 - CSV File Exports saved on an SFTP Server:
Itaú Social uses another system for its Polo distance learning platform called  CrossKnowledge Learning Suite. This system also stores information about student enrollment which is accessible via an SFTP server. 

#### Destination - Salesforce:
Itaú Social implemented Salesforce in partnership with [Vera Solutions](https://verasolutions.org/), a social enterprise providing cloud and mobile solutions for social sector organizations, to better track its impact, streamline its operations, and create feedback loops for data-driven decision making.


To automate data exchange with the Foundation’s API and the SFTP server, OpenFn extracts relevant data from the two source systems, transforms the data values and applies data cleaning rules to normalize the data, maps the data to the Salesforce data model, and finally syncs it to Salesforce. These integrations run on a scheduled basis using OpenFn SaaS. 


**This OpenFn-powered solution has empowered Itaú Social to:**
1. securely deliver centralized data access and monitoring to its staff for enhanced monitoring capabilities across the foundation’s portfolio
2. analyze its impact across two separate systems using aggregated indicators 
3. provide a more a wholistic picture of student enrollment across its multiple programs 

As Itaú Social scales its systems, it is considering extending its OpenFn implementation to integrate even more data sources with its Salesforce M&E system. 

If your organization is interested in automating its data exchange or reporting processes, you can check out the [OpenFn Documentation site](https://docs.openfn.org/documentation/) and post your questions on [OpenFn Community](http://community.openfn.org). 


