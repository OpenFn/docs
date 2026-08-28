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
upsert('Patient__c', 'Patient_Id__c', state => ({
  Patient_Id__c: state.data.form.patient_ID,
  Nurse__r: { Nurse_ID_code__c: state.data.form.staff_id },
  Phone_Number__c: state.data.form.mobile_phone,
}));

each(
  '$.data.form.visits[*]',
  create('Visit__c', state => ({
    Patient__c: lastReferenceValue('id')(state),
    Date__c: state.data.date,
    Reason__c: state.data.why_did_they_see_doctor,
  }))
);
```

### Accessing the "data array" in Open Data Kit submissions

Notice how we use "each" to get data from each item inside the "data array" in
ODK.

```js
each(
  '$.data.data[*]',
  create('ODK_Submission__c', state => ({
    Site_School_ID_Number__c: state.data.school,
    Date_Completed__c: state.data.date,
    comments__c: state.data.comments,
    ODK_Key__c: state.data['*meta-instance-id*'],
  }))
);
```

### ODK to Salesforce: create parent record with many children from parent data

Here, the user brings `time_end` and `parentId` onto the line items from the
parent object.

```js
each('$.data[*]', fn(async state => {
  const record = state.data;

  // Create the parent transaction record
  state = await create('transaction__c', {
    Transaction_Date__c: record.today,
    Person_Responsible__r: { Staff_ID_Code__c: record.person_code },
    metainstanceid__c: record['*meta-instance-id*'],
  })(state);

  const transactionId = lastReferenceValue('id')(state);

  // Create each child line item linked to the parent
  for (const lineItem of record.line_items) {
    state = await create('line_item__c', {
      transaction__c: transactionId,
      Barcode__c: lineItem.product_barcode,
      ODK_Form_Completed__c: record.time_end,
    })(state);
  }

  return state;
}));
```

### Create many child records WITHOUT a repeat group in ODK

```js
each(
  '$.data.data[*]',
  upsert('Outlet__c', 'Outlet_Code__c', state => ({
    Outlet_Code__c: state.data.outlet_code,
    Location__Latitude__s: state.data['gps:Latitude'],
    Location__Longitude__s: state.data['gps:Longitude'],
  }))
);

each(
  '$.data.data[*]',
  upsert('Outlet_Call__c', 'Invoice_Number__c', state => ({
    Invoice_Number__c: state.data.invoice_number,
    Outlet__r: { Outlet_Code__c: state.data.outlet_code },
    RecordType: { name: 'No Call Card' },
    Trip__c: 'a0FN0000008jPue',
    Sales_Person__r: { Sales_Rep_Code__c: state.data.sales_rep_code },
    Date__c: state.data.date,
    Comments__c: state.data.comments,
  }))
);
```

### Salesforce: perform an update

```js
update('Patient__c', state => ({
  Id: state.data.pathToSalesforceId,
  Name__c: state.data.patient.first_name,
}));
```

### Salesforce: Set record type using a relationship

```js
create('custom_obj__c', state => ({
  RecordType: { name: state.data.submission_type },
  Name: state.data.Name,
}));
```

### Salesforce: Set record type using record Type ID

```js
each(
  '$.data.data[*]',
  create('fancy_object__c', state => ({
    RecordTypeId: '012110000008s19',
    site_size: state.data.size,
  }))
);
```

### HTTP: Send SMS via Telerivet based on Salesforce workflow alert

```js
post('/messages/send', state => ({
  to_number:
    state.data.Envelope.Body.notifications.Notification.sObject
      .phone_number__c,
  message_type: 'sms',
  route_id: '',
  content: `Hey there. Your name is ${
    state.data.Envelope.Body.notifications.Notification.sObject.name__c
  }.`,
}));
```

### HTTP: post but don't fail!

```js
// Use .catch() so that when the SMS gateway returns an error the run does not
// "fail". The error is captured in state for the next job to handle.
post('/send_to_contact', state => ({
  msisdn:
    state.data.Envelope.Body.notifications.Notification.sObject
      .SMS__Phone_Number__c,
  message:
    state.data.Envelope.Body.notifications.Notification.sObject
      .SMS__Message__c,
})).catch(err => {
  console.log('SMS send failed:', err.message);
  state.smsError = err.message;
  return state;
});
```

### Sample DHIS2 events API job:

```js
create('events', state => ({
  program: 'eBAyeGv0exc',
  orgUnit: 'DiszpKrYNg8',
  occurredAt: state.data.properties.date,
  status: 'COMPLETED',
  coordinate: {
    latitude: '59.8',
    longitude: '10.9',
  },
  dataValues: [
    { dataElement: 'qrur9Dvnyt5', value: state.data.properties.prop_a },
    { dataElement: 'oZg33kd9taw', value: state.data.properties.prop_b },
    { dataElement: 'msodh3rEMJa', value: state.data.properties.prop_c },
  ],
}));
```

### Sample DHIS2 data value sets API job:

```js
create('dataValueSets', state => ({
  dataSet: 'pBOMPrpg1QX',
  orgUnit: 'DiszpKrYNg8',
  period: '201401',
  completeDate: state.data.date,
  dataValues: [
    { dataElement: 'f7n9E0hX8qk', value: state.data.prop_a },
    { dataElement: 'Ix2HsbDMLea', value: state.data.prop_b },
    { dataElement: 'eY5ehpbEsB7', value: state.data.prop_c },
  ],
}));
```

### sample openMRS expression, creates a person and then a patient

```js
create('person', state => ({
  gender: 'F',
  names: [
    {
      givenName: state.data.form.first_name,
      familyName: state.data.form.last_name,
    },
  ],
}));

create('patient', state => ({
  person: lastReferenceValue('uuid')(state),
  identifiers: [
    {
      identifier: '1234',
      identifierType: '8d79403a-c2cc-11de-8d13-0010c6dffd0f',
      location: '8d6c993e-c2cc-11de-8d13-0010c6dffd0f',
      preferred: true,
    },
  ],
}));
```

### merge many values into a child path

```js
// Merge parent-level values into each child item before iterating
fn(state => {
  const parentId = lastReferenceValue('id')(state);
  const metaId = state.data['*meta-instance-id*'];
  state.childItems = state.data.CHILD_ARRAY.map(item => ({
    ...item,
    metaId,
    parentId,
  }));
  return state;
});

each(
  '$.childItems[*]',
  create('some_object__c', state => ({
    metaId: state.data.metaId,
    parentId: state.data.parentId,
    // ... other fields mapped from state.data
  }))
);
```

### arrayToString

```js
arrayToString(arr, separator_string);
```

### access an image URL from an ODK submission

```js
// In ODK the image URL is inside an image object.
// Access it via state when mapping data:
create('Photo__c', state => ({
  Photo_URL_text__c: state.data.image.url,
}));
```

### alterState (alter state) to make sure data is in an array

```js
// Here, we make sure CommCare gives us an array and merge parent-level fields
// into each item before iterating.
fn(state => {
  const idCards = state.data.form.ID_cards_given_to_vendor;
  state.data.form.ID_cards_given_to_vendor = (Array.isArray(idCards)
    ? idCards
    : [idCards]
  ).map(card => ({
    ...card,
    Vendor_Id: state.data.form.ID_vendor,
    form_finished_time: state.data.form.meta.timeEnd,
  }));
  return state;
});

// Now state has been changed, and we carry on...
each(
  '$.data.form.ID_cards_given_to_vendor[*]',
  upsert('Small_Packet__c', 'sp_id__c', state => ({
    sp_id__c: state.data.ID_cards_given_to_vendor,
    Vendor__r: { Badge_Code__c: state.data.Vendor_Id },
    Small_Packet_Distribution_Date__c: state.data.form_finished_time,
  }))
);
```

### Login in to a server with a custom SSL Certificate

This snippet describes how you would connect to a secure server ignoring SSL
certificate verification. Pass `tls: { rejectUnauthorized: false }` in the
options argument of the `post` function in `@openfn/language-http`.

```js
post(
  `${$.configuration.url}/${path}`,
  {
    email: 'Luka',
    password: 'somethingSecret',
  },
  {
    headers: { 'content-type': 'application/json' },
    tls: { rejectUnauthorized: false },
  }
);
```
