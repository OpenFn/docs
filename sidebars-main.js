module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
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
      label: 'Design Workflows',
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
      label: 'Build & Manage Workflows',
      items: [
        'build/tutorial',
        'developers/limits',
        // 'build/triggers'
      ],
    },
    {
      type: 'category',
      label: 'Build Workflows (For Developers)',
      items: [
        'developers/cli',
        'developers/cli-usage',
        'developers/cli-tutorial',
        'developers/build-with-api',
        'developers/security-for-devs',
        //'developers/for-devs'
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
      items: ['history/activity-history'],
    },
    {
      type: 'category',
      label: 'Manage Projects',
      items: ['projects/platform-mgmt'],
    },
    {
      type: 'category',
      label: 'Manage Users & Credentials',
      items: ['users/user-profile'],
    },
    {
      type: 'category',
      label: 'Get Help',
      items: ['support/support'],
    },
    {
      type: 'category',
      label: 'Contribute - Docs & Roadmap',
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
