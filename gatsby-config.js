module.exports = {
  siteMetadata: {
    title: `Liz Rush`,
    description: `this is Liz Rush's personal website`,
    author: `@lizmrush`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
