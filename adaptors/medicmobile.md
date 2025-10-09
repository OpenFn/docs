---
title: Medicmobile Adaptor
---

## About Medicmobile

[Medicmobile](https://medic.org/about/) is a nonprofit that builds the open-source Community Health Toolkit (CHT) and partners with governments and NGOs to equip community health workers, often in hard-to-reach areas with offline-first tools for case management, decision support, and health analytics.

## Integration Options

Rest API: Medicmobile has a REST API that enables external services like OpenFn to pull data from Medicmobile, or push data from external apps to Medicmobile. This option is suited for scheduled, bulk syncs or workflows that must update data in Medicmobile with external information. See [functions](/adaptors/packages/medicmobile-docs) for more on how to use this adaptor to work with the API.

## Authentication

See [Medicmobile docs](https://docs.communityhealthtoolkit.org/building/reference/api/#replication-limit) for the latest on supported authentication methods.
[See our configuration docs](/adaptors/packages/medicmobile-configuration-schema) to learn more.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```json

{
  "server": "https://standard.app.medicmobile.org",
  "username": "admin",
  "password": "@super(!)Secret",
  "db": "medic"
}

```

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
