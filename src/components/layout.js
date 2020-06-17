import React, { useRef, useEffect, Fragment } from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "../components/header"
import { Link, graphql, useStaticQuery } from "gatsby"
import GalleryMarquee from "./GalleryMarquee"
import { AnimatePresence, motion } from "framer-motion"
import SEO from "./seo"
import "../styles/global.css"

const StyledHeader = styled(Header)`
  position: fixed;
  z-index: 5;
  width: 100vw;
  top: 0%;
`

const Content = styled.div`
  margin-top: 160px;
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
  const images = data.allMarkdownRemark.edges.map(({ node }) =>
    node.frontmatter.galleryImages.map(image => {
      const thumbnail = image.replace("/assets/", "/thumbnails/")
      return `${thumbnail.slice(0, thumbnail.lastIndexOf("."))}.jpg`
    })
  )
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
        <StyledHeader />
      </Link>
      <Content>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          const isActive = node.id === id
          return (
            <Fragment key={node.id}>
              <Link
                to={isActive ? "" : node.fields.slug}
                ref={isActive ? activeElementRef : undefined}
                style={
                  isActive
                    ? { filter: "grayscale(0)" }
                    : { filter: "grayscale(1)" }
                }
              >
                <GalleryMarquee
                  isHeader={false}
                  marqueeHeight="320px"
                  images={images[index]}
                  active={isActive}
                />
              </Link>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: { height: "100%", marginBottom: "160px" },
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
      </Content>
    </>
  )
}
