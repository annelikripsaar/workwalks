import React, { useState } from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { screenSize } from "../styles/screensizes"

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

  ${screenSize.large} {
    margin-top: ${props => (props.isHeader ? "0" : "-240px")};
  }

  &:hover > div {
    animation-play-state: paused;
  }

  &.gray img {
    filter: grayscale(1);
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

    ${screenSize.large} {
      height: calc(${props => props.height} * 1.5);
    }
  }
`

export default function GalleryMarquee({
  images,
  className,
  marqueeHeight,
  isHeader,
  onClick,
}) {
  return (
    <Marquee className={className} isHeader={isHeader}>
      <MarqueeInner height={marqueeHeight}>
        {images.map((imageSrc, index) => (
          <img
            src={imageSrc}
            key={index}
            alt=""
            href={""}
            onClick={event => onClick(event, index)}
            data-attribute="SRL"
          />
        ))}
        {images.map((imageSrc, index) => (
          <img
            src={imageSrc}
            key={index + images.length}
            alt=""
            href={""}
            onClick={event => onClick(event, index)}
            data-attribute="SRL"
          />
        ))}
      </MarqueeInner>
    </Marquee>
  )
}
