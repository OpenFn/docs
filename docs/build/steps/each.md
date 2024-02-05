---
id: each
title: The each(...) operation
---

The `each` operation allows you to perform another operation on each item in an
array.

## Each takes two arguments

In other words, `each(arrayPath, operation)` will _do_ `operation` on each item
it finds in the `arrayPath` array. It takes just two arguments:

1. an arrayPath
2. an operation(...)

### arrayPath

Let's look at the first argument in `each`... the path to the array. Consider
the following code using the Salesforce adaptor:

```js
each(
  dataPath('form.participants[*]'),
  upsert(
    'Person__c',
    'Participant_Identification_Number_PID__c',
    fields(
      field('Participant_Identification_Number_PID__c', dataValue('pid')),
      relationship('RecordType', 'Name', 'Participant'),
      field('First_Name__c', dataValue('participant_first_name')),
      field('Surname__c', dataValue('participant_surname')),
      field('Mobile_Number_1__c', dataValue('mobile_number'))
      field('Sex__c', dataValue('gender')),
    )
  )
);
```

This will upsert a `Person__c` resource in Salesforce for each item found in the
`state.data.form.participants` array. You could specify this path in the
following ways:

- `'$.data.form.participants[*]'`
- `dataPath('form.participants[*]')`

Note the JSON path syntax.

### the operation

If there are 5 participants in there, it will execute the `upsert` operation on
all 5 items, in sequence. `upsert` takes whatever arguments it takes normally
but it operates _inside_ the array. See below for more details on the _scope_ of
this operation.

## dataValue(...) _inside_ each(...)

Note that inside the `each(...)` operation, using `dataValue(path)` will
evaluate a path inside each item in the array.

## merge(...) and bringing data 'down' into an array:

What if you want to access data in your `upsert` operation that does _not_ exist
in the array itself. You could use a data preparation step (see: `alterState`)
or make use of `merge(path, data)` which allows you to merge data from the
initial scope down into your array and access it from the `upsert` operation.

```js
each(
  merge(
    dataPath('form.participants[*]'),
    fields(
      field('school_id', dataValue('form.school.id')),
      field('intervention_type', dataValue('form.type'))
    )
  ),
  upsert(
    'Person__c',
    'Participant_Identification_Number_PID__c',
    fields(
      field('Participant_Identification_Number_PID__c', dataValue('pid')),
      relationship('RecordType', 'Name', 'Participant'),
      field('First_Name__c', dataValue('participant_first_name')),
      field('Surname__c', dataValue('participant_surname')),
      field('Mobile_Number_1__c', dataValue('mobile_number'))
      field('Sex__c', dataValue('gender')),
      // new fields...
      field('School__c', dataValue('school_id')),
      field('Intervention_Type__c', dataValue('intervention_type'))
    )
  )
);
```
