# Platform Docs

## Quick-start guide

**1. Create your account.** If you haven't already, create an account at [OpenFn.org](https://www.openfn.org/signup)

**2. Log In.** After logging into your new account, you will see an overview of your current projects and the job runs associated with that project. This is called the outer **Dashboard**. Click on one project to start.

**3. Review the navigation bar.** You should now be looking at the OpenFn User dashboard for a particular project. Review the following navigation tabs:
`Jobs` | `Triggers` | `Credentials` | `Inbox` | `Run History` | `Version Control` | `Access & Security` | `Project Settings`

- `Jobs.` A job defines the specific series of tasks or database actions to be performed when a triggering message is received or a timer interval has elapsed. Jobs are like the “instructions” you might give a data entry staff member (e.g., create new Patient record in the database, send SMS with payment confirmation number, etc.).
- `Triggers.` A trigger runs jobs based on events, including incoming messages (this is known as a “message filter”) or on a timer (a “time trigger”).
- `Credentials.` A credential is used to authorize connection to a destination system (e.g., Salesforce username, password & login URL).
- `Inbox.` Your inbox contains the history of all messages that have passed in to your project, which may or may not have triggered a specific job. Messages are stored payloads or data (e.g., an incoming SMS, a submitted CommCare form) that were sent via HTTP post to your inbox.
- `Run History.` Runs are OpenFn attempts made on a destination system by running a message through a job. Runs can be viewed here and re-processed if there were any errors flagged when running a job.
- `Version Control.` Sync your project with a GitHub repository so that every change is tracked using git and jobs can be 'rolled back' to previous commits at the touch of a button.
- `Access & Security.` - Invite other OpenFn users to collaborate with you on your project and create authentication methods for your project to restrict which applications can send data to your inbox.
- `Settings.` Monitor your usage and update your project settings here.

**4. Check your inbox.** Click on the Inbox tab to view messages -- receipts of data that was sent to your project inbox. Click on the Inbox tab.

**5. Run a job.** You should see your first message associated with a "sample job". Click on it. You can now choose to do the following:

- Edit the message (mainly for the purpose of fixing mistakes in data),
- Manually run the job associated with a filter which has identified your first message as a trigger. See the `Current Potential` section for all jobs that can be run against this message based on their triggers and the message body.

Click run.

**6. View the Associated Runs.** After running the job, view the run logs in this section below.
- Click into a run to see what happened to the data inside of the message. In the logs, you should be able to see the status (success/error) of the run.
- Go to the "Run History" navigation tab to also view every job run log and its status.

**7. Familiarize yourself with the other tabs.**

Navigate to **Triggers**. You can see that the sample filter we provided you required a message to be sent from OpenFn in order to trigger a job run. Click on the filter to edit it. Click save when you are done.

Navigate to **Jobs**. Here you can:

- You can click to view the job that was run when triggered by the sample filter and sample message.
- Click on "Edit Job" to edit the .js file which executes a specific action (job).
- Click on the specified filter to change which filter should trigger that job.

Navigate to **Credentials** to edit the destination system you want to connect to. By default, we have provided credentials to access the Salesforce sandbox environment.

Navigate to the **Settings** tab to change the project's name, upgrade your account for more jobs and runs, add collaborators, and transfer project ownership.

## Connecting Source Applications
Most modern web applications have a feature that allows you to `push`, `publish`, or `post` data to another URL when a certain **event** takes place. This event could be a form submission, mobile payment, patient registration, or barcode scan submission from a mobile app. The key is that your source application will notify OpenFn when *something happens*.

1. Go to the "settings" or "administration" page for your source app, and look for a `Webhook API`, `Data Forwarding API`, or `Notifications API`. Write to the developers of your application if none is provided out of the box.

2. When setting up forwarding, select to send messages in `JSON` to your project's `inbox URL`. This is a UUID that serves as your API token. You can find and copy your secure inbox URL by clicking on the "copy URL" link in the bottom-right corner of the project in question on your **[project dashboard](https://www.openfn.org/projects)** page or by using the "Copy URL" button on your project's "Inbox" page..

3. Soon you'll see new messages arrive in your **Inbox**.

## Creating a compatible notifications service
If you are a developer, looking to set up a compatible notifications API for OpenFn, please see our [Application Developers](/source-applications/#application-developers) section.

## Triggers
Triggers run jobs. They can either be "filter" triggers or "timer" triggers. Filter triggers watch incoming messages and run them through jobs when they match the filter criteria. Timer triggers run jobs after a recurring interval has elapsed.

You, as a user, specify the filter **criteria** which determines which messages in your inbox should trigger job runs. This means that if any segment of a message body **matches** the string of `JSON` you gave as a filter, the filter will run and trigger a job (assuming you created one).

The filter criteria takes the form of a string of valid `JSON`. In a SQL query, this string will be used in the WHERE clause, for example:

```sql
SELECT * FROM receipts
  WHERE body::jsonb @>
    '{"Name":"Aleksa Iwobi"}'::jsonb;
```

### Filter Matching
To illustrate filter matching, refer to the `JSON` strings below. Message "a" will match filter '1', but message "b" will not.

#### Filter 1:
```json
{"formID":"patient_registration_v7"}
```

#### Message a (MATCH):
```json
{"submissionDate":"2016-01-15", "formID":"patient_registration_v7", "name":"Jack Wilshere", "dob":"1986-05-16", "medications": ["anaphlene","zaradood","morphofast"]}
```

#### Message b (NO MATCH):
```json
{"submissionDate":"2016-01-16", "formID":"patient_registration_v8", "name":"Larry Bird", "dob":"1982-03-21", "medications": ["anaphlene","zaradood","morphofast"]}
```
Message 'b' does not include `"formID":"patient_registration_v7"` and will not match filter '1'.

### Processing time-triggered jobs
**On-demand processing for jobs triggered by timers.** If you’re leveraging timer triggers to run jobs at specific time intervals, you can now run a time triggered job on demand. This way you don’t have to wait for the timer to expire before testing! Simply click the process/ “play” button now available via the Job, Run, and Activity History pages.

![Runs list run time trigger button](/docs/images/timetriggerunslist.png)

![Run history time trigger button](/docs/images/runtimetrigger1.png)

## Credentials
Credentials are used to authorize connections to destination systems. In the future, our adaptors will use credentials to fetch meta-data from source and destination applications and make the job writing process easier.

Some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl, host, or ApiUrl. Leave off the final "/" in these Urls:
`https://login.salesforce.com` or `http://demo.openmrs.org/openmrs` or `https://play.dhis2.org`.

Credentials can only be viewed, or edited by a single user — their "owner" (or the person that created that credential). All the collaborators on a particular project can choose those credentials for use when defining a job.

## Jobs
A job defines the specific series of tasks or database actions to be performed when a triggering message is received or a timer interval has elapsed.

### Composing Job Expressions
In most cases, a job expression is a series of `create` or `upsert` actions that
are run after a message arrives, using data from that message. It could look
like this:
#### Basic Job Expression
```js
create('Patient__c', fields(
  field('Name', dataValue('form.surname')),
  field('Age__c', 7)
));
```
That would create a new `Patient__c` in some other system. The patient's `Name`
will be determined by the triggering message (the value inside `form.surname`,
specifically) and the patient's `Age__c` will *always* be 7. See how we hard
coded it?

What you see above is OpenFn's own syntax, and you've got access to dozens of
common "helper functions" like `dataValue(path)` and destination specific
functions like `create(object,attributes)`. While most cases are covered
out-of-the-box, jobs are **evaluated as Javascript**. This means that you can
write your own custom, anonymous functions to do whatever your heart desires:
#### Job Expression with Custom Javascript
```js
create('Patient__c', fields(
  field('Name', state => {
    console.log('Manipulate state to get your desired output.');
    return Array.apply(null, state.data.form.names).join(', ');
  }),
  field('Age__c', 7)
));
```

Here, the patient's name will be a comma separated concatenation of all the values in the `patient_names` array from our source message.

### Available Javascript Globals
For security reasons, users start with access to the following standard Javascript globals, and can request more by opening an issue on Github:

- Array
- console
- JSON
- Number
- Promise
- String

*N.B. The runtime environment on the server is Node v6.5.0.

Other than the expression tree, Jobs have certain attributes that must be set:

1. **Filter** - The message filter that will triggers the job.
2. **Adaptor** - The adaptor for the destination system you're connecting to.
2. **Credential** - The credential that will be used to gain access to that destination system.
4. **Active?** - A boolean which determines whether the job runs in real-time when matching messages arrive.

### Selected Named Functions
There are lots more available in the language-packs.

#### language-common
- `field('destination_field_name__c', 'value')` Returns a key, value pair in an array. [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L248)
- `fields(list_of_fields)` zips key value pairs into an object. [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L258)
- `dataValue('JSON_path')` Picks out a single value from source data. [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L71)
- `each(JSON_path, operation(...))` Scopes an array of data based on a JSONPath [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L194). See beta.each when using multiple each()'s in an expression.
- `each(merge(dataPath("CHILD_ARRAY[*]"),fields(field("metaId", dataValue("*meta-instance-id*")),field("parentId", lastReferenceValue("id")))), create(...))` merges data into an array then creates for each item in the array [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L272)
- `lastReferenceValue('id')` gets the sfID of the last item created [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L96-L100)
- `function(state){return state.references[state.references.length-N].id})` gets the sfID of the nth item created

#### `beta.each(JSON_path, operation(...))`
Scopes an array of data based on a JSONPath but then returns to the state it was given upon completion [(source)](https://github.com/OpenFn/language-common/blob/master/src/beta.js#L44). This is necessary if you string multiple `each(...)` functions together in-line in the same expression. (E.g., Given data which has multiple separate 'repeat groups' in a form which are rendered as arrays, you want to create new records for each item inside the first repeat group, then _RETURN TO THE TOP LEVEL_ of the data, and then create new records for each item in the second repeat group. Using `beta.each(...)` lets you enter the first array, create your records, then return to the top level and be able to enter the second array.

#### Salesforce
- `create("DEST_OBJECT_NAME__C", fields(...))` Create a new object. Takes 2 parameters: An object and attributes. [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L42-L63)
- `upsert("DEST_OBJECT_NAME__C", "DEST_OBJECT_EXTERNAL_ID__C", fields(...))` Creates or updates an object. Takes 3 paraneters: An object, an ID field and attributes. [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L65-L80)
- `relationship("DEST_RELATIONSHIP_NAME__r", "EXTERNAL_ID_ON_RELATED_OBJECT__C", "SOURCE_DATA_OR_VALUE")` Adds a lookup or 'dome insert' to a record. [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/sourceHelpers.js#L21-L40)

#### dhis2
- `event(...)` Creates an event. [(source)](https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L31-L60)
- `dataValueSet(...)` Send data values using the dataValueSets resource [(source)](https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L62-L82)

#### OpenMRS
- `person(...)` Takes a payload of data to create a person [(source)](https://github.com/OpenFn/language-openmrs/blob/master/src/Adaptor.js#L31-L60)
- `patient(...)` Takes a payload of data to create a patient [(source)](https://github.com/OpenFn/language-openmrs/blob/master/src/Adaptor.js#L62-L90)

**For code block examples of job expressions, go to the [Appendix](#appendix).**

## Inbox
Your inbox contains the history of all messages that have passed in to your project, which may or may not have triggered a specific job. Messages are stored payloads or data that were sent via HTTP post to your inbox. They can be viewed in formatted JSON, edited, or manually processed (if they did not match a filter when they were originally delivered.)

To edit a message, click the "pencil and paper" icon next to that receipt. Be careful, as no original copy will be persisted.

### Filter messages in your inbox
To help you more quickly find relevant messages, you can now filter your inbox by:

- **Body Text** - Search your messages for specific text (e.g., find surveys that contain “India” in the body). As individual projects may have millions of messages containing tens of thousands of lines of JSON each, we’ve implemented a “tsvector” search strategy. Please be patient and note that this text-based search may take a moment to return results.. If you’re curious about how tsvector works from a technical perspective, check out the [official documentation](https://www.postgresql.org/docs/10/datatype-textsearch.html#DATATYPE-TSVECTOR).
- **Date** - Choose a relative date range (e.g., “Last 90 Days”) or define a custom date range yourself. Note that the default inbox view shows “Last 30 Days”.

![Image of Inbox Filters](/docs/images/inbox_filter.png)

### Bulk reprocess messages
Need to re-run a series of messages? If you had a job fail because of an error for multiple messages, or need to re-process the data in OpenFn to re-send to a destination application, then this feature will help you do so more quickly!

1. Simply click on the new **Reprocess** button via the Inbox view.
![Reprocess button](/docs/images/reprocess_msgs.png)

2. Specify the **ID range** for messages that you want to re-run (e.g., messages with IDs 4622741 through 4622749 → 9 messages to reprocess).
![Bulk reprocess screen](/docs/images/bulk_reprocess.png)

**Note when bulk reprocessing messages:**

- This will trigger any jobs that would have run when the given  messages first arrived in your OpenFn inbox. In other words, any jobs that are have the autoprocess setting “on” will automatically be run if triggered by one of the reprocessed messages.

- Remember that OpenFn plans are run-based, and you can monitor usage in **Project Settings** to ensure that you don’t hit any run limits when bulk reprocessing!
![Usage stats chart](/docs/images/usage.png)

### Export messages to CSV
You can now download and review OpenFn message data by exporting to a CSV file.

1. In your inbox, filter the messages you’d like to export to CSV. Choose to filter by text, date, trigger, and run state.

2. Click the **Export as CSV** button to generate an export. The link to download this file will be sent to your email address.

![Export CSV button](/docs/images/exportcsv.png)


## Activity
In this section of the portal, you can view a list of all "runs" - i.e. individual job runs. This list is essentially a compilation of all jobs, messages and credentials flowing through your OpenFn account towards your destination system(s).

### Runs
Runs are attempts made on a destination system by running a receipt through a Job Description. Runs can be viewed and re-processed. Each submission has a `success`, `started_at`, `finsihed_at`, `job_description_id`, and `receipt_id` attribute. `Started_at` and `finished_at` are the timestamps when the submission began and ended.

> **Note:** Some runs may take a really long time, particularly if they are performing multiple actions in a destination system or if they are fetching lots of data from a REST api at the start of a migration. They will appear as red if they have failed. In the case of failure, refer to our [Troubleshooting](#troubleshooting) section below.

### Filter runs in the Activity view
You can filter the run logs in the Activity View by:

- **Text** - Remember to be patient as a full log text search can take time process. Leverage this feature to search for runs with specific error messages to support with troubleshooting any failed runs.

- **Date** - Filter the view to only show runs that failed in the last few hours/ days/ year – or a custom date range! Note that the default activity history view shows runs from the last 30 days.

### Bulk retry runs
Need to re-process a series of runs? This could be helpful if you had multiple runs fail due to an error message.

1. Simply click on the new **Retry** button via the Runs view.
![Retry run button](/docs/images/retrybutton.png)

2. Specify the **ID range** for the runs that you want to re-process. Choose to filter by Job and/or Status to only reprocess runs associated with a specific job or runs that have failed/ succeeded.
![Bulk retry runs](/docs/images/runs_retry.png)


Remember that OpenFn plans are run-based, and you can monitor usage in **Project Settings** to ensure that you don’t hit any run limits when bulk reprocessing!

### Export runs to CSV
You can download your run logs by exporting to a CSV file.

1. Via the Runs Activity History view, filter the runs you’d like to export. Choose to filter by text, date, job, and status.

2. Click the **Export as CSV** button to generate an export. The link to download this file will be sent to your email address.
![Export runs button](/docs/images/exportruns.png)


## GitHub version control
You're ready to manage your jobs via GitHub, the leading hosted version control software on the web? Great, this section describes the steps necessary to get going.

***N.B.: GitHub integration is currently only available for enterprise users. Contact [enterprise@openfn.org](mailto:enterprise@openfn.org) to build a custom plan for your needs.***

### Motivation
Managing large numbers of jobs with multiple contributors is complicated. We developed the GitHub integration so that OpenFn projects can be linked to GitHub repositories. You can work collaboratively on your jobs. When commits are made to a particular branch OpenFn will automatically update the linked job with the new job file from GitHub.

### Setup Steps

1. Github: Settings -> Personal Access Tokens -> [Generate New Token](https://github.com/settings/tokens/new): This token should have full control of private repositories.
2. OpenFn: [User Settings](https://www.openfn.org/account): Once the token is generated, copy and paste it into the "GitHub Access Token" field on your user settings page.
3. OpenFn: Project -> Version Control: Specify the repository owner, repository name and branch for automatic deploys. You'd also select to turn on or off automatic deploys.
5. GitHub: Repoistory -> Settings -> Webhooks -> Add webhook
  6. Copy Payload URL from OpenFn Version Control page and paste into GitHub.
  7. Select `application/json` as the Content Type.
  7. Copy Secret from OpenFn Version Control page into GitHub.
  8. Leave "Just the push event" and "Active" selected, then click "Add Webook".
7. OpenFn: Project -> Jobs -> Job Edit: To link an individual job to a file in a GitHub repo, edit that job and paste in the path to the job from the root of your GitHub repo. If your repo looks like this, you'd type `sample_job_1.js` or `some_folder/some_other_job.js` to link your OpenFn job to the select file in your repo.

### Advanced Version Control

Using this GitHub integration, you can revert to previous version of jobs quickly by resending old GitHub Webhook Events. Access the "Manage Webhook" interface on GitHub to see a list of all past events and send whichever version of the job you'd like deployed to your OpenFn project.

## Troubleshooting

> What happens if my survey data from ODK needs to link to existing records in my Salesforce system but a respondent enters or selects an invalid `external ID`?

Great question, and don't worry, it happens all the time. Assuming you've already taken all possible measures to either pre-load external IDs in your ODK form or use more human-proof IDs (like barcodes and fingerprints) here's the flow of work:

1. Read the email, and inspect the reason for failure.

2. 99% of failed runs on OpenFn are due to `value mismatches`. The *collected* `id` in ODK doesn't match the *expected* `id` in Salesforce. You must now chose to either:

      A. Edit the source `id` in your `receipt` & retry the attempt.

      B. Edit the related `id` in your destination system & retry the attempt.

      C. Ignore the attempt—this source data will never reach your destination system. (There have been reports of ODK Aggregate's JSON publisher sending dupliate values. If that happens and your run fails due to "duplicate values" on a particular unique field you can safely ignore the run in OpenFn.)

Editing data in your destination system can be done through that system's interface. Many tools that act as `sources` (like ODK) do not allow for easy editing and re-submission of data. You can use OpenFn to edit the source data before retrying the attempt.

### Common Error Messages
The most common error messages with English explanations are:

+ `DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0` - The insert is blocked because you are attempting to create a new record with a unique field with the same value as an existing record.
+ `Required value missing`
+ `ExternalId not found`

## DIY

OpenFn's core ETL tools are all open-source, and here we will explain how those tools can be used to perform ETL operations from your command line. You can even take this further and wrap them together in your own hosted service!

To create an integration service like OpenFn.org, you will need to build a REST endpoint that allows JSON or XML to be posted to it, returning a `2XX` and checking the body of that message to see if it matches some criteria. If the criteria match for that message, you must perform `execute` from fn-lang, using the message data and some stored configuration as state. See a sample state.json below:

### State.json
```json
{
    "data": {
      "word_count": 284,
      "last_update": "2016-11-10 13:58:47",
      "folder_name": "Civil Disobedience",
      "file_owner": "student@school.org.za",
      "file_name": "Mock Journal Article"
    },
    "configuration": {
      "host": "109.XXX.11X.2XX",
      "port": "5432",
      "database": "data-warehouse",
      "user": "postgres",
      "password": "secret-password",
      "ssl": true
    }
}
```

Make sure to store your logs. If you'd like to be able to retry transactions, persist the message data and provide an interface for manipulating that data by hand, or re-running certain transactions after the job expression has been altered.

Make sure that a single inbound message can kick off the running of multiple jobs.

To get started, or just run fn-lang manually, from your command line, check out [openfn-devtools](https://github.com/OpenFn/openfn-devtools). With windows and linux install scripts, it's the fastest way to get up and running with OpenFn on your local machine.

## Appendix

### Sample code for DIY section
Below you can find sample code to fill the 3 files required to run fn-lang - `message.json`, `expression.js` and `config.json`.

#### message.json
```json
{
  "xform_ids": [],
  "version": null,
  "user_id": "user1",
  "server_date_opened": null,
  "server_date_modified": null,
  "properties": {
    "prop_c": "2013-05-18",
    "prop_b": "Female",
    "prop_a": 99,
    "owner_id": null,
    "external_id": null,
    "date_opened": null,
    "date": "2013-05-17",
    "case_type": "case_type",
    "case_name": "Demo"
  },
  "indices": {}
}
```

#### expression.js
```js
event(
  fields(
    field("program", "eBAyeGv0exc"),
    field("orgUnit", "DiszpKrYNg8"),
    field("eventDate", dataValue("properties.date")),
    field("status", "COMPLETED"),
    field("storedBy", "admin"),
    field("coordinate", {
      "latitude": "59.8",
      "longitude": "10.9"
    }),
    field("dataValues", function(state) {
      return [
        { "dataElement": "qrur9Dvnyt5", "value": dataValue("properties.prop_a")(state) },
        { "dataElement": "oZg33kd9taw", "value": dataValue("properties.prop_b")(state) },
        { "dataElement": "msodh3rEMJa", "value": dataValue("properties.prop_c")(state) }
      ]
    })
  )
)
```

#### config.json
```json
{
  "username": "admin",
  "password": "district",
  "apiUrl": "https://play.dhis2.org/demo"
}
```

### Filters (cont.)
#### Match messages `WHERE` the `formId` is `"Robot_Photo_21.04.2015"`:
```json
{"formId":"Robot_Photo_21.04.2015"}
```

#### Match a message `WHERE` this `AND` that are both included:
```json
{"formId":"Robot_Photo_21.04.2015", "secret_number":8}
```

#### Match a message with two fragments inside an array called `data`:
(This is useful when gathering data via ODK)
```json
{"data":[{"outlet_call":"TRUE","new_existing":"Existing"}]}
```

#### Match a message with a fragment inside another object called `form`:
```json
{"form":{"@xmlns":"http://openrosa.org/formdesigner/F732194-3278-nota-ReAL-one"}}
```

### Jobs (cont.)
Below you can find some examples of block code for different functions and data handling contexts.

#### Job expression (for CommCare to SF)
The following job expression will take a matching receipt and use data from that receipt to upsert a `Patient__c` record in Salesforce and create multiple new `Patient_Visit__c` (child to Patient) records.
```js
upsert("Patient__c", "Patient_Id__c", fields(
  field("Patient_Id__c", dataValue("form.patient_ID")),
  relationship("Nurse__r", "Nurse_ID_code__c", dataValue("form.staff_id")),
  field("Phone_Number__c", dataValue("form.mobile_phone"))
)),
each(
  join("$.data.form.visits[*]", "$.references[0].id", "Id"),
  create("Visit__c", fields(
    field("Patient__c", dataValue("Id")),
    field("Date__c", dataValue("date")),
    field("Reason__c", dataValue("why_did_they_see_doctor"))
  ))
)
```

#### Accessing the "data array" in Open Data Kit submissions
Notice how we use "each" to get data from each item inside the "data array" in ODK.
```js
each(
  "$.data.data[*]",
  create("ODK_Submission__c", fields(
    field("Site_School_ID_Number__c", dataValue("school")),
    field("Date_Completed__c", dataValue("date")),
    field("comments__c", dataValue("comments")),
    field("ODK_Key__c", dataValue("*meta-instance-id*"))
  ))
)
```

#### ODK to Salesforce: create parent record with many children from parent data
Here, the user brings `time_end` and `parentId` onto the line items from the parent object.

```js
each(
  dataPath("data[*]"),
  combine(
    create("transaction__c", fields(
      field("Transaction_Date__c", dataValue("today")),
      relationship("Person_Responsible__r", "Staff_ID_Code__c", dataValue("person_code")),
      field("metainstanceid__c", dataValue("*meta-instance-id*"))
    )),
    each(
      merge(dataPath("line_items[*]"), fields(
        field("end", dataValue("time_end")),
        field("parentId", lastReferenceValue("id"))
      )),
      create("line_item__c", fields(
        field("transaction__c", dataValue("parentId")),
        field("Barcode__c", dataValue("product_barcode")),
        field("ODK_Form_Completed__c", dataValue("end"))
      ))
    )
  )
)
```

> **NB - there was a known bug with the `combine` function which has been resolved. `combine` can be used to combine two operations into one and is commonly used to run multiple `create`'s inside an `each(path, operation)`. The source code for combine can be found here: [language-common: combine](https://github.com/OpenFn/language-common/blob/master/src/index.js#L204-L222)**

#### Create many child records WITHOUT a repeat group in ODK
```js
beta.each(
  "$.data.data[*]",
  upsert("Outlet__c", "Outlet_Code__c", fields(
    field("Outlet_Code__c", dataValue("outlet_code")),
    field("Location__Latitude__s", dataValue("gps:Latitude")),
    field("Location__Longitude__s", dataValue("gps:Longitude"))
  ))
),
beta.each(
    "$.data.data[*]",
    upsert("Outlet_Call__c", "Invoice_Number__c", fields(
      field("Invoice_Number__c", dataValue("invoice_number")),
      relationship("Outlet__r", "Outlet_Code__c", dataValue("outlet_code")),
      relationship("RecordType", "name", "No Call Card"),
      field("Trip__c", "a0FN0000008jPue"),
      relationship("Sales_Person__r", "Sales_Rep_Code__c", dataValue("sales_rep_code")),
      field("Date__c", dataValue("date")),
      field("Comments__c", dataValue("comments"))
  ))
)
```

#### Salesforce: perform an update
```js
update("Patient__c", fields(
  field("Id", dataValue("pathToSalesforceId")),
  field("Name__c", dataValue("patient.first_name")),
  field(...)
));
```

#### Salesforce: Set record type using 'relationship(...)'
```js
create("custom_obj__c", fields(
            relationship("RecordType", "name", dataValue("submission_type"),
            field("name", dataValue("Name"))
            )
      ))
```


#### Salesforce: Set record type using record Type ID
```js
each(
  "$.data.data[*]",
  create("fancy_object__c", fields(
    field("RecordTypeId", "012110000008s19"),
    field("site_size", dataValue("size"))
  ))
)
```

#### Telerivet: Send SMS based on Salesforce workflow alert
```js
send(
  fields(
    field("to_number", dataValue("Envelope.Body.notifications.Notification.sObject.phone_number__c")),
    field("message_type", "sms"),
    field("route_id", ""),
    field("content", function(state) {
      return (
        "Hey there. Your name is ".concat(
          dataValue("Envelope.Body.notifications.Notification.sObject.name__c")(state),
          "."
        )
      )
    })
  )
);
```

#### HTTP: fetch but don't fail!
```js
// =============
// We use "fetchWithErrors(...)" so that when the
// SMS gateway returns an error the run does not "fail".
// It "succeeds" and then delivers that error message
// back to Salesforce with the "Update SMS Status" job.
// =============
fetchWithErrors({
  "getEndpoint": "send_to_contact",
  "query": function(state) {
      return {
        "msisdn": state.data.Envelope.Body.notifications.Notification.sObject.SMS__Phone_Number__c,
        "message": state.data.Envelope.Body.notifications.Notification.sObject.SMS__Message__c,
        "api_key": "some-secret-key"
      }
  },
  "externalId": state.data.Envelope.Body.notifications.Notification.sObject.Id,
  "postUrl": "https://www.openfn.org/inbox/another-secret-key",
})
```

#### Sample DHIS2 events API job:
```js
event(
  fields(
    field("program", "eBAyeGv0exc"),
    field("orgUnit", "DiszpKrYNg8"),
    field("eventDate", dataValue("properties.date")),
    field("status", "COMPLETED"),
    field("storedBy", "admin"),
    field("coordinate", {
      "latitude": "59.8",
      "longitude": "10.9"
    }),
    field("dataValues", function(state) {
      return [
        { "dataElement": "qrur9Dvnyt5", "value": dataValue("properties.prop_a")(state) },
        { "dataElement": "oZg33kd9taw", "value": dataValue("properties.prop_b")(state) },
        { "dataElement": "msodh3rEMJa", "value": dataValue("properties.prop_c")(state) }
      ]
    })
  )
)
```

#### Sample DHIS2 data value sets API job:
```js
dataValueSet(
  fields(
    field("dataSet", "pBOMPrpg1QX"),
    field("orgUnit", "DiszpKrYNg8"),
    field("period", "201401"),
    field("completeData", dataValue("date")),
    field("dataValues", function(state) {
      return [
        { "dataElement": "f7n9E0hX8qk", "value": dataValue("prop_a")(state) },
        { "dataElement": "Ix2HsbDMLea", "value": dataValue("prop_b")(state) },
        { "dataElement": "eY5ehpbEsB7", "value": dataValue("prop_c")(state) }
      ]
    })
  )
)
```

#### sample openMRS expression, creates a person and then a patient
```js
person(
  fields(
    field("gender", "F"),
    field("names", function(state) {
      return [{
        "givenName": dataValue("form.first_name")(state),
        "familyName": dataValue("form.last_name")(state)
      }]
    })
  )
),
patient(
  fields(
    field("person", lastReferenceValue("uuid")),
    field("identifiers", function(state) {
      return [{
        "identifier": "1234",
        "identifierType": "8d79403a-c2cc-11de-8d13-0010c6dffd0f",
        "location": "8d6c993e-c2cc-11de-8d13-0010c6dffd0f",
        "preferred": true
      }]
    })
  )
)
```

#### merge many values into a child path
```js
each(
  merge(
    dataPath("CHILD_ARRAY[*]"),
    fields(
      field("metaId", dataValue("*meta-instance-id*")),
      field("parentId", lastReferenceValue("id"))
    )
  ),
  create(...)
)
```

#### arrayToString
```js
arrayToString(arr, separator_string)
```

#### access an image URL from an ODK submission
```js
// In ODK the image URL is inside an image object...
field("Photo_URL_text__c", dataValue("image.url")),
```

#### alterState (alter state) to make sure data is in an array
```js
// Here, we make sure CommCare gives us an array to use in each(merge(...), ...)
alterState((state) => {
  const idCards = state.data.form.ID_cards_given_to_vendor;
  if (!Array.isArray(idCards)) {
    state.data.form.ID_cards_given_to_vendor = [idCards];
  }
  return state;
});

// Now state has been changed, and we carry on...
each(
  merge(dataPath("form.ID_cards_given_to_vendor[*]"), fields(
    field("Vendor_Id", dataValue("form.ID_vendor")),
    field("form_finished_time", dataValue("form.meta.timeEnd"))
  )),
  upsert("Small_Packet__c", "sp_id__c", fields(
     field("sp_id__c", dataValue("ID_cards_given_to_vendor")),
     relationship("Vendor__r", "Badge_Code__c", dataValue("Vendor_Id")),
     field("Small_Packet_Distribution_Date__c", dataValue("form_finished_time"))
  ))
);
```

### Anonymous Functions (cont.)
Different to [Named Functions](#named-functions), Anoynmous functions are generic pieces of javascript which you can write to suit your needs. Here are some examples of these custom functions:

#### Custom replacer
```js
field(
  "destination__c",
  function(state){
    return dataValue("path_to_data")(state).toString().replace("cats","dogs")
  }
)
```
This will replace all "cats" with "dogs" in the string that lives at `path_to_data`.

> **NOTE:** The JavaScript `replace()` function only replaces the first instance of whatever argument you specify.
If you're looking for a way to replace all instances, we suggest you use a regex like we did in the [example](#custom-concatenation-of-null-values) below.

#### Custom arrayToString
```js
field("target_specie_list__c", function(state) {
  return Array.apply(
    null, sourceValue("$.data.target_specie_list")(state)
  ).join(', ')
}),
```
It will take an array, and concatenate each item into a string with a ", " separator.

#### Custom concatenation
```js
field("ODK_Key__c", function (state) {
  return (
    dataValue("metaId")(state).concat(
      "(", dataValue("index")(state), ")"
    )
  )
})
```
This will concatenate two values.

#### Concatenation of null values
This will concatenate many values, even if one or more are null, writing them to a field called Main_Office_City_c.

```js
...
  field("Main_Office_City__c", function(state) {
    return arrayToString([
      dataValue("Main_Office_City_a")(state) === null ? "" : dataValue("Main_Office_City_a")(state).toString().replace(/-/g, " "),
      dataValue("Main_Office_City_b")(state) === null ? "" : dataValue("Main_Office_City_b")(state).toString().replace(/-/g, " "),
      dataValue("Main_Office_City_c")(state) === null ? "" : dataValue("Main_Office_City_c")(state).toString().replace(/-/g, " "),
      dataValue("Main_Office_City_d")(state) === null ? "" : dataValue("Main_Office_City_d")(state).toString().replace(/-/g, " "),
    ].filter(Boolean), ',')
  })
```
> Notice how this custom function makes use of the **regex** `/-/g` to ensure that all instances are accounted for (g = global search).

#### Custom Nth reference ID
If you ever want to retrieve the FIRST object you created, or the SECOND, or the Nth, for that matter, a function like this will do the trick.

```js
field("parent__c", function(state) {
    return state.references[state.references.length-1].id
  })
```
See how instead of taking the id of the "last" thing that was created in Salesforce, you're taking the id of the 1st thing, or 2nd thing if you replace "length-1" with "length-2".

#### Convert date string to standard ISO date for Salesforce
```js
field("Payment_Date__c", function(state) {
  return new Date(dataValue("payment_date")(state)).toISOString()
})
```
> **NOTE**: The output of this function will always be formatted according to GMT time-zone.

#### Use external ID fields for relationships during a bulk load in Salesforce
```js
array.map(item => {
  return {
    Patient_Name__c: item.fullName,
    'Clinic__r.Unique_Clinic_Identifier__c': item.clinicId,
    'RecordType.Name': item.type,
  };
})
```

#### Bulk upsert with an external ID in salesforce
```js
bulk(
  'Visit_new__c',
  'upsert',
  {
    extIdField: 'commcare_case_id__c',
    failOnError: true,
    allowNoOp: true,
  },
  dataValue('patients')
);
```