---
title: Planning for Deployment
---

## Introduction

OpenFn/platform (the iPaaS), OpenFn/microservice, OpenFn/core and more than 50
open-source adaptors maintained by OpenFn can be used locally or on the cloud,
and as stand-alone solutions or as modules in other applications. Together the
interoperability suite provides organizations with the tools they need to
connect with any application or database, adhere to any data standards, and
automate any rote digital process. The tools themselves range from lightweight
NodeJS apps to robust and highly-fault-tolerant enterprise applications running
on the ErlangVM. They are typically used in their hosted forms on the cloud or
deployed with Docker and/or Kubernetes.

<!-- if we come up with new names for products, we will need to rename things here... -->

See below for a chart of the available implementation pathways.

![Implementation Pathways](/img/implementation_pathways.png)

<!--Please note that the chart doesn't include anything re OpenFn/Core. Source for chart is: https://drive.google.com/file/d/1wRr7EH-PXT3gHgPnVWDA2kTZSSjigwqq/view?usp=sharing  -->

## Platform

The OpenFn integration platform provides a flexible, scalable, and secure
infrastructure to connect your existing systems, streamline data sharing, and
automate workflows.

<!-- You might use the Platform if... -->

## Microservice

When organizations or governments have an open-source license requirement, all
jobs, credentials, and project configurations can be exported from OpenFn's
iPaaS and used to create a Engine deployment using OpenFn's FOSS ETL tools.

<!-- You might use Engine if... -->

## Core

This is the FOSS ETL tool at the heart of the OpenFn platform. We are currently
working on getting this into a state where it can be deployed as a completely
free and open source Engine which automatically receives messages and executes
OpenFn jobs, harnessing all the power of thousands of existing OpenFn jobs and
language-packages.

<!-- You might use Core if... -->
