# Introduction
> So, OpenFn does what now?

1. A source application sends **messages** to your project’s **inbox** when something happens.

2. **Jobs** will be triggered, based on your **filters**, and use the data in those messages to attempt specific actions in destination systems.

3. The **logs** are recorded so you can see precisely what happened and when and where it happened to take action in the event of a failed attempt—like editing the job or even the source message and trying it again.

OpenFn has harnessed the extreme  stability and scalability of Erlang to coordinate these actions and provide users with email alerts, project management tools, and an online job writing IDE.

In this guide you'll find documentation to help you write filters and jobs, along with explanations of OpenFn's key concepts.

If you have any questions, please don't hesitate to email [admin@openfn.org](mailto:admin@openfn.org).

# Connecting Source Applications
Most modern web applications have a feature that allows you to `push`, `publish`, or `post` data to another URL when a certain **event** takes place. This event could be a form submission, mobile payment, patient registration, or barcode scan submission from a mobile app. The key is that your source application will notify OpenFn when *something happens*.

1. Go to the "settings" or "administration" page for your source app, and look for a `Webhook API`, `Data Forwarding API`, or `Notifications API`. Write to the developers of your application if none is provided out of the box.

2. When setting up forwarding, select to send messages in `JSON` to your project's `inbox URL`. You can find and copy your secure inbox URL by clicking on the "copy URL" link in the bottom-right corner of the project in question on your **[project dashboard](https://www.openfn.org/projects)** page.

3. Soon you'll see new messages arrive in your **[history](https://www.openfn.org/receipts)** page.

Next, learn how to define **filters** that trigger **job** runs.

***

# Filters
Filters are used to trigger jobs. You, as a user, specify the filter **criteria** which determines which messages in your inbox should trigger job runs. This means that if any segment of a message body **matches** the string of `JSON` you gave as a filter, the filter will run and trigger a job (assuming you created one).

The filter criteria takes the form of a string of valid `JSON`. In a SQL query, this string will be used in the WHERE clause, for example:

```sql
SELECT * FROM receipts
  WHERE body::jsonb @>
    '{"Name":"Alex Iwobi"}'::jsonb;
```

## Filter Matching

To illustrate filter matching, refer to the `JSON` strings below. Message "a" will match filter '1', but message "b" will not.

#### filter 1:
```json
{"formID":"patient_registration_v7"}
```

#### message a (MATCH):
```json
{"submissionDate":"2016-01-15", "formID":"patient_registration_v7", "name":"Jack Wilshere", "dob":"1986-05-16", "medications": ["anaphlene","zaradood","morphofast"]}
```

#### message b (NO MATCH):
```json
{"submissionDate":"2016-01-16", "formID":"patient_registration_v8", "name":"Larry Bird", "dob":"1982-03-21", "medications": ["anaphlene","zaradood","morphofast"]}
```

Message 'b' does not include `"formID":"patient_registration_v7"` and will not match filter '1'.

## More Examples and Sample Filters

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

***

# Credentials
Credentials are used to authorize connections to destination systems. In the future, our adaptors will use credentials to fetch meta-data from source and destination applications and make the job writing process easier.

Some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl, host, or ApiUrl. Leave off the final "/" in these Urls:
`https://login.salesforce.com` or `http://demo.openmrs.org/openmrs` or `https://play.dhis2.org`.

Credentials can only be viewed, or edited by a single user — their "owner" (or the person that created that credential). All the collaborators on a particular project can choose those credentials for use when defining a job.

***

# Jobs

## Writing Jobs for OpenFn
`{ like_to_hack_and_smash ? goto '#examples' : read_on}` [Examples](#block-code-examples)

A job defines the specific series of tasks or database actions to be performed when a triggering message is received. In most cases, a job is a series of `create` or `upsert` actions that are run after a message arrives, using data from that message. It could look like this:
```js
create("Patient__c", fields(
  field("Name", dataValue("form.surname")),
  field("Age__c", 7)
))
```
That would create a new `Patient__c` in some other system. The patient's `Name` will be determined by the triggering message (the value inside `form.name`, specifically) and the patient's `Age__c` will *always* be 7. See how we hard coded it?

What you see above is OpenFn's own syntax, and you've got access to dozens of common "helper functions" like `dataValue(path)` and destination specific functions like `create(object,attributes)`. While most cases are covered out-of-the-box, jobs are **evaluated as Javascript**. This means that you can write your own custom, anonymous functions to do whatever your heart desires:
```js
create("Patient__c", fields(
  field("Name", function(state) {
    return Array.apply(
      null, dataValue("patient_names")(state)
    ).join(', ')
  })
  field("Age__c", 7)
```

Here, the patient's name will be a comma separated concatenation of all the values in the `patient_names` array from our source message.

Other than the expression tree, Jobs have certain attributes that must be set:

1. **Filter** - The message filter that will triggers the job.
2. **Adaptor** - The adaptor for the destination system you're connecting to.
2. **Credential** - The credential that will be used to gain access to that destination system.
4. **Active?** - A boolean which determines whether the job runs in real-time when matching messages arrive.

## Named Functions

### language-common
- `fields(list_of_fields)` zips key value pairs into an object. [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L258)
- `field(destination_field_name__c, value)`
- `dataValue(JSON_path)`
- `each(JSON_path, operation(...))`
- `beta.each(JSON_path, operation(...))` // Pre-release, new feature details coming.
- `merge(JSON_path, fields(...)`

### Salesforce
- `create(obj,fields(...))`
- `upsert(obj,extId,fields(...))`
- `relationship(obj,extId,value)`

### dhis2
- `event(...)`
- `dataValueSet(...)`

### OpenMRS
- `person(...)`
- `patient(...)`


**For code block examples of job expressions, go to the [Appendix](#appendix).**

***

# Inbox
Your inbox contains the history of all messages that have passed in to your project, which may or may not have triggered a specific job.

### Messages
Messages are stored payloads or data that were sent via HTTP post to your inbox. They can be viewed in formatted JSON, edited, or manually processed (if they did not match a filter when they were originally delivered.)

To edit a message, click the "pencil and paper" icon next to that receipt. Be careful, as no original copy will be persisted.

***

# Activity
In this section of the portal, you can view a list of all "submissions" - i.e. individual job runs. This list is essentially a compilation of all jobs, messages and credentials flowing through your OpenFn account towards your destination system(s).

### Submissions
Submissions are attempts made on a destination system by running a receipt through a Job Description. Submissions can be viewed and re-processed. Each submission has a `success`, `started_at`, `finsihed_at`, `job_description_id`, and `receipt_id` attribute. `Started_at` and `finished_at` are the timestamps when the submission began and ended.

> **Note:** Some submissions may take up to ten seconds, particularly if they are performing multiple actions in a destination system. They will appear as red if they have failed. In the case of failure, refer to our [Troubleshooting](#troubleshooting) section below.

***

# Troubleshooting

> What happens if my survey data from ODK needs to link to existing records in my Salesforce system but a respondent enters or selects an invalid `external ID`?

Great question, and don't worry, it happens all the time. Assuming you've already taken all possible measures to either pre-load external IDs in your ODK form or use more human-proof IDs (like barcodes and fingerprints) here's the flow of work:

1. Read the email, and inspect the reason for failure.

2. 99% of failed submissions on OpenFn are due to `value mismatches`. The *collected* `id` in ODK doesn't match the *expected* `id` in Salesforce. You must now chose to either:

      A. Edit the source `id` in your `receipt` & retry the attempt.

      B. Edit the related `id` in your destination system & retry the attempt.

      C. Ignore the attempt—this source data will never reach your destination system.

Editing data in your destination system can be done through that system's interface. Many tools that act as `sources` (like ODK) do not allow for easy editing and re-submission of data. You can use OpenFn to edit the source data before retrying the attempt.

## Common Error Messages
The most common error messages with English explanations are:
+ `DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0` - The insert is blocked because you are attempting to create a new record with a unique field with the same value as an existing record.
+ `Required value missing`
+ `ExternalId not found`

***

# DIY
OpenFn's core ETL tools are all open-source, and here we will explain how those tools can be used to perform ETL operations from your command line, or wrap them together in your own hosted service.

> **ETL** = Extracting, Transforming and Loading of data

To get started, `git clone` the following:
1. [fn-lang](https://github.com/OpenFn/fn-lang)
2. [language-common](https://github.com/OpenFn/language-common)
3. [language-xxx](https://github.com/OpenFn/language-common) (an adaptor of your choice, from github.com/OpenFn)

## fn-lang (diesl)
fn-lang is a coordination tool that takes a job expression, a JSON payload, an adaptor, and a configuration file, and runs the "TL" part of "ETL" on command. It can be run from a command line, or built into a hosted web service.

#### Run fn-lang from the command line with the following:
`~/fn-lang$ lib/cli.js execute -l salesforce/FakeAdaptor -e tmp/expression.js -c tmp/config.json -d tmp/receipt.json`

> **Command Explained:** Execute an expression (-e) and load on some data (-d) using a language-pack (-l) and destination configuration (-c)

## language-common
`language-common` provides basic data manipulation functionality like `each`, `field`, and `toArray`.

## language-xxx
`language-xxx` is a "destination adaptor" that knows how to connect to the system in question and provides system specific operations, like `relationship` or `upsert`.

***

# Appendix

## Block code examples

> Below you can find some examples of block code for different functions and data handling contexts.

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

#### Salesforce: Set record type using 'relationship(...)'
```js
create("custom_obj__c", fields(
            relationship("RecordType", "name", dataValue("submission_type"),
            field("name", dataValue("Name"))
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

### Custom concatenation of null values

```js
        field("Main_Office_City__c", function(state) {
          return arrayToString([
            dataValue("Main_Office_City_a")(state) === null ? "" : dataValue("Main_Office_City_a")(state).toString().replace(/-/g, " "),
            dataValue("Main_Office_City_b")(state) === null ? "" : dataValue("Main_Office_City_b")(state).toString().replace(/-/g, " "),
            dataValue("Main_Office_City_c")(state) === null ? "" : dataValue("Main_Office_City_c")(state).toString().replace(/-/g, " "),
            dataValue("Main_Office_City_d")(state) === null ? "" : dataValue("Main_Office_City_d")(state).toString().replace(/-/g, " "),
          ].filter(Boolean), ',')
        }),
```

This will concatenate many values, even if one or more are null, writing them to a field called Main_Office_City_c.

#### Custom Nth reference ID
```js
field("parent__c", function(state) {
    return state.references[state.references.length-1].id
  })
```
If you ever want to retrieve the FIRST object you created, or the SECOND, or the Nth, for that matter, a function like this will do the trick. See how instead of taking the id of the "last" thing that was created in Salesforce, you're taking the id of the 1st thing, or 2nd thing if you replace "length-1" with "length-2".

#### Convert date string to standard ISO date for Salesforce
```js
field("Payment_Date__c", function(state) {
  return new Date(dataValue("payment_date")(state)).toISOString()
})
```

***

## Connecting up source applications

### Kobo
1. To push data from Kobo, users must click the projects icon on their left-side nav bar. It's in the shape of a globe.
2. Once selecting a project, the `Project Settings` link will appear at the top left side of the screen. Click it to open the Project Settings page.
3. In the bottom left pane of the project settings page, users must paste their inbox URL from OpenFn into the `Rest Services` `Service URL` input area and select `JSON Post` as the `Service Name`.
4. Click `Add Service` to start forwarding new Kobo submissions to OpenFn.org.

To test to integration, add a submission manually using the `enter data in browser` button. Head back to your history page at OpenFn to view the newly submitted data and write a new `filter` and `job` to map your Kobo data to any destination system on OpenFn.

#### More help
1. Help writing [filters](#filters)
2. Help writing [jobs](#jobs)
3. The shape of the data from Kobo

Here's a sample post from Kobo REST service. Note that questions inside groups are prefixed with `groupname/` rather than sitting inside a group object like ODK:
```json
{
  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "group1/name": "twenty",
  "group1/age": "19",
  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",
  "first_q": "hello",
  "final_q": "why not?",
  "_xform_id_string": "groups",
  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "_userform_id": "taylordowns2000_groups",
  "_tags": [],
  "_submitted_by": null,
  "_submission_time": "2016-04-22T06:38:20",
  "_status": "submitted_via_web",
  "_notes": [],
  "_id": 889409,
  "_geolocation": [
    null,
    null
  ],
  "_bamboo_dataset_id": "",
  ```

  ***
  "_attachments": []
}
