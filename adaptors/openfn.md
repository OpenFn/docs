---
title: OpenFn Adaptor
---

## About OpenFn

[OpenFn](https://www.openfn.org/) is an open-source data integration platform designed to automate workflows and connect health and humanitarian systems. The platform enables organizations to build, deploy, and monitor automated data pipelines that sync data between different systems, trigger workflows based on incoming data, and transform information across various formats and standards.


## Integration Options

**REST API**: The OpenFn adaptor provides access to OpenFn's v1 API, enabling programmatic management of jobs, triggers, credentials, and workflow executions. This allows for automation of OpenFn platform operations, monitoring workflow performance, and integrating OpenFn capabilities into external applications and dashboards.

## Authentication

The OpenFn adaptor uses API token authentication to access the OpenFn platform:

```json
{
  "baseUrl": "https://app.openfn.org",
  "access_token": "your_openfn_api_token"
}
```

**Authentication Components:**
- **baseUrl**: The OpenFn platform URL (defaults to https://app.openfn.org)
- **access_token**: Your OpenFn API token for authentication

API tokens can be generated from your OpenFn account settings and provide programmatic access to your projects and workflows.

### Making API Requests

```js
// Get all jobs for a specific project
request({
  method: 'get',
  path: 'jobs',
  params: {
    project_id: 490,
  },
});

// Create a new job
request({
  method: 'post',
  path: 'jobs',
  data: {
    trigger_id: 1,
    expression: 'steps()',
  },
}, state => {
  console.log('Job created successfully!');
  return state;
});
```

## Helpful Links

- [OpenFn Adaptor Configuration](https://docs.openfn.org/adaptors/packages/openfn-configuration-schema)
- [OpenFn Adaptor Docs](https://docs.openfn.org/adaptors/packages/openfn-docs)

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
