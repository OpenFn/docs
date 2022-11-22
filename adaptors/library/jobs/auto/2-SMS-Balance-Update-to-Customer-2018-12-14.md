---
title: 2. SMS Balance Update to Customer
sidebar_label: 2. SMS Balance Update to Customer
id: 2-SMS-Balance-Update-to-Customer-2018-12-14
keywords:
  - library
  - job
  - expression
  - telerivet
  - dataValue
  - field
  - fields
  - send
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 2. SMS Balance Update to Customer
- Adaptor: [`@openfn/language-telerivet`](https://www.github.com/openfn/language-telerivet)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-telerivet)
- Created almost 4 years ago
- Updated almost 4 years ago
- Score: <b>3</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `send`

## Expression

```js
send(
  fields(
    field('to_number',
      dataValue('Envelope.Body.notifications.Notification.sObject.Phone_Number__c')
    ),
    field('message_type', 'sms'),
    field('route_id', 'PN5d224d8136086997'),
    field('content',
      'Payment successful! Your updated contract balance is '
      + state.data.Envelope.Body.notifications.Notification.sObject.AmountDue__c
    )
  )
);
```