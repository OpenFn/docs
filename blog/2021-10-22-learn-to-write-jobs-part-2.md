---
layout: post
title: 'Learn to write jobs - part 2'
author: Elias W. BA
author_url: https://github.com/elias-ba
author_image_url: https://avatars.githubusercontent.com/elias-ba
tags: [tips, jobs, core, adaptors, tutorial]
image: /img/automate.jpg
featured: false
---

So you have finished reading part 1 and you have found jobs very cool and fun ?
In this part 2 (the final one of this series) of our tutorial we'll dig a little
bit deeper in jobs. We'll build a more interesting job using the adaptors
[language-http](https://github.com/openfn/language-http) and
[language-dhis2](https://github.com/openfn/language-dhis2).

<!--truncate-->

![automate](/img/automate.jpg)

## Introduction

that consist of taking data from
[JSON Placeholder](https://jsonplaceholder.typicode.com/), process in `fn`
blocks (your remember ?) and use that data to create TEIs in
[DHIS2](https://dhis2.org).

## Definitions

Before going any further, let's talk a little bit about the technologies we'll
be using in this tutorial.

- JSON Placeholder

[JSON Placeholder](https://jsonplaceholder.typicode.com/) is a free online REST
API that allows to have endpoints that serves fake data which is very useful for
our case. We'll use it to fetch fake users and demonstrate the utility of the
`language-http` adaptor.

- DHIS2

The District Health Information Software (DHIS) is used in more than 60
countries around the world. DHIS is an open source software platform for
reporting, analysis and dissemination of data for all health programs, developed
by the Health Information Systems Programme (HISP). Learn more about DHIS
[here](https://en.wikipedia.org/wiki/DHIS).

In our case it is the system that we'll be using to save the users data we
fetched from JSON Placeholder into programs in [DHIS 2](https://play.dhis2.org/)

## Layout project

In this tutorial, we'll mainly build two jobs.

- The first one will be responsible of fetching the data from `/users` endpoint
  in JSON Placeholder. It'll use the `get` helper function of the
  `language-http` adaptor.
- The second one will process that data and create TEIs in DHIS 2 in a program
  named `IpHINAT79UW`. It'll use the `createTEI` helper function of the
  `language-dhis2` adaptor.

To achieve that we'll be following this project layout. We'll have a project
root folder named `write-openfn-jobs`. Inside of that folder we'll have 4
subfolders named adaptors, outputs, expressions and states.

- In adaptors, we'll clone our two adaptors (which are `language-http` and
  `language-dhis2`) and build them as NPM packages.
- In outputs, we'll save the generated outputs (`output1.json` and
  `output2.json`) of our expressions. In this tutorial we'll demonstrate a very
  common pattern in job writing which is taking the output of a job expression
  as the state of another job expression.
- In expressions we'll have two files named `getData.js` and `createTEIs.js`
  which will hold the code of our two main jobs.
- In states, we'll create two files named `state1.json` and `state2.json` which
  correspond to the two states of our two job expressions.

For that, you can just open a terminal session, and paste there this snippet of
code.

```bash
cd ~
mkdir -p openfn-jobs/{adaptors,expressions,outputs,states}
cd openfn-jobs
ls
```

After executing this command, if you see, something similar to this:

```bash
adaptors expressions outputs states
```

then you've successfully created a working project layout.

NB: Note that, this kind of organization of our project folder structure is not
mandatory and if you're feeling like doing it in another style, then you should
do that. The most important here is to remember where each file is stored and
pass the right path to core when we're executing our job expressions.

## Clone and build the adaptors

Assuming that we're still in our root project folder, we'll now move to the
`adaptors` subfolder by executing this command `cd adaptors`. Now let's clone
our adaptors inside this folder. Remember we're working with
[language-http](https://github.com/openfn/language-http) and
[language-dhis2](https://github.com/openfn/language-dhis2). To do that paste
this snippet of bash code in your terminal session:

```bash
# For language-http
git clone https://github.com/OpenFn/language-http.git
cd language-http
npm ci && npm run build

cd .. # go back to the adaptors folder

# For language-dhis2
git clone https://github.com/OpenFn/language-dhis2.git
cd language-dhis2
npm ci && npm run build

cd ../.. # go back to root project folder
```

If there's no error encountered, then you've now all the environment needed to
start writing the job expressions, else please make sure you've not missed one
step.

## Building the jobs

Now that we've set a working environment, let's start writing our jobs. Here are
the steps that we'll take to achieve that.

1. get data from https://jsonplaceholder.typicode.com/users and save them in
   state. This will be in our expressions/getData.js file.
2. process the data and create TEI objects to save in the `IpHINAT79UW` program
   of our [DHIS 2 platform](https://play.dhis2.org/2.36.4)

For a better coding experience, I recommend you open our project folder in your
favorite code editor / IDE. In my case it's
[VSCode](https://code.visualstudio.com/).

Ready ? Let's go !

### 1. Get data from JSON Placeholder

Okay, now let's create our expression file using this command in our terminal:

```bash
touch expressions/getData.js
```

After that, open the `getData.js` in edition mode (in VSCode you can hit
`ctrl/cmd + P`, write getData.js and hit ENTER) and paste the following snippet
of code.

```javascript
get(
  'https://jsonplaceholder.typicode.com/users',
  {
    headers: { 'content-type': 'application/json' },
  },
  state => {
    return state;
  }
);
```

Save your file and TADAAA :tada: that's all for our first job expression. We're
using the `get` helper function of the `language-http` adaptor to fetch all the
/users data and set it in our `state`.

Now as far as `core` (our compiler) takes an initial state as input to run our
expression, we'll create one. That state object will have no configuration cause
the JSON Placeholder API doesn't require authentification. To create the state,
we'll create a file named `state1.json` inside our states folder. To do that,
paste this snippet of code in your termina and run it.

```bash
touch states/state1.json
```

then open `states/state1.json` in your editor and put the following code in it
and save the file.

```json
{
  "configuration": {},
  "data": {}
}
```

We can execute our first job expression by opening our terminal and pasting this
code. Remember, we're using `core` as a globally installed NPM package (see part
1 for more)

```bash
core execute -l ./adaptors/language-http -e expressions/getData.js -s states/state1.json -o outputs/output1.json
```

If this command is successful, it'll create a file named `output1.json` file
inside `outputs` folder. That file has the results of our first job expressions
which is the HTTP Response of the endpoint. If you open that file you'll see
something similar to this:

```json
{
  "references": [{}],
  "data": [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ],
  "configuration": {}
  // ... huge remaining part ...
}
```

:warning: I haven't displayed the whole file here, cause it's very very long and
most of it just informations related to the HTTP query.

:tada: Coool, now we successfuly have a job expression that can fetch data in a
HTTP API endpoint for us. In the following section we'll see how to process that
and create TEIs in our DHIS 2 playground. :smile:

### Process the data

Okay, in this section what we wanna do is to create TEIs in DHIS 2 using our
users objects retrieved from JSON Placeholder. To do that let's first of all
compare a TEI object and a user object.

- Here is a user object as we get them from JSON Placeholder

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

- And here is a sample TEI object as DHIS 2 may want them to be formatted

```json
{
  "orgUnit": "DiszpKrYNg8",
  "trackedEntityType": "nEenWmSyUEp",
  "attributes": [
    { "attribute": "zDhUuAYrxNC", "value": "Elias" },
    { "attribute": "w75KJ2mc4zz", "value": "BA" }
  ],
  "enrollments": [
    {
      "orgUnit": "DiszpKrYNg8",
      "program": "uy2gU8kT1jF",
      "programState": "oRySG82BKE6", // active
      "enrollmentDate": "10/10/2021",
      "incidentDate": "10/10/2021"
    }
  ]
}
```

We can notice from this little comparison that we can construct the `attributes`
array of the TEIs from our users objects attributes like name, phone, etc. We'll
also generate `enrollmentDate` and `incidentDate`.

ℹ️ This is usually what is called as mapping in OpenFN Job's terminologies. The
mapping is nothing but the set of rules that tell us how we should transform
data from Source A (JSON Placeholder) to Source B (DHIS 2).

Okay, now let's write the job expressions to do that. First of all we need to
create the expression file. Assuming you're in the project root folder, paste
the below bash code in your terminal:

```bash
touch expressions/createTEIs.js
```

Then, open `createTEIs.js` in your code editor and paste this following code in
it.

```javascript
fn(state => {
  const teis = state.data.map(user => {
    const firstName = user.name.split(' ').slice(0, -1).join(' ');
    const lastName = user.name.split(' ').slice(-1).join(' ');
    const currentDate = Date.now();
    return {
      orgUnit: 'g8upMTyEZGZ',
      trackedEntityType: 'nEenWmSyUEp',
      attributes: [
        { attribute: 'w75KJ2mc4zz', value: firstName },
        { attribute: 'zDhUuAYrxNC', value: lastName },
      ],
      enrollments: [
        {
          orgUnit: 'g8upMTyEZGZ',
          program: 'IpHINAT79UW',
          enrollmentDate: currentDate,
          incidentDate: currentDate,
        },
      ],
    };
  });
  return { ...state, teis };
});
```

In the code above we constructed a TEI object using some attributes like the
`first name` and the `last name` of the users we previously got from JSON
Placeholder. This is a very common pattern that we usually do in jobs. We
already talked about it, it's called the mapping and it's the key components of
an integration workflow.

### Create the TEIs in DHIS2

Now that we've prepared TEIs object, let's persist them in DHIS 2 using the
`createTEI` helper function coming from the `language-dhis2` adaptor. That
function takes as input a TEI object and creates it in DHIS 2 using the
configuration we specified in the `state` file.

To do that, add the following code in the `createTEIs.js` expression file.

```javascript
fn(state => {
  for (let tei of state.teis) {
    createTEI(tei);
  }
  return state;
});
```

What we're doing is that we looping over all the TEIs we prepared and stored in
the state and pass each one of them to the `createTEI` helper function to create
it.

And, yes, that's all for our second expression file (`createTEIs.js`). Now we're
able to create all the TEIs in our DHIS 2 playground.

## Conclusion

In this part 2 we've seen a fully working real world example of a job that uses
two adaptors (`language-http` and `language-dhis2`). Our job that has 2
expression files simulates a real world example where we get some data from a
source A, transform them and send them to a source B. In complex job scenarios
(we usually use BPMN diagrams to represent them) the transformations can be
longer than what we showed here, but the idea is the same.

I hope that this tutorial we'll help you now, know a little bit more about jobs
and how to create them using devtools. It's very important to mention that even
though it's very usefull to build and run jobs locally, sometimes it can be much
more handy to run jobs directly in [OpenFN Platform](https://www.openfn.org/how)
too. If you want to know how to achieve that,
[this wonderful video](https://www.youtube.com/watch?v=e2V88NoLQco) of
[Aleksa](https://twitter.com/aleksa_krolls) will be very helpful.

You can find all the code of part 1 and part 2 of this tutorial in this
[Github repository](https://github.com/elias-ba/write-openfn-jobs).
