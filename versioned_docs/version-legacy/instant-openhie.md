---
title: Instant OpenHIE
---

:::caution Microservice and devtools are being replaced by Lightning

Please note that OpenFn/microservice and OpenFn/devtools are being deprecated
and replaced by OpenFn/lightning, When Lighting is released, it may be used
within Instant OpenHIE (instead of microservice) as an OpenHIE-compliant workflow engine that can interface with the OpenHIE Interoperability Layer ([learn more](/documentation/about-lightning#standards-and-compliance-matter)). 

:::

## Overview

In partnership with [Digital Square][digitalsquare] and _FCDO COVIDaction_,
**OpenFn has been investing in its open source integration toolkit** to provide
robust integration solutions that can connect _any digital health system_ and be
rapidly implemented on any server, in any country, by any organization.

**[OpenFn/microservice][openfnmicroservice]** is a fully [Instant
OpenHIE][instantopenhie] compliant component which can be used to drive
workflow, achieve compliance with standards, and integrate components of the
[OpenHIE stack][openhiestack].

We seek to enhance the value of the [Instant OpenHIE][instantopenhie] project by
developing a package that will include [OpenFn][openfn] as an integration
pathway for connecting with the [OpenHIE architecture][openhiearchitecture].

This package aims to enhance the value of [Instant OpenHIE][instantopenhie] by
providing another option for robust information processing, integration, and
business process (workflow) automation. When deploying [Instant
OpenHIE][instantopenhie], implementers now have the option to include
[OpenFn][openfn] as a component.

[OpenFn][openfn] may also be used as a workflow engine to automate complex
business logic alongside [OpenHIM][openhim] and the [OpenHIE
stack][openhiestack]. Individual [jobs][jobs] in [OpenFn][openfn], sometimes
many in a single microservice deployment, may be used as _“mediators”_ ([see
OpenHIE library of existing mediators][mediators]) to quickly transform and map
data to the [OpenHIE architecture][openhiearchitecture].

To demonstrate a real-world use case for how [OpenFn][openfn] might be
implemented in the [OpenHIE architecture][openhiearchitecture], we met with
several community members to identify key use cases for a reference prototype
implementation.

Visit the [demo repo here][demorepo].

## Use Cases for the Prototype Implementation

We’ve seen that the most common integration use case is that health service
delivery providers, especially large community health worker (“CHW”)
interventions, need to integrate their data and programming into national
eHealth architectures.

### User stories

> 1. _As a community health implementer, I want to integrate my CommCare case
>    management application used by CHWs with the national patient registry, so
>    that I can develop a shared health record and automate reporting
>    pipelines._
> 2. _As a health services provider, I want to integrate my existing application
>    with the national HIS, but I want to apply the FHIR standard to my data
>    collected before sharing to adhere to compliance and reporting
>    requirements._

- We therefore decided to build an integration solution that demonstrates how
  existing **CHW** applications can be integrated with the national health
  infrastructure and leverage a simple job on [OpenFn][openfn] as a
  [mediator][mediators] to apply the [FHIR data standard][fhir] and other data
  manipulation needed to integrate with [HAPI FHIR][hapifhir].

## Implementation Design

In sum, the prototype sends patient case registration data from mobile data
collection apps ([CommCare][commcare], [KoboToolbox][kobo]) to
[OpenFn/microservice][openfnmicroservice]. [OpenFn][openfn] then transforms the
data and ensures that it adheres to the [FHIR][fhir] [patient][patientspec] and
[encounter][encouterspec] data standards, before sending it onwards to a [FHIR
channel][fhir] in the [OpenHIM][openhim]. [OpenHIM][openhim] is used as a
\_“channel”\_ here for the [OpenHIE architecture][openhiearchitecture] to
validate requests and forward them onto other systems in the **national eHealth
architecture**. In this case, we forward the case data onwards to register the
patients in a [HAPI FHIR][hapifhir] server.

This implementation design was determined to be the highest value/most in-demand
because it leverages the core functionality of [OpenHIM][openhim] (providing a
reverse proxy and generating an audit trail) without requiring integrators to
build a new [mediator—a][mediators] process that is more complex than
configuring a [job][jobs] within an [OpenFn project][projects].

This prototype includes the following components:

An [Instant OpenHIE][instantopenhie] instance can be spun up which contains
[HAPI FHIR][hapifhir], [OpenHIM][openhim], and a single
[OpenFn/microservice][openfnmicroservice] deployment (a
[project.yaml][projectyaml] file, exported from [OpenFn/platform][openfn]) with
2 different [jobs][jobs]. When data is forwarded to
[OpenFn/microservice][openfnmicroservice] from two distinct form submissions on
[CommCare][commcare] and [Kobo][kobo], it is processed and creates [FHIR][fhir]
patient resources via [OpenHIM][openhim] and [HAPI FHIR][hapifhir]. We’ve opted
for a single [OpenFn/microservice][openfnmicroservice] “project” with two
slightly different [jobs][jobs] and [triggers][triggers] to highlight the
versatility of [OpenFn projects][projects].

## Explore the Implementation

Currently, there are two different ways to explore this demo. The first (the
more traditional _“Instant”_ way) is by **cloning the OpenFn/instant-demo
repo**. Once inside, users type _“yarn setup”_ to get everything up and running.
Running _“yarn test”_ will then demonstrate the
[Kobo][kobo]/[CommCare][commcare] to [OpenFn][openfn] to [OpenHIM][openhim] to
[FHIR][fhir] flows.

They can explore the various [jobs][jobs], sample payloads, endpoints, and post
data to the various endpoints using either the data forwarding settings in
[CommCare][commcare] and [Kobo][kobo] or via [CURL][curl] (or their HTTP request
agent of choice.)

Once running, users can see how standard [CommCare][commcare] and [Kobo][kobo]
submissions are transformed by the [OpenFn/microservice][openfnmicroservice] to
adhere to the [FHIR][fhir] specifications for [patients][patientspec] and
[encounters][encouterspec], and then that those subsequent resources are created
on the [HAPI FHIR][hapifhir] server, via a channel on the [OpenHIM][openhim].

The second (slightly less conventional way) to explore the [demo][instantdemo],
is via [OpenFn.org][openfn]. Since [OpenFn projects][projects] can be run in
[microservice][openfnmicroservice] or on the [hosted platform][openfn], we’ve
provided a project instance at [OpenFn.org][openfn] that allows users to explore
the configuration required to incorporate [OpenFn][openfn] in an [Instant
OpenHIE][instantopenhie] project. There are three [jobs][examplejobs] which can
be accessed with a **demo user** with _username: demo@openfn.org_ and
_password:guest123_.

The three jobs will show:

- How a [CommCare][commcare] submission is transformed and sent to [HAPI
  FHIR][hapifhir];
- How a [Kobo][kobo] submission is transformed and sent to [HAPI
  FHIR][hapifhir];
- And what the final resources that would be sent to [HAPI FHIR][hapifhir] look
  like.

It’s our hope that this will provide a valuable entry-point for [Instant
OpenHIE][instantopenhie] configuration with
[OpenFn/microservices][openfnmicroservice].

## About the Implementation Setup

### Processes

- We met with [OpenHIE community members][openhiecomm] to understand use cases,
  and with [Jembi Health Systems][jembi] to learn about [Instant
  OpenHIE][instantopenhie] packages, specifications, and compliance
  requirements.

- Identified sample data sources (real [CommCare][commcare] and [Kobo][kobo]
  case registration forms - see here) that we could use to send data to the
  **national eHealth architecture**. Here is a [sample submission payload from
  CommCare][commcaresample] Here is a [sample submission payload from
  Kobo][kobosample]

- Reviewed [FHIR-HL7][fhir] documentation to determine data standard
  requirements for patient data and encounter data. See [FHIR patient
  spec][patientspec] and [FHIR encounter spec][encouterspec].

- Evaluated [OpenFn][openfn] vs. [OpenHIM][openhim] capabilities to determine
  how to use. Determined that using an [OpenHIM channel][openhim] will leverage
  the core audit trail functionality from [OpenHIM][openhim], but not require us
  to build a [new mediator][mediators].

### Project Configuration Steps

There are two ways to set up a [project.yaml][projectyaml] to run as a
[microservice][openfnmicroservice]. The first is to use the [OpenFn.org
platform][openfn], and the second way is to use [OpenFn/devtools][devtools].

These two methods are detailed below:

1. **Configure a project using the OpenFn.org platform**

   - This option allows organisations to leverage [OpenFn.org][openfn]’s
     built-in features for easy [project][projects] setup, [job writing][jobs]
     and source code management.
   - The [project.yaml][projectyaml] file generated from this project setup will
     then be used as the base structure for the [OpenFn
     Microservice][openfnmicroservice].
   - The steps to setup the [OpenFn Microservice][openfnmicroservice] project
     using the [OpenFn.org platform][openfn] are as below:

     **A. Add [credentials][cred] to the project which will be used to connect
     the OpenFn Microservice to OpenHIM.**

     - This is also an opportunity to add [credentials][cred] which [OpenFn
       Microservice][openfnmicroservice] may use to connect to source systems
       (such as [CommCare][commcare] or [KoBotoolbox][kobo]) .

     **B. Add [triggers][trig] to the project which will be used by the [OpenFn
     Microservice][openfnmicroservice] to match payloads from source systems to
     [OpenFn Microservice Jobs][jobs].**

     - Note that the [Microservice][openfnmicroservice] is configured to run a
       [job][jobs] based on the shape of the incoming payload.

     - For example, a [trigger][trig] may be configured to match payloads, from
       [CommCare][commcare], which contain the
       `{"@name": "Register New Patient"}` message in their message body.

     - A given [job][jobs] will then match against this message, and will be
       invoked by the [OpenFn Microservice][openfnmicroservice] to (a) create a
       payload in the [FHIR standard][fhir] containing an [Encounter
       Resource][encouterspec] and (b) send the [FHIR Standard][patientspec]
       Payload to [OpenHIM][openhim] with instructions to load it to [HAPI
       FHIR][hapifhir].

     **C. Export the [project.yaml][projectyaml] file using the Export Wizard of
     the [OpenFn.org][openfn]**

     - The [generated YAML][projectyaml] file will then be used by the [OpenFn
       Microservice][openfnmicroservice] to execute the [jobs][jobs] for the
       matching payloads.

2. **Configure a project using the [OpenFn/devtools][devtools]**

   - This option allows organisations to configure the [project][projects] and
     host [job expression][jobexpr] source files, for [OpenFn Microservice
     projects][projects], without using the [OpenFn platform][openfn].
   - With this option, it is recommended that organisations use source
     versioning tools and platforms such as `git` and `github` to manage the
     [project][projects] and [job expression][jobexpr] source code/files.
   - To configure the [OpenFn Microservice project][openfnmicroservice] using
     [OpenFn/devtools][devtools], create a local folder or github repository to
     host your project configuration files. Inside this folder, one would then
     perform the following actions:

     - Create a credential.json file
     - Add credentials as shown in the [sample credential here][samplecred]
     - Create the [job expressions][jobexpr]. In this case, one would create the
       [CommCare-to-OpenHIM][demoexpr] and [Kobo-to-OpenHIM][demoexpr]
       expressions as shown in the demo expressions [here][demoexpr]
     - Run the [OpenFn CLI][openfncli] to configure the rest of the project. The
       [CLI][openfncli] will assemble the [project.yaml][projectyaml] file from
       the different artifacts as provided. See detailed steps in the
       documentation site [here][openfncli].

     - The last step of the [CLI][openfncli] prompts will allow one to export
       the [Project YAML file][projectyaml], which will then be used by the
       [OpenFn Microservice][openfnmicroservice] to execute the [jobs][jobs] for
       matching payloads.

## Job writing notes

[OpenFn][openfn] provides two ways of writing jobs:

- Using the [OpenFn.org’s Job Studio][studio] as detailed in the documentation
  site [here][jobs]
  - With this option, if editing an existing [Job Expression][jobexpr], one
    would be expected to use [OpenFn.org Project Export service][openfn] to
    re-generate the [Project YAML][projectyaml] file for the [OpenFn
    Microservice][openfnmicroservice].
- Using [OpenFn/devtools][devtools].
  - This option also allows organisations to write [job expressions][jobexpr]
    without using the [OpenFn’s hosted service][openfn]. See detailed
    documentation [here][devtools]
  - With this option, if editing an existing [Job Expression][jobexpr], one
    would be expected to run the [OpenFn CLI][openfncli], to re-generate the
    [Project YAML file][projectyaml] for the [OpenFn
    Microservice][openfnmicroservice].

## System Deployment Steps

- [OpenFn] provides an automated deployment script that allows system admins to
  setup and run the [OpenFn Microservice][openfnmicroservice].
- For example, to run the [Instant-demo Microservice][instantdemo], the
  following steps are recommended:
  - Clone the [OpenFn/instant-demo repo][instantdemo]
  - Overwrite the [sample “project.yaml”][sampleyaml] file with your newly
    generated [project.yaml file][projectyaml], or use the existing [YAML
    file][projectyaml] to deploy the demo project. Run the setup command as
    described in the documentation [here][instantdemo]
  - Verify the system is working by [curling][curl] data (or submitting forms on
    [CommCare][commcare]/[Kobo][kobo]) matching their [triggers][triggers] to
    the [microservice][openfnmicroservice] endpoint `(localhost:4001/inbox)` and
    checking to see that resources are created in [HAPI FHIR][hapifhir].
  - Note how the [test.js file][testfile] handles this verification with the
    [sample project.yaml][sampleyaml]

<!-- prettier-ignore-start -->
[openfn]: https://openfn.org/
[instantopenhie]: https://wiki.ohie.org/display/resources/Instant+OpenHIE
[openhiestack]: https://openhim.readthedocs.io/en/latest/implementations/openhie.html
[openhiearchitecture]: https://wiki.ohie.org/pages/viewpage.action?pageId=8454157
[openhim]: http://openhim.org/
[jobs]: /documentation/build/jobs/
[mediators]: http://openhim.org/mediator-library/
[demorepo]: https://github.com/OpenFn/instant-demo
[openfnmicroservice]: /documentation/microservice/home/
[digitalsquare]: https://digitalsquare.org/
[fhir]: https://fhir.org/
[hapifhir]: https://hapifhir.io/
[commcare]: https://www.commcarehq.org/
[kobo]: https://www.kobotoolbox.org/
[projects]: /documentation/build/example-build/
[projectyaml]: https://github.com/OpenFn/microservice/blob/main/project.yaml.example
[triggers]: /documentation/build/triggers/
[commcaresample]: https://github.com/OpenFn/instant-demo/blob/main/fixtures/commcare_sample.json
[kobosample]: https://github.com/OpenFn/instant-demo/blob/main/fixtures/koboCaseRegistration.json
[patientspec]: https://www.hl7.org/fhir/patient-example.json.html
[encouterspec]: https://www.hl7.org/fhir/encounter-example.json.html
[openhiecomm]: https://ohie.org/tag/community/
[jembi]: https://www.jembi.org/
[cred]: /documentation/build/credentials/
[trig]: /documentation/build/triggers/
[devtools]: https://github.com/OpenFn/devtools
[testfile]: https://github.com/OpenFn/instant-demo/blob/main/test.js
[instantdemo]: https://github.com/OpenFn/instant-demo
[samplecred]: https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml#L165-L167
[openfncli]: /documentation/devtools/home/#configure-an-openfn-project
[demoexpr]: https://github.com/OpenFn/instant-demo/tree/main/expressions
[jobexpr]: /documentation/build/jobs/#a-basic-expression
[sampleyaml]: https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml
[curl]: https://curl.se/
[studio]: /documentation/jobs/job-studio/
[examplejobs]: https://openfn.org/projects/p5pqx3/jobs
<!-- prettier-ignore-end -->
