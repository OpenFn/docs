module.exports = {
  title: 'OpenFn',
  tagline: 'Data Integration & Interoperability in ICT4D',
  url: 'https://docs.openfn.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'openfn',
  projectName: 'docs',
  themeConfig: {
    // algolia: {
    //   apiKey: '25626fae796133dc1e734c6bcaaeac3c',
    //   indexName: 'docsearch',
    //   //   // Optional: Algolia search parameters
    //   //   searchParameters: {},
    //   //   //... other Algolia params
    // },
    googleAnalytics: {
      trackingID: 'UA-57118569-4',
      anonymizeIP: true, // Should IPs be anonymized?
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
        // {
        //   to: 'blog',
        //   label: 'Blog',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/openfn/docs',
          label: 'GitHub',
          position: 'right',
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
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
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
              label: 'Articles',
              to: 'articles',
            },
            {
              label: 'GitHub',
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
          // Please change this to your repo.
          routeBasePath: '/documentation',
          editUrl: 'https://github.com/openfn/docs/edit/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/openfn/docs/edit/master/',
        // },
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
      { id: 'articles', routeBasePath: 'articles', path: './articles' },
    ],
  ],
  scripts: [{ src: './freshChat.js', async: true }],
};
