import React from "react"
import styled from "@emotion/styled"
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

const StyledLink = styled(Link)`
  float: right;
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
      <Link to={"/"}>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      </Link>
      <StyledLink to={"/about/"}>About</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
      {children}
    </Container>
  )
}
