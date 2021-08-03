---
layout: post
title:
  Becoming a Digital Global Good, Open Access, and Thoughts on OpenFn’s
  Long-Term Sustainability
author: Taylor Downs and Jed Goldstein
author_url: https://github.com/taylordowns2000
author_image_url: https://avatars.githubusercontent.com/taylordowns2000
tags: [announcement, global goods]
image: /img/george-washington-bridge.jpg
---

[Digital global goods](https://wiki.digitalsquare.io/index.php/What_are_Global_Goods)
are adaptable, interoperable, open source software or content designed to meet
the data and management needs of country health systems. Incredible software
tools like [CommCare](https://www.dimagi.com/commcare/), a mobile data
collection and service delivery platform, [dhis2](https://dhis2.org/), a health
management information system (HMIS) used in over 40 countries, and
[OpenLMIS](https://openlmis.org/), a popular logistics system, are digital
global goods. OpenFn is proud to now be officially joining them on this list.

<!--truncate-->

![Bridge as public good](/img/george-washington-bridge.jpg)

### The imperative for digital global goods

The story of digital global goods began in July 2018 when the Secretary General
of the United Nations convened a High-Level Panel on Digital Cooperation to
strengthen impact and better direct global efforts in the digital arena. What
motivated this panel’s formation was a growing awareness that as digital
technology reshapes economies and society, it is imperative that the
technologies deployed do not exacerbate global inequities, but instead seek to
address them.

Co-Chaired by Melinda Gates and Jack Ma, the panel’s
[final report](https://digitalcooperation.org/wp-content/uploads/2019/06/DigitalCooperation-report-web-FINAL-1.pdf)
provided recommendations for how the international community could work together
to harness digital technologies for positive change. One of the key action items
that emerged in the report’s aftermath was a call for global investment into the
creation of **digital public goods to help attain the sustainable development
goals. **Specifically, availability and accessibility to digital public
goods—and the data they collect—was introduced as being essential to address
issues of digital inclusion for all regardless of location, race, gender,
religion or socioeconomic standing.

### What is open source?

Not all open source projects are digital public goods, but all digital public
goods must be open source. Open source software is code that is publicly
accessible—anyone can see, modify, and distribute the code as they see fit. Many
governments and international NGOs prefer open source software because of
customization and data residency requirements. Since our founding in 2014 OpenFn
has been committed to open-source software development and the source code for
most of the products we’ve built is freely available on
[Github](https://github.com/OpenFn).

Notably, even though open source software is “free” the cost of deploying it and
maintaining it carries costs that are sometimes comparable to commercial
software licenses.
[Digital Square ](https://digitalsquare.org/blog/2020/2/13/openness-and-value-in-the-digital-health-sector)explains
this dynamic further: “The misconception of open source as ‘free’ may be better
understood through the Romance languages. Open source is
[libre, not gratis](https://en.wikipedia.org/wiki/Gratis_versus_libre): free as
in speech, not as in lunch. In the case of many low resource settings, this is
the right kind of free. The need for adaptability is balanced by the ability to
adapt a software.”

An example of a successful open source software project that is also classified
as a digital public good is [OpenLMIS](https://openlmis.org/). OpenLMIS is the
leading logistics system used to track health products across national supply
chains and while they credit their open source approach as being responsible for
their deployment success to date, they have also experienced challenges related
to their business model. Business model challenges force open source project
maintainers like OpenLMIS and OpenFn to explore different types of revenue
streams that ensure long term sustainability of the projects.

### How OpenFn’s business model will enable long term sustainability of its open source project

Historically, lacking grant funding and without outside investors, OpenFn
decided that the best way to continue delivering high-impact implementations and
keep a laser focus on the needs of real-world NGOs that we serve was to build a
licensed, closed-source software-as-a-service (SaaS) product offering (see
[openfn.org](http://www.openfn.org)). This product is dependent on the huge
suite of open-source software that we continue to invest in for the good of the
larger community—“core”, “adaptors”, and almost all of the software we build is
open source—but by licensing our SaaS we’ve been able to create a steady stream
of revenue that is only dependent on real-world customers seeing and paying for
the value they get by using the product. Selling subscriptions to the OpenFn
platform has not only helped it grow into a strong, trusted, enterprise-grade
product, but it has bootstrapped our implementation arm, subsidized our “free
forever” enterprise tier, and funded the further development of our open source
tools.

Thanks to recent support from DIAL, DFID and Digital Square, OpenFn is now able
to invest more time and energy into our open-source tools—building new software
to compete with and complement more directly our licensed platform and working
to make the existing tools more accessible to a wider audience.The licensed
platform and our open source project have a symbiotic relationship with one
another. Open source innovation drives platform innovation and vice versa.
Crucially, both rely on each other.

With a more robust
[open source offering ](https://docs.openfn.org/documentation/microservice/home)and
a heavy investment in documentation, it will be easier than ever for
organizations to get up and running with OpenFn and then choose whether they
want to scale their solutions on the platform or deploy them on their own
infrastructure using nothing but free open source software (FOSS).

Some will still choose to use our hosted offering, and we’ll be encouraged to
further differentiate that offering through the value that it provides—\_not
\_merely by virtue of it being proprietary. In fact, we see a future in which
NGOs and governments may shift seamlessly between all of our tools. We’ve
developed them with exactly this in mind, ensuring zero lock-in despite the
varying licenses.

### What does this mean, concretely?

In the past it was quite challenging to use OpenFn’s open source tools, and we
feel that they didn’t provide enough functionality, out-of-the-box, to our
users. It’s not surprising to find, then, that almost all of OpenFn’s users were
on the proprietary platform. Going forward our
[open source integration toolkit,](https://docs.openfn.org/documentation/deploy/options)
including OpenFn/devtools, OpenFn/core, OpenFn/engine, and OpenFn/microservice,
will be more robust, user friendly and accessible. This means that anyone,
anywhere can build integration and automation solutions more quickly and
interoperability solutions will be within reach to organizations with varying
technical capabilities.

Versatility is a key component of our open source vision. We are constructing a
system that users can grow and mature with. While our enterprise platform might
be right for your organization today, 5 years from now, once your organization
has its own dedicated IT team and server infrastructure, local deployment via
microservice might make better sense. The good news is that OpenFn integration
[portability](https://docs.openfn.org/documentation/portability) will make these
transitions easy. Your integration will run just as well on your servers as
ours.

As the diagram below demonstrates we envision two main pathways for OpenFn
integrations. The tech savvy project manager will configure their workflows via
our intuitive platform, while the power IT user will configure their workflows
from the command line. Regardless of the chosen approach, there is flexibility
to change paths whenever required.

![Deployment Paths](/img/deployment_paths.png)

Again, _concretely_, this means our users will have more and better options for
how they run their data integration solutions. While they might use
OpenFn/platform to build and test solutions, they could easily choose to run
those same solutions on their own servers via OpenFn/microservice. Visit
OpenFn’s
[Planning for Deployment](https://docs.openfn.org/documentation/deploy/options)
page to learn more.

### Open source is about more than code

An open source project is nothing without a strong community underpinning it.
Led by a steering committee of stakeholders that represent our different users,
we are activating a diverse community around our products that will help guide
and power their direction.

This community of “citizen integrators” (people familiar with processes and
data, but not software development—e.g., program analysts, clinic data managers,
operations leads) will provide their valuable and diverse points of view and
will be equipped to design and build robust solutions to automate processes and
integrate systems.

To join our community please sign up to our
[community page ](https://community.openfn.org/)and feel free to contribute and
ask questions on the forum.

### If you’d like to learn more about this

If your organization is thinking about interoperability and would like to learn
more about OpenFn’s platform or open-source offerings please contact
services@openfn.org for a free consultation.

Also, be sure to stay tuned to our [blog](/blog), or
subscribe to our [newsletter](http://eepurl.com/hcOw8H) to stay up to date with
all ICT4D integration related news.
