---
title:
  Walk-through - Syncing your CommCare form submissions to a PostgreSQL database
---

**Before starting this tutorial please make sure:**

- You have signed up for [OpenFn.org](http://openfn.org) (it takes less than a
  minute!)
- You have checked out our glossary and have an understanding of basic OpenFn
  and API terminology. Check out the pages below to get started
  - [OpenFn Concepts](/documentation/legacy/getting-started/terminology)
  - [A glossary for data integration](/documentation/legacy/getting-started/glossary)
- You have a CommCare application with at least one form configured. This is
  your source system.
- You have a PostgreSQL database configured. This is your destination system.

**If you don’t have a CommCare application or PostgreSQL database setup, you can
also follow along with the prebuilt solution. Follow along at the links below:**

1. [Mapping specifications document](https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing)
2. Commcare application to download:
   - Username: testuser
   - Password: 123

![install_cc_app](/img/install_cc_app.png)

3. [OpenFn project](https://www.openfn.org/projects/commcare-demo/jobs)
4. [Public report that shows records in the PostgreSQL database](https://analytics.openfn.org/public/question/095449a9-5696-463c-a4fb-24614c9f08a5)

## Getting started

In this walkthrough, we will be setting up an **automatic data sync between
CommCare and a PostgreSQL database**. We will be syncing submissions coming from
a CommCare `Maternal and Newborn Health` application that has a
`Register a New Patient` form.

:::tip

Whenever a CommCare user registers a new patient, the patient details will
automatically be synced to an already configured PostgreSQL database to enable
real-time monitoring and analytics on data collected in the field. For example,
this database can quickly be connected to a dashboard that collects aggregate
data on patients registered!

:::

![cc-postgres](/img/cc-postgres.png)

**This integration can be broken up into two parts:**

1. Getting data from your source system to your OpenFn inbox so you can inspect
   the data structure to inform the job design for part two
2. Transforming and loading this data to your destination system

… let’s get started!

## Getting data from CommCare

**There are two ways to get your CommCare form submissions in your OpenFn inbox
to inspect the data, and to later map it to your destination system.**

### Option 1: Webhook to forward cases and/or forms in real-time from CommCare to OpenFn using REST service

CommCareHQ has a native data forwarding feature that provides a webhook/REST
service that can be pointed to the destination of your choice (i.e., your OpenFn
Inbox). When a webhook is configured, any Commcare forms submitted are
**_automatically forwarded_** to the designated endpoint, such as your OpenFn
inbox. After data forwarding is set up, it happens automatically, **_in
real-time for all forms and cases_**. Learn more about configuring a webhook
[here](/adaptors/commcare#webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service).

![option1](/img/option1.png)

### Option 2: Extracting Commcare data via the REST API

CommCare provides a robust
[REST API](https://confluence.dimagi.com/display/commcarepublic/List+Forms) for
extracting and loading data. This second option involves configuring a job in
OpenFn to fetch CommCare submissions via a `GET` HTTP request with parameters to
filter your data query. Follow along for how to set this job up!

1. **Create a new project space, or open up an existing one where you have Admin
   access.**

![create_new_project](/img/Create_new_project.gif)

2. **Create a new “Cron” trigger to schedule this extract job. Consider how
   frequently you want this job to run. Daily? Weekly? Every 1 hour?**

![create_trigger_cc](/img/create_trigger_cc.gif)

3. **Create a “Raw JSON” credential to input the authentication details for your
   CommCare source application.**

![add_new_cred](/img/add_new_cred.gif)

In the credential `JSON Configuration`, add your credential as follows:

```json
{
  "appId": "APPID",
  "password": "PASSWORD",
  "username": "USERNAME",
  "applicationName": "APP NAME",
  "hostUrl": "https://www.CommCarehq.org",
  "openfnInboxUrl": "INBOXURL"
}
```

:::tip

Check out [this](/documentation/legacy/getting-started/terminology#inbox) docs page on
how to find your OpenFn inbox URL to fill in the configuration above.

:::

Now that you've configured the job Trigger and Credential to authenticate…

1. **Configure a new job. Note that this job will use the HTTP adaptor in order
   to connect with the CommCare REST API.**

![configure_job_cc](/img/configure_job_cc.gif)

5. **Writing the “FETCH” job expression:** You will want to write a job
   expression that sends a `GET` HTTP request to CommCare’s List Forms API.

   `GET /https://www.CommCarecommcarehq.org/a/cc-demo-2/api/v0.5/form`

   We have included the code snippet for replicating this job below. Please
   check out the
   [CommCare API docs](https://confluence.dimagi.com/display/commcarepublic/List+Forms)
   on how to adjust the request query parameters.

```js
get(
  'https://www.CommCarehq.org/a/cc-demo-2/api/v0.5/form/',
  {
    query: {
      //see API docs to adjust query parameters
      limit: 1000, //max limit: 1000
      offset:
        state.meta && state.meta.next
          ? state.meta.limit + state.meta.offset
          : 0,
      received_on_start: '2022-02-16',
      received_on_end: '2022-02-18',
      xmlns:
        'http://openrosa.org/formdesigner/D771417E-354E-4906-A686-DF0BA230F16A',
    },
  },
  state => {
    //After the CommCare API responds to our GET request, we want to POST the data in the response to our OpenFn Inbox for further inspection
    const { meta, objects } = state.data;
    const { openfnInboxUrl } = state.configuration;
    const forms = objects;

    state.configuration = { baseUrl: 'https://www.openfn.org' };
    console.log('Posting form submissions to OpenFn Inbox...');

    return each(forms, state => {
      return post(`/inbox/${openfnInboxUrl}`, { body: state.data }, state => ({
        ...state,
        data: {},
        references: [],
      }))(state);
    })(state);
  }
);
```

6. **Once you are finished configuring and writing your job, save and run it!**

7. **Check out the `Activity History` tab to see if your run succeeded.** If it
   succeeded, you should see:
   - Successful run log (look for the green!)
   - New Messages in your `Inbox` containing data for any forms submitted in the
     time frame specified in your query.

![activity_history_cc](/img/activity_history_cc.png)

:::info

**What do do if your run fails:**

1. Open the run to inspect the error message
2. Adjust the job to issue and re-run the transaction as needed by clicking the
   play button in `Activity History`
3. Check out the [PostgreSQL common errors](/adaptors/postgresql/#common-errors)
   page for more details!

:::

**If you want to replicate this setup and configure your own CommCare
integration, first consider your CommCare extraction options - remember that
there are 2:**

1. Data forwarding webhook (native CommCare feature)
2. REST API (List Forms API - **_API access requires a paid CommCare plan_**)

   The main advantage of using the webhook is that your data is forwarded to the
   destination system in real-time. However, the List Forms API is also
   advantageous because it enables users to extract data in bulk on a scheduled
   basis, for syncing historical data every month on the 30th, for example.
   Deciding on which option to go with depends on your business requirements.

## Transforming and loading CommCare data to a PostgreSQL database

1. **You should have a database configured and a username provided for OpenFn to
   read and write data in your target DB tables.** For this demo, we have
   configured the database
   [like this](https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing)
   to capture the CommCare form data. Check out the
   [design quickstart](../design/design-quickstart.md#3-map-data-elements-to-be-exchanged)
   for how to create your own `mapping specification document` to map data
   elements to be exchanged.

![db_config](/img/db_config.png)

1. **Create a new message filter trigger, to run our second job for every new
   patient record received in the OpenFn inbox.** Learn more about message
   filter triggers
   [here](../build/triggers.md#message-filter-triggers).

![create_new_trgger_db](/img/create_new_trgger_db.gif)

1. **Create a PostgreSQL credential which will be used by the job to
   authenticate with the database.**

![add_credential_postgres](/img/add_credential_postgres.gif)

4. **Create a new job with the `postgresql` adaptor for loading the CommCare
   data into your destination database.**

![configure_job_postgres](/img/configure_job_postgres.gif)

**Writing the job:** For this job we will use the upsert operation to
insert/update records in the destination `patient` table and use `patient_id` as
the primary key. An `upsert` will update an existing row if a specified value
already exists in a table, and insert a new row if the specified value doesn't
already exist.

```js
upsert('patient', 'ON CONSTRAINT patient_pk', {
  patient_id: dataValue('data.patient_name'),
  patient_name: dataValue('data.patient_name'),
  village_name: dataValue('data.village_name'),
  last_menstrual_period: dataValue('data.last_menstrual_period'),
  expected_delivery_date: dataValue('data.expected_delivery_date'),
  children_alive: dataValue('data.children_alive'),
  living_children: dataValue('data.living_children'),
  feeling_sick: dataValue('data.feeling_sick'),
  total_children: dataValue('data.Total_children'),
  risk_level: dataValue('data.Risk_level'),
});
```

Feel free to modify the code above to reflect your CommCare and database
configuration according to your mapping specifications. Check out this
[page](../jobs/job-studio.md#job-studio-features) for how to copy the
dataValue for source data fields in the OpenFn job studio.

:::tip

Check out the
[design quickstart](../design/design-quickstart.md#3-map-data-elements-to-be-exchanged)
for how to create your own `mapping specification document` to map data elements
to be exchanged.

:::

1. **Save and turn on the job**

![save_db_job](/img/save_db_job.gif)

## Time to test!

1. Submit a form in CommCare
2. If you have enabled data forwarding, refresh your OpenFn inbox
3. If you have not enabled data forwarding and set up a FETCH job instead, run
   the job (ensure the `received_on_start` and `received_on_start` dates in the
   FETCH are appropriate).
4. Run the FETCH job–if the fetch job passes, the “Load to DB” job should
   automatically run
5. Check out the `Activity History` and ensure that both runs passed (look for
   the green checks in the `Status/Action` column).

![activity_history_final](/img/activity_history_final.png)

6. **Finally, refresh your database and check out the new submission data!**

![metabase](/img/metabase.png)

While this guide is specifically for PostgreSQL databases, you can generally
follow these same steps for other database types (e.g., MS SQL or MySQL)—simply
leverage a different adaptor in your job configuration.

**Other resources to check out:**

1. OpenFn Job Library
2. OpenFn Docs ‘App’ pages for CommCare and Postgres

**Any questions? Comments? New configuration ideas? Please reach out to us with
a post on the [OpenFn Community](https://community.openfn.org/) forum.**
