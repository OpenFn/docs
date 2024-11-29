---
title: OpenMRS Adaptor
---

## About OpenMRS

[OpenMRS (Open Medical Record System)](https://openmrs.org/) is an open-source platform designed to manage electronic medical records (EMRs) in low-resource environments. It provides a framework that allows developers to extend its core functionality through custom modules and APIs.

## Integration Options

**1. Rest API:** OpenMRS offers a REST API that enables external applications to interact with its database and perform bulk operations. This option is ideal for applications requiring scheduled or bulk synchronization with OpenMRS. Refer to the OpenMRS REST API [documentation](https://wiki.openmrs.org/) for detailed guidelines on endpoints and payload formats.

**2. Webhook:** OpenMRS does not natively support webhooks as a standard feature. However, the platform is highly extensible and allows for customization through its module system. More details can be found on the OpenMRS [documentation page​](https://wiki.openmrs.org/).

## Authentication

When integrating with OpenMRS via OpenFn, **Basic Authentication** is supported. See this adaptor's [Configuration docs](/adaptors/packages/openmrs-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "instanceUrl": "http://openmrs.com/instance/url",
  "password":"test",
  "username":"test"
}
```

### Helpful Links

1. [OpenMRS Developer Guide](https://openmrs.atlassian.net/wiki/spaces/docs/pages/25476048/Developer+Guide)
2. Community Forums: [OpenMRS Talk](https://talk.openmrs.org/)

### Implementation Examples

1. OpenFn Prototype for Médecins Sans Frontières (MSF) LIME Project - OpenMRS -> DHIS2 sync: [https://github.com/OpenFn/openfn-lime](https://github.com/OpenFn/openfn-lime)




