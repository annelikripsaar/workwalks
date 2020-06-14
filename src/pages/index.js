import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import GalleryMarquee from "../components/GalleryMarquee"

export default function Home({ data }) {
  return (
    <>
      <SEO />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.id}>
          <GalleryMarquee images={node.frontmatter.galleryImages} />
        </Link>
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___author], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            galleryImages
            title
            author
          }
        }
      }
    }
  }
`
