module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    { type: 'doc', id: 'quick-start' },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
      ],
    },
    {
      type: 'category',
      label: 'Designing Integrations',
      items: [
        'design/design-integration',
        ''
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
