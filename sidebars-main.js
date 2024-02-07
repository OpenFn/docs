module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'get-started/home',
        // 'intro/terminology',
        // 'intro/standards',
        // 'intro/security-compliance',
        // 'intro/security',
        // 'intro/implementation-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Design Workflows',
      items: [
        //'design/overview',
        'design/design-overview',
        'design/discovery',
        'design/design-workflow',
        'design/api-discovery',
        'design/mapping-specs',
        'design/workflow-specs',
        //'design/discovery'
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorials',
    //   items: ['tutorials/kobo-to-dhis2'],
    // },
    {
      type: 'category',
      label: 'Build & Manage Workflows',
      items: [
        'build/tutorial',
        'build/limits',
        // 'build/triggers'
      ],
    },
    {
      type: 'category',
      label: 'Build (For Developers)',
      items: [
        'build-for-developers/cli-intro',
        'build-for-developers/cli-usage',
        'build-for-developers/cli-walkthrough',
        'build-for-developers/cli-challenges',
        'build-for-developers/build-with-api',
        'build-for-developers/security-for-devs',
        //'build-for-developers/for-devs'
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: ['deploy/options', 'deploy/requirements', 'deploy/portability'],
    },
    {
      type: 'category',
      label: 'Monitor History',
      items: [
        'monitor-history/activity-history',
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

      ],
    },
    {
      type: 'category',
      label: 'Manage Users & Credentials',
      items: ['manage-users/user-profile'],
    },
    {
      type: 'category',
      label: 'Get Help',
      items: ['get-help/support'],
    },
    {
      type: 'category',
      label: 'Contribute - Docs & Roadmap',
      items: [
        'contribute/openfn-roadmap',
        // 'contribute/roadmap',
        // 'contribute/writing-code',
        'contribute/writing-docs',
        'contribute/style-guide',
      ],
    },
    {
      type: 'link',
      label: 'Community Forum', // The label that should be displayed (string).
      href: 'https://community.openfn.org', // The target URL (string).
    },
  ],
};
