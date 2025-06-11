---
layout: post
title: 'Forms and Cases: CommCare and event-based integration'
authors: taylor
tags: [how-to, tips]
featured: true
---

This is a quick one, but I just got off an exciting call with an organization
that's going to set up some jobs to move data into Salesforce from CommCare and
realized that despite this being one of our more common integration
requirements, we haven't done a 'tips' article for this type of project. Until
now.

<!--truncate-->

So here goes. While this is by no means an exhaustive project planning template,
here are a few things to keep in mind if you're planning to implement a CommCare
to Salesforce integration on your own.

## Most people use "Data Forwarding" in CommCare

First, most people make use of CommCare's "Data Forwarding" feature to send form
submissions and changes in cases (creation, update, closure, etc.) to OpenFn in
real-time. You can read about that
[here](/adaptors/commcare#webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service)
but the key consideration at this planning stage is _when_ you'll be performing
operations—`create(...)`, `update(...)`, `upsert(...)`, `query(...)`,
`(bulk(...)`, etc.—in Salesforce and what data you'll have access to.

Each time a form submission comes into CommCare, we'll get a copy of that
submission at OpenFn and can use that data to create or modify some records in
Salesforce.

Likewise, each time a case gets updated (or created or closed) we'll get a copy
of the case with all the case "properties" and we can use that data to _do some
stuff_ in Salesforce.

If you are using "Form Forwarding", the `trigger` you'd create in OpenFn might
look like this `{"form":{"@name":"ART Adherence Self-Reporting Tool"}}` and it
would trigger your `job` any time an "ART Adherence Self-Reporting Tool"
submission arrived from CommCare, giving that job access to all of the data
inside that submission.

## Working with the data that comes from CommCare

Assuming you're using making use of case management, the data that arrives from
CommCare will look something like this:

```json
{
  "__query_params": {
    "app_id": "some-long-id"
  },
  "app_id": "some-long-id",
  "archived": false,
  "attachments": {
    "1621866020043.jpg": {
      "content_type": "image/jpeg",
      "length": 16423,
      "url": "https://www.commcarehq.org/a/your-project/api/form/attachment/some-uuid/1621866020043.jpg"
    },
    "form.xml": {
      "content_type": "text/xml",
      "length": 2727,
      "url": "https://www.commcarehq.org/a/your-project/api/form/attachment/some-uuid/form.xml"
    }
  },
  "build_id": "0ec83881cd0e420dad5c24ed3a5452fe",
  "domain": "your-project",
  "edited_by_user_id": null,
  "edited_on": null,
  "form": {
    "#type": "data",
    "@name": "ART Adherence Self-Reporting Tool",
    "@uiVersion": "1",
    "@version": "2783",
    "@xmlns": "http://openrosa.org/formdesigner/59E1207B-969F-402D-9EEE-675504036F78",
    "administrative": {
      "coach_verification": "check_here",
      "visit_notes": "",
      "vist_notes_to_save": ""
    },
    "case": {
      "@case_id": "1ec51ee9-5aef-4bd2-b7eb-7599856251bc",
      "@date_modified": "2021-05-24T14:20:28.693000Z",
      "@user_id": "332e893dcd1b413686621bd80aae0cd3",
      "@xmlns": "http://commcarehq.org/case/transaction/v2",
      "update": {
        "consent_received": "yes",
        "home_visit_notes": ""
      }
    },
    "meta": {
      "@xmlns": "http://openrosa.org/jr/xforms",
      "appVersion": "CommCare Android, version \"2.51.2\"(463994). App v2798. CommCare Version 2.51.2. Build 463994, built on: 2021-03-17",
      "app_build_version": 2798,
      "commcare_version": "2.51.2",
      "deviceID": "commcare_a39f55a5-c744-4e33-8e01-d17e7698894f",
      "drift": "0",
      "geo_point": null,
      "instanceID": "130c68c5-7d17-4086-8a85-27d7d7da2216",
      "timeEnd": "2021-05-24T14:20:28.693000Z",
      "timeStart": "2021-05-24T14:18:46.856000Z",
      "userID": "332e893dcd1b413686621bd80aae0cd3",
      "username": "some-chw"
    },
    "participant_information": {
      "participant_id": "007",
      "name": "taylor downs",
      "gender": "male",
      "guardian_information": {
        "guardians_name": "Fake Data",
        "guardians_phone_number": "8675309",
        "guardians_signature": "1621866020043.jpg",
        "relationship_to_participant": "father"
      },
      "current_medications": [
        { "name": "generic-1", "active": true },
        { "name": "fakelyn-notrealiol", "active": false },
        { "name": "sasstra-zenica", "active": false },
        { "name": "ibuprofen", "active": true }
      ]
    },
    "tested_for_hiv_status_tested_for_hiv": "OK",
    "visit_information": {
      "consent_given": "yes",
      "date_consent_given": "2021-05-23",
      "visit_date": "2021-05-23"
    }
  },
  "id": "130c68c5-7d17-4086-8a85-27d7d7da2216",
  "indexed_on": "2021-05-24T14:20:39.045971",
  "initial_processing_complete": true,
  "is_phone_submission": true,
  "metadata": {
    "appVersion": "CommCare Android, version \"2.51.2\"(463994). App v2798. CommCare Version 2.51.2. Build 463994, built on: 2021-03-17",
    "app_build_version": 2798,
    "commcare_version": "2.51.2",
    "deviceID": "commcare_a39f55a5-c744-4e33-8e01-d17e7698894f",
    "drift": "0",
    "geo_point": null,
    "instanceID": "130c68c5-7d17-4086-8a85-27d7d7da2216",
    "location": null,
    "timeEnd": "2021-05-24T14:20:28.693000Z",
    "timeStart": "2021-05-24T14:18:46.856000Z",
    "userID": "332e893dcd1b413686621bd80aae0cd3",
    "username": "some-chw"
  },
  "problem": null,
  "received_on": "2021-05-24T14:20:37.976363Z",
  "resource_uri": "",
  "server_modified_on": "2021-05-24T14:20:38.111789Z",
  "type": "data",
  "uiversion": "1",
  "version": "2783"
}
```

This is a big blob of `JSON`—the body of the message that's received at OpenFn
when this particular form ("ART Adherence Self-Reporting Tool") is submitted in
CommCare—will be handed off to the job to start processing. The question is,
what should we do?

When setting up for a self-service implementation on OpenFn, the most important
thing you can do at this moment is carefully enumerate the data entry process
that you'd like a real human to follow. You can translate it to a job script
later.

You'll need to write this up for your own case, but in this fictional example,
here's the data entry process.

## The instructions for our worker

:::tip

Right from the start, notice that we're being incredibly explicit with these
instructions! We're using the "API Name" (instead of just the "label", which
might be ambiguous) of every field we want filled out in Salesforce and we're
using the specific "path" to the data we want this person to enter from
CommCare.

**Why are we being so specific?** Because eventually, a computer will need to
interpret this—and they're _terrible_ with ambiguity!

:::

1. Every time a messaged is received with
   `{"form":{"@name":"ART Adherence Self-Reporting Tool"}}` in the body (this is
   our trigger)
2. Log into Salesforce and create a new participant with the `participant_id`
   you find in the `form.participant_information` section as their
   `Participant_Code__c`. (If one already exists in Salesforce with that code,
   then update the existing record instead.)
3. Fill out the following fields in Salesforce based on the CommCare data in
   this message:
   - `Name__c` with the data from `form.participant_information.name`
   - `Sex__c` with the data from `form.participant_information.gender`
   - `CommCare_Case_ID__c` with the data from `form.case.@case_id`
4. After you've created (or updated) this participant in Salesforce, create a
   record of the visit with the `instanceID` from the `metadata` section as the
   unique identifier `Visit_Code__c`. (Again, if there's already a visit with
   that ID please update the existing record.)
5. Fill out the following fields for the visit with data from CommCare"
   - `Date__c` with `form.visit_information.visit_date`.
   - `Consented__c` with `form.visit_information.consent_given`.
   - Always set `Test_Status__c` to `true`, regardless of what's in the message
     from CommCare.
   - And relate this record with the `Community_Health_Worker` by their username
     in `form.metadata.username`.
6. Finally, add a record for each medication listed in the
   `form.participant_information.current_medications` array—matching on a unique
   ID formed by a combination of the medication `name` and the `participant_id`
   so that we can update existing medication records if they're present.
7. Fill out the following fields for the medication:
   - `Generic_Name__c` with `name`
   - `Status__c` with `active`
   - And relate this record with the participant you created or updated in step
     2 via the `participant_id` field.

Phew... that's the task. It's just a fictional example and things could be much
more straightforward, or much more complicated than this, but it's important to
remember that if you can get to this level of **precision and granularity** in
your data entry process, a tool like OpenFn can automate this for you in a
flash.

## Translating this into an OpenFn project

If you're streaming data in from CommCare and you've got your Salesforce system
all set up so that this data entry person can complete the above steps (are all
the objects and fields created? are the right fields marked as "unique" and set
to be used as an "external id" in the Salesforce administration section? have
you turned on data forwarding in CommCare?) then it's time to turn them into an
OpenFn project!

:::tip

A quick plug: **Did you know that there's an
[OpenFn community forum](https://community.openfn.org)** where you can post
stuff like the "steps" above and get help from other OpenFn users and staff
converting these steps into a real, working, OpenFn job?

Well, you do know! Check it out at
[community.openfn.org](https://community.openfn.org)

:::

### Create a Salesforce credential

We don't need a CommCare credential, since they'll send data to us. Create a
Salesforce credential that will allow the OpenFn worker to log into your
Salesforce system.

Read more about credentials [here](/documentation/build/credentials).

### Create a message-filter trigger

- Select `Message Filter` for the `type`
- Enter `{"form":{"@name":"ART Adherence Self-Reporting Tool"}}` for the
  `inclusion criteria`

Read more about triggers [here](/documentation/build/triggers).

### Create the job

- Give it a name
- Select the trigger you just created
- Select the `salesforce` adaptor
- Select the credential you just created

And convert the instructions above to "operations" by using the inline help
provided by the Salesforce adaptor:

```js
// Use upsert to create or update a participant based on their participant code.
upsert(
  'Participant__c',
  'Participant_Code__c',
  fields(
    field(
      'Participant_Code__c',
      dataValue('form.participant_information.participant_id')
    ),
    field('Name__c', dataValue('form.participant_information.name')),
    field('Sex__c', dataValue('form.participant_information.gender')),
    field('CommCare_Case_ID__c', dataValue('form.case[@case_id]'))
  )
);

// Then upsert a visit using the visit code.
upsert(
  'Visit__c',
  'Visit_Code__c',
  fields(
    field('Visit_Code__c', dataValue('metadata.instanceID')),
    field('Date__c', dataValue('form.visit_information.visit_date')),
    field('Consented__c', dataValue('form.visit_information.consent_given')),
    // Always set status to true
    field('Test_Status__c', true),
    // And related this visit to the participant we just created by their "code"
    relationship(
      'Participant__r',
      'Participant_Code__c',
      dataValue('form.participant_information.participant_id')
    )
  )
);

// And finally for EACH mediation listed, create a medication record with a status
each(
  merge(
    dataPath('form.participant_information.current_medications[*]'),
    fields(
      field('pID', dataValue('form.participant_information.participant_id'))
    )
  ),
  upsert(
    'Medication_Tx__c',
    'Medication_Tx_ID__c',
    fields(
      field(Medication_Tx_ID__c, state => {
        // Here, inside the medications array we've "scoped" state so that
        // state.data, for each item in the array, looks like this:
        // { pID: 007, name: "sasstra-zenica", active: false }

        // We will concatenate the participant ID with the medication name.
        return state.data.pID + state.data.name;
      }),
      field('Generic_Name__c', dataValue('name')),
      field('Status__c', dataValue('status')),
      relationship('Participant__r', 'Participant_Code__c', dataValue('pID'))
    )
  )
);
```

Now, every time this job runs (which is every time a CommCare form is submitted)
your OpenFn worker will upsert a `Participant`, upsert a `Visit`, and upsert a
whole list of `Medications` in Salesforce.

## What's next

Well, in our little example you'd turn the job "on" (setting it to on the
inbound messages from CommCare) and let it run. Whenever there was a failure
(maybe your Salesforce admin added a new required field on the
custom`Medication` object) you'd get an email and you'd have to come back to
OpenFn to update your job, including that new field.

If you're in the process of designing your CommCare and Salesforce systems at
the moment, this back-and-forth will be pretty common. Keep in mind that you
want as much simplicity as possible in those end-user systems because... well
because _humans_ have the interact with them every day!

So long as your processes are well defined, OpenFn can handle a bit of
complexity (data cleaning, transformation, complex logical flows, etc.) but you
should never make sacrifices to the user experience in CommCare and
Salesforce—that's a quick way to lose adoption.

So, ideally, you've designed your workflows in CommCare and Salesforce to make
your users happy and get them the information they need to do their jobs well
and _then_ you come back to OpenFn and spell out our data entry instructions
like we've done above.

## A final thought

The two most important resources you've got at your disposal if you're setting
this all up on your own are:

1. this site (docs.openfn.org), and
2. the [forum](https://community.openfn.org) (community.openfn.org)

Read through the
["What is an integration"](/documentation/tutorials/tutorial),
["OpenFn Concepts"](/documentation/get-started/terminology), and
["Build"](/documentation/build/workflows) sections if you're a thorough,
background-first kind of learner. If you crave snippets and sample job code,
head directly to the [Job Library](/adaptors/library) to see how other OpenFn
users are creating their jobs.

Either way, keep the community posted on your progress in the forum—you'll find
lots of helpful folks willing to lend you a hand in your integration journey.
