---
title: 01 send mailgun email
sidebar_label: 01 send mailgun email
id: 01-send-mailgun-email-2018-12-04
keywords:
  - library
  - job
  - expression
  - mailgun
  - dataValue
  - field
  - fields
  - send
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 01 send mailgun email
- Adaptor: [`@openfn/language-mailgun`](https://www.github.com/openfn/language-mailgun)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-mailgun)
- Created almost 4 years ago
- Updated almost 4 years ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `send`

## Expression

```js
send(
  fields(
    field('from', 'aleksa@openfn.org'),
    field('to', 'aleksa@openfn.org, aleksa@verasolutions.org'),
    field('subject', 'Kobo: New Form Submitted'),
      //You can write your own custom, anonymous functions to do whatever you desire - see function(state)
    field('text', function(state) {
      const msgText = "A form was submitted by "+ dataValue("_submitted_by")(state) + ". Please login to review!"
      return msgText
       //result will be an email with body text "A form was submitted by [Kobo Submitted By User]. Please login to review!" 

    })
  ) 
 )
```