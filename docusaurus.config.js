// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Siloé',
  tagline: "L'identité des adorateurs",

  future: {
    v4: true,
  },

  url: 'https://fabriceHategekimana.github.io',
  baseUrl: '/groupe_siloe.github.io/',

  organizationName: 'fabriceHategekimana',
  projectName: 'groupe_siloe.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  plugins: [
    require.resolve('./src/plugins/latest-programme'),
  ],

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/siloe-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Siloé',
        style: 'dark',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'chantsSidebar',
            position: 'left',
            label: 'Chants',
          },
          {
            type: 'docSidebar',
            sidebarId: 'programmesSidebar',
            position: 'left',
            label: 'Programmes',
          },
          {
            type: 'docSidebar',
            sidebarId: 'choraleSidebar',
            position: 'left',
            label: 'La Chorale',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Chants',
                to: '/docs/chants/repertoire',
              },
              {
                label: 'Programmes',
                to: '/docs/programmes/liste-programmes',
              },
            ],
          },
          {
            title: 'La Chorale',
            items: [
              {
                label: 'Charte',
                to: '/docs/vie-de-la-chorale/charte',
              },
              {
                label: 'Règlement',
                to: '/docs/vie-de-la-chorale/reglement',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Siloé - Choeur d'Adoration`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
