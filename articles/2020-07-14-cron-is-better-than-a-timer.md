---
layout: post
title: 'Product News: Enhanced Scheduled/Periodic Job Control'
authors: taylor
tags: [annoucement, tips]
featured: false
---

Hi all, this is a quick one from the product team at
[OpenFn](https://openfn.org/) — we've made a major upgrade to how timed/period
jobs work.

<!--truncate-->

In the past, if you weren't using OpenFn to drive some real-time (or
"event-based") automation, you'd need to set up an "interval trigger." Like the
photo above, this was essentially a sand timer. Set your trigger to `10` seconds
and your job fetches data from DHIS2, some regional public health data set, or
whatever, then cleans, transforms, and loads it into some other system.

For the most part, this has got the job done for the last 5 years, but as our
NGO and government clients came up with increasingly specific requirements on
not only how often but _when_ a crucial job gets executed, we began finding
ourselves creating little customizations for them on a once-off basis. We're
happy to annouce that as of `v1.75` (released today), you can now schedule jobs
to run based on `cron` expressions, giving you incredible control over when your
tasks get executed.

### Scheduling is better than timing.

Using `cron`, you can choose to run a job every minute by typing `* * * * *`.

Or maybe you've got a batch sync that you want to take place while your users
are asleep—why not run it every night at 11pm with `23 * * * *`.

What if you've got to submit reuqests for medical inventory only during the
onset of flu season? Simply type `0 0 1 2-4 *` and your job will run at midnight
the 1st of the month, from February through April.

You can still run jobs at the click of a button and create timers with
expressions like `*/10 * * * *` for "every 10 minutes", but scheduling with cron
gives OpenFn.org users so much more control over how they run their
organizations. (And that's a good thing.)

If you're keen on learning by doing but don't have an OpenFn account yet,
[sign up for free](https://www.openfn.org/signup) or mess around with cron
expressions at <a href="https://crontab.guru" target="_blank">crontab.guru</a>,
a brilliant site to quickly build complex cron expressions.

That's all from product for today. Speak soon.

Taylor
