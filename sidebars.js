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
        'build/connecting-applications',
        'build/jobs',
        'build/credentials',
        'build/triggers',
        'build/messages',
        'build/runs',
        'build/troubleshooting',
        'build/diy',
        'build/job-library',
      ],
    },
    {
      type: 'category',
      label: 'Integration Platform',
      items: [
        'platform',
        'trouble-shooting',
        'appendix',
        'release-notes',
        'diy',
      ],
    },
    {
      type: 'category',
      label: 'Connecting Apps',
      items: [
        'source-apps',
        // 'tools/bamboohr',
        'tools/commcare',
        'tools/godata',
        'tools/kobo-toolbox',
        'for-devs',
      ],
    },
    {
      type: 'category',
      label: 'Writing Jobs',
      items: [
        'jobs/core',
        'jobs/operations',
        'jobs/multiple-operations',
        { type: 'link', label: 'The Library', href: '../../library' },
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
