module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    { type: 'doc', id: 'quick-start' },
    {
      type: 'doc',
      id: 'faqs',
    },
    {
      type: 'doc',
      id: 'about',
    },
    {
      type: 'category',
      label: 'The OpenFn.org Platform',
      items: [
        'documentation',
        'trouble-shooting',
        'appendix',
        'release-notes',
        'diy',
      ],
    },
    {
      type: 'category',
      label: 'Connecting Apps',
      items: ['kobo-toolbox', 'commcare', 'source-apps', 'for-devs'],
    },
    {
      type: 'category',
      label: 'Writing Jobs',
      items: ['core', 'job-library'],
    },
    {
      type: 'category',
      label: 'Writing Docs',
      items: ['style-guide'],
    },
    {
      type: 'link',
      label: 'Community Forum', // The label that should be displayed (string).
      href: 'https://community.openfn.org', // The target URL (string).
    },
  ],
};
