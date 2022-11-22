---
title: send email
sidebar_label: 📜 send email
id: send-mail-in-mailgun
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

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: send email
- Adaptor: [`@openfn/language-mailgun`](https://www.github.com/openfn/language-mailgun)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-mailgun)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `send`

## Expression

```js
send(
  fields(
    field('from', 'you@domain.com'),
    field('to', dataValue('form.submission.respondantEmail')),
    field('subject', 'Thanks for completing our survey.'),
    field('text', 'Your message goes here.')
  )
);

```