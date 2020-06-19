import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, title, url }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          url
          image
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const pageTitle = title || site.siteMetadata.title
  const pageUrl = url || site.siteMetadata.url
  const pageImage = `${site.siteMetadata.url}${site.siteMetadata.image}`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: pageTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: `og:image`,
          content: `/assets/workwalks-imglink.jpg`,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:image`,
          content: `/assets/workwalks-imglink.jpg`,
        },
        {
          name: "twitter:title",
          content: pageTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {pageUrl && <meta property="og:url" content={pageUrl} />}
      {pageTitle && <meta property="og:title" content={pageTitle} />}
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      {pageImage && <meta property="og:image" content={pageImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      {pageTitle && <meta name="twitter:title" content={pageTitle} />}
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {pageImage && <meta name="twitter:image" content={pageImage} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
