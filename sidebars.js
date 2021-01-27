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
        'getting-started/use-cases',
        'getting-started/deployment-options',
        'getting-started/quick-start',
        'getting-started/connecting-applications',
        'getting-started/language-glossary',
        'getting-started/designing-integrations',
        'getting-started/automation-inspiration',
        'getting-started/faq',
        'platform',
        'trouble-shooting',
        'release-notes',
        'build/diy',
        'portability',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      items: [
        'design/design-integration',
      ],
    },
    {
      type: 'category',
      label: 'Build',
      items: [
        'inbox',
        'source-apps',
        // 'tools/bamboohr',
        'tools/commcare',
        'tools/godata',
        'tools/kobo-toolbox',
        'tools/salesforce',
        'for-devs',
        'build/connecting-applications',
        'build/jobs',
        { type: 'link', label: 'The Library', href: '../../library' },
        'jobs/core',
        'jobs/operations',
        'jobs/multiple-operations',
        'jobs/errors',
        // TODO:@Jed maybe we get put jobs library link in build/jobs ##overview?
        'build/credentials',
        'build/triggers',
        'build/messages',
        'build/runs',
        'build/troubleshooting',
        'build/diy',
        'build/appendix',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/platform',
        'deploy/microservices',
        'deploy/devtools',
        'deploy/core',
        'deploy/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Manage',
      items: [
        'manage/placeholder',
      ],
    },
    {
      type: 'doc',
      id: 'faqs',
    },
    {
      type: 'category',
      label: 'Writing Docs',
      items: ['style-guide'],
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
