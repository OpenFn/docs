---
title:
  'The power of collaboration: How Digital Public Goods working together can
  strengthen Digital Public Infrastructure'
author: Meghan Gilroy
author_url: mailto:meghan@openfn.org
author_image_url: https://www.openfn.org/_astro/meghan.836cb4f7_Z1mw5jG.webp
image: /img/openfn-openspp.png
tags:
  [
    Automation,
    Social Protection,
    Adaptors,
    OpenSPP,
    DPG,
    DPI,
    OpenSource,
    Kobotoolbox,
    OpenFn,
  ]
featured: true
---

| ![Banner showing logos of OpenFn and OpenSPP](/img/openfn-openspp.png) |
| :--------------------------------------------------------------------: |

[Digital Public Goods](https://digitalpublicgoods.net/standard/) (DPGs) play a
pivotal role as the backbone for strengthening Digital Public Infrastructure
(DPI). At their core, DPGs are open-source software, open data, open AI models,
and open standards that are freely available for use and adaptation. These
resources are essential for developing robust, scalable, and interoperable
digital systems that can be deployed across various sectors, including health,
education, and social protection. By providing foundational tools and
frameworks, DPGs empower governments, organizations, and communities to build
and enhance their digital infrastructure in ways that are cost-effective,
sustainable, and inclusive.

In a rapidly evolving digital landscape, close collaboration and partnerships
between DPGs have become essential. By working together to ensure not only
interoperability but also the elimination of redundant effort, stewards of DPGs
can pool resources, share knowledge and enhance efficiency, driving us closer to
achieving Sustainable Development Goals (SDGs).

### OpenSPP and OpenFn Collaboration

[OpenSPP](https://openspp.org/) is an open-source digital platform designed to
enhance the efficiency and effectiveness of social protection and agricultural
development programs in low- and middle-income countries. As a Digital Public
Good serving over 20 million beneficiaries, OpenSPP offers a modular, highly
interoperable platform with a comprehensive management information system and
dynamic registries. It can be easily adapted to meet the specific needs, goals,
and existing systems of any country.

The collaboration between OpenSPP and OpenFn is a powerful example of
collaborative work in the DPG space. By adding an OpenSPP
[adaptor](https://docs.openfn.org/adaptors) into
[OpenFn's leading workflow automation and data-exchange platform](https://openfn.org/),
OpenSPP has unlocked countless data integration and automation possibilities for
its user base, as OpenFn can connect OpenSPP with any other application. This
effort, kick-started by the submission of a code contribution to OpenFn by the
OpenSPP team, can now facilitate faster data exchange and workflow automation,
playing a crucial role in managing OpenSPP’s data integration needs. As a
result, this integration allows for faster integration with other systems
without the need for custom code.

As OpenSPP is deployed in more countries, there is a need to ensure that other
tools within the deployment ecosystem can connect to push or pull data to and
from the platform.

Imagine a real-world scenario where field officers equipped with tablets and
smartphones use **KoboToolBox** to collect vital information from residents for
a social protection program. They would typically gather data on income, family
details, and living conditions. Using the
[Cron trigger](/documentation/build/triggers#cron-triggers-formerly-timers)
type, OpenFn **fetches all submitted data at set intervals** from the
Kobotoolbox server for **cleaning, validation and mapping**. The **mapped data
is then fed into OpenSPP**, which utilizes this information to identify eligible
beneficiaries and distribute the appropriate entitlements. This streamlined
process could ensure that the right support reaches those in need efficiently
and accurately, leveraging the power of automation and data integration to
enhance social protection efforts. This could not only improve the accuracy and
timeliness of benefit delivery but also enhance the overall accountability and
transparency of the program.

| ![High level workflow diagram to showcase the use case using the OpenSPP adaptor on OpenFn](/img/kobotoolbox-to-openspp.png) |
| :--------------------------------------------------------------------------------------------------------------------------: |
|                  High level workflow diagram to showcase the use case using the OpenSPP adaptor on OpenFn.                   |

In closing, as we continue to navigate this changing digital landscape, it is
vitally important to support and foster these collaborations, empowering
governments, organizations, and communities to build robust, scalable, and
inclusive digital systems. Join us in promoting and investing in DPG
partnerships to create a more efficient, accountable, and inclusive future for
all.

:::info If you’d like to learn more about how to contribute by building your own
adaptors, check out the OpenFn
[Adaptors GitHub repository](https://github.com/OpenFn/adaptors#working-with-adaptors)
or contact our team via our
[community](https://community.openfn.org?utm_source=openspp_blog&utm_medium=blog)
forum for more guidance! :::
