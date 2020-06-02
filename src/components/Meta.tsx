/**
 * Meta component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export type MetaData = {
  siteTitle: string
  description: string
  siteName: string
  siteUrl: string
  metaFaceImg?: string
}

// TODO validate these tags with some real-world usage e.g. Facebook and Twitter
const Meta = ({ title, description, siteName, siteUrl, pageImage }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter {
                handle
              }
            }
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
    >
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      {pageImage && <meta property="og:image" content={pageImage} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter.handle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {pageImage && <meta name="twitter:image" content={pageImage} />}
    </Helmet>
  )
}

Meta.defaultProps = {
  pageImage: null,
}

Meta.propTypes = {
  description: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  pageImage: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Meta
