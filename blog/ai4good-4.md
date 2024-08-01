---
title: 'AI 4 Good 4'
author: Joe Clark
author_url: https://github.com/josephjclark
author_image_url: https://avatars.githubusercontent.com/josephjclark
image: /img/team-no-td.jpg
featured: true
---

Welcome to the fourth part of my AI for good journey, where I'm trying to use AI
to help me generate a JavaScript library for creating FHIR data structures.

You can read more about what I'm doing and why in part 1.

In part 3, I used Claude to generate a pattern for a builder function in
TypeScript. I knew what I wanted going in, and had quite a hard time getting
Claude to generate me a solution.

So I went off and wrote my own helper, taking all my learnings with me.

In this fourth part, I want Claude to be a labour-saving device, I want it to be
an uber-optimiser. Given a strong pattern to generate Patient and Practitioner
types, I want Claude to generate builders to map the whole of the FHIR spec.

And then I want it to help me write unit tests to prove that it all works.

<!--truncate-->

## The Scale Problem

Working with Claude, and in parallel gpt-4, I've noticed something.

The LLMs like to generate me example code and starting points - they don't seem
to be in a rush to generate an entire solution.

I kind of get it, I don't want them wasting my tokens and generation 5k lines of
code.

On the hand, the biggest reason I have for coming to AI is to scale up my rote
and boring pattern across a well-defined spec.
