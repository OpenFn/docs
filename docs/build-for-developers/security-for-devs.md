---
id: security-for-devs
title: Security considerations for OpenFn development
sidebar_label: Security considerations
slug: /security-for-devs
---

## Introduction

Even if the target applications you are integrating are secure, there are still
many security risks in data integration implementations. Read on for best
practices and tips for developers to ensure top-notch security when building
OpenFn workflows.

## Practices for all job code

These apply wherever you write jobs, in the app or locally.

### Hardcoding sensitive information

Never write usernames, passwords, or API keys into job code. In OpenFn, attach a
[credential](/manage-projects/manage-credentials.md) to the step instead. When
the step runs, the credential's values are passed to the job as
`state.configuration`, and the adaptor reads them from there, so your code
rarely needs to touch them.

You may need to read the values yourself when you use the generic
[HTTP adaptor](/adaptors/http) to reach a REST API that has no adaptor of its
own and doesn't support basic or bearer token authentication. For example, the
API might expect the username and password in the body of a login request. Read
them from `state.configuration` rather than typing them into the job, and never
log them:

```js
// Log in with the values from the step's credential to get a session token
post('/api/login', state => {
  const username = state.configuration.username;
  const password = state.configuration.password;
  return { username, password };
});
```

### Use of `console.log()`

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

## Building in the app

### Syncing to GitHub

If your project uses [GitHub Sync](/manage-projects/link-to-gh.md), clicking
**Save & Sync** in the workflow editor, or **Initiate Sync to Branch** on the
project's **Sync to GitHub** settings page, commits the whole project to the
connected repository. That includes every step's job code, so anything written
into a job ends up in GitHub. Credentials are stored by name and owner only;
their values are never synced.

A sync also commits changes that you or anyone else saved to other workflows in
the project since the last sync. Before you sync, check that nobody has saved
test values or debugging code you wouldn't want in the repository.

### Turning off job logs

Once a workflow is built, anyone with the Editor role or above can turn off its
[Allow console.log() usage](/build/workflows.md#log-outputs) setting. This hides
everything your job code logs. Messages from the adaptor and from OpenFn itself,
such as which step ran and how long it took, still appear in the run logs.

### Retaining your OpenFn project data

If you have strict data protection requirements, you can configure OpenFn as a
"zero-persistence" data pipeline. This ensures that the data your workflows
process (Inputs and Outputs) is not retained, even on the OpenFn cloud. To turn
it on, set the project's [Data Storage](/manage-projects/io-data-storage.md) to
**Never retain input/output data (zero-persistence)**. Run logs are still kept,
so keep sensitive data out of them, and you can't retry runs. Zero persistence
controls what OpenFn stores, not where data is processed. If data must stay in a
country or network, [deploy OpenFn there](/deploy/options.md).

Many users find that temporarily retaining data in OpenFn can be helpful for
troubleshooting. For example, if you have a 3-step workflow and the workflow
fails at step 3, it might be helpful to retain the Input for this failed step so
that you can inspect the data, quickly troubleshoot, and retry from that point
of failure. For this reason, most users leave temporary data retention on and
set a [History Retention](/manage-projects/retention-periods.md) period that
suits them. Project owners and admins can change both settings in the project's
settings.

## Building locally with the CLI

When you build locally, nothing reaches GitHub until you commit it, so the
checks are yours to make.

### Storing credentials

When you run jobs locally with the CLI, keep credential values in a file outside
your project's repository, or add the file to `.gitignore`, and pass it to the
CLI as a credential map. See
[Running workflows in projects](/build-for-developers/cli-sync.md#running-workflows-in-projects).
The CLI does not add credential files to `.gitignore` for you.

### Committing to GitHub

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

## Contributing to adaptors

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
[OpenFn Security Guidebook](/get-started/security.md). For more on job-writing,
see the [job-writing guide](/jobs/job-writing-guide.md).

:::
