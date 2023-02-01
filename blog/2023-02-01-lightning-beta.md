---
title: OpenFn Lightning Beta
author: Amber Rignell
author_url: https://github.com/amberrignell
author_image_url: https://avatars.githubusercontent.com/amberrignell
featured: true
---

## We’re just (soft) launched the next generation of OpenFn automation tooling - OpenFn Lightning!

It’s been a wild year and we’re excited to announce the next generation of
OpenFn’s digital public good for workflow automation: OpenFn Lightning.

Lightning represents our commitment to open source and the DPG community. It is
a fully open source web application designed for governments and NGOs who need a
flexible solution to integrate and connect any system. It reuses our existing
tried and tested technology whilst lowering the technical barrier to building
robust workflow automation solutions and integrations through a more intuitive,
user-friendly UI.

Note that at the time of writing, Lightning is still in beta and has some rough
edges. 95% of OpenFn users are still building workflow solutions on the v1
(available at openfn.org/signup) but we’ll be ready for a full migration later
this year.

_Read more about Lightning on our [docs page](documentation/about-lightning)._

## Register for an account and share your feedback

You can register for a free account at
[app.openfn.org](https://app.openfn.org/users/register). Please help us out by
carrying out our [user test](/blog#take-10-minutes-to-carry-out-our-user-test)
or adding your questions and comments to the Lightning thread on our community
forum [ADD LINK].

## Follow our quick start guide

Follow our
[quick start documentation](documentation/build/lightning-quick-start) to get
familiar with the basics of OpenFn Lightning.

## Take 10 minutes to carry out our user test

Please record your screen ([Loom](https://www.loom.com/looms) is good and free)
and share your feedback out loud while you go through the instructions below.
Send the recording to our product manager Amber at amber@openfn.org.

•Note: the recording will only be used internally. If you wish for it to be
deleted once viewed please state so in the email.

**_Please record yourself while working through the following tasks:_**

1. Register / Login on [app.openfn.org](https://app.openfn.org/users/register)

- What are your first impressions ?
- Can you tell what this app can be used for ?
- What are the first questions that come to mind ?

2. View the ‘sample workflow’ and talk through what it is doing

- When does it run ?
- What systems is it connecting ?
- What data is being sent ?
- What is an adaptor ?
- What is a job?

3. Click on the first job ‘Check if age over 18’ and head to the input tab.

Run the job with the following custom input:

```json
{
  "data": {
    "age_in_months": 19,
    "name": "Wycliffe Gigiwe"
  }
}
```

- Can you see the output?
- How did “state” change?

Now, run the job with a patient that is under 18 months:

```json
{
  "data": {
    "age_in_months": 6,
    "name": "Sarah Alice"
  }
}
```

- Did the job succeed? Why not?

4. View the runs

- What does each row represent?
- Find the last failed run - why did it fail ?
- Can you rerun it ?

5. [Bonus] Create a new workflow that gets data from DHIS2 every week and

- Create a new workflow called "Get DHIS2 data"
- Create a job which will run every hour
- Select the DHIS2 adaptor
- Create a 'DHIS2 play' credential (url:https://play.dhis2.org/2.38.2.1,
  username: district, pw: admin)
- From the adaptor documentation below the editor, select the operation which
  gets tracked entity instance from DHIS2.
- Run the job manually with an empty input: `{}`
