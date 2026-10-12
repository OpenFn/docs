---
title: Varo Adaptor
---

## About Varo

[Varo](https://www.varo-app.org/) is a simple and free smartphone app that
collects and forwards useful cold chain information and temperature logs to the
email inbox of your choice.

## Integration Options

This is a data transformation adaptor for converting Varo data to the WHO
Equipment Monitoring System (EMS) standard.

To integrate with Varo data, you can use the relevant OpenFn adaptor (e.g.,
Gmail) for your chosen email inbox to query the Varo emails and attachments.

![example-workflow](/img/sample-cce-workflow.webp)

## Authentication

N/A - This adaptor is for data transformation only, and not for direct
connection to the Varo app. See note in above section.

## Helpful Links

- Varo website: https://www.varo-app.org/
- WHO documentation on EMS standard:
  https://extranet.who.int/prequal/immunization-devices/e006-temperature-monitoring-devices

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
