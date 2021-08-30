module.exports = {
  pathPrefix: `/pension`,
  assetPrefix: `http://elmiraalif.com/`,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    { resolve: `gatsby-plugin-sharp`, options: {
      quality: 100
    } },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Johnson & Johnson`,
        short_name: `J & J`,
        start_url: `/`,
        background_color: `#f4f4f4`,
        theme_color: `#da0025`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `fr`],
        // language file path
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
