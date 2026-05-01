---
title: iHRIS Adaptor
---

## About iHRIS
iHRIS stands for Integrated Human Resource Information System. It is the national human resource system for health workforce management. 

## Integration Options
iHRIS has an available REST API. See [functions](/adaptors/packages/ihris-docs) for more on how to use this adaptor to work with the API.

## Authentication
Users must specify a  `baseUrl`, `username` and `password` to login and get a `cookie` back. The cookie is then included as part of the headers in every HTTP request.

OpenFn users can use the `iHRIS` credential type when
[creating a credential](/documentation/manage-projects/manage-credentials).

See the adaptor's [configuration schema docs](/adaptors/packages/ihris-configuration-schema)

If working locally or
if using a `Raw JSON` credential type, then your configuration will look
something like this:

```json
{
  "baseUrl": "https://ihris.example.com",
  "username": "ihris_user",
  "password": "@some(!)Str0ngp4ss0w0rd"
}
```

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).


