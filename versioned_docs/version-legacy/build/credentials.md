---
title: Credentials
---

## Credentials

Credentials are used to authorize connections to destination systems. In the
future, our adaptors will use credentials to fetch meta-data from source and
destination applications and make the job writing process easier.

Some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl, host, or
ApiUrl. Leave off the final "/" in these Urls: `https://login.salesforce.com` or
`http://demo.openmrs.org/openmrs` or `https://play.dhis2.org`.

Credentials can only be viewed, or edited by a single user — their "owner" (or
the person that created that credential). All the collaborators on a particular
project can choose those credentials for use when defining a job.

There are two special types of credentials, in addition to the myriad standard
application-specific and authentication protocol-specific credentials.

### Raw Credentials

Raw credentials are valid JSON documents which are passed into a job's runtime
state. Note that owners of these credentials will be able to view them, in their
entirety, in the clear.

### Keychain Credentials

Keychain credentials allow for a single job to make use of multiple credentials.
They work by inspecting the data in the job's runtime state (i.e., `state.data`)
and checking for the value of a predetermined identifier. Based on that value,
present in the data for a given source message, for example, _another_
credential will be selected and applied for that particular job run.
