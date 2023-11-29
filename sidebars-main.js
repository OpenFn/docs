module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Intro',
      items: [
        'intro/home',
        // 'intro/terminology',
        // 'intro/standards',
        // 'intro/security-compliance',
        // 'intro/security',
        // 'intro/implementation-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Designing Workflows',
      items: [
        'design/overview',
        //'design/discovery'
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/kobo-to-dhis2'],
    },
    {
      type: 'category',
      label: 'Build Workflows',
      items: [
        'build/tutorial',
        'developers/limits',
        // 'build/triggers'
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/cli',
        //'developers/for-devs'
      ],
    },
    {
      type: 'category',
      label: 'Local Deployment',
      items: ['deploy/options', 'deploy/requirements', 'deploy/portability'],
    },

    {
      type: 'category',
      label: 'Monitor Activity History',
      items: ['history/activity-history'],
    },
    {
      type: 'category',
      label: 'Manage Projects',
      items: ['projects/platform-mgmt'],
    },
    {
      type: 'category',
      label: 'User Management',
      items: ['users/user-profile'],
    },
    {
      type: 'category',
      label: 'Support',
      items: ['support/support'],
    },
    {
      type: 'category',
      label: 'Docs & Roadmap',
      items: [
        'contributing/openfn-roadmap',
        // 'contributing/roadmap',
        // 'contributing/writing-code',
        // 'contributing/writing-docs',
        // 'contributing/style-guide',
      ],
    },
    {
      type: 'link',
      label: 'Community Forum', // The label that should be displayed (string).
      href: 'https://community.openfn.org', // The target URL (string).
    },
  ],
};
