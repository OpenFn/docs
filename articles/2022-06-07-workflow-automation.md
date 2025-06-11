---
layout: post
title:
  'Workflow Automation; Why do it yourself when a program can do it for you?'
authors: alexa
tags: [automation, solution]
image: https://user-images.githubusercontent.com/105651463/172341536-ebde5ca0-12b8-4a8a-bb40-da9442701df3.png
featured: false
---

Do you think twice when you get an automatic SMS notification because your
prescription is ready? (Neither do I.) This seamless experience is driven by
“workflow automation”, a key feature that OpenFn provides. The OpenFn
Integration Toolkit is a Digital Public Good (DPG) used by governments and NGOs
to boost efficiency through workflow automation. The automation that OpenFn
provides includes automatically sending SMSs, automating stock updates across
supply chain systems, tracking clinical visits, and helping plan vaccine
rollouts. We support our partners’ work by lifting the burden of manual data
transfers between platforms.

<!--truncate-->

:::note

This article
[originally appeared](https://www.linkedin.com/pulse/workflow-automation-why-do-yourself-when-program-can-you-openfn/?trackingId=TnWiYNtf5QP4GfAj6R4meQ%3D%3D)
as a LinkedIn article from Open Function Group.

:::

## What is workflow automation?

Workflow automation is an approach to making the flow of tasks across platforms
run independently. A prescription SMS notification feels seamless, but it
probably requires complex automation across multiple systems like clinical
registries, pharmacy stock databases, and SMS gateways. Tools like OpenFn run
“behind the scenes” to perform calculations and transfer relevant data to/from
different systems autonomously, minimising the risk of human error and
ultimately saving time and money that an agency would spend on manual data
transfers. The goal is to preserve data integrity, uphold data security, and
enforce compliance with policies and data standards.

Since 2014, OpenFn has been at the forefront of workflow automation in the
social sector, providing a platform to help governments and NGOs focus on the
human aspect of their work rather than wasting time trying to exchange data
between systems or perform calculations manually.

### MyAgro

[MyAgro](https://www.myagro.org/), an NGO helping West African farmers increase
their yield, uses OpenFn to power its SMS-based savings deposit system for
small-scale farmers. MyAgro distributes and tracks saving vouchers using the
[CommCare](https://www.dimagi.com/commcare/) app. Smallholder farmers purchase
pre-paid myAgro saving scratch cards and text the one-time code to secure the
voucher credit in their account. Once the amount has been added to their
balance, a confirmation notification is sent to the farmer. MyAgro works with
the farmers to reach their savings goal, which they then use to pay for seeds,
fertilisers, and training courses. OpenFn:

<p align="center">
  <img src="https://user-images.githubusercontent.com/105651463/172341045-62a3eebd-98fb-4189-987f-06bbdb03ac30.png" />
</p>

1. Syncs voucher codes from CommCare to Salesforce so the relevant offices can
   track who purchased the saving vouchers.
2. Matches incoming SMSs against the database of vouchers to deposit correct
   funds into the individual account.
3. Allocates savings to farmers’ accounts in Salesforce and updates the account
   status.
4. Sends a confirmation SMS with updated account balances to farmers, so they
   are aware of their credit.

OpenFn helps myAgro reach more farmers with less administrative overhead by
automating these key steps. MyAgro calculated that even at their 2014 levels of
scale, OpenFn saved them 260+ hours per year and increased customer confidence
as they worked to serve poor farmers.

### Sinapis

[Sinapis](https://sinapis.org/), an NGO that empowers entrepreneurs through
training courses, uses OpenFn to automate its payment collection process. Every
time a client’s new
[M-Pesa](https://www.vodafone.com/about-vodafone/what-we-do/consumer-products-and-services/m-pesa/globalmerchants)
payment is registered in [Kopo Kopo](https://kopokopo.co.ke/), OpenFn:

<p align="center">
  <img src="https://user-images.githubusercontent.com/105651463/172341175-5505b647-93dc-44af-9143-00ebdd0b5bae.png" />
</p>

1. Automatically matches incoming payments with existing Sinapis accounts.
2. Logs new payments and updated payment status in Salesforce to track
   entrepreneurs’ charges.
3. Updates account balances to help staff monitor outstanding balances and
   overdue fees.

With OpenFn handling the routine data processing, Sinapis has more time to
support its entrepreneurs. Precious staff time can be spent delivering training,
the essential face-to-face coaching that transforms their clients’ fledgling
enterprises. Their team does not have to worry about the accuracy of payments
and account balances; the OpenFn implementation replaces error-prone manual data
entry with a systematised, intelligible, fully automated process.

### DIAL

The [Digital Impact Alliance (DIAL)](https://digitalimpactalliance.org/), an
organisation that works to overcome digital development barriers, wanted to
prototype a “building-blocks based approach” for their upcoming GovStack.global
project. They configured an HR workflow solution that connects mobile data
collection apps, databases, and payment apps using OpenFn. Every time an
organisation registers new workers via
[ODK Collect](https://docs.opendatakit.org/collect-intro/), OpenFn:

<p align="center">
  <img src="https://user-images.githubusercontent.com/105651463/172341214-06a1e74b-c1e3-45e4-83c8-4a60af5a9d2d.png" />
</p>

1. Automatically registers new employees in an [iHRIS](https://www.ihris.org/)
   database to oversee all new hires.
2. Makes payments to workers via
   [Mifos](https://www.google.com/aclk?sa=l&ai=DChcSEwicha-ltsnnAhUB1N4KHY8hDEoYABAAGgJ3Yg&sig=AOD64_27g900G2RtoQsW0km9iT4Oq262ag&q=&ved=2ahUKEwj8wKeltsnnAhVSxYUKHVcrBbUQ0Qx6BAgMEAE&adurl=),
   ensuring all wage transfers are direct.

While it’s not in use at scale, this prototype is a powerful illustration of how
automation enables scalable, component-based solutions to become more than the
sum of their parts. The processes that DIAL implement with OpenFn help unlock
the true potential of these powerful underlying DPGs.

## What’s the big picture here?

OpenFn’s goal is to increase the efficiency and effectiveness of the social
sector. Why should health and humanitarian organisations waste precious
resources manually moving data across systems when workflow automation can do it
more safely and quickly? We want to ensure employees focus on using data to do
their work, not transferring data between systems and running rote calculations.

Saving organisations time and money is part of the picture, but we also deliver
better program outcomes through efficiency and effectiveness. Suppose OpenFn
securely automates the complex digital processes critical health and
humanitarian interventions require. Reducing error rates and security
vulnerabilities and getting higher quality data into the hands of a doctor
faster actually saves lives. Responsible automation leads to better health and
humanitarian outcomes, enabling larger-scale intervention delivery via
efficiency gains and improving service quality by getting accurate data into the
hands of patients, clinicians, and policymakers when they need it.

## Call to Action

Think about your own experiences; have you found yourself in a situation where
manual data processing—some rote, mindless task—has gotten in the way of doing
the more exciting parts of your job? Whether you are in the health and
humanitarian space or just want to make your life easier, OpenFn is here for
you. Our open-source toolkit is available for everyone to automate tasks such as
sending SMS and email notifications or automating data cleaning and formatting
for faster reporting.

Head to [docs.openfn.org](http://docs.openfn.org/) to learn more about
enterprise-grade automations with our DPG and check out
[community.openfn.org](http://community.openfn.org/) to connect and collaborate
with like-minded social-sector integrators and OpenFn staff. We hope to see you
soon!

## About Open Function Group

Open Function Group (OFG) is a global team of integration specialists and
developers of the OpenFn Integration Toolkit. As a
[DPG](https://digitalpublicgoods.net/), OpenFn’s core technology is free and
open-source. If you want more information about the Toolkit or to sign up for a
free plan on our associated SaaS application, visit https://www.openfn.org/.
