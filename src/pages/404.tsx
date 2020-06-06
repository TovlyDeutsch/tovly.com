import React from 'react'
import { graphql, Link } from 'gatsby'
import MetaAndStyles from '../components/MetaAndStyles'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const MissingHeader = styled.h1`
  ${tw`text-4xl text-center mt-8`}
`

const MissingPage = props => {
  const {
    data: {
      site: { siteMetadata },
    },
  } = props

  return (
    <MetaAndStyles
      background="striped"
      meta={{
        siteTitle: siteMetadata.siteTitle,
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

export const missingPageQuery = graphql`
  query MissingPageQuery {
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
