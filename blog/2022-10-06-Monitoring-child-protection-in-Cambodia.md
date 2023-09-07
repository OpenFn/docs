---
layout: post
title:
  Implementing child protection in Cambodia with automated data sharing and
  reporting
author: Aissatou Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
tags: [case study, Cambodia, child protection, UNICEF, Primero]
featured: true
---

In Cambodia, 66 percent of children experienced physical punishment and/or
psychological aggression by caregivers in the past month (CDHS, 2021-2022), and
11 percent experienced online child sexual exploitation and abuse (Disruptive
Harm Study, 2022). UNICEF works with the Ministry of Social Affairs, Veterans &
Youth Rehabilitation (MoSVY), Ministry of Interior, other Ministries, and
in-country NGO partners to strengthen Cambodia’s child protection system so that
children are protected from harm. In 2021, MoSVY, with support from UNICEF
Cambodia launched the Child Protection Information Management System (CPIMS)
dashboard to visualize 50 child protection indicators. This was a culmination of
work that started in 2018 and which included the mapping of the CPIMS in
Cambodia and development of the monitoring framework for child protection.

As part of the CPIMS initiative, UNICEF Cambodia also supported MoSVY to
establish and implement the Primero case management system that offers
government social service workers a tool to facilitate case management for
children who are at risk of or experience violence and other child protection
concerns in any setting. **The dashboard provides for the first time key child
protection related data in one platform, which is enabling policy makers and
service providers with monitoring and evaluating effectiveness of child
protection programming as well as planning and decision making.**


| ![cambodia child](/img/cambodia-kids.png) |
|:--:|
| *Knowledge E, 2020*|

In 2020, UNICEF Cambodia decided to implement Primero, an open-source case
management system for humanitarian protection and social welfare workers. This
year, UNICEF Cambodia partnered with ONA to also develop a Canopy-based
dashboard to visualize child protection-related indicators across its
information systems. Instead of requiring staff to manually report on key
indicators, UNICEF invested in a solution to automate reporting, minimizing the
time it takes for data syncing and eliminating human error to ensure timely and
quality monitoring data.

| ![ona_integration](/img/ona_integration.png) |
|:--:|
| *The current Cambodia implementation integrates Primero and a central PostgreSQL database.*|

This year, UNICEF Cambodia collaborated with OpenFn to implement a custom and
flexible automated data sharing solution that enables reporting from Primero to
a Ona canopy-based CPIMS Dashboard on key results of case management and
services at a low cost–eliminating human error to ensure timely and quality
monitoring data. To automate the Primero-to-CPIMS dashboard integration, on a
scheduled basis according to MoSVY’s specified reporting cycles, OpenFn extracts
relevant data from Primero, aggregates and calculates indicator results, and
syncs data to the CPIMS dashboard. **This solution empowers MoSVY to:**

1. securely share cleaned, anonymized, reporting-ready data extracts publicly
   for better monitoring, trend analysis, programming and planning
2. make indicator results automatically available for further visualization and
   analysis by caseworkers, donors, and partners
3. analyze its impact across provinces in Cambodia
4. easily scale and expand its reporting by implementing this solution in other
   countries or integrating data from other partner systems into one database
   for centralized analysis

| ![ona_dashboard](/img/primero-ona-dash-example.png) |
|:--:|
| *Snapshot from MoSVY Child Protection Information Management System supported by UNICEF Cambodia. The CPIMS dashboard includes data on the number of children supported with case management services, one of the sources of which is Primero.*|

After the reporting requirements were finalized, this OpenFn integration was
configured in less than 1 day, leveraging the existing open-source
[Primero adaptor](http://github.com/OpenFn/language-primero). The current
implementation integrates one Primero instance and a PostgreSQL database (which
feeds the dashboard), but future implementations might integrate data from
multiple systems into one database for centralized analysis.

If your organization is interested in automating its reporting processes, you
can check out this project’s
[GitHub documentation](https://openfn.github.io/primero-ona-dashboard/) page and
post your questions on [OpenFn Community](http://community.openfn.org).

“We are going to share this brilliant piece of work internally within UNICEF as
well as Government partners through MoSVY to promote data use and strengthen
case management.” - Phanneth Khauv, UNICEF Cambodia
