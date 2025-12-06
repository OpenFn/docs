const path = require('path');

module.exports = {
  title: 'OpenFn/docs',
  tagline:
    'The leading digital public good for workflow automation, OpenFn makes ICT4D more efficient.',
  url: 'https://docs.openfn.org',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'openfn',
  projectName: 'docs',
  markdown: {
    hooks: { onBrokenMarkdownLinks: 'warn' },
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'OpenFn, workflow automation, ICT4D, integration, automation, documentation',
      },
      {
        name: 'description',
        content:
          'OpenFn documentation - The leading digital public good for workflow automation, making ICT4D more efficient.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@openfn' },
      { name: 'twitter:title', content: 'OpenFn Documentation' },
      {
        name: 'twitter:description',
        content:
          'The leading digital public good for workflow automation, OpenFn makes ICT4D more efficient.',
      },
      {
        name: 'twitter:image',
        content: 'https://docs.openfn.org/img/og-image.png',
      },
    ],
    algolia: {
      appId: 'O729P2PJGT',
      apiKey: 'a929e9c0d8fb90f86a1f39f8b6f1816e',
      indexName: 'openfn',
      contextualSearch: true,
    },
    navbar: {
      title: 'OpenFn',
      logo: {
        alt: 'OpenFn',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'get-started/home',
          label: 'Docs',
        },
        {
          to: 'adaptors',
          label: 'Adaptors',
          position: 'left',
        },
        {
          to: 'articles',
          label: 'Articles',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/openfn/docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'This Site',
          items: [
            // {
            //   type: 'doc',
            //   docId: 'intro',
            //   label: 'Docs',
            // },
            {
              to: 'articles',
              label: 'Articles',
            },
            {
              to: 'adaptors',
              label: 'Adaptors',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://community.openfn.org',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/openfn',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/openfn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'OpenFn.org',
              to: 'https://www.openfn.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/openfn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Function Group LLC`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars-main.js'),
          routeBasePath: '/documentation',
          editUrl: 'https://github.com/openfn/docs/edit/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2 ⚡',
            },
            legacy: {
              banner: 'unmaintained',
              label: 'v1.105',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-5RNRM5NC',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, 'generate-library'),
      {
        apiUrl: 'https://v1.openfn.org/api/public',
      },
    ],
    [path.resolve(__dirname, 'generate-adaptors'), {}],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'adaptors',
        path: 'adaptors',
        routeBasePath: 'adaptors',
        sidebarPath: require.resolve('./sidebars-adaptors.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'articles',
        routeBasePath: 'articles',
        path: 'articles',
        blogSidebarCount: 6,
        showReadingTime: true,
        editUrl: 'https://github.com/openfn/docs/edit/main',
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Open Function Group, LLC.`,
          title: 'OpenFn Help Articles',
        },
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/documentation/contribute/roadmap',
            from: '/documentation/contribute/openfn-roadmap',
          },
          // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
      },
    ],
  ],
  scripts: [
    {
      'data-jsd-embedded data-key': '8583229a-a951-405e-b269-25a100d04641',
      'data-base-url': 'https://jsd-widget.atlassian.com',
      src: 'https://jsd-widget.atlassian.com/assets/embed.js',
      async: true,
    },
  ],
};
