---
title: Credentials
---

One of the peculiarities of OpenFn's data integration tools is the ease and
transparency with which they can connect to different systems. Authentication
management is at the heart of the OpenFn platform and tools. It is done through
credentials which are nothing more than a set of authentication protocols as
varied as supported by OpenFn. In this document, we'll find out how credentials
work and how to use them in data integration projects.

## Credentials in state.configuration

Adaptors use credentials to connect to systems. The adaptor expects the
credentials needed to connect to a given system to be in the `configuration`
section of the state.json file (which might be called something else). Moreover
(by convention) this file should contain two main sections, the `configuration`
section for credentials and the `data` section for data to be sent to the
system. Below is an example of this state.json file:

```json
{
	“configuration”: {
		“hostUrl”: “some.api.url/endpoint”,
		“username”: “some_api_username”,
		“password”: “some secret api password”
	},
	“data”: {
		“students”: [...],
		“teachers”: [...]
	}
}
```

The contents of the `configuration` section of the state.json file vary
depending on the destination system. Then this configuration section is
accessible in the adapters helper functions which will just extract the
credentials that are there and use them to access the destination system. This
is the procedure used by the OpenFn integration tools to manage authentications
in all systems. This is a very good procedure, but one of the problems is that
it is manual and not very reusable.

## Credentials in Platform (openfn.org)

It is possible to create credentials and keep them in your profile. It is also
possible to give certain projects access to the created credentials. This solves
the reusability problem because each time you write a job in a project you can
ask it to use the credits that are associated with that project. Thus, if we
have credits to access a well-defined Salesforce instance, we can write multiple
jobs / projects that use these same credentials and this in a way that is
completely transparent to the user. Indeed platform, pass these credentials in
the `configuration` section of state each time a job is executed. To create
platform credentials, it's very simple, just go to
https://openfn.org/credentials and click on the floating action button to add a
credential. Then you will have to choose the type of credential to create. There
are basically 3 types of credentials possible. These are generic credentials,
system-specific credentials, and keychains.

### Generic credentials

These are pretty standard credentials that can be found in most systems. Often
these are the username / password pair, OAuth 2.0 authentication, SSL
certificates, etc.

### Specific credentials

These are credentials specific to a given system, for example authentication to
an instance of a PostgreSQL database accessible online, access to Twilio, access
to CommCare, etc.

### Keychains credentials

Keychains are, as their names suggest, a system that allows logically linking a
set of credentials that can be used sequentially when executing one or more
jobs. For example, imagine a job that needs to do the same processing on patient
data from two different geographic regions and register it in two different
Salesforces instances say salesforce-west-africa and salesforces-east-africa.
The two Salesforce instances all have different credentials that the job should
use. In this case we will create the two credentials and give each credential a
unique identifier. Then we will create a keychain which will associate with each
credential an execution path which allows it to be selected by the job. So we
have a job that can connect to multiple systems and do the same job.

### Raw Credentials

Raw credentials are valid JSON documents which are passed into a job's runtime
state. Note that owners of these credentials will be able to view them, in their
entirety, in the clear.

## Conclusion

Credentials play a huge role in OpenFn Integration Platform and tooling. They're
various, flexible and very easy to create, use and share. Here [Link To Youtube
Video] is a video that demonstrate credentials in OpenFn Platform.
