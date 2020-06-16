import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import 'css/rgbSpinner.css'

import Header from 'components/Header'
import MetaAndStyles from 'components/MetaAndStyles'
import github from 'icons/github.svg'
import rightArrow from 'icons/right-arrow.svg'
import { OverviewQuery } from 'types/graphqlTypes'

const SliderWrapper = styled.section`
  ${tw`sm:px-8 px-4 md:px-24`};
`

const Footer = styled.footer`
  ${tw`text-center pb-6 pt-12 text-xs text-gray-light tracking-wider z-50 uppercase`};
`

const Item = styled.div`
  ${tw`bg-black rounded-lg shadow-lg flex`};
  height: 525px;
  @media (max-width: 500px) {
    height: 450px;
  }
`

const ItemContent = styled.div`
  ${tw`py-8 px-6 flex flex-wrap content-between relative`};
`

const Top = styled.div`
  ${tw`z-30 flex flex-col`};
`

const Bottom = styled.div`
  ${tw`z-30`};
`

const Preview = styled.div`
  ${tw`text-white inline-block text-xl relative mb-0 py-1 tracking-wider no-underline uppercase`};
  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    position: relative;
    top: 1px;
    transition: transform 0.3s ease-in-out;
  }
  .project-box:hover & {
    img {
      transform: translateX(10px);
    }
  }
`

const Repo = styled.div`
  ${tw`text-white text-sm inline-block mb-4 py-1 tracking-wider no-underline opacity-75`};
  transition: all 0.4s ease-in-out;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    position: relative;
    top: 2px;
    transition: transform 0.3s ease-in-out;
  }
  .project-box:hover & {
    ${tw`opacity-100`};
  }
`

const Desc = styled.div`
  ${tw`text-sm text-white opacity-75`};
`

const BGImage = styled.div`
  ${tw`absolute inset-0 rounded-lg`};
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw`rounded-lg`};
    filter: brightness(0.5);
    transition: filter 1s linear;
  }
  img:hover {
    filter: brightness(0);
  }
`

const ItemTitle = styled.h2`
  ${tw`text-white text-3xl mb-4`};
`

const Gradient = styled.div`
  ${tw`absolute inset-0 rounded-lg z-20`};
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.75) 100%);
`

const Heading = styled.h2`
  ${tw`text-center xl:text-left text-2xl md:text-4xl m-0 font-semibold`};
`

const Grid = styled.div`
  ${tw`py-8`};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
`

const PubList = styled.ul`
  padding-inline-start: 1.3em;
`

const Index: React.FC<PageProps<OverviewQuery>> = ({ data }: PageProps<OverviewQuery>) => {
  const {
    allProjectsYaml: { edges },
    site: { siteMetadata },
    file: { childImageSharp },
  } = data

  return (
    <MetaAndStyles
      background="striped"
      meta={{
        pageTitle: siteMetadata.siteTitle,
        description: siteMetadata.description,
        siteName: siteMetadata.siteName,
        siteUrl: siteMetadata.siteUrl,
        img: siteMetadata.metaFaceImg,
      }}
    >
      <Header faceFile={childImageSharp} />
      <SliderWrapper>
        <Heading id="publications">Publications</Heading>
        <PubList style={tw`max-w-xl`}>
          <li>
            <b>T. Deutsch</b>, M. Jasbi, S. Shieber
            <br />
            <b>Linguistic Features for Readability Assessment</b>
            <br />{' '}
            <i>
              Oral Presentation. [To appear in] Proceedings of the Fifteenth Workshop on Innovative Use of NLP for
              Building Educational Applications at ACL 2020
            </i>
            <br />
            <a href="/ling_bea_bibtex.txt">[BibTeX]</a>
            <a href="https://arxiv.org/abs/2006.00377"> [Paper] </a>
            <a href="https://github.com/TovlyDeutsch/Linguistic-Features-for-Readability">[Code]</a>
          </li>
          <li>
            A. Saleh, <b>T. Deutsch</b>
            <sup>*</sup>, S. Casper<sup>*</sup>, Y. Belinkov, S. Shieber
            <br />
            <b>Probing Neural Dialog Models for Conversational Understanding</b>
            <br /> <i>[To appear in] Second Workshop on NLP for Conversational AI at ACL 2020</i>
            <br /> <a href="/probing_bibtex.txt">[BibTeX] </a>
            <a href="https://arxiv.org/abs/2006.08331">[Paper]</a>{' '}
            <a href="https://github.com/AbdulSaleh/dialog-probing">[Code]</a>
          </li>
          <li>
            <b>T. Deutsch</b>
            <br />
            <b>Linguistic Features for Readability Assessment</b>
            <br /> <i>Senior Thesis</i>
            <br />
            <a href="/thesis_bibtex.txt">[BibTeX]</a>
            <a href="/Senior_Thesis_Final_Tovly_Deutsch.pdf"> [PDF] </a>
            <OutboundLink href="https://github.com/TovlyDeutsch/Linguistic-Features-for-Readability">
              [Code]
            </OutboundLink>
          </li>
        </PubList>
        <Heading id="projects">Projects</Heading>
        <Grid>
          {edges.map(site => {
            const { id, title, description, cover, url, siteName } = site.node
            return (
              <a href={url} style={{ textDecoration: 'none' }} className="project-box" key={id}>
                <Item>
                  <ItemContent>
                    <Top>
                      <Preview>
                        View on <img src={rightArrow} alt="Arrow" aria-hidden="true" />
                      </Preview>
                      <Repo>
                        {siteName.includes('GitHub') && <img src={github} alt="Arrow" aria-hidden="true" />} {siteName}
                      </Repo>
                      <Desc>{description}</Desc>
                    </Top>
                    <Bottom>
                      <ItemTitle>{title}</ItemTitle>
                    </Bottom>
                    <BGImage>
                      <Gradient />
                      {title === 'RGB Loader Animation' && (
                        <div className="demo-3">
                          <ul className="bokeh">
                            <li />
                            <li />
                            <li />
                          </ul>
                        </div>
                      )}
                      {cover && title !== 'RGB Loader Animation' && (
                        <Img fluid={cover.childImageSharp.fluid} imgStyle={{ objectFit: 'cover' }} />
                      )}
                    </BGImage>
                  </ItemContent>
                </Item>
              </a>
            )
          })}
        </Grid>
      </SliderWrapper>
      <Footer>
        <OutboundLink href="https://github.com/TovlyDeutsch/tovly.com">Design</OutboundLink> by Tovly Deutsch. Forked
        from <OutboundLink href="https://github.com/LeKoArts/gatsby-starter-portfolio"> Lekoarts</OutboundLink>.
      </Footer>
    </MetaAndStyles>
  )
}

export default Index

export const overviewQuery = graphql`
  query Overview {
    file(relativePath: { eq: "profile-photos/face.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 267) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allProjectsYaml {
      edges {
        node {
          id
          title
          url
          description
          siteName
          cover {
            childImageSharp {
              fluid(maxWidth: 350, cropFocus: ATTENTION) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
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
