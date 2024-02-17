---
sidebar_label: Kobo to DHIS2
title: Kobo to DHIS2 Reporting Workflow
slug: /kobo-to-dhis2
---

Workflow Automation Tutorial: Fetching Kobotoolbox Form Submissions, Aggregating
OPV Dose, and Loading to DHIS2

### Overview:

This tutorial guides you through creating an OpenFn workflow to fetch form
submissions from Kobotoolbox, transform the data by counting `OPV0_dose_given`
values, and load the results into DHIS2.

### Prerequisites:

- OpenFn account
- Kobotoolbox account
- DHIS2 account

### Step 1: Get Kobo Form Submission

Create a the first step in workflow convas and give it a name of
`Get Kobo Form Submission`. In this step we will be fetching submissions for a
form with an id `aBpweTNdaGJQFb5EBBwUeo`. This step uses the kobotoolbox adaptor
and we will use the following credential configuration

```json
{
  "baseURL": "https://kf.kobotoolbox.org",
  "username": "openfn_demo",
  "password": "openfn_demo",
  "apiVersion": "v2"
}
```

Open the OpenFn Inspector Editor and add the following code:

```javascript
// Step 1: Fetch Form Submissions from Kobotoolbox
getSubmissions({ formId: 'aBpweTNdaGJQFb5EBBwUeo' });
```

#### Explanation:

- `getSubmissions`: Fetches form submissions.
- `{ formId: "aBpweTNdaGJQFb5EBBwUeo" }`: Specify the form ID to retrieve
  submissions.

#### Testing:

Create an empty input `{}` then click `Create New Work Order` button to run the
workflow. The expected output should contain 17 records in `state.data.results`

### Step 2: Count OPV Dose Given

Create a down stream step after `Get Kobo Form Submission` and give it a name of
`Count OPV Dose Given`. In this step we are going to count all records with
`"OPV0_dose_given": "yes"`. This step will use `common` adaptor and does not
require any credentials. Open the OpenFn Inspector and add the following code in
the editor:

```javascript
// Filter and Count OPV Dose Given
fn(state => {
  const opvDosesGivenCount = state.data.results.filter(
    r => r['OPV0_dose_given'] === 'yes'
  ).length;

  return { ...state, opvDosesGivenCount };
});
```

#### Explanation:

- `fn`: A function in OpenFn for more flexible job writing. It gives you the
  ability to do something to the state and return transformed data to state;
- `opvDosesGivenCount`: Counts the occurrences of 'yes' in the `OPV0_dose_given`
  field.

#### Testing:

Select the first step `Get Kobo Form Submission` and `Create New Work Order`
with an empty input. Both steps should be executed successfully and you should
see in the final state `opvDosesGivenCount: 3` added

### Step 3: Map and Load to DHIS2

Create a down stream step after `Count OPV Dose Given` and give it a name of
`Map and Load to DHIS2`. In this step we will create DHIS2 data values to DHIS2.
We will be using the following credential configuration

```json
{
  "hostUrl": "https://play.dhis2.org/dev",
  "username": "admin",
  "password": "district"
}
```

Open the OpenFn Inspector, add the following code in the editor:

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
`OPV0 doses given` updated in DHIS2

### Conclusion

Congratulations! You've successfully created an OpenFn workflow to automate the
process of fetching form submissions from Kobotoolbox, counting OPV doses given,
and loading data into DHIS2. Adjustments can be made based on specific
requirements or system changes.
