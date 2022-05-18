---
title: Troubleshooting integrations
sidebar_label: Troubleshooting
---

Or, a penny for your thoughts during the debugging process.

<!--truncate-->

So, you've noticed that something isn't quite right. Here's a list of questions,
and complications, that might help you get to the bottom of it.

## The Implementation Perspective

First, keep this quick checklist at hand... answering these questions _in order_
will ensure that you're spending as little time as possible getting to the cause
of the problem, whether that's big or small.

### 1. What do you desire?

This one might take a lifetime to answer, but in the context of debugging you
can limit the bounds a bit. We really can't move forward until you're clear on
what you want.

### 2. How are you asking for it?

Show me the issue, the specifications, the "requirement"! Let's make sure it's
clearly articulated and memorialized. If so, move to Q3!

### 3. Is what you're asking for going to produce the effect you desire?

This is a tricky one, and may involve the engineering team. (In fact, this is
often when engineering gets called in. There's a "bug", and before we take a
look at any code we need to figure out if what's being asked for—the
specification—will actually produce the desired outcomes.)

### 4. Does the expression implement what you're asking for?

So we're _certain_ that the spec will produce the effect we want? OK, great...
now let's look at the job expression. Does the job expression implement the
spec? How can you prove (with logs, assertions, etc.) that it does? Don't move
on until you're certain of this, or certain that it _can't_, given the adaptor
you're using!

:::info Time check

N.B., a change to the job expression takes as little as a couple of minutes.

:::

### 5. Does the adaptor support/enable the implementation in the expression?

OK, if you're certain the expression is doing all it can with the spec... maybe
there's a bug in the adaptor! Something in how that helper function was
implemented may not be doing what the author of the adaptor intended—and this
could be producing the "bug".

If you're starting work on the adaptor, you should have _already_ reduced the
problem to a **_GENERAL PROBLEM_**, leaving aside all specifics of this
implementation. You're starting to change the way that this adaptor interacts
with the target API. You've got out your API docs and you're CURLing requests
directly to various endpoints, setting up tests in the adaptor, etc.

:::info Time check

A change to the adaptor might take an hour, maybe a few. We're on the order of a
day, if you've got big changes and include the time required to deploy new
versions.

:::

### 6. Does the target API support/enable the implementation in the adaptor?

Whoa... if you've made it down here you're in now "big serious" land. Tread
lightly! I'm guessing that you've found lots of Stack Overflow threads
describing the issue you're facing. What you're getting at is that _despite_ the
API docs we used to build this adaptor, there's something different about the
way the API is actually behaving.

Maybe there's a new API version with a breaking change?

Maybe there's a bug in the target system?

Either way, when you get down to this level you're spending a LOT of time and
you're engaging with the broader open source community. You should post on at
least one forum before signing off for the day.

:::info Time check

Writing a new adaptor for a new API version, or fixing a bug in another
developer's system via a pull request... this stuff takes weeks and months and,
worse yet, the timelines are often outside of our control.

:::

## The Product Perspective

To throw a spanner into the works _(embrace the complexity!)_ when I wear my
product hat I invert the pyramid here. While a problem might be solved in 15
minutes by writing a new line in the `expression` (see Q4), is this a
generalizable problem and could I save _future implementers_ those 15 minutes by
making a change to the adaptor (see Q5) that would provide this fix/feature "out
of the box"?

Better yet... could I make some change to the OpenFn platform (or to Primero, or
CommCare, or DHIS2?) that would enable easier/better/adaptors and solve this
problem with clicks, not code?

:::tip

Remember those jobs we used to write that did nothing (simply returning state)
if a condition was met? Well, using exactly this approach we delivered an
"exclusion filter" feature to OpenFn which allows a user to skip certain inbound
messages based on criteria, rather than having to evaluate those message in the
job.

It took much more work than writing that one `fn(...)` block at the top of a
single client's job, but now it saves _everyone_ from writing that line in the
future.

:::

## Find balance, in the end

These questions are always knocking around inside my head and I try to weigh
this product perspective against the implementation perspective. In the end,
it's always about balance (no surprise there) in how we _solve_ these problems,
but by following the implementation perspective in how you approach, understand,
debug, and produce estimates will get more information out onto the table faster
and enable a better "OK, how should we solve this given the current
chronological and commercial constraints" conversation between the
Implementation Team and the Engineering Team.
