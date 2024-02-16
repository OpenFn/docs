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

### Step 1: Configure Kobotoolbox Adaptor

In the OpenFn Inspector Editor, use the following code:

```javascript
// Step 1: Fetch Form Submissions from Kobotoolbox
getSubmissions({ formId: 'aBpweTNdaGJQFb5EBBwUeo' });
```

Explanation:

- `getSubmissions`: Fetches form submissions.
- `{ formId: "aBpweTNdaGJQFb5EBBwUeo" }`: Specify the form ID to retrieve
  submissions.

### Step 2: Transform and Count OPV Dose Given

In the OpenFn Inspector Editor, add the following code:

```javascript
// Step 2: Transform and Count OPV Dose Given
fn(state => {
  const opvDosesGivenCount = state.data.results.filter(
    r => r['OPV0_dose_given'] === 'yes'
  ).length;

  return { ...state, opvDosesGivenCount };
});
```

Explanation:

- `fn`: A function in OpenFn to transform data.
- `opvDosesGivenCount`: Counts the occurrences of 'yes' in the `OPV0_dose_given`
  field.

### Step 3: Map and Load to DHIS2

Set up the DHIS2 adaptor:

```json
{
  "hostUrl": "https://play.dhis2.org/dev",
  "username": "admin",
  "password": "@some(!)Password"
}
```

In the OpenFn Inspector Editor, add the following code:

```javascript
// Create completeDate with format YYYY-MM-DD
fn(state => {
  const today = new Date().toISOString().slice(0, 10);
  console.log(state.opvDosesGivenCount, 'opv0 doses given');
  return { ...state, today };
});

// Import to DHIS2
create('dataValueSets', state => ({
  dataSet: 'BfMAe6Itzgt', // Child Health
  completeDate: state.today, // Today's date in format 'YYYY-MM-DD'
  period: '202402', // Feb 2024
  orgUnit: 'DiszpKrYNg8', // Ngelehun CHC
  dataValues: [
    {
      dataElement: 'pikOziyCXbM', // OPV0 doses given dataElement ID
      value: state.opvDosesGivenCount, //# of OPV0 doses given
    },
  ],
}));
```

Explanation:

- `create('dataValueSets', {...})`: This OpenFn function is used to create a new
  datavalueset in DHIS2.
- `dataSet`, `completeDate`, `period`, `orgUnit`: Details of the datavalueset.
- `dataValues`: An array containing data elements and their corresponding
  values.

### Conclusion

Congratulations! You've successfully created an OpenFn workflow to automate the
process of fetching form submissions from Kobotoolbox, counting OPV doses given,
and loading data into DHIS2. Adjustments can be made based on specific
requirements or system changes.
