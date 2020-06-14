const { createFilePath } = require("gatsby-source-filesystem")
const remark = require("remark")
const remarkHTML = require("remark-html")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `projects`,
    })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    const est = remark()
      .use(remarkHTML)
      .processSync(node.frontmatter.est)
      .toString()
    createNodeField({
      node,
      name: "est",
      value: est,
    })

    const ru = remark()
      .use(remarkHTML)
      .processSync(node.frontmatter.ru)
      .toString()
    createNodeField({
      node,
      name: "ru",
      value: ru,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___author] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: projectTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })
}
