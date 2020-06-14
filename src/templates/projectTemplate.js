import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt, fields } = markdownRemark

  return (
    <Layout>
      <div>
        <SEO title={frontmatter.title} description={excerpt} />
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.author}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div dangerouslySetInnerHTML={{ __html: fields.est }} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        galleryImages
        title
        author
        est
        ru
      }
      fields {
        est
      }
      excerpt
    }
  }
`
