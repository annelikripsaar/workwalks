module.exports = {
  siteMetadata: {
    title: "Work Walks",
    description: `An online exhibition of thesis projects completed in isolation by the graduating class of the Department of Graphic Design of the Estonian Academy of Arts.`,
    author: `Estonian Academy of Arts' Department of Graphic Design`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/projects`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
  ],
}
