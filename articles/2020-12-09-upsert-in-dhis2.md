---
layout: post
title: 'Tracked entity instances in DHIS2'
author: Taylor Downs
author_url: https://github.com/taylordowns2000
author_image_url: https://avatars.githubusercontent.com/taylordowns2000
tags: [how-to, tips]
featured: true
---

tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but
upserts aren’t supported by a standard DHIS2 API endpoint. We built one in our
dhis2 adaptor: it’s composed of existing APIs and a bit of logic 🤔. Now you can
`upsert` tracked entity instances to DHIS2 👍 ✅.

<!--truncate-->

## A bit more...

An “UPSERT” is a portmanteau of the database functions UPDATE and INSERT. It’s
critical to handle upserts properly when integrating systems. As of version 35
of the API, DHIS2 does not allow for an administrator to upsert tracked entity
instances (“TEIs”). OpenFn’s own
[Chaiwa Berian](https://github.com/chaiwa-berian) has come up with a solution
that highlights the utility of helper functions in our dhis2 adaptor. By
combining various DHIS2 APIs through an upsertTEI function in OpenFn, DHIS2
users can now perform upserts to TEIs.

If you’re curious, check out his implementation
[here](https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L347).

## Even more!

A tracked entity instance in DHIS2 is a type of entity that can be tracked
through the system. It can be anything from a person to a commodity like a
medicine. If I am a database administrator presiding over two different systems
that are connected to one another, let’s call them “System A” and “System B,” I
would like for any updates made to the TEI of a user named “Jim Smith” in System
A to also appear in Jim’s record in System B. Before upserts came about, doing
so was difficult because of the possibility of duplicate record creation.
Because an upsert simultaneously UPDATES and INSERTS, it prevents duplicates.

Upserts are important and good because they cut down on the risk of duplicate
data entry and they also allow for transactions to be retried over and over to
ensure data integrity. That last bit is called “idempotency” and you can read
about it [over here](https://blog.openfn.org/allow-yourself-to-fail/).

Please don’t hesitate to reach out to one of OpenFn’s implementation specialists
if you’d like to learn more.

-- Taylor

[Sign up](https://openfn.org/signup) to set up a project today,
absolutely free.

[Reach out](mailto:admin@openfn.org) for more information.
