---
layout: post
title:
  'Syncing Like You Mean It: Thinking Through Integration Syncing Protocols'
author: Jed Goldstein
author_url: https://github.com/jedbgold
author_image_url: https://avatars.githubusercontent.com/jedbgold
tags: [how-to, tips]
featured: true
---

A bi-directional sync is the act of connecting two different data systems to
behave as one while simultaneously respecting both software systems/data sets
independence.

In this post we’ll discuss two different syncing protocols to consider when
designing your data integration. These include:

1. Real-time/event based syncs
2. Bi-directional schedule dependent syncs

On a project in Cambodia, where OpenFn is being used by social workers to
automate case referrals between the software systems Primero and OSCaR, we
evaluated these two syncing options. Below, we'll explain what each one is, the
differences between them and which sync option we decided on.

### Real Time/Event Based Syncs

The first option considered for this integration was the real-time/event based
sync. This type of sync is triggered whenever a specified event takes place.
With this approach, whenever a case is referred in Primero OpenFn receives this
and transmits it to OSCaR and vice versa.

Option 1: Real Time/Event Based Sync ![Real_Time_Sync](/img/syncs1.png)

Real time/event based syncs are a great option to consider with data flows that
involve near instantaneous mobile payments or sms messages to recipients.
Additionally, from a cost perspective and depending on your data volumes, real
time syncs might save you money because you are only paying for the runs
triggered by specified events. For instance, in the above example a run is
triggered by a referral, and if there are only 10 case referrals in a month,
you'd be able to get by with a more affordable SaaS plan, then if there were
100,000 runs/month.

##

this project there was no pressing need for an instantaneous, real-time trigger.
OpenFn generally advises clients to avoid real time/event based syncs when
possible because the way these syncs handle system failures can get complicated.

For instance, what happens if the send notification module breaks, or, in the
very unlikely event, that OpenFn goes down unexpectedly? We do everything we can
to ensure that OpenFn doesn’t go offline, but we always want to account for
worst case scenarios and with real-time/event based syncs there are lots of
points of failure where messages can get lost.

Option 2: Bi-Directional Schedule Dependent Syncs
![Schedule_Dependent_Sync](/img/syncs2.png)
