---
title: Create contact (sf)
sidebar_label: Create contact (sf)
id: Create-contact-sf-2021-03-01
keywords:
  - library
  - job
  - expression
  - salesforce
  - create
  - dataValue
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Create contact (sf)
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created over 1 year ago
- Updated about 1 month ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`create`, `dataValue`

## Expression

```js
create('Contact', {
  FirstName: dataValue("body.Patient_name"),
  LastName: dataValue('body.Last_Name_of_Patient'),
  Age__c: dataValue("body.Age"),
  Sex__c: dataValue('body.Sex'),	
  Case_ID__c: dataValue("body.National_ID"),	
  Comments__c: dataValue("body.Comments")
});

```