module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
        'getting-started/integration-toolkit',
        'getting-started/so-you-want-to-integrate',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'build/example-build',
        'getting-started/terminology',
        'getting-started/implementation-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      items: ['design/design-quickstart', 'getting-started/glossary'],
    },
    {
      type: 'category',
      label: 'Build',
      items: [
        {
          type: 'category',
          label: 'Jobs',
          items: [
            'build/jobs',
            'jobs/job-design-intro',
            'jobs/understanding',
            'jobs/operations',
            'jobs/multiple-operations',
            'jobs/state',
            'jobs/each',
            'jobs/job-studio',
            'jobs/editing_locally',
            'jobs/working_with_branches',
            { type: 'link', label: 'The Library 📖', href: '/library' },
          ],
        },
        'build/triggers',
        'build/credentials',
        {
          type: 'category',
          label: 'Live Data',
          items: ['build/inbox', 'source-apps'],
        },
        'devtools/home',
        'build/adaptors',
        'build/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/options',
        'portability',
        'deploy/platform',
        'microservice/home',
        'instant-openhie',
        'deploy/diy',
      ],
    },
    {
      type: 'category',
      label: 'Manage',
      items: [
        'manage/platform-mgmt',
        'manage/troubleshooting-tips-on-platform',
        'jobs/errors',
        'jobs/limits',
        'release-notes',
      ],
    },
    {
      type: 'category',
      label: 'Apps',
      items: [
        'apps/anything',
        'apps/cht',
        'apps/ckan',
        'apps/commcare',
        'apps/dhis2',
        'apps/godata',
        'apps/google-sheets',
        'apps/kobo-toolbox',
        'apps/magpi',
        'apps/moodle',
        'apps/odk',
        'apps/ona',
        'apps/postgresql',
        'apps/powerbi',
        'apps/primero',
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
        'roadmap',
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
