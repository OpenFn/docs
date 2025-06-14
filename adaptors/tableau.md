---
title: Tableau
---

(Work in progress)

## Overview

[Tableau](https://www.tableau.com/) is a visual analytics platform that helps
people use data to solve problems.

Tableau Desktop does not have a built-in database, rather it connects to
different data sources (files, databases, etc). After connecting to a data
source, Tableau can "extract" that data into a Tableau Data Extract file that is
both compressed and represented in a columnar store format.

A list of the data sources that you can connect to Tableau from can be found
here: https://www.tableau.com/products/techspecs

OpenFn has experience setting up databases structured in a way that Tableau can
pull from.

## Integration Use Cases

An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health
projects in several different geographies. This iNGO would like to use a
business intelligence tool, like Tableau, to create data visualisations for it's
projects' key indicators. To accomplish this, the iNGO uses OpenFn to take the
survey data from CommCare, Kobo Toolbox and Survey CTO and then create a
structured database from it using MySQL. Once the structured database is
established, OpenFn assists the iNGO with connecting this data to Tableau.

Refer to the diagram below for a visualization of the data flow cited in the
above use case.

![Tableau Data Flow Visualization](/img/survey_db_tableau.webp)

<!-- please note that the diagram can be found at this link: https://lucid.app/lucidchart/invitations/accept/67c935c0-ec87-4454-b38f-57a6c002f597  -->
