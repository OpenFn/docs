---
title: SFTP Adaptor
---

## About SFTP

[SFTP (Secure File Transfer Protocol)](https://www.techtarget.com/searchcontentmanagement/definition/Secure-File-Transfer-Protocol-SSH-File-Transfer-Protocol) is a secure method for transferring files between systems over an encrypted SSH connection. It is widely used for securely uploading, downloading, and managing files on remote servers.

Using this adaptor, you can read and write files (e.g., `csv`, `xls`, `json` files) saved on a SFTP server. 

## Integration Options

**Direct File Transfers:** SFTP allows users to manually or programmatically transfer files between a local and remote system. See [functions](/adaptors/packages/sftp-docs) for more on how to use this adaptor to work with an SFTP server.

## Authentication

When integrating with a SFTP server via OpenFn, you can provide a `username` and `password` for an authorized user to authenticate. See this adaptor's [Configuration docs](/adaptors/packages/sftp-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](/documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

```
{
  "host": "191.173.128.88",
  "username": "name",
  "password": "pwd"
}
```

### Helpful Links
1. [Best Practices for SFTP](https://www.ssh.com/academy/ssh/sftp)

### Implementation Examples

1. Women for Women International - SFTP -> Salesforce sync: [https://github.com/OpenFn/women-for-women](https://github.com/OpenFn/women-for-women)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
