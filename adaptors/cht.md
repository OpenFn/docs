---
title: Community Health Toolkit (CHT)
---

## About Community Health Toolkit (CHT)

The [Community Health Toolkit](https://communityhealthtoolkit.org/) ("CHT") is a
collection of open-source technologies and open-access resources developed by a
community focused on global health equity.

The resources provided through the CHT can be used to build digital health apps
used at the community, health facility, and health system level.

## Integration Options

CHT supports 2 primary integration options:

1. **Webhook or
   ["Outbound Push"](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/)**
   to forward specified data _from CHT_ to external systems like OpenFn. This
   option is suited for _real-time_, event-based data integration.

2. **[REST API](https://docs.communityhealthtoolkit.org/building/reference/api/)**
   that enables external services like OpenFn to (1) _pull_ data from CHT, or
   (2) to send data _to CHT_ from external apps. This option is suited for
   _scheduled, bulk syncs_ or workflows that must update data in CHT with
   external data sources.

This OpenFn adaptor is designed for working with option #2
([see CHT docs](https://docs.communityhealthtoolkit.org/building/reference/api/)).
See [functions](/adaptors/packages/cht-docs) for more on how to use this adaptor
to work with the API.

Read on for how to configure the CHT outbound push (option #1) to trigger OpenFn
workflows based on CHT record updates.

### CHT "Outbound Push" Setup (CHT-to-OpenFn)

To push data from CHT applications to OpenFn, you will need to:

1. Create a workflow in OpenFn using the
   [webhook trigger](/documentation/build/triggers#webhook-event-triggers)
2. Copy the `webhook url` from the trigger
3. Configure the CHT
   [Outbound Push](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/)
   feature to forward specified data to OpenFn. Note the following:

- When definining the
  [`destination`](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#destination),
  specify your OpenFn `webhook url` as the `baseURL`.
- No `auth` parameters are required, unless you have configured
  [Webhook Security](/documentation/webhook-security) on your OpenFn project.
- Define the data to forward to OpenFn in the
  [`mapping`](https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#mapping)
  property. This will structure the payload that is sent to your OpenFn workflow
  as an "Input".

### How to Extract or Modify CHT Data

**See the available [helper functions](/adaptors/packages/cht-docs)** for a full
list of functions supported by this adaptor for extracting and/or modifying CHT
data via the
[CHT API](https://docs.communityhealthtoolkit.org/apps/reference/api/).

To fetch data from CHT via OpenFn, you can:

1. Configure a new workflow with a "cron" trigger and define the frequency of
   your workflow (e.g., daily at 8:00AM)
2. Add a "Get data" step linked to this CHT adaptor
3. Edit the Step and open the Inspector (`</>`) to write a basic job using this
   adaptor's [`get`](/adaptors/packages/cht-docs#get) function to specify which
   API endpoint you want to "pull" data from

See [platform docs](/documentation/build/workflows) for more guidance on
building workflows.

## Authentication

The CHT API supports `basic authentication`. OpenFn users can use the `cht`
credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

See this adaptor's
[Configuration docs](/adaptors/packages/cht-configuration-schema) for technical
docs on the authentication parameters required. If working locally or if using a
`Raw JSON` credential type, then your configuration will look something like
this:

```json
{
  "baseUrl": "https://demo-cht.dev.medicmobile.org",
  "username": "apiuser",
  "password": "secret123"
}
```

## Helpful Links

- API Docs: https://docs.communityhealthtoolkit.org/building/reference/api/
- CHT Docs: https://docs.communityhealthtoolkit.org/
- CHT Community: https://forum.communityhealthtoolkit.org/

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
