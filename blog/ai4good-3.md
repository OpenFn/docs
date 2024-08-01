---
title: 'AI 4 Good 3'
author: Joe Clark
author_url: https://github.com/josephjclark
author_image_url: https://avatars.githubusercontent.com/josephjclark
image: /img/team-no-td.jpg
featured: true
---

Welcome to the third part of my AI for good journey, where I'm trying to use AI
to help me generate a JavaScript library for creating FHIR data structures.

I've set up this blog series back in part 1, where I talked about why I'm
OpenFn's Chief AI Skeptic, and why I've chosen to use Claude to implement this
project.

In part 2, I worked closely with Claude to try and map a specific object to FHIR
without the use of any mapping libraries. Claude did OK but to be honest, I
wouldn't hire it based on the quality of its solution.

In this third part, I'm going to focus on generating the actual helper
libraries.

<!--truncate-->

# Library Design

Now, full disclosure. Before bringing Claude into this, I knew more or less what
I wanted to do. I even created a prototype.

So let's look at the vision. Warning - this gets a bit technical.

As we saw in part 2, if you want to create a FHIR patient in JavaScript today,
you're doing something like this:

```
  const fhirPatient = {
    resourceType: "Patient",
    id: commCarePatient.case_id || commCarePatient.id,
    meta: {
      lastUpdated:
        commCarePatient.date_modified || commCarePatient.server_date_modified,
    },
    active:
      commCarePatient.closed !== undefined ? !commCarePatient.closed : true,
    gender: commCarePatient.properties?.gender?.toLowerCase() || "unknown",
    birthDate:
      commCarePatient.properties?.dob ||
      commCarePatient.properties?.date_of_birth,
  };
```

I don't think Claude did a great job of writing the mapping rules from CommCare
to FHIR. I think a human can do better - but not if they have to hand-write
objects like this.

There is a lot of fiddly syntax here, and if you don't happen to know the FHIR
structure you're creating, it can be hard and error-prone to get the right keys
and values. As a human, you have to keep the FHIR spec open in one window, and
the code open in another, and keep switching your attention between them.

What I want to do is create a bunch of chainable function helpers, like this:

```
patient(id)
  .meta({ lastUpdated: date })
  .name({ first: 'joe' })
  .name({ first: 'Henrika' })
```

The benefits of this are:

- We can default many values, so the user can provide is with less information
- We can provide type definitions, allowing code-assist tooling to kick in after
  `patient()`
- The helper functions we provide - the chainable bits - can be opinionated if
  we want to
- The resulting code is quite easy to read (I think so anyway)

For the record I'm a bit unsure about how opinionated these builders should be.
Should they closely match the FHIR structure or should they be more
user-friendly? For example, the name helper could be like:

```
patient(id)
  .name('Henrika', 'Liboria')
```

But maybe the first, last and middle names are ambiguous, and we can't just take
a full name string.

Or maybe rather than a `meta` helper, I should just add a `lastUpdated` helper:

```
patient(id).lastUpdated(date)
```

That doesn't match the FHIR spec, but it's easier to code

That's an open question for me as we work on these builders.

## Claude's Contribution

How can Claude help me if I already know what I want, and how to build it?

Well, first of all, I'm using Claude like a colleague to bounce ideas off, to
work out good patterns, to think of things I wouldn't think of by myself.

But for me, the biggest benefit is _scale_.

What I really want to do here is hand-write a Patient builder (or generated it
with Claude and tweak it), and then ask Claude to apply that pattern to all of
the hundreds of FHIR entities. It would take me a month to build and test all
those entities - but maybe Claude and I can do it in a day.

I'll talk more about the scale problem in part 4, because it turns out that's a
whole thing.

## Claude's Solution

I worked quite closely with Claude on generating this builder library. I want to
try and summarize the journey here to get a bit of a feel for how the exchange
went, how Claude handled itself, and maybe where that skills gap is.

A couple of points of order before we get started. While my builder library is
JavaScript, I want to write it in TypeScript, because then I can generate strong
type definitions to drive code assist. There's already a types library for FHIR,
which does a beautiful job of representing the FHIR types in TypeScript. Claude
wanted to generate type interfaces for me but I told it to use the types
library, and this worked well.

So, first off, I asked Claude to help me create a buildPatient helper function.
Claude gave me a great, concise answer which totally failed on all my objectives
for this library (to be fair, I didn't give it a huge amount of context).

The first attempt is basically this:

```
function buildPatient(params: Partial<Patient> = {}): Patient {
  const defaults: Partial<Patient> = {
    resourceType: 'Patient',
    gender: 'unknown',
    active: true
  };

  return {
    ...defaults,
    ...params,
  };
}
```

A simple function which sets a few defaults but otherwise asks the user to
specify the whole resource as a JSON object. I suppose it provides a good type
interface, but otherwise doesn't really help the user much.

This doesn't satisfy the chainable helper functions I wanted. So after a bit of
pushing and wrangling, it came out with this:

```
class PatientBuilder {
  private patient: Patient;

  constructor(params: Partial<Patient> = {}) {
    this.patient = {
      resourceType: 'Patient',
      gender: 'unknown',
      active: true,
      ...params
    };
  }

  name(nameProps: NameProps): PatientBuilder {
    const { text, family, given, use = 'official', prefix, suffix } = nameProps;
    const newName: HumanName = { use };
	// --- A bunch of stuff ommitted here --
    this.patient.name.push(nameProps);
    return this;
  }

  toJson(): Patient {
    return this.patient;
  }
}

function buildPatient(params: Partial<Patient> = {}): PatientBuilder {
  return new PatientBuilder(params);
}
```

I've removed a bunch of code in the `name` method here because Claude gave me a
load of logic for defaulting the name nicely.

This class-based approach is good and, as Claude tells me, lets me chain
functions nicely:

```
const patient = buildPatient({ id: '123' })
  .name({ text: "Joe Clark" })
  .name({ family: "Doe", given: "John", use: "official" })
  .toJson();
```

A really important detail here is the `toJson()` function. The `patient`
variable is an instance of this chainable class thingy. But I also want to treat
it like data, I want to do `patient.name[0]` to read the name out of it. `name`
can't be a function AND a property though. So we have to distinguish between the
patient builder (the thing returned by buildPatient) and the patient data (the
thing returned by toJson).

This is an annoying implementation detail, a trap which I fell into myself, and
Claude did later. Interestingly, ChatGPT-4 caught this problem right away. I
hoped that one of these models might suggest a creative solution, but not was
forthcoming.

Anyway, the class approach is fine but it doesn't scale well. Many FHIR types
specifiy a `name`, for example. Do we have to duplicate that code across them
all?

Claude's answer to this was inheritence - define a super type with a `name` and
inherit it. I think this gives us complex heirarchies across our types. Plus I'd
like the creation of the builder to be more compositional.

So, after more back and forth, Claude returned this functional style to define
Patient and Practitioner builders. Comments are my own:

```
// Common implementation of a name setter
const name = (resource: any, nameProps: Partial<HumanName>) => {
  if (!resource.name) resource.name = [];
  resource.name.push(nameProps);
  return resource;
};

// Other setters ommitted

const buildPatient = createBuilder<Patient>('Patient', {
  name,
  telecom,
  address,
  identifier,
  active,
  gender,
  birthDate
});

const buildPractitioner = createBuilder<Practitioner>('Practitioner', {
  name,
  telecom,
  address,
  identifier,
  active,
  qualification
});

```

Honestly, it took me a long time to get here. And I've omitted a lot of code.
But basically I like this!

My builder functions have this really nice, declarative structure. I can compare
the buildPatient structure with the FHIR patient spec, and the names all match
up (well, the one we've implemented anyway)

![[Pasted image 20240801144226.png]] I was pretty happy to get here, as this
chat transcript shows:

```
Claude: This approach gives us the best of both worlds: reduced duplication in method implementations, while maintaining explicit and clear declarations of what each builder can do. It's also easy to extend with new resource types or modify existing ones.

Me: Ah that's beautiful!

Claude:  I'm glad you find this approach beautiful! It's indeed a clean and efficient way to handle FHIR resource builders. This design offers several advantages:
```

Sadly, I couldn't get a robust type solution out of Claude. Maybe if I pushed
more. ChatGPT-4 did a bit better here - I didn't like the result it gave me, but
it did give me a result.

## Results

In the end, I don't think I'll use Claude's solution. I'll be using my own
original prototype with some tweaks (particularly around the typing)

I think the needs to have a strong type interface, clear declarative
composition, AND handle versions (which I still haven't worked out by the way)
are too much for Claude to balance.

Basically it wants to generate the code that its network has learned to do. I
can push it one way, or another. But shaping it across too many dimensions just
doesn't seem to work. Not yet.

So has my time with Claude been a waste? No, I wouldn't say that. Claude's
answers have helped shape my own thinking. It ran into the same problems as I
did (perhaps I've led it on?), and found similar solutions. It's also convinced
me that what I want to do isn't easy, an some of the compromises I've made in
the final design are just necessary evils. Means to an end.

Could a junior developer have used Claude to generate this builder library? No,
probably not. I don't think a junior developer could have pushed Claude in the
right way. They'd have been given an answer - probably the first class-based
solution. And they'd be quite happy with that until they ran into a problem
(like scaling, or maintaining, or complexity).

I think LLMs are very good at generate short snippets of code, but very very bad
at maintaining existing code. So I think our junior developer would end up with
a flaky, hard to maintain library which wouldn't stand the tests of time and
usage.
