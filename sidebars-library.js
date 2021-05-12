const fs = require('fs');

const publicFile = fs.readFileSync('./library/jobs/auto/publicPaths.json');
const publicJobs = JSON.parse(publicFile);

// Note: we can include out own examples here.
const jobs = [
  ...publicJobs,
  { id: 'jobs/alter-state-before-operations', adaptor: 'salesforce' },
  { id: 'jobs/async-and-array-dot-map', adaptor: 'http' },
  {
    id: 'jobs/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce',
    adaptor: 'salesforce',
  },
  { id: 'jobs/CommCare-FHIR', adaptor: 'openhim' },
  { id: 'jobs/complex-http-request-chains', adaptor: 'http' },
  { id: 'jobs/complex-state-control', adaptor: 'salesforce' },
  { id: 'jobs/concatenate-many-fields-with-nulls', adaptor: 'salesforce' },
  { id: 'jobs/create-if-proposal', adaptor: 'salesforce' },
  { id: 'jobs/Create-SMS-Linked-to-Contact-in-SF', adaptor: 'salesforce' },
  { id: 'jobs/DHIS2-DataValues-API', adaptor: 'dhis2' },
  { id: 'jobs/DHIS2-Events-API', adaptor: 'dhis2' },
  {
    id: 'jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks',
    adaptor: 'salesforce',
  },
  { id: 'jobs/promise-all-nested-requests', adaptor: 'http' },
  { id: 'jobs/send-mail-in-mailgun', adaptor: 'mailgun' },
  { id: 'jobs/send-sms-from-salesforce-workflow', adaptor: 'mailgun' },
  { id: 'jobs/timeout', adaptor: 'http' },
  {
    id: 'jobs/upsert-many-items-in-array-with-value-outside-array',
    adaptor: 'salesforce',
  },
];

const groupedJobs = jobs.reduce((r, a) => {
  r[a.adaptor] = r[a.adaptor] || [];
  r[a.adaptor].push(a);
  return r;
}, Object.create(null));

const items = Object.keys(groupedJobs).map(a => {
  return {
    type: 'category',
    label: a,
    items: groupedJobs[a].map(j => ({
      type: 'doc',
      id: j.id,
    })),
  };
});

module.exports = {
  library: [
    { type: 'doc', id: 'library-intro' },
    {
      type: 'category',
      label: 'Jobs',
      items,
    },
    {
      type: 'category',
      label: 'Triggers',
      items: ['triggers/xmlns'],
    },
  ],
};
