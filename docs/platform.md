---
title: Platform Docs
---

<!-- (copied to build/connecting-applications -->


<!--<!-- copied to build/connecting-applications) -->  -->
<!-- (copied to deploy.platform ###inbox security -->

<!-- copied to deploy.platform ###inbox security) -->
<!-- (copied to deploy.platform #creating a compatible notifications service -->


<!-- copied to deploy.platform #creating a compatible notifications service)  -->
<!-- (Copied to build/triggers -->



<!-- copied to build/triggers) -->



<!-- copied to build/jobs -->

#### language-common

- `field('destination_field_name__c', 'value')` Returns a key, value pair in an
  array.
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L248)
- `fields(list_of_fields)` zips key value pairs into an object.
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L258)
- `dataValue('JSON_path')` Picks out a single value from source data.
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L71)
- `each(JSON_path, operation(...))` Scopes an array of data based on a JSONPath
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L194).
  See beta.each when using multiple each()'s in an expression.
- `each(merge(dataPath("CHILD_ARRAY[*]"),fields(field("metaId", dataValue("*meta-instance-id*")),field("parentId", lastReferenceValue("id")))), create(...))`
  merges data into an array then creates for each item in the array
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L272)
- `lastReferenceValue('id')` gets the sfID of the last item created
  [(source)](https://github.com/OpenFn/language-common/blob/master/src/index.js#L96-L100)
- `function(state){return state.references[state.references.length-N].id})` gets
  the sfID of the nth item created

#### `beta.each(JSON_path, operation(...))`

Scopes an array of data based on a JSONPath but then returns to the state it was
given upon completion
[(source)](https://github.com/OpenFn/language-common/blob/master/src/beta.js#L44).
This is necessary if you string multiple `each(...)` functions together in-line
in the same expression. (E.g., Given data which has multiple separate 'repeat
groups' in a form which are rendered as arrays, you want to create new records
for each item inside the first repeat group, then _RETURN TO THE TOP LEVEL_ of
the data, and then create new records for each item in the second repeat group.
Using `beta.each(...)` lets you enter the first array, create your records, then
return to the top level and be able to enter the second array.

#### Salesforce

- `create("DEST_OBJECT_NAME__C", fields(...))` Create a new object. Takes 2
  parameters: An object and attributes.
  [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L42-L63)
- `upsert("DEST_OBJECT_NAME__C", "DEST_OBJECT_EXTERNAL_ID__C", fields(...))`
  Creates or updates an object. Takes 3 paraneters: An object, an ID field and
  attributes.
  [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L65-L80)
- `relationship("DEST_RELATIONSHIP_NAME__r", "EXTERNAL_ID_ON_RELATED_OBJECT__C", "SOURCE_DATA_OR_VALUE")`
  Adds a lookup or 'dome insert' to a record.
  [(source)](https://github.com/OpenFn/language-salesforce/blob/master/src/sourceHelpers.js#L21-L40)

#### dhis2

- `event(...)` Creates an event.
  [(source)](https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L31-L60)
- `dataValueSet(...)` Send data values using the dataValueSets resource
  [(source)](https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L62-L82)

#### OpenMRS

- `person(...)` Takes a payload of data to create a person
  [(source)](https://github.com/OpenFn/language-openmrs/blob/master/src/Adaptor.js#L31-L60)
- `patient(...)` Takes a payload of data to create a patient
  [(source)](https://github.com/OpenFn/language-openmrs/blob/master/src/Adaptor.js#L62-L90)

**For code block examples of job expressions, go to the
[code samples page](build/appendix.md).**

<!-- (copied to deploy/platform -->



<!-- copied to deploy/platform) -->

# <!--(copied to deploy/platform  -->



> > > > > > > origin/main



<!--copied to deploy/platform)  -->
<!--(copied to deploy/platform  -->

## GitHub version control

You're ready to manage your jobs via GitHub, the leading hosted version control
software on the web? Great, this section describes the steps necessary to get
going.

**_N.B.: GitHub integration is currently only available for enterprise users.
Contact [enterprise@openfn.org](mailto:enterprise@openfn.org) to build a custom
plan for your needs._**

### Motivation

Managing large numbers of jobs with multiple contributors is complicated. We
developed the GitHub integration so that OpenFn projects can be linked to GitHub
repositories. You can work collaboratively on your jobs. When commits are made
to a particular branch OpenFn will automatically update the linked job with the
new job file from GitHub.

### Setup Steps

1. Github: Settings -> Personal Access Tokens ->
   [Generate New Token](https://github.com/settings/tokens/new): This token
   should have full control of private repositories.
2. OpenFn: [User Settings](https://www.openfn.org/account): Once the token is
   generated, copy and paste it into the "GitHub Access Token" field on your
   user settings page.
3. OpenFn: Project -> Version Control: Specify the repository owner, repository
   name and branch for automatic deploys. You'd also select to turn on or off
   automatic deploys.
4. GitHub: Repoistory -> Settings -> Webhooks -> Add webhook
5. Copy Payload URL from OpenFn Version Control page and paste into GitHub.
6. Select `application/json` as the Content Type.
7. Copy Secret from OpenFn Version Control page into GitHub.
8. Leave "Just the push event" and "Active" selected, then click "Add Webook".
9. OpenFn: Project -> Jobs -> Job Edit: To link an individual job to a file in a
   GitHub repo, edit that job and paste in the path to the job from the root of
   your GitHub repo. If your repo looks like this, you'd type `sample_job_1.js`
   or `some_folder/some_other_job.js` to link your OpenFn job to the select file
   in your repo.

### Advanced Version Control

Using this GitHub integration, you can revert to previous version of jobs
quickly by resending old GitHub Webhook Events. Access the "Manage Webhook"
interface on GitHub to see a list of all past events and send whichever version
of the job you'd like deployed to your OpenFn project.

<!--copied to deploy/platform)  -->
