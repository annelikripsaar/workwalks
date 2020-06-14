import React from "react"
import styled from "@emotion/styled"

const Marquee = styled.div`
  display: flex;
  filter: grayscale(1);
`

export default function GalleryMarquee({ images }) {
  return (
    <Marquee>
      {images.map(imageSrc => (
        <img src={imageSrc} key={imageSrc} alt="" />
      ))}
    </Marquee>
  )
}
