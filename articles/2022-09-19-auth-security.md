---
layout: post
title: 'Secure by design: a roadmap to secure authentication and authorization'
authors: amber
tags: [security, authentication, authorization]
image: https://user-images.githubusercontent.com/105651463/172341536-ebde5ca0-12b8-4a8a-bb40-da9442701df3.png
featured: false
---

In order to ensure that Global Goods and Digital Public Goods can enable impact
without doing any harm, it is crucial that their authentication and
authorization systems are secure from the outset.

We’ve put together a resource to help other Digital Public Goods and Global
Goods achieve just this. You can view and comment on the resource
[here](https://docs.google.com/document/d/1QvOcOdk2iZCWnAVNiBbmhh-6Q2gapUhsMCUzJQNWqEU/edit?usp=sharing),
or read on to learn why.

<!--truncate-->

Digital health technologies have a critical role to play in both improving the
delivery of health services _and_ making health systems more robust and
adaptable. Whilst this has been the consensus for a while, various factors such
as bureaucracy, lack of capacity, authority/ownership, budget or simply lack of
prioritization have hindered the adoption and implementation of such
technologies.

However, the COVID-19 pandemic has brought digital health systems back to the
top of the agenda, having forced governments to adapt their health systems and
processes in a short amount of time and confronted them with the fragility and
inflexibility of some of their existing systems. This has led to an increase in
funding for both new and existing health technologies.

At the same time, the recent pandemic also saw an increase in data breaches and
data leaks in the healthcare sector. Whilst these are a serious matter in any
system, the nature of the healthcare technologies means that the data they are
storing or managing almost always includes Personally Identifiable Information
(PII) which, if leaked, can have dramatic consequences for those they identify.

The higher the number of technologies and quantity of data stored in these, the
higher the risk of vulnerabilities and negative impact of a data breach or data
leak. If Global Goods are to make the most of this renewed interest and increase
in funding for digital health technologies, it is crucial for them to keep
security as a top priority to ensure that they ‘do no harm’, a
core[ Digital Public Good](https://digitalpublicgoods.net/standard/) principle.

Several organizations have already put some thought into documenting security
best practices and standards. However, none situate these security decisions
within the wider context of a product development timeline or roadmap. This
requires individuals to regularly scan through long lists of security
recommendations to pick out and prioritize their implementation, increasing the
likelihood of an oversight or early-made product decisions which make it harder
to implement such security features down the line.

As product manager at Open Function Group, I myself have recently been reviewing
and analyzing numerous resources to identify and prioritize features required to
get to fully-secure authentication and authorization for our newest product
[Lightning](/documentation#openfn-v2-lightning-/)–and make sure that nothing
falls through the cracks. I’ve also had the opportunity to gather insights from
Digital Public Good community forums (OpenMRS, DHIS2, OpenLMIS, etc) and speak
to other product managers and engineers from the Digital Public Goods community
to ask them about their learnings, and any tips they might have: Austin and
Morten from DHIS2, Dev and Biyeun from Dimagi.

**To more widely share these learnings, we have drafted this resource
documenting the specific security measures that should be considered at each
stage of product development _specifically with regards to authentication and
authorization. _**Our hope is that this article will help other product managers
in the Global Good (GG) and Digital Public Good (DPG) communities consider these
features into their backlog/roadmap from the outset and make sure they are
following a ‘secure by design’ approach. To inform our analysis, we analyzed
learnings from the wider DPG community, as well as recommendations from other
security experts and international standards, including GovStack, OpenHIE,
OWASP, NIST, and more.

**The resource can be found
[here](https://docs.google.com/document/d/1QvOcOdk2iZCWnAVNiBbmhh-6Q2gapUhsMCUzJQNWqEU/edit?usp=sharing).**
