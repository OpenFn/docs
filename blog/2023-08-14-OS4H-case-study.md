---
title: 'Using OpenFn to automate immunization indicator reporting to DHIS2 in the Caribbean'
author: Aicha Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
featured: true
---

[Open Solutions for Health (“OS4H”)](http://www.opensolutions.health/) is an Integrated Systems for Health collaborator and
implementer specializing in providing enterprise support for free and open-source systems
(FOSS). They customize small, mid-range and large open source health applications for Ministries of Health, medical councils, medical doctor practices, health groups and hospitals in the Caribbean. While OS4H specializes in digital health implementations, their Dominica-based team of IT specialists also works across other sectors, and has recently become a certified OpenFn Implementation Partner so that they can offer workflow automation solutions for their Caribbean partners.  

Peter Ricketts, CEO at OS4H, says the team provides sustainable solutions designed to meet the needs of organizations in small island developing states (SIDS) that will strengthen their health management operations. **“Our mission is to improve health outcomes by matching the right technologies to the problems and build the supporting framework around it to ensure it is implemented and sustained over the long run. We believe in making high quality data and information available to those who need it, where they need it, and when they need it in a sustainable manner.”**



| ![osh4h-team](/img/os4h-team.png) |
|:--:|
| <b>Open Solutions for Health Team</b>|


Most recently, OS4H is working with partners at the St. Lucia Ministry of Health (MOH) to expand their in-country DHIS2 implementation to monitor key immunization indicators. Check out [this press release](https://dominicanewsonline.com/news/homepage/news/press-release-for-world-immunization-week-open-solutions-for-health-delivers-again/) to learn more about the project supported by the [Pan American Health Organization (PAHO)](https://www.paho.org/en).

DHIS2 offers robust dashboard and data visualization options, but St. Lucia’s immunization data was collected in a separate database, along with sensitive patient information that should only be accessed by authorized users. Therefore, to (i) avoid manual data entry and indicators calculations, and(ii) minimize access to sensitive patient data, OS4H sought to automate the reporting of key immunization indicators to DHIS2. After researching secure, open source, and OpenHIE-compliant options for data integration, OS4H decided to deliver this solution using the OpenFn workflow automation platform. **In less than 1 month, OS4H successfully designed and implemented automation that integrates the St. Lucia Health Information System (“SLUHIS”) database with DHIS2, enabling regular, nation-wide monitoring of key immunization indicators for MOH staff and epidemiologists.**

This OS4H implementation consisted of two phases: 1) training on the OpenFn platform and 2) implementation of the automated workflow for St. Lucia. 


## Learning how to implement OpenFn

Earlier this year, we launched the OpenFn Implementation Partner Program to offer training on the OpenFn Digital Public Good, as well as on our core team’s implementation process. At OpenFn, we have a small implementation team that cannot meet the rising demand for workflow automation we’re seeing worldwide. Therefore, we are investing more in partner enablement to help develop the automation expertise and OpenFn implementation capacity of local IT teams solving local problems–like OS4H in the Caribbean. 

To quickly learn how to implement OpenFn, the OS4H team completed the OpenFn Partner Onboarding Training to learn about the OpenFn platform, as well as how to successfully design and deliver workflow automation implementations end-to-end. Over the course of 2 weeks, OS4H team members attended online training sessions and completed “homework” exercises to practice OpenFn fundamentals and prepare for their upcoming, real-world projects. At the end of the training, the OS4H team officially joined the [OpenFn Community](https://community.openfn.org/), received “OpenFn Essentials” badges for OpenFn administration and development, and were prepared to kick off their first implementation with the St. Lucia Ministry of Health.

"After adopting the OpenHIE reference architecture, we began exploring the various referenced technologies. Upon review of the interoperability layer technologies, we quickly appreciated the versatility and ease of use of OpenFN. OpenFN utilizes JavaScript, a scripting language that is familiar to most developers in the Caribbean. This meant a lower learning curve, enabling us to get up and running relatively quickly. Furthermore, the support from the OpenFN team allowed us to build in-house capacity for the full delivery cycle of an OpenFN project." - Peter Ricketts

## Automating indicator results reporting for St. Lucia

Following the OpenFn training, the OS4H team successfully led the design and implementation of a solution which integrates SLUHIS, a PostgreSQL database, with DHIS2. 

This process involved consultations with St. Lucia MOH partners to understand the SLUHIS data structure and how to map SLUHIS data points to the DHIS2 data model. Once the data mapping requirements and workflow steps were clearly defined, then OS4H was able to configure the workflow on OpenFn and schedule the automation to run hourly. 

**The workflow automation runs as follows:**

![osh4h-flow](/img/os4h-flow.png)


1. On an hourly basis, OpenFn executes complex SQL queries to extract and aggregate immunization data from the SLUHIS PostgreSQL database.
2. OpenFn next fetches a list of “data mapping rules” from SLUHIS, which inform how municipalities should be reassigned to organization units in the DHIS2 location hierarchy.
3. OpenFn then maps the SLUHIS aggregated indicators results to related DHIS2 data elements to prepare the data for import.
4. Finally, using the DHIS2 adaptor, OpenFn imports data values to DHIS2, updating linked indicators and dashboards.

| ![osh4h-dashboard](/img/os4h-dashboard.png) |
|:--:|
| <b>Test dashboard in DHIS2 of key immunization indicators </b>|

As the workflow runs, all activity history can be centrally monitored in the OpenFn app, and alerts are configured to notify St. Lucia MOH partners if any errors are thrown. 

For the MOH staff and epidemiologist end users, the DHIS2 immunization dashboards are updated automatically and regularly, ensuring access to timely information to inform their program decision-making. These users might not even be aware that OpenFn is the workflow automation engine under the hood–the DHIS2 solution just works.   


| ![osh4h-meet](/img/os4h-meet.png) |
|:--:|
| <b>Screenshot from online meeting with Taylor Downs (OpenFn) and Clem Francis (Developer, OS4H) celebrating the successful setup of an OpenFn workflow that automates reporting to DHIS2 of aggregate data values for key indicators. </b>|

## Next Steps
In April 2023, OS4H successfully launched the DHIS2 dashboard solution and handed over the monitoring of the OpenFn automation to the St. Lucia MOH team for the duration of the pilot. Following the pilot, the St. Lucia MOH and OS4H will consider adding functionality and deploying the solution on a local, ministry-managed server, using [OpenFn Lightning](https://docs.openfn.org/documentation/about-lightning) (the OpenFn “v2” fully open-source web app) for continued use at a greater scale. 

In the meantime, the OS4H team is continuing to deliver transformative digital solutions for partners across the Caribbean and is lining up its next OpenFn project. 

If your organization, like OS4H, is hoping to develop in-house workflow automation expertise, contact partnerships@openfn.org to learn more about the OpenFn Partner Program and training options. Also check out [OpenFn Community](http://community.openfn.org) and [OpenFn Documentation](http://docs.openfn.org) to learn from other OpenFn partners and open source resources. 


