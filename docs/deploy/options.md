---
title: Planning for Deployment
---

## Introduction

OpenFn/platform (the iPaaS), OpenFn/microservice and more than 50
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

<!-- @taylor now that we have added in the new chart (see below), should we get rid of this chart? -->

<!--@Taylor would you be willing to spend some time creating an update to this chart? Please note that the chart doesn't include anything re OpenFn/Core or OpenFn/Engine. Source for chart is: https://drive.google.com/file/d/1wRr7EH-PXT3gHgPnVWDA2kTZSSjigwqq/view?usp=sharing  -->

When you configure projects (think `jobs`, `triggers`, and `credentials`) to run
on OpenFn, you can deploy them in a number of different ways. In fact, a key
feature of OpenFn's offerings are the versatility they provide to users. A user
can build her project using OpenFn's enterprise platform, or using components of
the open source integration toolkit. A user may then choose to deploy the
project initially on the platform and later migrate to her own servers when
doing so makes sense. The good news is that OpenFn project
[portability](/portability.md) will make these transitions easy. You will have
full control and ownership of your integration project regardless of the
deployment pathway you pursue.

![Deployment Options](/img/deployment_options.png)

## Platform

See: [platform](platform)

The OpenFn integration platform provides a flexible, scalable, and secure
infrastructure to connect your existing systems, streamline data sharing, and
automate workflows.

Platform is right for you if you are very serious about security, stability and
scalability, or you don't have a strong/well-resourced IT team with devops
experience in your organization.

The least expensive way to do deploy on platform is using our cloud servers,
currently based in the US and Switzerland but availalbe in many more countries
on-demand.

If you've got data-residency requirements to comply with, you might consider a
local-deployment of `platform`—this will still require a paid license but you
can pick and choose exactly how and where OpenFn runs.

## Microservice

See: [microservice](/documentation/microservice/home)

Microservice is right for you if you are already managing high-availability
software and don't need a web-front end. Microservice gives you lots of
flexbility, and it's completely FOSS—meaning you use it for free and can even
develop your own new features as needed.

While this community-supported variant of OpenFn may lack some of the more
powerful features of `platform`, it's 100% cross-compatible, meaning that you
can even build and test entire projects on `platform` and then export the
`project.yaml` file to run on your own servers using `microservice`.

<!-- When organizations or governments have an open-source license requirement, all
jobs, credentials, and project configurations can be exported from OpenFn's
iPaaS and used to create a Engine deployment using OpenFn's FOSS ETL tools. -->

<!-- You might use Engine if... -->

<!-- ## Core

This is the FOSS ETL tool at the heart of the OpenFn platform. We are currently
working on getting this into a state where it can be deployed as a completely
free and open source Engine which automatically receives messages and executes
OpenFn jobs, harnessing all the power of thousands of existing OpenFn jobs and
adaptors. -->

<!-- You might use Core if... -->

<!-- project.yaml is your jobs, triggers and credentials. you can run on our cloud or your cloud. you can look at individual components  -->
