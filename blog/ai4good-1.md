---
title: 'AI 4 Good 1'
author: Joe Clark
author_url: https://github.com/josephjclark
author_image_url: https://avatars.githubusercontent.com/josephjclark
image: /img/team-no-td.jpg
featured: true
---

Welcome to my AI for good journey!

Through the course of this blog, I am going to attempt to use AI (by which I
mean an LLM, like ChatGPT) to try and solve a data integration problem I am
having. I'll be using Claude, by Anthropic.

In this first part, I'm going to talk about my problem, my (problematic)
relationship with AI, and my choice of model.

This journey will track a real development use-case. This isn't a theoretical
exercise or hello-world demo: at the end of the process I will have production
code, available to our users, developer with AI.

This blog is aimed at everyone really. There will be soft squishy bits and a few
hard technical bits - just skip anything that's not to your taste, I'll be
constantly reinforcing my context. And anyway this is a journey, with twists and
turns. It's OK to skip ahead.

By the end of this series, what I want to show more than anything, is the vast
gap between generating code snippets, and generating real-world solutions.

<!--truncate-->

# The Scenario

I have a problem I'd like to solve. It's a little technical but I'll phrase it
easy terms here.

I want to build a JavaScript library which makes it easy to build FHIR data
structures. I can do this myself, but there are many FHIR datatypes. So I'd like
to utilize AI to:

1. Work out a good, user-friendly pattern (both for users to use the library
   functions, and for me to build the library itself)
2. Scale the solution to span all of the many FHIR concepts.

FHIR (pronounced "fire") is a standard for describing healthcare resources in a
consistent way. Simply put: if every IT system in the world used the same data
structure to describe a patient (eg, firstName, first_name, fname or
given_name), it would be easy for those systems to share information, which
means doctors are able to get more information about their patients. FHIR
defines a standard taxonomy for describing a vast range of healthcare concepts -
from clinical to administration.

A common use-case in OpenFn integrations is to take some resource in a FHIR
format, convert it to some other format, and send it elsewhere (to Salesforce,
for example). Or vice-versa. Sometimes we even have to convert between data
defined using different versions of FHIR.

Today, OpenFn users who want to build a FHIR data structure have to do so by
hand-writing the JSON with very little tooling support. This is hard and error
prone and pretty tedious.

I want to change that.

# Confessions of an AI Skeptic

One of my responsibilities at OpenFn is to be the "Chief AI Skeptic", a role
which I begrudgingly (appropriately enough) accept.

Since bursting on to the scene in, uh, 2022? (any timeline featuring a global
pandemic or an AI revolution would be hard to track - throw both into the mixer
at once and I don't even know day it is). ChatGPT and LLMs have threatened to
turn all of our lives upside down. Maybe they already have.

LLMs are spooky. They are scary. They can do things they shouldn't really be
able to do 0 rationalise and reason and adapt and learn on the fly. And people
love them. The public has embraced ChatGPT with open arms and a sigh of relief
and a "where have you BEEN all my life?!".

Look, I don't even like StackOverflow. I don't like coding subreddits. For ten
years I have worried that hard-earned expertise is being replaced by
crowd-sourced wisdom. How much damage will naive users do when empowered by
ChatGPT? How much more junk code will fill up the internet, spam servers, and
generate support tickets?

And I know that not everyone is using LLMs for critical, life-or-death
decisions. From code generation to fact checking, to summarizing and
story-telling, ChatGPT has many strengths (but what about the cost? Why is
no-one talking about the environmental impact of asking ChatGPT about the
weather forecast, or which Die Hard movie is best?)

I just can't shake the feeling that every time we ask an LLM to solve a problem
for us, we lose a little bit of expertise. We lose the chance to learn for
ourselves. We lost a little flake of critical thinking and independence.

Maybe eventually we'll lose the ability to think for ourselves entirely.

# Anthropic & Claude

OK, enough doomsaying. I've actually got a job to do and, like it or not, AI is
part of my workflow now.

Claude is making it very hard to retain my thick defensive skeptic-skin around
AI. I am falling in love with Anthropic. Allow me to recount the ways.

Anthropic's unique selling point is safety. This plays well with me, who loses
sleep about AI. But really importantly, safety isn't a buzzword or marketing
slogan. I think Anthropic really care about this stuff.

-

I have felt for a long time that LLMs are very very good at generating sentences
that sound convincing, but lack depth and robustness. Like fortune tellers and
soothsayers, they deal in plausible truths and generalisations, picking up key
words and phrases

Anthropic is changing that perception. By focusing on good science and carefully
managing hype and expectations, Anthropic's research is convincing me that maybe
LLMs really capable of advanced reasoning.

-
