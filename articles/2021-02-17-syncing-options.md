---
layout: post
title: 'Sync Like You Mean It: Thinking Through System “Syncing” Protocols'
authors: jed
tags: [how-to, tips]
featured: true
---

“Syncing” is getting two systems to a state of harmony. This might mean keeping
a list of patients up to date, though modifications can be made in either
system. It might mean copying transactions from one system to another on a
nightly basis. It might mean a lot of things, but the key concept is that when
you sync systems, you’re asking them to work together while simultaneously
respecting both software systems’ independence.

In this post we’ll discuss two different syncing protocols to consider when
designing your data integration. These include:

1. **Real-time, or event-based, syncs**
2. **Scheduled syncs**
<!--truncate-->

For a
[recent project in Cambodia](https://www.openfn.org/spotlight/2021-02-09-interoperability-for-case-referrals),
OpenFn is being used by social workers to automate case referrals between the
software systems Primero and OSCaR. In the design phase, we evaluated these two
syncing options. Below, we'll explain what each one is, the differences between
them and which option we chose in the end.

### Real Time/Event Based Syncs

The first option considered for this integration was the real-time/event based
sync. This type of sync is triggered whenever a specified event takes place in a
system. With this approach, whenever a case is referred in Primero (via the user
interface, i.e., when a real case-worker clicks the “refer” button) OpenFn
receives a small payload with case data and transmits it to OSCaR and vice
versa.

![Real_Time_Sync](/img/syncs1.webp)

<!-- all diagrams for this article can be found here: https://lucid.app/lucidchart/invitations/accept/d36fb964-7c74-4e48-b248-7e25497883e3 -->

Because of their instantaneous nature, real time/event based syncs are great for
integrations that involve mobile payments or sms messages to recipients. Really,
anything that needs to be done “now”! Additionally, depending on your data
volumes real time syncs might save you money because you’re only using resources
when specific events take place. For instance, in the above example, a run is
triggered by a referral, so if there are only 10 case referrals/month, you'd
only process 10 runs each month.

This type of sync is great because it’s instantaneous, typically quite
straightforward to set up, doesn’t require any “state mangagement” on OpenFn,
and allows for the reprocessing of individual events. There are, however,
drawbacks.

For instance, what happens if the app that’s sending notifications to OpenFn
fails to send? What if AWS or GCP goes down, taking half of the internet with
it? If Primero “thinks” it sent the referral, OpenFn never receives it, that
case might not get referred to Oscar!

### Scheduled Syncs

![Schedule_Dependent_Sync](/img/syncs2.webp)

The second option considered, a bi-directional schedule dependent sync, solves
for the issue discussed above. On a scheduled basis (every 5 minutes, for
example) OpenFn checks with Primero and Oscar to see if case referrals need to
be transmitted between the two systems and then refers the case if required. In
the unlikely event that any of the software systems involved crash, the
stability provided by the bi-directional sync means that all data is preserved
and eventually makes it to its destination safely.

The major drawback here is complexity. We had to use 4 jobs instead of 2, and
the job that is responsible for “pulling” data that’s been updated since the
time of the last successful sync has to keep “state”—or some sort of working
memory of what it’s done in the past. When pulling modified cases from Primero,
OpenFn now only pulls cases modified on or after `YYYY-MM-DD HH:MM:SS` where
`YYYY-MM-DD HH:MM:SS` is the time of the last successful, round-trip
synchronization. OpenFn has built-in functionality to handle exactly this
requirement, but not all ETL systems do and it’s a design implication that must
be considered.

Ultimately, for the project in Cambodia, we decided that this sync option is the
right choice because data integrity is more important than the speed of this
data flow. That’s a crucial point to understand—the organizations operating in
Cambodia decided that for this particular use case, being able to guarantee
eventual syncing was more important than having real-time syncing.

### Both Sync Options Have Their Pros and Cons

Both options definitely have their use-cases and OpenFn's platform versatility
enables your team to decide which type of sync is right for your project.

As always, we are here to help with any questions as you think through which
sync option makes the most sense for your project.
