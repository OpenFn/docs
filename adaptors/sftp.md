---
title: SFTP Adaptor
---

## About SFTP

[SFTP (Secure File Transfer Protocol)](https://www.techtarget.com/searchcontentmanagement/definition/Secure-File-Transfer-Protocol-SSH-File-Transfer-Protocol) is a secure method for transferring files between systems over an encrypted SSH connection. It is widely used for securely uploading, downloading, and managing files on remote servers.


## Integration Options

**Direct File Transfers:** SFTP allows users to manually or programmatically transfer files between a local and remote system. See [functions](/adaptors/packages/sftp-docs) for more on how to use this adaptor to work with an SFTP server.

## Authentication

When integrating with an SFTP server via OpenFn,  **password authentication** is supported. See this adaptor's [Configuration docs](/adaptors/packages/sftp-configuration-schema) for more on the required authentication parameters.

See platform docs on [managing credentials](documentation/manage-projects/manage-credentials) for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:

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





