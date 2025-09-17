---
sidebar_label: CommCare to PostgreSQL
title:
 Syncing your CommCare form submissions to a PostgreSQL database
---

**Before starting this tutorial please make sure:**

- You have signed up for [OpenFn.org](http://openfn.org) (it takes less than a
  minute!)
- You have checked out our glossary and have an understanding of basic OpenFn
  and API terminology. Check out the pages below to get started
  - [OpenFn Concepts](../get-started/terminology.md)
  - [A glossary for data integration](../get-started/glossary.md)
- You have a CommCare application with at least one form configured. This is
  your source system.
- You have a PostgreSQL database configured. This is your destination system.

**If you don’t have a CommCare application or PostgreSQL database setup, you can
also follow along with the prebuilt solution. Follow along at the links below:**

1. [Mapping specifications document](https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing)
2. Commcare application to download:
   - Username: testuser
   - Password: 123

![install_cc_app](/img/install_cc_app.webp)

3. [Public report that shows records in the PostgreSQL database](https://analytics.openfn.org/public/question/095449a9-5696-463c-a4fb-24614c9f08a5)

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

![cc-postgres](/img/cc-postgres.webp)

**This integration can be broken up into two parts:**

1. Getting data from your source system into OpenFn to trigger your workflow 
2. Transforming and loading this data to your destination system

… let’s get started!

## Getting data from CommCare

**There are two ways to get your CommCare form submissions in OpenFn.**

### Option 1: Webhook to forward cases and/or forms in real-time from CommCare to OpenFn using REST service

CommCareHQ has a native data forwarding feature that provides a webhook/REST
service that can be pointed to the destination of your choice (i.e., your OpenFn
workflow). When a webhook is configured, any Commcare forms submitted are
**_automatically forwarded_** to the designated endpoint, such as your OpenFn
workflow. After data forwarding is set up, it happens automatically, **_in
real-time for all forms and cases_**. Learn more about configuring a webhook
[here](/adaptors/commcare#webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service).

![option1](/img/option1.webp)

### Option 2: Extracting Commcare data via the REST API

CommCare provides a robust
[REST API](https://confluence.dimagi.com/display/commcarepublic/List+Forms) for
extracting and loading data. This second option involves configuring a step in
OpenFn to fetch CommCare submissions via a `GET` HTTP request with parameters to
filter your data query. CommCare API access requires a paid CommCare plan.


   The main advantage of using the webhook is that your data is forwarded to the
   destination system in real-time. However, the List Forms API is also
   advantageous because it enables users to extract data in bulk on a scheduled
   basis, for syncing historical data every month on the 30th, for example.
   Deciding on which option to go with depends on your business requirements.

### Set up a workflow using Option 1

1. **Open up an existing project and create a new workflow**

![create_new_workflow](/img/create-new-workflow.gif)

2. **Create a new “Webhook” trigger to schedule this extract job.**

![create_trigger](/img/create_trigger.gif)

Make sure you have copied the webhook URL from your OpenFn workflow into CommCare. Each form submitted in CommCare will be automatically sent to OpenFn and will trigger your new workflow.

## Transforming and loading CommCare data to a PostgreSQL database

1. **You should have a database configured and a username provided for OpenFn to
   read and write data in your target DB tables.** For this demo, we have
   configured the database
   [like this](https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing)
   to capture the CommCare form data. Check out the
   [this page](../design/mapping-specs)
   for how to create your own `mapping specification document` to map data
   elements to be exchanged.

![db_config](/img/db_config.webp)



2. **Create a new step with the `postgresql` adaptor for loading the CommCare
   data into your destination database.**

![configure_job_postgres](/img/create-job.gif)

3. **Create a PostgreSQL credential which will be used by the step to
   authenticate with the database.**

![add_credential_postgres](/img/postgresql-cred.gif)

4. **Writing the step:** For this step we will use the upsert operation to
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
configuration according to your mapping specifications. 

![create-job](/img/create_job_db.gif)


## Time to test!

1. Submit a form in CommCare
2. If you have enabled data forwarding, your workflow should should be triggered automatically.
3. If you have not enabled data forwarding and set up a FETCH step instead, run
   the step (ensure the `received_on_start` and `received_on_start` dates in the
   FETCH are appropriate).
4. Run the FETCH step. If the fetch step passes, the “Load to DB” step should
   automatically run.
5. Check out the `History` and ensure that the work order was successful.

![activity_history_final](/img/activity_history_success.webp)

:::info

**What do do if your run fails:**

1. Open the run to inspect the error log
2. Adjust the step to resolve the issue and re-run the step as needed by clicking the
   "rerun" button in `History` or the "Re-run from here" button on the `Inspector`
3. Check out the [PostgreSQL common errors](/adaptors/postgresql/#common-errors)
   page for more details!

:::


4. **Finally, refresh your database and check out the new submission data!**

![metabase](/img/metabase.webp)

While this guide is specifically for PostgreSQL databases, you can generally
follow these same steps for other database types (e.g., MS SQL or MySQL)—simply
leverage a different adaptor in your step configuration.
 
**Other resources to check out:**

1. OpenFn Job Library
2. OpenFn Docs ‘App’ pages for CommCare and Postgres

**Any questions? Comments? New configuration ideas? Please reach out to us with
a post on the [OpenFn Community](https://community.openfn.org/) forum.**
