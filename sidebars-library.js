module.exports = {
  library: [
    { type: 'doc', id: 'library-intro' },
    {
      type: 'category',
      label: 'Jobs',
      items: [
        'jobs/alter-state-before-operations',
        'jobs/async-and-array-dot-map',
        'jobs/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce',
        'jobs/CommCare-FHIR',
        'jobs/complex-state-control',
        'jobs/DHIS2-Events-API',
        'jobs/concatenate-many-fields-with-nulls',
        'jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks',
        'jobs/create-if-proposal',
        'jobs/send-sms-from-salesforce-workflow',
        'jobs/Create-SMS-Linked-to-Contact-in-SF',
        'jobs/upsert-many-items-in-array-with-value-outside-array',
        'jobs/complex-http-request-chains',
        'jobs/DHIS2-DataValues-API',
        'jobs/workWithIdAfterInsertOrUpsert',
      ],
    },
    {
      type: 'category',
      label: 'Triggers',
      items: ['triggers/xmlns'],
    },
  ],
};
