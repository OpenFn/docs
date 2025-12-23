---
sidebar_label: Glossary
title: A glossary for data integration
---

This glossary establishes some of the foundational concepts and terms used while
talking about data integration and workflow automation.

This doesn't mean you can't use OpenFn if you don't know what any of these words
mean prior to reading our documentation - but it does mean that some of the most
important tasks along the OpenFn journey will assume at least a basic
understanding of each of these terms.

This glossary is meant to be OpenFn-agnostic. The rest of the docs and
[Key Concepts page](/documentation/get-started/terminology) help you to get a
picture of the parts of OpenFn, what we call them, and why - but this glossary
is really meant as a prerequisite to all those other things to aid users with no
experience in this area.

:::tip Something missing?

If you've come across a word, phrase, or concept that you think is missing from
this page, open an issue on [OpenFn/docs](https://github.com/OpenFn/docs),
suggest an edit to
[this page](https://github.com/OpenFn/docs/blob/main/docs/get-started/glossary.md),
or ask on the [Community](https://community.openfn.org)

:::

## API

API is short for "application programming interface," and it's the part of some
software <b>application</b> that has chosen to make itself visible
(<b>interface</b>) to users outside the application itself. And it's doing that
in a <b>programmatic</b> way, in a way that allows developers of other
applications or data systems to use it the same way each time.

## API Protocol

There's no hard and fast rule about how an API gets developed, but over time,
standards have emerged to make it more straightforward for a new user to
interact with Platform X's API, by trying to ensure most applications use one of
a few different formats. That's what an API protocol is. A few of the big names
here are REST, SOAP, JSON, and GraphQL. Rather than reinvent the wheel,
[here's a good primer on how protocols differ, their data formats, and why that all matters.](https://frontend-digest.com/beginners-guide-to-apis-protocols-and-data-formats-f80cf7f30425)

## Database

Any organized collection of data can probably be safely called a database. If
it's got a structure with which to reference all the stuff it's storing, and the
"stuff" is data, then it's a database.

## Data integration

The process of combining data from different sources into a centralized view.
Data integration is a means of achieving workflow automation. Its tasks may be
streamlined, automated, and managed by a workflow automation tool.

## Data source

A data source is an application, database, or table that provides data to some
other platform. Nothing is <i>always</i> a data source. For example, Google
Sheets can be a data source, but it can also pull from data sources (individual
CSV uploads or manual user data entry). We just call it a source when it's doing
the job of sourcing data to some other place. Data sources are the starting
point, temporally, for any integration.

## Data system

Sometimes folks get confused about the distinction between a database, a data
source, an application, and a data system. A data <i>system</i> is a more
complex collection of these other things, usually one that allows a user to more
easily interact with all of the data they should have access to. The data system
often serves as an entry point to the myriad databases, applications, tables,
etc. that a user would otherwise have to go 12 different places to find.

## Encryption

In this day and age, security is everything. Encryption is the process of taking
something that is readable to anyone and making it only readable to people we
want to read it. OpenFn ensures your data is encrypted every step of the way
while it's in our platform.
[For more on different kinds of encryption, you can look here.](https://ssd.eff.org/en/node/36)

## File system

A file system is to files what a data system is to data. It structures your
files in a way that makes it easy for you to retrieve them in a standardized way
(think of your home file system with its file paths on your home computer). File
systems can exist in other contexts too, and sometimes you need to access them
to retrieve a file (a Word doc, CSV, plain text file, etc. might all be relevant
depending on your use case). The only real difference between file systems and
data systems or databases is the kind of information stored, data vs. files.

## ETL

ETL stands for "extract, transform, and load". These are often thought of as the
three constituent parts of a data integration. First, we extract (push of pull
data from a data source). Then, we transform (make any changes to the data to
make it acceptable to the destination system or application). Then, we load
(send it to the destination).

## Integration platform

An integration platform (e.g., OpenFn) is an application (or set of
applications) that help organizations set up, run, and maintain/manage the
integrations between all of their various systems.

### iPaaS

You may also see the acronym "iPaaS". This stands for integration platform as a
service and is a type of "software as a service" (or "SaaS"). SaaS is a software
purchasing model in which software is paid for only as it is used (often
month-to-month), rather than purchased up front or given away for free.

## Metadata

This is data that tells us about our data. In a table, for example, that's the
name of the columns, the number of rows, etc. Metadata is often brought up in
conversations about privacy—e.g., regulators might want to ensure that _only
metadata_ is moved from Ministry A to Ministry B, as opposed to personally
identifiable information (PII) about individuals themselves.

## Push, pull, and streaming

<i>Pushing</i> is when a triggering action in the data source causes it to send
data to the destination. <i>Pulling</i> is the opposite, where the destination
system requests the data from the source based on some triggering action, rather
than waiting for the source to send it on its own. <i>Streaming</i> is a bit
different, and it's when a data source is essentially <i>constantly</i> sending
data to a destination system.

## Webhook

A [webhook](/documentation/build/triggers#webhook-event-triggers) (also called a
web callback or HTTP push API — thanks
[SendGrid](https://sendgrid.com/blog/whats-webhook/)!) is a feature of an
application that allows <i>pushing</i>. It's often configured to notify some
external URL when an event occurs. A system administrator might create a
"webhook" which notifies an integration platform whenever some event occurs so
that the iPaaS can start executing some complex workflow.

## Structured and unstructured data

Structured data is data that has metadata. Unstructured data has very little
metadata (though probably still has things like time of creation, update, etc.).
Without metadata about the format of the data, unstructured data is more
difficult to interact with programmatically. We need different sorts of rules
when doing ETL on unstructured data to do it well, whereas structured data is an
easier starting point because we know what to expect from a column with a name,
data type, field size, and so on.

## Workflow

The set of instructions that determine how to solve a problem or accomplish a
task. They are often broken down into smaller, independent tasks.

## Workflow automation

The use of software to perform tasks or a business process independently, in
accordance with predefined business rules, and without the need for human input.

## Writeback

Refers to a destination system making a change in a data source. When my
destination application receives information from a data source and wants to do
something back to the source in response, that's writeback.
