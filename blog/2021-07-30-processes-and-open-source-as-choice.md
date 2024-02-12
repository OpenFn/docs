---
layout: post
title:
  Platforms, Processes and Legitimate Freedom at the National Government Level
author: Taylor Downs
author_url: https://github.com/taylordowns2000
author_image_url: https://avatars.githubusercontent.com/taylordowns2000
tags: [deployment, global goods]
image: /img/unicef-cambodia-cc-daravatey-seng.jpg
---

In 2020, Robert MacTavish, a child protection specialist at UNICEF Primero lead,
met with the team at OpenFn and laid out a massive challenge facing the Ministry
of Social Affairs, Veterans and Youth Rehabilitation in Cambodia. He explained
that there was no secure, stable, scalable way to share data between different
case management systems operated by the government and partner agencies. The
result, he went on, was not merely an increased administrative burden but
re-victimization. Children might have to recount their whole case history,
reliving their traumas time and time again in order to register and access each
critical support service they needed.

<!--truncate-->

![UNICEF Cambodia (c) Daravatey Seng 2020](/img/unicef-cambodia-cc-daravatey-seng.jpg)

### Fast forward...

...to the spring of 2021 and child protection case data is now being securely
transmitted between systems as part of a fully automated, secure referral
workflow running through OpenFn.

> If you’re not familiar with OpenFn, it’s an integration platform and toolkit
> that has been used in over 40 countries to automate business processes,
> connect disparate systems, and facilitate secure, stable, scalable data
> sharing. Learn more at [OpenFn.org](https://www.openfn.org)

### A success for the Ministry

It’s a big success for the Ministry, for UNICEF, and partner NGO agencies using
Primero and OSCaR—the first two case management systems to be integrated. You
can read more about it in the
[Khmer Times](https://www.khmertimeskh.com/50814828/beefing-up-child-protection-case-management/),
the
[UNICEF press release](https://www.unicef.org/cambodia/press-releases/interoperability-between-primero-and-oscar-goes-live),
or
[Primero’s community forum](https://community.primero.org/t/interoperability-in-primero-with-openfn-is-changing-the-way-we-work/360),
but here I want to focus on a slightly more nuanced learning that came from this
[project](https://openfn.github.io/unicef-cambodia/) and Digital Square’s recent
investment in the OpenFn “Open Source Integration Toolkit”.

### Implementations aren’t always re-usable, but platforms and processes ARE.

We built OpenFn because we were frustrated by the amount of time and money that
was being spent rebuilding the digital infrastructure required for secure,
robust, long-lasting integrations. Each integration project may be completely
different in terms of _how_ data is processed (i.e., the “business rules”) but
there are some basic requirements and best-practices that can serve as the
building blocks for successful interoperability across almost any set of
systems. That’s no surprise to us; it’s the fundamental premise of OpenFn.
What’s expanded dramatically through our work in Cambodia, however, is our
collection of _**reusable processes**_—how to approach integration long before
you open up a computer—that can now serve as a template for future projects.

One such process is the “Integration Checklist”, a non-technical checklist that
helps organizations bring together relevant stakeholders and define the value
and rules of an integration. This is no small thing. In the Primero post
mentioned above, Jan Panchalingam, also a Child Protection Specialist at UNICEF,
writes that implementing OpenFn is “changing the way they work”.

The “aha” moment for those involved in this project was that the artifacts
produced in an OpenFn implementation—actual
[“triggers”](/documentation/build/triggers) and
[“jobs”](/documentation/build/workflows) written with and for the Open Source
Integration Toolkit—publicly memorialize the data sharing agreements between
partners.

I want to stick with that for a moment: **the implementation _is_ the
agreement!**

:::success

By **operationalizing a data sharing agreement** through OpenFn, these
organizations now have machine-readable granularity, full revision history, and
proof-of-processing for their contract.

:::

A huge portion of the work required to make the case management systems
interoperable was done on calls, walking through different referral flows and
privacy requirements and getting buy-in from various stakeholders and legal
entities. Now, the output of those crucial conversations are not just notes or a
signed MOU and careful task lists for system admins, they are a series of
scripts that are stored and actually enacted, faithfully, automatically, and
many times every day by the OpenFn platform–automating data exchange between
partner agencies.

By implementing OpenFn—defining the case referral process and the requirements
of the agreement in machine-readable levels of specificity—they’ve actually
removed huge amounts of ambiguity and helped standardize the data sharing
agreements between partner ministries/organizations.

And the reusability of these processes isn’t just theoretical. They are already
being applied in three other big UNICEF implementations as we speak. The next to
go live will be in Thailand.

UNICEF and the Thai Ministry of Public Health are working to enable social
protection caseworkers using the Primero app to access relevant patient medical
history securely, via OpenFn and a ministry-managed API gateway. By
foregrounding the checklist, and making sure all the stakeholders in these
sensitive data-sharing agreements are on board with the concept that this
implementation is a way of formalizing and enforcing data sharing agreements,
the teams have been able to move much more confidently through the initial
prototyping process. At OpenFn, we plan to continue to build out the open source
process documentation that goes alongside the software—making it easier for
folks everywhere to achieve durable interoperability and manifest their data
sharing agreements.

### One more thing. On the subject of open source.

**Open source is about freedom of choice, not money.**

For the moment, in both Cambodia and Thailand, the implementations are running
on OpenFn.org—our proprietary cloud-hosted service—but in both cases they’re
already evaluating plans to migrate these implementations to make use of the
FOSS-only deployment pathway we provide in the Open Source Integration Toolkit.

I think that’s hugely important. A cloud-hosted service might be the best option
for a given ministry during prototype, pilot, scale-up, or even national-scale
deployments—oftentimes they’re less expensive and more secure—<b><i>but for
systems as important as these, it’s absolutely critical that they’re not locked
in.</i></b>

Governments must be free to export that implementation and run it on completely
open source software that they can debug, on whatever servers they’d like, with
support from whatever vendors they choose.

This is what recent investment in the Open Source Integration Toolkit, from
Digital Square, the FCDO, DIAL, and our team here at OpenFn has made possible.
From software, to documentation, to process and implementation guides like those
mentioned above, the goal of the toolkit is to build up the integration
capability of the sector at large. Ultimately the toolkit will ensure that
OpenFn implementations aren’t forever reliant on a single company. It will
increase the substantive freedom of governments to make long-term plans and take
long-term ownership of their integration solutions, without having to re-code
the wheel.

### To take action

To join our community please sign up to our
[community page ](https://community.openfn.org/)and feel free to contribute and
ask questions on the forum.

If your organization is thinking about interoperability and would like to learn
more about OpenFn’s platform or open-source offerings please contact
services@openfn.org for a free consultation.

Also, be sure to stay tuned to our [blog](/blog), or subscribe to our
[newsletter](http://eepurl.com/hcOw8H) to stay up to date with all ICT4D
integration related news.
