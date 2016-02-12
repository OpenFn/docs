# OpenFn v2 (beta)
Leading NGOs find & connect technologies to amplify their impact with OpenFn.
Technology isn't the answer, but it shouldn't be the problem. From household survey data in northern India, to attendance recorded at women's groups in Kenya, we are moving the data that makes impact-first organizations more efficient and effective.

OpenFn allows non-technical users to quickly and easily define "jobs" that move data between essential technologies automatically. It's complex data integration, realized with a point-and-click interface.

## Core Documentation
This section will cover basic usage of the integration platform.

### Jobs

A job defines the specific tasks or database actions to be performed on a matching receipt. In most cases, a job is a series of `create` or `upsert` actions that are run after a matching receipt arrives. The actions that can be performed for a given destination system are determined by that system's adaptor. Salesforce's adaptor, for example, has `create`, `upsert`, and `lookup`, actions.

Other than the expression tree, JDs have certain attributes that must be set:

1. "Inbox" - The inbox that a JD applies to.
2. "Trigger" - The receipt filter that triggers a JD.
3. "Destination App" - 
4. "Destination Credential" - The credential that will be used to gain access to a destination system, both for finding destination object and field definitions and for performing the actions specified in the expression tree.
5. "Source App" - 
5. "Source Credential" - The credential that will be used to fetch form definitions or object descriptions from your source application.
6. "Expression" - See below...
7. "Autoprocess?" - Receipts matching the trigger criteria will always be queued against this job description, but they will not be submitted to destination systems automatically unless this is set to 'true'.

#### Expressions
The following job expression will take a matching receipt and use data from that receipt to upsert a "Patient__c" record in Salesforce and create multiple new "Patient_Visit__c" (child to patient) records:

```js
upsert("Patient__c", "Patient_Id__c", fields(
  field("Patient_Id__c", dataValue("form.patient_ID")),
  lookup("Nurse__r", "Nurse_ID_code__c", dataValue("form.staff_id")),
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

#### Accessing the "data array" from Open Data Kit
Notice how we use "each" to get data from each item inside the "data array" in ODK.
```
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

#### Sample DHIS2 job:
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

##### Functions(arguments)
- `each(JSON_path, operation(...))`
- `create(object__c, fields(...))`
- `upsert(object__c, external_id__c, fields(...))`
- `fields(...)`
- `field(destination_field_name__c, value)`
- `lookup(destination_relationship_name__r, external_id__c, value)`
- `sourceValue(JSON_path)`



Notice that 4 specific language-salesforce actions are being invoked: create, upsert, field, and lookup. Lookup takes a relationship name, an external ID, and a sourceValue.

### Credentials

Credentials are used to fetch metadata (form definitions and/or object descriptions) from your applications when creating a job description (JD) and used to perform database actions in your destination application when a receipt is used to generate a submission—or an attempt at a database operation in a destination application. They are a single JSON object, soon to be replaced with a flexible form.

Salesforce.com requires the following key:value pairs:
```json
{"loginUrl": "https://login.salesforce.com", "username": "yourname@yourdomain.com", "password": "yourpass", "securityToken": "yOurVerYLonGsECURityToKEn"}
```

### Filters

Receipt Filters are used to determine which receipts are matched against which JDs for processing. A receipt filter, in it's most basic form, is a string of JSON that is `inlcuded` in the receipt payload. If a JD uses the following receipt as it's `trigger`, receipt "A" will be processed by that JD, but receipt "B" will not:
#### Example Filter:
```json
{"formID":"patient_registration_v7"}
```

#### Receipt A:
```json
{"submissionDate":"2016-01-15", "formID":"patient_registration_v7", "name":"Michael Jordan", "dob":"1986-05-16", "medications": ["anaphlene","zaradood","morphofast"]}
```

#### Receipt B
```json
{"submissionDate":"2016-01-16", "formID":"patient_registration_v8", "name":"Larry Bird", "dob":"1982-03-21", "medications": ["anaphlene","zaradood","morphofast"]}
```

Since Receipt A `INCLUDES` `"formID":"patient_registration_v8"` it will be processed by our fictional job description.

### Receipts

Receipts are stored payloads or messages that were sent via HTTP post to your inbox. They can be viewed in formatted JSON, edited, or manually processed (if they did not match a filter when they were originally delivered.)

To edit a receipt, click the "pencil and paper" icon next to that receipt. Be careful, as no original copy will be persisted. (TODO: We'd like to save the original *and* the copy.) Once a receipt is edited, it may be re-submitted manually from the receipt or from the original submission.

### Submissions

Submissions are attempts made on a destination system by running a receipt through a Job Description.

Submissions can be viewed and re-processed. Each submission has a `success`, `started_at`, `finsihed_at`, `job_description_id`, and `receipt_id` attribute. Started at and finished at are the timestamps when the submission began and ended. Note that some submissions may take up to ten seconds, particularly if they are performing multiple actions in a destination system.

They will appear as red if they have failed.

## Appendix

### Error messages
The most common error messages with English explanations are:
+ `DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0` - The insert is blocked because you are attempting to create a new record with a unique field with the same value as an existing record.
+ `Required value missing`
+ `ExternalId not found`
+ `something else`

If you come across a new error message, please post it here!

### Advanced Use of the Expression Tree

This section covers all existing functionality, and explains how standard Javascript can be used to modify source JSON data. WIP...

### Known bugs

Please refer to our current [bug list](https://github.com/OpenFn/core/issues?q=is%3Aopen+is%3Aissue+label%3Abug) for all know bugs.

### Contribution

We are always looking for help. See Stu's guide to contributing below. WIP...
