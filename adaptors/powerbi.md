---
title: Power BI
---

(Work in progress)

## Overview

[Power BI](https://powerbi.microsoft.com/en-us/) is a business analytics service by Microsoft. It provides interactive
visualizations and business intelligence capabilities with an interface simple
enough for end users to create their own reports and dashboards.

Note that Power BI does not have a built-in database, rather it connects to many
different data sources (files, databases, etc). For a full list of available data sources, see
[Power BI data sources](https://docs.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources).

OpenFn has experience setting up databases structured in a way that Power BI can
pull from.

## Integration Use Cases

An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health
projects in several different geographies. This iNGO would like to use a
business intelligence tool, like Power BI, to create data visualisations for it's
projects' key indicators. To accomplish this, the iNGO uses OpenFn to take the
survey data from CommCare, Kobo Toolbox and Survey CTO and then create a
structured database from it using MySQL. Once the structured database is
established, OpenFn assists the iNGO with connecting this data to Power BI.

Refer to the diagram below for a visualization of the data flow cited in the
above use case.

![Tableau Data Flow Visualization](/img/survey_db_powerbi.webp)

<!-- please note that the diagram can be found at this link: https://lucid.app/lucidchart/invitations/accept/f14e78dc-8c94-43a6-9730-7d3c5c6d6eff -->

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
