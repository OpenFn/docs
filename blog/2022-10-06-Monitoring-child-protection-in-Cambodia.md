---
layout: post
title:
  Monitoring child protection in Cambodia with automated data sharing and reporting 
author: Aissatou Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
tags: [case study, Cambodia, child protection, UNICEF, Primero]
featured: true
---

In Cambodia, 66 per cent of children experienced physical punishment and/or psychological aggression by caregivers in the past month ([CDHS](https://www.nis.gov.kh/index.php/km/17-cdhs/123-cambodia-demographic-and-health-survey-2021-22), 2021-2022), and 11 per cent experienced online child sexual exploitation and abuse ([Disruptive Harm Study](https://www.end-violence.org/sites/default/files/2022-09/DH_Cambodia_ONLINE_final_JS%20%281%29.pdf), 2022). To strengthen Cambodia’s child protection system so that children are sheltered from harm, UNICEF works with the Ministry of Social Affairs, Veterans & Youth Rehabilitation (MoSVY), the Ministry of Interior, other Ministries, and in-country NGO partners. This year, thanks to OpenFn-powered automation, these partners have released a new child protection monitoring dashboard that can keep up-to-date with the latest case management information.




## Launching the Child Protection Information Management dashboard

In 2021, the MoSVY, with support from UNICEF Cambodia, launched the Child Protection Information Management System (CPIMS) dashboard to visualize 50 child protection indicators. For the first time, the dashboard provided key child protection related data in one platform, enabling policy makers and service providers to more effectively monitor and evaluate child protection programmes as well as supporting planning and decision making.

This project was a culmination of work that started in 2018, which included the configuration of CPIMS and development of the monitoring framework for child protection. As part of the CPIMS initiative, UNICEF Cambodia also supported the MoSVY to establish and implement the [Primero](http://primero.org) case management system, a tool that supports government social service workers to facilitate case management for children who are at risk of or experience violence and other child protection concerns in any setting. 



| ![cambodia child](/img/cambodia-kids.png) |
|:--:|
| *Knowledge E, 2020*|

## OpenFn automation keeps the dashboard in-sync
When the CPIMS dashboard was first launched, it was not connected directly to Primero (the system where case information is managed). This meant that the dashboard was not always up-to-date with the case information and “out-of-sync” with what was actually happening in the field.

To ensure this dashboard is always “in-sync”, UNICEF Cambodia collaborated with OpenFn to implement automated data exchange between Primero and the database feeding the CPIMS dashboard. This automated Primero-to-dashboard workflow runs on a regular basis (according to MoSVY’s reporting cycles), ensuring the latest case management and services data are reflected in the dashboard and eliminating the need for manual data entry or tedious calculation of indicator results. 



| ![ona_integration](/img/ona_integration.png) |
|:--:|
| *The current Cambodia implementation integrates Primero and a central PostgreSQL database, which feeds the CPIMS dashboard (built on Canopy analytics tooling).*|

**This solution empowers MoSVY to:**

1. Securely share cleaned, anonymized, reporting-ready data extracts publicly for better monitoring, trend analysis, programming and planning; 
2. Make indicator results automatically available for further visualization and analysis by caseworkers, donors, and partners;
3. Analyze its impact across provinces in Cambodia;
4. Easily scale and expand its reporting by implementing this solution in other countries or  integrating data from other partner systems into one database for centralized analysis.

| ![ona_dashboard](/img/ona_dashboard.png) |
|:--:|
| *Snapshot from the MoSVY Child Protection Information Management System supported by UNICEF Cambodia. The CPIMS dashboard includes data on indicator 4.11a on the number of children supported with case management services, one of the sources of which is Primero.*|

After the reporting requirements were finalized, this OpenFn integration was configured in less than one day, leveraging the existing open-source [Primero adaptor](https://docs.openfn.org/adaptors/primero). The current implementation integrates one Primero instance and a PostgreSQL database (which feeds the dashboard), but future implementations might integrate data from multiple systems into one database for centralized analysis. 

If your organization is interested in automating its reporting processes, you can check out this project’s [GitHub documentation](https://openfn.github.io/primero-ona-dashboard/) page and
post your questions on [OpenFn Community](http://community.openfn.org).


_“We are going to share this brilliant piece of work internally within UNICEF as well as Government partners through MoSVY to promote data use and strengthen case management,”_ said Phanneth Khauv, Child Protection Officer at UNICEF Cambodia.
