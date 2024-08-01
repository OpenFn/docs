---
title: 'AI 4 Good 2'
author: Joe Clark
author_url: https://github.com/josephjclark
author_image_url: https://avatars.githubusercontent.com/josephjclark
image: /img/team-no-td.jpg
featured: true
---

Welcome to the second part of my AI for Good Journey.

In this blog, I'm going to start using Claude to generate code.

If you recall from Part One, what I want to do is generate a library to make it
easier to generate FHIR data types.

But before I get into that, I want to explore Claude's abilities on a slightly
simpler task. We're taking on a side-quest to take a data structure and convert
it into a FHIR patient.

I am hoping we'll learn some interesting things about interoperability, data
transformation, and AI along the way.

<!--truncate-->

## Input Data

Let's say I have some data I've pulled out of CommCare (a system for capturing
data from frontline (healthcare) workers). Maybe there's a million records, but
I'm just going to take a look at one.

This is some example test data, by the way. There are a bunch of fields in here
which I don't understand, and I suppose might not be realistic. But that's OK:
we'll map the fields we can.

Anyway, here's the Commcare Case data:

```
{
  "attachments": {},
  "case_id": "a45c8845-9c68-46aa-a360-a4da106fcbaa",
  "closed": false,
  "date_closed": null,
  "date_modified": "2024-06-06T09:56:22.640000Z",
  "domain": "test-client",
  "indices": {
    "parent": {
      "case_id": "610ce74d-ef59-46c2-9be9-2dd66e4f4957",
      "case_type": "household",
      "relationship": "child"
    }
  },
  "properties": {
    "religion": "islam",
    "case_name": "Finance River Decoration",
    "case_type": "person",
    "dob": "1999-05-11",
    "date_opened": "2024-06-06T09:56:22.640",
    "dusun": "Airfair TEST",
    "ethnic_group": "Other",
    "external_id": null,
    "full_name": "Henrika Liboria",
    "first_name": "Henrika",
    "last_name": "Liboria",
    "gender": "female",
    "ihs_number": "P01836748436",
    "is_this_person_the_head_of_their_household": "yes",
    "household_id": "610ce74d-ef59-46c2-9be9-2dd66e4f4957",
    "nama_site": "Tambrauw TEST",
    "name_of_father": "Don",
    "name_of_mother": "Anna",
    "nickname": "",
    "patient_identifier": "9201076001000007",
    "nomor_bpjs": "232",
    "nomor_kartu_clinic": "929329",
    "nomor_kartu_household": "1234567890987654",
    "owner_id": "0c10553ccfd548d98e2a84dee47efb80",
    "phone_number": "0239299322",
    "status_in_household": "wife"
  },
  "server_date_modified": "2024-06-06T09:56:22.737283Z",
  "user_id": "087d2c23a90d4e058f6d6f80aa60aff6",
  "xform_ids": ["f03c5b76-c766-4aac-9287-4718e9a200b6"]
}
```

This is a JSON object - a widely used format for capturing data. JSON is cool
because it's readable by machines, but also kinda readable by humans. Read it
like an indented list of fields (like table headers) an values (like table
cells - the whole object is one row).

The reason I like CommCare for this example is that CommCare isn't terribly
formal in its data structures. The stuff in the "properties" object (the
indented list) changes on different deployments. Different organisations capture
different data in different ways.

For example, this organisation captures a "first_name" and "last_name" for a
patient. We can expect all (most?) patients from this organisation to have those
fields. Maybe this is a record from one hospital. But patients from a different
hospital, which also uses CommCare, may use different field names.

This is is a great case for AI. There is no such thing as a generic "CommCare to
FHIR" converter - there's no single fixed set of rules we can use to map all
CommCare data into FHIR. But we probably can work out a set of rules for this
particular organisation. A human can do it - can Claude?

# Enter Claude

I asked Claude to generate me a Javascript function to generate an object like
our commcare example into a FHIR patient.

Claude did a good job. We went back-and-forth a bit on the code (for example I
wanted to default some values, like setting "gender" to unknown unless otherwise
specified) and it generated me a FHIR patient like this:

```
{
  "resourceType": "Patient",
  "id": "a45c8845-9c68-46aa-a360-a4da106fcbaa",
  "meta": {
    "lastUpdated": "2024-06-06T09:56:22.640000Z"
  },
  "identifier": [
    {
      "system": "uri:joe:commcare-id",
      "value": "9201076001000007"
    },
    {
      "system": "uri:joe:ihs",
      "value": "P01836748436"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Liboria",
      "given": ["Henrika"]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "0239299322"
    }
  ],
  "gender": "female",
  "birthDate": "1999-05-11",
  "address": [
    {
      "use": "home",
      "type": "physical",
      "text": "Airfair TEST"
    }
  ],
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "FTH"
            }
          ]
        }
      ],
      "name": {
        "use": "official",
        "text": "Don"
      }
    },
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MTH"
            }
          ]
        }
      ],
      "name": {
        "use": "official",
        "text": "Anna"
      }
    }
  ],
  "communication": [
    {
      "language": {
        "coding": [
          {
            "system": "urn:ietf:bcp:47",
            "code": "id-ID",
            "display": "Indonesian"
          }
        ]
      },
      "preferred": true
    }
  ]
}

```

TODO: maybe share all code somewhere?

And so, the million dollar question: is this right? Is this valid FHIR? How do
we know?

That last question - how do we know its right - is so, so important.

I suppose we can ask Claude itself. Here's what Claude said:

```
Yes, this looks like a valid FHIR Patient resource. It contains all the required elements and follows the FHIR structure for a Patient resource. Let me break down some key aspects:

1. The resourceType is correctly specified as "Patient".
2. It has a valid UUID as the id.
3. The meta section includes a lastUpdated timestamp.
4. It includes identifier, name, telecom, gender, birthDate, address, contact, and communication elements, which are all valid for a Patient resource.
5. The structure of nested elements (like name, address, contact, etc.) appears correct.
6. The use of coding systems (like for relationship and language) follows FHIR conventions.

A few observations:

- The patient's name is Henrika Liboria, a female born on May 11, 1999.
- There are two identifiers provided, one for a "commcare-id" and another for "ihs".
- The patient's preferred language is Indonesian.
- Two contacts are listed: Don (father) and Anna (mother).

While this appears to be a valid FHIR Patient resource, it's always a good practice to validate it against the official FHIR schemas or using a FHIR validator tool to ensure full compliance, especially if you're using this in a production environment.
```

This is a long response, but what really impresses me is the reasoning. We don't
just have to take Claude's word for it - we can validate Claude's logic. And
rather nicely, Claude warns me not to be too trusting. This pleases my inner
skeptic (even if it is a party trick). I should note here that ChatGPT-4 also
gave an explanation - although interestingly it also returned a new data
structure which suggested improvements (including adding a new (fictional
address)).

# Nitpicking

As much as I appreciate Claude's input here, I'm not yet sold. So I went
through, key by key, and checked against the FHIR spec.

And Claude has done some good stuff. For example it's recogised that CommCare's
`date_modified` field maps to FHIRs `meta.lastUpdated` field. That's
non-trivial, and very useful! It has mapped name effectively - the CommCare data
specifies the name in multiple overlapping ways. Claude has resisted the
temptation to duplicate any of that data and has mapped to a single, correct,
`name` key (its even defaulted the `use` of the name to `official` (as opposed
to, say, `nickname`)).

It's also captured a good subtlety in names. The main patient name takes an
array of name objects. But the `contact.relationship` name only takes a single
object value, not an array. Claude has negotiated this structure correctly.

But it's not all good.

First off, Claude mapped the CommCare id to the FHIR id. It assumes that the id
from one system is the same as the id in another system. Is that reasonable? Is
it possible that this Patient already exists in the target system? Should we use
the `ihs_number` as the FHIR id? I don't know - but it's a complex nuance
totally unaddressed by Claude.

If I had written this mapping code myself, I'd have had to write a line to say
"set the FHIR id to be ?", and I like to think I'd have paused and said "wait,
what IS the FHIR id for this Patient? How do I work that out?"

The other big problem comes from Identifiers.

In FHIR, an identifier is represented as a value and a system. The system tells
me what the value represents. As a simple example you might capture a person's
height like `{ value: 1.8, system: 'metric' }`. Or, in our case, the
communication language is captured like this:

```
       {
            "system": "urn:ietf:bcp:47",
            "code": "id-ID",
            "display": "Indonesian"
          }
```

Claude got this right (well, nearly). It is saying "The preferred language id
id-ID, using the IETF BCP 47 specification". I say "nearly" because Claude seems
to have guess the preffered language. Our CommCare data certainly doesn't tell
us (not explicitly anyway). So that's interesting.

But Claude has struggled with some of these identification systems. I checked.
If you look at the `identifier` field, value `P01836748436` - which is the
patient's IHS number - has a system identifier of
`urn:oid:2.16.840.1.113883.4.3.28`. But that unique identifier actually maps to
a Mississippi Driver's License. The other identifier, the Commcare system id,
maps to a Missouri Driver's license.

So that's fun.

To be fair, I don't really know how to map these identifier's either, I can ask
an adult in the company to work it out, and I can feed the mappings explicitly
back into Claude. But there's something interesting and important here: some
lesson about the innate complexity of mapping data from unrelated systems.

What this all means is: if I ran this conversion function on all my CommCare
data - all my million records - and uploaded it to a FHIR server, all I'd
achieve is to add a bunch of junk data to the server. I would expect all patient
ids to be wrong, for some data to be duplicated and fragmented, and all
cross-referenced identifiers to be wrong (the great state of Missouri is about
to get a lot of very strange licence plates!).

And that's the thing with AI. it looks good at first glance, maybe even second.
But the deeper you probe into the results, the more problems you find.

As a final note on this, I could probably resolve these issues. I could tell
Claude the identifier mappings, I could even tell it how to lookup the record in
the target system and use it's id, or whatever we want to do. And after enough
iterations we'd get it right, I'm sure.

## Claude's Code

I'm mostly finished with my little experiment. I'm feeling quite pleased with
myself actually - I've proved that Claude isn't capable of mapping a CommCare
object to a FHIR one. Not without significant supervision and careful, in-depth
testing, anyway.

But before we move on, and before we consider how Claude CAN help me, I just
want to take a look at the code Claude generated. Because there are learnings
there, too.

Now, Claude's code is over 100 lines long, and fairly repetetive. [TODO: link to
a repo somewhere] Allow me to cherry-pick snippets and show you the pattern.

As an overview, here is what Claude generated (comments are mine):

```
function convertCommCareToFHIRPatient(commCarePatient) {
  const fhirPatient = {
    resourceType: "Patient",
    id: commCarePatient.case_id || commCarePatient.id,
    // ... more props ommitted
  }

  // add a name
  const familyName =
  commCarePatient.properties?.last_name ||
  commCarePatient.properties?.family_name;
  const givenName =
    commCarePatient.properties?.first_name ||
    commCarePatient.properties?.given_name;
  if (familyName || givenName) {
    fhirPatient.name.push({
      use: "official",
      family: familyName,
      given: givenName ? [givenName] : undefined,
    });
  }

  // maybe add other properties

  return fhirPatient;
}
```

What Claude is doing here is building an object, and conditionally assigning
values from the CommCare object onto the FHIR one.

It's an OK solution, and what I would expect from a junior developer. Just
cherry-pick the keys you want to assign. The style is overly verbose - I mean
look at that name block - and a bit heavy on ifs, which as a programming
aesthete I find inelegant. But it's fine.

But if a junior developer were to give me this code, I would have issues:

- How do we know the fhirPatient structure is correct? There are no type
  definitions and no unit tests. I suppose I could ask for both
- The solution makes a lot of assumptions about the single case we've given it.
  For example, in the name mapping, the use is always "official". FHIR supports
  many "uses" for names. What if the next CommCare record contains a `nickname`
  property? Our code is not general enough to handle it.

Oh, and by the way, for some reason Claude picks Indonesian as the default
language. I picked up on this earlier - here's the code that does it. If that's
correct, it's a way smarter insight than I could have come up with (this is a
very polite way of saying that I don't think it's correct).

```
  // Add communication (assuming Indonesian as default, adjust as needed)
  fhirPatient.communication.push({
    language: {
      coding: [
        { system: "urn:ietf:bcp:47", code: "id-ID", display: "Indonesian" },
      ],
    },
    preferred: true,
  });
```

The comment here was actually added by Claude, and I do appreciate that it has
surfaced its biases and assumptions.

## A case for build-time AI

_TODO this needs mentioning at the top, in the intro_, but this is a great time
to bring it in here

All of this surfaces something really important, something core to OpenFn's
approach to AI.

We see AI as a design-time or build-time tool. A human may use AI as part of
their workflow to build systems and services, which should be carefully tested.

Anything generated by AI - whether it's code or data - must be tested out
offline by a human. It cannot go into production code without scrutiny.

To allow an AI to generate and execute code at Runtime, to allow on-the-fly
integrations driven by nothing more than a prompt, is possible. Absolutely
possible. The code generated by these models is good enough for that (and will
continue to improve). But allowing this would be grossly irresponsible.

We cannot, and will not, allow an AI to read, transform and upload real human
data across systems without human intervention and scrutiny first.

-

Anyway, what we want to do here is convert this object into a FHIR patient.

We'll start by converting this specific datum into FHIR, but soon we'll need to
find a more general solution - we'll need to write code that can convert all
Commcare objects (which look a bit like this, but are not identical) into FHIR
patients.

A Commcare case

One thing I note is that the generated data gets the system field wrong.

To be fair, I don't really know how to do that either. So I'll ask an adult in
the company to work out how we might do that mapping, and I can feed that
informatiion back into Claude.

But there's something interesting an important here. Some mappings are
non-trivial.
