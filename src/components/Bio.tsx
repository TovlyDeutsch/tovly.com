import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { BioQuery } from 'types/graphqlTypes'

type BioProps = {
  justify?: string
}

const BioWrapper = styled.div<BioProps>`
  ${tw`flex my-4 items-center`};
  ${props => props.justify === 'center' && tw`justify-center max-w-lg mx-auto`};
`

const Bio: React.FC<BioProps> = ({ justify = 'center' }: BioProps) => {
  const data: BioQuery = useStaticQuery(graphql`
    query Bio {
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
        Follow me on <a href="https://www.youtube.com/channel/UCoYCQPyiv_y4QAHinPOFGHA">Youtube</a>,{' '}
        <a href="https://twitter.com/tovly_videos?ref_src=twsrc%5Etfw">Twitter</a>,{' '}
        <a href="https://www.facebook.com/Tovly-113314017090957">FB</a>, or <Link to="/rss.xml"> RSS</Link> | Check out
        my<Link to="/"> other work</Link>
      </p>
    </BioWrapper>
  )
}

export default Bio
