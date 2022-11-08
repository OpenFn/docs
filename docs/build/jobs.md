---
title: Introduction to Jobs
---

A job defines the specific series of "operations" (think: tasks or database
actions) to be performed when a triggering message is received (even-based),
another run finishes (flow- or catch-based) or a pre-scheduled (and recurring)
time is reached.

## The properties of a job

- `Name` - a human-readable name describing the series of operations
- `Project` - the project the job belongs to
- `Trigger` - the trigger that is used to automatically initiate a run of the
  job
- `Adaptor` - the adaptor that is used to provide tool-specific functionality
  for this job (e.g., `language-dhis2` or `language-commcare`)
- `Auto-process?` - a true/false switch which controls whether the trigger
  should be used to automatically run this job when its criteria are met
- `Expression` - the job "script" itself; a sequence of operations

## Adaptors

We've got a whole section on creating new
[Adaptors](/adaptors), but the critical thing to be aware of
when writing a job is that you've got to choose an **adaptor**, and an **adaptor
version**.

All of the discussion below of helper functions like `create` or `findPatient`
requires some understanding of adaptors. When you run a job, you're borrowing a
layer of functionality that's been built to connect with some specific API, type
of API, or database.

For example, `create` means one thing in `language-salesforce` and another thing
entirely in `language-dhis2`. For this reason, before you can begin writing a
job you have to decide which `adaptor` to work with.

### Adaptor Versions

Adaptors change over time. They're open source, and we encourage as much
contribution as possible—releasing new versions for use on OpenFn.org as soon as
they pass our security reviews. New features may be added and bugs may be fixed,
but in order to make sure that an existing integration is not broken, we
recommend that you select a specific version (rather than using the
"auto-upgrade" feature) when you choose an adaptor. The highest released version
is the default choice here.

:::tip

The _first 4 lines_ in the log of any run on OpenFn will tell you what adaptor
you're running. (As well as the version of core and NodeJs) This is incredibly
important, particularly if you're trying to troubleshoot jobs in various
environments (like your own shell, OpenFn.org, OpenFn/microservice, etc.).

:::

Pay careful attention to which `version` you're using to write a job. Consider
the following run logs:

```sh
╭───────────────────────────────────────────────╮
│ ◲ ◱  @openfn/core#v1.3.12 (Node.js v12.20.1)  │
│ ◳ ◰             @openfn/language-http#v2.4.15 │
╰───────────────────────────────────────────────╯
...more logs here...

Finished.
```

Note that here, OpenFn/core version `1.3.12` is running on Node.js `12.20.1` and
using `@openfn/language-http#v2.4.15` which might have very different helper
functions from `@openfn/language-http#v3.1.5`

:::info

See [the npm section](/adaptors#install-on-platform-via-npm)
on the adaptors docs page to learn how to install an adaptor from `npm` while
using `platform`.

:::

### Upgrading to newer adaptor versions

While it may be beneficial to upgrade as part of your routine maintenance, these
upgrades should be carefully tested. Most often, customers upgrade to a new
adaptor version for an existing job when they are making business-drives changes
to that job. Some business-driven changes may actually _require_ upgrading the
version in order to use a new feature from the adaptor. Even if those changes
don't require and upgrade, if the technical team must spend time testing
job-specific changes anyway, it may be an ideal opportunity to test also test an
upgrade.

Adaptors follow [SEMVER](https://semver.org/) so you can be reasonably assured
that upgrading from `x.1.z` to `x.2.z` will not lead to existing job code
failing, but an upgrade from `3.y.z` to `4.y.z` may—in SEMVER _major_ upgrades
(those that change the first number in the `x.y.z` version number) have
"breaking" or "non-backwards compatible" changes.

## Composing job expressions

In most cases, a job expression is a series of `create` or `upsert` actions that
are run after a message arrives, using data from that message. It could look
like this:

### A basic expression

```js
create(
  'Patient__c',
  fields(
    field('Name', dataValue('form.surname')),
    field('Other Names', dataValue('form.firstName')),
    field('Age__c', dataValue('form.ageInYears')),
    field('Is_Enrolled__c', true),
    field('Enrollment_Status__c', 3)
  )
);
```

That would create a new `Patient__c` in some other system. The patient's `Name`
will be determined by the triggering message (the value inside `form.surname`,
specifically) and the patient's `Is_Enrolled__c` will _always_ be `true`. See
how we hard coded it?

What you see above is OpenFn's own syntax, and you've got access to dozens of
common "helper functions" like `dataValue(path)` and destination specific
functions like `create(object,attributes)`. While most cases are covered
out-of-the-box, jobs are **evaluated as Javascript**. This means that you can
write your own custom, anonymous functions to do whatever your heart desires:

### dataValue

The most commonly used "helper function" is `dataValue(...)`. This function
takes a single argument—the _path_ to some data that you're trying to access
inside the message that has triggered a particular run. In the above example,
you'll notice that `Is_Enrolled__c` is _always_ set to `true`, but `Name` will
change for each message that triggers the running of this job. It's set to
`dataValue('form.surname')` which means it will set `Name` to whatever value is
present at `state.data.form.surname` for the triggering message. It might be Bob
for one message, and Alice for another.

:::note

Note that for message-triggered jobs, `state` will always have it's `data` key
(i.e., `state.data`) set to the body of the triggering message (aka HTTP
request).

I.e., `dataValue('some.path') === state.data.some.path`, as evaluated at the
time that the operation (`create` in the above expression) is executed.

:::

### An expression with custom Javascript

```js
create(
  'Patient__c',
  fields(
    field('Name', state => {
      console.log('Manipulate state to get your desired output.');
      return Array.apply(null, state.data.form.names).join(', ');
    }),
    field('Age__c', 7)
  )
);
```

Here, the patient's name will be a comma separated concatenation of all the
values in the `patient_names` array from our source message.

## Available Javascript Globals

For security reasons, users start with access to the following standard
Javascript globals, and can request more by opening an issue on Github:

- [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`console`](https://nodejs.org/api/console.html)
- [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Examples of adaptor-specific functions

**N.B.: This is just a sample.** There are lots more available in the
language-packs.

### language-common

- `field('destination_field_name__c', 'value')` Returns a key, value pair in an
  array.
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L248)
- `fields(list_of_fields)` zips key value pairs into an object.
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L258)
- `dataValue('JSON_path')` Picks out a single value from source data.
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L71)
- `each(JSON_path, operation(...))` Scopes an array of data based on a JSONPath
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L194).
  See beta.each when using multiple each()'s in an expression.
- `each(merge(dataPath("CHILD_ARRAY[*]"),fields(field("metaId", dataValue("*meta-instance-id*")),field("parentId", lastReferenceValue("id")))), create(...))`
  merges data into an array then creates for each item in the array
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L272)
- `lastReferenceValue('id')` gets the sfID of the last item created
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L96-L100)
- `function(state){return state.references[state.references.length-N].id})` gets
  the sfID of the nth item created

#### each()

Read more about each here: [The each(...) operation](/documentation/jobs/each)

```js
each(
  dataPath('csvData[*]'),
  upsertTEI(
    'aX5hD4qUpRW', //piirs uid
    {
      trackedEntityType: 'bsDL4dvl2ni',
      orgUnit: dataValue('OrgUnit'),
      attributes: [
        {
          attribute: 'aX5hD4qUpRW',
          value: dataValue('aX5hD4qUpRW'),
        },
        {
          attribute: 'MxQPuS9G7hh',
          value: dataValue('MxQPuS9G7hh'),
        },
      ],
    },
    { strict: false }
  )
);
```

#### beta.each

```js
beta.each(JSON_path, operation(...))
```

Scopes an array of data based on a JSONPath but then returns to the state it was
given upon completion
[(source)](https://github.com/OpenFn/language-common/blob/master/src/beta.js#L44).
This is necessary if you string multiple `each(...)` functions together in-line
in the same expression. (E.g., Given data which has multiple separate 'repeat
groups' in a form which are rendered as arrays, you want to create new records
for each item inside the first repeat group, then _RETURN TO THE TOP LEVEL_ of
the data, and then create new records for each item in the second repeat group.
Using `beta.each(...)` lets you enter the first array, create your records, then
return to the top level and be able to enter the second array.

### Salesforce

- `create("DEST_OBJECT_NAME__C", fields(...))` Create a new object. Takes 2
  parameters: An object and attributes.
  [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L42-L63)
- `upsert("DEST_OBJECT_NAME__C", "DEST_OBJECT_EXTERNAL_ID__C", fields(...))`
  Creates or updates an object. Takes 3 paraneters: An object, an ID field and
  attributes.
  [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L65-L80)
- `relationship("DEST_RELATIONSHIP_NAME__r", "EXTERNAL_ID_ON_RELATED_OBJECT__C", "SOURCE_DATA_OR_VALUE")`
  Adds a lookup or 'dome insert' to a record.
  [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/sourceHelpers.js#L21-L40)

### dhis2

- `event(...)` Creates an event.
  [(source)](https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L31-L60)
- `dataValueSet(...)` Send data values using the dataValueSets resource
  [(source)](https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L62-L82)

### OpenMRS

- `person(...)` Takes a payload of data to create a person
  [(source)](https://github.com/OpenFn/language-openmrs/blob/master/src/Adaptor.js#L31-L60)
- `patient(...)` Takes a payload of data to create a patient
  [(source)](https://github.com/OpenFn/language-openmrs/blob/master/src/Adaptor.js#L62-L90)

## Snippets and samples

Below you can find some examples of block code for different functions and data
handling contexts.

### Job expression (for CommCare to SF)

The following job expression will take a matching receipt and use data from that
receipt to upsert a `Patient__c` record in Salesforce and create multiple new
`Patient_Visit__c` (child to Patient) records.

```js
upsert(
  'Patient__c',
  'Patient_Id__c',
  fields(
    field('Patient_Id__c', dataValue('form.patient_ID')),
    relationship('Nurse__r', 'Nurse_ID_code__c', dataValue('form.staff_id')),
    field('Phone_Number__c', dataValue('form.mobile_phone'))
  )
),
  each(
    join('$.data.form.visits[*]', '$.references[0].id', 'Id'),
    create(
      'Visit__c',
      fields(
        field('Patient__c', dataValue('Id')),
        field('Date__c', dataValue('date')),
        field('Reason__c', dataValue('why_did_they_see_doctor'))
      )
    )
  );
```

### Accessing the "data array" in Open Data Kit submissions

Notice how we use "each" to get data from each item inside the "data array" in
ODK.

```js
each(
  '$.data.data[*]',
  create(
    'ODK_Submission__c',
    fields(
      field('Site_School_ID_Number__c', dataValue('school')),
      field('Date_Completed__c', dataValue('date')),
      field('comments__c', dataValue('comments')),
      field('ODK_Key__c', dataValue('*meta-instance-id*'))
    )
  )
);
```

### ODK to Salesforce: create parent record with many children from parent data

Here, the user brings `time_end` and `parentId` onto the line items from the
parent object.

```js
each(
  dataPath('data[*]'),
  combine(
    create(
      'transaction__c',
      fields(
        field('Transaction_Date__c', dataValue('today')),
        relationship(
          'Person_Responsible__r',
          'Staff_ID_Code__c',
          dataValue('person_code')
        ),
        field('metainstanceid__c', dataValue('*meta-instance-id*'))
      )
    ),
    each(
      merge(
        dataPath('line_items[*]'),
        fields(
          field('end', dataValue('time_end')),
          field('parentId', lastReferenceValue('id'))
        )
      ),
      create(
        'line_item__c',
        fields(
          field('transaction__c', dataValue('parentId')),
          field('Barcode__c', dataValue('product_barcode')),
          field('ODK_Form_Completed__c', dataValue('end'))
        )
      )
    )
  )
);
```

> **NB - there was a known bug with the `combine` function which has been
> resolved. `combine` can be used to combine two operations into one and is
> commonly used to run multiple `create`'s inside an `each(path, operation)`.
> The source code for combine can be found here:
> [language-common: combine](https://github.com/OpenFn/language-common/blob/master/src/index.js#L204-L222)**

### Create many child records WITHOUT a repeat group in ODK

```js
beta.each(
  '$.data.data[*]',
  upsert(
    'Outlet__c',
    'Outlet_Code__c',
    fields(
      field('Outlet_Code__c', dataValue('outlet_code')),
      field('Location__Latitude__s', dataValue('gps:Latitude')),
      field('Location__Longitude__s', dataValue('gps:Longitude'))
    )
  )
),
  beta.each(
    '$.data.data[*]',
    upsert(
      'Outlet_Call__c',
      'Invoice_Number__c',
      fields(
        field('Invoice_Number__c', dataValue('invoice_number')),
        relationship('Outlet__r', 'Outlet_Code__c', dataValue('outlet_code')),
        relationship('RecordType', 'name', 'No Call Card'),
        field('Trip__c', 'a0FN0000008jPue'),
        relationship(
          'Sales_Person__r',
          'Sales_Rep_Code__c',
          dataValue('sales_rep_code')
        ),
        field('Date__c', dataValue('date')),
        field('Comments__c', dataValue('comments'))
      )
    )
  );
```

### Salesforce: perform an update

```js
update("Patient__c", fields(
  field("Id", dataValue("pathToSalesforceId")),
  field("Name__c", dataValue("patient.first_name")),
  field(...)
));
```

### Salesforce: Set record type using 'relationship(...)'

```js
create(
  'custom_obj__c',
  fields(
    relationship(
      'RecordType',
      'name',
      dataValue('submission_type'),
      field('name', dataValue('Name'))
    )
  )
);
```

### Salesforce: Set record type using record Type ID

```js
each(
  '$.data.data[*]',
  create(
    'fancy_object__c',
    fields(
      field('RecordTypeId', '012110000008s19'),
      field('site_size', dataValue('size'))
    )
  )
);
```

### Telerivet: Send SMS based on Salesforce workflow alert

```js
send(
  fields(
    field(
      'to_number',
      dataValue(
        'Envelope.Body.notifications.Notification.sObject.phone_number__c'
      )
    ),
    field('message_type', 'sms'),
    field('route_id', ''),
    field('content', function (state) {
      return 'Hey there. Your name is '.concat(
        dataValue('Envelope.Body.notifications.Notification.sObject.name__c')(
          state
        ),
        '.'
      );
    })
  )
);
```

### HTTP: fetch but don't fail!

```js
// =============
// We use "fetchWithErrors(...)" so that when the
// SMS gateway returns an error the run does not "fail".
// It "succeeds" and then delivers that error message
// back to Salesforce with the "Update SMS Status" job.
// =============
fetchWithErrors({
  getEndpoint: 'send_to_contact',
  query: function (state) {
    return {
      msisdn:
        state.data.Envelope.Body.notifications.Notification.sObject
          .SMS__Phone_Number__c,
      message:
        state.data.Envelope.Body.notifications.Notification.sObject
          .SMS__Message__c,
      api_key: 'some-secret-key',
    };
  },
  externalId: state.data.Envelope.Body.notifications.Notification.sObject.Id,
  postUrl: 'https://www.openfn.org/inbox/another-secret-key',
});
```

### Sample DHIS2 events API job:

```js
event(
  fields(
    field('program', 'eBAyeGv0exc'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('eventDate', dataValue('properties.date')),
    field('status', 'COMPLETED'),
    field('storedBy', 'admin'),
    field('coordinate', {
      latitude: '59.8',
      longitude: '10.9',
    }),
    field('dataValues', function (state) {
      return [
        {
          dataElement: 'qrur9Dvnyt5',
          value: dataValue('properties.prop_a')(state),
        },
        {
          dataElement: 'oZg33kd9taw',
          value: dataValue('properties.prop_b')(state),
        },
        {
          dataElement: 'msodh3rEMJa',
          value: dataValue('properties.prop_c')(state),
        },
      ];
    })
  )
);
```

### Sample DHIS2 data value sets API job:

```js
dataValueSet(
  fields(
    field('dataSet', 'pBOMPrpg1QX'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('period', '201401'),
    field('completeData', dataValue('date')),
    field('dataValues', function (state) {
      return [
        { dataElement: 'f7n9E0hX8qk', value: dataValue('prop_a')(state) },
        { dataElement: 'Ix2HsbDMLea', value: dataValue('prop_b')(state) },
        { dataElement: 'eY5ehpbEsB7', value: dataValue('prop_c')(state) },
      ];
    })
  )
);
```

### sample openMRS expression, creates a person and then a patient

```js
person(
  fields(
    field('gender', 'F'),
    field('names', function (state) {
      return [
        {
          givenName: dataValue('form.first_name')(state),
          familyName: dataValue('form.last_name')(state),
        },
      ];
    })
  )
),
  patient(
    fields(
      field('person', lastReferenceValue('uuid')),
      field('identifiers', function (state) {
        return [
          {
            identifier: '1234',
            identifierType: '8d79403a-c2cc-11de-8d13-0010c6dffd0f',
            location: '8d6c993e-c2cc-11de-8d13-0010c6dffd0f',
            preferred: true,
          },
        ];
      })
    )
  );
```

### merge many values into a child path

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

### arrayToString

```js
arrayToString(arr, separator_string);
```

### access an image URL from an ODK submission

```js
// In ODK the image URL is inside an image object...
field("Photo_URL_text__c", dataValue("image.url")),
```

### alterState (alter state) to make sure data is in an array

```js
// Here, we make sure CommCare gives us an array to use in each(merge(...), ...)
alterState(state => {
  const idCards = state.data.form.ID_cards_given_to_vendor;
  if (!Array.isArray(idCards)) {
    state.data.form.ID_cards_given_to_vendor = [idCards];
  }
  return state;
});

// Now state has been changed, and we carry on...
each(
  merge(
    dataPath('form.ID_cards_given_to_vendor[*]'),
    fields(
      field('Vendor_Id', dataValue('form.ID_vendor')),
      field('form_finished_time', dataValue('form.meta.timeEnd'))
    )
  ),
  upsert(
    'Small_Packet__c',
    'sp_id__c',
    fields(
      field('sp_id__c', dataValue('ID_cards_given_to_vendor')),
      relationship('Vendor__r', 'Badge_Code__c', dataValue('Vendor_Id')),
      field(
        'Small_Packet_Distribution_Date__c',
        dataValue('form_finished_time')
      )
    )
  )
);
```

### Login in to a server with a custom SSL Certificate

This snippet describes how you would connect to a secure server ignoring SSL
certificate verification. Set `strictSSL: false` in the options argument of the
`post` function in `language-http`.

```js
post(
  `${state.configuration.url}/${path}`,
  {
    headers: { 'content-type': 'application/json' },
    body: {
      email: 'Luka',
      password: 'somethingSecret',
    },
    strictSSL: false,
  },
  callback
);
```

## Anonymous Functions

Different to [Named Functions](#examples-of-adaptor-specific-functions),
Anonymous functions are generic pieces of javascript which you can write to suit
your needs. Here are some examples of these custom functions:

### Custom replacer

```js
field('destination__c', state => {
  console.log(something);
  return dataValue('path_to_data')(state).toString().replace('cats', 'dogs');
});
```

This will replace all "cats" with "dogs" in the string that lives at
`path_to_data`.

> **NOTE:** The JavaScript `replace()` function only replaces the first instance
> of whatever argument you specify. If you're looking for a way to replace all
> instances, we suggest you use a regex like we did in the
> [example](#custom-concatenation-of-null-values) below.

### Custom arrayToString

```js
field("target_specie_list__c", function(state) {
  return Array.apply(
    null, sourceValue("$.data.target_specie_list")(state)
  ).join(', ')
}),
```

It will take an array, and concatenate each item into a string with a ", "
separator.

### Custom concatenation

```js
field('ODK_Key__c', function (state) {
  return dataValue('metaId')(state).concat('(', dataValue('index')(state), ')');
});
```

This will concatenate two values.

### Concatenation of null values

This will concatenate many values, even if one or more are null, writing them to
a field called Main_Office_City_c.

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

> Notice how this custom function makes use of the **regex** `/-/g` to ensure
> that all instances are accounted for (g = global search).

### Custom Nth reference ID

If you ever want to retrieve the FIRST object you created, or the SECOND, or the
Nth, for that matter, a function like this will do the trick.

```js
field('parent__c', function (state) {
  return state.references[state.references.length - 1].id;
});
```

See how instead of taking the id of the "last" thing that was created in
Salesforce, you're taking the id of the 1st thing, or 2nd thing if you replace
"length-1" with "length-2".

### Convert date string to standard ISO date for Salesforce

```js
field('Payment_Date__c', function (state) {
  return new Date(dataValue('payment_date')(state)).toISOString();
});
```

> **NOTE**: The output of this function will always be formatted according to
> GMT time-zone.

### Use external ID fields for relationships during a bulk load in Salesforce

```js
array.map(item => {
  return {
    Patient_Name__c: item.fullName,
    'Account.Account_External_ID__c': item.account
    'Clinic__r.Unique_Clinic_Identifier__c': item.clinicId,
    'RecordType.Name': item.type,
  };
});
```

### Bulk upsert with an external ID in salesforce

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
