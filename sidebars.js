module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    { type: 'doc', id: 'quick-start' },
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
      items: ['core', { type: 'link', label: 'Library', href: '../library' }],
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
