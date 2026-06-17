---
title: Code Snippets
sidebar_label: Code Snippets
---

This section includes a number of useful JavaScript code snippets which you can
use in your jobs.

Most snippets are written as `fn()` blocks or inline arrow functions. Copy and
adapt them to suit your own code.

## General

### Custom replacer

```js
fn(state => {
  state.destination__c = state.data.path_to_data.toString().replace(/cats/g, 'dogs');
  return state;
});
```

This will replace all occurrences of "cats" with "dogs" in the string that lives at
`path_to_data`. The regex flag `g` ensures every instance is replaced, not just the first.

### Custom arrayToString

```js
fn(state => {
  state.target_specie_list__c = state.data.target_specie_list.join(', ');
  return state;
});
```

It will take an array, and concatenate each item into a string with a `", "`
separator.

### Custom concatenation

```js
fn(state => {
  state.ODK_Key__c = `${state.data.metaId}(${state.data.index})`;
  return state;
});
```

This will concatenate two values.

### Concatenation of null values

This will concatenate many values, even if one or more are null, writing them to
a field called Main_Office_City_c.

```js
fn(state => {
  const clean = val =>
    val == null ? '' : val.toString().replace(/-/g, ' ');

  state.Main_Office_City__c = [
    clean(state.data.Main_Office_City_a),
    clean(state.data.Main_Office_City_b),
    clean(state.data.Main_Office_City_c),
    clean(state.data.Main_Office_City_d),
  ]
    .filter(Boolean)
    .join(',');

  return state;
});
```

> Notice how this custom function makes use of the **regex** `/-/g` to ensure
> that all instances are accounted for (g = global search).

### Custom Nth reference ID

If you ever want to retrieve the FIRST object you created, or the SECOND, or the
Nth, for that matter, a function like this will do the trick.

```js
fn(state => {
  // length - 1 = last created, length - 2 = second-to-last, etc.
  state.parent__c = state.references[state.references.length - 1].id;
  return state;
});
```

See how instead of taking the id of the "last" thing that was created in
Salesforce, you're taking the id of the 1st thing, or 2nd thing if you replace
`length - 1` with `length - 2`.

## Salesforce

### Convert date string to standard ISO date for Salesforce

```js
fn(state => {
  state.Payment_Date__c = new Date(state.data.payment_date).toISOString();
  return state;
});
```

> **NOTE**: The output of this function will always be formatted according to
> GMT time-zone.

### Use external ID fields for relationships during a bulk load in Salesforce

```js
array.map(item => {
  return {
    Patient_Name__c: item.fullName,
    'Account.Account_External_ID__c': item.account,
    'Clinic__r.Unique_Clinic_Identifier__c': item.clinicId,
    'RecordType.Name': item.type,
  };
});
```

### Bulk upsert with an external ID in Salesforce

```js
bulk2.upsert('Visit_new__c', 'commcare_case_id__c', $.data.patients, {
  failOnError: true,
});
```
