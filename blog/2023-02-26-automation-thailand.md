---
layout: post
title: 'Automation delivers critical information to caseworkers providing preventative care for children at-risk for violence and abuse in Thailand'
author: Aissatou Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
tags: [tips]
image: /img/roads.jpg
featured: true 
---

In Thailand, 58 percent of children under 14 face physical and psychological punishment at home and there are only four social workers for every 100,000 people in Thailand (UNICEF). This large gap between the supply and the demand for child protection services is being mitigated by One Stop Crisis Centres which provide treatment and support for vulnerable children in every district hospital in Thailand. However, the Thai Ministry of Public Health (MoPH) has learned that when a child walks into one of these centers there are still major issues with the previous paper-based system: 


<!--truncate-->

1. The caseworker does not have access to the child’s comprehensive medical history because each hospital keeps sensitive records on a different information system 
2. Unnecessary time is wasted and there is a great risk of human error when caseworkers attempt to manually retrieve and consolidate medical history from siloed systems
3. Children are subject to re-trauma each time they attempt to access a service and recount their history 


In collaboration with UNICEF and OpenFn, the MoPH has mitigated these issues by implementing [Primero](https://www.primero.org/), an open-source case management system for humanitarian protection and social welfare workers. In 2022 alone, Primero has partnered with OpenFn to connect Primero with child protection systems in multiple sites including [Cambodia](https://openfn.github.io/unicef-cambodia/), [Thailand](https://openfn.github.io/primero-thailand/), and [Ethiopia](https://github.com/OpenFn/primero-progres). 

| ![Primero Thailand](/img/primero-thailand.png) |
|:--:|
| <b>Primero case management system</b>|


With Primero implemented in selected district hospitals, case workers now had a powerful tool for case management, but lacked access to existing case and health records on file in the national Health Information System (“HIS”). To provide Primero caseworkers with seamless, but secure access to HIS records, UNICEF introduced OpenFn, the leading digital public good for workflow automation, as secure, scalable option for automating data integration between these two information systems.  


![Primero Thailand](/img/primero-thailand-flow.png)

### Phase 1: Automating record sharing between child protection and health information systems 

In November 2021, the MoPH and UNICEF partnered to implement OpenFn to integrate HIS data with Primero case records. With OpenFn, at the click of a button, caseworkers using Primero can request access to medical records and past hospital visits for their clients, and use this enriched client profile to develop better care plans and more quickly identify services needed. 


| ![Primero Thailand](/img/primero-thailand-detailed-flow1.png) |
|:--:|
| <b>The Phase 1 sync is triggered by a Primero user requesting sensitive data from the MoPH via OpenFn. The Primero case is updated by OpenFn with any data received from the MoPH.</b>|


OpenFn automation has also helped increase casework efficiency, improved data accuracy, and minimized risk of security breach, by saving the caseworker the need to search for information in one system and manually re-enter data into another. Moreover this solution makes it easier and less costly to scale. 



### Phase 2:  Data integration to predict risks and inform caseworker care plans for vulnerable children

Once the data exchange workflow between Primero and the HIS was automated, the MoPH decided to connect Primero with a new AI-based application they developed, Child-Shield. Child-Shield is a surveillance and case management system that employs predictive analytics to screen and track children and families at risk of violence. Given data from case management systems, it is able to generate risk profiles that help caseworkers form better care plans. 

| ![Primero Thailand](/img/primero-thailand-detailed-flow2.png) |
|:--:|
| <b>The Phase 2 sync is scheduled to run daily. OpenFn fetches new risk data in Child Shield and updates the Primero case with risk scores.</b>|


Therefore, in 2022, the MoPH extended its OpenFn implementation to also integrate Primero with Child-Shield. 

- On a daily basis, OpenFn extracts new case data from Primero and syncs it to Child-Shield, to feed the risk profiling algorithms. 
- Then, when registering a new case in Primero, a caseworker can, on-demand, click to sync the child’s case record to review any risk profile information available in Child-Shield. 

**The OpenFn automation has enabled the Thai MoPH to:** 
- Automatically improve the Child-Shield risk assessment model by feeding Primero data back into Child-Shield.
- Identify and maintain a comprehensive record for children who are at-risk of violence and abuse and suggest preventative actions for such children (read more from the [Bangkok Post](https://www.bangkokpost.com/tech/2284358/tech-platform-primero-launched-in-thailand-to-help-social-workers-better-protect-children)). 

To learn more about other OpenFn-Primero implementations, check out the [UNICEF Cambodia case study](https://docs.openfn.org/blog/2021/02/09/interoperability_for_case_referrals). If your organization is interested in automating data exchange or reporting workflows, you can learn more about the OpenFn Digital Public Good on the [Documentation site](https://docs.openfn.org/documentation/) or post questions on [OpenFn Community](http://community.openfn.org). 

| ![Primero Thailand](/img/thailand-kids.png) |
|:--:|
| <b>[UNICEF](https://www.unicef.org/thailand/reports/thailand-migration-report-2019)</b>|


