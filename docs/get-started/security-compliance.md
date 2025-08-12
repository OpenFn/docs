---
sidebar_label: Security & Compliance
title: Security & Compliance
---

# All about S³

At OpenFn, we prioritize **Secure**, **Stable**, and **Scalable** (**“S³”** is
our mantra) solutions—in that order. We protect your data, maintain live
integrations, and grow alongside your organization. Trusted by governments and
NGOs worldwide.

✓ Secure platform defaults to protect your data and minimize breaches

✓ Robust, configurable security settings to ensure compliance with your policies

✓ Build “zero-persistence” data pipelines to fully control where data is stored

✓ Security implementation training & guidance for your project teams
([read more](../get-started/security.md))

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
([see docs](../deploy/options.md)) and workflows can be configured to adhere to
your organization's specific data sharing agreements and security policies.

Consult the `Manage Projects` docs pages for more on project and
[data storage settings](../manage-projects/io-data-storage.md).

See the below diagram for an example architecture where even the OpenFn Cloud
can be configured as a **“zero-persistence” data pipeline** to ensure compliance
with data security and residency requirements. This enables partners to rapidly
configure and pilot projects using the turnkey OpenFn cloud-hosted platform,
before migrating to a local deployment when they’re ready to scale.

![Sample Architecture](/img/zero-persistence.webp)

To delete your project data at any time, you can
[delete your project](../manage-projects/platform-mgmt.md) or
[delete your account](../manage-users/user-profile.md).

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

[Credentials](../manage-projects/manage-credentials.md), used to grant OpenFn
API access to your various technologies, are encrypted at rest so that, in the
unlikely event of a database breach, without access to multiple, independently
secured boxes an attacker would be unable to read your authentication
information.

Connections to your destination applications are only made over HTTPS, using SSL
and basic authentication in most cases—with the technical connection
specifications being determined by the REST endpoint of the application to which
you are connecting. Technical documentation for individual adaptors can be found
in the [Adaptor docs](/adaptors) or in their respective repositories on Github
at [github.com/OpenFn/adaptors](https://github.com/OpenFn/adaptors).

Credentials can only be viewed by you (the creator), and are loaded into your
private runtime for job execution. You can delete these credentials at any time
and they will be purged from the system.
[See docs](../manage-users/user-credentials.md) for more on OpenFn credentials
management and sharing.

## User Access Management and RBAC

OpenFn supports user access management through **role-based access control
(RBAC)**, allowing admins to assign granular permissions at both the environment
and project levels. Roles (e.g., Admin, Editor, Viewer) control who can view,
edit, run, or manage workflows and credentials. Access can be restricted to
specific projects or environment configurations, with support for audit logs and
scoped API tokens to ensure security and compliance.

When new users are invited to work on your Project as Collaborators, they are
assigned a role that determines their permissions. See docs on
[Collaboration](../manage-projects/collaboration.md) and
[User Roles](../manage-projects/user-roles-permissions.md) for more information.

When users register for the platform, they will be prompted to create a secure
password. OpenFn super administrators can also enable
[Multi-Factor Authentication](../manage-users/user-profile.md), password expiry,
and stale account lockout.

:::info More OpenFn Security Questions?

First, be sure to consult the [Trust](https://www.openfn.org/trust) and
[Compliance](https://www.openfn.org/compliance) pages on our website, as well as
[Security Implementation Guidebook](../get-started/security.md).

Ask questions on [Community](https://community.openfn.org/) or
[contact our core team](mailto:security@openfn.org) for private queries.

:::
