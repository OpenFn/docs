---
layout: post
title: Implementing child protection in Cambodia with automated data sharing and reporting
author: Aissatou Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
tags:
  [
    case study,
    Cambodia,
    child protection,
    UNICEF,
    Primero,
  ]
featured: true
---

In Cambodia, one in two children has experienced severe beating, one in four has suffered from emotional abuse, and one in 20 has been sexually assaulted ([Unicef.org](https://www.unicef.org/cambodia/child-protection)). UNICEF, as a global leader in Child Protection and Gender-Based Violence programming, works with the Ministry of Social and Veteran Affairs & Youth Rehabilitation (MoSVY) and in-country NGO partners to strengthen Cambodia’s child protection system so that children are protected from harm. Without secure, scalable data sharing, their work would be difficult to monitor and analyze across different projects in Cambodia. OpenFn makes it possible for caseworkers to report on and monitor different indicators so that UNICEF can achieve faster and better outcomes for vulnerable children in Cambodia.
 

<!--truncate-->

![cambodia_child](/img/cambodia_child.png) 

In 2020, UNICEF Cambodia decided to implement Primero, an open-source case management system for  humanitarian protection and social welfare workers. This year, UNICEF Cambodia partnered with ONA to also develop a Canopy-based dashboard to visualize child protection-related indicators across its information systems. Instead of requiring staff to manually report on key indicators, UNICEF invested in a solution to automate reporting, minimizing the time it takes for data syncing and eliminating human error to ensure timely and quality monitoring data. 

| ![ona_integration](/img/ona_integration.png) |
|:--:|
| <b>The current Cambodia implementation integrates Primero and a central PostgreSQL database.</b>|



UNICEF Cambodia collaborated with OpenFn to implement a custom and flexible automated data sharing solution that enables reporting on key results at a low cost. To automate the Primero-to-dashboard integration, on a scheduled basis, OpenFn extracts relevant data from Primero, aggregates and calculates indicator results, and syncs data to the indicators dashboard. **This solution empowers UNICEF to:** 
1. securely share cleaned, anonymized, reporting-ready data extracts with partners
2. make indicator results automatically available for further visualization and analysis by caseworkers, donors, and partners
3. analyze its impact across separate Primero instances in Cambodia and beyond 
4. easily scale and expand its reporting by implementing this solution in other countries or  integrating data from other partner systems into one database for centralized analysis


| ![ona_dashboard](/img/cambodia_dashboard.png) |
|:--:|
| <b>Example ONA dashboard</b>|

After the reporting requirements were finalized, this OpenFn integration was configured in *less than 1 day*, leveraging the existing open-source [Primero adaptor](http://github.com/OpenFn/language-primero). The current implementation interagrates one Primero instance and a PostgreSQL database (which feeds the dashboard), but future implementations might integrate data from multiple systems into one database for centralized analysis. 

If your organization is interested in automating its reporting processes, you can check out this project’s [GitHub documentation](https://openfn.github.io/primero-ona-dashboard/) page and post your questions on [OpenFn Community](http://community.openfn.org). 



