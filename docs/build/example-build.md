---
title: Build Walk-Through
---

On this page, we will demonstrate how to build a real world integration using
the OpenFn platform.

In this sample integration a KoboToolBox form submission will trigger OpenFn to
perform the following jobs:

1. A new contact created in SalesForce
2. A new tracked entity instance created in dhis2
3. A new row created in Google Sheets

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

### Step 4 - Connect your source application/s

Connect KoboToolbox to your OpenFn inbox, so that every time a survey form is
submitted, OpenFn receives a copy of it.

- Copy your OpenFn inbox url and then register a new REST service in
  KoboToolbox. ![inbox url](/img/4.1_inbox_url_copy_paste.gif)

- For our example, the REST Service information we entered looks like this:
  ![kobo rest service](/img/4.2_rest_service_kobo.png)

### Step 5 - Connect your destination application/s

Add your credentials for the destination services that you would like the
KoboToolbox data to flow to.

- Navigate to the `credentials` section in your project space and click the `+`
  on the bottom right of the screen.
  ![add credential](/img/5.1_add_credential.gif)

- Add SalesForce
  credentials![Salesforce Credentials](/img/5.2_salesforce_credentials.png)

- Add dhis2 credentials ![dhis2 Credentials](/img/5.3_dhis2_credentials.png)

- Add Google Sheets credentials
  ![google sheets credentials](/img/5.4_google_sheets_credential.gif)

### Step 6 - Create your job trigger/s

Create your trigger for the automation.

- Navigate to the `trigger` section in your project.
  ![navigate to trigger](/img/6.1_navigate_to_trigger.gif)

- Enter your desired trigger's configuration. :::important Note, that your
  project space can have several different triggers that govern when/if your
  jobs are performed. ::: In this example, we would like for our jobs to trigger
  whenever a new Kobo form is submitted.
  ![trigger example](/img/6.2_trigger_example.png)

### Step 7 - Create your job/s

Create your project's jobs.

- Salesforce ![salesforce job](/img/7.1_salesforce_job.png)
<!-- I think the font is too big in these job images. i'll change this weekend -->

<!-- Sample job expression code box?? -->

- dhis2 ![dhis2 job](/img/7.2_dhis2_job.png)

<!-- Sample job expression code box?? -->

- Google Sheets ![dhis2 job](/img/7.3_google_sheet_job.png)

<!-- Sample job expression code box?? -->

### Step 8 - Activate "Auto-Process"

Turn on auto-process for all of this automation's jobs, so that they
automatically run each time a new kobo form is submitted.
![dhis2 job](/img/8.1_autoprocess_on.gif)

### Step 9 - Testing your automation

Now it's time to test your integration. 

<!--@Taylor I will add step 9 tomorrow/this weekend  -->
