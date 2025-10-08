# Mogli

## About Mogli

Mogli is a mobile messaging platform that enables SMS communication and management through its API. The platform provides capabilities for sending, receiving, and managing SMS messages, making it suitable for organizations that need reliable mobile messaging integration for notifications, alerts, and two-way communication workflows.


Mogli is particularly useful for organizations needing mobile engagement capabilities, emergency notifications, field communication, and customer outreach via SMS.

## Integration Options

**REST API**: Mogli provides a REST API that enables external applications to send SMS messages, receive inbound messages, and manage communication workflows. The API supports authentication through multiple security layers including username/password, security tokens, and API secrets for comprehensive access control.

## Authentication

Mogli uses multiple authentication components for secure API access:

```json
{
  "loginUrl": "https://www.orange-or-airtel-or-vodafone.com/api/",
  "username": "admin",
  "password": "@secret(!)Pass",
  "securityToken": "dGF5bG9yOnNlY3JldA==",
  "secret": "someotherThiNGfSECret"
}
```

**Authentication Components:**
- **loginUrl**: The Mogli API endpoint URL
- **username**: Your Mogli account username
- **password**: Your Mogli account password
- **securityToken**: Base64-encoded security token for API access
- **secret**: Additional secret key for enhanced security

All API requests require this multi-layer authentication approach to ensure secure message transmission.


## Helpful Links

- [Mogli Platform](https://mogli.africa/)
- [OpenFn Mogli Adaptor Configuration](https://docs.openfn.org/adaptors/packages/mogli-configuration-schema)
- [OpenFn Mogli Adaptor Docs](https://docs.openfn.org/adaptors/packages/mogli-docs)
