# Troubleshooting

> What happens if my survey data from ODK needs to link to existing records in my Salesforce system but a respondent enters or selects an invalid `external ID`?

Great question, and don't worry, it happens all the time. Assuming you've already taken all possible measures to either pre-load external IDs in your ODK form or use more human-proof IDs (like barcodes and fingerprints) here's the flow of work:

1. Read the email, and inspect the reason for failure.

2. 99% of failed runs on OpenFn are due to `value mismatches`. The *collected* `id` in ODK doesn't match the *expected* `id` in Salesforce. You must now chose to either:

      A. Edit the source `id` in your `receipt` & retry the attempt.

      B. Edit the related `id` in your destination system & retry the attempt.

      C. Ignore the attempt—this source data will never reach your destination system. (There have been reports of ODK Aggregate's JSON publisher sending dupliate values. If that happens and your run fails due to "duplicate values" on a particular unique field you can safely ignore the run in OpenFn.)

Editing data in your destination system can be done through that system's interface. Many tools that act as `sources` (like ODK) do not allow for easy editing and re-submission of data. You can use OpenFn to edit the source data before retrying the attempt.

### Common Error Messages
The most common error messages with English explanations are:

+ `DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0` - The insert is blocked because you are attempting to create a new record with a unique field with the same value as an existing record.
+ `Required value missing`
+ `ExternalId not found`

### Common errors and how to handle them

#### Are Master-detail relationships in Salesforce reparentable?
```
{ INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields: Contact__c.
Please check the security settings of this field and verify that it is
read/write for your profile or permission set. }
```
This error may arise if a master-detail relationship in Salesforce is not set as
reparentable and the user attempts to run an upsert.