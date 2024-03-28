---
id: security-for-devs
title: Security Considerations for Development
sidebar_label: Security Considerations
slug: /security-for-devs
---

## Introduction

Even if the target applications you are integrating are secure, there are still
many security risks in data integration implementations. Read on for best
practices and tips for developers to ensure top-notch security when building
OpenFn workflows.

## Common mistakes and how to avoid them

Writing OpenFn jobs can be straightforward, but there are common mistakes that
developers might make. Here are some of them and tips on how to avoid them:

### Hardcoding sensitive information

- **Avoid Hardcoding Credentials:** Instead of hardcoding usernames, passwords,
  or API keys directly into your scripts, use the `state` object to store and
  retrieve sensitive information.

```json
// Store credentials in state.json
{
  "configuration": {
    "username": "your_username",
    "password": "your_password"
  }
}
```

```javascript
// Retrieve credentials from state
const username = state.configuration.username;
const password = state.configuration.password;
```

### Checking sensitive data into GitHub

- **Be Mindful of Repository Contents:** When working on client projects, avoid
  saving sensitive data, such as `state.json`, in the client's public GitHub
  repository. Always review the repository contents and remove or redact
  sensitive information before committing changes.

- **Use Specific Directories for Test Payloads:** If you store test payloads in
  a client repository, use directories like `sampleData/` and ensure the
  filenames do not resemble `state.json`. Avoid complete state objects in these
  files; instead, mimic the exact test payload.

- **Check Git Diffs Before Committing:** Before making commits, carefully read
  the git diff line by line to identify unintentional changes and logs. Follow
  the practice of selective commits (`git add ./path/to/file`) rather than using
  `git add -A`.

- **Build a Habit of Reviewing Diffs:** To help build the habit, read the first
  file in `git diff` and then use `git add ./that_file` if it’s good to go.
  Continue reviewing the diff, adding files as needed. Finally, use
  `git commit -m "my changes"` and push.

### Use of `console.log()`

- **Mindful Logging Practices:** While `console.log()` is crucial during job
  development, it's essential to be cautious about logging sensitive
  information. Once jobs are built, administrators can disable the output of
  console logs, but certain aspects of the sandbox may still be displayed.

- **Avoid Logging Sensitive Data:** Be cautious when using `console.log(state)`
  or `console.log(state.configuration)`, especially if they contain sensitive
  information like usernames and passwords. In certain cases, this can lead to
  exposure of sensitive data in the logs.

```javascript
// Good practice
console.log('Operation completed successfully.');

// Avoid logging sensitive data
console.log('Received sensitive data:', state.data);
```

- **Audit-Friendly Logging:** Recognize that some clients rely on
  `console.log()` for audit purposes even in production. Ensure that your
  logging practices align with the client's requirements, and avoid exposing
  confidential information inadvertently.

- **Administrator Control:** Understand that administrators can control the
  visibility of console logs on an OpenFn project. However, it's crucial to
  adopt logging practices that align with both development needs and client
  security considerations.

> These best practices around `console.log()` usage contribute to secure job
> development on OpenFn, minimizing the risk of inadvertently exposing sensitive
> data in logs.

### Ignoring error handling

- **Handle Errors Gracefully:** Always implement error handling in your scripts.
  Provide meaningful error messages within the `state` object to assist in
  debugging without exposing sensitive details in responses.

```javascript
// Set custom error message in state
state.error = new Error(
  'Authentication failed. Please check your credentials.'
);

// Log the error in OpenFn
console.error(state.error);
```

### Overly broad permissions on credentials

When adding credentials to OpenFn, it is imperative to follow the principle of
least privilege. Specifically:

- **Specialized User Accounts:**

  - **Client-Specific User:** Create a dedicated user account tailored for the
    client's system within the third-party application (e.g., Salesforce). This
    user account should be exclusively used for OpenFn integration.

  - **Limited API Access:** Grant API access only to the resources necessary for
    OpenFn operations. Ensure that permissions are restricted to the specific
    objects and fields required for data exchange.

- **OAuth Scopes:**

  - **Scope Control via OAuth:** In some instances, OAuth is utilized for secure
    authentication. Leverage OAuth capabilities to control the scopes of access.
    Define and limit the permissions according to the exact requirements of
    OpenFn.

- **Salesforce Example:**

  - **Object and Field Restrictions:** Specifically in Salesforce, create a user
    account with API access restricted to the relevant objects and fields. Avoid
    granting unnecessary permissions that could potentially pose security risks.

    > By adopting these practices, you ensure that credentials associated with
    > OpenFn have precisely defined and restricted permissions. This mitigates
    > the risk of unintended access and protects sensitive client data during
    > integration processes.

### Retaining your OpenFn project

If you have strict data residency requirements, it’s possible to configure
OpenFn as a “zero-retention” data pipeline to ensure compliance. This ensures
that no data processed in OpenFn workflows (Inputs, Outputs) are retained, even
on OpenFn’s cloud-hosted platform offering.

Many users find that temporarily retaining data in OpenFn can be helpful for
troubleshooting. For example, if you have a 3-step workflow and the workflow
fails at step 3, it might be helpful to retain the Input for this failed step so
that you can inspect the data, quickly troubleshoot, and re-try from that point
of failure. To enable this more user-friendly troubleshooting experience, most
users opt to leave temporary data retention on, and the retention period can be
adjusted by the OpenFn super admin.

### Adaptors security practices

- **Client State Protection:** Adaptors (language packages) should never expose
  any part of a client’s state directly. Callbacks may log parts of state but
  should avoid logging configuration or actual data, considering potential
  Personally Identifiable Information (PII).

- **Metadata Usage:** Adaptors may rely on metadata about state, such as logging
  the “number of cases retrieved” from a request. However, logging the request
  itself is prohibited.

- **Security Review Process:** As more contributors engage with adaptors,
  rigorous security reviews for pull requests become central. Ensure adherence
  to the outlined security practices during the review process.

:::tip Learn More

For more security considerations and best practices for all OpenFn implementers
(not just developers), be sure to check out the complete
[OpenFn Security Guidebook](../get-started/security.md). For more on job-writing, 
see the [job-writing guide](../jobs/job-writing-guide.md).
:::
