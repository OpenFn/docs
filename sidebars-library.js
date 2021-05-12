const fs = require('fs');

const publicFile = fs.readFileSync('./library/publicPaths.json');
const publicJobs = JSON.parse(publicFile);

// Note: we can include out own examples here.
const jobs = [
  ...publicJobs,
  { id: 'jobs/alter-state-before-operations', adaptor: 'salesforce' },
  { id: 'jobs/async-and-array-dot-map', adaptor: 'salesforce' },
  {
    id: 'jobs/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce',
    adaptor: 'salesforce',
  },
  { id: 'jobs/CommCare-FHIR', adaptor: 'salesforce' },
  { id: 'jobs/complex-http-request-chains', adaptor: 'salesforce' },
  { id: 'jobs/complex-state-control', adaptor: 'salesforce' },
  { id: 'jobs/concatenate-many-fields-with-nulls', adaptor: 'salesforce' },
  { id: 'jobs/create-if-proposal', adaptor: 'salesforce' },
  { id: 'jobs/Create-SMS-Linked-to-Contact-in-SF', adaptor: 'salesforce' },
  { id: 'jobs/DHIS2-DataValues-API', adaptor: 'salesforce' },
  { id: 'jobs/DHIS2-Events-API', adaptor: 'salesforce' },
  {
    id: 'jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks',
    adaptor: 'salesforce',
  },
  { id: 'jobs/promise-all-nested-requests', adaptor: 'salesforce' },
  { id: 'jobs/send-mail-in-mailgun', adaptor: 'salesforce' },
  { id: 'jobs/send-sms-from-salesforce-workflow', adaptor: 'salesforce' },
  { id: 'jobs/timeout', adaptor: 'salesforce' },
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
