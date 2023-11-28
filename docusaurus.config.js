const path = require('path');

module.exports = {
  title: 'OpenFn/docs',
  tagline:
    'The leading digital public good for workflow automation, OpenFn makes ICT4D more efficient.',
  url: 'https://docs.openfn.org',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'openfn',
  projectName: 'docs',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    algolia: {
      appId: 'O729P2PJGT',
      apiKey: '48a4a6832439f7e5b2f4e44c3c3aa51e',
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
          docId: 'intro',
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
          to: 'blog',
          label: 'Blog',
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
              to: 'adaptors',
              label: 'Adaptors',
            },
            {
              to: 'articles',
              label: 'Articles',
            },
            {
              to: 'blog',
              label: 'Blog',
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
              label: 'Github',
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
          lastVersion: 'legacy',
          versions: {
            current: {
              banner: 'unreleased',
              label: 'Lightning 🚧',
            },
            legacy: {
              banner: 'none',
              label: 'Platform (v1)',
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/openfn/docs/edit/main',
          blogSidebarCount: 6,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Open Function Group, LLC.`,
            title: 'The OpenFn Blog',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-TFLLYHHM0C',
        },
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, 'generate-library'),
      {
        apiUrl: 'https://www.openfn.org/api/public',
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
