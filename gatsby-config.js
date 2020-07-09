require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Hui, Ching-ye`,
    description: `Hui, Ching-ye Website`,
    author: '@kennethmarkhui',
  },
  plugins: [
    `gatsby-plugin-flow`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          containers: './containers',
          images: './images',
          styles: './styles',
          utils: './utils',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hui, Ching-ye`,
        short_name: `huichingye`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-theme-localization`,
      options: {
        languages: ['en', 'zh'],
        namespaces: ['header', 'home', 'about'],
        localesDir: './src/locales',
        allowIndex: false,
        defaultLng: 'en',
        i18next: {
          // whatever you want to pass to react-i18next
          fallbackLng: 'en',
          debug: process.env.NODE_ENV !== 'production',
          preload: ['en', 'zh'],
          defaultNS: ['header'],
        },
        i18nPlugin: {
          // whatever you want to pass to gatsby-plugin-i18n
          langKeyDefault: 'en',
          useLangKeyLayout: false,
        },
      },
    },
  ],
};
