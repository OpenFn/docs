---
sidebar_label: Implementation Security
title: Security Considerations for Data Integration Projects
---

Even when every system you connect is secure, an integration project can still
expose data: a password pasted into job code, a test run that sends messages to
real patients, or a former contractor who can still open the project. This page
sets out the security work for each phase of an OpenFn implementation: the main
risks, the practices and OpenFn settings that reduce them, and the checks to
pass before you move to the next phase.

The guidance builds on the
[Security Guidebook for Data Integration Implementations](#the-security-guidebook),
which Open Function Group developed with support from Digital Square from its
work on nearly 100 integration projects with NGO and government partners.

## Discovery

The main risks at this stage are collecting more data than the workflow needs,
and learning late that a policy or data sharing agreement rules out the design.

- Identify access requirements: who will build, run, and monitor the workflows,
  and which system accounts OpenFn will use to connect to each system.
- Classify the data each workflow touches. Mark the fields that are personally
  identifiable information (PII) or health data in your
  [mapping specification](/design/mapping-specs.md).
- Move only the data points the workflow needs.
- Find the policies that apply to sharing, storing, and protecting the data,
  such as national data protection law, GDPR, or a data sharing agreement.
- Model threats early. For each system and data flow, ask what could go wrong
  (e.g., a leaked credential, a compromised source system, or data sent to the
  wrong place) and how you would notice.
- Don't take API security for granted. Check how each system authenticates API
  users, and whether it supports dedicated accounts with limited permissions.
- Budget time for security testing in the project plan.

See [Discovery & Scoping](/design/discovery.md) for the rest of the discovery
process.

### Phase-gate check: discovery

Before you set up the project, you can answer these questions:

- What data does each workflow move, and which fields are sensitive?
- Which policies and agreements apply, and who signs off on compliance?
- Who needs access to the OpenFn project, and with which role?
- What are the main threats, and how does the design reduce them?

## Project setup

The main risks are giving too many people too much access, and credentials with
no clear owner.

- Add only the people who need access, and give each one the lowest role that
  lets them do their work. See
  [Collaboration](/manage-projects/collaboration.md) and
  [User Roles](/manage-projects/user-roles-permissions.md).
- Require multi-factor authentication (MFA). Project owners and admins can turn
  on **Require MFA?** in the project's `Settings > Security` tab, so that
  collaborators must
  [turn on MFA for their account](/manage-users/user-profile.md#enable-multi-factor-authentication)
  before they can open the project. This option depends on your plan.
- Store every secret as an OpenFn
  [credential](/manage-projects/manage-credentials.md), never in job code,
  workflow files, or shared documents. Credentials are encrypted at rest.
- Give each credential a clear owner. Only the owner can view or edit its secret
  values, but anyone with the Editor role or above can attach it to a step, and
  that step's code can read the values when it runs. Base each credential on a
  dedicated integration account in the connected system, with only the
  permissions the workflow needs.
- Choose a data storage policy. If OpenFn should not keep the inputs and outputs
  of your runs, choose zero persistence in
  [Data Storage](/manage-projects/io-data-storage.md). Otherwise, set a
  [history retention period](/manage-projects/retention-periods.md) that matches
  your data policy.
- If a workflow starts from a webhook, add
  [webhook authentication](/manage-projects/webhook-auth.md) so that only known
  systems can trigger it.

### Phase-gate check: project setup

- Each collaborator has the lowest role that fits their work.
- Every credential has a named owner and uses a dedicated integration account
  with limited permissions.
- You have decided whether to require MFA.
- The data storage policy and retention period are set, and the data owner has
  agreed to them.

## Build

The main risks are secrets in code or repositories, real data in development,
and sensitive data in logs.

- Attach credentials to steps instead of writing secrets into job code. When you
  build with the CLI, follow
  [Security considerations for OpenFn development](/build-for-developers/security-for-devs.md).
- Build in a [sandbox](/build/sandboxes.md). Sandboxes share the parent
  project's credentials, so give each credential a value for the sandbox's
  [environment](/build/sandboxes.md#environments) that points to a test system.
  Otherwise, a sandbox run connects to the same systems as production.
- Use sanitized or made-up test data in every build environment. Don't copy
  production payloads into a repository or a sample data file.
- Keep sensitive data out of logs. Log what a job did, such as the number of
  records it fetched, not the records themselves. You can turn off
  [console.log() output](/build/workflows.md#log-outputs) for a workflow.
- Keep a traceable history of changes with
  [GitHub sync](/manage-projects/link-to-gh.md), and give repository access only
  to active contributors.
- Design for failure and reprocessing. Use unique identifiers and upsert
  operations so that a retried run doesn't create duplicate records, and
  validate data before you send it.

### Phase-gate check: build

- There are no secrets in job code, repositories, or sample data.
- All test data is anonymized or made up.
- Logs show what each run did without showing personal data.
- Someone other than the author has reviewed the job code.

## Integrated testing

The main risks are test runs reaching real people or production systems, and
personal data left in run history.

- Use only anonymized or made-up data in test datasets.
- Limit who can open test projects and sandboxes. A sandbox starts with the
  parent project's collaborators, and you can then remove the ones who don't
  need access.
- Guard notifications. If a workflow sends emails, SMS, or other messages, make
  sure test runs send them only to test recipients, for example with a
  credential environment that points to a test messaging account.
- Test the failure paths too: an expired credential, a system that is down, or a
  record that fails validation.
- Before sign-off, check run history, logs, and outputs for any personal data
  that should not be there.

### Phase-gate check: integrated testing

- Every test used non-production data.
- No test sent a message to a real person or wrote to a production system.
- A final review of logs and run history found no unexpected personal data.

## Deployment

The main risks are leftover access and credentials from build and testing, and
no way back if go-live goes wrong.

- Lock down production access. Remove collaborators who only needed access
  during build and testing.
- Rotate credentials at go-live. Replace any secret that was shared during build
  or testing, for example by email or chat, with a new value that only the
  credential owner knows.
- Review the security architecture and your security requirements again before
  you let live traffic in: data flows, storage policy, webhook authentication,
  and roles.
- Get rollback ready. Know how to
  [disable a workflow](/build/workflows.md#enabling-or-disabling-a-workflow) and
  how to restore its previous version from GitHub, and test both.
- Train users and system administrators on the security practices that apply to
  them, and agree who to contact to report a security issue.

The
[Project Security Configuration & Go-Live Checklist](https://docs.google.com/document/d/1CbQkN7SqNmXeqt3nMTYP4ioQlTuwF2LbDkkFqhp0zsU/edit?usp=sharing)
is a template for this review.

### Phase-gate check: deployment

- Only the people who run the live integration can open the production project.
- Every credential used in production has been rotated.
- You have tested disabling the workflow and restoring a previous version.
- Users know how to report a security issue, and to whom.

## Operations

The main risks build up over time: people who have left but still have access,
outdated adaptors, and data kept longer than it should be.

- Review access regularly. Remove inactive collaborators and check that each
  credential owner still works on the project. Every collaborator, including
  Viewers, can
  [export the project's history](/manage-projects/io-data-storage.md#export-history)
  with its inputs and outputs. In the `Collaboration` tab, the **Grant support
  access** setting lets the instance's support users open the project with
  Editor permissions; turn it off when you don't need support.
- Keep adaptors up to date, and read the changelog before you upgrade a step to
  a new version.
- Monitor your workflows. Turn on
  [failure alerts and digests](/manage-projects/notifications.md), and look into
  unusual failures such as repeated authentication errors.
- Enforce your retention and deletion policy. Check that the
  [history retention period](/manage-projects/retention-periods.md) still
  matches your data policy, and delete projects you no longer use.
- Agree how changes are requested, reviewed, and approved, and train partners on
  that process.

### Phase-gate check: operations

Repeat these checks on a regular schedule, such as every quarter:

- Every collaborator still needs access, with their current role.
- Every credential has a current owner and a recent rotation date.
- Adaptor versions are supported and up to date.
- Retention settings still match the data policy.

## The Security Guidebook

The practices above build on the 23 best practices in the Security Guidebook for
Data Integration Implementations. View the slides below, or share and download
them from [bit.ly/security_guidebook](https://bit.ly/security_guidebook).

<p><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSflwoTK6G7JnilqTqh7ntlzXARU2ITREXDV6hJCVpvN5gwVRn97sLVrG7pYV54UP2GhX7YPO_JSHn5/embed?start=false&loop=false&delayms=30000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></p>

## Resources referenced in the guidebook

- [Principles for Digital Development](https://digitalprinciples.org/principles/)
- [UNICEF policy on personal data protection](https://www.unicef.org/supply/media/5356/file/Policy-on-personal-data-protection-July2020.pdf.pdf)
- [International Committee of the Red Cross Handbook on data protection in humanitarian action](https://www.icrc.org/en/data-protection-humanitarian-action-handbook)
- [GDPR Quick Guide](https://gdpr.eu/what-is-gdpr/)
- [Sanity.io A Rough Guide to Running a GDPR Compliant SaaS Business](https://www.sanity.io/blog/a-rough-guide-to-running-a-gdpr-compliant-saas-business)
- [OWASP API Security Project](https://owasp.org/API-Security/)
- [GovStack Security Building Block](https://specs.govstack.global/security)
- [Health Data Governance Principles](https://www.healthdataprinciples.org/)
- [CDC Health Data Privacy, Confidentiality, and Security Guidelines](https://gicsandbox.org/sandbox-cms/health-data-privacy-confidentiality-and-security-guidelines-development-toolkit#dd01fcf80d4d46f08a099b282bc23f16)

## OpenFn resources

For the security controls built into the OpenFn platform, see
[Trust, Security & Compliance](/get-started/security-compliance.md) and
[openfn.org/trust](https://www.openfn.org/trust). Developers writing job code
should also read
[Security considerations for OpenFn development](/build-for-developers/security-for-devs.md).

These OpenFn templates are referenced in the guidebook:

- [Mapping Specification Template](https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit#gid=1822444315)
- [Solution Architecture Diagram](https://lucid.app/lucidchart/1e997197-2d67-4393-8394-a532d83561b2/edit#?templateid=fb96ae05-e288-4d1f-b3fc-2cbf7641a7cc)
- [BPMN Diagram resources](/design/design-workflow.md#diagram-using-global-standards)
- [Project Security Configuration & Go-Live Checklist](https://docs.google.com/document/d/1CbQkN7SqNmXeqt3nMTYP4ioQlTuwF2LbDkkFqhp0zsU/edit?usp=sharing)

## Communities of practice

These communities share security guidance for digital health and digital public
goods:

- [GovStack](https://www.govstack.global/)
- [DHIS2 Security Team & Community of Practice](https://dhis2.org/security/)
- [Asia eHealth Information Network (AeHIN) Communities of Practice](https://www.asiaehealthinformationnetwork.org/communities-of-practice/)
