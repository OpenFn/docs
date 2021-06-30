---
title: Project Walk-through
---

On this page, we will demonstrate how to build a real world integration using
the OpenFn platform.

In this sample integration project, a KoboToolBox form submission will trigger
OpenFn jobs which do the following in real-time:

1. Create a new contact in [Salesforce](https://www.salesforce.com)
2. Add a new tracked entity instance to [dhis2](https://www.dhis2.org)
3. A new row created in [Google Sheets](https://sheets.google.com)

### Step 1 - Login to your project dashboard

Create an account on OpenFn and login to your project dashboard.

If this is the first time you are logging into OpenFn, you will notice that a
sample project has already been created for you.

![Project Dashboard on 1st Login](/img/1.1_new_account_dashboard.png)

### Step 2 - Add a new project

Add a new project that will contain your desired automations/workflow.

![Add new project](/img/2.1_add_new_project.gif)

### Step 3 - Enter your new project space

Click `view` on your new project to get started.

![Click view](/img/3.1_click_view.gif)

### Step 4 - Connect your source application(s)

Connect KoboToolbox to your OpenFn inbox, so that every time a survey form is
submitted, OpenFn receives a copy of it.

Copy your OpenFn inbox url and then register a new REST service in KoboToolbox.

![inbox url](/img/4.1_inbox_url_copy_paste.gif)

For our example, the REST Service information we entered looks like this:

![kobo rest service](/img/4.2_rest_service_kobo.png)

### Step 5 - Connect your destination application(s)

Add your credentials for the destination services that you would like the
KoboToolbox data to flow to. Navigate to the `credentials` section in your
project space and click the `+` on the bottom right of the screen.

![add credential](/img/5.1_add_credential.gif)

#### Add SalesForce credentials

![Salesforce Credentials](/img/5.2_salesforce_credentials.png)

#### Add dhis2 credentials

![dhis2 Credentials](/img/5.3_dhis2_credentials.png)

#### Add Google Sheets credentials

![google sheets credentials](/img/5.4_google_sheets_credential.gif)

### Step 6 - Create your job trigger(s)

Create your trigger for the automation.

Navigate to the `trigger` section in your project.

![navigate to trigger](/img/6.1_navigate_to_trigger.gif)

Enter your desired trigger's configuration. :::important Note, that your project
space can have several different triggers that govern when/if your jobs are
performed. ::: In this example, we would like for our jobs to trigger whenever a
new Kobo form is submitted.

![trigger example](/img/6.2_trigger_example.png)

### Step 7 - Create your job(s)

Create your project's jobs.

#### Salesforce

![salesforce job](/img/7.1_salesforce_job.png)

<!-- I think the font is too big in these job images. i'll change this weekend -->

```js
create('Contact', {
  FirstName: dataValue('body.Patient_name'),
  LastName: dataValue('body.Last_Name_of_Patient'),
  Age__c: dataValue('body.Age'),
  Sex__c: dataValue('body.Sex'),
  Case_ID__c: dataValue('body.National_ID'),
  Comments__c: dataValue('body.Comments'),
});
```

#### dhis2

![dhis2 job](/img/7.2_dhis2_job.png)

```js
createTEI({
  orgUnit: 'GD7TowwI46c',
  trackedEntityType: 'MCPQUTHX1Ze',
  attributes: [
    {
      attribute: 'he05i8FUwu3', // case id
      value: dataValue('body._id'),
    },
    {
      attribute: 'sB1IHYu2xQT', // first name
      value: dataValue('body.Patient_name'),
    },
    {
      attribute: 'ENRjVGxVL6l', // last name
      value: dataValue('body.Last_Name_of_Patient'),
    },
    {
      attribute: 'Rv8WM2mTuS5', // age
      value: dataValue('body.Age'),
    },
  ],
  enrollments: [
    {
      orgUnit: 'GD7TowwI46c',
      program: 'DM9n1bUw8W8',
      programState: 'sAV9jAajr8x',
      enrollmentDate: dataValue('body.Date'),
      incidentDate: dataValue(
        'body.Covid_19_suspected_criteria/Speciman_Collection_date'
      ),
    },
  ],
});
```

#### Google Sheets

![google sheets job](/img/7.3_google_sheet_job.png)

```js
appendValues({
  spreadsheetId: '1EFkY4zD4qqxnJdH-QaeasKd1zXC-1sNKpEg08W-3sT0',
  range: 'COVID-19 Cases!A2',
  values: state => {
    const kobo = state.data.body;

    console.log('Submission data: ' + JSON.stringify(kobo, null, 2));

    return [
      [
        kobo['National_ID'],
        kobo['Patient_name'],
        kobo['Last_Name_of_Patient'],
        kobo['Sex'],
        kobo['Age'],
        kobo['Comments'],
        kobo['Date'],
      ],
    ];
  },
});
```

### Step 8 - Activate "Auto-Process"

Turn on auto-process for all of this automation's jobs, so that they
automatically run each time a new kobo form is submitted.
![dhis2 job](/img/8.1_autoprocess_on.gif)

### Step 9 - Testing your automation

Now it's time to test your integration. (Work in progress...)

<!--@Taylor I will add step 9 tomorrow/this weekend  -->
