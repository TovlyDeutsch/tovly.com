import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MetaData } from 'types/data-types'
import { MetaQuery } from 'types/graphqlTypes'

// TODO validate these tags with some real-world usage e.g. Facebook and Twitter
const Meta: React.FC<MetaData> = ({ pageTitle, description, siteName, siteUrl, img = null }: MetaData) => {
  const { site }: MetaQuery = useStaticQuery(
    graphql`
      query meta {
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
      siteTitle={pageTitle}
    >
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      {img && <meta property="og:image" content={img} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter.handle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {img && <meta name="twitter:image" content={img} />}
    </Helmet>
  )
}

export default Meta
