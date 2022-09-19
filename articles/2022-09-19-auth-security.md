---
layout: post
title: 'Secure by design: a roadmap to secure authentication and authorization'
author: Amber Rignell
author_url: https://github.com/amberrignell
author_image_url: https://avatars.githubusercontent.com/amberrignell
tags: [security, authentication, authorization]
image: https://user-images.githubusercontent.com/105651463/172341536-ebde5ca0-12b8-4a8a-bb40-da9442701df3.png
featured: false
---

Digital health technologies have a critical role to play in both improving the
delivery of health services _and_ making health systems more robust and
adaptable. Whilst this has been the consensus for a while, various factors such
as bureaucracy, lack of capacity, authority/ownership, budget or simply lack of
prioritization have hindered the adoption and implementation of such
technologies.

However, the covid-19 pandemic has brought digital health systems back to the
top of the agenda, having forced governments to adapt their health systems and
processes in a short amount of time and confronted them with the fragility and
inflexibility of some of their existing systems. This has led to an increase in
funding for both new and existing health technologies.

At the same time, the covid-19 pandemic also saw an increase in data breaches
and data leaks in the healthcare sector. Whilst these are a serious matter in
any system, the nature of the healthcare technologies means that the data they
are storing or managing almost always includes Personally Identifiable
Information (PII) which, if leaked, can have dramatic consequences for those
they identify.

The higher the number of application technologies and quantity of data stored in
these, the higher the risk of vulnerabilities and negative impact of a data
breach or data leak. If Global Goods are to make the most of this renewed
interest and increase in funding for digital health technologies, it is crucial
for them to keep security as a top priority to ensure that they ‘do no harm’, a
core[ Digital Public Good](https://digitalpublicgoods.net/standard/) principle.

Several organizations have already put some thought into documenting security
best practices and standards. However, none situate all key security decisions
within the wider context of a product development timeline or roadmap. This
requires individuals to regularly scan through long lists of security
recommendations to pick out and prioritize their implementation, increasing the
likelihood of an oversight or early-made product decisions which make it harder
to implement such security features down the line.

At Open Function Group, our own product manager has been scanning through
numerous resources to pick out and prioritize the features required to get to
fully-secure authentication and authorization for our newest product
[Lightning](https://docs.openfn.org/documentation/about-lightning/) - and make
sure that nothing falls through the cracks.

We’ve taken this opportunity to put together this resource documenting the
specific security measures that should be considered at each stage of product
development \_specifically with regards to authentication and authorization.
\_Our hope is that this will make it easier for other PMs in the GG/DPG
community to get these features into their backlog/roadmap from the outset and
make sure they are following a ‘secure by design’ approach. It ties in learnings
from the wider DPG community, as well as recommendations from
[GovStack](https://www.govstack.global/), [OpenHIE](https://ohie.org/),
[OWASP](https://owasp.org/) and [NIST](https://www.nist.gov/cyberframework).

## I. Context and definitions

Whilst security should be a priority for any feature development, this resource
focuses on authentication and authorization for two reasons.

Firstly, authentication and authorization are critical, foundational elements to
keeping resources secure and are common culprits for application
vulnerabilities: ‘broken access control’ and ‘identification and authentication
failures’ ranked 1st and 7th in the
[OWASP 2021 top 10](https://owasp.org/Top10/#welcome-to-the-owasp-top-10-2021)
most critical security risks to web applications.

Secondly, almost all DPG/GG software applications require authentication and
authorization which makes this document relevant to the whole sector.

Before we delve any deeper, it is important to define both authentication and
authorization since these terms often get confused:

- **Authentication** is the process or action of verifying a user’s identity -
  in other words, confirming that a user is who they claim to be. It relies on
  **digital identity** - information used by an application to identify an
  external agent (this could be a person, organization, application or device).
- **Authorization **is the process of verifying what resources a user can
  access.

  ![alt_text](/img/authentication-vs-athorization.png 'image_tooltip')

  _Source:
  [Heimdal Security](https://heimdalsecurity.com/blog/authentication-vs-authorization/)_

Authentication and authorization both work _together_ to secure who can access
which resources within an application.

## II. Laying the groundwork for authentication and authorization

One challenge of product development is that even when you know which features
are required, you cannot build them out all at once. As a product manager that
is eager to get _something_ in front of users as soon as possible to start
seeing how people interact with it and testing out your assumptions, it's
tempting to skim over authentication and authorization as a product area that
has less unknowns and de-prioritise it. However, authentication and
authorization touches all areas of a product and requires a lot of planning and
decision making, so it's crucial to get the correct foundations set up before
you start fleshing out other features. In addition, the earlier authentication
and authorization is set up, the more likely it is that any bugs related to them
can be detected and addressed.

When it comes to security, it is always better to go with tried and tested
libraries, frameworks or systems where possible rather than building out new
ones, as building from scratch increases the likelihood of vulnerabilities.
[Auth0](https://auth0.com/) is an example of a good authentication and
authorization platform that could be used - unfortunately it is proprietary
which means that it does not satisfy the requirements for products that must be
fully open source.

If you are building out your own authentication and authorization system, the
following are some of the key features that need to be put in place from the
outset and before other product features can be implemented.

### A. Local authentication

**Select a digital identity system**

The first decision to make when setting up authentication is which type of
identity to use. There are several types of identity systems: we’ll introduce
foundational, functional and open market identity systems but you can find more
types [here](https://digitalid.design/core-concepts-processes.html).

1.  **A foundational identity system** is an identification system primarily
    created to manage identity information for the general population. You would
    typically use a foundational identity system if your application was
    providing a service on behalf of a country.
    [OpenCRVS](https://www.opencrvs.org/) is one example of a DPG which uses
    foundational identity: their users are citizens who need to carry out civil
    registration.
2.  **A functional identity system** is where identity is used for a particular
    sector, for example Voter Registration or driver’s licenses.

    Foundational and functional identity systems are typically used for
    government services.

![alt_text](/img/foundational-functional-identity.png 'image_tooltip')

_World Bank ID4D Practitioner’s Guide:
[https://id4d.worldbank.org/guide/types-id-systems](https://id4d.worldbank.org/guide/types-id-systems)_

3.  **An Open Market Identity System** is when an application creates and
    manages their own digital identities**.**

:::tip

If you are implementing foundational identity, you can use the
[MOSIP](https://mosip.io/) identity platform. Implementing a foundational
identity system is currently out of scope for this resource. However, we would
encourage anyone with more relevant experience to complement this resource with
a section on implementing it.

:::

**Choose a user identifier**

Digital identity can be created several different ways, but the most common is
through a username or email. Other forms include voice verification, retina and
iris however most DPGs are used through the web rather than mobile phones and
therefore simply use email or username.

If your application requires users to interact with each other then you will
need to have usernames so that they can post whilst maintaining anonymity if
this is required. In either case, it is worth focussing the login process around
the user’s _email_ not their username, since they are more likely to forget a
username they may have made up. Make sure your user IDs

**Implement single-factor authentication**

In order to prevent attacks such as brute force attacks or dictionary attacks it
is important to set password validation rules to ensure users create secure
passwords. Some common rules include setting a minimum character limit,
restricting sequential or repetitive characters, restricting context-specific
passwords such as . Good resources to view more complete lists are the
[OpenHIE guidelines](https://davintechgroup.com/toolkit/password-requirements-gdpr-iso-27001-27002-pci-dss-nist-800-53/)
and
[NIST password requirements](https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c6-implement-digital-identity.html#password-requirements).

:::tip

Encourage the use of long passwords, however do not add complexity requirements
as these are actually not very effective.

:::tip

**Store users in a database**

Once a user registers, you’ll want to create a universally unique identifier
(UUID) for each user. Whilst it may be tempting to use a serial integer and
solid application design would prevent potential hackers from guessing IDs to
target, using a UUID both prevents the serial guessing hack where a hacker could
try passing in a different ID into a URL (i’m user 7, so try typing
users/8/credentials into the URL) and may prevent issues that stem from
collisions across multiple databases.

:::tip

Creating UUIDs for each user also ensures that you can maintain accountability.

:::

Passwords should never be stored as strings in the database. Rather, when a user
creates a password an encrypted hash should be saved to avoid them being exposed
if an external party gets hold of the database. Make sure to use a hash
specifically built for this purpose and designed to be slow to make brute-force
attacks more difficult, for example bcrypt rather than SHA256 . For further
information, OWASP has a dedicated password storage
[cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).

**Session management **

Session management is when a server maintains the state of a user’s
authentication to avoid them having to authenticate for every request. Some
things to look out for here are _how_ the token is being generated, _what_ it
will store, _where_ it will be stored and _when_ it will expire. See the NIST
guidelines on session management
[here](https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c6-implement-digital-identity.html#session-generation-and-expiration)
and cheatsheet
[here](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html).

### B. Authorization

**Choose your authorization model**

Choosing the correct authorization model from the outset is incredibly
important. As mentioned in
[OWASP’s top 10 proactive controls](https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c7-enforce-access-controls.html#design-access-control-thoroughly-up-front),
it is crucial to design your authorization thoroughly up front to avoid having
to reengineer it later on. There are different ways of managing a user’s access
to resources: ACL, RBAC and ABAC.

- An **access-control list (ACL)** is a table listing the permissions attached
  to computing resources. It involves having an entry for each user with the
  resources they have access to. This is rather difficult to maintain and rarely
  used nowadays.
- **Role-based access control (RBAC)** simplifies managing access by assigning a
  set of permissions based on a user’s role _within an organization_, which in
  turn can be assigned to the user. For example, if the ‘editor’ role has read
  and write permissions for all resources, then any user assigned that role will
  receive the same permissions.
- Finally, **Attribute-based access control (ABAC) **allows you to have more
  fine-grained access control, by determining different permissions based on a
  _combination_ of several attributes (for example subject role, resource type
  and action).

Whilst it is a bit more complicated to implement, ABAC provides the most
flexibility and granularity, thus more security and control over who can access
which resources.

:::tip

It’s worth taking the extra time to think long and hard about which of these to
go for, since switching from one to another down the line is quite complicated.

:::

:::tip

At OpenFn, we are implementing ABAC - a user’s access is dependent on the
resource type (project, credential) and action (read or write).

:::

**Define user roles**

Once you have figured out how to create user accounts and enable users to log in
and out, you should be thinking about how to manage their access to resources.
It’s worth figuring out basic roles or sets of permissions from the beginning,
in order to ensure you think about access for different roles as and when you
add resources - and make sure that when a new user is created they do have
_some_ permissions.

In order to define user roles, think about the different user types that might
be using your application and what actions each user type would need to carry
out. Depending on how far along you are in app development, it helps to take a
look at your database or simply map out all of your resources. Then, think about
what CRUD (create, read, update, delete) permissions each user might need. Some
typical user roles are ‘administrator’, ‘owner’, ‘editor’, ‘viewer’.

:::tip

When defining users and roles, think about where these will be scoped. For
example, your application might have users and project_users, where the roles
should be set on the project_user since that is where the access is scoped. One
user might need ‘Editor’ permissions on one project but only ‘viewer’
permissions on another. - OpenFn

:::

:::tip

“Start simple, the more complexity you add the more likely you are to make
implementation errors” - DHIS2

:::

**Implement access control**

Once you’ve figured out your authorization model and user roles, you are all set
to implement access controls. Choose an authorization library, making sure it’s
a widely used, well maintained and well documented one. Ensure that all access
requests go through some kind of verification, and follow the concept of _deny
by default_ - make sure that if a request is not specifically allowed, it should
be denied. Make sure to avoid hardcoding role - for example instead of using
code like user.hasRole("ADMIN"), user.hasAccess("DELETE_ACCOUNT"). -
[ OWASP proactive controls ](https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c7-enforce-access-controls.html#don-t-hardcode-roles)

:::tip

“Make sure your access control is all centralized so that they are easier to
audit” - DHIS2

:::

These first few features allow you to have the basic structures set up within
your application to focus on the rest of your product development and start
getting it to a point where you can give test accounts to users. Note that these
by no means make your application fully secure. Rather, they lay the foundations
necessary for engineers to include authorization as they work on other product
areas and avoid them having to later come back and retro-fit it onto the whole
product.

:::tip

If you are starting to ask users to play around with your product at this point,
make sure to indicate it is still in Alpha stage, or add a notice in the app
reminding them it is not yet fully secure.

:::

## III. Securing your authentication and authorization

As your product development gets further along, you will get to a stage where
you want to release it. Whilst it’s important to get your product in front of
users as early as possible (Reid Hoffman once said “If you’re not embarrassed by
the first version of your product, you've launched too late”). This does in no
way apply to security.

This next section covers some key security features that _should_ be implemented
before your application is released.

### A. Password management

In their latest
[Application Verification Security Standards](https://owasp.org/www-pdf-archive/OWASP_Application_Security_Verification_Standard_4.0-en.pdf),
NIST included Multi-Factor Authentication (MFA) as part of their AAL1
(Authenticator Assurance Level), flagging the fact that the number of passwords
and usernames that are publicly known or attainable by malicious individuals can
no longer be ignored given the number of data breaches. That’s why implementing
multi-factor authentication must come as soon as possible in the roadmap. Read
more about MFA vulnerabilities
[here](https://portswigger.net/web-security/authentication/multi-factor).

Ensure you implement password change and recovery mechanisms, keeping in mind
the following
[cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html).
Lock users out after too many password attempts to prevent brute force attacks
and set up periodic password resets.

### B. Moving towards a federated identity

When users have a different (and long/complex) password for every application
they use, they struggle to remember them. Whilst it is recommended to use a
password manager, very few do and instead store these in insecure ways such as
in a file on their computer (which could be hacked) or reuse the same password
across several applications. Providing users with a way to use a single set of
credentials for several applications thus improves application security by
reducing the likelihood of unsafe password storage, with the nice benefit of
also improving user experience. In addition to this, by providing administrators
with a single IdP (defined below) to manage identities and access within an
organization improves security.

There are two ways of achieving this: Single Sign-On (SSO) and Federated
Identity Management (FIM). The difference between both lies in their scope.
Whereas SSO allows users to access multiple _applications_ _within the same
domain_ using the same set of credentials, FIM allows them to do this across
_applications in different domains_. FIM is a way of sharing user identities
across applications run by different organizations, and _includes_ SSO.

There are two components to federated identity: an Identity Provider (IdP) which
manages a user’s identity and a Service Provider (SP) - the web application
which needs to verify that user’s identity. These interact with each other
through an **authentication protocol **which relays authentication data between
the IdP and SP.

Implementing federated identity for your application therefore requires you to
support an authentication protocol, of which the most known are SAML, OpenID
Connect and LDAP. These differ in terms of _what_ they pass on to the service
provider and how (json or XML).

1. **SAML **(security assertion markup language) is an XML-based protocol for
   authentication AND authorization. It allows an IdP to pass _authentication,
   attribute and authorization statements_ to your application.
2. **OpenID Connect, **built on top of Oauth to complement its authorization
   functionality with authentication, passes JWT (json web tokens) which contain
   claims about a user to your application.
3. **LDAP **(Lightweight Directory Access Protocol) is a directory services
   protocol which allows you to connect with an active directory which can
   handle authentication and returns an access token.

   :::tip

   OpenID connect is easiest to implement across organizations. OpenID Connect
   and SAML would both work with most identity providers - the difference is
   that some identity providers would have a preference or work better with one
   over the other.

   :::

   Having these protocols set up will enable anyone running your application to
   configure federated identity with the identity provider of their choice:
   Azure AD, KeyCloak, OAuth …

   Comment: “would there be a way for the DPG community to have a common
   approach to authentication and authorization?”

### C. Identity and Access Management

User’s identities and their access changes over time (a user may leave an
organization and need to have their account deleted, or they may start working
on a new project which requires them to acquire new permissions). Implementing
easy ways to track/audit, grant and revoke access is key to ensuring that
administrators properly manage user access over time.

Administrators should have visibility over users and their permissions to
quickly identify if any user has access to resources that are not required for
their role and stay in line with the principle of least privilege. Simple access
requests are also key - if the flow for granting a user new permissions takes
too long, there is a risk that administrators might grant more access than
required to avoid having to come back for future requests.

![alt_text](/img/identity-lifecycle.png 'identity lifecycle')

As mentioned, this section is not an exhaustive list. Once you have implemented
the above, take the time to carry out an audit and run through security
checklists. Make sure to carry out extensive testing - OWASP has a whole section
for testing authentication, authorization and session management
[here](https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf).
Another option is to get an external party to conduct penetration testing.

## IV. API authentication and authorization

At some point later in your product development, you may want to expose an API
to allow other systems to interact with your application. Since an API gives
access to view and edit resources, it also requires strong authentication and
authorization. The following are some key authentication and authorization
recommendations for developing a secure API.

### A. API authentication methods

This section introduces common API authentication methods (Oauth, Basic, API
keys and access tokens) whilst discussing the pros and cons of each of these.
Your API may support one or more methods of authentication.

1. **[Basic auth](https://www.twilio.com/docs/glossary/what-is-basic-authentication)
   **involves asking requests to provide a username and password in their
   request. These are usually a base64 encoded string sent in the Authorization
   header. It is only secure if used with HTTPS/SSL.
2. **API key **authorization requires requests to include a token sent in the
   query parameters or the request header. It is also only secure if used with
   HTTPS/SSL.
3. **Oauth 2.0 **authorization gives limited access to data through an access
   token. It is much safer than API keys and Basic auth, since access tokens
   expire, meaning that even if someone were able to gain access to them these
   would only be valid for a limited amount of time. Oauth also has the benefit
   of allowing you to add authorization scopes to limit what a user has access
   to.

### B. API protection features

Additional features can help further protest your API. API gateways provide a
single entrypoint across internal APIs allowing you to handle authentication,
authorization and other security measures like rate limiting all in one place.
IP whitelisting allows you to limit where you accept requests from based on an
IP.
[CORS](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#cors)
prevent cross-site scripting. Rate limiting prevents distributed denial of
service attacks (DDoS). It is helpful to go through the GovStack
[Security BB requirements](https://docs.egovstack.net/v1.1.0/Security_Requirements_v1.1.0.pdf).

## V. Periodic audits, compliance, strengthening and communicating your approach to security

Authentication and authorization is, in a way, never ‘finished’. It’s important
to stay up to date with the evolving threat landscape and related security
recommendations. Application developers should carry out periodic audits to
ensure all security measures are implemented correctly.

:::tip

“For OpenFn who are not security experts, the easiest thing was to work through
the
[OWASP ASVS checklist ](https://owasp.org/www-project-application-security-verification-standard/)and
make sure that we adhered to all of their recommendations. It takes a long time,
but there is a section specifically for authentication and authorization and
it’s definitely worth the effort!” - OpenFn

:::

Beyond periodic audits, application developers should provide administrators
with ways of monitoring their authentication and authorization systems. For
example,
[logging access control events ](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#logging-and-monitoring)would
allow administrators to detect malicious users that might be probing for
vulnerabilities.

Part of pushing for higher security standards across the sector is also about
communicating your approach to security, and making it easier for potential
users/implementers to track what security features are present or missing. Some
DPGs have a dedicated page to security, for example
[DHIS2](https://dhis2.org/security/) and
[OpenMRS](https://wiki.openmrs.org/display/docs/Security). DPG community forums
are also a good place to discuss security (see examples
[here](https://www.google.com/url?q=https://community.dhis2.org/t/how-does-dhis2-protect-personal-information-the-tech-details/5335&sa=D&source=docs&ust=1663343853916388&usg=AOvVaw3SFWmkWXUlI1StWelf6GgA)
and .

Certifications are another way of proving compliance, although these tend to be
rather expensive.

:::tip

If you _do_ want to stay in line with best practices but cannot afford
certifications like SOC2, the NIST framework is quite close to the SOC2
requirements. - Dimagi

:::

You should also think about a strategy for pushing security patches. One
difficulty of being open source is that your codebase is all available online.
So, for example, if you push a commit called ‘fix security vulnerability’ anyone
can immediately identify that vulnerability and exploit it before users
(individuals running an instance of your application) have time to deploy the
latest version. You will never be able to know every single person who’s
downloaded your application, but it is worth keeping a list of security contacts
for big implementations, to ensure you can notify them of the vulnerability and
give them a strategy to patch it _before_ it gets published online.

:::tip

“Think about having a strategy for releasing patches” - DHIS2

:::

It is our role and responsibility to ensure the DPG community as a whole puts
security first, so if you find a vulnerability in your own application, please
communicate it to everyone else.

:::tip

Set up a system within your team for managing dependencies, otherwise it’s easy
to fall behind and then your application will be many versions behind. At Dimagi
they have a rotating task for dealing with dependencies.

:::

It’s easy as a product manager to underestimate how long
authentication/authorization will take to implement - make time for it within
your product development roadmap.

## Conclusion

This resource is by no means exhaustive, or written by an expert. Rather, we
hope that it can be the starting point for a wider discussion amongst the DPG
community and the beginnings of shared guidance for new and existing application
developers.

As you build out your own systems, acquire new learnings and discover new
recommendations you wished had been shared with you from the get go, we
encourage you to get in touch so that we can expand our list of tips to help
make Digital Public Goods and Global Goods more secure.

Even better, if you have the time to scan through your own github repository to
refresh your memory and see how your authentication and authorization system has
evolved over time we’d appreciate contributions.

---

**Resources/bibliography:**

Link to 1.2? -
[https://docs.openfn.org/documentation/getting-started/security](https://docs.openfn.org/documentation/getting-started/security)

Recommendations for controls that should be implemented at the early stages of
product development:
[https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c6-implement-digital-identity.html](https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c6-implement-digital-identity.html)

[https://id4d.worldbank.org/guide/types-id-systems](https://id4d.worldbank.org/guide/types-id-systems)

[https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

[https://id4d.worldbank.org/guide/types-id-systems](https://id4d.worldbank.org/guide/types-id-systems)

[https://digitalid.design/core-concepts-processes.html](https://digitalid.design/core-concepts-processes.html)

[https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#cors](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#cors)

[https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7349636/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7349636/)
