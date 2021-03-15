module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        // 'getting-started/use-cases',
        // 'getting-started/deployment-options',
        'getting-started/quick-start',
        // 'getting-started/designing-integrations',
        // 'getting-started/glossary',
        // 'getting-started/automation-inspiration',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Design',
    //   items: [
    //     'design/design-integration',
    //   ],
    // },
    {
      type: 'category',
      label: 'Build',
      items: [
        {
          type: 'category',
          label: 'Jobs',
          items: [
            'build/jobs',
            'jobs/understanding',
            'jobs/operations',
            'jobs/multiple-operations',
            'jobs/state',
            { type: 'link', label: 'The Library 📖', href: '../../library' },
          ],
        },
        'build/credentials',
        'build/triggers',
        {
          type: 'category',
          label: 'Live Data',
          items: ['build/inbox', 'source-apps'],
        },
        {
          type: 'category',
          label: 'Devtools',
          items: ['deploy/devtools', 'extra_tools_adaptors'],
        },
        'build/adaptors',
        // 'build/messages',
        // 'build/runs',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/options',
        'deploy/platform',
        'deploy/microservices',
        'deploy/core',
      ],
    },
    {
      type: 'category',
      label: 'Manage',
      items: [
        'manage/platform-mgmt',
        'trouble-shooting',
        'jobs/errors',
        // 'manage/placeholder',
        'release-notes',
        'portability',
      ],
    },
    {
      type: 'category',
      label: 'Apps',
      items: [
        'apps/connect-anything',
        // 'apps/bamboohr',
        'apps/cht',
        'apps/commcare',
        'apps/godata',
        'apps/google-sheets',
        'apps/kobo-toolbox',
        'apps/magpi',
        'apps/odk',
        'apps/ona',
        'apps/powerbi',
        'apps/salesforce',
        'apps/survey-cto',
        'apps/tableau',
      ],
    },
    {
      type: 'doc',
      id: 'faqs',
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        // 'writing-code',
        'for-devs',
        'gsoc',
        'writing-docs',
        'style-guide',
      ],
    },
    {
      type: 'doc',
      id: 'about',
    },
    {
      type: 'link',
      label: 'Community Forum', // The label that should be displayed (string).
      href: 'https://community.openfn.org', // The target URL (string).
    },
  ],
};
