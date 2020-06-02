import React from 'react'
import { graphql } from 'gatsby'
import MetaAndStyles from '../components/MetaAndStyles'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { BlueHoverLink } from '../pages/blog'

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
        Visit Tovly's <BlueHoverLink to="/">portfolio</BlueHoverLink> or <BlueHoverLink to="/blog">blog</BlueHoverLink>.
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
