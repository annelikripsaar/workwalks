import React, { useRef, useEffect, Fragment } from "react"
import { Global, css } from "@emotion/core"
import Header from "../components/header"
import { Link, graphql, useStaticQuery } from "gatsby"
import GalleryMarquee from "./GalleryMarquee"
import styled from "@emotion/styled"
import { AnimatePresence, motion } from "framer-motion"
import SEO from "./seo"

const BWGalleryMarquee = styled(GalleryMarquee)`
  filter: grayscale(1);
`

export default function Layout({ children, pageContext: { id } }) {
  const data = useStaticQuery(graphql`
    query ListQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___author], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              galleryImages
            }
          }
        }
      }
    }
  `)
  const activeElementRef = useRef()
  /*
  useEffect(() => {
    if (activeElementRef.current && id) {
      activeElementRef.current.scrollIntoView()
    }
  }, [id, activeElementRef.current])*/
  return (
    <>
      <SEO title="Home"></SEO>
      <Global
        styles={css`
          body {
            margin: 0;
            background-color: #fe5000;
          }
        `}
      />
      <Link to={"/"}>
        <Header />
      </Link>

      {data.allMarkdownRemark.edges.map(({ node }) => {
        const isActive = node.id === id
        return (
          <Fragment key={node.id}>
            <Link
              to={isActive ? "" : node.fields.slug}
              ref={isActive ? activeElementRef : undefined}
              style={
                isActive
                  ? { pointerEvents: "none", filter: "grayscale(0)" }
                  : { pointerEvents: "initial", filter: "grayscale(1)" }
              }
            >
              <GalleryMarquee images={node.frontmatter.galleryImages} />
            </Link>
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: { height: "auto" },
                    closed: { height: 0 },
                  }}
                >
                  {children}
                </motion.div>
              )}
            </AnimatePresence>
          </Fragment>
        )
      })}
    </>
  )
}
