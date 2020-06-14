import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`

const SiteTitle = styled.h3`
  margin-bottom: ${rhythm(2)};
  display: inline-block;
  font-style: normal;
`

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Container>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Link to={"/"}>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      </Link>
      {children}
    </Container>
  )
}
