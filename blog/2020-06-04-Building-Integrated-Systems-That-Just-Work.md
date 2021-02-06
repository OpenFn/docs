---
layout: post
title: 'Building Integrated Systems That Just Work'
author: taylor 
categories:
  [tips]
image: assets/images/roads.jpg
featured: false
---

_OpenFn provides the "Rosetta Stone" for your technologies and integrates any app._

_This article was originally posted by Taylor Downs, Head of Product, on [The OpenFn Founder's blog](https://medium.com/@taylordowns2000) as "Making technology work better in the social sector."_

#### We're building a tool that will make integrating critical social-impact technologies trivial.

The words “integrating” and “trivial” are not often written in the same sentence — and for good reason! Non-technical readers click away when they read the former, while developers see the latter and think it’s nonsense! (i.e., Integration is NEVER trivial.) This doesn’t leave a lot of you left here on sentence number 5. Thanks for sticking it out, and let me reward your patience by explaining why this is such a big deal and what we need from you to make it happen.

By leveraging technology, we can make social programs more effective. Bigger, better, more complete solutions to issues of poverty, public health, and human rights are not only possible, but seem to be right on our doorstep thanks to tremendous advances in information technology in the last 25 years. Thousands of tools have been developed to address all sorts of needs across international development. While the tools and use-cases vary tremendously, there’s always one ugly, expensive, technically complex constant lurking in the background.

(Enter “integration” stage left.)

Just as “no man is an island”, no single piece of technology can stand alone. We rely on integrations every day. Many applications are so tightly integrated that we hardly notice. Gmail and Google Contacts almost behave like a single app. If you’re lucky, Gmail and your calendar are also integrated. If you sync a folder on your computer to Dropbox, there’s a nifty integration between your local operating system and Dropbox.com. All of these integrations save precious time — they cut out a tedious manual step like uploading a copy of each photo you save on your computer to a website.

Now imagine running a pediatric HIV clinic in Kenya. Beyond email, a calendar, and Dropbox, you rely on a fingerprint scanner to to quickly access patient IDs, a smart-phone based data collection app for new patient intake during home visits, an electronic medical record system to manage patient data securely, and an automated SsocMS service to notify workers and patients of upcoming visits.

#### We should take a moment to be thankful for the progress we’ve made in “ICT4D”. It’s amazing that these technologies exist. They save time, money, and lives.

The problem is that, for lack of a better metaphor, these technologies all speak different languages. You can ask users to download data from one, make sense of it, and then upload it to another, but that’s a slow, expensive, and error-prone task. (Not to mention the non-negligible fact that it’s horribly boring.) To get the tos working together automatically you’re talking tens of thousands of dollars, and the integration you’re left with isn’t re-usable once your needs change. What’s worse is that every time a new technology is implemented within an organization, consultants and developers must struggle anew to integrate it with existing systems because there’s seldom the budget or foresight required to build a truly flexible and future-proof integration. This is the issue we’re tackling, head on.

#### OpenFn is a “Rosetta Stone” that makes automating the constant flow of crucial information from one system to another as easy as point-and-click.

Google.org called OpenFn’s attempt to provide easy and technology agnostic data integration “the holy grail.” Stu, our own chief engineer had the same notion. After some hard work, it seems that the platform may really be that powerful, but also far more attainable. Here’s how we do it:

We use (1) a universal standard for data storage, (2) standard information about what kinds of data are expected from “source applications” and “destination applications”, and (3) a user-friendly interface to generate “jobs”—sometimes called “automation scripts” or instructions for how to process data.

#### A job might be to create a new patient record when fingerprints are scanned. Once a job is created, it can simply be “switched on” to run in the background while the human beings at your organization focus on much more important (and interesting!) things.

For those of you who work in technology, the power of this strategy (namely, using a universal standard) should be apparent. To integrate a new application, a small adapter that translates data to JSON and provides a JSON-schema for your database is all that’s required. Once one API connection to OpenFn is established, ***your technology is instantly connected to every other technology connected to OpenFn–and OpenFn can connect any application.*** It will start to snowball quickly, allowing data to flow instantly between hundreds of crucial applications, and each developer will only ever need to maintain a single connection.

![]({{ site.baseurl }}/assets/images/apps.png)

Dozens of organizations worldwide use OpenFn to scale their interventions by automating key processes and information flows. OpenFn solutions deliver critical information, faster and unlock resources for organizations by eliminating manual, time-intensive tasks. OpenFn connects any app–including common ICT4D tools like DHIS2, CommCare, Kobo Toolbox, and Salesforce, as well as databases, custom applications, and legacy systems. Drop us a note if you’re thinking about how to connect tools at your organization, or if you’re a developer and wondering how to get your product connected to other essential tools in international development.

In the end, we’re talking about making it orders of magnitude faster and significantly less expensive to integrate key technologies. By automating the flow of data in social impact organizations we eliminate human error and reduce lag time—this means better information in the hands of decision makers, faster. All this leads to one thing: bigger, better, and more complete solutions to some of the world's biggest problems.

If you’d just like some more information about OpenFn and how we help leading impact-first organizations scale their interventions, head over to [Solution Overviews - OpenFn.](https://www.openfn.org/solutions) To get all the latest OpenFn updates, like us on [Facebook](https://www.facebook.com/openfn) and follow us on [Twitter.](https://twitter.com/openfn)
