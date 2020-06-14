import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import GalleryMarquee from "../components/GalleryMarquee"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const TextMarquee = styled.div`
  position: relative;
  overflow: hidden;
  --offset: 30vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-125% + var(--offset));

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

const TextMarqueeInner = styled.div`
  display: flex;
  overflow: visible;
  flex-wrap: nowrap;
  max-height: 300px;
  width: 3600px;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: ${marquee} 40s linear infinite;
  animation-play-state: running;

  & > span {
    min-width: 1200px;
    column-count: 3;
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt, fields } = markdownRemark

  return (
    <>
      <SEO title={frontmatter.title} description={excerpt} />
      <div>
        <GalleryMarquee images={frontmatter.galleryImages} />
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.author}</h2>
        <TextMarquee>
          <TextMarqueeInner>
            <span dangerouslySetInnerHTML={{ __html: fields.ru }} />
            <span dangerouslySetInnerHTML={{ __html: html }} />
            <span dangerouslySetInnerHTML={{ __html: fields.est }} />
            <span dangerouslySetInnerHTML={{ __html: fields.ru }} />
            <span dangerouslySetInnerHTML={{ __html: html }} />
            <span dangerouslySetInnerHTML={{ __html: fields.est }} />
          </TextMarqueeInner>
        </TextMarquee>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        galleryImages
        title
        author
      }
      fields {
        est
        ru
      }
      excerpt
    }
  }
`
