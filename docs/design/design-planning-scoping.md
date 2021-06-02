---
title: Planning your Integration
sidebar_label: Planning your Integration
---

## Introduction

Each OpenFn job designed is its own integration and each set of jobs is its own
project. Before you start planning your automation, it's critical that you think
through it's component requirements first. Establishing these requirements will
enable smooth data-flow implementations. Please see below for some prep work
that if thought through correctly will help enable succesful deployment.

### Prerequisite 1

**Establish the services you would like to integrate.**

For our example, the services we would like to use are:

- Kobo ToolBox
- SalesForce
- dhis2
- Google Sheets

### Prerequisite 2

**Make sure you have access to all of these services' APIs**

If you have access to all of your desired services APIs, then you may proceed on
the integration journey.

:::tip

If there is a pre-built adaptor on the OpenFn platform for these services your
integration set-up will be considerably easier, but if there isn't a pre-built
adaptor, you can use OpenFn's universal HTTP adaptor to hit the associated
endpoints you need.

:::

The relevant API documentation for the software used in our example can be found
here:

- [Kobo ToolBox](https://support.kobotoolbox.org/api.html)
- [SalesForce](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm)
- [dhis2](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html)
- [Google Sheets](https://developers.google.com/sheets/api)

Now that we have confirmed our ability to access these services APIs and that we
have explored their respective API documentation, we are ready to begin
constructing our integration.

### Prerequisite 3

**Ensure the necessary authentications are in place**

Are you able to authenticate these services? Do you have the right access level
to do so? Please note that many applications require administrative access level
to be able to take advantage of authentication services. Once you have the
appropriate credentials you can add them to the OpenFn platform.

View this page for more information regarding credentials:
[Adding credentials to your OpenFn project](https://docs.openfn.org/documentation/build/example-build#step-5---connect-your-destination-applications)

### Prerequisite 4

**Ensure access to sandbox envrionments**

Sandboxes in your applications are the perfect place to test your integrations
without affecting any of the important live data your organization relies on.
For this reason, our team of specialists recommends that you take advantage of
sandboxes and then once you are confident the integration is working as
expected, then you can take the exciting step of "going live."

## Scoping and Documenting

Scoping and documenting your desired data flow is a critical step of the
planning process. Taking the time to complete this exercise helps ensure
success. OpenFn implementation specialists ask clients the following set of
questions when scoping a project.

### Information accessed

- How are the services you'd like to integrate currently being used by your
  organization?
- What type of information are you hoping to sync between systems?
- Is a one-way or two-way sync required?

### Data Volumes

- Approximately how much data do you expect to flow through these services on a
  monthly basis?

### Sync Frequency

- How often would you like for the data between systems to be synced?

## Diagramming your desired data flow

Once you have answered all of the above preliminary questions it's time to
diagram your data flow.

(work in progress)

<!-- insert diagram of covidaction data flow example -->

## Organizing the field mappings

(work in progress)

<!-- insert sample field mappings sheet from covidaction example -->

## Deciding on the required business logic

(work in progress)

<!-- insert a sample business logic transformation that is required for covidaction (for example date reformatting) -->
