---
title: Chaining multiple operations in one Job
sidebar_label: Chaining operations
---

### Reasons to use multiple operations in a single Job

- Your desired final `Output` for a Step requires multiple operations to produce
  (e.g., get Patients to check if existing, then update existing Patient
  records).
- The job must be atomic, you want the whole thing to count as a failure if any
  part of it fails.
- You run Steps manually and you want a single button to click to retry the
  entire sequence of operations.
- You update a `cursor` in a series of operations that involve `GET` and `POST`.
  When the `POST` fails, you don't want to update the `cursor` for the
  subsequent job run which contains the `GET`.

  See example Job below with 2 "upsert" (update/insert) operations.

  ```js
  //first we upsert the Patient
  upsert(
    'Patient__c',
    'ExternalId',
    fields(
      field('ExternalId', dataValue('form.patient_id')),
      field('Name', dataValue('form.surname')),
      field('Other Names', dataValue('form.firstName')),
      field('Age__c', dataValue('form.ageInYears')),
      field('Is_Enrolled__c', true),
      field('Enrollment_Status__c', 3)
    )
  );
  //then we upsert the related Visit (child to the Patient record)
  create(
    'Visit__c',
    'ExternalId',
    fields(
      field('ExternalId', dataValue('form.visit_id')),
      relationship('Patient__r', dataValue('form.patient_id')),
      field('Name', dataValue('form.surname')),
      field('Other Names', dataValue('form.firstName')),
      field('Age__c', dataValue('form.ageInYears')),
      field('Is_Enrolled__c', true),
      field('Enrollment_Status__c', 3)
    )
  );
  ```

```

```
