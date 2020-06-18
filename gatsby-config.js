module.exports = {
  siteMetadata: {
    title: "Work Walks",
    description: `An online exhibition of thesis projects completed in isolation by the graduating class of the Department of Graphic Design of the Estonian Academy of Arts.`,
    author: `Estonian Academy of Arts' Department of Graphic Design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout`),
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
