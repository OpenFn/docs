---
title: Job Code Examples
sidebar_label: Job Examples
---

Below you can find some code blocks for different functions and data handling
contexts to use in your Jobs.

:::tip

For example Jobs written by the OpenFn core team and other users, check out the
[Library](/adaptors/library) or other project repositories under
[GitHub.com/OpenFn](https://github.com/OpenFn).

:::

:::info Questions?

If you have any job-writing questions, ask on
[Community](https://community.openfn.org) to seek assistance from the OpenFn
core team and other implementers.

:::

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
fn(state => {
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
