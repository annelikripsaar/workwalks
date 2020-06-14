import React from "react"
import styled from "@emotion/styled"

const Marquee = styled.div`
  display: flex;
`

export default function GalleryMarquee({ images, className }) {
  return (
    <Marquee className={className}>
      {images.map(imageSrc => (
        <img src={imageSrc} key={imageSrc} alt="" />
      ))}
    </Marquee>
  )
}
