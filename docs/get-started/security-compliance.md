---
sidebar_label: Trust & Compliance
title: Trust, Security & Compliance
---

# All about S³

At OpenFn, we prioritize **Secure**, **Stable**, and **Scalable** (**“S³”** is
our mantra) solutions—in that order. We protect your data, maintain live
integrations, and grow alongside your organization. Trusted by governments and
NGOs worldwide.

✓ Secure platform defaults to protect your data and minimize breaches

✓ Robust, configurable security settings to ensure compliance with your policies

✓ Build “zero-persistence” data pipelines that don't store the data they process

✓ Security implementation training & guidance for your project teams
([read more](/get-started/security.md))

See our main website to learn more about OpenFn
[Security & Trust](https://www.openfn.org/trust) and
[Compliance](https://www.openfn.org/compliance).

## Compliance

OpenFn implementations are highly configurable and can be deployed anywhere to
help ensure compliance with your country- or organization-specific data privacy
and security policies.

**For more on how we think about compliance–especially with policies like GDPR
or HIPAA–check out our [Compliance](https://www.openfn.org/compliance) web
page.** Contact [our core team](mailto:support@openfn.org) if interested in
consultation and advisory on how to deploy and configure your OpenFn
implementation to ensure 100% compliance.

## OpenFn and data storage

In your digital ecosystem, typically **OpenFn serves as a data processing and
transfer solution—not as a data storage service.**

As an open source Digital Public Good, OpenFn can be deployed anywhere
([see docs](/deploy/options.md)) and workflows can be configured to adhere to
your organization's specific data sharing agreements and security policies.

Consult the [Manage Projects](/manage-projects/platform-mgmt.md) docs pages for
more on project and
[data storage settings](/manage-projects/io-data-storage.md).

See the below diagram for an example architecture where even the OpenFn Cloud
can be configured as a **“zero-persistence” data pipeline**, so that the inputs
and outputs of workflow runs are not stored. Data still passes through the
OpenFn Cloud while it is processed, and run logs are kept. If data must not
leave a country or network, [deploy OpenFn locally](/deploy/options.md). Many
partners pilot a project on the OpenFn Cloud with zero persistence, then move to
a local deployment when they're ready to scale.

![Sample Architecture](/img/zero-persistence.webp)

To delete your project data at any time, you can
[delete your project](/manage-projects/platform-mgmt.md) or
[delete your account](/manage-users/user-profile.md).

## Encryption

OpenFn Cloud uses a security-oriented Cloud SQL product for data storage that
guarantees 256-bit encryption at rest and we only allow connections with
TLS/SSL.

Platform encryption:

- 256-bit Advanced Encryption Standard
- SSL/TLS encryption in transit
- Credentials/secrets encrypted on disk

Learn more at [openfn.org/trust](https://www.openfn.org/trust#encryption).

## Credentials

[Credentials](/manage-projects/manage-credentials.md), used to grant OpenFn API
access to your various technologies, are encrypted at rest so that, in the
unlikely event of a database breach, without access to multiple, independently
secured boxes an attacker would be unable to read your authentication
information.

Connections to your destination applications are only made over HTTPS, using SSL
and basic authentication in most cases—with the technical connection
specifications being determined by the REST endpoint of the application to which
you are connecting. Technical documentation for individual adaptors can be found
in the [Adaptor docs](/adaptors) or in their respective repositories on Github
at [github.com/OpenFn/adaptors](https://github.com/OpenFn/adaptors).

Each credential has one owner, who chooses which projects can use it. Only the
owner can view or change its secret values in the app. Collaborators with the
Editor role or above can attach a shared credential to a step, and the step's
code receives the credential's values when it runs. Give Editor access only to
people you would trust with those systems. See
[User Credentials](/manage-users/user-credentials.md) for how to share,
transfer, and delete credentials.

## User Access Management and RBAC

OpenFn controls access to each project through **role-based access control
(RBAC)**. Only the people added to a project as collaborators can open it, and
each one has a role: Owner, Admin, Editor, or Viewer. The role decides who can
view, edit, and run workflows, and who can manage the project's settings and
collaborators. See [Collaboration](/manage-projects/collaboration.md) and
[User Roles](/manage-projects/user-roles-permissions.md) for more information.

The instance administrator can view an audit trail of user actions across the
instance. If you use the OpenFn Cloud, contact
[support@openfn.org](mailto:support@openfn.org) to request audit information.

When users register for the platform, they are prompted to create a secure
password. Each user can turn on
[Multi-Factor Authentication](/manage-users/user-profile.md#enable-multi-factor-authentication)
(MFA) for their account. Project owners and admins can also require MFA for
everyone who opens their project, depending on their plan.

:::info More OpenFn Security Questions?

First, be sure to consult the [Trust](https://www.openfn.org/trust) and
[Compliance](https://www.openfn.org/compliance) pages on our website, as well as
[Security Implementation Guidebook](/get-started/security.md).

Ask questions on [Community](https://community.openfn.org/) or
[contact our core team](mailto:security@openfn.org) for private queries.

:::
