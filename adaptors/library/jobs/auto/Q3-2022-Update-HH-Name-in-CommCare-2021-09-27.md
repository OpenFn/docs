---
title: Q3 2022] Update HH Name in CommCare
sidebar_label: ✨ Q3 2022] Update HH Name in CommCare
id: Q3-2022-Update-HH-Name-in-CommCare-2021-09-27
keywords:
  - library
  - job
  - expression
  - commcare
  - map
  - submitXls
  - Array
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Q3 2022] Update HH Name in CommCare
- Adaptor: [`@openfn/language-commcare`](https://www.github.com/openfn/language-commcare)
- Adaptor Version: [`v1.4.1`](https://www.github.com/openfn/language-commcare/releases/tag/v1.4.1)
- Created about 1 year ago
- Updated 3 months ago
- Score: <b>92</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`map`, `submitXls`, `Array`

## Expression

```js
// Update CommCare case
fn(state => {
  const { Notification } = state.data.Envelope.Body.notifications;

  const Notifications = Array.isArray(Notification)
    ? Notification
    : [Notification];

  const notifications = Notifications.map(notification => {
    console.log(
      `Mapping HH code to CommCare: `,
      notification.sObject.Household_Code_Autonumber__c
    );
    return {
      case_id: notification.sObject.Commcare_Code__c,
      name: notification.sObject.Household_Code_Autonumber__c,
    };
  });

  return { ...state, notifications };
});

submitXls(state => state.notifications, {
  case_type: 'Household',
  search_field: 'case_id',
  search_column: 'case_id',
  name_column: 'name',
  create_new_cases: 'off',
});

```