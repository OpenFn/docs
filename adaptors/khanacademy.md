---
title: Khan Academy Adaptor
---

## About Khan Academy

[Khan Academy](https://www.khanacademy.org/) is a nonprofit educational platform that provides a free, world-class education for anyone, anywhere. Founded with the mission to democratize learning, Khan Academy offers personalized learning experiences through interactive exercises, instructional videos, and comprehensive curriculum covering subjects from kindergarten through early college.

Khan Academy serves millions of students worldwide, providing essential educational resources for K-12 education, college preparation, and lifelong learning.

## Integration Options

**REST API**: Khan Academy provides API access for educational data integration, enabling external applications to retrieve user progress, learning analytics, and curriculum information. The API supports OAuth-based authentication and provides access to student performance data and content metadata for educational technology integrations.

## Authentication

Khan Academy uses OAuth-based authentication with multiple credential components:

```json
{
  "email": "test@openfn.org",
  "password": "@some(!)Strongpassword",
  "secretKey": "otherThiNGfSECret",
  "consumerKey": "somEThINGkeyish"
}
```

**Authentication Components:**
- **email**: Your Khan Academy account email address
- **password**: Your Khan Academy account password
- **consumerKey**: OAuth consumer key for API access
- **secretKey**: OAuth secret key for request signing

OAuth credentials enable secure access to Khan Academy's educational data while maintaining user privacy and data protection.


## Helpful Links

- [Khan Academy API Documentation](https://github.com/Khan/khan-api)
- [OpenFn Khan Academy Adaptor Configuration](https://docs.openfn.org/adaptors/packages/khanacademy-configuration-schema)
- [OpenFn Khan Academy Adaptor Docs](https://docs.openfn.org/adaptors/packages/khanacademy-docs)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
