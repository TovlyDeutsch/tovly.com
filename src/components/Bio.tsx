/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

type BioProps = {
  justify?: string
}

const BioWrapper = styled.div<BioProps>`
  ${tw`flex my-4 items-center`};
  ${props =>
    props.justify === 'center' &&
    css`
      justify-content: ${props.justify};
      max-width: 70%;
      margin: 0 auto 0 auto;
    `};
`

const Bio = ({ justify = 'center' }: BioProps) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/face.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <BioWrapper justify={justify}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          ...tw`mr-2`,
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>, researcher, software engineer, and filmmaker |{` `}
        <Link to="/">Check out my other work</Link>
      </p>
    </BioWrapper>
  )
}

export default Bio
