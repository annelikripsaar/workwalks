import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { Link } from "gatsby"
import Header from "../components/header"

const Container = styled.div``

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Link to={"/"}>
        <Header />
      </Link>

      <Container>{children}</Container>
    </>
  )
}
