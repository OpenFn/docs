---
title: Google Drive Adaptor
---

## About Google Drive

[Google Drive](https://www.google.com/drive/) is Google's cloud-based file storage and synchronization service that allows users to store files online and access them from any computer or mobile device. Google Drive provides secure cloud storage, real-time collaboration capabilities, and seamless integration with Google Workspace applications including Docs, Sheets, and Slides.

## Integration Options

**REST API**: Google Drive provides comprehensive REST APIs through the Google Drive API, enabling developers to create, read, update, and manage files and folders programmatically. The API supports OAuth 2.0 authentication and provides access to metadata, content manipulation, and sharing permissions management.

## Authentication

Google Drive uses OAuth 2.0 access tokens for API authentication:

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"
}
```

**Authentication Components:**
- **access_token**: OAuth 2.0 access token obtained through Google's authentication flow

Access tokens can be generated through Google Cloud Console and provide scoped access to Google Drive resources based on the permissions granted during the OAuth flow.



## Helpful Links


- [Google Drive API Documentation](https://developers.google.com/drive/api)
- [OpenFn Google Drive Adaptor Configuration](https://docs.openfn.org/adaptors/packages/googledrive-configuration-schema)
- [OpenFn Google Drive Adaptor Docs](https://docs.openfn.org/adaptors/packages/googledrive-docs)
