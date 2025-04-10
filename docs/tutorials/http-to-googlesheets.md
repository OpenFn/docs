---
sidebar_label: HTTP to GoogleSheets
title: HTTP to GoogleSheets Workflow
---

# Create a Workflow connecting a REST API to Google Sheets

In this tutorial, we are going to walk through how to create a simple OpenFn
Workflow that automates syncing data between a REST API and Google Sheets, using
the `http` and `GoogleSheets` [Adaptors](/adaptors).

## Video Walkthrough

Watch the video and follow along with the steps below.

<iframe width="784" height="441" src="https://www.youtube.com/embed/PMj8445gLA4?si=WbJ4tmr_jnKyBfg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Before you start

Here are some we assume you've looked over before you begin this process.

- You have checked out our glossary and have an understanding of basic OpenFn &
  API concepts. Check out the pages below to get started
  - [OpenFn Concepts](../get-started/terminology.md)
  - [A glossary for data integration](../get-started/glossary.md)
- You have a Google Account. We will use it to create a credential to authorize
  with Google Sheets.
- You have access to an OpenFn project (either on a locally installed
  [OpenFn v2 app](https://github.com/OpenFn/lightning) or on
  [app.openfn.org](https://app.openfn.org)).

## Getting started

In this walkthrough, we will configure a Workflow to **automatically sync `user`
data from a web REST API, and import this data to a GoogleSheet**.

**This integration can be broken up into two parts:**

1. Get data from the REST API (the "source" app)
2. Transforming & importing this data to a table in your GoogleSheet (the
   "destination" app)

Let’s get started!

## 1: Create a new Workflow

To create a new Workflow in your Project:

1. Go to the `project dashboard` page.
2. Click `Create new workflow` button.
3. Give your Workflow a descriptive `Name` (e.g., `Sync Users List`).
4. Choose your [Trigger](../build/triggers.md)
5. Edit your first [Step](../build/steps/steps.md)

## 2. Configure your first Step to get data from the REST API

[JSONPlaceholder](https://jsonplaceholder.typicode.com/users) provides a free
fake API for testing and prototyping. We will be using the
[Users Rest API](https://jsonplaceholder.typicode.com/users) for extracting
users data. This involves configuring a step in OpenFn to fetch users data via a
`GET` HTTP request. Click your first step to set up!, Configurate the step with
following options

- Name `Fetch Users`
- Adaptor `http`
- Version: `6.0.0`
- Credentials (Optional: "Raw JSON" credential) -
  `{ "baseUrl": "https://jsonplaceholder.typicode.com/"}`
- Job code: Add the operation `get("users")` in the code block if you've
  configured the "Raw JSON" credential for the jsonplaceholder as the baseURL.

:::tip Need help writing job code?

Check out the docs on the ["http" Adaptor](/adaptors/packages/http-readme),
[configuring Steps](../build/steps/steps.md), and
[job-writing](../jobs/job-writing-guide.md).

:::

**Once you are finished configuring and writing your Step, save and run it!**

- See the [Workflows section](../build/workflows.md) for more guidance on
  building & running Workflows.

**Check out the `Output & Log` panel to see if your run succeeded.** If it
succeeded, you should see:

- Status `success`
- Log tab end with `Run complete with status: success`
- Input tab has `{}`
- Output tab has `{ data: [ {...}]}`

## 3. Configure another Step to transform the data & import your GoogleSheet

Create a new Googlesheet `Credential` using your Google account's email. (Make
sure this Google user has edit access to the GoogleSheet you want to integrate
with.)

:::info Don't see a GoogleSheets credential option?

If your instance superuser hasn't configured a global Oauth client, you may need
to set one up for yourself. Learn about Oauth Clients
[here](/documentation/oauth#oauth-clients) and specifics for a GoogleSheet
Client [here](/adaptors/googlesheets#permissions-scopes).

:::

For this demo, we configured the Googlesheet
[like this](https://docs.google.com/spreadsheets/d/1gT4cpHSDQp8A_JIX_5lqTLTwV0xBo_u8u3ZNWALmCLc/edit?usp=sharing)
to store the `users` data.

Create a new step with the `googlesheet` adaptor for loading the users data into
your destination GoogleSheet. Configure the step with the following options

- Name `Sync Users`
- Adaptor `googlesheets`
- Version: `2.2.2`
- Credentials: Create new `GoogleSheet OAuth` Credential and save it
- Step operations: For this job we will use the `appendValues()` operation to
  add an array of rows to the spreadsheet. Make sure you update the
  `spreadsheetId` to match the Id of your spreadsheet

  ```js
  // Prepare array of users data
  fn(state => {
    const users = state.data.map(
      ({ id, name, username, address, phone, website, company }) => [
        id,
        name,
        username,
        address.city,
        phone,
        website,
        company.name,
      ]
    );

    return { ...state, users };
  });

  // Append user data to GoogleSheet
  appendValues({
    spreadsheetId: '1gT4cpHSDQp8A_JIX_5lqTLTwV0xBo_u8u3ZNWALmCLc',
    range: 'users!A1:G1',
    values: state => state.users,
  });
  ```

- Input - `Final output of Fetch Users`

If you have already ran the `Fetch Users` Step, you will have initial input to
test `Sync Users` Step. Select the input from the input panel and click
`Create New Work Order` to run this Step.

## 4. Time to test!

1. Select and open inspector for `Fetch Users` step
2. Create a new empty input `{}`
3. Click `Create New Work Order` to execute the step
4. Check results in `Output & Logs` panel and ensure that both steps have passed
   with status `success`
5. Finally check your spreadsheet to see the synced users data

Encountering errors or getting stuck? Check out the
[Workflow](../build/workflows.md) or
[Troubleshooting](../monitor-history/troubleshooting.md) docs.

:::tip Are you blocked? Have questions?

Reminder to [watch the video](#video-walkthrough) or post on the
[Community](https://community.openfn.org) to ask for help!

:::
