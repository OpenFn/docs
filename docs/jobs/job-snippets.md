---
title: Code Snippets
sidebar_label: Code Snippets
---

This section includes a numner of useful JavaScript code snippets which you can
use in your jobs.

Most snippets are implemented as callbacks to other operations.

You can copy these callbacks and adapt them to suit your own code.

### Custom replacer

```js
field('destination__c', state => {
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
