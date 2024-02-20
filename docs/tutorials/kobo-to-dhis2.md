---
sidebar_label: Kobo to DHIS2
title: Kobo to DHIS2 Reporting Workflow
slug: /kobo-to-dhis2
---

# Create a Workflow automating reporting between KoboToolbox & DHIS2

In this tutorial, we are going to walk through how to create a simple OpenFn
Workflow that automates reporting from
[KoboToolbox](https://www.kobotoolbox.org/) (a mobile data collection app) and
[DHIS2](https://dhis2.org) (a health information system commonly used for
aggregate reporting on key indicators) using the the `kobotoolbox` and `dhis2`
[Adaptors](/adaptors).

### Video Walkthrough

:::warning

Coming soon: Video tutorial to guide you through this Workflow configuration.

:::

### Workflow Overview:

This OpenFn Workflow will have 3 Steps:

1. Fetch form submissions from Kobotoolbox
2. Count the number of `OPV0_dose_given` values recorded across submissions to
   return an aggregate count of how many beneficiaries have received the OPV0
   immunication
3. Import the aggregate results to DHIS2 to report on the # of doses recorded
   that week

### Prerequisites:

- You have an OpenFn Project
- You have a KoboToolbox account and form to sync (see below for demo
  credentials to use)
- Login info for a DHIS2 instance (see below for login info for the "play" DHIS2
  instance)

### Step 1: Get Kobo Form Submission

Create a the first step in Wrkflow convas.

- Name: `Get Kobo Form Submission`
- Adaptor: `kobotoolbox`
- Version: `latest`
- Credential: see belo

This step uses the kobotoolbox adaptor and we will use the following credential
configuration

```json
{
  "baseURL": "https://kf.kobotoolbox.org",
  "username": "openfn_demo",
  "password": "openfn_demo",
  "apiVersion": "v2"
}
```

In this Step we want to be fetch form submissions from this demo form with the
id `aBpweTNdaGJQFb5EBBwUeo`. To do so, open the
[Inspector Editor](../build/steps/step-editor.md) and add the following Job
code:

```javascript
// Step 1: Fetch Form Submissions from Kobotoolbox
getSubmissions({ formId: 'aBpweTNdaGJQFb5EBBwUeo' });
```

:::tip Need help writing job code?

Check out the docs on the ["kobotoolbox" Adaptor](/adaptors/kobotoolbox),
[configuring Steps](../build/steps/steps.md), and
[job-writing](../build/steps/jobs.md).

:::

#### Explanation:

- `getSubmissions`: Fetches form submissions.
- `{ formId: "aBpweTNdaGJQFb5EBBwUeo" }`: Specify the form ID to retrieve
  submissions.

#### Testing:

Create an empty input `{}` then click `Create New Work Order` button to run the
workflow. [See docs](../build/workflows.md) for more on running Workflows
manually.

The expected ` output`` should contain 17 records in  `state.data.results`

### Step 2: Count OPV Dose Given

Create a second Step after `Get Kobo Form Submission` as follows:

- Name: `Count OPV Dose Given`
- Adaptor: `common` (used whenever we want to add custom JavaScript functions)
- Version: `latest`
- Credential: none needd

In this step we are going to count all records with `"OPV0_dose_given": "yes"`.
To add this logic, open the [Inspector](../build/steps/step-editor.md) and add
the following JOb code in the Editor:

```javascript
// Filter and Count OPV Dose Given
fn(state => {
  const opvDosesGivenCount = state.data.results.filter(
    r => r['OPV0_dose_given'] === 'yes'
  ).length;

  return { ...state, opvDosesGivenCount };
});
```

::tip Need help writing job code? Or modifying this logic?

Check out the docs on the ["common" Adaptor](/adaptors/packages/common-docs),
[configuring Steps](../build/steps/steps.md), and
[job-writing](../build/steps/jobs.md).

:::

#### Explanation:

- `fn`: A function in OpenFn for more flexible job writing. It gives you the
  ability to do something to the state and return transformed data to state;
- `opvDosesGivenCount`: Counts the occurrences of 'yes' in the `OPV0_dose_given`
  field.

#### Testing:

Select the first step `Get Kobo Form Submission` and `Create New Work Order`
with an empty input ([see Workflow docs](../build/workflows.md) if you need help
with running and testing steps). Both steps should be executed successfully and
you should see in the final state `opvDosesGivenCount: 3` added.

### Step 3: Map and Load to DHIS2

Create a third Step after `Count OPV Dose Given` as follows:

- Name: `Map and Load to DHIS2`
- Adaptor: `dhis2`
- Version: `v4.0.3`
- Credential: new `dhis2` credential with the following credential configuration

```json
{
  "hostUrl": "https://play.dhis2.org/dev",
  "username": "admin",
  "password": "district"
}
```

In this Step, we want to add logic to import `dataValues` to DHIS2 to "report"
on the aggregated OPV0 immunization does count calculated in Step 2.

To do so, open the [Inspector](../build/steps/step-editor.md), add the following
Job code in the Editor:

```javascript
// Import to DHIS2
create('dataValueSets', state => ({
  dataSet: 'BfMAe6Itzgt', // Child Health
  period: '202402', // Feb 2024
  orgUnit: 'DiszpKrYNg8', // Ngelehun CHC
  dataValues: [
    {
      categoryOptionCombo: 'Prlt0C1RF0s', //Fixed <1yr
      dataElement: 'x3Do5e7g4Qo', // OPV0 doses given
      value: state.opvDosesGivenCount, //# of OPV0 doses given
    },
  ],
}));
```

::tip Need help writing job code? Or modifying this logic?

Check out the docs on the ["dhis2" Adaptor](/adaptors/dhis2),
[configuring Steps](../build/steps/steps.md), and
[job-writing](../build/steps/jobs.md).

:::

#### Explanation:

- `create('dataValueSets', {...})`: This OpenFn function is used to create a new
  datavalueset in DHIS2.
- `dataSet`, `completeDate`, `period`, `orgUnit`: Details of the datavalueset.
- `dataValues`: An array containing data elements and their corresponding
  values.

#### Testing

Save your changes then navigate to the first step(Get Kobo Form Submission) and
create an empty input `{}` then click `Create New Work Order` button to run the
workflow. All steps should be executed successful and you should see the
`OPV0 doses given` updated in DHIS2. See [Workflow docs](../build/workflows.md)
if you need help running or testing Workflows.

### Conclusion

Congratulations! You've successfully created an OpenFn workflow to automate the
process of fetching form submissions from Kobotoolbox, calculated the aggregated
count of OPV doses given to beneficiaries, and reporting this count as
`dataValues` to DHIS2.

:::tip Are you blocked? Have questions?

Reminder to watch the video (_coming soon!_) or post on the
[Community](https://community.openfn.org) to ask for help!

:::
