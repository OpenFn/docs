---
sidebar_label: HTTP to GoogleSheets
title: HTTP to GoogleSheets Workflow
---

# Create a HTTP to GoogleSheets Workflow

In this tutorial we are going to create a simple workflow that automate users
data sync between REST API and Google Sheets with OpenFn

## Before you start

Here are some things to know before you begin this process.

- You have checked out our glossary and have an understanding of basic OpenFn
  and API terminology. Check out the pages below to get started
  - [OpenFn Concepts](../get-started/terminology.md)
  - [A glossary for data integration](../get-started/glossary.md)
- You have a Google Account. We will use it to create GoogleSheets credentials
- You have a project on [app.openfn.org](https://app.openfn.org)

## Getting started

In this walkthrough, we will be setting up an **automatic data sync between HTTP
service and a GoogleSheet**. We will be syncing users data coming from a
JSONPlaceholder Rest API to a GoogleSheet.

**This integration can be broken up into two parts:**

1. Getting data from your source system to OpenFn input so you can inspect the
   data structure to inform the job design for part two
2. Transforming and loading this data to your destination system

… let’s get started!

## Create a new Workflow

To create a new Workflow in your Project:

1. Go to the `project dashboard` page.
2. Click `Create new workflow` button.
3. Give your Workflow a descriptive `Name` (e.g., `Sync Users List`).
4. Choose your [Trigger](../build/triggers.md)
5. Edit your first [Step](../build/steps/steps.md)

## Getting data from JSONPlaceholder

[JSONPlaceholder](https://jsonplaceholder.typicode.com/users) provides a free
fake API for testing and prototyping. We will be using the
[Users Rest API](https://jsonplaceholder.typicode.com/users) for extracting
users data. This involves configuring a step in OpenFn to fetch users data via a
`GET` HTTP request. Click your first step to set up!, Configurate the step with
following options

- Name `Fetch Users`
- Adaptor `http`
- Version: `6.0.0`
- Credentials (Optional) -
  `{ "baseUrl": "https://jsonplaceholder.typicode.com/"}`
- Step operations - `get("users")` If you have setup the credential above
- Input - `{}`

**Once you are finished configuring and writing your step, save and run it!**

**Check out the `Output & Log` panel to see if your run succeeded.** If it
succeeded, you should see:

- Status `success`
- Log tab end with `Run complete with status: success`
- Input tab has `{}`
- Output tab has `{ data: [ {...}]}`

## Transforming and loading users data to Googlesheet

You should have a Googlesheet created with your google account email for OpenFn
to read and write data in your target GoogleSheet rows. For this demo, we have
configured the Googlesheet
[like this](https://docs.google.com/spreadsheets/d/1gT4cpHSDQp8A_JIX_5lqTLTwV0xBo_u8u3ZNWALmCLc/edit?usp=sharing)
to capture the users data.

Create a new step with the `googlesheet` adaptor for loading the users data into
your destination GoogleSheet. Configure the step with the following options

- Name `Sync Users`
- Adaptor `googlesheetps`
- Version: `2.2.2`
- Credentials: Create new GoogleSheet OAuth credentials and save it
- Step operations: For this job we will use the `appendValues` operation to add
  an array of rows to the spreadsheet. Make sure you update the `spreadsheetId`
  to match the Id of your spreadsheet

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

If you have already ran the `Fetch Users` step, you will have initial input to
test `Sync Users` step. Select the input from the input panel and click
`Create New Work Order` to run this step.

## Time to test!

1. Select and open inspector for `Fetch Users` step
2. Create a new empty input `{}`
3. Click `Create New Work Order` to execute the step
4. Check results in `Output & Logs` panel and ensure that both steps have passed
   with status `success`
5. Finally check your spreadsheet to see the synced users data
