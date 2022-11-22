---
title: 1. Get CommCare Forms (Bulk Extract)
sidebar_label: 1. Get CommCare Forms (Bulk Extract)
id: 1-Get-CommCare-Forms-Bulk-Extract-2021-04-08
keywords:
  - library
  - job
  - expression
  - http
  - each
  - get
  - post
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: 1. Get CommCare Forms (Bulk Extract)
- Adaptor: [`@openfn/language-http`](https://www.github.com/openfn/language-http)
- Adaptor Version: [`v3.1.7`](https://www.github.com/openfn/language-http/releases/tag/v3.1.7)
- Created over 1 year ago
- Updated 9 months ago
- Score: <b>0</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`each`, `get`, `post`

## Expression

```js
get(
  'https://www.commcarehq.org/a/grassrootsoccertrial/api/v0.5/form/',
  {
    query: {
      limit: 1000, //max limit: 1000
      offset: state.meta && state.meta.next ? state.meta.limit + state.meta.offset : 0,
      received_on_start: '2022-02-16',
      received_on_end: '2022-02-18',
      xmlns: 'http://openrosa.org/formdesigner/D771417E-354E-4906-A686-DF0BA230F16A',
    },
  },
  state => {
    const { meta, objects } = state.data;
    const { openfnInboxUrl } = state.configuration;
    const xmlnsList = [
      // 'http://openrosa.org/formdesigner/40BBC9E3-C650-4F72-A027-235BF33D87AB', //Create Intervention form
      // 'http://openrosa.org/formdesigner/D50A9A33-B1B4-41B2-9ACA-15DBBDFBCF8C', //  My Team/Group Name form
      //'http://openrosa.org/formdesigner/D771417E-354E-4906-A686-DF0BA230F16A', // Register Participant form
      // 'http://openrosa.org/formdesigner/2B9F69A2-7E51-49F6-9FF9-F72F3EC14A9E', // Register Participant skillz
      // 'http://openrosa.org/formdesigner/304CABA9-C8A8-4360-83C6-5E2EC1D2C2AC', // Intervention notes
      //'http://openrosa.org/formdesigner/56DB98AC-67EC-4BBA-91FC-9443E84E43CE', //PHQ9
      //  'http://openrosa.org/formdesigner/5E2E3990-2C3C-42F5-BE0B-922ED29939C4', // ART Adherence Self-Reporting Tool
      //  'http://openrosa.org/formdesigner/4CFAC371-88F7-4349-BEB2-3DA2BDE445EA', //Malaria Testing Event Snapshot
      // 'http://openrosa.org/formdesigner/FAF8F169-0FF1-4DE4-98B7-E4450BECBC84', //Malaria Testing Event Statistics
      // 'http://openrosa.org/formdesigner/E31B9126-1DCA-4603-AD57-271A843448B3', //Register Skillz Plus Club
      //'http://openrosa.org/formdesigner/5D8455CE-6044-471D-83BB-131A3D52794B', // Service Referral Followup -> confirm services received
      // 'http://openrosa.org/formdesigner/0B3DD3B4-A767-4671-A63C-8A352DAA8E2D', // service referral followup
      //'http://openrosa.org/formdesigner/59E1207B-969F-402D-9EEE-675504036F78', //Home Visit log form
      // 'http://openrosa.org/formdesigner/3B4B1C64-092A-4922-B033-94D80A11D960', // Coach Session Register form
      //  'http://openrosa.org/formdesigner/41DF97A0-0E4B-460D-B983-13D404565009', //HIV Testing Event Snapshot
      //  'http://openrosa.org/formdesigner/EAA0ABBB-C517-4E7F-82A9-5799E944FE52', //HIV Testing Event Statistics
      // 'http://openrosa.org/formdesigner/EA6C0348-91F7-44FC-8786-B34F50B0CB62', //Register Event
      // 'http://openrosa.org/formdesigner/34DD6DFD-13E7-4E19-8A27-F18B6D39E12E', //Attendance
      //'http://openrosa.org/formdesigner/F55C4DF9-0CCD-4AED-A5C4-1E39ED2E45C4', //Attendance skillz plus club
      // 'http://openrosa.org/formdesigner/A3AF9DA6-1D57-46E4-8431-A5C262DC2DBA', // Pre Challenges
      // 'http://openrosa.org/formdesigner/D2F0F23F-9C0E-41E7-9C46-7553F8B5DCC8', // Post Challenges
      //'http://openrosa.org/formdesigner/0DAB6FD9-A7C1-4F56-A1C8-794B7C123F95', // Service Referral
      // 'http://openrosa.org/formdesigner/98041DA3-B37D-4E8E-A9B9-29EDC036A46A', // Aggregate Service Referrals
      // 'http://openrosa.org/formdesigner/50A337EB-FBD8-4607-A664-21AAE51DFCD1', // Coach Support Visit form
      // 'http://openrosa.org/formdesigner/AA396157-EBF9-4B51-B25A-D5BDA4F3DF73', // Coach Support Visit form Zambia
      // 'http://openrosa.org/formdesigner/3FFDCE4F-35A9-4FA9-971F-EFFDC94E597F', //Risk & vulnerability assessment
      //'http://openrosa.org/formdesigner/3DAF13EC-FA77-4480-8946-667D841B439A', //risk & vulnerability assessment | new Referrals
    ];

    // const forms = objects.filter(obj => xmlnsList.includes(obj.form['@xmlns']));
    const forms = objects;

    state.configuration = { baseUrl: 'https://www.openfn.org' };
    console.log('Posting form submissions to OpenFn Inbox...');

    return each(forms, state => {
      return post(`/inbox/${openfnInboxUrl}`, { body: state.data }, state => ({
        ...state,
        data: {},
        references: [],
      }))(state);
    })(state);
  }
);
//ALL form xmlns codes
//xmlns: 'http://openrosa.org/formdesigner/D50A9A33-B1B4-41B2-9ACA-15DBBDFBCF8C', //  My Team/Group Name form
//xmlns: 'http://openrosa.org/formdesigner/D771417E-354E-4906-A686-DF0BA230F16A', // Register Participant form
//xmlns: 'http://openrosa.org/formdesigner/2B9F69A2-7E51-49F6-9FF9-F72F3EC14A9E', // Register Participant skillz
//xmlns: 'http://openrosa.org/formdesigner/304CABA9-C8A8-4360-83C6-5E2EC1D2C2AC', // Intervention notes
//xmlns: 'http://openrosa.org/formdesigner/304CABA9-C8A8-4360-83C6-5E2EC1D2C2AC', // Intervention Notes form
//xmlns: 'http://openrosa.org/formdesigner/AA396157-EBF9-4B51-B25A-D5BDA4F3DF73', // Coach Support Visit form Zambia
//xmlns: 'http://openrosa.org/formdesigner/50A337EB-FBD8-4607-A664-21AAE51DFCD1', // Coach Support Visit form
//xmlns: 'http://openrosa.org/formdesigner/3B4B1C64-092A-4922-B033-94D80A11D960', // Coach Session Register form
//xmlns: 'http://openrosa.org/formdesigner/34DD6DFD-13E7-4E19-8A27-F18B6D39E12E', //Attendance
//xmlns: 'http://openrosa.org/formdesigner/4CFAC371-88F7-4349-BEB2-3DA2BDE445EA', //Malaria Testing Event Snapshot
//xmlns: 'http://openrosa.org/formdesigner/59E1207B-969F-402D-9EEE-675504036F78', //Home Visit log form
//xmlns: 'http://openrosa.org/formdesigner/41DF97A0-0E4B-460D-B983-13D404565009', //HIV Testing Event Snapshot
//xmlns: 'http://openrosa.org/formdesigner/551BCED9-077B-40EE-849D-0416756B9A75', // PHQ9
//xmlns: 'http://openrosa.org/formdesigner/0DAB6FD9-A7C1-4F56-A1C8-794B7C123F95', // Service Referral
//xmlns: 'http://openrosa.org/formdesigner/0B3DD3B4-A767-4671-A63C-8A352DAA8E2D', // Service Referral Followup
//xmlns: 'http://openrosa.org/formdesigner/98041DA3-B37D-4E8E-A9B9-29EDC036A46A', // Aggregate Service Referrals
//xmlns: 'http://openrosa.org/formdesigner/5E2E3990-2C3C-42F5-BE0B-922ED29939C4', // ART Adherence Self-Reporting Tool
//xmlns: 'http://openrosa.org/formdesigner/A3AF9DA6-1D57-46E4-8431-A5C262DC2DBA', // Pre Challenges
//xmlns: 'http://openrosa.org/formdesigner/D2F0F23F-9C0E-41E7-9C46-7553F8B5DCC8', // Post Challenges
//xmlns: 'http://openrosa.org/formdesigner/FAF8F169-0FF1-4DE4-98B7-E4450BECBC84', // Malaria Testing Event Statistics
//xmlns: 'http://openrosa.org/formdesigner/EA6C0348-91F7-44FC-8786-B34F50B0CB62', //Register Event
//xmlns: 'http://openrosa.org/formdesigner/EAA0ABBB-C517-4E7F-82A9-5799E944FE52', //HIV Testing Event Statistics

```