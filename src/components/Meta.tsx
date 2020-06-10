/**
 * Meta component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export type MetaData = {
  siteTitle: string
  description: string
  siteName: string
  siteUrl: string
  img?: string
}

// TODO validate these tags with some real-world usage e.g. Facebook and Twitter
const Meta: React.FC<MetaData> = ({ siteTitle, description, siteName, siteUrl, img = null }: MetaData) => {
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
      siteTitle={siteTitle}
    >
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:siteTitle" content={siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      {img && <meta property="og:image" content={img} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter.handle} />
      <meta name="twitter:siteTitle" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      {img && <meta name="twitter:image" content={img} />}
    </Helmet>
  )
}

export default Meta
