---
title: Commcare & Phone Issues Log
sidebar_label: Commcare & Phone Issues Log
id: Commcare-Phone-Issues-Log-2022-10-21
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - field
  - fields
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Commcare & Phone Issues Log
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.11.0`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.11.0)
- Created about 1 month ago
- Updated 15 days ago
- Score: <b>28</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `relationship`, `upsert`

## Expression

```js
// Job to pick CommCare Report issues forms and map them to salesforce
fn(state => {
state.handleMultiSelect = function (state, multiField) {
    return multiField? multiField
          .replace(/ /g, ';')
      : '';

  };
  
    state.cleanChoice = function (state, choice) {
    if (choice) {
      return choice.charAt(0).toUpperCase() + choice.slice(1).replace('_', ' ');
    } else {
      return '';
    }
  }

   return {
    ...state
  };
  
  });
  
  upsert(
  'Report_issue__c',
  'CommCare_Form_ID__c',
  
  fields(
  field('CommCare_Form_ID__c', dataValue('id')),
    relationship('RecordType', 'Name', 'Report issue'),
    field('CHW_Name__c', dataValue('form.prologue.chw_sfid')),
      relationship(
      'Village__r',
      'CommCare_User_ID__c',
      dataValue('form.prologue.chw_village'))
    ),
    relationship('Catchment__r', 
    'Name',
    dataValue('form.prologue.catchment'))
    ),
    
    //field('	Issues_log_date__c',dataValue('issues_log_date')),
   // field('issues_you_are_experiencing_with_phone__c', dataValue('what_issues_are_you_experiencing_with_your_mobile_phone')),
    //field('What_issues_are_you_experiencing_with_yo__c', dataValue('what_issues_are_you_experiencing_with_your_commcare_application')), 
    //field('Other_commcare_issue_Specify__c', dataValue('other_commcare_issuespecify')),
    //field('Other_mobile_phone_issue_Specify__c', dataValue('other_mobile_phone_issuespecify')),
    //field('Other_phone_Specify__c',dataValue('other_phonespecify')),
    //field('Phone_type__c', dataValue('phone_type')),
    //field('What_issues_are_you_experiencing__c',dataValue('what_issues_are_you_experiencing')),
    //field('What_other_issues_are_you_facing__c',dataValue('what_other_issues_are_you_facing'));
    
  

  
const lookupMap = (item, map) => {
    return item ? map[item] : undefined;
  
  
  const phoneTypeMap = {
    infinix_hot_6: 'Infinix hot 6',
    infinix_hot8_lite: 'Infinix hot8 lite',
    infinix_smart_5: 'Infinix smart 5',
    infinix_smart_6: 'Infinix smart 6',
    samsung_taba: 'Samsung TabA',
    samsung_a20: 'Samsung A20s',
    xposh: 'Xposh',
    other: 'Other',

  };
  
  const issuesYouAreExperiencingMap = {
    mobile_phone: 'Mobile phone',
    commcare_application: 'Commcare application',
    both: 'Both',
    
  };
};
  //const whatIssuesAreYouExperiencingWithPhoneMap = {
   // broken_-_not_functional_at_all: 'Broken-Not functional at all',
    //cracked_screen_-_functional: 'Cracked screen - Functional',
    //stolengot_lost: 'Stolen/Got Lost',
    //other: 'Other',
  
  //const issuesExperiencedWithCommcareApplicationMap = {
    //commcare_cant_sync_-_internet_problem: 'Commcare can't sync - Internet problem',
    // other: 'Other',
  };
```