---
layout: post
title: 'How Information Is Organized... In Organizations'
authors: taylor
tags: [how-to, tips]
image: /img/informationorganized.jpg
featured: false
---

#### Does your organization's information have an underlying structure? Try this exercise using boxes and crow's feet.

This article was originally posted by Taylor Downs, Head of Product, on
[The OpenFn Founder's blog](https://medium.com/@taylordowns2000) as "The power
of crow's feet."

It’s Saturday Morning in Cape Town and I’ve just spent an hour talking about how
a non-profit is organized. I thought I was getting into a technical
discussion—I’ve been doing system architecture discussions for years—but what we
ended up talking about was how this NGO thinks.

<!--truncate-->

This engagement is largely about mapping an already existing “people & paper”
based system to technology. Vera Solutions will build a system for this client
using Open Data Kit for field data collection and Salesforce.com for the
management “back-end”. Because we’re not explicitly being asked to help redesign
processes at this organization, the client is “telling us how things are”, then
expecting us to create a relational database model that facilitates
business-as-usual, only in a more efficient, digital way. Seems reasonable.

This organization runs multiple programs focusing on a handful of strategic
objectives. They coordinate various activities in their target communities and
report on those activities against numerous (sometimes overlapping) indicators.
Sound familiar? As we get to the 3rd explanation of these programs, and the 11th
iteration of the system schema, it hits me…

### Drawing a "relational object model" sounds technical, but it's actually an exercise in clear communication... and everyone can benefit from it.

When we—human beings—wrestle with complex problems (like managing lots of
programs, other humans, community stakeholders, etc.) we have the capacity to
trick ourselves into thinking that we have wrapped our heads around a system
(for clinic registration, for after-school education, etc.) when, in fact, we’re
engaging in mental hand-waving and are simply ‘papering-over’ sections which are
secretly not just complicated, but totally incongruous with other parts of the
system. We can make ourselves believe that our logic is sound because we want it
to be sound, when in reality the organization might be held together by good
people, not good, clear, defined processes. By learning a couple of key
concepts, it’s possible for non-technical people to articulate their thoughts
clearly using “boxes” and “crow’s feet” and see whether or not there is an
underlying structure to their organization’s information.

### By forcing yourself to reduce complex systems to sketches containing only two elements, you’ll be able to detect important conflicts and confusions in how you think about your organization that you might otherwise miss.

If you can’t diagram the information structure in your organization using boxes
and crow’s feet, it’s a smell that something isn’t quite right (or at least that
something isn’t easily scalable… more on this later!). Let me show you the tools
in the toolbox and then wrap up by waxing poetic on people, processes, and
technology.

### Boxes and crow's feet

![](/img/box5.png)

The box is my favorite. It represents an entity in your data system. Entities
(like `teachers`) have attributes (like `name`, `phone number`, `date of birth`,
`gender`, etc.) Some people like thinking of entities as simple forms. The
“Teacher Registration Form” will ask for the teacher’s name, phone number,
gender, etc. These are the fields on your teacher entity. By submitting one of
these forms, you’ll add a new teacher to your database. If you’re an Excel
person, the attributes are columns in your `teachers` table.

![](/img/crowsfeet2.png)

The crow’s foot is my second favorite. It’s used to show relationships between
entities. We know that teachers are related to the sessions that they conduct.
(And `session` might be another entity, with fields like `date`,
`subject taught`, and `venue`, to name just a few.) The crow’s foot allows us to
specify exactly how they are related. On that session entity, we’ll need to
specify the name (or ID) of the teacher who led it. On the teacher entity,
however, there won’t be a field to specify the name or ID of the session…
because a single teacher can lead MANY sessions. This is a one-to-many
relationship. The crow’s foot (that little three-pronged fella) denotes the
many. One teacher can have many sessions. One session, however, can only have
one teacher. See the diagram below.

![](/img/objectmodel3.png)

If we focus just on `teacher` and `session` and think back to MS Excel, we can
envision a `teachers` table and a `sessions` table. Let’s put them on different
sheets in the same workbook. On the `teachers` table, there is no column for
`session`, but on the `sessions` table, there _is_ a column for `teacher ID`.
We’ve just established a one-to-many relationship.

Next time, we’ll talk about what’s going with the `attendance` entity above.
It’s sometimes called a “junction object” or a “join table”, and it’s what
allows MANY students to be related to MANY sessions. I’ll write more on this
next time, but there is no magic going on, no technicalities here. The way that
many students are related to many sessions is through this Real World Concept
that we call `attendance`. Attendance is what happens when a student shows up at
a session. It’s so important to get the language right in these discussions, and
make sure that you’re talking about real-world concepts.

### Relational object models with lots of confusing terms are not "technical". They are "bad."

Remember that as you start to put pen to paper. And allow yourselves time (and
multiple drafts) to get the boxes and terminology right. Understanding
relational object modelling is an incredibly powerful way to organize a company.
As I said before, if you can’t model it with boxes and arrows, it’s a smell that
something might not be conceptually sound.

### A disclaimer and some thoughts on scaling:

Some organizations do amazing work without good conceptual systems. They rely on
humans, instinct, improvisation, nouse, and other not-so-clearly-defined things.
They might do really great work. They might get the job done. But they need to
be well aware of their condition and face it head on. If you can’t systematize
your program implementation processes, then you need to focus tremendous effort
on finding and retaining the right people.

A friend once told me that “people are not scalable.” I couldn’t agree more, and
defend my earlier stance that if your organization’s information structure can’t
be defined with boxes and crow’s feet, it may be very hard for you to scale
responsibly. However, if you can create a ruthlessly efficient, world-class
“people operations” system (recruitment, training, management, compensation, HR,
etc.) that ensures you’ve always got the right people to figure things out you
might be better off than those operating a well defined assembly-line with
interchangeable parts. Alas, the middle way is probably the best.

That’s all for now. More soon.

_Need help organizing or scaling your organization's information or process
flows? Contact our team of ICT4D specialists at
[support@openfn.org](mailto:support@openfn.org)._
