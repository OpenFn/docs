# DHIS2

<!---Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate with common tools, and (2) to educate any OpenFn user/the wider sector.--->

## App Overview

The District Health Information Software 2
([DHIS2](https://www.dhis2.org/about)) is an open source, web-based health
management information system (HMIS) platform.

Today, DHIS2 is the world's largest HMIS platform, in use by 73 low and
middle-income countries. Approximately 2.4 billion people live in countries
where DHIS2 is used. Including NGO-based programs, DHIS2 is in use in more than
100 countries.

The [core DHIS2](https://dhis2.org/overview/) software development is managed by
the Health Information Systems Program (HISP) at the University of Oslo
([UiO](https://www.uio.no/english/)).

HISP is a global network comprised of 13 in-country and regional organizations,
providing day-in, day-out direct support to government ministries and local
implementers of DHIS2.

DHIS2 exposes its data and service method integration pipeline through a
[RESTful](https://dhis2.stoplight.io/docs/dhis2) Web Application Programing
Ineterface([API](https://dhis2.stoplight.io/docs/dhis2)). The
[DHIS2 Web API](https://dhis2.stoplight.io/docs/dhis2) is a component which
makes it possible for external systems to access and manipulate data stored in
an instance of DHIS 2. More precisely, it provides a programmatic interface to a
wide range of exposed data and service methods for applications such as
third-party software clients, web portals and internal DHIS 2 modules.

### Data Model

**The entities summarized below are key entities for the `Aggregate` module of
DHIS2 -- see the
[`Tracker` documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker.html)
for details on this data model.**

**Data element:** specifies **what** is being recorded by a particular data
value. Ex. the number of COVID-19 cases.

**Data value:** the value for a data element. Ex. The value 100 for the
`data element` "the number of COVID-19 cases."

**Data set:** a collection of data elements, together forming one reporting
form. Ex. "COVID-19 Health", which contains a variety of data elements related
to this topic.

**Indicator:** a calculated formula based on a combination of data elements,
category options, possibly constants and a factor which is used for data
analysis. Ex. **Maternal mortality rate** is an indicator that is made up of the
data elements maternal deaths and live births, and the factor 100,000.

**OrgUnit:** specifies where a piece of data was collected. Ex. Sierra Leone.

**Period:** specifies when a piece of data was collected. Ex. 2023.

**Category:** used for disaggregation of data elements and can be combined into
`category option combinations` for further breakdown. Ex. Age and Gender are
categories -- a category option combination for these two could be `female, >5`.

See DHIS2 documentation for more information about the data model and specific
entities:

1. [Data model](https://docs.dhis2.org/archive/en/2.30/developer/html/techarch_data_model.html)
2. [Indicators](https://docs.dhis2.org/en/implement/database-design/aggregate-system-design/indicators.html#:~:text=In%20DHIS2%2C%20the%20indicator%20is,do%20not%20have%20a%20denominator.)
3. [Configuring report in DHIS2](https://docs.dhis2.org/en/implement/database-design/aggregate-system-design/indicators.html#:~:text=In%20DHIS2%2C%20the%20indicator%20is,do%20not%20have%20a%20denominator.)
4. [DHIS2 terminology](https://dhis2-app-course.ifi.uio.no/learn/dhis2/introduction/overview/terminologies/)

## Integration Use Cases

DHIS2 has been expanding its reach into many health systems. Starting from its
familiar grounds of aggregate data sets for routine data it has included patient
related data and then data in the areas of HR, finance, logistics and laboratory
management.

For several years now, DHIS2 has grown its data management activities
organically, allowing the actual usage to lead to sometimes unforeseen
solutions. However, there are also limits to where leveraging DHIS2 seems
useful. In the following sections, special systems will be described.

#### Example user stories

1 Logistics Management(LMIS)

- LMIS is an area where a multitude of parallel, overlapping or competing
  software solutions can be found in a single country
- Although a basic LMIS configuration based on aggregate data can take you very
  far, in some cases a transactional LMIS is necessary if you need to track such
  detailed operations as returns, transfer between facilities, barcode reading,
  batch and expiry managemen
- In such a situation...

2 Data Sharing for Health and Nutrition, Water Sanitation and Hygiene Projects

- Case management sytsems such as CommCare are widely preffered in collecting
  case data(or patient level data) due to its dominance in the sector and easy
  of adoption. In such scenarios, ...

3 DHIS2 Instance Synchronization

- Different DHIS2 instances in a given organisation or government ministry may
  be deployed on separate servers which places the need for synchronization in
  both metadata and data values. DHIS2 provides API endpoints to enable which
  enable organisations to automate the synchronization process of data/metadata
  across a cluster of DHIS2 servers.

### Further Reading:

1
[DHIS2 Web API](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-235/web-api.html)

2
[DHIS2 Integration Concepts](https://docs.dhis2.org/2.28/en/implementer/html/integration.html#:~:text=DHIS2%20is%20often%20used%20as,on%20stocks%20and%20human%20resources.)

3
[DHIS2 Integration Scenarios](https://docs.dhis2.org/master/en/implementer/html/different-dhis2-integration-scenarios.html)

4
[Interoperable DHIS2-LMIS in Senegal, Tanzania and Ghana](https://www.childhealthtaskforce.org/sites/default/files/2019-01/Interoperable%20DHIS2-LMIS%20in%20Senegal%2C%20Tanzania%2C%20and%20Ghana%20%28HISP%20Team%20at%20UIO-2017%29.pdf)

5
[CRVS Fellowship report SmartVA and DHIS2 integration in Sri Lanka](https://crvsgateway.info/file/17042/3010https://crvsgateway.info/file/17042/3010)

## Integration Options

1. Data integration via DHIS2 Web API:
   https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-235/web-api.html

2. Metadata integration via DHIS2 Web API. OpenFn implementations can leverage
   the [`DHIS2`](https://github.com/OpenFn/language-dhis2) adaptor.

## Integration Examples

1. DHIS2 Demo Implementations: https://github.com/OpenFn/dhis2-demo
2. Lesotho Integration connecting two DHIS2 instances:
   https://github.com/OpenFn/lesotho-dhis2
   

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
