module.exports = {
  title: 'OpenFn',
  tagline:
    'Data Integration & Interoperability for Health and Humanitarian Interventions',
  url: 'https://docs.openfn.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'openfn',
  projectName: 'docs',
  themeConfig: {
    algolia: {
      apiKey: '9f286454b0688588aa96160ce8754bc0',
      indexName: 'openfn',
    },
    hideableSidebar: true,
    gtag: {
      trackingID: 'UA-57118569-4',
      anonymizeIP: true,
    },
    navbar: {
      title: 'OpenFn/docs',
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
            {
              label: 'Blog',
              href: 'https://blog.openfn.org',
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/documentation',
          editUrl: 'https://github.com/openfn/docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/openfn/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
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
        showReadingTime: true,
      },
    ],
  ],
  scripts: [{ src: '/js/freshChat.js', async: true }],
};
