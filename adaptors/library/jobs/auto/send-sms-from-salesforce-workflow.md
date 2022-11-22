---
title: Send sms from Salesforce workflow action
sidebar_label: 📜 Send sms from Salesforce workflow action
id: send-sms-from-salesforce-workflow
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

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Send sms from Salesforce workflow action
- Adaptor: [`@openfn/language-telerivet`](https://www.github.com/openfn/language-telerivet)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-telerivet)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `send`

## Expression

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