# Introduction

This documentation is for [OpenFn.org](https://www.openfn.org), and is primarily
intended to help users of the site. Technical documentation for OpenFn's
open-source integration tools and language-packs can be found in their
respective repositories at [Github.com/OpenFn](https://github.com/openfn).

There are five sections in this documentation site: an introduction (you are
here), detailed documentation, GitHub version control documentation, source
application setup walkthroughs, and release notes.

If you want a new feature or find a bug, please [submit an
issue](https://github.com/openfn/docs/issues). If you find an issue with the
documentation or want to share your custom functions, you can make those changes
yourself and [submit a pull request](https://github.com/OpenFn/docs/compare)!

If you have any questions, please don't hesitate to email
[admin@openfn.org](mailto:admin@openfn.org).

## The OpenFn Google Group

Please make sure to check out the [OpenFn Google
Group](https://groups.google.com/forum/#!forum/openfn) if you've got questions
that aren't answered here.

## FAQs

### ***What is OpenFn?***

OpenFn is an ***integration platform as a service***. This means our prime
directive is to move data quickly and securely between different software
systems. In most cases:

1. A source application sends **messages** to your project’s **inbox** when
something happens.

2. **Jobs** will be triggered, based on your **filters**, and use the data in
those messages to attempt specific actions in destination systems.

3. The **logs** are recorded so you can see precisely what happened and when and
where it happened to take action in the event of a failed attempt—like editing
the job or even the source message and trying it again.

### ***Who uses OpenFn?***

OpenFn is used by organizations big and small, but the individuals interacting
with the platform range from system administrators to Javascript developers.
With a basic understanding of Javascript, the flexibility of the platform is
almost limitless.

### ***Is OpenFn open-source?***

OpenFn has built and maintains dozens of open-source data transformation and API
wrapper software packages. They are licensed under the **LGPL** and can be used
freely to extract, transform, and load data from a command line, or as part of
another software application.

OpenFn also hosts a proprietary web-application that ties these tools together
(www.openfn.org) into an out-of-the-box integration management platform.

### ***How reliable is the hosted service?***

OpenFn has harnessed the extreme stability and scalability of Erlang to
coordinate these actions and provide users with email alerts, project management
tools, and an online job writing IDE.

We constantly monitor our own status with independent infrastructure at
[status.openfn.org](https://status.openfn.org). You can subscribe to
notifications there or follow [@openfnstatus](https://twitter.com/openfnstatus).

We've been delivering this service continuously since 2014.
