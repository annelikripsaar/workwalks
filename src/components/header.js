import React from "react"
import styled from "@emotion/styled"

const HeaderImage = styled.img`
  margin-bottom: 0;
`

export default function Header(props) {
  return <HeaderImage src="/assets/header.png" alt="" />
}
