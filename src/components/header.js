import React from "react"
import styled from "@emotion/styled"
import GalleryMarquee from "./GalleryMarquee"

const HeaderImage = styled.img`
  margin-bottom: 0;
  height: 200px;
`

export default function Header(props) {
  return <GalleryMarquee images={["/assets/header.png"]} />
}
