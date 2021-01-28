---
title: Frequently Asked Questions
sidebar_label: FAQs
---

Data integration, interoperability, and workflow automation can be confusing
subjects. Not to mention the fact that there are lots of different terms and
ways of talking about the same concepts. We get it. Here are a few questions
that come up a lot.

## What is OpenFn?

OpenFn is an **_integration platform as a service_**. This means our prime
directive is to move data quickly and securely between different software
systems. In most cases:

1. A source application sends **messages** to your project’s **inbox** when
   something happens.

2. **Jobs** will be triggered, based on your **filters**, and use the data in
   those messages to attempt specific actions in destination systems.

3. The **logs** are recorded so you can see precisely what happened and when and
   where it happened to take action in the event of a failed attempt—like
   editing the job or even the source message and trying it again.

## Who uses OpenFn?

OpenFn is used by organizations big and small, but the individuals interacting
with the platform range from system administrators to Javascript developers.
With a basic understanding of Javascript, the flexibility of the platform is
almost limitless.

## What is a `job`?

OpenFn automation centers around jobs, which define the specific series of tasks
or database actions OpenFn should perform. They can be set to be activated
(triggered) at certain time intervals or when data matching specified criteria
is received. You can think of jobs as a set of instructions you might give a
data entry staff member (e.g., create a new Patient record in OpenMRS when a
form containing a newly registered client is received from CommCare, export data
to DHIS2 every week on Friday 11pm, send SMS with payment confirmation number
when payment confirmation message is received etc.).

:::note

Jobs are fully configurable and reusable. They can also be chained together to
create [multi-step automation](jobs/multiple-operations) flows, two-way syncs.
and to keep data consistent between multiple applications (using multi-app Saga
patterns). You can read more on two-way synching below.

:::

## What is a `run`?

A run is each individual execution of a job. Imagine that a job is configured to
create a new patient in OpenMRS whenever a case is opened in CommCare. Over the
next week, if 5 cases are opened in CommCare, you’ll see 5 different runs of
this one job in OpenFn. If 4 runs are successful and one has failed, you’ll see
4 new patients in OpenMRS, and your system administrator will have been notified
that one of those patients couldn’t be created (or whatever more robust
error-handling you’ve set up will take place.)

Note that there’s not always a 1-to-1 mapping between runs and the real-world
things you’re working with. I might define a job that gets all updated event
data from DHIS2 for the last 2 weeks and publishes it to a public map using
CartoDB. This job will be triggered at specified time intervals, every 2 weeks
in this case, and after a month, we’ll only see 2 runs in OpenFn (that’s one run
every two weeks). Each run will have succeeded or failed, and each one might
have processed thousands of events from DHIS2.

:::note

For one last example, a single form submission in Open Data Kit might trigger a
job that creates new contacts and attendance records in Salesforce. In this
case, you’ll find a run for each ODK form submission, but each run will create
lots of different records in Salesforce—specifically, at least one contact and N
number of attendance records, corresponding to the number of items in your ODK
form’s “attendance repeat group”.

:::

## Is OpenFn open-source?

OpenFn is a suite of different technologies with different licenses. We have
built and maintain dozens of open-source data transformation and API wrapper
software packages. Those are, for the most part, licensed under the **LGPL** and
can be used freely to extract, transform, and load data from a command line, or
as part of another software application.

OpenFn also hosts a proprietary web-application that ties these tools together
(www.openfn.org) into an out-of-the-box integration management platform. This
platform is open-core, providing the powerful ETL tools that sit at the heart of
the proprietary OpenFn.org iPaaS as free and open-source software (FOSS). All of
the jobs running on OpenFn.org, as well as all of the underlying adaptors, can
be run offline using our FOSS tools.

:::note

OpenFn will also soon offer an enhanced FOSS implementation option called
[OpenFn/microservice](https://openfn.github.io/microservice/). This FOSS
microservice approach is currently in development with funding from the
[DIAL Open Source Center](https://www.osc.dial.community/),
[Digital Square](https://digitalsquare.org/), and the
[FCDO](https://www.gov.uk/government/organisations/foreign-commonwealth-development-office)
(formerly DFID).

Please note that this pathway does not provide the entire OpenFn platform as
free and open source software (FOSS). In situations where a particular partner
or government is unable to use the proprietary platform (though it can be
deployed on local servers with an unlimited use license), this approach ensures
that all jobs, triggers, and project configuration can be exported from
OpenFn.org and used, in conjunction with OpenFn's FOSS ETL tools to deploy a
microservices-style implementation which incurs zero licence costs and provides
the basic data processing that OpenFn's platform does. While at the outset there
will be no web interface and no ability to reprocess messages, etc., these
features could be built by partners in time to replace the features of the
OpenFn platform. I.E., none of the initial investment in OpenFn will be lost if
the partners choose to build their own, fully open-source integration platform
based on our powerful open-source ETL tools.

:::

## How much does OpenFn cost?

### Design & implementation costs

OFG offers a range of packages to ensure successful first-time implementations,
which include integration consulting, design, configuration, and
capacity-building. Typical engagements take 1-5 days to complete, and our most
popular package is the Integration QuickStart, in which we spend 1 week to
design and configure ~5 integration flows end-to-end and provide administrative
training to your staff for $5,000.

### Ongoing costs

OpenFn.org offers a free plan for users seeking to trial the platform or
implement projects handling low data volumes (up to 100 runs/month). Usage of
OpenFn.org, the proprietary integration-platform-as-a-service (iPaaS), incurs
ongoing costs, which are largely dependent on the expected data volumes to be
processed. OpenFn offers monthly subscriptions, enterprise licenses for annual
and multi-year agreements, as well as unlimited and local deployment options.
Contact enterprise@openfn.org to learn more and for a tailored cost estimate.

There are also available DIY options, as well as bespoke training services to
develop your capacity to implement and manage OpenFn independently.

## Can I trial the platform?

Yes. As a matter of fact, you can use it for free, forever.

OpenFn.org offers a free plan to all users
([sign up here](https://www.openfn.org/signup)). Try it out using OpenFn Docs,
or contact our team for a free consultation and help getting started. Change
your OpenFn plan at any time (no lock-in!), or contact enterprise@openfn.org to
learn more about annual, enterprise, and unlimited licenses.

:::tip

At low volumes, or for prototyping, you can use the hosted platform for free
forever.

:::

## How reliable is the hosted service?

OpenFn has harnessed the extreme stability and scalability of Erlang to
coordinate these actions and provide users with email alerts, project management
tools, and an online job writing IDE.

We constantly monitor our own status with independent infrastructure at
[status.openfn.org](https://status.openfn.org). You can subscribe to
notifications there or follow [@openfnstatus](https://twitter.com/openfnstatus).

We've been delivering this service continuously since 2014.

## Can OpenFn integrate with my custom app?

Yes, OpenFn can integrate with _any_ application.

If your technology has a REST endpoint or webhooks service, it will likely work
right out of the box. This covers most web applications (e.g., CommCare, Kobo,
ODK, DHIS2, Salesforce, MS Dynamics, MPesa, etc.). OpenFn can also integrate
with most databases, like Postgres, MySql, and Mongo, custom applications,
legacy government systems, and can even parse CSV files–so long as these can be
accessed from an online location. Read more about
[connecting source applications](source-apps), or check out the Apps page for
applications widely implemented.

We offer pre-built connectors (called “language-packages” or API “adaptors”) for
our users’ most popular apps to make the integration setup quicker and more
user-friendly when connecting with these tools. For example, users can implement
language-http to send basic HTTP requests to any web application, or implement
language-dhis2 to automatically handle DHIS2 authentication and access helper
functions like fetchData()to export DHIS2 datasets.

## Does OpenFn support two-way syncing?

Yes, OpenFn can support two-way syncing of applications. Utilizing
[Flow Triggers](build/triggers#flow-triggers), OpenFn jobs can be chained
together to facilitate real-time two-way data sync,
[multi-step automation](jobs/multiple-operations) and data cleaning processes,
and complex branching logic. Users can also implement bi-directional data syncs,
as well as complex Saga Patterns to implement a transaction that spans multiple
applications by configuring webhooks in their endpoint applications and
performing updates in both systems when events take place in either.

## Do I need to know how to code?

No, but it helps to have written a formula in MS Excel! Many OpenFn users are
familiar with data, not development, and quickly get comfortable with OpenFn
jobs.

If your project is leveraging an OpenFn adaptor (e.g.., language-dhis2), you
have access to pre-built helper functions (e.g., `getPatient`, `update`) so that
you don’t need to write custom code, and rather can use OpenFn documentation or
existing job scripts to write your own job. See OpenFn Github for inspiration
and open-source job code shared by OpenFn users. You’ll notice that these
functions work in the same way that functions do in Excel… `sum(A1, A2, A3)`

Jobs can be written and extended using raw Javascript for advanced data cleaning
and manipulation. Therefore, you may want to implement Javascript to achieve
specific requirements or to extend existing OpenFn language-packages, which are
open-source!

## Where is my data stored?

OpenFn is a middleware provider rather than a data storage system. We move
information from system A to system B, and integrations can be set up to be
compliant with GDPR, HIPAA, and other policies. To make auditing and
reprocessing easy, OpenFn temporarily stores message data and job run history,
but we're not the single source of truth nor the final resting point for these
data. When organizations choose to use our hosted OpenFn platform at OpenFn.org,
no data processed by OpenFn is stored locally and our platform runs on the
Google Cloud Platform (GCP). Read more on our
[Compliance](https://www.openfn.org/compliance) page.

OpenFn.org currently offers hosting on U.S. and Swiss-based cloud servers.
OpenFn local and in-country cloud deployments are also available upon request.
Contact enterprise@openfn.org to learn more.

## Is my data secure?

Yes, OpenFn prioritizes security, stability, and scalability (what we call
[S³](https://www.openfn.org/trust#s3)) above all else, and many of our users
implement OpenFn to comply with GDPR, HIPAA, and other policies. Read more on
our [Trust](https://www.openfn.org/trust),
[Compliance](https://www.openfn.org/compliance), and
[Privacy](https://www.openfn.org/privacy) pages.

OpenFn.org runs on the Google Cloud Platform, an infrastructure protected by
more than 500 top experts in information, application, and network security. For
organizations with specific compliance and data governance requirements, OpenFn
can also be deployed on designated local- or cloud-infrastructure.

## What if I have more questions?

Open Function Group is a team of ICT4D and integration specialists, waiting to
help you get started. Click the chat icon in the bottom right hand corner of
this page to talk now. Or Email our team at admin@openfn.org, chat us on
OpenFn.org, or post a question in our
[Community Forum](https://community.openfn.org).
