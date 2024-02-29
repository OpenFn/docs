module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'get-started/home',
        'get-started/try-out',
        'get-started/terminology',
        'get-started/glossary',
        'get-started/standards',
        'get-started/security-compliance',
        'get-started/security',
        'get-started/implementation-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Design Workflows',
      items: [
        'design/design-overview',
        'design/discovery',
        'design/design-workflow',
        'design/api-discovery',
        'design/mapping-specs',
        'design/workflow-specs',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/tutorial',
        'tutorials/http-to-googlesheets',
        'tutorials/kobo-to-dhis2',
        'tutorials/commcare-to-db',
      ],
    },
    {
      type: 'category',
      label: 'Build & Manage Workflows',
      items: [
        'build/workflows',
        'build/triggers',
        'build/steps/steps',
        'build/steps/step-editor',
        'build/steps/step-design-intro',
        'build/paths',
        'build/credentials',
        'build/limits',
        'build/troubleshooting',
        {
          type: 'category',
          label: 'Jobs',
          items: [
            'build/steps/jobs',
            'build/steps/job-examples',
            'build/steps/operations',
            'build/steps/multiple-operations',
            'build/steps/state',
            'build/steps/each',
            'build/steps/editing-locally',
            'build/steps/working-with-branches',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Build (CLI)',
      items: [
        'build-for-developers/cli-intro',
        'build-for-developers/cli-usage',
        'build-for-developers/cli-walkthrough',
        'build-for-developers/cli-challenges',
        'build-for-developers/jobs',
        'build-for-developers/build-with-api',
        'build-for-developers/security-for-devs',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/options',
        'deploy/requirements',
        'deploy/portability',
        'deploy/portability-versions',
      ],
    },
    {
      type: 'category',
      label: 'Monitor History',
      items: [
        'monitor-history/activity-history',
        'monitor-history/inspect-runs',
        'monitor-history/rerunning-workflow',
        'monitor-history/troubleshooting',
        'monitor-history/status-codes',
      ],
    },
    {
      type: 'category',
      label: 'Manage Projects',
      items: [
        'manage-projects/platform-mgmt',
        'manage-projects/retention-periods',
        'manage-projects/io-data-storage',
        'manage-projects/manage-credentials',
        'manage-projects/user-roles-permissions',
        'manage-projects/notifications',
        'manage-projects/link-to-gh',
        'manage-projects/webhook-auth',
        'manage-projects/workflow-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Manage Users & Credentials',
      items: [
        'manage-users/user-profile',
        'manage-users/user-credentials',
        'manage-users/api-tokens',
      ],
    },
    {
      type: 'category',
      label: 'Get help',
      items: ['get-help/support'],
    },
    {
      type: 'category',
      label: 'Contribute',
      items: [
        'contribute/openfn-roadmap',
        'contribute/writing-code',
        'contribute/writing-docs',
        'contribute/style-guide',
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      items: [
        'migration/converting-triggers'
      ],
    },
    {
      type: 'link',
      label: 'Community Forum', // The label that should be displayed (string).
      href: 'https://community.openfn.org', // The target URL (string).
    },
  ],
};
