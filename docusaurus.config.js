const path = require('path');

module.exports = {
  title: 'OpenFn/docs',
  tagline:
    'Data Integration & Interoperability for Health and Humanitarian Interventions',
  url: 'https://docs.openfn.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'openfn',
  projectName: 'docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  themeConfig: {
    algolia: {
      apiKey: '9f286454b0688588aa96160ce8754bc0',
      indexName: 'openfn',
    },
    hideableSidebar: true,
    gtag: {
      trackingID: 'G-TFLLYHHM0C',
    },
    navbar: {
      title: 'OpenFn',
      logo: {
        alt: 'OpenFn',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'documentation/',
          activeBasePath: 'documentation',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'library',
          label: 'Library',
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
          type: 'localeDropdown',
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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'This Site',
          items: [
            {
              label: 'Documentation',
              to: 'documentation',
            },
            {
              label: 'Library',
              to: 'library',
            },
            {
              label: 'Articles',
              to: 'articles',
            },
            {
              label: 'Blog',
              to: 'blog',
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
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, 'job-library'),
      {
        apiUrl: 'https://www.openfn.org/api/public',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'library',
        path: 'library',
        routeBasePath: 'library',
        sidebarPath: require.resolve('./sidebars-library.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'articles',
        routeBasePath: 'articles',
        path: './articles',
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
  scripts: [{ src: '/js/freshChat.js', async: true }],
};
