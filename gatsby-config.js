require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
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
        description: `Hui Ching-ye was an artist who specialized in calligraphy, stamp carving and print-making.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        localize: [
          {
            start_url: `/zh/`,
            lang: `zh`,
            name: `許晴野`,
            short_name: `許晴野`,
            description: `許晴野是一位專門研究書法，郵票雕刻和版畫的藝術家。`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `zh`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
        // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
        fallbackLanguage: `en`,
      },
    },
  ],
};
