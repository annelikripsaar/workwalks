import React, { useState } from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const Marquee = styled.div`
  -webkit-box-shadow: 0px -9px 16px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px -9px 16px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px -9px 16px 0px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  --offset: 0vw;
  --move-initial: calc(-50% + var(--offset));
  --move-final: calc(0% + var(--offset));

  margin-top: ${props => (props.isHeader ? "0" : "-160px")};

  &:hover > div {
    animation-play-state: paused;
  }
`

const marquee = keyframes`
  0% {
      transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
      transform: translate3d(var(--move-final), 0, 0);
  }
`

const MarqueeInner = styled.div`
  display: flex;
  overflow: visible;
  flex-wrap: nowrap;
  /* siin peab arvutama kui pikk ta tegelikult tuleb */
  width: 200vw;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: ${marquee} 30s linear infinite;
  animation-play-state: running;

  img {
    height: ${props => props.height};
    margin-bottom: 0;
    pointer-events: all;
  }
`

export default function GalleryMarquee({
  images,
  className,
  marqueeHeight,
  isHeader,
  active,
}) {
  const [galleryOpen, setGalleryOpen] = useState(false)

  function toggleGallery(event) {
    if (active) {
      event.preventDefault()
      setGalleryOpen(open => !open)
    }
  }

  return (
    <>
      <Marquee className={className} isHeader={isHeader}>
        <MarqueeInner height={marqueeHeight}>
          {images.map(imageSrc => (
            <img
              src={imageSrc}
              key={imageSrc}
              alt=""
              href={""}
              key={imageSrc}
              onClick={toggleGallery}
            />
          ))}
          {images.map(imageSrc => (
            <img
              src={imageSrc}
              key={imageSrc}
              alt=""
              href={""}
              key={imageSrc}
              onClick={toggleGallery}
            />
          ))}
        </MarqueeInner>
      </Marquee>
      {galleryOpen && console.log("open")}
    </>
  )
}
