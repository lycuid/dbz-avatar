const Package = require('./package');

module.exports = {
  siteMetadata: {
    title: `Dragonball Avatar Generator.`,
    description: Package.description,
    author: `@lycuid`,
  },
  pathPrefix: `/p/${Package.name}`,
  assetPrefix: `https://cdn.lycuid.dev`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/Images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: Package.name,
        short_name: Package.name,
        start_url: `/`,
        background_color: `#70a1ff`,
        theme_color: `#d59f78`,
        display: `minimal-ui`,
        icon: `src/Images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: false,
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
