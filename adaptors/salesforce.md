---
title: Salesforce
---

## App Overview

[Salesforce](https://www.salesforce.com/) is a cloud-based **customer
relationship management (CRM)** platform that hosts applications that customers
can access online. Beyond its core CRM product, Salesforce offers a customizable
platform for configuring relational databases, business automation, web portals,
reporting tools, and robust applications for supporting a wide range of use
cases.

### Data Model

At its core, Salesforce is a relational database. It has some out-of-box or
"standard" data tables and features, but can be easily extended to include
"custom" metadata configuration and other app features.

Salesforce data is stored in **individual records (rows)** and organized within
**objects (tables)**. Record attributes are captured in **fields (columns)**.
The data model is configurable, but there are some standard objects that are
provided. Note that naming conventions for custom and standard metadata may
differ (e.g., all "custom" field names include the suffix `__c` like
`CustomField__c`).

Learn more about how data is structured in Salesforce at the links below:

- How data is organized in Salesforce:
  https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5
- Salesforce objects: https://www.salesforcetutorial.com/salesforce-objects/

## Integration Use Cases

Salesforce may be used to manage an organization's programs, operations,
fundraising, and more. Therefore integrations with 3rd-party apps is a common
requirement.

Example user stories:

- As a program or M&E manager working in areas with limited internet
  connectivity, I would like to collect data on a mobile applicaiton that
  supports offline data capture, but then sync the data collected to Salesforce
  so that I can centrally monitor field activities and analyze data collected to
  evaluate program impact.
- As a fundraiser at an NGO, I would like to see all donor information tracked
  in Salesforce so that I can better monitor fundraising activities, nurture
  relationships with all funders, and manage campaigns.

## APIs & Integration Options

Salesforce has a rich ecosystem of developers and ready-made applications. See
the [Salesforce App Exchange](https://appexchange.salesforce.com/) for existing
apps and integrations custom-made for Salesforce. If existing applications do
not meet your functional or budget requirements, leverage Salesforce's robust
APIs to configure a custom integration.

1. **APIs:** Salesforce has a robust set of RESTful APIs that support a wide
   range of operations. For connecting with these APIs, including the
   `Bulk API`, OpenFn has developed a robust API adaptor for quicker integration
   setup - see
   [`language-salesforce`](https://github.com/OpenFn/language-salesforce).
2. **Webhook:** By configuring
   [`Outbound Messages`](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm)
   that can be sent via criteria-based `Workflow Rules`, Salesforce Admins can
   configure real-time notifications to be sent to OpenFn (or any endpoint URL)
   when a specific event occurs. (E.g., every time a new `Contact` is created,
   send an Outbound Message to OpenFn to trigger a data sync between that SF
   `Contact` record and another data system.)

## App Setup & Integration Tips

Salesforce provides robust online documentation (see
[Developer Docs](https://developer.salesforce.com/docs)) and tutorials (see
[Trailheads](https://trailhead.salesforce.com/en?utm_campaign=13515883882&utm_content=125227478042&utm_medium=paid&utm_source=google_sem))
for learning about the platform. See below for helpful tips for your next
Salesforce integration project.

### Field API Names

Salesforce **field API names** (unique names for each piece of metadata - e.g.,
`PatientID__c`) should be referenced in OpenFn integrations, not **field
labels** (business-friendly label that the end user sees - e.g., `Patient ID`)
![image](https://user-images.githubusercontent.com/80456839/128650593-343090da-7f12-468a-aa51-1f87f1cf9f34.webp).

To view the Salesforce API field names, navigate to the Salesforce backend. Via
the web app, select `Setup` from the top naviagation menu to browse the
Salesforce backend settings, metadata configuration, object and field names,
etc.

- In the `Classic` view, search for `Object` in the left-hand `Setup` search box
  without hitting Enter. From the quick results, select `Create -> Objects`.
  This takes you to all the custom objects. Select an object and you'll see all
  the fields and relationships on the object.
- You can also easily view Salesforce API names via the front-end UI by
  downloading the Chrome extension
  [Salesforce Show API Name](https://chrome.google.com/webstore/detail/salesforce-show-api-name/dcfecmnffjopafbbbaepgopfcphnoham).
  Follow the instructions for adding it to Chrome and use it to display API
  names without going to Setup.

### Mapping and Design Considerations

#### External Identifiers

Individual fields can be configured as `external identifiers` to search for a
record via a the API/an external app and to help prevent duplicate records from
being created in Salesforce. To enable this setting on an individual field,
ensure `External ID` is checked on the field settings. Learn more about external
identifiers in Salesforce at
https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html
![image](https://user-images.githubusercontent.com/80456839/128650680-e10fa395-bddb-45bd-bd6c-3a9dda8998f8.webp)

#### Relationships and Lookup Fields

When mapping `lookup` fields (which are similar to database "foreign keys") in
Salesforce, use the external identifier of the related record. Examples:

- Say there is a `Survey__c` object in Salesforce with a lookup field called
  `Respondent__c` that looks up to the `Person__c`object with external ID
  `PersonID__c`. To populate the `Survey__c.Respondent__c` lookup field, our
  mapping will look as follows:
  `Respondent__r.PersonID__c: {personExtIdFromSourceData}`.
- If the metadata are standard objects or fields, then you do not need the `__r`
  to indicate there is a relationship. Example mapping:
  `Account.CustomAccountID__c: {AcctIdFromSourceData}`
- If using the OpenFn adaptor, you may also choose to leverage the
  `relationship(...)` helper function in your job. Example mapping:
  `relationship('Respondent__r', 'PersonID__c', dataValue('sourceField'))`

#### Picklist fields

As you design your integration and map data elements between systems, make sure
that option values for **picklist** fields also match the data from your
connected application. If your other app's field value options do not match
Salesforce picklist values, you should consider (1) transforming or re-labeling
the values received from the source system before sending to Salesforce, or (2)
add new `picklist values` to Salesforce to align the metadata between systems.

_Example:_ When mapping a field that specifies `sex`, the source system could
have the options `"male", "female", "other"` and the destination system has the
options `"M", "F", "Other"`. The mappings would need to specify how to align the
values (e.g., `M: male, F: female`).

**Multi-Select Picklist fields**: If mapping to a Salesforce
`multi-select picklist field`, note that multiple values should be formatted as
semicolon-separated strings (e.g.,
`Services__c: 'Food;Counselling;Medical_Aid`).

### Salesforce Credentials

Users have two options to connect to Salesforce, via **Oauth2** and via a
**security token**. We recommend connecting via Oauth2. If this option isn't
available on your OpenFn instance, reach out to the superuser who deployed it
and ask them to configure a Salesforce Oauth2 client.

For better auditability and securiy, we recommend creating a dedicated "openfn"
integration user (rather than using your personal user). Salesforce provides an
API-only user license.
[See Salesforce documentation](https://help.salesforce.com/s/articleView?id=sf.integration_user.htm&type=5)
to learn how to configure this. API-only users require an Oauth credential.

#### Oauth2

When connecting via Oauth2, choose only the scopes you require.
([See Salesforce](https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_tokens_scopes.htm&type=5)
for explanations of these options.)

![Salesforce Oauth2](/img/salesforce-oauth2.webp)

#### Security Token

If you are not using Oauth2, you'll need to provide a username, password, login
URL, and security token to authenticate via a user. **Note every time you reset
the user's password, the security token will reset and you need to update the
Credential record used in your OpenFn job.**

A "Salesforce" Credential record should include:

- Username
- Password
- Security Token (Salesforce will email you this when you set your password. If
  you cannot find "security token" in your inbox, see below for how to reset
  it.)
- Login URL: For a production system, use `https://login.salesforce.com`. For
  sandbox environments, use `https://test.salesforce.com`. For custom domains,
  use `<my-domain>.my.salesforce.com`

![Salesforce Cred](/img/salesforce-old-cred.webp)

For use in the CLI, see an example
[salesforce configuration](/adaptors/packages/salesforce-configuration-schema)

#### Resetting Your Security Token

[See instructions here](https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5)
or below screenshot. Once reset, you will receive an email from Salesforce.
Please save this `security token` in your OpenFn `Credential`.

![Token Reset](/img/security-token.webp)

## Common Errors

1. `INVALID_FIELD: Foreign key external id not found`: This error message
   usually means that the parent record for an object has not been synced. For
   example, if one tries uploading participants for an event that has not yet
   been synced.
2. `TypeError [Error]`:This error usually mean that the job received a part of
   the message that it wasn't expecting, or there is a syntax error in your job
   code. It means that the job needs to be updated to know how to handle the
   message.
3. `NOT_FOUND: Provided external ID field does not exist or is not accessible`:
   This error usually means that `External ID` has not been checked in the field
   settings in Salesforce. See Mapping and Design Considerations section above.
4. `MULTIPLE_CHOICES: Multiple records found`: This error means that Salesforce
   has found multiple records with the `External ID` that was specified.
5. `REQUIRED_FIELD_MISSING: Required fields are missing`: This error usually
   means that a field which is required on the object being updated has not been
   set.
6. `JSON_PARSER_ERROR`: This error usually means there is an error with how you
   are mappings and assigning fields. For example, this error would be thrown if
   an empty string ' ' was being mapped to a date value.
7. `RangeError [Error]: Invalid time value`: This error is telling us that the
   datetime in the source data is in an unexpected format and not handled by the
   job. You may need to either manually clean the source data, or update the
   cleaning rules in the job to automate this cleaning step.
8. `INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields`: This might
   occur when trying to update a Relationship field, for example a Person
   related to a Person's Visit. The field setting `Allow reparenting` on the
   Master-Detail relationship field may need to be turned on .
9. `UNABLE_TO_LOCK_ROW: unable to obtain exclusive access to this record`: This
   error occurs when either 1) the OpenFn job tries to update the same record
   more than once at the same time or 2) the OpenFn job tries to updates a
   Salesforce record at the same time as someone else in the Salesforce system
   (this includes any automation that may be running in parallel to the OpenFn
   jobs).
10. `Maximum polling attempt reached`: This error occur when the maximum time
    allowed for checking the status of a bulk data operation is exceeded, It
    indicates a delay in processing from salesforce side.
11. `query(): <h1>Bad Message 414</h1><pre>reason: URI Too Long</pre>`: This
    error occur when you have exceeded the character limit in a where clause
    when using a `query()` function

## Salesforce Limits

1. If using the `bulk()` adaptor functions,
   [see Salesforce docs](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm)
   on Bulk API Limits.
2. If using the standard `query()` function (_not_ bulk API), note the
   [Salesforce SOQL query limits](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm)
   for maximum rows returned per request (e.g., max `2,000` rows returned per
   query request) and the string character limit (e.g., `100,000` string
   character limit for regular SOQL queries, and `4,000` character limit if
   using `WHERE` clause in your query).
3. [See Apex Governor limits](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
   for standard DML limits (e.g., you can only process `10,000` rows per
   transaction if using standard insert/update/upsert operations and not bulk)
   and other limits for Salesforce automation and Apex that might be triggered
   by your OpenFn workflow.
4. [See here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_limits.htm)
   for how to query your org's specific limits, and
   [this article](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm)
   for how to monitor your API usage.

## OpenFn Adaptors

OpenFn supports a robust `salesforce` adaptor
([see adaptor source code](https://github.com/OpenFn/adaptors/blob/main/packages/salesforce/src/Adaptor.js))
with a range of helper functions for common CRUD & upsert operations, and for
accessing the Salesforce bulk API.

## Example Implementations

- MiracleFeet (CommCare-to-Salesforce sync):
  https://github.com/OpenFn/miracle-feet
- Lwala (CommCare-Salesforce 2-way sync): https://github.com/OpenFn/lwala
- GRS CommCare - Salesforce sync: https://github.com/OpenFn/grassroot-soccer
- MailChimp-Salesforce sync: https://github.com/OpenFn/gife

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
