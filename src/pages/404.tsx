import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import MetaAndStyles from '../components/MetaAndStyles'
import { MissingPageQueryQuery } from '../types/graphqlTypes'

const MissingHeader = styled.h1`
  ${tw`text-4xl text-center mt-8`}
`

const MissingPage: React.FC<missingPageQuery> = ({ data }: PageProps<MissingPageQueryQuery>) => {
  const {
    site: { siteMetadata },
  } = data

  return (
    <MetaAndStyles
      background="striped"
      meta={{
        pageTitle: 'Page not found',
        description: siteMetadata.description,
        siteName: siteMetadata.siteName,
        siteUrl: siteMetadata.siteUrl,
        img: siteMetadata.metaFaceImg,
      }}
    >
      <MissingHeader>404 error, page not found</MissingHeader>
      <p style={tw`text-center`}>
        Visit Tovly's <Link to="/">portfolio</Link> or <Link to="/blog">blog</Link>.
      </p>
    </MetaAndStyles>
  )
}

export default MissingPage

export const pageQuery = graphql`
  query missingPageQuery {
    site {
      siteMetadata {
        siteTitle
        metaFaceImg
        description
        siteUrl
        siteName
      }
    }
  }
`
